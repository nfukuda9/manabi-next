'use client';

import Link from 'next/link' 
import Image from 'next/image'
import { useEffect, useState } from 'react';

const Question = () => {
    const [singleExam, setSingleExam] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getSingleExam = async() => {
            try {
                const response = await fetch(`http://localhost:3000/api/exam/random`);
                console.log("■response = " + response);
                const jsonData = await response.json();
                setSingleExam(jsonData.exam);
            } catch (error) {
                console.error("Failed to fetch exam:", error);
            } finally {
                setLoading(false);
            }
        };

        getSingleExam();
    }, []);

    if (loading) {
        return <div className="loading">読み込み中...</div>;
    }

    if (!singleExam) {
        return <div className="error">問題の読み込みに失敗しました。</div>;
    }

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
                <p>{singleExam.categories.name} / 問題No.{singleExam.id || '1'}</p>
            </div>
            <div className="question-content">
                <p>{singleExam.question}</p>
            </div>
            <div className="question-buttons">
                {/* <Link href={`/answer?id=${singleExam.id}&ans=${encodeURIComponent(singleExam.answer)}`} className="btn btn-understood">解答へ</Link> */}
                <Link href={`/answer?id=${singleExam.id}&ans=${encodeURIComponent(singleExam.answer)}&category=${encodeURIComponent(singleExam.categories.name)}&explanation=${encodeURIComponent(singleExam.explanation)}&difficulty=${singleExam.difficulty}`} className="btn btn-understood">解答へ</Link>
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

export default Question