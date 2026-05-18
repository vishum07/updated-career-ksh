import {
    createClient
} from "@supabase/supabase-js";

const supabaseUrl = "https://mzfvfmzbxlzhxztlqavx.supabase.co";
const supabaseAnonKey = "sb_publishable_-hxJwrAdNRamSPnq_irW7w_4-Cj8MIF";
export const supabase = createClient(
    supabaseUrl,
    supabaseAnonKey
);