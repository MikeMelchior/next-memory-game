"use client";
import Image from "next/image";
import { MouseEventHandler } from "react";

type Props = {
	url: string;
	cardCount: number;
	id: string;
	onClick: MouseEventHandler
};

const Card = ({ url, cardCount, id, onClick }: Props) => {



	return (
		<Image
			src={url}
			alt=""
			id={id}
			width={900}
			height={1200}
			className={`place-self-stretch h-[200px] w-[300px] rounded-xl`}
			onClick={onClick}
		/>
	);
};

export default Card;
