// import { useState } from "react";

// interface InputFileProps {
//   onImageLoad: () => void; // A function passed as a prop to notify when the image has loaded
// }

// export const InputFile: React.FC<InputFileProps> = ({ onImageLoad }) => {
//   const [file, setFile] = useState<string>();
//   const [fileEnter, setFileEnter] = useState(false);

//   return (
//     <div className="container px-4 mx-auto">
//       {!file ? (
//         <div
//           onDragOver={(e) => {
//             e.preventDefault();
//             setFileEnter(true);
//           }}
//           onDragLeave={() => setFileEnter(false)}
//           onDrop={(e) => {
//             e.preventDefault();
//             setFileEnter(false);
//             if (e.dataTransfer.items) {
//               [...e.dataTransfer.items].forEach((item) => {
//                 if (item.kind === "file") {
//                   const file = item.getAsFile();
//                   if (file) {
//                     const blobUrl = URL.createObjectURL(file);
//                     setFile(blobUrl);
//                   }
//                 }
//               });
//             }
//           }}
//           className={`${
//             fileEnter ? "border-4" : "border-2"
//           } mx-auto bg-white flex flex-col w-full max-w-xs h-72 border-dashed items-center justify-center`}
//         >
//           <label
//             htmlFor="file"
//             className="h-full flex flex-col justify-center text-center"
//           >
//             Click to upload or drag and drop
//           </label>
//           <input
//             id="file"
//             type="file"
//             className="hidden"
//             onChange={(e) => {
//               const files = e.target.files;
//               if (files && files[0]) {
//                 const blobUrl = URL.createObjectURL(files[0]);
//                 setFile(blobUrl);
//               }
//             }}
//           />
//         </div>
//       ) : (
//         <div className="flex flex-col items-center gap-5">
//           <img
//             src={file}
//             alt="Uploaded"
//             className="w-72 h-72 overflow-hidden"
//             onLoad={onImageLoad} // Call the onImageLoad function when the image has finished loading
//           />
//           {/* <div
//             className="w-72 h-72 bg-center bg-no-repeat bg-cover rounded"
//             style={{ backgroundImage: `url(${file})` }}
//             onLoad={onImageLoad} // Ensure onImageLoad is called
//           ></div> */}
//         </div>
//       )}
//     </div>
//   );
// };

import { useState } from "react";

interface InputFileProps {
  onImageLoad: () => void;
}

export const InputFile: React.FC<InputFileProps> = ({ onImageLoad }) => {
  const [file, setFile] = useState<string>();
  const [fileEnter, setFileEnter] = useState(false);

  return (
    <div className="container px-4 mx-auto">
      {!file ? (
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setFileEnter(true);
          }}
          onDragLeave={() => setFileEnter(false)}
          onDrop={(e) => {
            e.preventDefault();
            setFileEnter(false);
            if (e.dataTransfer.items) {
              [...e.dataTransfer.items].forEach((item) => {
                if (item.kind === "file") {
                  const file = item.getAsFile();
                  if (file) {
                    const blobUrl = URL.createObjectURL(file);
                    setFile(blobUrl);
                  }
                }
              });
            }
          }}
          className={`${
            fileEnter ? "border-4" : "border-2"
          } mx-auto bg-white flex flex-col w-72 h-72 border-dashed items-center justify-center`}
        >
          <label
            htmlFor="file"
            className="h-full flex flex-col justify-center text-center"
          >
            Click to upload or drag and drop
          </label>
          <input
            id="file"
            type="file"
            className="hidden"
            onChange={(e) => {
              const files = e.target.files;
              if (files && files[0]) {
                const blobUrl = URL.createObjectURL(files[0]);
                setFile(blobUrl);
              }
            }}
          />
        </div>
      ) : (
        <div className="flex flex-col items-center gap-5">
          <div className="relative w-72 h-72 overflow-hidden">
            <img
              src={file}
              alt="Uploaded"
              className="absolute top-0 left-1/2 transform -translate-x-1/2"
              style={{ height: "100%", width: "auto", maxWidth: "none" }} // Fill height, maintain aspect ratio
              onLoad={onImageLoad} // Notify when image is fully loaded
            />
          </div>
        </div>
      )}
    </div>
  );
};
