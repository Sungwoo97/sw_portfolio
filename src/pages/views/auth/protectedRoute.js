import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { supabase } from "../../../supabase";

const ProtectedRoute = ({}) => {
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
  console.log(session);

  if (!session || session === null) {
    navigate("/login");
  }
  return navigate("/insert");
};

export default ProtectedRoute;
