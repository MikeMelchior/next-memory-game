import React from "react";
import LogoText from "./LogoText";

type Props = {
    score: number
    highScore: number
    mode: string
};

const Header = ( { score, highScore, mode }: Props) => {
	return (
        <header className="relative p-2 md:p-6 flex flex-col gap-6 justify-center items-center w-full bg-emerald-200">
            <div>
                <LogoText />
            </div>
            <div className="md:absolute md:right-10 flex flex-col">
                <div className="flex justify-between gap-6">
                    <p>Score</p>
                    <p>{score}</p>
                </div>
                <div className="flex justify-between gap-6">
                    <p>High Score</p>
                    <p>{highScore}</p>
                </div>
                <div className="flex justify-between gap-6">
                    <p>Difficulty</p>
                    <p>{mode}</p>
                </div>
                
            </div>
        </header>
    )
};

export default Header;
