import { NextResponse } from 'next/server'
import supabase from "../../../utils/database"

export async function GET() {

  try {
    const { data, error } = await supabase
    .from('exams')
    .select(`
      *,
      categories:category_id (
        name
      )
    `)

    // .from('exams')
    // .select('*')

    // .rpc('get_random_exam');
    // .from('exams')
    // .select()
    // .order('id', { ascending: false }) // 代わりに最新の問題を取得する例
    // .limit(1)
    // .single()
    
    if (error) throw error
    
    console.log("▶️data = " + data);
    console.log("▶️data.length = " + data.length);
    
    // クライアント側でランダムに1件選択
    const randomIndex = Math.floor(Math.random() * data.length)
    const randomExam = data[randomIndex]

    return NextResponse.json({ exam: randomExam })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}