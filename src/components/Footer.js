import React from 'react';
import logo from '../images/logo.png';
import { BsTelephone, BsBoxArrowUpRight, BsArrowRight } from 'react-icons/bs';
import { MdOutlineMail } from 'react-icons/md';

function Footer() {
  return (
    <div className='footer'>
      <footer className="page-footer font-small special-color-dark pt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4">
              <p>Want to know? with chatnshops</p>
              <h1>Register with us to receive newsletters</h1>
            </div>
            <div className="col-md-6 mb-4 mt-4">
  <form className="input-group">
    <input type="text" className="form-control form-control-sm" placeholder="Your email" aria-label="Your email" aria-describedby="basic-addon2" />
    <div className="input-group-append">
      <button className="btn btn-primary bg-blue" type="button"><BsArrowRight/></button>
    </div>
  </form>
  <div style={{ textAlign: 'right' }}>
    <p>You can unsubscribe at any time. <a href="#!">Read our privacy policy.</a></p>
  </div>
</div>

          </div>
        </div>
      </footer>
      <hr /> 
      <footer className="page-footer font-small indigo">
        <div className="container text-left text-md-left">
          <div className="row">
            <div className="col-md-4 mx-auto my-2">
            <img src={logo} width="220" className='mb-2'/>
              <ul className="list-unstyled">
                <li><a href="#!">Smart Block Tech Co., Ltd.
77/39 Floor 12, Room 12D, Sinn Sathorn Tower, Krungthonburi Road, Klongtonsai, Klongsan, Bangkok 10600</a></li>
                <li><a href="#!"style={{ display: 'flex', alignItems: 'center', marginTop:"2%" }}><BsTelephone/>&nbsp;(02) 438 1668</a></li>
                <li>
  <a href="mailto:support@chantnshops.com" style={{ display: 'flex', alignItems: 'center', marginTop:"3%"}}>
    <MdOutlineMail />&nbsp;support@chantnshops.com
  </a>
</li>
              </ul>
            </div>
           
            <hr className="clearfix w-80 d-md-none"/>
            <div className="col-md-2 mx-auto">
              <h5 className="font-weight-bold mt-3 mb-2"><b>About the company</b></h5>
              <ul className="list-unstyled">
                <li><a href="#!">Our Story</a></li>
                <li><a href="#!">Time Tracking</a></li>
                <li><a href="#!">About Us</a></li>
                <li><a href="#!">Contact Us</a></li>
              </ul>
            </div>
            <hr className="clearfix w-80 d-md-none"/>
            <div className="col-md-2 mx-auto">
  <h5 className="font-weight-bold mt-3 mb-2"><b>Useful Links</b></h5>
  <ul className="list-unstyled">
    <li><a href="#!" style={{ display: 'flex', alignItems: 'center' }}>Support &nbsp;<BsBoxArrowUpRight/></a></li>
    <li><a href="#!" style={{ display: 'flex', alignItems: 'center' }}>Access &nbsp;<BsBoxArrowUpRight/></a></li>
    <li><a href="#!" style={{ display: 'flex', alignItems: 'center' }}>Privacy Policy &nbsp;<BsBoxArrowUpRight/></a></li>
    <li><a href="#!" style={{ display: 'flex', alignItems: 'center' }}>Terms of Service &nbsp;<BsBoxArrowUpRight/></a></li>
  </ul>
</div>
            <hr className="clearfix w-100 d-md-none"/>
            <div className="col-md-2 mx-auto">
              <ul className="list-unstyled">
                <li><img src="https://chatnshops.com/assets/img/cns-i-8.jpg" alt="Your Image" /></li> 
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">
          <a href="/"> Chatnshops by ©2023 All rights reserved. Smartblocktech CO., LTD.</a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;