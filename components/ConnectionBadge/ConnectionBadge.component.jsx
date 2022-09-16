import Link from "next/link";

export const ConnectionBdage = (props) => {
  return (
    <div className="p-4 rounded-full shadow-lg shadow-gray-400 flex align-middle hover:scale-110 cursor-pointer" >
      <Link href={props.link}>{props.children}</Link>
    </div>
  );
};
