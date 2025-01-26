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
        <label className="hidden">Attach (JSON string):</label>
        <input
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
        <label className="hidden">Problems (JSON string):</label>
        <textarea
          name="problems"
          placeholder="Problems"
          value={formData.problems}
          onChange={handleChange}
          npm
        />
      </div>

      <button className="btn" type="submit">
        입력
      </button>
    </form>
  );
};

export default InsertFrom;
