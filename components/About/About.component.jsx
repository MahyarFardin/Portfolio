import Image from "next/image";
import img from "../../public/1.jpeg";

const style = "mt-5 mb-5 tracking-widest text-gray-500";
const langStyle = "text-blue-500 underline font-bold uppercase";
const specStyle = "text-emerald-500 underline font-bold uppercase";

export const About = () => {
  return (
    <div className="w-full h-full mt-28 p-16">
      <div className="grid grid-cols-1 md:grid-cols-2 align-middle">
        <div className="self-center">
          <h3 className="text-2xl text-blue-500 underline">About</h3>
          <p className={style}>
            I am a computer enthuast and programmer. I have been spent
            last 2 years of my life with my computer learning new things. As an
            instance <span className={langStyle}>python</span> and{" "}
            <span className={langStyle}>java</span> as tool for Ai and
            Algorithms. I explored the world of{" "}
            <span className={specStyle}>Machine learning</span>,{" "}
            <span className={specStyle}>Data Science</span> and Some{" "}
            <span className={specStyle}>Neural Networks</span>. Currently I am
            learning and implimenting Algorithms.
          </p>
          <p className={style}>
            <span className={specStyle}>Front-end</span> is also an intrest of
            mine.{" "}
            <span className={langStyle}>
              HTML, CSS, SASS, JAVASCRIPT, REACT{" "}
            </span>
            and <span className={langStyle}>NEXT</span> are my new curiosity. I
            am Interested in implinting interactive websites and facing new
            challenges. Learning new things really helped me in this area and I
            have a lot to learn and do here.
          </p>
        </div>
        <div className="flex justify-center">
          <Image className="mx-auto rounded-xl object-cover" src={img} />
        </div>
      </div>
    </div>
  );
};
