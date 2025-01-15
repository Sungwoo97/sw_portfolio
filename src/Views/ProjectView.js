import React from "react";
import List from "../sections/project/List";

const ProjectView = ({ list }) => {
  return (
    <section class="projectList container" id="project">
      <div class="content row">
        <h4>저는 이런 프로젝트를 진행했어요</h4>
        <div class="listWrapper col-md-12">
          {list.map((list) => (
            <List list={list} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProjectView;
