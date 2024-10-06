const About = () => {
  return (
    <div className="p-8 md:p-20 bg-background pb-16 md:pb-32">
      <div
        style={{
          boxShadow: "12px 12px 0px #6A54AA",
        }}
        className="bg-[#FFD933] p-12 md:p-24 relative"
      >
        <p className="text-black exo-font text-xl md:text-3xl text-center">
          Top 100 Series aims to highlight and empower India’s top innovative
          talents in the fields of coding, designing and hardware development
          and product innovation. Through well curated challenges and expert
          guidance, we help individuals connect, grow and gain global
          recognition.
        </p>
        <img
          src="/stars/right_star.svg"
          className="absolute -top-0 -right-0 translate-x-1/2 -translate-y-1/2 md:w-auto"
          alt=""
        />
        <img
          src="/stars/left_star.svg"
          className="absolute -bottom-0 -left-0 -translate-x-1/2 translate-y-1/2 md:w-auto"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
