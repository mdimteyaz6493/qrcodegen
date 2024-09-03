import React from 'react'

const GuideSteps2 = ({img,step,s_title,s_desc}) => {
  return (
    <>
       <div className="steps">
       <div className="image_part">
        <img src={img} alt="" />
        </div>
        <div className="details_part">
        <span>{step}    </span>
        <span>{s_title}</span>
        <p>{s_desc}</p>
        </div>
      </div>
    </>
  )
}

export default GuideSteps2
