import Image from "next/image";
import Float from "@/components/motion/Float";
import Reveal from "@/components/motion/Reveal";

export default function MakeAppointment() {
  return (
    <section id="contact" className="bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-8 py-14 sm:px-14 lg:px-16">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <span className="text-sm font-bold uppercase tracking-widest text-accent">
                About us
              </span>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                Make an Appointment
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-white/70">
                The latest equipment, high-precision digital technologies and
                the best achievements of modern world medicine have allowed
                us to create a completely new, unprecedented level of
                painlessness, safety and comfort for patients.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-block rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-lg transition-transform hover:-translate-y-0.5"
              >
                Make Appointment
              </a>
            </Reveal>

            <Reveal delay={0.15} className="relative mx-auto aspect-[60/51] w-full max-w-[460px]">
              {/* teal circle between the two images */}
              <Float
                className="absolute left-[38%] top-[31%] aspect-square w-[16%] rounded-full bg-accent"
                distance={9}
                duration={3.6}
              />

              {/* small image, bottom-left */}
              <div className="absolute left-0 top-[51%] h-[44%] w-[41%] overflow-hidden rounded-[1.5rem] rounded-bl-[4.5rem] shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=500&q=80"
                  alt="Bác sĩ đang chăm sóc bệnh nhân"
                  fill
                  sizes="220px"
                  className="object-cover"
                />
              </div>

              {/* tall image, right, pill top */}
              <div className="absolute left-[56%] top-0 h-full w-[44%] overflow-hidden rounded-t-full rounded-br-[1.75rem] rounded-bl-[5rem] shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&q=80"
                  alt="Bác sĩ nha khoa của phòng khám"
                  fill
                  sizes="220px"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
