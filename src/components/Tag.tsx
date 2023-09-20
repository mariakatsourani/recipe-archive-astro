import { SITE_BASE } from "../consts";

type TagType = "category" | "cookingTime" | "tag";
type TagProps = { name: string; type: TagType };

const tagColorMap: Record<TagType, string> = {
  category: "blue-light",
  cookingTime: "green",
  tag: "purple",
};

export const Tag = ({ name, type }: TagProps) => {
  return (
    <li
      className={`my-1 mr-1 p-0.5 px-2 rounded-md  text-sm bg-${tagColorMap[type]}`}
    >
      <a href={`${SITE_BASE}/${name}`}>{name}</a>
    </li>
  );
};
