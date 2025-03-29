export default function Footer() {
    return (
      <footer className="page-footer">
        <h3 className="heading-large font-english">About me</h3>
        <table className="info">
          <tbody>
            <tr>
              <th>運営</th>
              <td>なおきち</td>
            </tr>
            <tr>
              <th>資格</th>
              <td>2014年 JSA ワインエキスパート<br />2017年 JSA SAKE Diploma<br />2019年 JSA ワインエキスパートエクセレンス<br />2024年 CPA チーズプロフェッショナル</td>
            </tr>
            <tr>
              <th>好きなワイン</th>
              <td>Marcel Lapierre Morgon、Les Cailloux du Paradis</td>
            </tr>
            <tr>
              <th>座右の銘</th>
              <td>あせらないめげないひとのせいにしない</td>
            </tr>
          </tbody>
        </table>
        <div className="copyright">
          <small>&copy; 2025 Manabi Space</small>
        </div>
      </footer>
    )
  }