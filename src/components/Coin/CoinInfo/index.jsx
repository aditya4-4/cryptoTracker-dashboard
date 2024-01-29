/* eslint-disable react/prop-types */

import { useState } from 'react'
import './styles.css'
function CoinInfo({heading, desc}) {
    const [flag, setFlag] =useState(false);

    const shortDesc = desc.slice(0, 200) + "<span style='color : var(--grey)'> Read More</span>"

    const longDesc = desc + "<span style='color : var(--grey)'> Read Less</span>"
  return (
    <div className='grey-wrapper wrapper-desc'>
        <h2 className='heading-name'>{heading}</h2>
        <p onClick={() => setFlag(!flag)}
        className='coin-description' dangerouslySetInnerHTML={{__html : !flag ? shortDesc : longDesc}}/>
    </div>
  )
}

export default CoinInfo