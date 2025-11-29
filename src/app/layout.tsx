import './globals.css'
import type { Metadata } from 'next'
import { Inter, Cinzel } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const cinzel = Cinzel({ subsets: ['latin'], variable: '--font-cinzel' })

export const metadata: Metadata = {
    title: 'RoomByRoom - Dungeon Card Adventure',
    description: 'Embark on an epic dungeon adventure! Navigate mysterious rooms, battle fierce enemies, and collect legendary loot in this thrilling card-based game.',
    keywords: ['dungeon crawler', 'card game', 'rpg', 'mobile game', 'adventure'],
    authors: [{ name: 'RoomByRoom Team' }],
    openGraph: {
        title: 'RoomByRoom - Dungeon Card Adventure',
        description: 'Embark on an epic dungeon adventure! Navigate mysterious rooms, battle fierce enemies, and collect legendary loot.',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'RoomByRoom - Dungeon Card Adventure',
        description: 'Embark on an epic dungeon adventure!',
    },
    viewport: 'width=device-width, initial-scale=1',
    themeColor: '#1a1612',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${cinzel.variable}`}>
                {children}
            </body>
        </html>
    )
}
