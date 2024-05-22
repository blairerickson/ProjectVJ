import React from 'react';
import { useRouter } from 'next/router';
import styles from './connect.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faDesktop, faGem } from '@fortawesome/free-solid-svg-icons';

const HomePage: React.FC = () => {
    const router = useRouter();

    const navigateTo = (path: string) => {
        router.push(path);
    };

    return (
        <div className={styles.container}>
            <div className={styles.linkCard} onClick={() => navigateTo('/sundance')}>
                <FontAwesomeIcon icon={faSun} className={styles.icon} />
                <h2 className={styles.heading}>Sundance</h2>
            </div>
            <div className={styles.linkCard} onClick={() => navigateTo('https://03b2-68-202-63-180.ngrok-free.app/')}>
                <FontAwesomeIcon icon={faDesktop} className={styles.icon} />
                <h2 className={styles.heading}>Host Screen</h2>
            </div>
            <div className={styles.linkCard} onClick={() => navigateTo('/omega')}>
                <FontAwesomeIcon icon={faGem} className={styles.icon} />
                <h2 className={styles.heading}>Pearl Omega</h2>
            </div>
        </div>
    );
};

export default HomePage;
