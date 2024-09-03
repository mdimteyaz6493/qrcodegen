import React from 'react'
import GuideSteps from './GuideSteps'
import GuideSteps2 from './GuideSteps2'

const UseGuide = () => {
  return (
    <>
      <section className='guide_sec'>
      <div className="guide_cont">
      <div className="guide_title">
          <h1>Let's learn.</h1>
          <span>How you can use QR code generator ?</span>
        </div>
       <GuideSteps
        img ={"images/s1.png"}
        step= {"Step 1: "}
        s_title ={"Choose the type of QR Code."}
        s_desc ={"Choose the type of QR code based on your needs: Link (URL) for directing to websites, Text for conveying simple information, SMS for sending pre-written texts, Email for prompting pre-filled emails, and Phone Number for direct dialing. Static QR codes are permanent and cannot be edited after creation, while dynamic QR codes allow you to update the content anytime, offering flexibility for changing information."}
       />
       <GuideSteps2 
       img ={"images/s2.png"}
       step= {"Step 2: "}
        s_title ={"Write your Qr Code message."}
        s_desc ={"Please enter your message in the input area below. Once you've entered your message, your customized QR code will be generated instantly. This QR code can then be saved or shared for easy access."}
       />
       <GuideSteps 
        img ={"images/s3.png"}
         step= {"Step 3: "}
        s_title ={"Add icon (optional)."}
        s_desc ={"You can also add a custom icon to your generated QR code if desired. Simply click the 'Add Icon' button, then select your icon image to personalize your QR code further."}
       />
       <GuideSteps2
        img ={"images/s4.png"}
       step= {"Step 4: "}
        s_title ={"Click on Download and select Format."}
        s_desc ={"You can download your generated QR code by clicking the 'Download' button. The download options include various formats such as PNG, JPG, SVG, and WEBP. Simply click on your preferred format, and your QR code will be downloaded in that format."}
       />
      </div>
      
      </section>
    </>
  )
}

export default UseGuide
