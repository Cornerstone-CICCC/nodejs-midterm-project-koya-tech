import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL || "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_PROJECT_API_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
