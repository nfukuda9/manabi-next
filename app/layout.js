import { Kaisei_Decol } from 'next/font/google'
import './globals.css'  

const kaiseiDecol = Kaisei_Decol({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})

export const metadata = {
  title: 'Manabi Space',
  description: 'まなびを通じてくらしに愉しいを広げよう！',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" />
        <link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css" />
      </head>
      <body className={kaiseiDecol.className}>{children}</body>
    </html>
  )
}