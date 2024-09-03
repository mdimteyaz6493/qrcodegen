import React, { useEffect, useState } from 'react';
import QRCodeStyling from "qr-code-styling";
import { CiText } from "react-icons/ci";
import { IoLinkSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdTextsms } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";


const QrApp = () => {
  const [qrCode, setQrCode] = useState(null);
  const [data, setData] = useState("");
  const [icon, setIcon] = useState("");
  const [messagetype, setmessagetype] = useState("text");
  const [mob_no, setmob_no] = useState("");
  const [emailId, setemailId] = useState("");
  const [subject, setsubject] = useState("");
  const [finadata, setfinadata] = useState("");
  const [opendbutton, setopendbutton] = useState(false)

  const msg_data = () => {
    switch (messagetype) {
      case "text":
        setfinadata(data);
        break;
      case "URL":
        setfinadata(data);
        break;
      case "Email":
        setfinadata(`mailto:${emailId}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(data)}`);
        break;
      case "Phone":
        setfinadata(`tel:${mob_no}`);
        break;
      case "SMS":
        setfinadata(`smsto:${mob_no}:${data}`);
        break;
      default:
        setfinadata("Hello How are you");
        break;
    }
  };

  useEffect(() => {
    msg_data();
  }, [data, emailId, mob_no, subject, messagetype]);

  useEffect(() => {
   
    const qr2 = new QRCodeStyling({
        width: 300,
        height: 300,
        data: finadata || "Welcome to Qr Code generator",
        image: icon || undefined,
        dotsOptions: {
          color: "black",
          type: "square",
        },
        backgroundOptions: {
          color: "white",
        },
        cornersSquareOptions: {
          color: "#000000",
          type: "square",
        },
        cornersDotOptions: {
          color: "black",
          type: "square",
        },
        imageOptions: {
          crossOrigin: "anonymous",
          margin: 20,
        },
      });
  

    setQrCode(qr2);
  }, [finadata, icon]);

  useEffect(() => {
    const qrCodeElement = document.getElementById("qrCode");
    if (qrCode && qrCodeElement) {
      qrCode.append(qrCodeElement);
    }

    return () => {
      if (qrCodeElement) {
        qrCodeElement.innerHTML = "";
      }
    };
  }, [qrCode]);

  const handleIconChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setIcon(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const downloadQRCode = (fileType) => {
    qrCode.update({
      width: 300,
      height: 300,
    });
    qrCode.download({ name: "qr-code", extension: fileType });
  };

  const renderInputField = () => {
    switch (messagetype) {
      case "text":
        return (
          <>
            <span>Short Message please</span>
            <textarea
              type="text"
              placeholder="Enter your Text"
              value={data}
              onChange={(e) => setData(e.target.value)}
              autoFocus
            />
          </>
        );
      case "URL":
        return (
          <>
            <span>Enter URL here</span>
            <input
              type="url"
              placeholder="https://www.example.com"
              value={data}
              onChange={(e) => setData(e.target.value)}
              autoFocus
            />
          </>
        );
      case "Email":
        return (
          <>
            <span>Enter email details</span>
            <input
              type="email"
              placeholder="Email Id"
              value={emailId}
              onChange={(e) => setemailId(e.target.value)}
              autoFocus
            />
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setsubject(e.target.value)}
            />
            <textarea
              placeholder="Message"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
          </>
        );
      case "Phone":
        return (
          <>
            <span>Enter phone number here</span>
            <input
              type="tel"
              placeholder="1234567890"
              value={mob_no}
              onChange={(e) => setmob_no(e.target.value)}
              autoFocus
            />
          </>
        );
      case "SMS":
        return (
          <>
            <span>Enter SMS details</span>
            <input
              type="tel"
              placeholder="1234567890"
              value={mob_no}
              onChange={(e) => setmob_no(e.target.value)}
              autoFocus
            />
            <textarea
              type="text"
              placeholder="Enter SMS Message"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
          </>
        );
      default:
        return null;
    }
  };

  const handleSpanClick = () => {
    const fileInput = document.querySelector('input[type="file"]');
    fileInput.click();
  };

  const handleMtype = (mtype) => {
    setmessagetype(mtype);
    setData("");
  };

  const handled_button = (format)=>{
    downloadQRCode(format)
    setopendbutton(false)
  }
  return (
    <div className="qr_app" id='qr_app'>
      <div className="qr_menu">
        <ul className="message_type">
          <li onClick={() => handleMtype("text")} className={messagetype === "text" ? "usetype" : ""}><CiText className="icon"/> <span>Text</span></li>
          <li onClick={() => handleMtype("URL")} className={messagetype === "URL" ? "usetype" : ""}><IoLinkSharp className="icon" /> <span>URL</span></li>
          <li onClick={() => handleMtype("Email")} className={messagetype === "Email" ? "usetype" : ""} ><MdEmail  className='icon'/> <span>Email</span></li>
          <li onClick={() => handleMtype("Phone")} className={messagetype === "Phone" ? "usetype" : ""} ><FaPhoneAlt  className='icon'/> <span>Phone</span></li>
          <li onClick={() => handleMtype("SMS")} className={messagetype === "SMS" ? "usetype" : ""}><MdTextsms className='icon' /> <span>SMS</span></li>
        </ul>
        <div className="qr_msg">
          {renderInputField()}
        </div>
      </div>
      <div className="qr_display">
      <div className="add_icon">
          <span>Icon (optional)</span>
          <span onClick={handleSpanClick}>i</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleIconChange}
          />
        </div>
        <div className="qr_image">
          <div id="qrCode"></div>
        </div>
        {opendbutton ? <div className='download_btns'>
          <button onClick={() => handled_button("png")} className='d_btn'>PNG</button>
          <button onClick={() => handled_button("jpeg")} className='d_btn'>JPEG</button>
          <button onClick={() => handled_button("webp")} className='d_btn'>WEBP</button>
          <button onClick={() => handled_button("svg")} className='d_btn'>SVG</button>
        </div> :  <span className='d_btn' onClick={()=>setopendbutton(!opendbutton)}>Download  <IoMdDownload className='download_icon'/></span>}
      </div>
    </div>
  );
};

export default QrApp;
