import { SkillBadge } from "../SkillBadge/Skillbadge.component";
import { AiFillHtml5 } from "react-icons/ai";
import {
  DiCss3,
  DiSass,
  DiPython,
  DiReact,
  DiJavascript1,
  DiJava,
  DiGithubBadge,
  DiLinux,
} from "react-icons/di";
import { SiNextdotjs, SiBootstrap, SiTailwindcss } from "react-icons/si";

export const Skills = () => {
  return (
    <div className="w-full p-16">
      <h3 className="text-2xl text-blue-500 underline">Skills</h3>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 my-8">
        <SkillBadge name="html">
          <AiFillHtml5 className="text-orange-500" size={50} />
        </SkillBadge>
        <SkillBadge name="css">
          <DiCss3 className="text-blue-500" size={50} />
        </SkillBadge>
        <SkillBadge name="Sass">
          <DiSass className="text-pink-700" size={50} />
        </SkillBadge>
        <SkillBadge name="javascript">
          <DiJavascript1 className="text-yellow-500" size={50} />
        </SkillBadge>
        <SkillBadge name="react">
          <DiReact className="text-blue-400" size={50} />
        </SkillBadge>
        <SkillBadge name="next">
          <SiNextdotjs size={50} />
        </SkillBadge>
        <SkillBadge name="bootstrap">
          <SiBootstrap className="text-pink-600" size={50} />
        </SkillBadge>
        <SkillBadge name="tailwind">
          <SiTailwindcss className="text-sky-600" size={50} />
        </SkillBadge>
        <SkillBadge name="python">
          <DiPython size={50} />
        </SkillBadge>
        <SkillBadge name="java">
          <DiJava className="text-red-500" size={50} />
        </SkillBadge>
        <SkillBadge name="git">
          <DiGithubBadge size={50} />
        </SkillBadge>
        <SkillBadge name="linux">
          <DiLinux size={50} />
        </SkillBadge>
      </div>
    </div>
  );
};
