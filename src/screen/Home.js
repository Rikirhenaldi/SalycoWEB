import React, { useState } from 'react'
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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFeather, faBookJournalWhills, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'

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
            name: "Judul",
            count: 7560,
        },
        {
            name: "Penulis",
            count: 7560
        },
        {
            name: "Jurnal Ilmiah",
            count: 57
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
            name: "Publikasi Jurnal ✔",
            description: "Bereputasi, Indexing Berkualitas International, ISSN & E-ISSN dan Support OJS",
            img: LegalitasIcon
        },
        {
            name: "Konversi Jurnal ✔",
            description: "Bereputasi, Indexing Berkualitas International, ISSN & E-ISSN dan Support OJS",
            img: IndexingIcon
        },
        {
            name: "Review Jurnal ✔",
            description: "Bereputasi, Indexing Berkualitas International, ISSN & E-ISSN dan Support OJS",
            img: KualitasIcon
        },
        {
            name: "Pembuatan Jurnal ✔",
            description: "Bereputasi, Indexing Berkualitas International, ISSN & E-ISSN dan Support OJS",
            img: PublishIcon
        },
        {
            name: "Sumbit Jurnal ✔",
            description: "Bereputasi, Indexing Berkualitas International, ISSN & E-ISSN dan Support OJS",
            img: KualitasIndexIcon
        },
        {
            name: "Pendampingan Jurnal ✔",
            description: "Bereputasi, Indexing Berkualitas International, ISSN & E-ISSN dan Support OJS",
            img: KerjasamaIcon
        },
    ])
    return (
        <div style={{ backgroundColor: '#f4f4f4' }}>
            <section id='Home' className='Home w-full h-screen bg-yellow-300'>
                <div className='HomeContainer'>
                    <div className='tagLineWrapper'>
                        {/* <h1 className='tagLine2'>Salyco</h1> */}
                        <h1 className='tagLine'>We Belive That </h1>
                        <h1 className='tagLine2'> Quality Journal is the results of the author dialectics, so Journals are compiled by Professional in their field</h1>
                        <button className='pinkButton'>
                            Konsultasi Sekarang
                        </button>
                    </div>
                </div>
            </section>
            <div className='boxFloatWrapper'>
                <div className='boxFloatingHome'>
                    {typeJournal.map((item, index) => {
                        return (
                            <div className={index > 2 ? "cardTypeJournalLast" : "cardTypeJournal"}>
                                <img className='logoIndexing' src={item.img} alt={item.name} />
                                <h1 className='typeJournal'>{item.name}</h1>
                                <p className='typeJournalDesc'>{item.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <section id='About' className='About w-full h-screen bg-white'>
                <div className='containerContent'>
                    <div className='badge'>About</div>
                    <h1 className='sectionTitle'>Find Out More <span className='specialTitle'>About Us</span></h1>
                    <p className='sectionDescription'>Salyco is Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis explicabo minus quidem eligendi, laudantium porro modi provident asperiores voluptates dolor quae cum consequuntur saepe, facere, doloremque ipsum blanditiis obcaecati? Deleniti!
                    </p>
                    <div className='listAboutContainer'>
                        <img className='bgAbout' src={Bg1} alt="bg1" />
                        <div className='w-full '>
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
                    <img className='partnerlogo' src={LogoGP} alt="" />
                    <img className='partnerlogo' src={LogoJL} alt="" />
                    <img className='partnerlogo' src={LogoRI} alt="" />
                </div>
                <div className='portofolio'>
                    {portofolio.map((item, index) => {
                        return (
                            <div className='portoCard'>
                                <div className='iconPortoWrapper'>
                                    {index === 0 ?
                                        <img className='portoIcon' src={JudulIcon} alt="title" />
                                        :
                                        index === 1 ?
                                            <FontAwesomeIcon icon={faFeather} className='portoIcon' />
                                            :
                                            index === 2 ?
                                                <FontAwesomeIcon className='portoIcon' icon={faBookJournalWhills} />
                                                :
                                                <FontAwesomeIcon className='portoIcon' icon={faPeopleGroup} />
                                    }
                                </div>
                                <h1 className='portoCount'>{item.count}</h1>
                                <h2 className='portoName'>{item.name}</h2>
                            </div>
                        )
                    })}
                </div>
                <div className='portofolio'>
                    <img className='partnerlogo2' src={MiniLogoEbsco} alt="" />
                    <img className='partnerlogo2' src={MiniLogoWos} alt="" />
                    <img className='partnerlogo2' src={MiniLogoScopus} alt="" />
                    <img className='partnerlogo2' src={MiniLogoDoaj} alt="" />
                    <img className='partnerlogo2' src={MiniLogoCopernicus} alt="" />
                    <img className='partnerlogo2' src={MiniLogoScholar} alt="" />
                </div>
            </div>
            <section id='Guarantee' className='Guarantee w-full'>
                <div className='containerContent'>
                    <div className='badge'>Guarantee</div>
                    <h1 className='sectionTitle'>Jaminan Kualitas <span className='specialTitle'>Terbaik</span></h1>
                    <p className='sectionDescription'>Proses Manajemen Publikasi dilakukan oleh tim professional dengan 11 tahapan mulai dari Screening naskah, Plagiarism Checker, Submit Naskah, Review Naskah, LoA, Naskah Editing, Naskah Revisi, Copy Editing, Publish, Sertifikat Licence dan Full Issue.
                    </p>
                    <div className='guaranteeGridContainer'>
                        {guarantee.map((item) => {
                            return (
                                <div className='guaranteeCard'>
                                    <div className='iconGuaranteeBox'>
                                        <img className='iconGuarantee' src={item.img} alt="" />
                                    </div>
                                    <h1 className='guaranteeName'>{item.name}</h1>
                                    <p className='guaranteeDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <section id='Service' className='Service w-full h-screen'>
                <div className='containerContent'>
                    <div className='badge'>Service</div>
                    <h1 className='sectionTitle'>Our <span className='specialTitle'>Service</span></h1>
                    <p className='sectionDescription'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident dolorum sit tempore ad eum id alias debitis, pariatur, ex dolores cupiditate. Ipsam alias ullam optio aspernatur vitae atque, consequuntur neque.
                    </p>
                    <div className='listAboutContainer'>
                        {/* <img className='bgAbout' src={Bg1} alt="bg1" /> */}
                        <div className='modelBox'>
                        <model-viewer
                            style={{ width: '70%', height: '100%', borderRadius: 10, marginTop: -20}}
                            src={MesinKetik}
                            alt="cryptocurrency"
                            camera-controls
                            auto-rotate
                            loading="eager"
                            shadow-intensity="2"
                            ar
                        ></model-viewer>
                        </div>
                        <div className='w-full '>
                            <h2 className='subTitle'>Paket Layanan Jurnal</h2>
                            <ul>
                                {journalService.map((item) => {
                                    return (
                                        <li className='itemListAbout'>
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
                                <div className='guaranteeCard'>
                                    <div className='iconGuaranteeBox'>
                                        <img className='iconGuarantee' src={item.img} alt="" />
                                    </div>
                                    <h1 className='guaranteeName'>{item.name}</h1>
                                    <p className='guaranteeDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}