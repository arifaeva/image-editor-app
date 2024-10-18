import { useRef, useState } from "react";
import { MyDropzone } from "./components/dropzone";
import { Button } from "./components/button";
import domtoimage from "dom-to-image";

export default function HomePage() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [size, setSize] = useState(300);
  const [borderRadius, setBorderRadius] = useState(0);
  const [boxShadow, setBoxShadow] = useState("");
  const [transform, setTransform] = useState("");
  const [border, setBorder] = useState("");
  const imageContainer = useRef<HTMLDivElement>(null);

  const handleDownloadSnapshot = () => {
    if (imageContainer.current && isImageLoaded) {
      domtoimage
        .toPng(imageContainer.current)
        .then((dataUrl: string) => {
          const link = document.createElement("a");
          link.href = dataUrl;
          link.download = "snapshot.png";
          link.click();
        })
        .catch((error: unknown) => {
          console.error("Error capturing image:", error);
        });
    }
  };

  function handleImageLoad() {
    setIsImageLoaded(true);
  }

  function resetSize() {
    setSize(300);
  }

  function sizeSmall() {
    setSize(360);
  }

  function sizeMedium() {
    setSize(400);
  }

  function sizeLarge() {
    setSize(430);
  }

  function noRounded() {
    setBorderRadius(0);
  }

  function borderRadiusSmall() {
    setBorderRadius(12);
  }
  function borderRadiusMedium() {
    setBorderRadius(24);
  }
  function borderRadiusLarge() {
    setBorderRadius(36);
  }

  function rotate0() {
    setTransform("");
  }

  function rotate30() {
    setTransform("rotate(30deg)");
  }

  function rotate45() {
    setTransform("rotate(45deg)");
  }

  function rotate60() {
    setTransform("rotate(60deg)");
  }

  function noShadow() {
    setBoxShadow("none");
  }

  function lightBoxShadow() {
    setBoxShadow("5px 5px black");
  }

  function mediumBoxShadow() {
    setBoxShadow("8px 8px black");
  }

  function largeBoxShadow() {
    setBoxShadow("10px 10px black");
  }

  function noBorder() {
    setBorder("");
  }

  function lightBorder() {
    setBorder("2px solid white");
  }
  function mediumBorder() {
    setBorder("4px solid white");
  }
  function largeBorder() {
    setBorder("6px solid white");
  }
  return (
    <div className="min-h-screen w-full flex">
      <div className="bg-sky-500 w-[20%] flex items-center justify-center">
        <Button
          onClick={handleDownloadSnapshot}
          className=""
          disabled={!isImageLoaded}
        >
          Download
        </Button>
      </div>

      <div
        ref={imageContainer}
        className="bg-orange-400 w-[60%] min-h-screen flex justify-center items-center"
      >
        <MyDropzone
          onImageLoad={handleImageLoad}
          size={size}
          boxShadow={boxShadow}
          borderRadius={borderRadius}
          transform={transform}
          border={border}
          // Pass transform prop
        />
      </div>

      <div className="bg-sky-500 w-[20%] min-h-screen space-y-4 p-4 ">
        <div className="space-y-1">
          <h1>Change image size :</h1>
          <div className="flex-wrap flex gap-1">
            <Button onClick={resetSize}>Reset Size</Button>
            <Button onClick={sizeSmall}>Small</Button>
            <Button onClick={sizeMedium}>Medium</Button>
            <Button onClick={sizeLarge}>Large</Button>
          </div>
        </div>

        <div className="space-y-2">
          <h1>Change image border radius :</h1>
          <div className="flex-wrap flex gap-1">
            <Button onClick={noRounded}>No Rounded</Button>
            <Button onClick={borderRadiusSmall}>Rounded Small</Button>
            <Button onClick={borderRadiusMedium}>Rounded Medium</Button>
            <Button onClick={borderRadiusLarge}>Rounded Large</Button>
          </div>
        </div>

        <div className="space-y-2">
          <h1>Rotate image :</h1>
          <div className="flex-wrap flex gap-1">
            <Button onClick={rotate0}>No Rotate</Button>
            <Button onClick={rotate30}>Rotate 30</Button>
            <Button onClick={rotate45}>Rotate 45</Button>
            <Button onClick={rotate60}>Rotate 60</Button>
          </div>
        </div>

        <div className="space-y-2">
          <h1>Box Shadow :</h1>
          <div className="flex-wrap flex gap-1">
            <Button onClick={noShadow}>None</Button>
            <Button onClick={lightBoxShadow}>Light</Button>
            <Button onClick={mediumBoxShadow}>Medium</Button>
            <Button onClick={largeBoxShadow}>Large</Button>
          </div>
        </div>

        <div className="space-y-2">
          <h1>Border image :</h1>
          <div className="flex-wrap flex gap-1">
            <Button onClick={noBorder}>None</Button>
            <Button onClick={lightBorder}>Light</Button>
            <Button onClick={mediumBorder}>Medium</Button>
            <Button onClick={largeBorder}>Large</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
