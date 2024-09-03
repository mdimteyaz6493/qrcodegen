import React, { useRef, useState, useEffect } from "react";
import { BrowserMultiFormatReader } from "@zxing/library";
import { useSelector, useDispatch } from 'react-redux';
import { toggleModal } from '../redux/Slice/ModalSlice';

const QrScanner = ({ onScan }) => {
  const videoRef = useRef(null);
  const [scanning, setScanning] = useState(false);
  const ModalState = useSelector((state) => state.Modal.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();
    
    const startScanner = async () => {
      try {
        const devices = await codeReader.listVideoInputDevices();
        const backCamera = devices.find(device => device.label.toLowerCase().includes('back')) || devices[0];

        if (ModalState && backCamera) {
          codeReader.decodeFromVideoDevice(backCamera.deviceId, videoRef.current, (result, err) => {
            if (result) {
              onScan(result.getText());
              setScanning(false);
            }
            if (err) {
              console.error(err);
            }
          });
        }
      } catch (err) {
        console.error("Error starting QR scanner: ", err);
      }
    };

    startScanner();

    return () => {
      codeReader.reset();
    };
  }, [scanning, onScan, ModalState]);

  return (
    <div className="video_cont">
      <video ref={videoRef} />
      <div className="s_frame"></div>
      <span>Place QR code under the box.</span>
    </div>
  );
};

export default QrScanner;
