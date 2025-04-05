// app/utils/database.js
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
    "https://lijopbsclhasxakuasau.supabase.co", 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxpam9wYnNjbGhhc3hha3Vhc2F1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIxMjYzMzIsImV4cCI6MjA1NzcwMjMzMn0.tx5KPA4Io7dOJwPB5drjo4q7RavkHBMzk0FYJZb-AvI"
)

export default supabase
