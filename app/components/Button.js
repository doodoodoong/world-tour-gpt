import { roboto } from "../fonts";

export default function Button({ text }) {
  return (
    <div>
      <button className="px-10 py-5 bg-fuchsia-500 rounded-3xl mt-10 hover:bg-fuchsia-700">
        <div>
          <text className={roboto.className}>{text}</text>
        </div>
      </button>
    </div>
  );
}
