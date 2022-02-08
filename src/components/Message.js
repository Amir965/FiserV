import React from "react";
import "./Message.css";
import MobileBanner from "../assets/MobileBanner.png";
import DesktopBanner from "../assets/DesktopBanner.png";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import video4 from "../assets/video4.mp4";
import video5 from "../assets/video5.mp4";
import VideoDisplay from "./VideoDisplay";
import videoImage1 from "../assets/videoImage1.jpg";
import videoImage2 from "../assets/videoImage2.jpg";
import videoImage3 from "../assets/videoImage3.jpg";
import videoImage4 from "../assets/videoImage4.jpg";
import videoImage5 from "../assets/videoImage5.jpg";
import NowPlaying from "../assets/NowPlaying2.png";
import Popup from "./Popup";
// import Form from "./Form";
const Message = (props) => {
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const [isOpen, setIsOpen] = React.useState(false);

  const [videoSrc, setVideoSrc] = React.useState("");
  const [isDisplay, setIsDisplay] = React.useState(false);
  const [disc, setDisc] = React.useState("");
  const [num, setNum] = React.useState("");
  const [videoImage, setVideoImage] = React.useState({
    img1: videoImage1,
    img2: videoImage2,
    img3: videoImage3,
    img4: videoImage4,
    img5: videoImage5,
  });

  let myInlineCssNone = {
    display: "none",
  };

  let myInlineCssBlock = {
    display: "block",
  };

  const videoChanger = (videoDynamic, num) => {
    setVideoSrc(videoDynamic);
    setIsDisplay(true);
    setNum(num);
    if (num === "1") {
      // setVideoImage({ ...videoImage, img1: NowPlaying });
      setVideoImage({
        ...videoImage,
        img1: NowPlaying,
        img2: videoImage2,
        img3: videoImage3,
        img4: videoImage4,
        img5: videoImage5,
      });
      setDisc("1. How to get more repeat customers?");
    }
    if (num === "2") {
      // setVideoImage({ ...videoImage, img2: NowPlaying });
      setDisc("2. How to get more repeat customers?");
      setVideoImage({
        ...videoImage,
        img1: videoImage1,
        img2: NowPlaying,
        img3: videoImage3,
        img4: videoImage4,
        img5: videoImage5,
      });
    }
    if (num === "3") {
      setVideoImage({ ...videoImage, img3: NowPlaying });
      setDisc("3. How to increase repeat business from existing customers?");
      setVideoImage({
        ...videoImage,
        img1: videoImage1,
        img2: videoImage2,
        img3: NowPlaying,
        img4: videoImage4,
        img5: videoImage5,
      });
    }
    if (num === "4") {
      setVideoImage({ ...videoImage, img4: NowPlaying });
      setDisc("4. All in one solution for billing, payments, GST reports");
      setVideoImage({
        ...videoImage,
        img1: videoImage1,
        img2: videoImage2,
        img3: videoImage3,
        img4: NowPlaying,
        img5: videoImage5,
      });
    }
    if (num === "5") {
      setVideoImage({ ...videoImage, img5: NowPlaying });
      setDisc(
        "5. All payments, One Solution! Collect Cash, Card, UPI at one place"
      );
      setVideoImage({
        ...videoImage,
        img1: videoImage1,
        img2: videoImage2,
        img3: videoImage3,
        img4: videoImage4,
        img5: NowPlaying,
      });
    }
  };
  return (
    <>
      <div className="mobile-banner">
        <img src={MobileBanner} alt="" />
      </div>
      <div className="desktop-banner">
        <img src={DesktopBanner} alt="" />
      </div>
      <div className="container">
        <div className="welcome">
          <h1>Welcome Dear Merchant!</h1>
          <p>5 ways to increase repeat business and beat competition.</p>
        </div>
        <div
          style={isDisplay ? myInlineCssBlock : myInlineCssNone}
          // className="video-popup"
        >
          <VideoDisplay
            videoSrc={videoSrc}
            setIsDisplay={setIsDisplay}
            setVideoImage={setVideoImage}
            num={num}
            videoImage={videoImage}
            disc={disc}
          />
        </div>
        <div className="questions-wrapper">
          <div className="questions">
            {/* <video
            src={video}
            // width="200"
            // height="300
            controls="controls"
            autoplay="true"
            onClick={() => videoChanger(video)}
          /> */}
            <img
              src={videoImage.img1}
              alt=""
              onClick={() => videoChanger(video1, "1")}
            />
            <p>
              1. How to get more repeat customers?
              <br /> (By Creating Offers)
            </p>
          </div>
          <div className="questions">
            <img
              src={videoImage.img2}
              alt=""
              onClick={() => videoChanger(video2, "2")}
            />

            <p>
              2. How to get more repeat customers?
              <br /> (By Billing on Pharma)
            </p>
          </div>
          <div className="questions">
            <img
              src={videoImage.img3}
              alt=""
              onClick={() => videoChanger(video3, "3")}
            />

            <p>3. How to increase repeat business from existing customers?</p>
          </div>
          <div className="questions">
            <img
              src={videoImage.img4}
              alt=""
              onClick={() => videoChanger(video4, "4")}
            />

            <p>4. All in one solution for billing, payments, GST reports</p>
          </div>
          <div className="questions">
            <img
              src={videoImage.img5}
              alt=""
              onClick={() => videoChanger(video5, "5")}
            />

            <p>
              5. All payments, One Solution! Collect Cash, Card, UPI at one
              place
            </p>
          </div>
        </div>
      </div>
      <div className="layout">
        <p>Book Your Free Expert Session</p>
        <div className="layout-section">
          {/* <button className="btn">BOOK NOW</button> */}
          {/* <a
            className="btn"
            href="https://forms.zohopublic.in/engage/form/BookNow/formperma/w_vAp__NVtssj9a-e_0edvfOu7Kb-HtI7MmE2iDaS3Y"
          >
            BOOK NOW
          </a> */}
          <input
            type="button"
            value="BOOK NOW"
            onClick={togglePopup}
            className="btn"
          />
          {isOpen && (
            <Popup
              content={
                <iframe
                  src="https://forms.zohopublic.in/engage/form/BookNow/formperma/w_vAp__NVtssj9a-e_0edvfOu7Kb-HtI7MmE2iDaS3Y"
                  width="100%"
                  height="100%"
                  frameBorder="none"
                  title="form"
                ></iframe>
              }
              handleClose={togglePopup}
            />
          )}
          <ul className="list-section">
            <li>Personal app training by expert.</li>
            <li>Anytime callback and learn service.</li>
            <li>
              Use pharma app and get cashback @ zero hidden charges.
              <a href="https://fdapp.irevo.in/files/cashback-flyer.jpg">
                Check Cashback Scheme.
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Message;
