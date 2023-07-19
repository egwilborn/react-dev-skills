import { useState } from "react";
import "./NewSkillForm.css";

export default function NewSkillForm({ addSkill }) {
  //state variables go here
  const [formSkill, setFormskill] = useState({
    name: "",
    level: 3,
  });

  const [errorMessage, setErrorMessage] = useState("");
  //functions go here

  //to render onscreen when any changes are made by adding those changes to state
  function handleChange(e) {
    setFormskill({
      ...formSkill,
      [e.target.name]: e.target.value,
    });
  }
  //to make sure the level value is a number
  function formatFormSkill(skill) {
    return {
      ...formSkill,
      level: Number(skill.level),
    };
  }

  //to submit the form to take the form state and add it to the app state
  function handleSubmit(e) {
    e.preventDefault(); //keeps the page from refreshing when the form is submitted
    if (formSkill.name === "") {
      return setErrorMessage("Please fill in the skill before submitting");
    }
    //adds the skill from the form into the AddSkill function (after it's formatted)
    addSkill(formatFormSkill(formSkill));
    //resets the form values
    setFormskill({
      name: "",
      level: "3",
    });
    setErrorMessage("");
  }

  //rendering of the page goes here
  return (
    <div>
      <span className="error-message">{errorMessage}</span>
      <form className="NewSkillForm" onSubmit={handleSubmit}>
        <label>Skill</label>
        <input
          type="text"
          name="name"
          value={formSkill.name}
          onChange={handleChange}
        ></input>
        <label>Level</label>
        <select value={formSkill.level} name="level" onChange={handleChange}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <button type="submit">ADD SKILL</button>
      </form>
    </div>
  );
}
