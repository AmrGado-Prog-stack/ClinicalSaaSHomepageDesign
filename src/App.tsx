import { useEffect, useState, type ReactNode } from "react";

type IconName =
  | "arrow"
  | "calendar"
  | "check"
  | "chevron"
  | "clock"
  | "grid"
  | "heart"
  | "menu"
  | "message"
  | "more"
  | "pin"
  | "pulse"
  | "search"
  | "shield"
  | "sparkle"
  | "users"
  | "x";

function Icon({
  name,
  size = 20,
  className = "",
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="3" />
        <path d="M16 3v4M8 3v4M3 10h18" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    grid: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="2" />
        <rect x="14" y="3" width="7" height="7" rx="2" />
        <rect x="3" y="14" width="7" height="7" rx="2" />
        <rect x="14" y="14" width="7" height="7" rx="2" />
      </>
    ),
    heart: (
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    message: <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />,
    more: (
      <>
        <circle cx="5" cy="12" r="1" fill="currentColor" stroke="none" />
        <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
        <circle cx="19" cy="12" r="1" fill="currentColor" stroke="none" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    pulse: <path d="M3 12h4l2.5-7 4 14 2.5-7h5" />,
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    shield: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    sparkle: (
      <>
        <path d="m12 3 1.4 4.1L17.5 8.5l-4.1 1.4L12 14l-1.4-4.1-4.1-1.4 4.1-1.4L12 3Z" />
        <path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
      </>
    ),
    x: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
  };
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

const appointments = [
  {
    time: "09:00",
    name: "Eleanor Rigby",
    type: "Follow-up",
    initials: "ER",
    color: "bg-[#e7f1ff] text-[#3674c8]",
    status: "Checked in",
  },
  {
    time: "10:30",
    name: "Jacob Jones",
    type: "Consultation",
    initials: "JJ",
    color: "bg-[#f9e8f2] text-[#b8578d]",
    status: "Confirmed",
  },
  {
    time: "11:45",
    name: "Olivia Martin",
    type: "Annual physical",
    initials: "OM",
    color: "bg-[#fff0de] text-[#c87827]",
    status: "Confirmed",
  },
  {
    time: "13:30",
    name: "Noah Williams",
    type: "Follow-up",
    initials: "NW",
    color: "bg-[#e4f5ed] text-[#26805a]",
    status: "Pending",
  },
];

const clinics = [
  {
    name: "Northstar Family Clinic",
    category: "Primary Care",
    location: "Downtown · 1.2 miles",
    rating: "4.9",
    reviews: "186",
    availability: "Today, 2:30 PM",
    description:
      "Whole-person primary care for every stage of life, from preventive visits to ongoing condition management.",
    services: ["Annual physicals", "Chronic care", "Vaccinations", "Women's health"],
    image:
      "https://images.unsplash.com/photo-1758691462878-6edc3d3da1be?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=900&h=560",
    imageAlt: "Doctor consulting with a patient in a modern medical office",
  },
  {
    name: "Mend Pediatric Center",
    category: "Pediatrics",
    location: "Westbrook · 2.8 miles",
    rating: "4.8",
    reviews: "142",
    availability: "Tomorrow, 9:00 AM",
    description:
      "Friendly, family-centered care designed to help children and teens thrive from infancy through adolescence.",
    services: ["Well-child visits", "Immunizations", "Developmental care", "Same-day sick visits"],
    image:
      "https://images.unsplash.com/photo-1631558556874-1d127211f574?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=900&h=560",
    imageAlt: "Clinician speaking with a patient",
  },
  {
    name: "Cura Women's Health",
    category: "Women's Health",
    location: "Riverside · 3.4 miles",
    rating: "4.9",
    reviews: "224",
    availability: "Wed, 11:15 AM",
    description:
      "Compassionate, evidence-based care supporting women through every chapter of their health journey.",
    services: ["Well-woman exams", "Prenatal care", "Fertility support", "Menopause care"],
    image:
      "https://images.unsplash.com/photo-1631217868204-db1ed6bdd224?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=900&h=560",
    imageAlt: "Healthcare professional reviewing patient information",
  },
  {
    name: "Wellward Cardiology",
    category: "Cardiology",
    location: "Midtown · 4.1 miles",
    rating: "4.7",
    reviews: "98",
    availability: "Thu, 10:45 AM",
    description:
      "Advanced heart care delivered by experienced specialists with a focus on prevention and long-term wellness.",
    services: ["Heart screening", "ECG & monitoring", "Hypertension", "Cardiac rehabilitation"],
    image:
      "https://images.unsplash.com/photo-1633488781325-d36e6818d0c8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=900&h=560",
    imageAlt: "Medical professional caring for a patient",
  },
  {
    name: "Aster Behavioral Health",
    category: "Mental Health",
    location: "Virtual & Eastside · 5.0 miles",
    rating: "4.9",
    reviews: "117",
    availability: "Today, 4:00 PM",
    description:
      "Private, judgment-free mental healthcare with flexible in-person and virtual appointment options.",
    services: ["Individual therapy", "Psychiatry", "Anxiety care", "Medication management"],
    image:
      "https://images.unsplash.com/photo-1758691461957-474a7686e388?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=900&h=560",
    imageAlt: "Doctor and patient having a conversation",
  },
  {
    name: "Motion Orthopedic Clinic",
    category: "Orthopedics",
    location: "North Hills · 6.2 miles",
    rating: "4.8",
    reviews: "163",
    availability: "Fri, 8:30 AM",
    description:
      "Specialized bone, joint, and sports medicine care to get you moving comfortably and confidently again.",
    services: ["Sports medicine", "Joint care", "Physical therapy", "Injury evaluation"],
    image:
      "https://images.unsplash.com/photo-1765222385545-71472fe6ee96?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=900&h=560",
    imageAlt: "Medical team discussing care in a hospital",
  },
];

function Brand() {
  return (
    <a href="#" className="flex items-center gap-2.5" aria-label="Aster Health home">
      <span className="grid size-9 place-items-center rounded-xl bg-[#126a61] text-white shadow-[0_5px_15px_rgba(18,106,97,.2)]">
        <Icon name="pulse" size={20} />
      </span>
      <span className="text-[19px] font-bold tracking-[-0.04em]">
        aster<span className="text-[#5a716f]">health</span>
      </span>
    </a>
  );
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeView, setActiveView] = useState<"today" | "week">("today");

  const scrollToDemo = () =>
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7faf9] text-[#172c2b]">
      <header className="relative z-50 mx-auto flex max-w-[1240px] items-center justify-between px-5 py-5 md:px-8 lg:px-10">
        <Brand />

        <nav className="hidden items-center gap-8 text-sm font-medium text-[#4f6361] md:flex">
          <a className="transition-colors hover:text-[#126a61]" href="#platform">
            Platform
          </a>
          <a className="transition-colors hover:text-[#126a61]" href="#solutions">
            Solutions
          </a>
          <a className="transition-colors hover:text-[#126a61]" href="#clinics">
            Clinics
          </a>
          <a className="transition-colors hover:text-[#126a61]" href="#security">
            Security
          </a>
          <a className="transition-colors hover:text-[#126a61]" href="#resources">
            Resources
          </a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-xl px-4 py-2.5 text-sm font-semibold text-[#29413f] transition-colors hover:bg-white">
            Log in
          </button>
          <button
            onClick={scrollToDemo}
            className="rounded-xl bg-[#173f3b] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(23,63,59,.18)] transition hover:-translate-y-0.5 hover:bg-[#0f332f]"
          >
            Book a demo
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="grid size-10 place-items-center rounded-xl bg-white text-[#173f3b] shadow-sm md:hidden"
          aria-label="Toggle menu"
        >
          <Icon name={menuOpen ? "x" : "menu"} />
        </button>
        {menuOpen && (
          <div className="absolute left-5 right-5 top-[76px] rounded-2xl border border-[#dbe6e3] bg-white p-4 shadow-xl md:hidden">
            <nav className="flex flex-col gap-1 text-sm font-semibold">
              {["Platform", "Solutions", "Clinics", "Security", "Resources"].map((item) => (
                <a
                  onClick={() => setMenuOpen(false)}
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="rounded-lg px-3 py-3 hover:bg-[#f2f7f5]"
                >
                  {item}
                </a>
              ))}
            </nav>
            <button
              onClick={scrollToDemo}
              className="mt-3 w-full rounded-xl bg-[#173f3b] py-3 text-sm font-semibold text-white"
            >
              Book a demo
            </button>
          </div>
        )}
      </header>

      <section className="relative mx-auto max-w-[1240px] px-5 pb-20 pt-14 md:px-8 md:pb-28 md:pt-20 lg:px-10 lg:pt-24">
        <div className="hero-orb absolute -right-64 -top-52 size-[700px] rounded-full" />
        <div className="relative grid items-center gap-16 lg:grid-cols-[.88fr_1.12fr] lg:gap-12">
          <div className="relative z-10 max-w-[590px]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#cfe2de] bg-white/70 px-3.5 py-2 text-xs font-semibold text-[#276b63] shadow-sm backdrop-blur">
              <Icon name="sparkle" size={15} />
              Trusted by 1,200+ care teams
            </div>
            <h1 className="font-display text-[48px] font-semibold leading-[1.03] tracking-[-0.055em] text-[#173f3b] sm:text-[62px] lg:text-[68px]">
              Better care starts with a{" "}
              <span className="relative whitespace-nowrap text-[#159483]">
                clearer day.
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="10"
                  viewBox="0 0 300 10"
                  fill="none"
                >
                  <path
                    d="M2 7.5c72-7 192-7 296-4"
                    stroke="#a9d8cf"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
            <p className="mt-7 max-w-[520px] text-lg leading-8 text-[#5d706e]">
              A unified clinical workspace that helps modern care teams spend less time managing
              systems and more time caring for people.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={scrollToDemo}
                className="group flex items-center justify-center gap-2 rounded-xl bg-[#126a61] px-6 py-4 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(18,106,97,.23)] transition hover:-translate-y-0.5 hover:bg-[#0d5a52]"
              >
                Start your free trial{" "}
                <Icon
                  name="arrow"
                  size={17}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </button>
              <button
                onClick={scrollToDemo}
                className="flex items-center justify-center gap-2 rounded-xl border border-[#d5e1de] bg-white px-6 py-4 text-sm font-semibold text-[#29413f] transition hover:border-[#b5ccc7] hover:bg-[#fafffd]"
              >
                See how it works{" "}
                <span className="grid size-5 place-items-center rounded-full bg-[#e0f1ed] text-[9px] text-[#126a61]">
                  ▶
                </span>
              </button>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-[#6c7e7c]">
              {["No credit card", "Setup in 15 minutes", "HIPAA compliant"].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <span className="grid size-4 place-items-center rounded-full bg-[#dff1eb] text-[#24816d]">
                    <Icon name="check" size={11} />
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div id="platform" className="relative mx-auto w-full max-w-[680px]">
            <div className="absolute -bottom-8 -left-7 size-32 rounded-full bg-[#cceae4]/70 blur-2xl" />
            <div className="absolute -right-8 top-8 size-40 rounded-full bg-[#e8dce9]/80 blur-3xl" />
            <div className="dashboard-shell relative rounded-[26px] border border-white/80 bg-white/92 p-2.5 shadow-[0_28px_80px_rgba(38,78,73,.18)] backdrop-blur-sm">
              <div className="flex min-h-[500px] overflow-hidden rounded-[19px] bg-[#f8faf9]">
                <aside className="hidden w-[72px] shrink-0 flex-col items-center border-r border-[#e8efed] bg-white py-5 sm:flex">
                  <span className="mb-8 grid size-8 place-items-center rounded-[10px] bg-[#126a61] text-white">
                    <Icon name="pulse" size={17} />
                  </span>
                  <div className="flex flex-1 flex-col gap-3">
                    {(["grid", "calendar", "users", "message"] as IconName[]).map((icon, i) => (
                      <button
                        key={icon}
                        className={`grid size-9 place-items-center rounded-[10px] ${i === 0 ? "bg-[#e7f3f0] text-[#126a61]" : "text-[#9aacaa] hover:bg-[#f2f6f5]"}`}
                      >
                        <Icon name={icon} size={17} />
                      </button>
                    ))}
                  </div>
                  <div className="grid size-9 place-items-center rounded-full bg-[#d9ebe7] text-xs font-bold text-[#276b63]">
                    DR
                  </div>
                </aside>
                <div className="min-w-0 flex-1 p-4 sm:p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-medium text-[#91a09e]">Tuesday, June 18</p>
                      <h2 className="mt-1 text-lg font-bold tracking-[-0.03em] text-[#263e3c]">
                        Good morning, Dr. Reed
                      </h2>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="hidden size-8 place-items-center rounded-lg border border-[#e2eae8] bg-white text-[#849795] sm:grid">
                        <Icon name="search" size={15} />
                      </button>
                      <button className="grid size-8 place-items-center rounded-lg bg-[#173f3b] text-white">
                        <span className="text-lg leading-none">+</span>
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      ["calendar", "12", "Appointments", "#e2f3ee", "#237765"],
                      ["clock", "3h 24m", "Saved this week", "#e7effb", "#4b6e9d"],
                      ["message", "8", "New messages", "#f4e9f2", "#966386"],
                    ].map(([icon, value, label, bg, color]) => (
                      <div
                        key={label}
                        className="rounded-xl border border-[#e8efed] bg-white p-3 sm:p-4"
                      >
                        <span
                          style={{ backgroundColor: bg, color }}
                          className="mb-3 hidden size-7 place-items-center rounded-lg sm:grid"
                        >
                          <Icon name={icon as IconName} size={14} />
                        </span>
                        <p className="text-sm font-bold text-[#29413f] sm:text-[17px]">{value}</p>
                        <p className="mt-1 truncate text-[9px] font-medium text-[#91a09e] sm:text-[10px]">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 rounded-xl border border-[#e8efed] bg-white p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <h3 className="text-xs font-bold text-[#314947]">Today&apos;s schedule</h3>
                        <p className="mt-1 text-[9px] text-[#91a09e]">
                          {appointments.length} upcoming appointments
                        </p>
                      </div>
                      <div className="flex rounded-lg bg-[#f2f6f5] p-0.5 text-[9px] font-semibold">
                        <button
                          onClick={() => setActiveView("today")}
                          className={`rounded-md px-2.5 py-1.5 ${activeView === "today" ? "bg-white text-[#246d64] shadow-sm" : "text-[#8a9a98]"}`}
                        >
                          Today
                        </button>
                        <button
                          onClick={() => setActiveView("week")}
                          className={`rounded-md px-2.5 py-1.5 ${activeView === "week" ? "bg-white text-[#246d64] shadow-sm" : "text-[#8a9a98]"}`}
                        >
                          Week
                        </button>
                      </div>
                    </div>
                    <div className="space-y-1">
                      {appointments.slice(0, activeView === "today" ? 4 : 3).map((appointment) => (
                        <div
                          key={appointment.time}
                          className="grid grid-cols-[35px_1fr_auto] items-center gap-2 rounded-lg px-1 py-2 transition hover:bg-[#f7faf9] sm:grid-cols-[40px_1fr_auto]"
                        >
                          <span className="text-[9px] font-semibold text-[#8b9c99]">
                            {appointment.time}
                          </span>
                          <div className="flex min-w-0 items-center gap-2.5">
                            <span
                              className={`grid size-7 shrink-0 place-items-center rounded-full text-[8px] font-bold ${appointment.color}`}
                            >
                              {appointment.initials}
                            </span>
                            <div className="min-w-0">
                              <p className="truncate text-[10px] font-bold text-[#354b49]">
                                {appointment.name}
                              </p>
                              <p className="truncate text-[8px] text-[#98a6a4]">
                                {appointment.type}
                              </p>
                            </div>
                          </div>
                          <span
                            className={`hidden rounded-full px-2 py-1 text-[7px] font-semibold sm:block ${appointment.status === "Pending" ? "bg-[#fff3dd] text-[#a46b18]" : "bg-[#e8f4ef] text-[#41806f]"}`}
                          >
                            {appointment.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="float-card absolute -bottom-10 -left-4 hidden items-center gap-3 rounded-2xl border border-white bg-white/95 px-4 py-3.5 shadow-[0_14px_35px_rgba(38,78,73,.17)] backdrop-blur sm:flex lg:-left-10">
              <span className="grid size-9 place-items-center rounded-full bg-[#e4f4ef] text-[#21806d]">
                <Icon name="check" size={18} />
              </span>
              <div>
                <p className="text-[11px] font-bold text-[#29413f]">Patient checked in</p>
                <p className="mt-0.5 text-[9px] text-[#839592]">Eleanor is ready to see you</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="border-y border-[#e3ece9] bg-white/70 py-8">
        <div className="mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-6 px-5 md:flex-row">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-[#81928f] md:text-left">
            Powering thoughtful care at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[#82918f] grayscale">
            {["Northstar", "Wellward", "Mend Clinic", "Cura"].map((name, i) => (
              <span
                key={name}
                className="flex items-center gap-2 text-sm font-bold tracking-[-0.02em]"
              >
                <span
                  className={`size-4 ${i % 2 ? "rounded-full border-[3px] border-current" : "rotate-45 rounded-[4px] bg-current opacity-70"}`}
                />
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="security" className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#159483]">
            Designed for better care
          </p>
          <h2 className="font-display mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#173f3b] sm:text-4xl">
            Everything your team needs.
            <br />
            Nothing they don&apos;t.
          </h2>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            {
              icon: "users",
              title: "One connected workspace",
              copy: "Bring scheduling, records, communication, and billing together in one intuitive place.",
            },
            {
              icon: "sparkle",
              title: "Less admin, more care",
              copy: "Automate repetitive workflows and give every clinician more time with their patients.",
            },
            {
              icon: "shield",
              title: "Security by design",
              copy: "Enterprise-grade protection, audit trails, and HIPAA-ready infrastructure from day one.",
            },
          ].map((feature) => (
            <article
              key={feature.title}
              className="group rounded-2xl border border-[#dde9e6] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(38,78,73,.09)]"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-[#e6f3ef] text-[#126a61] transition group-hover:bg-[#126a61] group-hover:text-white">
                <Icon name={feature.icon as IconName} />
              </span>
              <h3 className="mt-5 text-lg font-bold tracking-[-0.025em] text-[#29413f]">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#71827f]">{feature.copy}</p>
              <a
                href="#demo"
                className="mt-5 inline-flex items-center gap-1 text-xs font-bold text-[#19766b]"
              >
                Learn more <Icon name="chevron" size={14} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="demo" className="mx-auto max-w-[1240px] px-5 pb-16 md:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-[28px] bg-[#173f3b] px-6 py-12 text-center text-white sm:px-12 md:py-16">
          <div className="absolute -left-20 -top-24 size-64 rounded-full border-[50px] border-[#2a5954] opacity-60" />
          <div className="absolute -bottom-32 -right-20 size-72 rounded-full bg-[#24635b] blur-2xl" />
          <div className="relative mx-auto max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8dd1c4]">
              Ready when you are
            </p>
            <h2 className="font-display mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Care for your patients.
              <br />
              We&apos;ll handle the busywork.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-[#b9ccca]">
              Join thousands of care teams building a calmer, more connected practice with Aster
              Health.
            </p>
            <button className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#173f3b] shadow-lg transition hover:-translate-y-0.5">
              Book your personalized demo <Icon name="arrow" size={17} />
            </button>
          </div>
        </div>
      </section>

      <footer
        id="resources"
        className="mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-4 px-5 pb-8 text-xs text-[#7d8f8c] sm:flex-row md:px-8 lg:px-10"
      >
        <span>© 2025 Aster Health, Inc.</span>
        <div className="flex gap-6">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </main>
  );
}

function ClinicsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState("All clinics");
  const [query, setQuery] = useState("");
  const [expandedClinic, setExpandedClinic] = useState<string | null>(null);
  const categories = [
    "All clinics",
    "Primary Care",
    "Pediatrics",
    "Women's Health",
    "Cardiology",
    "Mental Health",
    "Orthopedics",
  ];
  const visibleClinics = clinics.filter((clinic) => {
    const matchesCategory = category === "All clinics" || clinic.category === category;
    const searchText =
      `${clinic.name} ${clinic.category} ${clinic.services.join(" ")}`.toLowerCase();
    return matchesCategory && searchText.includes(query.toLowerCase());
  });

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7faf9] text-[#172c2b]">
      <header className="relative z-50 mx-auto flex max-w-[1240px] items-center justify-between px-5 py-5 md:px-8 lg:px-10">
        <Brand />
        <nav className="hidden items-center gap-8 text-sm font-medium text-[#4f6361] md:flex">
          <a className="transition-colors hover:text-[#126a61]" href="#">
            Home
          </a>
          <a className="font-semibold text-[#126a61]" href="#clinics">
            Clinics
          </a>
          <a className="transition-colors hover:text-[#126a61]" href="#clinics-services">
            Services
          </a>
          <a className="transition-colors hover:text-[#126a61]" href="#clinics-help">
            How it works
          </a>
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-xl px-4 py-2.5 text-sm font-semibold text-[#29413f] transition-colors hover:bg-white">
            Log in
          </button>
          <button
            onClick={() =>
              document.getElementById("clinics-services")?.scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-xl bg-[#173f3b] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(23,63,59,.18)] transition hover:-translate-y-0.5 hover:bg-[#0f332f]"
          >
            Find care
          </button>
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="grid size-10 place-items-center rounded-xl bg-white text-[#173f3b] shadow-sm md:hidden"
          aria-label="Toggle menu"
        >
          <Icon name={menuOpen ? "x" : "menu"} />
        </button>
        {menuOpen && (
          <div className="absolute left-5 right-5 top-[76px] rounded-2xl border border-[#dbe6e3] bg-white p-4 shadow-xl md:hidden">
            <nav className="flex flex-col gap-1 text-sm font-semibold">
              <a href="#" className="rounded-lg px-3 py-3 hover:bg-[#f2f7f5]">
                Home
              </a>
              <a href="#clinics" className="rounded-lg bg-[#f2f7f5] px-3 py-3 text-[#126a61]">
                Clinics
              </a>
              <a
                href="#clinics-services"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 hover:bg-[#f2f7f5]"
              >
                Services
              </a>
              <a
                href="#clinics-help"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 hover:bg-[#f2f7f5]"
              >
                How it works
              </a>
            </nav>
          </div>
        )}
      </header>

      <section className="relative mx-auto max-w-[1240px] px-5 pb-14 pt-12 text-center md:px-8 md:pb-20 md:pt-18 lg:px-10">
        <div className="hero-orb pointer-events-none absolute -right-48 -top-64 size-[700px] rounded-full" />
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#cfe2de] bg-white/70 px-3.5 py-2 text-xs font-semibold text-[#276b63] shadow-sm">
            <Icon name="heart" size={14} />
            Care that fits your life
          </div>
          <h1 className="font-display text-[44px] font-semibold leading-[1.05] tracking-[-0.05em] text-[#173f3b] sm:text-[58px]">
            Find the right care,
            <br />
            <span className="text-[#159483]">right where you are.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#60726f] sm:text-lg">
            Explore trusted Aster Health clinics and discover personalized services for you and your
            family.
          </p>
          <div className="mx-auto mt-8 flex max-w-2xl items-center gap-3 rounded-2xl border border-[#d6e3e0] bg-white p-2.5 shadow-[0_14px_40px_rgba(38,78,73,.1)]">
            <span className="ml-2 text-[#829693]">
              <Icon name="search" size={19} />
            </span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="min-w-0 flex-1 bg-transparent px-1 py-2 text-sm text-[#29413f] outline-none placeholder:text-[#9aaba8]"
              placeholder="Search clinics, specialties, or services"
              aria-label="Search clinics and services"
            />
            <button className="hidden rounded-xl bg-[#126a61] px-5 py-3 text-sm font-semibold text-white sm:block">
              Search
            </button>
          </div>
        </div>
      </section>

      <section id="clinics-services" className="mx-auto max-w-[1240px] px-5 pb-20 md:px-8 lg:px-10">
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#159483]">
              Our care network
            </p>
            <h2 className="font-display mt-2 text-2xl font-semibold tracking-[-0.035em] text-[#173f3b] sm:text-3xl">
              Clinics built around your needs
            </h2>
            <p className="mt-2 text-sm text-[#71827f]">
              {visibleClinics.length} clinics available in your area
            </p>
          </div>
          <div className="flex max-w-full gap-2 overflow-x-auto pb-1 md:max-w-[640px]">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold transition ${
                  category === item
                    ? "border-[#126a61] bg-[#126a61] text-white"
                    : "border-[#dbe6e3] bg-white text-[#617572] hover:border-[#9dbeb7]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {visibleClinics.length ? (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visibleClinics.map((clinic) => {
              const isExpanded = expandedClinic === clinic.name;
              return (
                <article
                  key={clinic.name}
                  className="group overflow-hidden rounded-[22px] border border-[#dfe9e7] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(38,78,73,.11)]"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={clinic.image}
                      alt={clinic.imageAlt}
                      className="size-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#173f3b]/35 via-transparent to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold text-[#276b63] shadow-sm backdrop-blur">
                      {clinic.category}
                    </span>
                    <span className="absolute bottom-4 right-4 rounded-full bg-white/95 px-2.5 py-1.5 text-[10px] font-bold text-[#29413f] shadow-sm">
                      <span className="text-[#e6a740]">★</span> {clinic.rating}{" "}
                      <span className="font-medium text-[#879794]">({clinic.reviews})</span>
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold tracking-[-0.025em] text-[#29413f]">
                      {clinic.name}
                    </h3>
                    <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-[#81928f]">
                      <Icon name="pin" size={14} /> {clinic.location}
                    </p>
                    <p className="mt-4 text-sm leading-6 text-[#71827f]">{clinic.description}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {clinic.services.slice(0, isExpanded ? 4 : 3).map((service) => (
                        <span
                          key={service}
                          className="rounded-lg bg-[#f1f7f5] px-2.5 py-1.5 text-[10px] font-semibold text-[#52706c]"
                        >
                          {service}
                        </span>
                      ))}
                      {!isExpanded && (
                        <span className="rounded-lg bg-[#f1f7f5] px-2.5 py-1.5 text-[10px] font-semibold text-[#52706c]">
                          +1 more
                        </span>
                      )}
                    </div>
                    {isExpanded && (
                      <div className="mt-4 rounded-xl border border-[#dce9e6] bg-[#f8fbfa] p-3.5">
                        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#7a8d89]">
                          Next available
                        </p>
                        <p className="mt-1.5 flex items-center gap-1.5 text-xs font-bold text-[#21806d]">
                          <Icon name="calendar" size={14} /> {clinic.availability}
                        </p>
                      </div>
                    )}
                    <div className="mt-5 flex items-center justify-between border-t border-[#e8efed] pt-4">
                      <button
                        onClick={() => setExpandedClinic(isExpanded ? null : clinic.name)}
                        className="text-xs font-bold text-[#19766b]"
                      >
                        {isExpanded ? "Hide details" : "View services"}
                      </button>
                      <button className="flex items-center gap-1 rounded-lg bg-[#173f3b] px-3.5 py-2.5 text-[11px] font-bold text-white transition hover:bg-[#126a61]">
                        Book a visit <Icon name="arrow" size={13} />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-[#cbdcd8] bg-white py-16 text-center">
            <span className="mx-auto grid size-12 place-items-center rounded-full bg-[#e8f4f1] text-[#347a70]">
              <Icon name="search" />
            </span>
            <h3 className="mt-4 font-bold text-[#29413f]">No clinics found</h3>
            <p className="mt-1 text-sm text-[#7b8d8a]">Try another search or specialty.</p>
            <button
              onClick={() => {
                setQuery("");
                setCategory("All clinics");
              }}
              className="mt-4 text-xs font-bold text-[#19766b]"
            >
              Clear all filters
            </button>
          </div>
        )}
      </section>

      <section id="clinics-help" className="border-y border-[#dfebe8] bg-white/70">
        <div className="mx-auto grid max-w-[1100px] gap-8 px-5 py-14 md:grid-cols-3 md:px-8">
          {[
            [
              "01",
              "Choose your clinic",
              "Browse by specialty, service, location, or availability.",
            ],
            [
              "02",
              "Select your care",
              "See each clinic's services and find the right fit for your needs.",
            ],
            [
              "03",
              "Book with confidence",
              "Choose a convenient time and manage your visit in one place.",
            ],
          ].map(([number, title, copy]) => (
            <div key={number} className="flex gap-4">
              <span className="font-display text-xl font-bold text-[#9bc9c0]">{number}</span>
              <div>
                <h3 className="font-bold text-[#29413f]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#71827f]">{copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-[28px] bg-[#173f3b] px-6 py-12 text-center text-white sm:px-12 md:py-14">
          <div className="absolute -bottom-32 -right-20 size-72 rounded-full bg-[#24635b] blur-2xl" />
          <div className="relative mx-auto max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8dd1c4]">
              Need a little guidance?
            </p>
            <h2 className="font-display mt-4 text-3xl font-semibold tracking-[-0.04em]">
              We&apos;ll help you find the right care.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-[#b9ccca]">
              Our care coordinators can connect you with the right clinic and service for your
              needs.
            </p>
            <button className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#173f3b] shadow-lg transition hover:-translate-y-0.5">
              Talk to a care coordinator <Icon name="arrow" size={17} />
            </button>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-4 px-5 pb-8 text-xs text-[#7d8f8c] sm:flex-row md:px-8 lg:px-10">
        <span>© 2025 Aster Health, Inc.</span>
        <div className="flex gap-6">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </main>
  );
}

export default function App() {
  const [isClinicsPage, setIsClinicsPage] = useState(window.location.hash.startsWith("#clinics"));

  useEffect(() => {
    const handleHashChange = () => {
      setIsClinicsPage(window.location.hash.startsWith("#clinics"));
      if (window.location.hash === "#clinics") window.scrollTo({ top: 0 });
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return isClinicsPage ? <ClinicsPage /> : <HomePage />;
}
