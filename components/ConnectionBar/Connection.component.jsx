import { ConnectionBdage } from "../ConnectionBadge/ConnectionBadge.component";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsPersonBoundingBox } from "react-icons/bs";

const color = { color: "#3b82f6", margin: "auto" };
export const ConnectionBar = () => {
  return (
    <div className="w-full mt-6">
      <div className="max-w-sm mx-auto flex justify-between px-6 md:px-0">
        <ConnectionBdage link="https://github.com/MahyarFardin">
          <AiFillGithub size={30} style={color} />
        </ConnectionBdage>

        <ConnectionBdage link="www.linkedin.com/in/mahyar-fardinfar">
          <FaLinkedinIn size={30} style={color} />
        </ConnectionBdage>

        <ConnectionBdage link="mailto:mahyarfardinfar@gmail.com">
          <AiOutlineMail size={30} style={color} />
        </ConnectionBdage>

        <ConnectionBdage link="/resume">
          <BsPersonBoundingBox size={30} style={color} />
        </ConnectionBdage>
      </div>
    </div>
  );
};
