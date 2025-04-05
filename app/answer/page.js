'use client';

import Link from 'next/link' 
import Image from 'next/image'
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function AnswerContent() {
  // URLパラメータからansとidを取得
  const searchParams = useSearchParams();
  const answer = searchParams.get('ans');
  const id = searchParams.get('id');
  const category = searchParams.get('category');
  const explanation = searchParams.get('explanation');
  const difficulty = searchParams.get('difficulty');  

  // 状態管理用のstate
  const [isCorrect, setIsCorrect] = useState(false);
  const [isIncorrect, setIsIncorrect] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  // 正解ボタンのクリックハンドラ
  const handleCorrectClick = () => {
    setIsCorrect(!isCorrect);
    if (isIncorrect) {
      setIsIncorrect(false);
    }
  };

  // 不正解ボタンのクリックハンドラ
  const handleIncorrectClick = () => {
    setIsIncorrect(!isIncorrect);
    if (isCorrect) {
      setIsCorrect(false);
    }
  };

  // ブックマークボタンのクリックハンドラ
  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
  };

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

    <div className="answer-container wrapper">
        <div className="answer-box">
            <div className="answer-meta">
                <p>{category} / 問題No.{id || '1'}の解答</p>
                <p className="difficulty">難易度: {difficulty || '指定なし'}</p>
            </div>
            <div className="answer-content">
                <h3>解答</h3>
                <p>{answer || '解答データがありません'}</p>
                
                <h3 className="explanation-title">解説</h3>
                <p className="explanation-text">{explanation || '解説はありません'}</p>
            </div>
            <div className="answer-buttons">
                <button 
                    className={`btn btn-correct ${isCorrect ? 'selected' : ''}`}
                    onClick={handleCorrectClick}
                >
                    正解
                </button>

                <button 
                    className={`btn btn-incorrect ${isIncorrect ? 'selected' : ''}`}
                    onClick={handleIncorrectClick}
                >
                    不正解
                </button>

                <button 
                    className={`btn btn-bookmark ${isBookmarked ? 'selected' : ''}`}
                    onClick={handleBookmarkClick}
                >
                    Bookmark
                </button>
            </div>

            <div className="answer-navigation">
                <Link href={`/question?id=${id || ''}`} className="btn btn-navigation">問題に戻る</Link>
                <Link href="/question" className="btn btn-navigation">次の問題へ</Link>
            </div>
        </div>
    </div>

    {/* <div className="answer-container wrapper">
        <div className="answer-box">
            <div className="answer-meta">
                <p>{category} / 問題No.{id || '1'}の解答</p>
            </div>
            <div className="answer-content">
                <p>{answer || '解答データがありません'}</p>
            </div>
            <div className="answer-buttons">
                <button 
                    className={`btn btn-correct ${isCorrect ? 'selected' : ''}`}
                    onClick={handleCorrectClick}
                >
                    正解
                </button>

                <button 
                    className={`btn btn-incorrect ${isIncorrect ? 'selected' : ''}`}
                    onClick={handleIncorrectClick}
                >
                    不正解
                </button>

                <button 
                    className={`btn btn-bookmark ${isBookmarked ? 'selected' : ''}`}
                    onClick={handleBookmarkClick}
                >
                    Bookmark
                </button>
            </div>

            <div className="answer-navigation">
                <Link href={`/question?id=${id || ''}`} className="btn btn-navigation">問題に戻る</Link>
                <Link href="/question" className="btn btn-navigation">次の問題へ</Link>
            </div>
        </div>
    </div> */}

    <footer className="page-footer">
        <div className="copyright">
            <p>&copy; 2025 Manabi Space</p>
        </div>
    </footer>

    </>
  )
}

export default function Answer() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AnswerContent />
    </Suspense>
  );
}