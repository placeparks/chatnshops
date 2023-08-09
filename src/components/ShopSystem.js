import React, { useState } from 'react';
import chatshop from '../images/chatshop.mp4';

function ShopSystem() {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    'ChatnShops Tutorial Signup',
    'ChatnShops Tutorial Apply for Packages',
    'Setup Menue in ChatnShops'
  ];

  return (
    <div className='container' style={{ padding: "4%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <div style={{ maxWidth: "70%", textAlign: "center" }}>
        <h1>Chatnshop system, Store comments, see everything, order</h1>
        <p className='pb-4'>Customers can type "product code" followed by "quantity" of the desired product. To order from the comments on the Facebook page immediately.</p>
      </div>
      <div className="card mb-3" style={{ border: "none" }}>
        <div className="row g-0">
          <div className="col-md-6 mt-4">
            <video width="100%" height="100%" controls>
              <source src={chatshop} type="video/mp4" />
            </video>
          </div>
          <div className="col-md-4">
            <div className="card-body p-4">
              <h4 className='mb-4'><b>teach basic usage</b></h4>
              
              {items.map((item, index) => (
                <p key={index} className={`list ${index === activeIndex ? 'active' : ''}`} onClick={() => setActiveIndex(index)}>
                  <span className="round-count">{index + 1}</span>{item}
                </p>
              ))}
             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopSystem;
