function AbouUsCards({ color, title, icon }) {
	return (
		<div className="md:w-[22.5%] w-full h-full shadow-xl">
			<div
				className={`p-[1.5em] flex flex-col gap-5 h-full border-b-2`}
				style={{ borderColor: color }}
			>
				{icon}
				<h3 className="text-[16px]">{title}</h3>
			</div>
		</div>
	);
}

export default AbouUsCards;
