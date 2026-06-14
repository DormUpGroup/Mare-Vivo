"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "./LanguageProvider";

const TIME_OPTIONS = ["12:00", "13:00", "14:00", "19:00", "20:00", "21:00", "22:00"];
const GUEST_OPTIONS = Array.from({ length: 10 }, (_, i) => i + 1);

function todayISO() {
  const d = new Date();
  return d.toISOString().slice(0, 10);
}

const inputBase =
  "w-full rounded-xl border border-deep/15 bg-card px-4 py-3.5 text-heading transition duration-200 placeholder:text-muted/60 focus:border-deep focus:outline-none focus:ring-2 focus:ring-deep/25 focus:ring-offset-0 hover:border-deep/25";
const inputError =
  "border-red-400 bg-red-50/50 focus:border-red-400 focus:ring-red-400/20";
const labelClass =
  "mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-muted";

function CustomSelect<T extends string>({
  id,
  value,
  options,
  placeholder,
  hasError,
  errorId,
  "aria-describedby": ariaDescribedby,
  onChange,
  renderOption = (v) => v,
}: {
  id: string;
  value: string;
  options: T[];
  placeholder: string;
  hasError: boolean;
  errorId: string;
  "aria-describedby"?: string;
  onChange: (value: string) => void;
  renderOption?: (value: T) => string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  const display = value ? renderOption(value as T) : placeholder;
  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        id={id}
        onClick={() => setOpen((o) => !o)}
        className={`flex w-full items-center justify-between rounded-xl border bg-card px-4 py-3.5 text-left transition duration-200 focus:outline-none focus:ring-2 focus:ring-deep/25 focus:ring-offset-0 ${
          hasError ? inputError : "border-deep/15 hover:border-deep/25"
        } ${!value ? "text-muted/60" : "text-heading"}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-describedby={hasError ? errorId : ariaDescribedby}
      >
        <span>{display}</span>
        <svg
          className={`h-5 w-5 text-muted transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute z-20 mt-1 max-h-56 w-full overflow-auto rounded-xl border border-deep/10 bg-card py-1 shadow-soft"
        >
          {options.map((opt) => (
            <li
              key={opt}
              role="option"
              aria-selected={value === opt}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className={`cursor-pointer px-4 py-2.5 text-heading transition hover:bg-deep/10 ${
                value === opt ? "bg-deep/10" : ""
              }`}
            >
              {renderOption(opt)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function BookingForm() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = t.booking.requiredError;
    if (!date) next.date = t.booking.requiredError;
    if (!time) next.time = t.booking.requiredError;
    if (!guests) next.guests = t.booking.requiredError;
    setErrors(next);

    if (Object.keys(next).length > 0) return;

    setSuccess(true);
    setName("");
    setDate("");
    setTime("");
    setGuests("");
    setNotes("");
    setErrors({});
  };

  if (success) {
    return (
      <div
        className="rounded-2xl border border-olive/30 bg-gradient-to-b from-sand to-card px-8 py-10 text-center shadow-soft"
        role="status"
      >
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-olive/15 text-olive">
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <p className="font-serif text-lg text-heading">{t.booking.successMessage}</p>
        <button
          type="button"
          onClick={() => setSuccess(false)}
          className="mt-6 rounded-full border border-deep/30 bg-card px-6 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-deep transition hover:bg-deep hover:text-white"
        >
          {t.booking.submit}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2 md:gap-6">
      <div>
        <label htmlFor="booking-name" className={labelClass}>
          {t.booking.name}
        </label>
        <input
          id="booking-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={t.booking.namePlaceholder}
          className={`${inputBase} ${errors.name ? inputError : ""}`}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "booking-name-error" : undefined}
        />
        {errors.name && (
          <p id="booking-name-error" className="mt-1.5 text-xs text-red-600">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="booking-date" className={labelClass}>
          {t.booking.date}
        </label>
        <input
          id="booking-date"
          type="date"
          value={date}
          min={todayISO()}
          onChange={(e) => setDate(e.target.value)}
          className={`${inputBase} [color-scheme:light] ${errors.date ? inputError : ""}`}
          aria-invalid={!!errors.date}
          aria-describedby={errors.date ? "booking-date-error" : undefined}
        />
        {errors.date && (
          <p id="booking-date-error" className="mt-1.5 text-xs text-red-600">
            {errors.date}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="booking-time" className={labelClass}>
          {t.booking.time}
        </label>
        <CustomSelect
          id="booking-time"
          value={time}
          options={TIME_OPTIONS}
          placeholder={t.booking.time}
          hasError={!!errors.time}
          errorId="booking-time-error"
          onChange={setTime}
        />
        {errors.time && (
          <p id="booking-time-error" className="mt-1.5 text-xs text-red-600">
            {errors.time}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="booking-guests" className={labelClass}>
          {t.booking.guests}
        </label>
        <CustomSelect
          id="booking-guests"
          value={guests}
          options={GUEST_OPTIONS.map(String)}
          placeholder={t.booking.guests}
          hasError={!!errors.guests}
          errorId="booking-guests-error"
          onChange={setGuests}
          renderOption={(v) => v}
        />
        {errors.guests && (
          <p id="booking-guests-error" className="mt-1.5 text-xs text-red-600">
            {errors.guests}
          </p>
        )}
      </div>

      <div className="md:col-span-2">
        <label htmlFor="booking-notes" className={labelClass}>
          {t.booking.notes}{" "}
          <span className="font-normal normal-case tracking-normal text-muted/70">
            ({t.booking.optional})
          </span>
        </label>
        <textarea
          id="booking-notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder={t.booking.notesPlaceholder}
          rows={3}
          className={`${inputBase} resize-none`}
        />
      </div>

      <div className="md:col-span-2 flex justify-end pt-2">
        <button
          type="submit"
          className="w-full rounded-full bg-deep px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-white shadow-soft transition hover:bg-deep/95 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-deep focus:ring-offset-2 sm:w-auto"
        >
          {t.booking.submit}
        </button>
      </div>
    </form>
  );
}
