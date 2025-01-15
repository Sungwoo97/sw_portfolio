import React from "react";

const Profile = () => {
  return (
    <div className="myInfo col-md-4">
      <dl>
        <dt>
          <img src="./img/email.svg" alt="" />
          이메일
        </dt>
        <dd>gwaja97@gmail.com</dd>
        <dt>
          <img src="./img/phone.svg" alt="" />
          연락처
        </dt>
        <dd>010-2664-8175</dd>
        <dt>
          <img src="./img/home.svg" alt="" />
          주소
        </dt>
        <dd>서울시 서대문구 북가좌동</dd>
      </dl>
    </div>
  );
};
export default Profile;
