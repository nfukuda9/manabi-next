'use client';

import Link from 'next/link' 
import Image from 'next/image'

export default function Question() {
  return (
    <>
    <div className="page-header wrapper">
        <h1 className="align-center">
            <Link href="/">
                <Image 
                className="logo" 
                src="/logo_book_manasupe.png"
                alt="Manabi Space ホーム"
                width={200}  // 画像の実際の幅を指定
                height={50}  // 画像の実際の高さを指定
                priority    // ヘッダーロゴは重要なので優先的に読み込む
                />
            </Link>
        </h1>
    </div>

      <div className="nav-buttons wrapper">
        <Link href="/" className="nav-btn home-btn">ホーム</Link>
        <Link href="/" className="nav-btn exit-btn">終了</Link>
    </div>

    <div className="question-container wrapper">
        <div className="question-box">
            <div className="question-meta">
                <p>ワイン生産地 / 問題No.1</p>
            </div>
            <div className="question-content">
                <p>日本の都道府県で、最もワイン生産量の多いところはどこか？</p>
            </div>
            <div className="question-buttons">
                <Link href="answer" className="btn btn-understood">解答へ</Link>
            </div>
        </div>
    </div>

    <footer className="page-footer">
        <div className="copyright">
            <p>&copy; 2025 Manabi Space</p>
        </div>
    </footer>

    </>
  )
}