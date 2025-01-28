import React, { useEffect, useState } from "react";
import "../css/insert.css";
import { useNavigate } from "react-router-dom"; // useNavigate 대신 import
import { HelmetProvider } from "react-helmet-async";
import Helmet from "../components/Helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InsertFrom from "./views/insert/InsertFrom";
import { supabase } from "../supabase";
import Logout from "./views/insert/Logout";

const Insert = () => {
  const [session, setSession] = useState(null);
  const navigate = useNavigate(); //useNavigate 초기화(실행)

  // supabase의 로그인 데이터를 가져와서 데이터가 없다면 login 페이지로
  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data);
      if (!data.session) {
        navigate("/login"); // 세션 없을 시 로그인 페이지로 이동
      }
    };
    checkSession();
  }, [session]);

  return (
    <HelmetProvider>
      <Helmet />
      <Header />
      <main>
        <section className="insert container" id="insert">
          <h3>프로젝트 목록 입력</h3>
          <InsertFrom />
          <Logout />
        </section>
      </main>
      <Footer />
    </HelmetProvider>
  );
};

export default Insert;
