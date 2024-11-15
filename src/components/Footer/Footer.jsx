import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import logo from '../../assets/logo.svg';

import css from './Footer.module.css'

const Footer = () => {
    return <footer className={css.footerBox}>
        <ul className={css.footerList}>
            <li className={css.footerItem} style={{width: '220px'}}>
                <a href="http://" className={css.footerTextInfo} style={{display: 'flex', gap: '7px', alignItems: "center", fontSize: '18px', fontWeight: 700, textDecoration: "none"}}>
                <img src={logo} alt="Logo" width='39px' height='39px'/>
                    E-Comm
                </a>
                <p className={css.footerTextInfo}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
            </li>
            <li className={css.footerItem} style={{width: '220px'}}>
                <span className={css.footerTextInfo} style={{fontSize: '18px', fontWeight: 500}}>Follow Us</span>
                <p className={css.footerTextInfo}>Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                <div className={css.socialNetBox}>
                    <a href="http://" className={css.facebook}><FaFacebookF/></a>
                    <a href="http://" className={css.twitter}><FaTwitter/></a>  
                </div>
            </li>
            <li className={css.footerItem}>
                <span className={css.footerTextInfo} style={{fontSize: '18px', fontWeight: 500}}>Contact Us</span>
                <p className={css.footerTextInfo} style={{fontSize: '14px'}}>E-Comm , 4578 Marmora Road, Glasgow D04 89GR</p>
            </li>
            <li className={css.footerItem}>
                <span className={css.footerTextInfo} style={{fontSize: '18px', fontWeight: 500}}>Infomation</span>
                <p className={css.footerTextInfo} style={{fontSize: '14px'}}>About Us
                   Infomation 
                   Privacy Policy
                   Terms & Conditions
                </p>
            </li>
            <li className={css.footerItem}>
                <span className={css.footerTextInfo} style={{fontSize: '18px', fontWeight: 500}}>Service</span>
                <p className={css.footerTextInfo} style={{fontSize: '14px'}}>About Us
                   Infomation 
                   Privacy Policy
                   Terms & Conditions
                </p>
            </li>
            <li className={css.footerItem}>
                <span className={css.footerTextInfo} style={{fontSize: '18px', fontWeight: 500}}>My Account</span>
                <p className={css.footerTextInfo} style={{fontSize: '14px'}}>About Us
                   Infomation 
                   Privacy Policy
                   Terms & Conditions
                </p>
            </li>
            <li className={css.footerItem}>
                <span className={css.footerTextInfo} style={{fontSize: '18px', fontWeight: 500}}>Our Offers</span>
                <p className={css.footerTextInfo} style={{fontSize: '14px'}}>About Us
                   Infomation 
                   Privacy Policy
                   Terms & Conditions
                </p>
            </li>
        </ul>
        <span className={css.companyInfo}>© 2018 Ecommerce theme by www.bisenbaev.com</span>
    </footer>
}

export default Footer;