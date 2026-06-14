type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  titleClassName?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  titleClassName = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "items-start";

  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      <span className="text-xs uppercase tracking-[0.3em] text-olive">
        {eyebrow}
      </span>
      <h2
        className={`font-serif text-3xl text-heading sm:text-4xl ${titleClassName}`}
      >
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-sm text-muted sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
