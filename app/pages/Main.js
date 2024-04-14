import Title from "../components/main1/Title";
import Input from "../components/main1/Input";

export const runtime = "edge";
export default function Main() {
  return (
    <div className="slide-up">
      <Title
        gradient={"linear-gradient(to right, #a6c0fe 0%, #f68084 100%)"}
        title={"원하는 메뉴를 위쪽에서 고르세요"}
      />
      <Input />
    </div>
  );
}
