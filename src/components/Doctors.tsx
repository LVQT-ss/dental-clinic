"use client";

import Image from "next/image";
import { useRef } from "react";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

const DOCTORS = [
  {
    name: "Dr. Emily Carter",
    role: "Implant surgeon",
    image:
      "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji/assets/Woman%20health%20worker/Light/3D/woman_health_worker_3d_light.png",
  },
  {
    name: "Dr. Daniel Reyes",
    role: "Orthodontist",
    image:
      "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji/assets/Man%20health%20worker/Medium/3D/man_health_worker_3d_medium.png",
  },
  {
    name: "Dr. Amara Okafor",
    role: "Implant surgeon",
    image:
      "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji/assets/Woman%20health%20worker/Dark/3D/woman_health_worker_3d_dark.png",
  },
  {
    name: "Dr. Kevin Tran",
    role: "Dental surgeon",
    image:
      "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji/assets/Man%20health%20worker/Light/3D/man_health_worker_3d_light.png",
  },
  {
    name: "Dr. Sarah Nguyen",
    role: "Pediatric dentist",
    image:
      "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji/assets/Health%20worker/Default/3D/health_worker_3d_default.png",
  },
];

export default function Doctors() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: -1 | 1) => {
    trackRef.current?.scrollBy({
      left: direction * 300,
      behavior: "smooth",
    });
  };

  return (
    <section id="doctors" className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-accent">
              Doctors
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
              Meet our qualified dentists
            </h2>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Previous doctors"
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-primary text-primary transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Next doctors"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white transition-transform hover:-translate-y-0.5"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </Reveal>

        <StaggerGroup
          ref={trackRef}
          className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {DOCTORS.map((doctor) => (
            <StaggerItem key={doctor.name} className="w-56 shrink-0 snap-start">
              <div className="group rounded-3xl bg-surface p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
                <div className="relative h-52 w-full overflow-hidden rounded-2xl bg-white">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    sizes="220px"
                    className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-base font-bold text-foreground">
                    {doctor.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{doctor.role}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
