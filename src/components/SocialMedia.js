import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
            <a href="https://www.linkedin.com/in/vally-sh/"><FaLinkedinIn /> </a>
      </div>
        <div>
            <a href="https://www.facebook.com/eaoui"><FaFacebookF /> </a>
        </div>
        <div>
            <a href="https://www.instagram.com/sheff.official/"><BsInstagram /> </a>
        </div>
      {/*  <div>
            <BsTwitter />
        </div>*/}
    </div>
  );
};

export default SocialMedia;
