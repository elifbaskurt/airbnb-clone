'use client';
import styles from "./page.module.css";
import locationData from "../data/location.json";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentSlides, setCurrentSlides] = useState({});

  useEffect(() => {
    // Her konum için başlangıç slide'ını 0 olarak ayarla
    const initialSlides = {};
    locationData.locations.forEach(location => {
      initialSlides[location.id] = 0;
    });
    setCurrentSlides(initialSlides);
  }, []);

  const handlePrevSlide = (locationId, totalImages) => {
    setCurrentSlides(prev => ({
      ...prev,
      [locationId]: (prev[locationId] - 1 + totalImages) % totalImages
    }));
  };

  const handleNextSlide = (locationId, totalImages) => {
    setCurrentSlides(prev => ({
      ...prev,
      [locationId]: (prev[locationId] + 1) % totalImages
    }));
  };

  return (
    <div className={styles.page}>
      <div className={styles.locationGrid}>
        {locationData.locations.map((location) => (
          <div key={location.id} className={styles.locationItem}>
            <div className={styles.sliderContainer}>
              <div className={styles.slider}>
                <Image
                  src={location.images[currentSlides[location.id]]}
                  alt={`${location.name} - Image ${currentSlides[location.id] + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className={styles.locationImage}
                />
                <Image
                  src="/img/img-locations/like.png"
                  alt="like"  
                  width={20}
                  height={20}
                  className={styles.likeButton} />
                {currentSlides[location.id] !== 0 && (
                  <button
                    className={`${styles.sliderButton} ${styles.prevButton}`}
                    onClick={() => handlePrevSlide(location.id, location.images.length)}
                  >
                    ‹
                  </button>
                )}
                {currentSlides[location.id] !== location.images.length - 1 && (
                  <button
                    className={`${styles.sliderButton} ${styles.nextButton}`}
                    onClick={() => handleNextSlide(location.id, location.images.length)}
                  >
                    ›
                  </button>
                )}
                <div className={styles.sliderDots}>
                  {location.images.map((_, index) => (
                    <button
                      key={index}
                      className={`${styles.dot} ${currentSlides[location.id] === index ? styles.activeDot : ''}`}
                      onClick={() => setCurrentSlides(prev => ({ ...prev, [location.id]: index }))}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.locationContainer}>
              <div className={styles.locationInfo}>
                <h3>{location.name}</h3>
                {location.rating &&
                  <div className={styles.ratingContainer}>
                    <Image src="/img/img-locations/star.png" alt="star" width={16} height={16} />
                    <p>{location.rating}</p>
                  </div>
                }
              </div>
              <div className={styles.locationDetails}>
                {location.details && <p>{location.details}</p>}
                {location.date && <p>{location.date}</p>}
                <div className={styles.priceContainer}>
                  {location.price && <p className={styles.price}>{location.price}</p>}
                  {location.days && <p>{location.days}</p>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
