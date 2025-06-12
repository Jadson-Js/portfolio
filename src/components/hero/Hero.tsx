import { Content } from "./Content";
import { Profile } from "./Profile";
// import { Content } from "./Content";

export function Hero() {
  return (
    <section className="px-8 py-8 md:py-16">
      <div className="container mx-auto flex flex-col justify-csenter">
        <span className="text-5xl text-primary inline text-center mb-8 md:mb-16 md:text-7xl">
          Hello World!
        </span>

        <div className="flex flex-col justify-center items-center gap-16 md:flex-row md:gap-16">
          <Profile />
          <Content />
        </div>
      </div>
    </section>
  );
}
