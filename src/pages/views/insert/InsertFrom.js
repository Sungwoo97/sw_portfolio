import React, { useState } from "react";
import { supabase } from "../../../supabase";

const InsertFrom = () => {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    member_count: "",
    skills: [], // Array instead of comma-separated input
    features: [], // Array instead of comma-separated input
    overview: "",
    attach: "",
    contribution: "",
    problems: "",
  });

  const [skillInput, setSkillInput] = useState("");
  const [featureInput, setFeatureInput] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addSkill = () => {
    if (skillInput.trim()) {
      setFormData({
        ...formData,
        skills: [...formData.skills, skillInput.trim()],
      });
      setSkillInput("");
    }
  };

  const removeSkill = (index) => {
    const updatedSkills = formData.skills.filter((_, i) => i !== index);
    setFormData({ ...formData, skills: updatedSkills });
  };

  const addFeature = () => {
    if (featureInput.trim()) {
      setFormData({
        ...formData,
        features: [...formData.features, featureInput.trim()],
      });
      setFeatureInput("");
    }
  };

  const removeFeature = (index) => {
    const updatedFeatures = formData.features.filter((_, i) => i !== index);
    setFormData({ ...formData, features: updatedFeatures });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSubmit = {
      ...formData,
      member_count: parseInt(formData.member_count, 10),
      attach: JSON.parse(formData.attach),
      problems: JSON.parse(formData.problems),
    };

    const { data, error } = await supabase
      .from("projects")
      .insert([dataToSubmit]);

    if (error) {
      console.error("Error inserting data:", error);
    } else {
      console.log("Data inserted successfully:", data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>ID:</label>
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Member Count:</label>
        <input
          type="number"
          name="member_count"
          value={formData.member_count}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Skills:</label>
        <div>
          <input
            type="text"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
          />
          <button type="button" onClick={addSkill}>
            Add
          </button>
        </div>
        <ul>
          {formData.skills.map((skill, index) => (
            <li key={index}>
              {skill}{" "}
              <button type="button" onClick={() => removeSkill(index)}>
                x
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <label>Features:</label>
        <div>
          <input
            type="text"
            value={featureInput}
            onChange={(e) => setFeatureInput(e.target.value)}
          />
          <button type="button" onClick={addFeature}>
            Add
          </button>
        </div>
        <ul>
          {formData.features.map((feature, index) => (
            <li key={index}>
              {feature}{" "}
              <button type="button" onClick={() => removeFeature(index)}>
                x
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <label>Overview:</label>
        <textarea
          name="overview"
          value={formData.overview}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Attach (JSON string):</label>
        <textarea
          name="attach"
          value={formData.attach}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Contribution:</label>
        <textarea
          name="contribution"
          value={formData.contribution}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Problems (JSON string):</label>
        <textarea
          name="problems"
          value={formData.problems}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default InsertFrom;
