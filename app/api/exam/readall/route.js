// app/api/exams/route.js
import { NextResponse } from 'next/server'
import supabase from "../../../utils/database"

export async function GET() {
//   const supabaseUrl = process.env.SUPABASE_URL
//   const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
//   const supabase = createClient(supabaseUrl, supabaseServiceKey)

  try {
    const { data, error } = await supabase
      .from('exams')
      .select(`
        id,
        question,
        difficulty,
        categories(name)
      `)
      .order('difficulty')
    
    if (error) throw error
    
    const formattedData = data.map(item => ({
      id: item.id,
      category_name: item.categories.name,
      question: item.question,
      difficulty: item.difficulty
    }))
    
    return NextResponse.json(formattedData)
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}