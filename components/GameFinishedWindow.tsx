'use client'
import React, { Dispatch, SetStateAction } from 'react'
import SmallWindow from './SmallWindow'
import dataSet from '@/types/dataSet'

type Props = {
    score: number
    setScore: Dispatch<SetStateAction<number>>
    highScore: number
    setDataArray: Dispatch<SetStateAction<dataSet[]>>
    setLevel: Dispatch<SetStateAction<number>>
    setGameOver: Dispatch<SetStateAction<boolean>>

}

const GameFinishedWindow = ({ score, setScore, highScore, setDataArray, setLevel, setGameOver }: Props) => {
  return (
    <main className='text-emerald-600 m-auto text-2xl'>
        <SmallWindow>
            <h1 className={`mx-auto text-4xl md:text-6xl font-bold`}>
                GAME OVER
            </h1>  
            <div className='flex gap-6'>
                <div className='flex gap-2'>
                    <p>Score: </p>
                    <p>{score}</p>
                </div>
                <div className='flex gap-2'>
                    <p>High Score: </p>
                    <p>{highScore}</p>
                </div>
            </div> 
            
            <button
                className='px-5 py-2 font-bold border-2 border-emerald-500 rounded-2xl hover:bg-emerald-500 hover:text-teal-200'
                onClick={() => {
                    setDataArray([]);
                    setLevel(0)
                    setScore(0)
                    setGameOver(false)
                }}
            >
                Play Again
            </button>


        </SmallWindow>
    </main>
    
  )
}

export default GameFinishedWindow