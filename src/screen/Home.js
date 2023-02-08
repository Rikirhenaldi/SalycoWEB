import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import '../index.css'
import '../App.css'
import Bg1 from '../assets/image/bg1.jpg'
import Bg2 from '../assets/image/bg2.jpg'
import LogoEbsco from '../assets/image/LogoEbsco.png'
import LogoDoaj from '../assets/image/LogoDoaj.png'
import LogoScopus from '../assets/image/LogoScopus.png'
import LogoWos from '../assets/image/LogoWos.png'
import CheckIcon from '../assets/image/check.png'
import LogoJL from '../assets/image/LogoJL.png'
import LogoGP from '../assets/image/LogoGP.png'
import LogoRI from '../assets/image/LogoRI.png'
import JudulIcon from '../assets/image/judul.png'
import MiniLogoScopus from '../assets/image/scopus.png'
import MiniLogoScholar from '../assets/image/scholar.png'
import MiniLogoWos from '../assets/image/wos.png'
import MiniLogoEbsco from '../assets/image/ebsco.png'
import MiniLogoDoaj from '../assets/image/doaj.png'
import MiniLogoCopernicus from '../assets/image/copernicus.png'
import IndexingIcon from '../assets/icon/indexing.png'
import KerjasamaIcon from '../assets/icon/kerjasama.png'
import KualitasIcon from '../assets/icon/kualitas.png'
import KualitasIndexIcon from '../assets/icon/kualitasIndex.png'
import LegalitasIcon from '../assets/icon/legalitas.png'
import PublishIcon from '../assets/icon/publish.png'
import MesinKetik from '../assets/3D/MesinKetik.glb'
import WhatsappIcon from '../assets/image/whatsappicon.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFeather, faBookJournalWhills, faPeopleGroup, faPhone, faMailBulk, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import AccordionFAQ from '../components/AccordionFAQ'
import { Link } from 'react-router-dom'
import Linked from 'react-scroll/modules/components/Link'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
    const [typeJournal, setTypeJournal] = useState([
        {
            name: "Jurnal International Scopus",
            description: "Bereputasi, Indexing Berkualitas International, ISSN & E-ISSN dan Support OJS",
            img: LogoScopus
        },
        {
            name: "Jurnal International Doaj",
            description: "Bereputasi, Indexing Berkualitas International, ISSN & E-ISSN dan Support OJS",
            img: LogoDoaj
        },
        {
            name: "Jurnal International Ebsco",
            description: "Bereputasi, Indexing Berkualitas International, ISSN & E-ISSN dan Support OJS",
            img: LogoEbsco
        },
        {
            name: "Jurnal International Wos",
            description: "Bereputasi, Indexing Berkualitas International, ISSN & E-ISSN dan Support OJS",
            img: LogoWos
        },
    ])

    const [aboutList, setAboutList] = useState([
        {
            name: 'Money Back Guaranted',
            desc: 'Garansi uang kembali apabila artikel jurnal Bapak/Ibu tidak terpublish sesuai dengan MoU'
        },
        {
            name: 'Fast Response',
            desc: 'Mengutamakan chat dari customer dan berusaha membalasnya dengan cepat'
        },
        {
            name: 'Quality Control Service',
            desc: 'Melakukan proses pengecekan terlebih dahulu untuk memastikan kualitas produk dengan sesuai'
        },
    ])
    const [portofolio, setPortofolio] = useState([
        {
            name: "Author",
            count: 260,
        },
        {
            name: "Spesialis",
            count: 560
        },
        {
            name: "Portofolio",
            count: 1257
        },
        {
            name: "Kerjasama",
            count: 47
        }
    ])
    const [guarantee, setGuarantee] = useState([
        {
            name: "Legalitas Terjamin",
            description: "Bereputasi, Indexing Berkualitas International, ISSN & E-ISSN dan Support OJS",
            img: LegalitasIcon
        },
        {
            name: "Terindeks International",
            description: "Bereputasi, Indexing Berkualitas International, ISSN & E-ISSN dan Support OJS",
            img: IndexingIcon
        },
        {
            name: "Jaminan Kualitas",
            description: "Bereputasi, Indexing Berkualitas International, ISSN & E-ISSN dan Support OJS",
            img: KualitasIcon
        },
        {
            name: "Kepastian Publish",
            description: "Bereputasi, Indexing Berkualitas International, ISSN & E-ISSN dan Support OJS",
            img: PublishIcon
        },
        {
            name: "Indexing Berkualitas",
            description: "Bereputasi, Indexing Berkualitas International, ISSN & E-ISSN dan Support OJS",
            img: KualitasIndexIcon
        },
        {
            name: "Author & Artikel",
            description: "Bereputasi, Indexing Berkualitas International, ISSN & E-ISSN dan Support OJS",
            img: KerjasamaIcon
        },
    ])
    const [journalService, setJournalService] = useState([
        {
            name: 'Jurnal Nasional',
            desc: 'Mempunyai E-ISSN dan P-ISSN, Terindex Copernicus, Google Schoolar, Garuda, Dimension dan lainnya,Bisa digunakan untuk kenaikan Pangkat, Jabatan Fungsional Dosen, kenaikan Kelulusan S1 dan S2, E-Sertifikat dan Full Issue'
        },
        {
            name: 'Jurnal International',
            desc: 'Mempunyai E-ISSN dan P-ISSN, Dipastikan Jurnal terindex di Indexing Internasional Bereputasi (Scopus), Wos, DOAJ, Google, Schoolar, Garuda, Dimension dan lainnya, Dipastikan dapat digunakan untuk kenaikan Pangkat, Jabatan Fungsiona Dosen, BKD dan syarat Kelulusan Akademik S2 dan Program Doktoral, Dipastikan terbit dan terhindar dari jurnal-jurnal predator, Bidang Semua Rumpun Ilmu, E-Sertifikat dan Full Issue'
        },
        {
            name: 'Jurnal Sinta',
            desc: 'Mempunyai E-ISSN dan P-ISSN, Terindex Sinta, Google, Schoolar, Garuda, Dimension dan lainnya, Dipastikan dapat digunakan untuk kenaikan Pangkat, Jabatan Fungsiona Dosen, BKD dan syarat Kelulusan Akademik S2 dan Program Doktoral, Bidang Semua Rumpun Ilmu, E-Sertifikat dan Full Issue'
        },
    ])
    const [service, setService] = useState([
        {
            name: "Publikasi Jurnal",
            description: "Bereputasi, Indexing Berkualitas International, ISSN & E-ISSN dan Support OJS",
            img: LegalitasIcon
        },
        {
            name: "Konversi Jurnal",
            description: "Bereputasi, Indexing Berkualitas International, ISSN & E-ISSN dan Support OJS",
            img: IndexingIcon
        },
        {
            name: "Review Jurnal",
            description: "Bereputasi, Indexing Berkualitas International, ISSN & E-ISSN dan Support OJS",
            img: KualitasIcon
        },
        {
            name: "Pembuatan Jurnal",
            description: "Bereputasi, Indexing Berkualitas International, ISSN & E-ISSN dan Support OJS",
            img: PublishIcon
        },
        {
            name: "Sumbit Jurnal",
            description: "Bereputasi, Indexing Berkualitas International, ISSN & E-ISSN dan Support OJS",
            img: KualitasIndexIcon
        },
        {
            name: "Pendampingan Jurnal",
            description: "Bereputasi, Indexing Berkualitas International, ISSN & E-ISSN dan Support OJS",
            img: KerjasamaIcon
        },
    ])
    useEffect(() => {
        AOS.init();
      }, [])

      const windowSize = useRef([window.innerWidth, window.innerHeight]);
    
    return (
        <div style={{ backgroundColor: '#f4f4f4' }}>
            <Link to='https://api.whatsapp.com/send?phone=6285159228689' className='whatsappButton'>
                <h3 className='orderWa'>Pesan Sekarang</h3>
                <img className='whatsappFloating' src={WhatsappIcon} alt="Wa"/>
            </Link>
            <section id='Home' className='Home w-full box-border'>
                <div className='HomeContainer'>
                    <div className='tagLineWrapper'>
                        {/* <h1 className='tagLine2'>Salyco</h1> */}
                        <h1 className='tagLine' data-aos="fade-right" data-aos-duration={1000} >We Believe That </h1>
                        <h1 className='tagLine2'data-aos="fade-right" data-aos-duration={1400} > Quality Journal is the results of the author dialectics, so Journals are compiled by Professional in their field</h1>
                        <Linked
                        to="Contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={900}
                        data-aos="fade-right" 
                        data-aos-duration={1800} 
                        >
                            <button className='pinkButton'>Konsultasi Sekarang</button>
                        </Linked>
                    </div>
                </div>
            </section>
            <div className='boxFloatWrapper'>
                <div className='boxFloatingHome' data-aos="fade-up" data-aos-duration={1000}>
                    {portofolio.map((item, index) => {
                        return (
                            <div className={index > 2 ? "cardTypeJournalLast" : "cardTypeJournal"}>
                                {index === 0 ?
                                        <img className='portoIcon' src={JudulIcon} alt="title" />
                                        :
                                        index === 1 ?
                                            <FontAwesomeIcon icon={faFeather} className='portoIcon' />
                                            :
                                            index === 2 ?
                                                <FontAwesomeIcon className='portoIcon' icon={faBookJournalWhills} />
                                                :
                                                <FontAwesomeIcon className='portoIcon2' icon={faPeopleGroup} />
                                    }
                                <h1 className='portoCount'>{item.count}</h1>
                                <h2 className='portoName'>{item.name}</h2>
                            </div>
                        )
                    })}
                </div>
            </div>
            <section id='About' className='About w-full h-screen bg-white'>
                <div className='containerContent'>
                    <div className='badge'>About</div>
                    <h1 className='sectionTitle' data-aos="fade-right" data-aos-duration={1000}>Find Out More <span className='specialTitle'>About Us</span></h1>
                    <p className='sectionDescription' data-aos="fade-right" data-aos-duration={1000}>Salyco is Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis explicabo minus quidem eligendi, laudantium porro modi provident asperiores voluptates dolor quae cum consequuntur saepe, facere, doloremque ipsum blanditiis obcaecati? Deleniti!
                    </p>
                    <div className='listAboutContainer'>
                        <img className='bgAbout' src={Bg1} alt="bg1" data-aos="fade-right" data-aos-duration={1000}/>
                        <div className='w-full ' data-aos={windowSize.current[0] > 1000 ? "fade-left" : "fade-up"} data-aos-duration={1000}>
                            <h2 className='subTitle'>Publikasi Terjamin</h2>
                            <ul>
                                {aboutList.map((item) => {
                                    return (
                                        <li className='itemListAbout'>
                                            <div className='circleWrapper'>
                                                <img className='checkIcon' src={CheckIcon} alt="checkIcon" />
                                            </div>
                                            <div className='textListWraper'>
                                                <h2 className='listName'>{item.name}</h2>
                                                <p className='listDesc'>{item.desc}</p>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                            <p className='listDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ratione rem explicabo debitis quod quia ex animi inventore nostrum accusantium molestias, nemo maxime voluptates harum voluptas reprehenderit nesciunt, doloremque sint?</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className='featuredContainer'>
                <h1 className='sectionTitle'>Our <span className='specialTitle'>Partner</span></h1>
                <div className='partnerWrapper'>
                    <img className='partnerlogo' src={LogoGP} alt="logogp" data-aos="fade-down" data-aos-duration={500}/>
                    <img className='partnerlogo' src={LogoJL} alt="logojl" data-aos="fade-down" data-aos-duration={1500}/>
                    <img className='partnerlogo' src={LogoRI} alt="logori" data-aos="fade-down" data-aos-duration={2500}/>
                </div>
                <h1 className='sectionTitle'>Our Journal <span className='specialTitle'>Indexing</span></h1>
                <div className='partnerWrapper'>
                    <img className='partnerlogo2' src={MiniLogoEbsco} alt="ebsco" data-aos="fade-down" data-aos-duration={200}/>
                    <img className='partnerlogo2' src={MiniLogoWos} alt="wos" data-aos="fade-down" data-aos-duration={500}/>
                    <img className='partnerlogo2' src={MiniLogoScopus} alt="scopus" data-aos="fade-down" data-aos-duration={1000}/>
                    <img className='partnerlogo2' src={MiniLogoDoaj} alt="doaj" data-aos="fade-down" data-aos-duration={1500}/>
                    <img className='partnerlogo2' src={MiniLogoCopernicus} alt="copernicus" data-aos="fade-down" data-aos-duration={2000}/>
                    <img className='partnerlogo2' src={MiniLogoScholar} alt="scholar" data-aos="fade-down" data-aos-duration={2500}/>
                </div>
            </div>
            <section id='Guarantee' className='Guarantee w-full'>
                <div className='containerContent'>
                    <div className='badge'>Guarantee</div>
                    <h1 className='sectionTitle' data-aos="fade-right" data-aos-duration={500}>Jaminan Kualitas <span className='specialTitle'>Terbaik</span></h1>
                    <p className='sectionDescription' data-aos="fade-right" data-aos-duration={1000}>Proses Manajemen Publikasi dilakukan oleh tim professional dengan 11 tahapan mulai dari Screening naskah, Plagiarism Checker, Submit Naskah, Review Naskah, LoA, Naskah Editing, Naskah Revisi, Copy Editing, Publish, Sertifikat Licence dan Full Issue.
                    </p>
                    <div className='guaranteeGridContainer'>
                        {guarantee.map((item) => {
                            return (
                                <div className='guaranteeCard' 
                                data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000">
                                    <div className='iconGuaranteeBox'>
                                        <img className='iconGuarantee' src={item.img} alt="guarantee" />
                                    </div>
                                    <h1 className='guaranteeName'>{item.name}</h1>
                                    <p className='guaranteeDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <section id='Service' className='Service w-full'>
                <div className='containerContent'>
                    <div className='badge'>Service</div>
                    <h1 className='sectionTitle' data-aos="fade-right" data-aos-duration={500}>Our <span className='specialTitle'>Service</span></h1>
                    <p className='sectionDescription'data-aos="fade-right" data-aos-duration={1000}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident dolorum sit tempore ad eum id alias debitis, pariatur, ex dolores cupiditate. Ipsam alias ullam optio aspernatur vitae atque, consequuntur neque.
                    </p>
                    <div className='listServiceContainer box-border'>
                        {/* <img className='bgAbout' src={Bg1} alt="bg1" /> */}
                        <div className='modelBox' data-aos="fade-right" data-aos-duration={1000}>
                            <model-viewer
                                style={{ width: '70%', height: '100%', borderRadius: 10, marginTop: -20 }}
                                src={MesinKetik}
                                alt="mesinketik"
                                camera-controls
                                auto-rotate
                                loading="eager"
                                shadow-intensity="2"
                                ar
                            ></model-viewer>
                        </div>
                        <div className='w-full ' data-aos={windowSize.current[0] > 1000 ? "fade-left" : "fade-up"}data-aos-duration={1000}>
                            <h2 className='subTitle'>Paket Layanan Jurnal</h2>
                            <ul>
                                {journalService.map((item,index) => {
                                    return (
                                        <li className='itemListAbout' data-aos={windowSize.current[0] > 1000 ? "fade-left" : "fade-up"} data-aos-duration={index === 0 ?500: index === 1 ? 1000 : 1500 }>
                                            <div className='circleWrapper'>
                                                <img className='checkIcon' src={CheckIcon} alt="checkIcon" />
                                            </div>
                                            <div className='textListWraper'>
                                                <h2 className='listName'>{item.name}</h2>
                                                <p className='listDescService'>{item.desc}</p>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className='guaranteeGridContainer'>
                        {service.map((item) => {
                            return (
                                <div className='guaranteeCard' data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000">
                                    <div className='iconGuaranteeBox'>
                                        <img className='iconGuarantee' src={item.img} alt="iconGuarantee" />
                                    </div>
                                    <h1 className='guaranteeName'>{item.name}</h1>
                                    <p className='guaranteeDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <section id='FAQ' className='Faq w-full'>
                <div className='containerContent'>
                    <div className='badge'>F.A.Q</div>
                    <h1 className='sectionTitle' data-aos="fade-right" data-aos-duration={500}>Frequently Asked <span className='specialTitle'>Questions</span></h1>
                    <AccordionFAQ data-aos="fade-right" data-aos-duration={400} />
                </div>
            </section>
            <section id='Contact' className='Contact w-full h-screen bg-white'>
                <div className='containerContent box-border'>
                    <div className='badge'>Contact</div>
                    <h1 className='sectionTitle' data-aos="fade-right" data-aos-duration={500}>Contact <span className='specialTitle'>Us</span></h1>
                    <div className='listContactWrapper'>
                    <Link to='https://api.whatsapp.com/send?phone=6285159228689' className='cardContact' data-aos={windowSize.current[0] > 1000 ? "fade-right" : "fade-up"} data-aos-duration={1000}> 
                    {console.log('width ni bos', windowSize.current[0] )}
                    <FontAwesomeIcon icon={faPhone} className='contactIcon' />
                    <h2 className='contactName'>Contact</h2>
                    <p className='contactDesc'>Silakan hubungi kami melalui kontak telepon dan kami akan dengan senang hati membantu Anda.</p>
                    <h2 className='contactDesc2'>+62 851-5922-8689</h2>
                    </Link>
                    <Link Link to='https://mail.google.com/mail/?view=cm&fs=1&to=official@salyco.com&su=Pesan Journal&body=Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, aperiam rem assumenda blanditiis nemo placeat, necessitatibus accusantium deleniti doloribus quisquam dolor non numquam, tempora suscipit neque fugiat iusto sapiente quam?' className='cardContact' data-aos={windowSize.current[0] > 1000 ? "fade-left" : "fade-up"} data-aos-duration={1000}>
                    <FontAwesomeIcon icon={faEnvelope} className='contactIcon' />
                    <h2 className='contactName'>Email</h2>
                    <p className='contactDesc'>Silakan hubungi kami melalui email formulir kontak dan kami akan dengan senang hati membantu Anda.</p>
                    <h2 className='contactDesc2'>official@salycoketik.com</h2>
                    </Link>
                    
                    </div>
                </div>
            </section>
        </div>
    )
}
