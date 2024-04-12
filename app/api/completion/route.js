import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = "edge";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

function buildPrompt(prompt, path) {
  const messageMap = {
    "/main/tour":
      "의 자연환경과 문화, 역사가 드러나는 여행장소를 3군데 추천해줘.",
    "/main/sokdam": "관련된 한국속담을 5개 알려줘.",
  };

  const content = messageMap[path];
  return prompt.split("\n").map((message) => ({
    role: "user",
    content: `너는 초등학교 6학년 학생을 가르치는 선생님이야. 초등학생들에게 유해한 내용을 알려줘선 안되. 친절하고 상냥하게 알려줘. 한글로 최대한 쉽게 풀어서 설명해줘야해.${message}${content}`,
  }));
}

export async function POST(req) {
  const { prompt } = await req.json();
  const path = new URL(req.url, `http://${req.headers.host}`).pathname;

  const response = await openai.chat.completions.create({
    model: "gpt-4",
    stream: true,
    messages: buildPrompt(prompt),
    temperature: 0.2,
  });
  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
