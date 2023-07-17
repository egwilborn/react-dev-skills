import SkillsList from "./SkillsList";
import NewSkillForm from "./NewSkillForm";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>React Dev Skills</h1>
      <SkillsList />
      <NewSkillForm />
    </div>
  );
}
