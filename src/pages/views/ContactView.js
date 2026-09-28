import React from "react";
import Profile from "./contact/Profile.js";
import ContactForm from "./contact/ContactForm.js";

const ContactView = ({ profile }) => {
  return (
    <section className="contact container" id="contact">
      <div className="content row">
        <h4>PHP 실무 경험을 갖춘 개발자를 찾고 계신다면 연락해 주세요.</h4>
        <Profile profile={profile} />
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactView;
