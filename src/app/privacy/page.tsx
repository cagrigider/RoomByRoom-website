import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Card from '@/components/ui/Card'
import styles from './privacy.module.css'

export default function PrivacyPolicy() {
    return (
        <>
            <Navigation />
            <main className="container py-8">
                <Card className={styles.legalCard}>
                    <h1 className="mb-4">Privacy Policy</h1>
                    <p className={styles.updateDate}>Last Updated: November 29, 2025</p>

                    <section className={styles.section}>
                        <h2>1. Introduction</h2>
                        <p>
                            Welcome to RoomByRoom ("we," "our," or "us"). We are committed to protecting
                            your privacy and ensuring you have a positive experience with our mobile game.
                            This Privacy Policy explains how we collect, use, disclose, and safeguard your
                            information when you use our application.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>2. Information We Collect</h2>
                        <h3>2.1 Information You Provide</h3>
                        <p>
                            We may collect information that you voluntarily provide when using RoomByRoom, including:
                        </p>
                        <ul>
                            <li>Game progress and achievements</li>
                            <li>In-app purchase history</li>
                            <li>User preferences and settings</li>
                            <li>Support requests and communications</li>
                        </ul>

                        <h3>2.2 Automatically Collected Information</h3>
                        <p>
                            When you use our app, we automatically collect certain information, including:
                        </p>
                        <ul>
                            <li>Device information (model, operating system, unique device identifiers)</li>
                            <li>Game usage data and analytics</li>
                            <li>Crash reports and performance data</li>
                            <li>IP address and general location information</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2>3. How We Use Your Information</h2>
                        <p>We use the collected information for the following purposes:</p>
                        <ul>
                            <li>To provide and maintain our game services</li>
                            <li>To improve game performance and user experience</li>
                            <li>To process in-app purchases</li>
                            <li>To send important updates and notifications</li>
                            <li>To monitor and analyze usage patterns</li>
                            <li>To detect and prevent fraud or abuse</li>
                            <li>To comply with legal obligations</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2>4. Advertising</h2>
                        <p>
                            RoomByRoom displays advertisements through Google AdMob. AdMob may collect and
                            use certain information for advertising purposes, including:
                        </p>
                        <ul>
                            <li>Advertising ID</li>
                            <li>Device information</li>
                            <li>Usage data</li>
                            <li>Ad interaction data</li>
                        </ul>
                        <p>
                            For more information about how Google uses data, please visit:{' '}
                            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                                Google's Privacy Policy
                            </a>
                        </p>
                        <p>
                            You can opt out of personalized advertising by adjusting your device settings
                            (iOS: Settings → Privacy → Advertising → Limit Ad Tracking).
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>5. Data Sharing and Disclosure</h2>
                        <p>We may share your information with:</p>
                        <ul>
                            <li><strong>Service Providers:</strong> Third-party companies that help us operate our game (e.g., analytics, hosting)</li>
                            <li><strong>Advertising Partners:</strong> Google AdMob for displaying advertisements</li>
                            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                            <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition</li>
                        </ul>
                        <p>
                            We do not sell your personal information to third parties.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>6. Data Security</h2>
                        <p>
                            We implement appropriate technical and organizational measures to protect your
                            information against unauthorized access, alteration, disclosure, or destruction.
                            However, no method of transmission over the internet is 100% secure.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>7. Children's Privacy</h2>
                        <p>
                            RoomByRoom is not intended for children under the age of 13. We do not knowingly
                            collect personal information from children under 13. If we discover that we have
                            collected information from a child under 13, we will delete it immediately.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>8. Your Rights</h2>
                        <p>Depending on your location, you may have the following rights:</p>
                        <ul>
                            <li>Access to your personal information</li>
                            <li>Correction of inaccurate data</li>
                            <li>Deletion of your data</li>
                            <li>Restriction of processing</li>
                            <li>Data portability</li>
                            <li>Withdrawal of consent</li>
                        </ul>
                        <p>
                            To exercise these rights, please contact us using the information below.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>9. Data Retention</h2>
                        <p>
                            We retain your information for as long as necessary to provide our services and
                            fulfill the purposes outlined in this Privacy Policy, unless a longer retention
                            period is required by law.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>10. International Data Transfers</h2>
                        <p>
                            Your information may be transferred to and processed in countries other than your
                            own. We ensure appropriate safeguards are in place to protect your information in
                            accordance with this Privacy Policy.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>11. Changes to This Privacy Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time. We will notify you of any
                            changes by posting the new Privacy Policy on this page and updating the "Last
                            Updated" date. Your continued use of RoomByRoom after changes indicates your
                            acceptance of the updated policy.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>12. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy or our privacy practices,
                            please contact us at:
                        </p>
                        <p>
                            <strong>Email:</strong> privacy@roombyroom.com
                        </p>
                    </section>
                </Card>
            </main>
            <Footer />
        </>
    )
}
