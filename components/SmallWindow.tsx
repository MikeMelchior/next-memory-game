import React from 'react'
import { Edu_SA_Beginner } from 'next/font/google'

const eduFont = Edu_SA_Beginner( { subsets: ['latin'] })

type Props = {
    children: React.ReactNode
    classes?: string
}

const SmallWindow = ( { children, classes }: Props) => {
  return (
    <div 
        className={`${eduFont.className} max-w-[600px] max-h-[400px] w-screen h-screen bg-teal-200 rounded-xl border-2 border-slate-900 flex flex-col items-center justify-center gap-12 ${classes}`}>
            {children}
    </div>
  )
}

export default SmallWindow