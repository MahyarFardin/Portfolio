
export const ProjectButton = (props) => {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <button
        className={
          "bg-white w-28 h-14 text-blue-500 font-bold cursur-pointer rounded-md drop-shadow-2xl mx-5 hover:scale-105"
        }
      >
        {props.text}
      </button>
    </a>
  );
};
