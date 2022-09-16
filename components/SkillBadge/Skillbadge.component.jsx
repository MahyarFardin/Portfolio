import anime from "./skillbadge.module.css"

const style = {
  boxShadow:
    "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
};

export const SkillBadge = (props) => {
  return (
    <div
      className={"h-24 grid grid-cols-2 justify-center rounded-xl "+anime.anime}
    >
      <div className="uppercase text-center self-center font-bold">
        <span>{props.name}</span>
      </div>
      <div className="mx-auto self-center">{props.children}</div>
    </div>
  );
};
