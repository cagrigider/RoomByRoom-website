import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import styles from './page.module.css'

export default function Home() {
    return (
        <>
            <Navigation />
            <main>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className="container">
                        <div className={styles.heroContent}>
                            <h1 className={styles.heroTitle}>
                                ⚔️ RoomByRoom
                            </h1>
                            <p className={styles.heroSubtitle}>
                                Venture into the depths of mysterious dungeons
                            </p>
                            <p className={styles.heroDescription}>
                                Navigate treacherous rooms, battle fierce enemies, collect legendary loot,
                                and build your ultimate hero in this thrilling card-based dungeon crawler.
                            </p>
                            <div className={styles.heroCta}>
                                <Button variant="primary" href="#">
                                    📱 Download on App Store
                                </Button>
                                <Button variant="secondary" href="#features">
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className={styles.features}>
                    <div className="container">
                        <h2 className="text-center mb-4">Epic Features</h2>

                        <div className={styles.featuresGrid}>
                            <Card>
                                <div className={styles.featureIcon}>🗡️</div>
                                <h3>Strategic Combat</h3>
                                <p>
                                    Choose your moves wisely. Every card decision matters as you face
                                    deadly monsters and powerful bosses.
                                </p>
                            </Card>

                            <Card>
                                <div className={styles.featureIcon}>🛡️</div>
                                <h3>Unique Characters</h3>
                                <p>
                                    Select from multiple hero classes, each with special abilities.
                                    The Knight, Rogue, Mage await your command.
                                </p>
                            </Card>

                            <Card>
                                <div className={styles.featureIcon}>💎</div>
                                <h3>Legendary Loot</h3>
                                <p>
                                    Discover powerful weapons, magical artifacts, and rare treasures
                                    hidden throughout the dungeon.
                                </p>
                            </Card>

                            <Card>
                                <div className={styles.featureIcon}>🎯</div>
                                <h3>Endless Adventure</h3>
                                <p>
                                    Procedurally generated dungeons ensure every run is unique.
                                    How deep can you venture?
                                </p>
                            </Card>

                            <Card>
                                <div className={styles.featureIcon}>🏆</div>
                                <h3>Achievements</h3>
                                <p>
                                    Complete challenging quests, unlock achievements, and climb
                                    the leaderboard to prove your prowess.
                                </p>
                            </Card>

                            <Card>
                                <div className={styles.featureIcon}>⚡</div>
                                <h3>Fast-Paced Action</h3>
                                <p>
                                    Quick sessions perfect for on-the-go gaming. Dive into danger
                                    anytime, anywhere.
                                </p>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Download CTA Section */}
                <section className={styles.ctaSection}>
                    <div className="container">
                        <Card className={styles.ctaCard}>
                            <h2>Ready to Begin Your Quest?</h2>
                            <p className="mt-2 mb-3">
                                Download RoomByRoom now and embark on the adventure of a lifetime!
                            </p>
                            <Button variant="primary" href="#">
                                📱 Get Started - Free on App Store
                            </Button>
                        </Card>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
