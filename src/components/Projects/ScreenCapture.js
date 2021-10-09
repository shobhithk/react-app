import React, { useState, useRef } from "react";
import styles from "./ScreenCapture.module.css";

const ScreenCapture = () => {
  const videoRef = useRef();
  const [buttonState, setbuttonState] = useState(false);

  const selectMediaStream = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getDisplayMedia();
      videoRef.current.srcObject = mediaStream;
      videoRef.current.onloadedmetadata = () => {
        videoRef.current.play();
      };
    } catch (error) {
      console.log("an error occured", error);
    }
  };

  const pictureInPicture = async () => {
    setbuttonState(true);
    await videoRef.current.requestPictureInPicture();
    setbuttonState(false);
  };

  return (
    <div className={styles.screen}>
      <video
        id={styles.video}
        ref={videoRef}
        height="340"
        width="640"
        controls
        hidden
      ></video>
      <div className={styles["button-container"]}>
        <button className={styles.button} 
        onClick={selectMediaStream}>
          START
        </button>
        <button
          className={styles.button}
          onClick={pictureInPicture}
          disabled={buttonState}
        >
          PIP
        </button>
      </div>
    </div>
  );
};

export default ScreenCapture;

// https://google.qwiklabs.com/public_profiles/a0ba229a-0de0-4d86-8ab9-ebf2d60f1b02
