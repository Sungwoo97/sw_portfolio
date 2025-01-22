import React, { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "../../../supabase"; // supabase 클라이언트 가져오기

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkSession = async () => {
      const { data: session } = await supabase.auth.getSession(); // getSession() 사용
      console.log(session.user);
      if (session) {
        setUser(session.user); // 세션이 있으면 사용자 정보 저장
      }
    };

    checkSession();

    // 로그인 상태 변화 감지
    const { data: subscription, error } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session) {
          setUser(session.user); // 세션이 있으면 사용자 정보 저장
        } else {
          setUser(null); // 세션이 없으면 사용자 정보 초기화
        }
      }
    );

    console.log("구독 객체:", subscription); // 구독 객체 로그 출력

    // 컴포넌트가 언마운트될 때 구독 해제
    return () => {
      if (subscription && typeof subscription.unsubscribe === "function") {
        subscription.unsubscribe(); // 구독 객체가 존재하고 unsubscribe가 함수일 경우만 호출
      }
    };
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
