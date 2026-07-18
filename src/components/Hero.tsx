import Image from "next/image";
import Float from "@/components/motion/Float";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-10 lg:py-24">
        <StaggerGroup className="max-w-xl">
          <StaggerItem>
            <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
              High-quality and <span className="text-primary">painless dentistry</span>
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-6 text-base leading-relaxed text-muted">
              We offer a full range of services and an integrated approach to solving
              any problems, and this is a guarantee of healthy teeth and oral cavity
              for all family members.
            </p>
          </StaggerItem>
          <StaggerItem>
            <a
              href="#contact"
              className="mt-8 inline-block rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5"
            >
              Make Appointment
            </a>
          </StaggerItem>
        </StaggerGroup>

        <div className="relative mx-auto aspect-[650/545] w-full max-w-[520px]">
          {/* decorative shapes */}
          <Float
            className="absolute left-[19%] top-[33%] aspect-square w-[13%] rounded-full bg-accent"
            distance={10}
            duration={3.5}
          />
          <Float
            className="absolute left-[6%] top-[49%] h-[15%] w-[24%] rounded-l-full rounded-r-2xl bg-primary"
            distance={8}
            duration={4.5}
            delay={0.4}
          />

          {/* doctor close-up, top */}
          <Reveal
            delay={0.15}
            y={16}
            className="absolute left-[33%] top-[26%] h-[38%] w-[22%] overflow-hidden rounded-[1.5rem] shadow-lg"
          >
            <Image
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=500&q=80"
              alt="Bác sĩ nha khoa đang khám cho bệnh nhân"
              fill
              sizes="200px"
              className="object-cover"
            />
          </Reveal>

          {/* hand close-up, bottom-left */}
          <Reveal
            delay={0.3}
            y={16}
            className="absolute left-[6%] top-[66%] h-[24%] w-[48%] overflow-hidden rounded-[1.5rem] shadow-lg"
          >
            <Image
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80"
              alt="Cận cảnh dụng cụ nha khoa"
              fill
              sizes="260px"
              className="object-cover"
            />
          </Reveal>

          {/* surgery, large right image with organic bottom-left corner */}
          <Reveal
            delay={0.1}
            y={20}
            className="absolute left-[57%] top-[14%] h-[75%] w-[40%] overflow-hidden rounded-tl-[1.5rem] rounded-tr-[1.5rem] rounded-br-[1.5rem] rounded-bl-[45%] shadow-xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=600&q=80"
              alt="Ê-kíp phẫu thuật đang làm việc"
              fill
              sizes="260px"
              className="object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
