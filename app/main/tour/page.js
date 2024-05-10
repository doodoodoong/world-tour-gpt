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
        title={"세계 도시들의 여행장소를 추천 받으세요."}
      />
      <Input
        placeholder={
          "예:여수의 자연환경, 문화, 역사가 드러나는 여행장소 추천해줘."
        }
      />
    </div>
  );
}
