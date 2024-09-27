function ProcessBar({ title, color, percentage }) {
	return (
		<div className="flex flex-col gap-4">
			<p className="capitalize">{title}</p>
			<div className="w-full h-1 rounded-full bg-[#f2f3f7] relative">
				<div
					className="absolute rounded-full left-0 top-0 h-full"
					style={{
						width: `${percentage}%`,
						backgroundColor: color,
					}}
				></div>
				<p
					style={{
						left: `${percentage}%`,
						color: color,
					}}
					className="absolute top-[-25px]"
				>
					{percentage}%
				</p>
				<div
					className="absolute h-2 ml-[-3px] w-2 rounded-full top-[-2px]"
					style={{
						left: `${percentage}%`,
						backgroundColor: color,
					}}
				></div>
			</div>
		</div>
	);
}

export default ProcessBar;
