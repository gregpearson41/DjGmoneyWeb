import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://arpiduduobpqqdxesjtp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFycGlkdWR1b2JwcXFkeGVzanRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc4MjE0MjQsImV4cCI6MjA4MzM5NzQyNH0.g-qmG2wL3mN14Gbu9QU6XdUIODHWhjFhOW8Kzu35Sxk';

const customSupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export default customSupabaseClient;

export { 
    customSupabaseClient,
    customSupabaseClient as supabase,
};
