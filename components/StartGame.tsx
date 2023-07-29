"ues client";

import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { Edu_SA_Beginner } from "next/font/google";
import LogoText from "./LogoText";
import dataSet from "@/types/dataSet";
import SmallWindow from "./SmallWindow";

const eduFont = Edu_SA_Beginner({ subsets: ["latin"] });

type Props = {
	setLevel: Dispatch<SetStateAction<number>>;
	setMode: Dispatch<SetStateAction<string>>;
};

const StartGame = ({ setLevel, setMode }: Props) => {
	const [difficulty, setDifficulty] = useState<string>("easy");

	const easy = useRef<HTMLButtonElement>(null);
	const medium = useRef<HTMLButtonElement>(null);
	const hard = useRef<HTMLButtonElement>(null);

	const buttonClasses =
		"px-5 py-2 font-bold border-2 border-emerald-500 rounded-2xl hover:bg-emerald-500 hover:text-teal-200";

	const difficultyButtons = [easy, medium, hard];

	function deselectButtons(): void {
		difficultyButtons.forEach((button) => {
			button.current!.classList.remove("text-teal-200");
			button.current!.classList.remove("bg-emerald-500");
		});
	}

	return (
		<main className='text-emerald-600 m-auto'>
			<SmallWindow>
				<LogoText />
				<div className="flex gap-6">
					<button
						ref={easy}
						className={`${buttonClasses} text-teal-200 bg-emerald-500`}
						onClick={(e) => {
							deselectButtons();
							e.currentTarget.classList.add("text-teal-200");
							e.currentTarget.classList.add("bg-emerald-500");
							setDifficulty("easy");
						}}
					>
						EASY
					</button>
					<button
						ref={medium}
						className={`${buttonClasses}`}
						onClick={(e) => {
							deselectButtons();
							e.currentTarget.classList.add("text-teal-200");
							e.currentTarget.classList.add("bg-emerald-500");
							setDifficulty("medium");
						}}
					>
						MEDIUM
					</button>
					<button
						ref={hard}
						className={`${buttonClasses}`}
						onClick={(e) => {
							deselectButtons();
							e.currentTarget.classList.add("text-teal-200");
							e.currentTarget.classList.add("bg-emerald-500");
							setDifficulty("hard");
						}}
					>
						HARD
					</button>
				</div>
				<button
					className="px-5 py-2 font-bold border-2 border-emerald-500 rounded-2xl hover:bg-emerald-500 hover:text-teal-200"
					onClick={() => {
						switch (difficulty) {
							case "medium":
                                setMode('medium')
								setLevel(3);
								break;
							case "hard":
                                setMode('hard')
								setLevel(4);
								break;
							default:
                                setMode('easy')
								setLevel(2);
								break;
						}
					}}
				>
					START GAME
				</button>
			</SmallWindow>
		</main>
	);
};

export default StartGame;
