const Landing = () => {
  return (
    <div className="xl:min-h-screen flex items-end justify-center text-white bg-[url('/landing_bg.webp')] bg-cover bg-center md:px-8">
      <div className="mb-12 max-xl:mt-48">
        <p className="text-[#D3184F] hatten-font text-[20vw] text-center leading-none relative">
          <img
            src="/arrows/landing_arrow_1.svg"
            alt=""
            className="absolute -top-[45%] right-[2%] h-[16vw]"
          />
          TOP 100 SERIES
        </p>
        <div className="p-2 px-6 flex justify-between">
          <p className="text-[#B3B3B3] exo-font text-base xl:text-lg max-sm:text-sm md:w-2/4">
            Building on the successful completion of the first edition, μLearn
            in collaboration with Kerala Startup Mission (KSUM), proudly
            presents the Top 100 Series 2024. This year, we are raising the bar
            - not only to spotlight the top coders of the nation, but also to
            celebrate the top hundred talents in designing, hardware development
            and product innovation.{" "}
          </p>
          <img src="/pattern.svg" className="max-sm:hidden" alt="" />
        </div>
        <img src="/arrows/landing_arrow_2.svg" alt="" />
      </div>
    </div>
  );
};

export default Landing;
