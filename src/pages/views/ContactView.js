import React from "react";
import Profile from "../../sections/contact/Profile.js";
import ContactForm from "../../sections/contact/ContactForm.js";

const ContactView = ({ profile }) => {
  return (
    <section className="contact container" id="contact">
      <div className="content row">
        <h4>책임감 강하고 열정있는 신입을 원한다면 이쪽으로 연락주세요</h4>
        <Profile profile={profile} />
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactView;
