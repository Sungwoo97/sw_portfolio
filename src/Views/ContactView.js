import React from "react";
import Profile from "../sections/Contact/Profile";
import ContactForm from "../sections/Contact/ContactForm";

const ContactView = () => {
  return (
    <section className="contact container" id="contact">
      <div className="content row">
        <h4>책임감 강하고 열정있는 신입을 원한다면 이쪽으로 연락주세요</h4>
        <Profile />
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactView;
