import React, { useState } from "react";
import { supabase } from "../../../supabase";

const InsertFrom = () => {
  const [formData, setFormData] = useState({
    title: "",
    member_count: "",
    skills: [], // Array instead of comma-separated input
    features: [], // Array instead of comma-separated input
    overview: "",
    attach: "",
    contribution: "",
    problems: [],
  });

  const [skillInput, setSkillInput] = useState("");
  const [featureInput, setFeatureInput] = useState("");
  const [problemInput, setProblemInput] = useState("");
  const [file, setFile] = useState(null);

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

  const addProblem = () => {
    if (problemInput.trim()) {
      setFormData({
        ...formData,
        problems: [...formData.problems, problemInput.trim()],
      });
      setProblemInput("");
    }
  };

  const removeProblem = (index) => {
    const updatedProblem = formData.problems.filter((_, i) => i !== index);
    setFormData({ ...formData, problems: updatedProblem });
  };

  const handleFileChange = (e) => {
    const attachFile = e.target.files[0];
    setFile(attachFile);
  };

  async function uploadFile(file) {
    const fileName = `${Date.now()}-${file.name}`;
    const filePath = `attach/${fileName}`;
    const { data, error } = await supabase.storage
      .from("projects")
      .upload(filePath, file);
    if (error) {
      alert("파일 업로드 실패");
      console.log(error);
    } else {
      alert("파일 업로드 성공");
      console.log(data);
      return filePath;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let thumbnailPath = null;
    if (file) {
      const uploadedFilePath = await uploadFile(file);
      if (uploadedFilePath) {
        thumbnailPath = uploadedFilePath;
      }
    }

    const dataToSubmit = {
      ...formData,
      member_count: parseInt(formData.member_count, 10),
      attach: thumbnailPath,
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
    <form className="col-md-8" onSubmit={handleSubmit}>
      <div>
        <label className="hidden">Title:</label>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label className="hidden">Member Count:</label>
        <input
          type="number"
          name="member_count"
          placeholder="Member Count"
          value={formData.member_count}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label className="hidden">Skills:</label>
        <div className="arrayInput">
          <input
            type="text"
            placeholder="Skills"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
          />
          <button className="btn" type="button" onClick={addSkill}>
            추가
          </button>
        </div>
        <ul className="arrayList">
          {formData.skills.map((skill, index) => (
            <li key={index}>
              {skill}{" "}
              <button
                className=""
                type="button"
                onClick={() => removeSkill(index)}
              >
                x
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <label className="hidden">Features:</label>
        <div className="arrayInput">
          <input
            type="text"
            value={featureInput}
            placeholder="Features"
            onChange={(e) => setFeatureInput(e.target.value)}
          />
          <button className="btn" type="button" onClick={addFeature}>
            추가
          </button>
        </div>
        <ul className="arrayList">
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
        <label className="hidden">Overview:</label>
        <textarea
          name="overview"
          placeholder="Overview"
          value={formData.overview}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="attachLabel" htmlFor="attach">
          <div>Attach File Add</div>
        </label>
        <input
          id="attach"
          className="hidden"
          type="file"
          name="attach"
          placeholder="Attach"
          value={formData.attach}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="hidden">Contribution:</label>
        <textarea
          name="contribution"
          placeholder="Contribution"
          value={formData.contribution}
          onChange={handleChange}
        />
      </div>

      <div>
        <div className="arrayInput">
          <label className="hidden">Problems (JSON string):</label>
          <input
            type="text"
            name="problems"
            placeholder="Problems"
            value={problemInput}
            onChange={(e) => setProblemInput(e.target.value)}
          />
          <button className="btn" type="button" onClick={addProblem}>
            추가
          </button>
        </div>
        <ul className="arrayList">
          {formData.problems.map((problem, index) => (
            <li key={index}>
              {problem}{" "}
              <button
                className=""
                type="button"
                onClick={() => removeProblem(index)}
              >
                x
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <label className="hidden">title (JSON string):</label>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={problemInput}
          onChange={(e) => setProblemInput(e.target.value)}
        />
      </div>
      <div>
        <label className="hidden">issue (JSON string):</label>
        <input
          type="text"
          name="issue"
          placeholder="issue"
          value={problemInput}
          onChange={(e) => setProblemInput(e.target.value)}
        />
      </div>
      <div>
        <label className="hidden">cause (JSON string):</label>
        <input
          type="text"
          name="cause"
          placeholder="cause"
          value={problemInput}
          onChange={(e) => setProblemInput(e.target.value)}
        />
      </div>
      <div>
        <label className="hidden">solution (JSON string):</label>
        <input
          type="text"
          name="solution"
          placeholder="solution"
          value={problemInput}
          onChange={(e) => setProblemInput(e.target.value)}
        />
      </div>
      <button className="btn" type="submit">
        입력
      </button>
    </form>
  );
};

export default InsertFrom;
