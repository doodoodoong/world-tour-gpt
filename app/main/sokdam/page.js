import Input from "@/app/components/main1/Input";
import Title from "@/app/components/main1/Title";

export default function Sokdam() {
  return (
    <div>
      <Title
        gradient={"linear-gradient(to right, #fa709a 0%, #fee140 100%)"}
        title={"알고 싶은 주제의 속담을 물어보세요"}
      />
      <Input placeholder={"예: 음식에 대한 속담 3개 알려줘"} />
    </div>
  );
}
