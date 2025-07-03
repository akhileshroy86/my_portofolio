import HeroText from "./HeroText";
import HeroTextMobile from "./HeroTextMoblie";
import HeroTextTablet from "./HeroTextTablet";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen overflow-hidden c-space text-center md:text-left px-4 pt-2 md:pt-2">
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">

        {/* ✅ Mobile (<768px) */}
        <div className="block md:hidden w-full">
          <HeroTextMobile />
        </div>

        {/* ✅ Tablet (768px - 1023px) */}
        <div className="hidden md:block lg:hidden w-full">
          <HeroTextTablet />
        </div>

        {/* ✅ Desktop (≥1024px) */}
        <div className="hidden lg:block w-full">
          <HeroText />
        </div>

      </div>
    </section>
  );
}
