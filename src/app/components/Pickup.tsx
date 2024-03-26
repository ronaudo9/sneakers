"use client";
import dynamic from "next/dynamic";
import { SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";

type Options = {
  type: string;
  gap: string;
  fixedWidth: string;
  heightRatio: number;
  pagination: boolean;
  height: string;
  drag: boolean | "free";
  flickPower: number;
  autoplay: boolean;
  interval: number;
  pauseOnHover: boolean;
  pauseOnFocus: boolean;
  breakpoints: {
    [key: number]: {
      fixedWidth?: string;
    };
  };
};

const DynamicSplide = dynamic(
  () => import("@splidejs/react-splide").then((mod) => mod.Splide),
  {
    ssr: false,
    loading: () => <p>リロードボタンを押してください...</p>,
  },
);

export const Pickup = () => {
  const options: Options = {
    type: "loop",
    gap: "60px",
    fixedWidth: "408px",
    heightRatio: 0.3,
    pagination: false,
    height: "256px",
    drag: "free",
    flickPower: 100,
    autoplay: true,
    interval: 2000,
    pauseOnHover: true,
    pauseOnFocus: true,
    breakpoints: {
      920: {
        fixedWidth: "430px",
      },
    },
  };

  return (
    <div id="pickup" className="mb-24 mt-[-80px] pt-20">
      <div
        className="mb-7 h-14
         text-center text-4xl font-bold italic"
      >
        PICK UP
      </div>
      <div className=" h-64 w-full">
        <DynamicSplide options={options}>
          {[...Array(9)].map((_, i) => (
            <SplideSlide key={i}>
              <Image
                src={`/pickup${i + 1}.jpg`}
                alt={`Pickup ${i + 1}`}
                width={408}
                height={256}
              />
            </SplideSlide>
          ))}
        </DynamicSplide>
      </div>
    </div>
  );
};
