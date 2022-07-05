import React from 'react'

function Bg(props) {
    const bgStyle = {
        position: `absolute`,
        backgroundImage: `url(${props.img})`,
        backgroundRepeat:"no-repeat" ,
        backgroundSize: `100% 100%`,
        width: `100%`,
        height: `40%`,
    };
  return  <div style={bgStyle}></div>
}

export default Bg