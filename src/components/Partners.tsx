
const Partners = () => {
  return (
    <div className="w-full px-4 md:px-10 flex flex-col bg-background pt-10">
      <h3 className="text-center text-6xl md:text-7xl hatten-font text-white">
        OUR PARTNERS
      </h3>
      <div className="mt-8 md:mt-14 flex flex-wrap justify-around gap-8 md:h-20">
        <img src="/partners/ksum.png" className="h-16 md:h-full w-auto" alt="" />
        <img src="/partners/coders.png" className="h-16 md:h-full w-auto" alt="" />
        <img src="/partners/huddle.png" className="h-16 md:h-full w-auto" alt="" />
        <img src="/partners/coders.png" className="h-16 md:h-full w-auto" alt="" />
        <img
          src="/partners/mulearn.png"
          className="h-16 md:h-full w-auto py-4"
          alt=""
        />
      </div>
    </div>
  );
};

export default Partners;
