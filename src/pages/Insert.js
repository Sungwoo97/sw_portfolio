import React, { useEffect, useState } from "react";
import "../css/insert.css";
import { useNavigate } from "react-router-dom"; // useNavigate 대신 import
import { HelmetProvider } from "react-helmet-async";
import Helmet from "../components/Helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import InsertFrom from "./views/insert/InsertFrom";
import { supabase } from "../supabase";

const Insert = () => {
  const [session, setSession] = useState(null);
  const navigate = useNavigate(); //useNavigate 초기화(실행)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, [session]);

  useEffect(() => {
    if (!session) {
      navigate("/login");
    }
  }, [session]);

  return (
    <HelmetProvider>
      <Helmet />
      <Header />
      <main>
        <section className="insert container" id="insert">
          {/* <InsertFrom /> */}
        </section>
      </main>
      <Footer />
    </HelmetProvider>
  );
};

export default Insert;
