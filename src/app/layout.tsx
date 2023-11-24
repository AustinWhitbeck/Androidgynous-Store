import TopNavigation from '@/components/TopNavigation'
import ThemeRegistry from '@/providers/ThemeRegistery'
import { Stack } from '@mui/material'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home',
  description: 'Androidgynous Home Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* Note add prettier file */}
      <ThemeRegistry>      
        <body className={inter.className}>
          <Stack sx={{  height: '100vh'}}>
            <TopNavigation />
            <Stack sx={{ height: '100%', overflowY: 'scroll'}}>
              {children}
            </Stack>
          </Stack>
          </body>
      </ThemeRegistry>
    </html>
  )
}
