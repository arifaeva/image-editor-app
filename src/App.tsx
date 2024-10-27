import { useRef, useState } from "react";
import { MyDropzone } from "./components/dropzone";
import { Button } from "./components/button";
import domtoimage from "dom-to-image";

export default function HomePage() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [size, setSize] = useState(280);
  const [borderRadius, setBorderRadius] = useState(0);
  const [boxShadow, setBoxShadow] = useState("");
  const [rotate, setRotate] = useState("");
  const [translate, setTranslate] = useState("");
  const [border, setBorder] = useState("");
  const [resetImage, setResetImage] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("#ff683b");
  const [showSecondDropzone, setShowSecondDropzone] = useState(false);
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

  function showOneDropzone() {
    setShowSecondDropzone(false);
  }
  function showTwoDropzone() {
    setShowSecondDropzone(true);
  }

  function handleImageLoad() {
    setIsImageLoaded(true);
  }

  function handleResetImage() {
    setResetImage(true);
    setTimeout(() => {
      setResetImage(false); // Reset to false after triggering the reset
    }, 100);
  }

  // const increaseSize = () => {
  //   setSize((prevSize) => prevSize + 10); // Increase by 10px
  // };

  // const decreaseSize = () => {
  //   setSize((prevSize) => (prevSize > 300 ? prevSize - 10 : prevSize)); // Decrease by 10px, but not less than 10px
  // };

  // function resetSize() {
  //   setSize(300);
  // }

  // function sizeSmall() {
  //   setSize(360);
  // }

  // function sizeMedium() {
  //   setSize(400);
  // }

  // function sizeLarge() {
  //   setSize(430);
  // }

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

  function changeToBlack() {
    setBackgroundColor("#202124");
  }
  function changeToOrange() {
    setBackgroundColor("#ff683b");
  }
  // function changeToBlue() {
  //   setBackgroundColor("#2596be");
  // }
  function changeToRed() {
    setBackgroundColor("#ba544b");
  }
  function changeToCream() {
    setBackgroundColor("#eae1d8");
  }
  function changeToYellow() {
    setBackgroundColor("#fbb14e");
  }
  function changeToLavender() {
    setBackgroundColor("#6695f7");
  }

  return (
    <div className="h-screen w-full flex justify-between gap-8 p-6 bg-[#3b4883]">
      <div className="bg-[#202124] w-[20%] p-8 flex flex-col justify-between rounded-xl gap-1 drop-shadow-2xl">
        <div className="space-y-4">
          <div className="space-y-2">
            <h1>Background color :</h1>
            <div className="flex-wrap flex gap-1.5">
              <Button
                onClick={changeToBlack}
                size="lg"
                children={undefined}
                className="bg-[#202124] hover:bg-[#202124] border border-[#ddd]"
              ></Button>

              <Button
                onClick={changeToRed}
                size="lg"
                children={undefined}
                className="bg-[#ba544b] hover:bg-[#ba544b] border border-[#ddd]"
              ></Button>
              <Button
                onClick={changeToOrange}
                size="lg"
                children={undefined}
                className="bg-[#ff683b] hover:bg-[#ff683b] border border-[#ddd]"
              ></Button>
              <Button
                onClick={changeToYellow}
                size="lg"
                children={undefined}
                className="bg-[#f0be49] hover:bg-[#f0be49] border border-[#ddd]"
              ></Button>
              <Button
                onClick={changeToLavender}
                size="lg"
                children={undefined}
                className="bg-[#6695f7] hover:bg-[#6695f7] border border-[#ddd]"
              ></Button>
              {/* <Button
              onClick={changeToBlue}
              size="lg"
              children={undefined}
              className="bg-[#2596be] hover:bg-[#2596be] border border-[#ddd]"
            ></Button> */}

              <Button
                onClick={changeToCream}
                size="lg"
                children={undefined}
                className="bg-[#eae1d8] hover:bg-[#eae1d8] border border-[#ddd]"
              ></Button>
            </div>
          </div>
          <div className="space-y-2">
            <h1>Images :</h1>
            <div className="flex flex-wrap gap-1.5">
              <Button
                onClick={showOneDropzone}
                active={showSecondDropzone === false}
                size="lg"
              >
                1
              </Button>
              <Button
                onClick={showTwoDropzone}
                active={showSecondDropzone === true}
                size="sm"
                className="h-10 w-10"
              >
                2
              </Button>
            </div>
          </div>
        </div>
        <div className="flex-wrap flex gap-1.5 items-center justify-center">
          <Button
            onClick={handleDownloadSnapshot}
            className=""
            disabled={!isImageLoaded}
          >
            Download
          </Button>
          <Button onClick={handleResetImage}>Reset Image</Button>
        </div>
      </div>
      <div className="flex items-center justify-center w-[60%] p-12">
        <div
          ref={imageContainer}
          style={{ backgroundColor }}
          className="w-full h-full flex justify-center items-center rounded-xl overflow-hidden"
        >
          <div className="flex gap-4">
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
            {showSecondDropzone && (
              <MyDropzone
                onImageLoad={handleImageLoad}
                // Customize or reuse properties as needed
                size={size}
                boxShadow={boxShadow}
                borderRadius={borderRadius}
                transform={`${rotate} ${translate}`}
                border={border}
                resetImage={resetImage}
                // Pass transform prop
              />
            )}
          </div>
        </div>
      </div>

      <div className="bg-[#202124] w-[20%] p-8 h-full space-y-4 rounded-xl drop-shadow-2xl">
        <div className="space-y-2">
          <h1>Image size :</h1>
          <div className="flex-wrap flex gap-1.5">
            {/* <Button onClick={resetSize}>Reset Size</Button>
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
            <Button onClick={increaseSize}>Increase Size</Button> */}
            <input
              type="range"
              min="300" // Adjust min and max values as needed
              max="500"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className="w-full slider"
            />
          </div>
        </div>

        <div className="space-y-2">
          <h1>Rounded corner :</h1>
          <div className="flex-wrap flex gap-1.5">
            <Button onClick={noRounded}>No Rounded</Button>
            <Button onClick={borderRadiusSmall} active={borderRadius === 12}>
              Small
            </Button>
            <Button onClick={borderRadiusMedium} active={borderRadius === 24}>
              Medium
            </Button>
            <Button onClick={borderRadiusLarge} active={borderRadius === 36}>
              Large
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <h1>Rotate image :</h1>
          <div className="flex-wrap flex gap-1.5">
            <Button onClick={rotate0}>No Rotate</Button>
            <Button onClick={rotate30} active={rotate === "rotate(30deg)"}>
              30&deg;
            </Button>
            <Button onClick={rotate45} active={rotate === "rotate(45deg)"}>
              45&deg;
            </Button>
            <Button onClick={rotate60} active={rotate === "rotate(60deg)"}>
              60&deg;
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <h1>Box Shadow :</h1>
          <div className="flex-wrap flex gap-1.5">
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
