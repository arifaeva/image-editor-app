import { useRef, useState } from "react";
import { InputFile } from "./components/input-file";
import html2canvas from "html2canvas";
// import { MyDropzone } from "./components/dropzone";

export default function HomePage() {
  const [isImageLoaded, setIsImageLoaded] = useState(false); // State to track image load status
  const imageContainer = useRef<HTMLDivElement>(null);

  const handleDownloadSnapshot = async () => {
    if (imageContainer.current && isImageLoaded) {
      // Capture the purple div after the image has loaded
      const canvas = await html2canvas(imageContainer.current);
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "snapshot.png"; // You can name the snapshot as desired
      link.click(); // Trigger the download
    }
  };

  // Function to set image load status to true when image is fully loaded
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <>
      <div className="min-h-screen w-full flex">
        {/* Section 1: Download button */}
        <div className="bg-orange-400 w-[20%] flex items-center justify-center">
          <button
            onClick={handleDownloadSnapshot}
            className="px-4 uppercase py-2 tracking-widest outline-none bg-blue-600 text-white rounded"
            disabled={!isImageLoaded} // Disable the button until the image is loaded
          >
            Download
          </button>
        </div>

        {/* Section 2: Input file (purple background div) */}
        <div
          ref={imageContainer}
          className="bg-purple-400 w-[60%] min-h-screen flex justify-center items-center"
        >
          <InputFile onImageLoad={handleImageLoad} />
          {/* <MyDropzone /> */}
        </div>

        <div className="bg-rose-500 w-[20%] min-h-screen"></div>
      </div>
    </>
  );
}
