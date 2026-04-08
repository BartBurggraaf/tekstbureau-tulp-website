import { createClient } from '@supabase/supabase-js'

const url  = process.env.NEXT_PUBLIC_SUPABASE_URL!
const key  = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(url, key)

export async function getPage(slug: string): Promise<Record<string, string> | null> {
  const { data } = await supabase
    .from('pages')
    .select('content')
    .eq('slug', slug)
    .eq('status', 'published')
    .single()

  return (data?.content as Record<string, string>) ?? null
}
