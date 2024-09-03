import React from 'react'

const GuideSteps = ({img,step,s_title,s_desc}) => {
  return (
    <>
       <div className="steps">
        <div className="details_part">
        <span>{step}    </span>
        <span>{s_title}</span>
        <p>{s_desc}</p>
        </div>
        <div className="image_part">
        <img src={img} alt="" />
        </div>
      </div>
    </>
  )
}

export default GuideSteps
