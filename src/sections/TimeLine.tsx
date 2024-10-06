import grid from "../assets/icons/grid.png";
import elipse from "../assets/icons/elipse.svg";
import Arrow1 from "../assets/icons/arrow1.svg";
import Arrow2 from "../assets/icons/arrow2.svg";
import Arrow3 from "../assets/icons/arrow3.svg";
import Arrow4 from "../assets/icons/arrow4.svg";
import { TimeLines } from "../contents";
import TimelineCard from "../components/TimelineCard";

const TimeLine = () => {
  return (
    <div className="w-full bg-background relative overflow-hidden py-14">

      <div className="flex w-full justify-between items-center relative">
        <img src={grid} className="w-[20%] md:w-[30%]" alt="" />
        <h3 className="hatten-font text-[#D3184F] text-6xl sm:text-[calc(100vh/5)] lg:text-[calc(100vh/4)] leading-none">
          TIMELINE
        </h3>
        <img src={grid} className="w-[20%] md:w-[30%] h-auto" alt="" />
      </div>

      <div className="mt-16 xl:mt-24 flex flex-col gap-8 sm:gap-5 px-5 md:px-10 lg:px-16 xl:px-24">

        <div className={`w-full flex relative`}>
          <TimelineCard
            date={TimeLines[0].date}
            description={TimeLines[0].description}
          />
          <img src={Arrow1} className="max-md:hidden" alt="" />
        </div>

        <div className={`w-full flex flex-row-reverse gap-14`}>
          <TimelineCard
            date={TimeLines[1].date}
            description={TimeLines[1].description}
            className="sm:mt-10"
          />
          <img src={Arrow2} className="mt-32 max-md:hidden" alt="" />
        </div>

        <div className={`w-full flex`}>
          <TimelineCard
            date={TimeLines[2].date}
            description={TimeLines[2].description}
          />
        </div>

        <div className={`w-full flex flex-row-reverse gap-14`}>
          <TimelineCard
            date={TimeLines[3].date}
            description={TimeLines[3].description}
          />
          <img src={Arrow3} className="max-md:hidden" alt="" />
        </div>

        <div className={`w-full flex justify-center gap-14`}>
          <TimelineCard
            date={TimeLines[4].date}
            description={TimeLines[4].description}
            className={"sm:mt-20"}
          />
          <img src={Arrow4} className="w-40 max-md:hidden" alt="" />
        </div>

      </div>
      <img
        src={elipse}
        className="sm:w-[70%] h-auto absolute top-0 left-0"
        alt=""
      />
    </div>
  );
};

export default TimeLine;
