'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import styles from './admin.module.css'

interface AdMobConfig {
    appId: string
    bannerAdUnitId: string
    interstitialAdUnitId: string
    rewardedAdUnitId: string
}

export default function AdminDashboard() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const [config, setConfig] = useState<AdMobConfig>({
        appId: 'ca-app-pub-9244295681050567~1234567890',
        bannerAdUnitId: 'ca-app-pub-9244295681050567/1111111111',
        interstitialAdUnitId: 'ca-app-pub-9244295681050567/2222222222',
        rewardedAdUnitId: 'ca-app-pub-9244295681050567/3333333333',
    })

    const [activeTab, setActiveTab] = useState<'admob' | 'settings'>('admob')

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        // Simple password check (in production, use proper authentication)
        if (password === 'dungeon2025') {
            setIsAuthenticated(true)
            setError('')
        } else {
            setError('Invalid password')
        }
    }

    const handleConfigChange = (field: keyof AdMobConfig, value: string) => {
        setConfig(prev => ({
            ...prev,
            [field]: value
        }))
    }

    const handleSaveConfig = () => {
        // Save to localStorage (in production, save to Cloudflare KV or database)
        localStorage.setItem('admobConfig', JSON.stringify(config))
        alert('Configuration saved successfully!')
    }

    const handleExportConfig = () => {
        const dataStr = JSON.stringify(config, null, 2)
        const dataBlob = new Blob([dataStr], { type: 'application/json' })
        const url = URL.createObjectURL(dataBlob)
        const link = document.createElement('a')
        link.href = url
        link.download = 'admob-config.json'
        link.click()
    }

    if (!isAuthenticated) {
        return (
            <>
                <Navigation />
                <main className="container py-8">
                    <Card className={styles.loginCard}>
                        <h1 className="text-center mb-4">🔐 Admin Login</h1>
                        <form onSubmit={handleLogin} className={styles.loginForm}>
                            <div className={styles.formGroup}>
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter admin password"
                                    className={styles.input}
                                />
                            </div>
                            {error && <p className={styles.error}>{error}</p>}
                            <Button variant="primary" onClick={() => handleLogin({ preventDefault: () => { } } as React.FormEvent)}>
                                Login
                            </Button>
                        </form>
                    </Card>
                </main>
                <Footer />
            </>
        )
    }

    return (
        <>
            <Navigation />
            <main className="container py-8">
                <div className={styles.adminHeader}>
                    <h1>⚔️ Admin Dashboard</h1>
                    <Button variant="secondary" onClick={() => setIsAuthenticated(false)}>
                        Logout
                    </Button>
                </div>

                <div className={styles.tabs}>
                    <button
                        className={`${styles.tab} ${activeTab === 'admob' ? styles.tabActive : ''}`}
                        onClick={() => setActiveTab('admob')}
                    >
                        AdMob Configuration
                    </button>
                    <button
                        className={`${styles.tab} ${activeTab === 'settings' ? styles.tabActive : ''}`}
                        onClick={() => setActiveTab('settings')}
                    >
                        App Settings
                    </button>
                </div>

                {activeTab === 'admob' && (
                    <Card className={styles.configCard}>
                        <h2 className="mb-4">AdMob Configuration</h2>
                        <p className={styles.description}>
                            Manage your Google AdMob ad unit IDs for the RoomByRoom app.
                        </p>

                        <div className={styles.formGroup}>
                            <label htmlFor="appId">App ID</label>
                            <input
                                type="text"
                                id="appId"
                                value={config.appId}
                                onChange={(e) => handleConfigChange('appId', e.target.value)}
                                className={styles.input}
                            />
                            <small>Your AdMob App ID (e.g., ca-app-pub-XXXXXXXXXXXXXXXX~XXXXXXXXXX)</small>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="bannerAdUnitId">Banner Ad Unit ID</label>
                            <input
                                type="text"
                                id="bannerAdUnitId"
                                value={config.bannerAdUnitId}
                                onChange={(e) => handleConfigChange('bannerAdUnitId', e.target.value)}
                                className={styles.input}
                            />
                            <small>Ad unit ID for banner ads</small>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="interstitialAdUnitId">Interstitial Ad Unit ID</label>
                            <input
                                type="text"
                                id="interstitialAdUnitId"
                                value={config.interstitialAdUnitId}
                                onChange={(e) => handleConfigChange('interstitialAdUnitId', e.target.value)}
                                className={styles.input}
                            />
                            <small>Ad unit ID for interstitial (full-screen) ads</small>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="rewardedAdUnitId">Rewarded Ad Unit ID</label>
                            <input
                                type="text"
                                id="rewardedAdUnitId"
                                value={config.rewardedAdUnitId}
                                onChange={(e) => handleConfigChange('rewardedAdUnitId', e.target.value)}
                                className={styles.input}
                            />
                            <small>Ad unit ID for rewarded video ads</small>
                        </div>

                        <div className={styles.actions}>
                            <Button variant="primary" onClick={handleSaveConfig}>
                                💾 Save Configuration
                            </Button>
                            <Button variant="secondary" onClick={handleExportConfig}>
                                📥 Export JSON
                            </Button>
                        </div>
                    </Card>
                )}

                {activeTab === 'settings' && (
                    <Card className={styles.configCard}>
                        <h2 className="mb-4">App Settings</h2>
                        <p className={styles.description}>
                            Additional app configuration options will be available here.
                        </p>
                        <div className={styles.placeholder}>
                            <p>🎮 Coming soon: Game balance settings, feature flags, and more!</p>
                        </div>
                    </Card>
                )}
            </main>
            <Footer />
        </>
    )
}
