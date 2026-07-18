import Image from "next/image";
import Float from "@/components/motion/Float";
import Reveal from "@/components/motion/Reveal";

const FACES = [
  {
    src: "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji/assets/Woman/Medium/3D/woman_3d_medium.png",
    bg: "bg-amber-300",
    className: "left-[13%] top-[14%] w-[16%]",
    distance: 10,
    duration: 3.4,
    delay: 0,
  },
  {
    src: "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji/assets/Man/Dark/3D/man_3d_dark.png",
    bg: "bg-orange-400",
    className: "left-[30%] top-0 w-[17%]",
    distance: 12,
    duration: 4.2,
    delay: 0.3,
  },
  {
    src: "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji/assets/Woman/Light/3D/woman_3d_light.png",
    bg: "bg-white ring-1 ring-black/5",
    className: "left-[21%] top-[27%] w-[18%]",
    distance: 9,
    duration: 3.8,
    delay: 0.6,
  },
  {
    src: "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji/assets/Man/Light/3D/man_3d_light.png",
    bg: "bg-white ring-1 ring-black/5",
    className: "left-[41%] top-[24%] w-[13%]",
    distance: 8,
    duration: 3.2,
    delay: 0.15,
  },
  {
    src: "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji/assets/Woman/Dark/3D/woman_3d_dark.png",
    bg: "bg-white ring-1 ring-black/5",
    className: "left-[35%] top-[44%] w-[15%]",
    distance: 11,
    duration: 4.6,
    delay: 0.45,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative mx-auto aspect-[700/650] w-full max-w-[460px]">
            <span className="absolute left-0 top-[42%] h-[45%] w-[24%] rounded-t-full rounded-bl-[3rem] rounded-br-[3rem] bg-primary" />
            <span className="absolute left-[27%] top-[76%] h-[19%] w-[22%] rounded-[1.75rem] bg-accent" />

            {FACES.map((face) => (
              <Float
                key={face.src}
                distance={face.distance}
                duration={face.duration}
                delay={face.delay}
                className={`absolute aspect-square overflow-hidden rounded-full shadow-lg ${face.bg} ${face.className}`}
              >
                <Image
                  src={face.src}
                  alt=""
                  fill
                  sizes="120px"
                  className="object-contain p-2"
                />
              </Float>
            ))}
          </Reveal>

          <Reveal delay={0.15}>
            <span className="text-sm font-bold uppercase tracking-widest text-accent">
              Testimonials
            </span>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
              Check what our patients say about us
            </h2>

            <div className="mt-8 rounded-3xl bg-accent/15 p-8">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-accent">
                <path d="M9.5 6C6.5 7.5 5 10 5 13c0 2.5 1.5 4 3.5 4S12 15.5 12 13c0-2-1.5-3.5-3.5-3.5-.3 0-.6 0-.9.1C8 8 9 6.8 10.5 6L9.5 6zm9 0C15.5 7.5 14 10 14 13c0 2.5 1.5 4 3.5 4S21 15.5 21 13c0-2-1.5-3.5-3.5-3.5-.3 0-.6 0-.9.1C17 8 18 6.8 19.5 6l-1-.0z" />
              </svg>
              <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                The latest equipment, high-precision digital technologies and
                the best achievements of modern world medicine have allowed
                us to create a completely new, unprecedented level of
                painlessness, safety and comfort for patients.
              </p>

              <div className="mt-6 flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full bg-white ring-1 ring-black/5">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji/assets/Woman/Medium/3D/woman_3d_medium.png"
                    alt="Dr. Irina Petrova"
                    fill
                    sizes="48px"
                    className="object-contain p-1"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">
                    Dr. Irina Petrova
                  </p>
                  <div className="mt-1 flex gap-0.5 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                        <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.8l-5.2 2.8 1-5.8-4.3-4.1 5.9-.9L10 1.5z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
