import { useState } from "react";
import { FaTruck } from "react-icons/fa";
import { RiRefund2Line } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import Advertising from "../../components/Advertising/Advertising";
import nike from '../../assets/nikeImg.png';
import figma from '../../assets/figmaImg.png';
import hrCompany from '../../assets/hrCompanyImg.png';
import futureProduct from '../../assets/futureProduct.png'
import css from './Information.module.css';

const Information = () => {
    const [rating, setRating] = useState(4);

    return <>
        <Advertising/>
    <div>
        <ul className={css.aboutCompanyList}>
            <li className={css.aboutCompanyItem}>
                <FaTruck className={css.companyItemSvg} style={{color: '#FF6875'}}/>
                <span className={css.aboutCompanyTitle}>FREE SHIPPING</span>
                <p className={css.informationText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </li>
            <li className={css.aboutCompanyItem}>
                <RiRefund2Line className={css.companyItemSvg} style={{color: '#FF6875'}}/>
                <span className={css.aboutCompanyTitle}>100% REFUND</span>
                <p className={css.informationText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </li>
            <li className={css.aboutCompanyItem}>
                <MdOutlineSupportAgent className={css.companyItemSvg} style={{color: '#FF6875'}}/>
                 <span className={css.aboutCompanyTitle}>SUPPORT 24/7</span>
                <p className={css.informationText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </li>
        </ul>
        <div className={css.newsBox}>
            <h2 className={css.newsBoxTitle}>LATEST NEWS</h2>
            <ul className={css.newsBoxList}>
                <li className={css.newsBoxListItem}>
                    <img width='144px' height='52px' src={nike} alt="nike" style={{paddingTop: '18px'}}/>
                    <div className={css.newsBoxListBox}> 
                      <span className={css.newsBoxListDate}>01 Jan, 2015</span>
                      <h3 className={css.newsBoxListTitle}>Fashion Industry</h3>
                      <p style={{textAlign: 'left'}} className={css.informationText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </li>
                <li className={css.newsBoxListItem}>
                    <img width='115px' height='86px' src={figma} alt="figma" style={{paddingTop: '18px'}}/>
                    <div className={css.newsBoxListBox}>
                      <span className={css.newsBoxListDate}>01 Jan, 2015</span>
                      <h3 className={css.newsBoxListTitle}>Fashion Industry</h3>
                      <p style={{textAlign: 'left'}} className={css.informationText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </li>
                <li className={css.newsBoxListItem}>
                    <img width='153px' height='82px' src={hrCompany} alt="hrCompany" style={{paddingTop: '18px'}}/>
                    <div className={css.newsBoxListBox}>
                      <span className={css.newsBoxListDate}>01 Jan, 2015</span>
                      <h3 className={css.newsBoxListTitle}>Fashion Industry</h3>
                      <p style={{textAlign: 'left'}} className={css.informationText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </li>
            </ul>
        </div>
        <div style={{marginBottom: '120px'}} className={css.newsBox}>
            <h2 className={css.newsBoxTitle}>FEATURED PRODUCTS</h2>
            <ul className={css.newsBoxList}>
                <li style={{gap: '25px'}} className={css.newsBoxListItem}>
                    <img src={futureProduct} alt="futureProduct" />
                    <div style={{gap: '15px'}} className={css.newsBoxListBox}> 
                      <h3 className={css.featuredTitle}>Blue Swade Nike Sneakers</h3>
                                  <div className={css.starBox}>
              {[1,2,3,4,5].map((star, index) => <AiFillStar key={index} className={css.starItem} 
                style={{color: rating >= star ? '#ffc600' : '#c1c8ce'}} 
                onClick={() => {setRating(star)}}
              />)}
            </div>
                      <span className={css.featuredPrice}>$499</span>
                    </div>
                </li>
                <li style={{gap: '25px'}} className={css.newsBoxListItem}>
                    <img src={futureProduct} alt="futureProduct" />
                    <div style={{gap: '15px'}} className={css.newsBoxListBox}>
                      <h3 className={css.featuredTitle}>Blue Swade Nike Sneakers</h3>
                                  <div className={css.starBox}>
              {[1,2,3,4,5].map((star, index) => <AiFillStar key={index} className={css.starItem} 
                style={{color: rating >= star ? '#ffc600' : '#c1c8ce'}} 
                onClick={() => {setRating(star)}}
              />)}
            </div>
                      <span className={css.featuredPrice}>$499</span>
                    </div>
                </li>
                <li style={{gap: '25px'}} className={css.newsBoxListItem}>
                    <img src={futureProduct} alt="futureProduct" />
                    <div style={{gap: '15px'}} className={css.newsBoxListBox}>
                      <h3 className={css.featuredTitle}>Blue Swade Nike Sneakers</h3>
                                  <div className={css.starBox}>
              {[1,2,3,4,5].map((star, index) => <AiFillStar key={index} className={css.starItem} 
                style={{color: rating >= star ? '#ffc600' : '#c1c8ce'}} 
                onClick={() => {setRating(star)}}
              />)}
            </div>
                      <span className={css.featuredPrice}>$499</span>
                    </div>
                </li>
            </ul>
        </div>
        <div className={css.searchQueryBox}>
            <input type="text" placeholder='Search query...' className={css.searchQueryInput}/>
            <button type="button" className={css.searchQueryBtn}>Redeem</button>
          </div>
    </div>
    </>
}

export default Information;