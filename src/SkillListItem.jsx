import "./SkillListItem.css";

export default function SkillListItem(props) {
  return (
    <li className="SkillListItem">
      <div>{props.name}</div>
      <div className="level">Level {props.level}</div>
    </li>
  );
}
