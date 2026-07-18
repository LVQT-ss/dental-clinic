import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

const SERVICES = [
  {
    title: "Implant dentistry",
    description:
      "Full restoration of the chewing function and aesthetics of patient's smile, regardless of age, in any clinical situation.",
    icon: (
      <path d="M12 2a5 5 0 015 5c0 2.5-1.5 3.5-1.5 6v7a1.5 1.5 0 01-3 0v-3a1.5 1.5 0 00-3 0v3a1.5 1.5 0 01-3 0v-7C6.5 10.5 5 9.5 5 7a5 5 0 015-5z" />
    ),
  },
  {
    title: "Surgery dentistry",
    description:
      "Precise surgical procedures performed with modern equipment to guarantee a fast, safe and comfortable recovery.",
    icon: (
      <path d="M19 3l2 2-9 9-3 1 1-3 9-9zM4 21l4-1 8-8-3-3-8 8-1 4z" />
    ),
  },
  {
    title: "Dental treatment",
    description:
      "Complete diagnostics and treatment of cavities, root canals and gum disease using painless techniques.",
    icon: (
      <path d="M12 2C8 2 5 5 5 9c0 2 1 4 1 6 0 3 1 5 2 5s1.5-2 1.5-4 .5-3 2.5-3 2.5 1 2.5 3 .5 4 1.5 4 2-2 2-5c0-2 1-4 1-6 0-4-3-7-7-7z" />
    ),
  },
  {
    title: "Teeth whitening",
    description:
      "Fast and safe brightening treatments that remove stains and restore the natural shine of your smile.",
    icon: (
      <path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3zM19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15z" />
    ),
  },
  {
    title: "Orthodontics",
    description:
      "Modern braces and clear aligners that gently straighten teeth and correct bite issues at any age.",
    icon: (
      <path d="M4 12c2-1 3-1 4 0s2 1 4 0 3-1 4 0 2 1 4 0M4 8c2-1 3-1 4 0s2 1 4 0 3-1 4 0 2 1 4 0M4 16c2-1 3-1 4 0s2 1 4 0 3-1 4 0 2 1 4 0" />
    ),
  },
  {
    title: "Pediatric dentistry",
    description:
      "Gentle, friendly care designed to keep children calm and build healthy dental habits from an early age.",
    icon: (
      <path d="M9 9c0-1 .5-2 1.5-2S12 8 12 9s.5 2 1.5 2S15 10 15 9M7 13c0 3.5 2.5 6 5 6s5-2.5 5-6M7 13a2 2 0 01-2-2c0-4 3-8 7-8s7 4 7 8a2 2 0 01-2 2" />
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-accent">
            Services
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
            High quality services for you
          </h2>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <StaggerItem key={service.title}>
              <div className="group h-full rounded-3xl bg-background p-8 shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
                    {service.icon}
                  </svg>
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
                >
                  Read more
                </a>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
