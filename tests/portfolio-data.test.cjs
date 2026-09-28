const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const assert = require("node:assert/strict");

const projectRoot = path.resolve(__dirname, "..");
const data = require(path.join(projectRoot, "src", "data.json"));

const expectedProjects = [
  {
    id: 1,
    title: "Korail Renewal Project (개인)",
    detailTitle: "Let's Korail Renewal Project",
    image: "./img/upload/letskorail_renewal.png",
  },
  {
    id: 2,
    title: "KIA Renewal Project (팀)",
    detailTitle: "KIA Renewal Project",
    image: "./img/upload/Kia_Renewal.png",
  },
  {
    id: 3,
    title: "LMS 웹사이트 관리자 페이지 (팀)",
    detailTitle: "LMS 웹사이트 관리자 페이지 구현",
    image: "./img/upload/LMS_admin.png",
  },
  {
    id: 4,
    title: "LMS 웹사이트 사용자 페이지 (팀)",
    detailTitle: "LMS 웹사이트 사용자 페이지 구현",
    image: "./img/upload/LMS_user.png",
  },
  {
    id: 5,
    title: "서비스 접수 ERP",
    detailTitle: "서비스 접수 ERP",
    live: "https://sungwoo-lms.duckdns.org/erp/",
    image: "./img/upload/service_erp.png",
  },
  {
    id: 6,
    title: "Quantum Code LMS",
    detailTitle: "Quantum Code LMS",
    live: "https://sungwoo-lms.duckdns.org/qc/",
    image: "./img/upload/quantum_code_lms.png",
  },
  {
    id: 7,
    title: "Cat-Log 묘생일기",
    detailTitle: "Cat-Log 묘생일기",
    live: "https://sungwoo-lms.duckdns.org/diary/",
    image: "./img/upload/cat_log_diary.png",
  },
];

test("기존 프로젝트 4개 뒤에 ERP, QC, Cat-Log를 추가한다", () => {
  assert.equal(data.projects.length, 7);

  expectedProjects.forEach((expectedProject, index) => {
    const project = data.projects[index];

    assert.equal(project.id, expectedProject.id);
    assert.equal(project.title, expectedProject.title);
    assert.equal(project.image, expectedProject.image);

    if (expectedProject.live) {
      assert.equal(project.links.live, expectedProject.live);
    }
  });
});

test("각 메인 프로젝트는 같은 id의 상세 프로젝트와 실제 썸네일을 가진다", () => {
  expectedProjects.forEach((expectedProject) => {
    const detailProject = data.detail_projects.find(
      ({ id }) => id === String(expectedProject.id)
    );
    const imagePath = path.join(
      projectRoot,
      "public",
      expectedProject.image.replace("./img/", "img/")
    );

    assert.ok(detailProject);
    assert.equal(detailProject.title, expectedProject.detailTitle);
    assert.equal(fs.existsSync(imagePath), true);
  });
});
