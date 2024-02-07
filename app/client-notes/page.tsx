'use client'

import { useEffect, useState } from 'react'
import {createBrowserClient} from "@supabase/ssr";

export default function Page() {
    const [notes, setNotes] = useState<any[] | null>(null)
    const supabase =  createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    );

    useEffect(() => {
        const getData = async () => {
            const { data } = await supabase.from('notes').select()
            setNotes(data)
        }
        getData()
    }, [])

    return <div>{JSON.stringify(notes, null, 2)}</div>
}