"use client";
import Image from "next/image";
import { MouseEventHandler, ReactEventHandler } from "react";

type Props = {
	url: string;
	id: string;
	onClick: MouseEventHandler
    onLoad: ReactEventHandler
};

const Card = ({ url, id, onClick, onLoad }: Props) => {



	return (
		<Image
			src={url}
			alt=""
			id={id}
			width={900}
			height={1200}
			className={`place-self-stretch h-[145px] w-[200px] rounded-xl`}
			onClick={onClick}
            onLoad={onLoad}
		/>
	);
};

export default Card;
