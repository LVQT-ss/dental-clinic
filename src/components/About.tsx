import Image from "next/image";
import Float from "@/components/motion/Float";
import Reveal from "@/components/motion/Reveal";

export default function About() {
  return (
    <section id="about" className="bg-background">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:px-10">
        <div className="relative mx-auto aspect-[78/47] w-full max-w-[560px]">
          {/* top-left wide image */}
          <Reveal
            delay={0.1}
            y={16}
            className="absolute left-0 top-0 h-[33%] w-[56%] overflow-hidden rounded-[1.5rem] shadow-lg"
          >
            <Image
              src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=600&q=80"
              alt="Bác sĩ đang thăm khám cho bệnh nhân"
              fill
              sizes="320px"
              className="object-cover"
            />
          </Reveal>

          {/* teal circle, right of the top image */}
          <Float
            className="absolute left-[60%] top-[13%] aspect-square w-[12.5%] rounded-full bg-accent"
            distance={9}
            duration={3.8}
          />

          {/* big image below, leaf shape */}
          <Reveal
            delay={0.2}
            y={20}
            className="absolute left-0 top-[38%] h-[62%] w-full overflow-hidden rounded-[1.75rem] rounded-tr-[6rem] rounded-bl-[6rem] shadow-xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=900&q=80"
              alt="Bàn tay em bé nắm ngón tay người lớn"
              fill
              sizes="560px"
              className="object-cover"
            />
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <span className="text-sm font-bold uppercase tracking-widest text-accent">
            About us
          </span>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
            Patient health is the highest value in our work
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
            The latest equipment, high-precision digital technologies and the
            best achievements of modern world medicine have allowed us to
            create a completely new, unprecedented level of painlessness,
            safety and comfort for patients.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="#services"
              className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5"
            >
              Learn More
            </a>
            <button
              type="button"
              aria-label="Xem video giới thiệu"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-accent transition-all hover:scale-110 hover:bg-accent/30"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-4 w-4">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
