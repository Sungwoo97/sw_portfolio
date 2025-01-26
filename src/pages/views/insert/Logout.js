import React from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../supabase";

const Logout = () => {
  const navigate = useNavigate(); //useNavigate 초기화(실행)

  const handleSignOut = () => {
    supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <button className="btn logout" type="button" onClick={handleSignOut}>
      로그아웃
    </button>
  );
};

export default Logout;
