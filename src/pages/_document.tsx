import Header from '@/components/Header'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <body className='h-screen w-screen bg-secondary-color' >
        <Main />
        <NextScript />
      </body>
    </Html> 
  )
}
