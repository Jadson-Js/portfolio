import { Content } from "./Content";
import { Profile } from "./Profile";
import { Ticker } from "./Ticker";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-100px)] px-8 py-4 md:py-8 flex ">
      <div className="max-w-[1200px] container mx-auto  flex flex-col gap-4 md:gap-8 justify-center  mb-16 md:mb-4">
        <span className="text-center text-5xl text-primary inline-block md:text-7xl">
          Hello World!
        </span>

        <div className="flex flex-col items-center justify-center gap-16 md:flex-row">
          <Profile />
          <Content />
        </div>
      </div>

      <Ticker />
    </section>
  );
}
