import React from 'react';
import './Footer.css';
import { BrowserRouter as Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const Footer = props => {
    return (
        <div className="text-center Footer">
            <div className="col-md-12 socials-bar">
                <Link to="#"><SocialIcon style={{ height: 30, width: 30 }} url="http://facebook.com" /></Link>
                <Link to="#"><SocialIcon style={{ height: 30, width: 30 }} url="http://twitter.com" /></Link>
                <Link to="#"><SocialIcon style={{ height: 30, width: 30 }} url="http://google.com" /></Link>
                <Link to="#"><SocialIcon style={{ height: 30, width: 30 }} url="http://instagram.com" /></Link>
            </div>
            <div className="col-md-12 author">
                <p>Copyright &copy; Dang Duc Manh. All rights reserved.</p>
            </div>

        </div>
    );
}

export default Footer;