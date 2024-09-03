import React, { useState } from "react";
import QrApp from "./QrApp";
import UseGuide from "./UseGuide";
import QrScanner from "./QrScanner";
import { useSelector, useDispatch } from 'react-redux';
import { toggleModal } from '../redux/Slice/ModalSlice';
import { IoCloseCircle } from "react-icons/io5";

const Qrcode = () => {
  const [scanResult, setScanResult] = useState("");
  const [d_scanner, setd_scanner] = useState(false);
  const ModalState = useSelector((state) => state.Modal.value);
  const dispatch = useDispatch();

  const handleScan = (result) => {
    if (result) {
      setScanResult(result);
      setd_scanner(false); // Close scanner after successful scan
    }
  };

  const handleCloseQR = () => {
    setScanResult(""); // Clear the scan result
    dispatch(toggleModal()); // Toggle the modal off
  };
  
  return (
    <>
      <section className="qr_section" id="qr_sec">
        <div className="qr_title">
          <h1>QR Code Generator</h1>
          <span>Create your QR Codes for Free here.</span>
          <p>
            Welcome to our QR Code Generator! We believe in providing a simple,
            yet powerful tool for creating high-quality QR codes that meet your
            personal or business needs.
          </p>
        </div>
        <QrApp />
      </section>
      <UseGuide />
      {ModalState && (
        <div className="qr_scanner">
          <div className="scanner_cont">
            {scanResult ? (
              <div className="scanned_result">
                <h3>Scanned QR Data:</h3>
                <div className="result">
                  <p>{scanResult}</p>
                </div>
                <IoCloseCircle className="close_qr" onClick={handleCloseQR} />
              </div>
            ) : (
              <div className="qr_scanner_section">
                <QrScanner onScan={handleScan} />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Qrcode;
