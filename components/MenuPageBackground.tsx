const MENU_BG_IMAGE =
  "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=2000&auto=format&fit=crop";

export default function MenuPageBackground() {
  return (
    <div
      className="menu-page-bg pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="menu-page-bg__photo absolute inset-0 scale-110 bg-cover bg-center opacity-[0.07] blur-3xl saturate-[0.65]"
        style={{ backgroundImage: `url('${MENU_BG_IMAGE}')` }}
      />

      <div className="menu-page-bg__gradient absolute inset-0" />

      <div className="menu-page-bg__waves absolute inset-x-0 bottom-0 h-[42%]" />

      <div className="menu-page-bg__grain absolute inset-0" />

      <svg
        className="absolute -right-20 top-24 h-[28rem] w-[28rem] text-deep/[0.045]"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="0.75" />
        <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="0.5" />
      </svg>

      <svg
        className="absolute -left-16 bottom-32 h-72 w-72 text-olive/[0.06]"
        viewBox="0 0 300 300"
        fill="none"
      >
        <circle cx="150" cy="150" r="120" stroke="currentColor" strokeWidth="0.75" />
        <circle cx="150" cy="150" r="80" stroke="currentColor" strokeWidth="0.5" />
      </svg>

      <svg
        className="absolute right-[12%] top-[58%] hidden h-40 w-40 text-deep/[0.035] lg:block"
        viewBox="0 0 160 160"
        fill="none"
      >
        <path
          d="M80 8c40 28 52 52 52 72s-12 44-52 72C40 124 28 100 28 80s12-44 52-72z"
          stroke="currentColor"
          strokeWidth="0.75"
        />
      </svg>
    </div>
  );
}
