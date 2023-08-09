import React from 'react';
import { CheckCircle } from 'phosphor-react';
import chatnshop from '../images/chatnshop.png';
import selling from '../images/selling.mp4';
export default function About(){
    return(
        <div style={{padding:"4%"}}>
<div className="card mb-3" style={{border:"none"}}>
      <div className="row g-0">
    <div className="col-md-6 mt-4" >
<video width="100%" height="100%" controls>
    <source src={selling} type="video/mp4" />
</video>
    </div>
    <div className="col-md-6">
      <div className="card-body">
        <h1>About chatnshops system</h1>
        <p>Manage your store anywhere Respond to customer chats immediately along with automatic stock cutting, helping to organize orders in the back of the house ready to be delivered Summarize your sales overview.</p>
      <h5 className="card-title" style={{ display: 'flex', alignItems: 'center' }}> 
    <CheckCircle size={32} color="#110de3" weight="fill" /> 
    <span style={{ marginLeft: '10px' }}>Selling through live increases your sales.</span>
</h5>
 <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      
 <h5 className="card-title" style={{ display: 'flex', alignItems: 'center' }}> 
    <CheckCircle size={32} color="#110de3" weight="fill" /> 
    <span style={{ marginLeft: '10px' }}>Order management system</span>
</h5>
 <p className="card-text">Help store and manage purchase orders and customer information in one place to help analyze the purchasing behavior of customers more</p>

 <h5 className="card-title" style={{ display: 'flex', alignItems: 'center' }}> 
    <CheckCircle size={32} color="#110de3" weight="fill" /> 
    <span style={{ marginLeft: '10px' }}>Instant delivery, no need to queue</span>
</h5>
 <p className="card-text">Fast cover page printing with a barcode that can actually be sent Multiple parcel delivery services</p>

      </div>
    </div>
  </div>
</div>
        </div>
    
    );
}