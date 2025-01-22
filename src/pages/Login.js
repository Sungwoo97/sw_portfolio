import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 대신 import
import { supabase } from "../supabase";
import { HelmetProvider } from "react-helmet-async";
import Helmet from "../components/Helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); //useNavigate 초기화(실행)

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Reset previous error message

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log(data);
    if (data.user) {
      console.log("로그인 성공");
      navigate("/insert"); // Redirect to /insert page on successful login
    } else {
      console.log(error);
    }
    setLoading(false);
  };
  return (
    <HelmetProvider>
      <Helmet />
      <Header />
      <main>
        <section className="login container" id="login">
          <form action="/" className="col-md-6" onSubmit={handleLogin}>
            <h2>관리자 로그인</h2>
            <label htmlFor="login_email" className="hidden"></label>
            <input
              type="login_email"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="login_password" className="hidden"></label>
            <input
              id="login_password"
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="btn">
              {loading ? "로그인 중..." : "로그인"}
            </button>
          </form>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </section>
      </main>
      <Footer />
    </HelmetProvider>
  );
};

export default Login;
