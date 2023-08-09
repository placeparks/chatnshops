import React from 'react'

function WhatChatnShopsDo() {
  return (
    <div style={{backgroundColor:"#f7faff", padding:"4%",paddingLeft:"11%", paddingRight:"11%", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1 style={{paddingBottom:"3%", fontWeight:"700"}}>What ChatnShops can do?</h1>
      <p className='pb-4'>It's an easy to use system for beginners.</p>
  <div className="row row-cols-1 row-cols-md-4 g-2">
<div className="col">
<div className="card h-100 hover-card">
  <img src="https://chatnshops.com/assets/svg/icons/icon-4.svg" className="card-img-top mt-2" alt="..."/>
  <div className="card-body">
        <h6 className="card-title"><b>Pull comments into inbox</b></h6>
        <p>Create welcome messages and auto-reply to your inbox.</p>
      </div>
    </div>
  </div>
  <div className="col">
  <div className="card h-100 hover-card" >
      <img  src="https://chatnshops.com/assets/svg/icons/icon-22.svg" className="card-img-top mt-2" alt="..."/>
      <div className="card-body">
        <h6 className="card-title"><b>Convenient Payments</b></h6>
        <p>Convenient payment methods in various currencies</p>
      </div>
    </div>
  </div>
  <div className="col">
  <div className="card h-100 hover-card">
      <img src="https://chatnshops.com/assets/svg/icons/icon-5.svg" className="card-img-top mt-2" alt="..."/>
      <div className="card-body">
        <h6 className="card-title"><b>Interesting statistics report</b></h6>
        <p>Can come out as an Excel file, such as the proportion of revenue from various distribution channels</p>
      </div>
    </div>
  </div>
  <div className="col">
  <div className="card h-100 hover-card">
      <img src="https://chatnshops.com/assets/svg/icons/icon-5.svg" className="card-img-top mt-2" alt="..."/>
      <div className="card-body">
        <h6 className="card-title"><b>ChatnShops Dashboard</b></h6>
        <p> It allows you to instantly analyze your store's sales and track inventory directly.</p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default WhatChatnShopsDo
