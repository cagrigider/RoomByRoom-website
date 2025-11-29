import styles from './Footer.module.css'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerContent}>
                    <div className={styles.footerSection}>
                        <h3 className={styles.footerTitle}>RoomByRoom</h3>
                        <p className={styles.footerText}>
                            Embark on an epic dungeon adventure. Navigate mysterious rooms,
                            battle fierce enemies, and collect legendary loot.
                        </p>
                    </div>

                    <div className={styles.footerSection}>
                        <h4 className={styles.footerSubtitle}>Quick Links</h4>
                        <ul className={styles.footerLinks}>
                            <li><a href="/">Home</a></li>
                            <li><a href="/privacy">Privacy Policy</a></li>
                            <li><a href="/terms">Terms of Service</a></li>
                            <li><a href="/app-ads.txt">app-ads.txt</a></li>
                        </ul>
                    </div>

                    <div className={styles.footerSection}>
                        <h4 className={styles.footerSubtitle}>Download</h4>
                        <a
                            href="#"
                            className={styles.appStoreBadge}
                            aria-label="Download on the App Store"
                        >
                            📱 App Store
                        </a>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p>&copy; {currentYear} RoomByRoom. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
