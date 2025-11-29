import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Card from '@/components/ui/Card'
import styles from '../privacy/privacy.module.css'

export default function TermsOfService() {
    return (
        <>
            <Navigation />
            <main className="container py-8">
                <Card className={styles.legalCard}>
                    <h1 className="mb-4">Terms of Service</h1>
                    <p className={styles.updateDate}>Last Updated: November 29, 2025</p>

                    <section className={styles.section}>
                        <h2>1. Agreement to Terms</h2>
                        <p>
                            By downloading, installing, or using RoomByRoom ("the Game"), you agree to be
                            bound by these Terms of Service ("Terms"). If you do not agree to these Terms,
                            do not use the Game.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>2. License to Use</h2>
                        <p>
                            Subject to your compliance with these Terms, we grant you a limited,
                            non-exclusive, non-transferable, revocable license to download, install,
                            and use the Game for your personal, non-commercial use.
                        </p>
                        <p>You may not:</p>
                        <ul>
                            <li>Modify, reverse engineer, or decompile the Game</li>
                            <li>Distribute, sublicense, or transfer the Game to others</li>
                            <li>Use the Game for commercial purposes</li>
                            <li>Remove or alter any copyright, trademark, or proprietary notices</li>
                            <li>Use cheats, exploits, or unauthorized third-party software</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2>3. User Accounts</h2>
                        <p>
                            You are responsible for maintaining the security of your account and for all
                            activities that occur under your account. Notify us immediately of any
                            unauthorized use of your account.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>4. In-App Purchases</h2>
                        <p>
                            The Game may offer in-app purchases ("IAPs") for virtual items, currency,
                            or premium features. All purchases are final and non-refundable, except as
                            required by law.
                        </p>
                        <ul>
                            <li>Prices are subject to change without notice</li>
                            <li>Virtual items have no real-world value</li>
                            <li>We reserve the right to modify or discontinue items</li>
                            <li>Refund requests should be directed to the App Store</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2>5. User Conduct</h2>
                        <p>You agree not to:</p>
                        <ul>
                            <li>Engage in harassment, bullying, or abusive behavior</li>
                            <li>Post offensive, inappropriate, or illegal content</li>
                            <li>Attempt to hack, exploit, or disrupt the Game</li>
                            <li>Impersonate others or misrepresent your identity</li>
                            <li>Violate any applicable laws or regulations</li>
                        </ul>
                        <p>
                            We reserve the right to suspend or terminate accounts that violate these Terms.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>6. Intellectual Property</h2>
                        <p>
                            All content in the Game, including but not limited to graphics, text, code,
                            music, and trademarks, is owned by us or our licensors and protected by
                            copyright, trademark, and other intellectual property laws.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>7. Third-Party Services</h2>
                        <p>
                            The Game may contain links to or integrate with third-party services
                            (e.g., Google AdMob, analytics providers). We are not responsible for
                            the content or practices of third-party services. Your use of such services
                            is subject to their respective terms and privacy policies.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>8. Advertising</h2>
                        <p>
                            The Game displays advertisements provided by Google AdMob. By using the Game,
                            you agree to the display of advertisements. You may opt out of personalized
                            advertising through your device settings.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>9. Disclaimer of Warranties</h2>
                        <p>
                            THE GAME IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND,
                            EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE GAME WILL BE UNINTERRUPTED,
                            ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>10. Limitation of Liability</h2>
                        <p>
                            TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT,
                            INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS
                            OR DATA ARISING OUT OF YOUR USE OF THE GAME.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>11. Indemnification</h2>
                        <p>
                            You agree to indemnify and hold us harmless from any claims, damages, losses,
                            or expenses (including legal fees) arising from your use of the Game or
                            violation of these Terms.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>12. Modifications to the Game</h2>
                        <p>
                            We reserve the right to modify, suspend, or discontinue the Game (or any part
                            thereof) at any time without notice. We shall not be liable to you or any
                            third party for any modification, suspension, or discontinuation of the Game.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>13. Termination</h2>
                        <p>
                            We may terminate or suspend your access to the Game immediately, without prior
                            notice, for any reason, including breach of these Terms. Upon termination,
                            your right to use the Game will cease immediately.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>14. Governing Law</h2>
                        <p>
                            These Terms shall be governed by and construed in accordance with the laws
                            of [Your Jurisdiction], without regard to its conflict of law provisions.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>15. Changes to Terms</h2>
                        <p>
                            We may update these Terms from time to time. We will notify you of any changes
                            by posting the new Terms in the Game and updating the "Last Updated" date.
                            Your continued use of the Game after changes indicates your acceptance of the
                            updated Terms.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>16. Contact Us</h2>
                        <p>
                            If you have any questions about these Terms of Service, please contact us at:
                        </p>
                        <p>
                            <strong>Email:</strong> support@roombyroom.com
                        </p>
                    </section>
                </Card>
            </main>
            <Footer />
        </>
    )
}
