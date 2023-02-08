import React, { useState } from 'react'
import InstagramLogo from '../assets/image/ig.png'
import whatsappLogo from '../assets/image/whatsappicon.png'
import LinkedinLogo from '../assets/image/linkedin.png'
import FacebookLogo from '../assets/image/facebook.png'
import TwitterLogo from '../assets/image/twitter.png'
import { Link } from 'react-router-dom'

export default function Footer() {
    const [product, setProduct] = useState(["Jurnal Nasional", "Jurnal International", "Jurnal Sinta", "Artikel Berita", "Artikel Ilmiah"])
    const [service, setService] = useState(["Publikasi Jurnal", "Konversi Jurnal", "Review Jurnal", "Pembuatan Jurnal", "Submit jurnal", "pendampingan Jurnal"])
    const [engage, setEngage] = useState(["FAQ", "Salyco Ketik ?", "Privacy Policy", "Terms and Condition",])
    return (
        <div className='Footer'>
            <div className='footerContainer'>
                <div className='footerLeftSide'>
                    <h1 className='logoSample'>Salyco Ketik Logo</h1>
                    <p className='footerDesc'>Quality Journal is the results of the author dialectics, so Journals are compiled by Professional in their field</p>
                    <div className='footerSosmedWrapper'>
                        <Link className='miniLogoCircle' to="https://www.instagram.com/salycoketik_">
                            <img className='miniSosmedLogo' src={InstagramLogo} alt="" />
                        </Link>
                        <Link className='miniLogoCircle' to="https://www.facebook.com/salycoketik">
                            <img className='miniSosmedLogo' src={FacebookLogo} alt="" />
                        </Link>
                        <Link className='miniLogoCircle' to="https://twitter.com/salycoketik">
                            <img className='miniSosmedLogo' src={TwitterLogo} alt="" />
                        </Link>
                        <Link className='miniLogoCircle' to="https://api.whatsapp.com/send?phone=6285159228689">
                            <img className='miniSosmedLogo' src={whatsappLogo} alt="" />
                        </Link>
                        <Link className='miniLogoCircle' to="https://www.linkedin.com/company/salyco-ketik/">
                            <img className='miniSosmedLogo' src={LinkedinLogo} alt="" />
                        </Link>
                        
                    </div>
                    <h3 className='footerDesc'>© Copyright Salyco Ketik</h3>
                    <h3 className='poweredBy mt-2'>Powered by RIKI RHENALDI</h3>
                </div>

                <div className='footerRightSide'>
                    <div>
                        <h3 className='footerListHeader'>Product</h3>
                        <ul>
                            {product.map((item) => {
                                return (
                                    <li className='footerListItem'>
                                        <Link to=''>
                                           <button> {">  "}{item}</button>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div>
                        <h3 className='footerListHeader'>Service</h3>
                        <ul>
                            {service.map((item) => {
                                return (
                                    <li className='footerListItem'>
                                        <Link to=''>
                                           <button> {">  "}{item}</button>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div>
                        <h3 className='footerListHeader'>Engage</h3>
                        <ul>
                        {engage.map((item) => {
                                return (
                                    <li className='footerListItem'>
                                        <Link to=''>
                                           <button> {">  "}{item}</button>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
