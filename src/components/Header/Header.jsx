"use client"
import React, { useRef } from 'react'
import styles from './Header.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import categories from '@/data/categories.json'

const Header = () => {
  const pathname = usePathname()
  const sliderRef = useRef(null)
  const [showPrevButton, setShowPrevButton] = React.useState(false)
  const [showNextButton, setShowNextButton] = React.useState(true)
  // İlk linki varsayılan olarak aktif yapmak için kontrol
  const isDefaultActive = pathname === '/' || pathname !== '/deneyimler'

  const updateButtonVisibility = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current
      setShowPrevButton(scrollLeft > 0)
      setShowNextButton(scrollLeft < scrollWidth - clientWidth)
    }
  }

  const handlePrevClick = () => {
    if (sliderRef.current) {
      const containerWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollLeft -= containerWidth;
      updateButtonVisibility()
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      const containerWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollLeft += containerWidth;
      updateButtonVisibility()
    }
  };

  React.useEffect(() => {
    updateButtonVisibility()
    window.addEventListener('resize', updateButtonVisibility)
    return () => window.removeEventListener('resize', updateButtonVisibility)
  }, [])

  return (
    <header className={styles.header}>
      <div className={styles.topContainer}>
        <div className={styles.firstContent}>
          <div className={styles.logo}>
            <Image
              src="/img/img-logo/logo.png"
              alt="Airbnb Logo"
              width={33}
              height={33}
            />
            <span className={styles.logoText}>airbnb</span>
          </div>
        </div>
        <div className={styles.secondContent}>
          <Link
            href="/"
            className={isDefaultActive ? styles.activeLink : styles.link}
          >
            Evler
          </Link>
          <Link
            href="/deneyimler"
            className={pathname === '/deneyimler' ? styles.activeLink : styles.link}
          >
            Deneyimler
          </Link>
        </div>
        <div className={styles.lastContent}>
          <div className={styles.modal}>
            <Link href="/">Evinizi Airbnb'ye Taşıyın</Link>
          </div>
          <div className={styles.search}>
            <Image src="/img/img-header/world.png"
              className={styles.world}
              alt="search"
              width={18}
              height={18} />
          </div>
          <div className={styles.userMenu}>
            <Image src="/img/img-header/menu.png"
              className={styles.menu}
              alt="user"
              width={16}
              height={16} />
            <Image src="/img/img-header/user-profile.png"
              className={styles.user}
              alt="user"
              width={30}
              height={30} />
          </div>
        </div>
      </div>

      <div className={styles.bottomContainer}>
        <div className={styles.searchContainer}>
          <div className={styles.location}>
            <h4>Yer</h4>
            <p>Gidilecek yerleri arayın</p>
          </div>
          <div className={styles.checkIn}>
            <h4>Giriş</h4>
            <p>Tarih ekleyin</p>
          </div>
          <div className={styles.checkOut}>
            <h4>Çıkış</h4>
            <p>Tarih ekleyin</p>
          </div>
          <div className={styles.guest}>
            <h4>Kişiler</h4>
            <p>Misafir ekleyin</p>
          </div>
          <div className={styles.searchButton}>
            <div className={styles.searchButtonArea}>
              <Image src="/img/img-header/search.png"
                className={styles.searchButtonImage}
                alt="search"
                width={16}
                height={16} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sliderContainer}>
        <div className={styles.sliderContent} ref={sliderRef} onScroll={updateButtonVisibility}>
          {categories.categories.map((category) => (
            <div key={category.id} className={styles.sliderItem}>
              <Image
                src={category.image}
                alt={category.name}
                width={24}
                height={24}
              />
              <span>{category.name}</span>
            </div>
          ))}
        </div>
        {showPrevButton && (
          <button className={styles.sliderPrevButton} onClick={handlePrevClick}>
            <Image src="/img/img-slider/prev.png" alt="Previous" width={16} height={16} />
          </button>
        )}
        {showNextButton && (
          <button className={styles.sliderNextButton} onClick={handleNextClick}>
            <Image src="/img/img-slider/next.png" alt="Next" width={16} height={16} />
          </button>
        )}
        <div className={styles.filters}>
          <div className={styles.filterItem}>
            <Image src="/img/img-slider/filter.png" alt="Filter" width={16} height={16} />
            <span>Filtreler</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header 