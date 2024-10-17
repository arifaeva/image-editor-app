import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export const MyDropzone = () => {
  const [dataURL, setDataURL] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file: File) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        const binaryStr = reader.result as string;
        setDataURL(binaryStr);
      };

      reader.readAsDataURL(file);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
  });

  return (
    <div>
      {dataURL ? (
        <div className="space-y-3">
          <div className="relative w-72 h-72 overflow-hidden">
            <img
              src={dataURL}
              alt="Preview"
              className="absolute top-0 left-1/2 transform -translate-x-1/2"
              style={{ height: "100%", width: "auto", maxWidth: "none" }}
            />
          </div>
          <div></div>
        </div>
      ) : (
        <div
          {...getRootProps()}
          className={`w-72 h-72 border-zinc-900 border flex items-center justify-center p-8 cursor-pointer bg-purple-300 ${
            isDragActive ? "bg-gray-200" : ""
          }`}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <div>Drop the image here...</div>
          ) : (
            <p className="text-center">
              Drag 'n' drop some files here, or click to select files
            </p>
          )}
        </div>
      )}
    </div>
  );
};
