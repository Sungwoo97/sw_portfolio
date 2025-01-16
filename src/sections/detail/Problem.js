import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Problem = ({ data }) => {
  return (
    <section class="problem">
      <h3>프로젝트 문제 해결</h3>
      <Accordion flush>
        {data.problems.map((problem, index) => (
          <Accordion.Item key={index} eventKey={index}>
            <Accordion.Header>{problem.title}</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                  <span>문제</span> {problem.details.issue}
                </li>
                <li>
                  <span>원인</span> {problem.details.cause}
                </li>
                <li>
                  <span>해결</span> {problem.details.solution}
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </section>
  );
};
export default Problem;
