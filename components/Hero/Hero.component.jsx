const style="text-2xl md:text-4xl lg:text-6xl"
const size="text-xs md:text-sm"

export const Hero = () => {
  return (
    <div className="w-full h-full text-center">
      <p className={"uppercase mb-5 tracking-widest text-gray-500 pt-40 "+size}>
        let&apos;s build something together
      </p>
      <h1 className={style}>
        Hi I&apos;m <span className="text-blue-500">Mahyar</span>
      </h1>
      <h1 className={style + " mt-3"}>A Front-end Web Developer</h1>
      <p className={"w-1/2 mx-auto tracking-widest text-gray-500 mt-4 "+size}>
        I&apos;m focused on building responsive front-end web applications while
        learning back-end technologies.
      </p>
    </div>
  );
};
