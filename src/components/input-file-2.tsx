import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export const MyDropzone = () => {
  const [dataURL, setDataURL] = useState<string | null>(null);
  const [downloadURL] = useState<string | null>(null);

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
          <img src={dataURL} alt="Preview" className="max-w-xs" />
          <div>
            {downloadURL ? (
              <span>Downloaded!</span>
            ) : (
              <div className="space-x-4">
                <a
                  href={dataURL}
                  download="downloaded_image.png"
                  className="px-4 uppercase py-2 tracking-widest outline-none bg-blue-500 text-white rounded"
                >
                  Download
                </a>
                <button
                  onClick={() => setDataURL(null)}
                  className="px-4 uppercase py-2 tracking-widest outline-none bg-red-600 text-white rounded"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div
          {...getRootProps()}
          className={`p-14 border border-zinc-900 ${
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
