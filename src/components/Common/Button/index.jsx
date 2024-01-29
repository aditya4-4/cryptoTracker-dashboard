/* eslint-disable react/prop-types */

import './styles.css'

function Button({text, onClick, outlined}) {
  return (
    <button className={outlined ? "outlined-btn" :'btn'} onClick={() => onClick()}>{text}</button>
  )
}

export default Button;