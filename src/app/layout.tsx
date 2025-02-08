import type { Metadata } from 'next'
import { Jura } from 'next/font/google'
import './globals.css'

const sans = Jura({
    variable: '--font-sans',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${sans.variable} antialiased`}>
                <main>{children}</main>
            </body>
        </html>
    )
}
