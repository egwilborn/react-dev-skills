import SkillListItem from "./SkillListItem";

export default function SkillsList({ skills }) {
  const skillItems = skills.map(function (item, idx) {
    return <SkillListItem key={idx} name={item.name} level={item.level} />;
  });
  return <ul className="padding-0">{skillItems}</ul>;
}
