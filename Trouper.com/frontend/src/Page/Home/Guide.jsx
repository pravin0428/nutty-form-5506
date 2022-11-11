import React from 'react'
import "./guide.css"

export const Guide = () => {
  return (
    <div className='box'>
       <div className='guide-head'>
         <h1>Trouper Guides</h1>
       </div>
       <div className='gridbox'>
          <div >
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560157/guide-start-online-business-552-x2.png" />
            <p className='p-bold'>Start an online business and work from home</p>
            <p>A complete guide to starting a small business online</p>
         </div>
         <div>
           <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560168/guide-digital-marketing-552-x2.png" />
           <p className='p-bold'>Digital marketing make easy</p>
           <p>practical guide to understand what is digital marketing</p>
        </div>
        <div>
          <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560155/guide-create-a-logo-552-x2.png" />
          <p className='p-bold'>create logo for your business</p>
          <p>A step by step guide to create a memorial business logo</p>
        </div>
       </div>
    </div>
  )
}
