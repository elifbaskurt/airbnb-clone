"use client"
import React from 'react'
// import React, { useEffect, useState } from 'react'
import styles from './MapComponent.module.css'
import Image from 'next/image'

const MapComponent = () => {
    // const [isVisible, setIsVisible] = useState(false);

    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         ([entry]) => {
    //             // Footer görünür olduğunda MapComponent'i gizle
    //             setIsVisible(!entry.isIntersecting);
    //         },
    //         {
    //             threshold: 0.1 // Footer'ın %10'u görünür olduğunda tetiklenecek
    //         }
    //     );

    //     // Footer elementini gözlemle
    //     const footer = document.querySelector(`.${styles.footerContainer}`);
    //     if (footer) {
    //         observer.observe(footer);
    //     }

    //     return () => {
    //         if (footer) {
    //             observer.unobserve(footer);
    //         }
    //     };
    // }, []);

    // if (!isVisible) return null;

    return (
        <div className={styles.mapContainer}>
            <div className={styles.mapContent}>
                <h4>Haritayı göster</h4>
                <Image
                    src="/img/img-map/map.png"
                    alt="map"
                    width={18}
                    height={18} />
            </div>
        </div>
    )
}

export default MapComponent;