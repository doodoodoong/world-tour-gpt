import Title from "@/app/components/main1/Title";
import Input from "@/app/components/main1/Input";

export const runtime = "edge";
export default function Tour() {
  return (
    <div className="slide-up">
      <Title
        gradient={
          "linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)"
        }
        title={"여행하고 싶은 도시의 이름을 작성하고 엔터를 눌러주세요"}
      />
      <Input
        placeholder={"조사하고 싶은 도시의 이름을 입력하고 엔터를 눌러주세요"}
      />
    </div>
  );
}
