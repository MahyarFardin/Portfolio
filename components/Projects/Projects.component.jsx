import Image from "next/image";
import { ProjectButton } from "../ProjectButton/ProjectButton.component";

export const Projects = ({ repositories }) => {
  return (
    <div className="w-full h-auto p-16">
      <h1 className="text-2xl text-blue-500 underline">Projects</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 my-8 gap-5 text-center items-center drop-shadow-xl">
        {repositories.map((repositorie,idx) => {
          return (
            <li key={idx} className="w-full h-96 relative group text-white rounded-2xl ">
			  {console.log(repositorie.image)}
			  <Image src={repositorie.image} layout="fill" objectFit="cover" className="rounded-2xl w-full h-full block" alt="project image" />
              <div className="w-full h-full  bg-gradient-to-t from-gray-800     to-transparent bg-opacity-40 rounded-2xl group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-16">
                <div className="items-center h-full  flex flex-col justify-between py-16">
                  <h1 className="text-3xl">{repositorie.title}</h1>
                  <p>{repositorie.description}</p>
                  <div>
                    <ProjectButton link={repositorie.githubLink} text="Code" />
                    { repositorie.deployLink && <ProjectButton link={repositorie.deployLink} text="Deploy" />}
                  </div>
                </div>
                <div>
                  <ul className="flex overflow-scroll w-full justify-center h-auto ">
                    {repositorie.topics.map((topic,idxx) => {
                      return (
                        <li
                          key={idxx}
                          className={`w-auto px-5 py-2 bg-blue-500 rounded-full mx-1 text-center uppercase whitespace-nowrap`}
                        >
                          {topic}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
