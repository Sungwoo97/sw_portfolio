import { TailSpin } from "react-loader-spinner";

// 화면 전체를 덮는 중앙 정렬 로딩 오버레이.
// 표시/숨김은 부모(App)가 마운트/언마운트로 제어한다.
// (예전에는 여기 2초 타이머가 있어, CDN 로드가 2초보다 오래 걸리면
//  스피너가 먼저 사라져 빈 화면이 됐다. 그 타이머를 제거했다.)
const Loading = () => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#121212",
        zIndex: 9999,
      }}
    >
      <TailSpin
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
      />
    </div>
  );
};

export default Loading;
