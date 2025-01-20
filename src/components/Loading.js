import { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";

const Loading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 2초 후 로딩 상태를 false로 변경
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2000ms = 2초

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머를 클리어
  }, []);

  return (
    loading && (
      <TailSpin
        visible={loading}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    )
  );
};

export default Loading;
