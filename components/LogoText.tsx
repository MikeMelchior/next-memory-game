import Image from 'next/image'
import paw from '../public/paw.png'
import { Edu_SA_Beginner } from 'next/font/google'

const eduFont = Edu_SA_Beginner({ subsets: ['latin']})

const LogoText = () => {
  return (
    <h1 className={`${eduFont.className} flex items-center mx-auto text-4xl md:text-6xl font-bold`}>
        MEM<Image src={paw}alt='' className='w-[25px] h-[25px] md:w-[45px] md:h-[45px]'/>RY GAME
    </h1>
  )
}

export default LogoText