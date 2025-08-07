import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function GET() {
  const { data, error } = await supabase
    .from('organizations')
    .insert({
      type: 'nonprofit',
      name: 'Orlando Science Center',
      mission: 'Inspire science learning for life'
    })
    .select();

  return NextResponse.json({ data, error });
}
