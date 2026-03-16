"use client";

import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden pb-28 pt-8 md:pb-44 md:pt-20">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
              Recommend.legal friends. <br />
              <span className="mt-2 inline-block bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-4xl font-bold text-transparent md:text-7xl">
                Unlock Premium Free.
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 md:text-lg">
              Get premium legal access by recommending Fake.legal’s paid plan—track progress in
              real time and unlock rewards faster.
            </p>
          </>
        }
      >
        <Image
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1800&q=80"
          alt="Legal workspace"
          height={900}
          width={1400}
          className="mx-auto h-full rounded-2xl object-cover object-center"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
