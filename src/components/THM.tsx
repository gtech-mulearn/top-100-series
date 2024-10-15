import leftArrow from "../assets/icons/leftArrow.svg";
import rightArrow from "../assets/icons/rightArrow.svg";

const THM = () => {
  return (
    <div
      id="thm"
      className="w-full h-screen flex justify-center items-center relative bg-background"
    >
      <div className="flex flex-col items-center gap-8 p-10">
        <a
          className="cursor-pointer"
          href="https://top100coders-acv.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/logos/Coders.png" alt="" />
        </a>
        <a
          className="cursor-pointer"
          href="https://top100designers.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/logos/Designers.png" alt="" />
        </a>
        <a
          className="cursor-pointer"
          href="https://top100makers.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/logos/Makers.png" alt="" />
        </a>
      </div>
      <img
        src={leftArrow}
        className="absolute top-0 md:top-1/2 md:-translate-y-1/2 left-0 max-md:opacity-20"
        alt=""
      />
      <img
        src={rightArrow}
        className="absolute bottom-0 md:top-1/2 md:-translate-y-1/2 right-0 max-md:opacity-20"
        alt=""
      />
    </div>
  );
};

export default THM;
