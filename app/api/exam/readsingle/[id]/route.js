import { NextResponse } from "next/server"
import supabase from "../../../../utils/database"

export async function GET(request, context){
    const params = await context.params

    try{  
        const { data, error } = await supabase.from("exams")
                                               .select()
                                               .eq("id", params.id)
                                               .single()
        if(error) throw new Error(error.message)                 
        return NextResponse.json({message: "EXAM読み取り成功（シングル）", singleExam: data})
    }catch(err){
        return NextResponse.json({message: `EXAM読み取り失敗（シングル：${err}`})
    }
}