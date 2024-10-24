import { useRef, useState } from "react";
import { MyDropzone } from "./components/dropzone";
import { Button } from "./components/button";
import domtoimage from "dom-to-image";

export default function HomePage() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [size, setSize] = useState(300);
  const [borderRadius, setBorderRadius] = useState(0);
  const [boxShadow, setBoxShadow] = useState("");
  const [rotate, setRotate] = useState("");
  const [translate, setTranslate] = useState("");
  const [border, setBorder] = useState("");
  const [resetImage, setResetImage] = useState(false);
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

  function handleResetImage() {
    setResetImage(true);
    setTimeout(() => {
      setResetImage(false); // Reset to false after triggering the reset
    }, 100);
  }

  const increaseSize = () => {
    setSize((prevSize) => prevSize + 50); // Increase by 10px
  };

  const decreaseSize = () => {
    setSize((prevSize) => (prevSize > 300 ? prevSize - 50 : prevSize)); // Decrease by 10px, but not less than 10px
  };

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
    setRotate("");
  }

  function rotate30() {
    setRotate("rotate(30deg)");
  }

  function rotate45() {
    setRotate("rotate(45deg)");
  }

  function rotate60() {
    setRotate("rotate(60deg)");
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
  function translateXmin50() {
    setTranslate("translateX(-50%)");
  }
  function translateXmin25() {
    setTranslate("translateX(-25%)");
  }
  function translate0() {
    setTranslate("");
  }
  function translateX25() {
    setTranslate("translateX(25%)");
  }
  function translateX50() {
    setTranslate("translateX(50%)");
  }
  function translateXmin50Ymin25() {
    setTranslate("translateX(-50%) translateY(-25%)");
  }
  function translateXmin25Ymin25() {
    setTranslate("translateX(-25%) translateY(-25%)");
  }
  function translateYmin25() {
    setTranslate("translateY(-25%)");
  }
  function translateX25Ymin25() {
    setTranslate("translateX(25%) translateY(-25%)");
  }
  function translateX50Ymin25() {
    setTranslate("translateX(50%) translateY(-25%)");
  }
  function translateXmin50Y25() {
    setTranslate("translateX(-50%) translateY(25%)");
  }
  function translateXmin25Y25() {
    setTranslate("translateX(-25%) translateY(25%)");
  }
  function translateY25() {
    setTranslate("translateY(25%)");
  }
  function translateX25Y25() {
    setTranslate("translateX(25%) translateY(25%)");
  }
  function translateX50Y25() {
    setTranslate("translateX(50%) translateY(25%)");
  }

  return (
    <div className="h-screen w-full flex gap-3 p-6 bg-zinc-600">
      <div className="bg-sky-500 w-[20%] flex items-center justify-center rounded-lg gap-1">
        <Button
          onClick={handleDownloadSnapshot}
          className=""
          disabled={!isImageLoaded}
        >
          Download
        </Button>
        <Button onClick={handleResetImage}>Reset Image</Button>
      </div>

      <div
        ref={imageContainer}
        className="bg-orange-400 w-[60%] h-full flex justify-center items-center rounded-lg overflow-hidden"
      >
        <MyDropzone
          onImageLoad={handleImageLoad}
          size={size}
          boxShadow={boxShadow}
          borderRadius={borderRadius}
          transform={`${rotate} ${translate}`}
          border={border}
          resetImage={resetImage}
          // Pass transform prop
        />
      </div>

      <div className="bg-sky-500 w-[20%] h-full space-y-4 p-4 rounded-lg  overflow-scroll">
        <div className="space-y-1">
          <h1>Image size :</h1>
          <div className="flex-wrap flex gap-1">
            <Button onClick={resetSize}>Reset Size</Button>
            <Button onClick={sizeSmall} active={size === 360}>
              Small
            </Button>
            <Button onClick={sizeMedium} active={size === 400}>
              Medium
            </Button>
            <Button onClick={sizeLarge} active={size === 430}>
              Large
            </Button>
            <Button onClick={decreaseSize}>Decrease Size</Button>
            <Button onClick={increaseSize}>Increase Size</Button>
          </div>
        </div>

        <div className="space-y-2">
          <h1>Border radius :</h1>
          <div className="flex-wrap flex gap-1">
            <Button onClick={noRounded}>No Rounded</Button>
            <Button onClick={borderRadiusSmall} active={borderRadius === 12}>
              Rounded Small
            </Button>
            <Button onClick={borderRadiusMedium} active={borderRadius === 24}>
              Rounded Medium
            </Button>
            <Button onClick={borderRadiusLarge} active={borderRadius === 36}>
              Rounded Large
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <h1>Rotate image :</h1>
          <div className="flex-wrap flex gap-1">
            <Button onClick={rotate0}>No Rotate</Button>
            <Button onClick={rotate30} active={rotate === "rotate(30deg)"}>
              Rotate 30
            </Button>
            <Button onClick={rotate45} active={rotate === "rotate(45deg)"}>
              Rotate 45
            </Button>
            <Button onClick={rotate60} active={rotate === "rotate(60deg)"}>
              Rotate 60
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <h1>Box Shadow :</h1>
          <div className="flex-wrap flex gap-1">
            <Button onClick={noShadow}>None</Button>
            <Button
              onClick={lightBoxShadow}
              active={boxShadow === "5px 5px black"}
            >
              Light
            </Button>
            <Button
              onClick={mediumBoxShadow}
              active={boxShadow === "8px 8px black"}
            >
              Medium
            </Button>
            <Button
              onClick={largeBoxShadow}
              active={boxShadow === "10px 10px black"}
            >
              Large
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <h1>Border image :</h1>
          <div className="flex-wrap flex gap-1">
            <Button onClick={noBorder}>None</Button>
            <Button onClick={lightBorder} active={border === "2px solid white"}>
              Light
            </Button>
            <Button
              onClick={mediumBorder}
              active={border === "4px solid white"}
            >
              Medium
            </Button>
            <Button onClick={largeBorder} active={border === "6px solid white"}>
              Large
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <h1>Image position :</h1>
          <div className="space-y-1">
            <div className="flex flex-wrap gap-1">
              <Button
                size="sm"
                onClick={translateXmin50Ymin25}
                active={translate === "translateX(-50%) translateY(-25%)"}
                children={undefined}
              ></Button>
              <Button
                size="sm"
                onClick={translateXmin25Ymin25}
                active={translate === "translateX(-25%) translateY(-25%)"}
                children={undefined}
              ></Button>
              <Button
                size="sm"
                onClick={translateYmin25}
                active={translate === "translateY(-25%)"}
                children={undefined}
              ></Button>
              <Button
                size="sm"
                onClick={translateX25Ymin25}
                active={translate === "translateX(25%) translateY(-25%)"}
                children={undefined}
              ></Button>
              <Button
                size="sm"
                onClick={translateX50Ymin25}
                active={translate === "translateX(50%) translateY(-25%)"}
                children={undefined}
              ></Button>
            </div>
            <div className="flex flex-wrap gap-1">
              <Button
                size="sm"
                onClick={translateXmin50}
                active={translate === "translateX(-50%)"}
                children={undefined}
              ></Button>
              <Button
                size="sm"
                onClick={translateXmin25}
                active={translate === "translateX(-25%)"}
                children={undefined}
              ></Button>
              <Button
                size="sm"
                onClick={translate0}
                active={translate === ""}
                children={undefined}
              ></Button>
              <Button
                size="sm"
                onClick={translateX25}
                active={translate === "translateX(25%)"}
                children={undefined}
              ></Button>
              <Button
                size="sm"
                onClick={translateX50}
                active={translate === "translateX(50%)"}
                children={undefined}
              ></Button>
            </div>
            <div className="flex flex-wrap gap-1">
              <Button
                size="sm"
                onClick={translateXmin50Y25}
                active={translate === "translateX(-50%) translateY(25%)"}
                children={undefined}
              ></Button>
              <Button
                size="sm"
                onClick={translateXmin25Y25}
                active={translate === "translateX(-25%) translateY(25%)"}
                children={undefined}
              ></Button>
              <Button
                size="sm"
                onClick={translateY25}
                active={translate === "translateY(25%)"}
                children={undefined}
              ></Button>
              <Button
                size="sm"
                onClick={translateX25Y25}
                active={translate === "translateX(25%) translateY(25%)"}
                children={undefined}
              ></Button>
              <Button
                size="sm"
                onClick={translateX50Y25}
                active={translate === "translateX(50%) translateY(25%)"}
                children={undefined}
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
