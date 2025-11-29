import Link from 'next/link'
import styles from './Navigation.module.css'

export default function Navigation() {
    return (
        <nav className={styles.nav}>
            <div className="container">
                <div className={styles.navContent}>
                    <Link href="/" className={styles.logo}>
                        <span className={styles.logoIcon}>⚔️</span>
                        <span className={styles.logoText}>RoomByRoom</span>
                    </Link>

                    <div className={styles.navLinks}>
                        <Link href="/" className={styles.navLink}>Home</Link>
                        <Link href="/privacy" className={styles.navLink}>Privacy</Link>
                        <Link href="/terms" className={styles.navLink}>Terms</Link>
                        <Link href="/admin" className={styles.navLink}>Admin</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
