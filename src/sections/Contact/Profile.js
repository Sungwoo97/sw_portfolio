import React from "react";

const Profile = ({ profile }) => {
  return (
    <div className="myInfo col-md-4">
      <dl>
        <dt>
          <img src="./img/email.svg" alt="" />
          이메일
        </dt>
        <dd>{profile.email}</dd>
        <dt>
          <img src="./img/phone.svg" alt="" />
          연락처
        </dt>
        <dd>{profile.phone}</dd>
        <dt>
          <img src="./img/home.svg" alt="" />
          주소
        </dt>
        <dd>{profile.address}</dd>
      </dl>
    </div>
  );
};
export default Profile;
