import React from "react";

const AboutView = () => {
  // 폼 제출 이벤트 핸들러
  const handleSubmit = (e) => {
    e.preventDefault(); // 페이지 새로고침 방지
    alert("폼이 제출되었습니다!"); // 추후 Supabase 연동으로 변경 가능
  };
  return (
    <form action="/" className="col-md-6" onSubmit={handleSubmit}>
      <label HTMLFor="name" className="hidden"></label>
      <input
        type="text"
        id="name"
        placeholder="Name"
        aria-label="Enter your name"
      />
      <label HTMLFor="email" className="hidden"></label>
      <input
        type="email"
        id="email"
        placeholder="Email"
        aria-label="Enter your email"
      />
      <label HTMLFor="Message" className="hidden"></label>
      <textarea
        name="Message"
        id="Message"
        placeholder="Message"
        aria-label="Enter your message"
      ></textarea>
      <button type="submit" className="btn">
        보내기
      </button>
    </form>
  );
};
export default AboutView;
