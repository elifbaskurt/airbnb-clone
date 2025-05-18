"use client"
import React from 'react'
import styles from './Footer.module.css'
import categories from '@/data/categories.json'
import Image from 'next/image'


const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerTop}>
                <div className={styles.footerTopOne}>
                    <h2>Gelecek kaçamaklarınız için fikirler</h2>
                    <h5>Kategoriler</h5>
                    <div className={styles.footerBorder}></div>
                </div>
                <div className={styles.footerTopTwo}>
                    {categories.categories.slice(0, 17).map((category) => (
                        <div key={category.id} className={styles.footerItem}>
                            <span>{category.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.footerBottom}>
                <div className={styles.bottomContainer}>
                    <div className={styles.bottomOne}>
                        <h3>Destek</h3>
                        <div className={styles.bottomLinks}>
                            <span>Yardım Merkezi</span>
                            <span>AirCover</span>
                            <span>Ayrımcılık yapmama</span>
                            <span>Engellilik desteği</span>
                            <span>İptal seçenekleri</span>
                            <span>Semtinizdeki sorunu bildirin</span>
                        </div>
                    </div>
                    <div className={styles.bottomTwo}>
                        <h3>Ev Sahipliği</h3>
                        <div className={styles.bottomLinks}>
                            <span>Evinizi Airbnb'ye taşıyın</span>
                            <span>Ev sahipleri için AirCover</span>
                            <span>Ev sahipliği kaynakları</span>
                            <span>Topluluk forumu</span>
                            <span>Sorumlu ev sahipliği</span>
                            <span>Ücretsiz bir ev sahipliği dersine katılın</span>
                            <span>Yardımcı ev sahibi bulun</span>
                        </div>
                    </div>
                    <div className={styles.bottomThree}>
                        <h3>Airbnb</h3>
                        <div className={styles.bottomLinks}>
                            <span>Basın odası</span>
                            <span>Yeni özellikler</span>
                            <span>Kariyer</span>
                            <span>Yatırımcılar</span>
                            <span>Airbnb.org acil konaklamaları</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className={styles.footerLast}>
                <div className={styles.footerLastContainer}>
                    <div className={styles.footerLastOne}>
                        <span>© 2025 Airbnb, Inc.</span>
                        <span>Gizlilik</span>
                        <span>Şartlar</span>
                        <span>Site Haritası</span>
                    </div>
                    <div className={styles.footerLastTwo}>
                        <span className={styles.langCurrency}><Image src="/img/img-footer/world.png" alt="world" width={16} height={16} />Türkçe(TR)</span>
                        <span className={styles.langCurrency}><Image src="/img/img-footer/turkish-lira.png" alt="lira" width={10} height={10} />TRY</span>
                        <span className={styles.socialIcon}><Image src="/img/img-footer/facebook.png" alt="facebook" width={16} height={16} /></span>
                        <span className={styles.socialIcon}><Image src="/img/img-footer/twitter.png" alt="twitter" width={16} height={16} /></span>
                        <span className={styles.socialIcon}><Image src="/img/img-footer/instagram.png" alt="instagram" width={16} height={16} /></span>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer;