import { InputFile } from "./components/input-file";
import { MyDropzone } from "./components/input-file-2";

export default function HomePage() {
  return (
    <>
      <div className="w-full min-h-screen bg-purple-300 flex justify-center items-center">
        <InputFile />
      </div>
      <div className="w-full min-h-screen bg-yellow-100 flex justify-center items-center">
        <MyDropzone />
      </div>
    </>
  );
}
