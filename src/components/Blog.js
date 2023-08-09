import React from 'react';
import blog1 from '../images/blog1.png';

function Blog() {
  return (
    <div style={{ justifyContent: 'center', padding: '0% 7% 5%', textAlign: 'center' }}>
      <h1>Chatnshops blog news</h1>
      <p className='pb-4'>News articles and promotions for brand owners and agents aiming for success.</p>
      <div className='row row-cols-1 row-cols-md-3 g-4'>
        <div className='col'>
          <div className='card h-100 card-hover' style={{border:"none"}}>
            <img src={blog1} className='card-img-top card-img-size' alt='...' />
            <div className='card-body' style={{textAlign:"left"}}>
              <h5 className='card-title'>Try the system free for 14 days</h5>
              <p className='card-text'>
        Live system to manage pages to help sellers, sellers, online sellers.
              </p>
            </div>
          </div>
        </div>
        <div className='col'>
        <div className='card h-100 card-hover' style={{border:"none"}}>
            <img src='https://chatnshops.com/assets/img/cns-i-7-4.jpg' className='card-img-top' alt='...' />
            <div className='card-body' style={{textAlign:"left"}}>
              <h5 className='card-title'>Parcel number management system</h5>
              <p className='card-text'>
              Issue parcel numbers with cash on delivery. No need to wait in line.
              </p>
            </div>
          </div>
        </div>
        <div className='col'>
        <div className='card h-100 card-hover' style={{border:"none"}}>
            <img src='https://chatnshops.com/assets/img/cns-i-7-6.jpg' className='card-img-top' alt='...' />
            <div className='card-body' style={{textAlign:"left"}}>
              <h5 className='card-title'>Order Management System</h5>
              <p className='card-text'>Press and print and pack ready to be delivered to customers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
