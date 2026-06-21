import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// TODO: Thay đổi hai giá trị dưới bằng Supabase URL và ANON KEY của bạn
const SUPABASE_URL = 'https://yybkpjskmdbumepqvzoq.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5YmtwanNrbWRidW1lcHF2em9xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE5ODY5MDYsImV4cCI6MjA5NzU2MjkwNn0.TIY3h68VfuWqLWvLuVOZOFRUapI613hrbbHoNR3FVsg';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export async function signUp(email, password, options = {}) {
	return await supabase.auth.signUp({ email, password }, options);
}

export async function signIn(email, password) {
	return await supabase.auth.signInWithPassword({ email, password });
}

export async function signOut() {
	return await supabase.auth.signOut();
}

// Helper to get current user
export function getUser() {
	return supabase.auth.getUser();
}
