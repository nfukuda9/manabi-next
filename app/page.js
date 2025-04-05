import Header from './components/Header'
import Footer from './components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="cover cover-home">
        <Header />
        <h2 className="page-title font-english">Manabi Space<br />まなすぺ</h2>
      </div>

      <section className="about">
        <h3 className="heading-large font-english">SE/WEE問題集</h3>
        <p>
          ソムリエエクセレンス、ワインエキスパートエクセレンス向けの問題を提供しています。<br />
          単語帳形式で、問題と解答が流れる形式としています。是非チャレンジしてみてください。
        </p>
        <div className="align-center">
          <Link href="/question" className="btn">問題をやってみる</Link>
        </div>
      </section>

      <Footer />
    </>
  )
}