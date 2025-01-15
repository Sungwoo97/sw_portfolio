import React from "react";
import List from "../sections/project/List";

const ProjectView = () => {
  return (
    <section class="projectList container" id="project">
      <div class="content row">
        <h4>저는 이런 프로젝트를 진행했어요</h4>
        <div class="listWrapper col-md-12">
          <List />
        </div>
      </div>
    </section>
  );
};
export default ProjectView;
