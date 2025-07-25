import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import companies from "../data/companies.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Landing = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20 text-center px-200">
      <section className="text-center  flex flex-col justify-center items-center">
        <h1 className="flex flex-col items-center justify-center gradient-title font-extrabold text-4xl sm:text-6xl lg:text-8xl tracking-tighter py-4">
          Find Your Dream Job
          <span className="flex items-center gap-2 sm:gap-6">
            with
            <img
              src="/logo.png"
              className="h-14 p-5 mt-2 sm:h-24 lg:h-32"
              alt="nextHire Logo"
            />
          </span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Explore thousands of job listings or find the perfect candidate
        </p>
      </section>
      <div className="flex gap-8 justify-center">
        <Link to={"/jobs"}>
  <Button className="w-40 h-12 text-lg" variant="destructive">
    Find Jobs
  </Button>
</Link>
<Link to={"/post-job"}>
  <Button className="w-40 h-12 text-lg" variant="destructive">
    Post a Job
  </Button>
</Link>
      </div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full py-10"
      >
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map(({ name, id, path }) => (
            <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 ">
              <img
                src={path}
                alt={name}
                className="h-9 sm:h-14 object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </main>
  );
};

export default Landing;
