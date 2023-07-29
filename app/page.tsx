'use client'
import CardsContainer from "@/components/CardsContainer";
import GameFinishedWindow from "@/components/GameFinishedWindow";
import Header from "@/components/Header";
import StartGame from "@/components/StartGame";
import dataSet from "@/types/dataSet";
import React, { Suspense, useEffect, useState } from "react";



export default function Home() {

	const [level, setLevel] = useState<number>(0);
    const [mode, setMode] = useState<string>('')
    const [gameOver, setGameOver] = useState(false)
	const [dataArray, setDataArray] = useState<dataSet[]>([]);
    const [score, setScore] = useState<number>(0)
    const [highScore, setHighScore] = useState<number>(0)

    useEffect(() => {
        if (score > highScore) setHighScore(score)
    }, [score, highScore])

	return (
		<main className="flex flex-col h-screen w-screen">
            
			<div className="absolute w-screen h-screen bg-main-background opacity-30 -z-10"></div>

			{
                level === 0 &&
				<StartGame 
					setLevel={setLevel}
                    setMode={setMode}
				/>
			}
			
			{
                (level > 0) && !gameOver && mode &&
                <>
                    <Header 
                        score={score}
                        highScore={highScore}
                        mode={mode}
                    />

                    <Suspense fallback='...Cleaning Litter Boxes'>
                        {/* @ts-expect-error Server Component */}
                        <CardsContainer
                            level={level}
                            setLevel={setLevel}
                            dataArray={dataArray}
                            setDataArray={setDataArray}
                            mode={mode}
                            setGameOver={setGameOver}
                            setScore={setScore}
                        />
                    </Suspense>

                </>
			}

            {
                gameOver &&
                <GameFinishedWindow 
                    score={score}
                    setScore={setScore}
                    highScore={highScore}
                    setDataArray={setDataArray}
                    setLevel={setLevel}
                    setGameOver={setGameOver}
                />
            }

		</main>
	);
}
