import star from "../assets/icons/star.svg";

interface TimelineProps {
  date: string;
  description: string;
  className?: string;
}

const TimelineCard = ({ date, description, className }: TimelineProps) => {
  return (
    <div className={`w-full sm:w-3/5 lg:w-2/5 flex flex-col ${className}`}>
      <div className="flex gap-4 items-center">
        <span className="urbanist-font text-5xl sm:text-7xl text-white">
          {date}
        </span>
        <img src={star} className="h-10 w-auto" alt="" />
      </div>
      <p className="text-[#6D787F] exo-font text-sm xl:text-base mt-2">{description}</p>
    </div>
  );
};

export default TimelineCard;
