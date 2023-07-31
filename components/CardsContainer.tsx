import dataSet from "@/types/dataSet";
import React, { Dispatch, SetStateAction } from "react";
import Card from "./Card";
import SmallWindow from "./SmallWindow";

type Props = {
	level: number;
	setLevel: Dispatch<SetStateAction<number>>;
	dataArray: dataSet[];
	setDataArray: Dispatch<SetStateAction<dataSet[]>>;
	mode: string;
	setGameOver: Dispatch<SetStateAction<boolean>>;
	setScore: Dispatch<SetStateAction<number>>;
    loading: boolean
    setLoading: Dispatch<SetStateAction<boolean>>
};

export const getCats = async (num: number) => {
	let resultsArray: dataSet[] = [];

	while (resultsArray.length < num) {
		const res = await fetch(
			"https://api.thecatapi.com/v1/images/search?order=RAND&limit=10&api_key=live_r19FeYEGCgIf49MdMWgxkrk1wqYbroOw5MffYKqc0UwzB5buUASAKpcRWLuqgLbu",
			{ cache: "no-store" }
		);

		const data = await res.json();

		data.forEach((result: dataSet) => {
			if (
				result.url.includes("cdn2.thecatapi.com") &&
				!result.url.includes(".gif") &&
				resultsArray.length < num
			) {
				resultsArray.push(result);
			}
		});
	}
	return resultsArray;
};

const CardsContainer = async ({
	level,
	dataArray,
	setDataArray,
	setLevel,
	mode,
	setGameOver,
	setScore,
    loading,
    setLoading
}: Props) => {

    
	const getCardsCount = () => {
		return 2 * level;
	};

	if (dataArray.length === 0) {
		setDataArray(await getCats(getCardsCount()));
	}

	const handleClick = async (data: dataSet): Promise<void> => {
		if (data.clicked === true) {
			setGameOver(true);
            return
		}

		data.clicked = true;

        setScore((prevState) => {
            return prevState + 1
        })

		const allClicked = () => {
			for (let data of dataArray) {
				if (!data.clicked) return false;
			}
			return true;
		};

		if (allClicked()) {
            setLoading(true);
			switch (mode) {
				case "easy":
					setLevel(level + 1);
					setDataArray(await getCats((level + 1) * 2));
					break;
				case "medium":
					setLevel(level + 2);
					setDataArray(await getCats((level + 2) * 2));
					break;
				case "hard":
					setLevel(level + 3);
					setDataArray(await getCats((level + 3) * 2));
					break;
				default:
					break;
			}
		}
	};

	const scramblePictures = (): void => {
		const getIndicesArray = () => {
			let count = 0;
			let result = [];
			for (let x in dataArray) {
				result.push(count);
				count++;
			}
			return result;
		};

		let temp = dataArray;
		let indices = getIndicesArray();
		let result = [];

		while (indices.length > 0) {
			let randomIndex = indices.splice(
				Math.floor(Math.random() * indices.length),
				1
			)[0];
			result.push(temp[randomIndex]);
		}

		setDataArray(result);
	};

	return (
		<section
			className={`m-auto`}
		>
            {
                loading
                ? 
                    <SmallWindow>
                        <h2 className="text-4xl">Level Complete! Shaking the treats bag...</h2>
                    </SmallWindow>
                    
                    
                : null
            }

            <div className={`${loading ? 'invisible ' : ''}flex flex-wrap items-center justify-center gap-6 p-6 md:p-12 md:gap-12`}>
                {dataArray.length > 0 &&
                    dataArray.map((data) => {
                        if (data.clicked === undefined) data.clicked = false;
                        return (
                            <Card
                                key={data.id}
                                url={data.url}
                                id={data.id}
                                onClick={() => {
                                    handleClick(data);
                                    scramblePictures();
                                }}
                                onLoad={() => {
                                    data.loaded = true
                                    dataArray.forEach(img => {
                                        if (img.loaded === false || img.loaded === undefined) return 
                                        setLoading(false)
                                    })
                                }}
                            />
                        );
                    })
                }
            </div>

		</section>
	);
};

export default CardsContainer;
