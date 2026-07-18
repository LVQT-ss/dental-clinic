import Reveal from "@/components/motion/Reveal";

const FOOTER_LINKS = [
  {
    title: "Navigation",
    links: [
      { label: "About us", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Doctors", href: "#doctors" },
      { label: "Testimonials", href: "#testimonials" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Implant dentistry", href: "#services" },
      { label: "Orthodontics", href: "#services" },
      { label: "Teeth whitening", href: "#services" },
      { label: "Pediatric dentistry", href: "#services" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-surface-dark text-white/70">
      <Reveal y={16}>
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-4 lg:px-10">
          <div className="lg:col-span-2">
            <p className="text-xl font-extrabold text-white">Lvqt</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              High-quality and painless dentistry for the whole family. Modern
              equipment, experienced doctors, comfortable care.
            </p>
            <div className="mt-6 space-y-1 text-sm">
              <p>123 Nguyen Hue, District 1, Ho Chi Minh City</p>
              <p>+84 28 1234 5678 · hello@lvqt.com</p>
            </div>
          </div>

          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <p className="text-sm font-bold uppercase tracking-widest text-white">
                {group.title}
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="transition-colors hover:text-accent">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>

      <div className="border-t border-white/10 px-6 py-6 text-center text-xs lg:px-10">
        © {new Date().getFullYear()} Lvqt Dental Clinic. All rights reserved.
      </div>
    </footer>
  );
}
