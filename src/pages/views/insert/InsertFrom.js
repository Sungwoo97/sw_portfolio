import React, { useState } from "react";
import { supabase } from "../../../supabase";

const InsertFrom = () => {
  console.log(supabase);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    member_count: "",
    skills: "",
    features: "",
    overview: "",
    attach_image: "",
    attach_description: "",
    contribution: "",
    problem_title: "",
    problem_issue: "",
    problem_cause: "",
    problem_solution: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase
        .from("projects")
        .insert([formData]);

      if (error) {
        console.error("Error inserting data:", error);
        alert("Error submitting the form");
      } else {
        console.log("Data successfully inserted:", data);
        alert("Form submitted successfully");
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      alert("Unexpected error occurred");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="col-md-6">
      <label htmlFor="title" className="hidden">
        Title
      </label>
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
      />

      <label htmlFor="member_count" className="hidden">
        Member Count
      </label>
      <input
        type="number"
        id="member_count"
        name="member_count"
        placeholder="Member Count"
        value={formData.member_count}
        onChange={handleChange}
      />

      <label htmlFor="skills" className="hidden">
        Skills
      </label>
      <textarea
        id="skills"
        name="skills"
        placeholder="Skills (comma-separated)"
        value={formData.skills}
        onChange={handleChange}
      ></textarea>

      <label htmlFor="features" className="hidden">
        Features
      </label>
      <textarea
        id="features"
        name="features"
        placeholder="Features (one per line)"
        value={formData.features}
        onChange={handleChange}
      ></textarea>

      <label htmlFor="overview" className="hidden">
        Overview
      </label>
      <textarea
        id="overview"
        name="overview"
        placeholder="Overview (one per line)"
        value={formData.overview}
        onChange={handleChange}
      ></textarea>

      <label htmlFor="attach_image" className="hidden">
        Attach Image
      </label>
      <input
        type="text"
        id="attach_image"
        name="attach_image"
        placeholder="Attach Image URL"
        value={formData.attach_image}
        onChange={handleChange}
      />

      <label htmlFor="attach_description" className="hidden">
        Attach Description
      </label>
      <input
        type="text"
        id="attach_description"
        name="attach_description"
        placeholder="Attach Description"
        value={formData.attach_description}
        onChange={handleChange}
      />

      <label htmlFor="contribution" className="hidden">
        Contributions
      </label>
      <textarea
        id="contribution"
        name="contribution"
        placeholder="Contributions (one per line)"
        value={formData.contribution}
        onChange={handleChange}
      ></textarea>

      <label htmlFor="problem_title" className="hidden">
        Problem Title
      </label>
      <input
        type="text"
        id="problem_title"
        name="problem_title"
        placeholder="Problem Title"
        value={formData.problem_title}
        onChange={handleChange}
      />

      <label htmlFor="problem_issue" className="hidden">
        Problem Issue
      </label>
      <textarea
        id="problem_issue"
        name="problem_issue"
        placeholder="Problem Issue"
        value={formData.problem_issue}
        onChange={handleChange}
      ></textarea>

      <label htmlFor="problem_cause" className="hidden">
        Problem Cause
      </label>
      <textarea
        id="problem_cause"
        name="problem_cause"
        placeholder="Problem Cause"
        value={formData.problem_cause}
        onChange={handleChange}
      ></textarea>

      <label htmlFor="problem_solution" className="hidden">
        Problem Solution
      </label>
      <textarea
        id="problem_solution"
        name="problem_solution"
        placeholder="Problem Solution"
        value={formData.problem_solution}
        onChange={handleChange}
      ></textarea>

      <button type="submit" className="btn">
        입력
      </button>
    </form>
  );
};

export default InsertFrom;
