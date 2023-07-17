import SkillsList from "./SkillsList";
import NewSkillForm from "./NewSkillForm";

import "./App.css";

const skills = [
  { name: "HTML", level: 5 },
  { name: "CSS", level: 3 },
  { name: "JavaScript", level: 4 },
  { name: "Python", level: 2 },
];
export default function App() {
  return (
    <div className="App">
      <h1 className="teal-text">React Dev Skills</h1>
      <SkillsList skills={skills} />
      <hr />
      <NewSkillForm />
    </div>
  );
}
