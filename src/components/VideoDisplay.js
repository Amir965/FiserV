import React from "react";
import "./VideoDisplay.css";
import videoImage1 from "../assets/videoImage1.png";
import videoImage2 from "../assets/videoImage2.png";
import videoImage3 from "../assets/videoImage3.png";
import videoImage4 from "../assets/videoImage4.png";
import videoImage5 from "../assets/videoImage5.png";

// import Close from "../assets/Close.svg";

function VideoDisplay({
  videoSrc,
  setIsDisplay,
  setVideoImage,
  num,
  videoImage,
  disc,
}) {
  const videoRef = React.useRef(null);

  const videoPlayPauseHandle = () => {
    setIsDisplay(false);
    videoRef.current.pause();
    if (num === "1") {
      setVideoImage({ ...videoImage, img1: videoImage1 });
    }
    if (num === "2") {
      setVideoImage({ ...videoImage, img2: videoImage2 });
    }
    if (num === "3") {
      setVideoImage({ ...videoImage, img3: videoImage3 });
    }
    if (num === "4") {
      setVideoImage({ ...videoImage, img4: videoImage4 });
    } else if (num === "5") {
      setVideoImage({ ...videoImage, img5: videoImage5 });
    }
  };
  return (
    <>
      <div className="video-popup">
        <video
          src={videoSrc}
          width="200"
          controls="controls"
          ref={videoRef}
          autoplay="true"
        />
        <button onClick={videoPlayPauseHandle}>&#10005;</button>
      </div>
      <div className="tag-name">
        <p className="tag-para">Playing Video:{disc}</p>
      </div>
    </>
  );
}

export default VideoDisplay;
