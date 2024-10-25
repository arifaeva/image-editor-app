import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

interface MyDropzoneProps {
  onImageLoad: () => void;
  size: number;
  border: string;
  boxShadow: string;
  borderRadius: number;
  transform: string;
  resetImage: boolean;
}

export const MyDropzone = ({
  onImageLoad,
  size,
  boxShadow,
  borderRadius,
  transform,
  border,
  resetImage,
}: MyDropzoneProps) => {
  const [dataURL, setDataURL] = useState<string | null>(null);

  if (resetImage && dataURL) {
    setDataURL(null);
  }

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
        <div className="overflow-visible">
          <div
            className="relative"
            style={{
              width: size,
              height: size,
              boxShadow,
              borderRadius,
              transform,
              overflow: "visible",
              transition: "all 0.2s ease",
            }}
          >
            <img
              src={dataURL}
              alt="Preview"
              className="absolute inset-0 object-cover"
              style={{
                height: size,
                width: size,
                maxWidth: "none",
                borderRadius,
                border,
                transition: "all 0.2s ease",
              }}
              onLoad={onImageLoad}
            />
          </div>
        </div>
      ) : (
        <div
          {...getRootProps()}
          className={`border border-[#ddd] rounded-xl flex items-center justify-center p-8 cursor-pointer bg-[#202124]${
            isDragActive
              ? "bg-[#202124] border border-[#ddd] border-dashed"
              : ""
          }`}
          style={{
            width: size,
            height: size,
            borderRadius,
            boxShadow,
            transform,
            border,
            transition: "all 0.3s ease",
          }}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <div>Drop the image here...</div>
          ) : (
            <p className="text-center text-[#ddd]">
              Drag and drop an image here, or click to choose image
            </p>
          )}
        </div>
      )}
    </div>
  );
};
