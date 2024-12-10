'use client'

import { useSession } from 'next-auth/react'

export default function Page() {
    const { data: session, status } = useSession()

    return (
        <div className={'flex flex-col w-screen h-screen items-center content-center'}>
            
        </div>
    )
}