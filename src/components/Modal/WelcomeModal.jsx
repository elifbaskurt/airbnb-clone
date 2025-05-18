'use client';

import { useState, useEffect } from 'react';
import styles from './WelcomeModal.module.css';
import Image from 'next/image';

const WelcomeModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Sayfa yüklendiğinde modal'ı göster
        setIsOpen(true);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContainer}>
                {/* Kapatma butonu */}
                <button
                    onClick={handleClose}
                    className={styles.closeButton}
                >
                    ✕
                </button>
                <div className={styles.modalContent}>
                    <div className={styles.iconContainer}>
                        <Image src="/img/img-welcmodal/tag.png" alt="icon" width={94} height={94} />
                    </div>
                    <div className={styles.modalContentText}>
                        <h2 className={styles.title}>
                            Artık seyahatiniz için tüm ücretler dâhil tek bir fiyat göreceksiniz.
                        </h2>
                        <button
                            onClick={handleClose}
                            className={styles.button}
                        >
                            Anladım
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeModal; 