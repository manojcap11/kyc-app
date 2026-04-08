const SUPABASE_URL = "https://smbyphqfaypvpxmkphwd.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtYnlwaHFmYXlwdnB4bWtwaHdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ4NTcxOTEsImV4cCI6MjA5MDQzMzE5MX0.8tQf5Bj6VjFhjmPnjyNmg39Mg8w4NzacgpGMreUfAI4";

window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
