import Head from "next/head";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

// import { api } from "@/utils/api";

type AdviceSlip = {
  id: string;
  advice: string;
};

type AdviceResponse = {
  slip: AdviceSlip;
};

export default function Home() {
  const [advice, setAdvice] = useState<AdviceSlip | null>(null);

  const fetchAdvice = useCallback(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json() as Promise<AdviceResponse>)
      .then((data) => setAdvice(data.slip))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetchAdvice();
  }, [fetchAdvice]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === " ") {
        fetchAdvice();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [fetchAdvice]);

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="Advice Generator App" content="advice-generator-app" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-dark-blue">
        {/* Slip Container */}
        {advice && (
          <div className="relative flex max-w-[90%] flex-col justify-around rounded-2xl bg-dark-grayish-blue p-12">
            {/* ID Container */}
            <div className="text-small w-full text-center font-semibold tracking-widest text-neon-green">
              <p>ADVICE # {advice.id}</p>
            </div>
            {/* Advice Container */}
            <div className="py-10 text-center text-[28px] font-extrabold text-light-cyan">
              <p>&quot;{advice.advice}&quot;</p>
            </div>
            {/* Pattern Divider */}
            <div className="mb-8 flex w-full flex-col">
              <div className="border-b-1 w-full"></div>
              <Image
                className="w-full md:hidden"
                src="/images/pattern-divider-mobile.svg"
                width={100}
                height={100}
                alt="Pattern Divider"
              />
              <Image
                className="hidden h-8 w-full md:block"
                src="/images/pattern-divider-desktop.svg"
                width={100}
                height={100}
                alt="Pattern Divider"
              />
              <div className="w-full"></div>
            </div>
            {/* Button Container */}
            <div className="hover absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 transform ">
              <button
                className="hover:bg-hover-neon-green hover:shadow-glow rounded-full bg-neon-green p-4"
                onClick={fetchAdvice}
              >
                <Image
                  className="m-2 h-8 w-8"
                  src="/images/icon-dice.svg"
                  height={100}
                  width={100}
                  alt="Dice Icon"
                />
              </button>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
