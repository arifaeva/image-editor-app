import { useState } from "react";

export const InputFile = () => {
  const [file, setFile] = useState<string>();
  const [fileEnter, setFileEnter] = useState(false);
  const [fileName, setFileName] = useState<string>("");
  return (
    <div className="container px-4 mx-auto">
      {!file ? (
        <div
          onDragOver={(e) => {
            // ketika suatu file di-drag ke dalam container
            e.preventDefault();
            setFileEnter(true);
          }}
          onDragLeave={() => {
            //ketika suatu file di-drag keluar container
            setFileEnter(false);
          }}
          //   onDragEnd={(e) => {
          //     e.preventDefault();
          //     setFileEnter(false);
          //   }}
          onDrop={(e) => {
            //ketika file di-drag dan di-drop ke dalam container
            e.preventDefault();
            setFileEnter(false);
            if (e.dataTransfer.items) {
              [...e.dataTransfer.items].forEach((item, i) => {
                if (item.kind === "file") {
                  const file = item.getAsFile();
                  if (file) {
                    const blobUrl = URL.createObjectURL(file);
                    setFile(blobUrl);
                    setFileName(file.name);
                  }
                  console.log(`items file[${i}].name = ${file?.name}`);
                }
              });
            } else {
              [...e.dataTransfer.files].forEach((file, i) => {
                console.log(`… file[${i}].name = ${file.name}`);
              });
            }
          }}
          className={`${
            fileEnter ? "border-4" : "border-2"
          } mx-auto  bg-white flex flex-col w-full max-w-xs h-72 border-dashed items-center justify-center`}
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
              console.log(e.target.files);
              const files = e.target.files;
              if (files && files[0]) {
                //perlu ada files[0] karena nanti kita perlu ambil nama filenya
                const blobUrl = URL.createObjectURL(files[0]);
                setFile(blobUrl);
                setFileName(files[0].name); //ambil nama file nya untuk di download
              }
            }}
          />
        </div>
      ) : (
        <div className="flex flex-col items-center gap-5">
          <object
            className="rounded-md w-full object-fit"
            data={file}
            type="image/png" // update based on the type of file
          />
          <div className="flex items-center gap-3">
            <a
              href={file}
              download={fileName} // provide the file name for download
              className="px-4 uppercase py-2 tracking-widest outline-none bg-blue-600 text-white rounded"
            >
              Download
            </a>
            <button
              onClick={() => setFile("")}
              className="px-4 uppercase py-2 tracking-widest outline-none bg-red-600 text-white rounded"
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
