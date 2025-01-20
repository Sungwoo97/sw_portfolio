import React from "react";
import List from "./../sections/project/List";

const ProjectView = ({ list }) => {
  return (
    <section className="projectList container" id="project">
      <div className="content ">
        <h4>저는 이런 프로젝트를 진행했어요</h4>
        <div className="listWrapper row">
          {list.map((list) => (
            <List key={list.id} list={list} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProjectView;
