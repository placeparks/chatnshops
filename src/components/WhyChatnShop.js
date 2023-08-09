import React from 'react'

function WhyChatnShop() {
  return (
    <div className='chat' style={{padding:"4%",paddingLeft:"15%", paddingRight:"15%", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <h1 style={{paddingBottom:"3%", fontWeight:"700"}}>Why chatnshops ? <span style={{fontSize:"3rem"}}> <b>?</b></span></h1>
  <div className="row row-cols-1 row-cols-md-4 g-2">
<div className="col">
<div className="card h-100 hover-card">
  <img src="https://chatnshops.com/assets/svg/icons/icon-65.svg" className="card-img-top" alt="..."/>
  <div className="card-body">
        <h6 className="card-title"><b>There is a system to connect with many transportation service providers.</b></h6>
      </div>
    </div>
  </div>
  <div className="col">
  <div className="card h-100 hover-card" >
      <img  src="https://chatnshops.com/assets/svg/icons/icon-59.svg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h6 className="card-title"><b>payment support Multiple channels for merchants</b></h6>
      </div>
    </div>
  </div>
  <div className="col">
  <div className="card h-100 hover-card">
      <img src="https://chatnshops.com/assets/svg/icons/icon-24.svg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h6 className="card-title"><b>Free service (conditions apply)</b></h6>
      </div>
    </div>
  </div>
  <div className="col">
  <div className="card h-100 hover-card">
      <img src="https://chatnshops.com/assets/svg/icons/icon-40.svg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h6 className="card-title"><b>Issue a product cover sheet. The seller doesn't have to reprint.</b></h6>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default WhyChatnShop
