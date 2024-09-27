function Header({ children, subtitle }) {
	return (
		<div className="flex flex-col">
			<span className=" font-[500] text-[10px] tracking-[5px] mb-[15px] text-[#999] font-sans">
				{subtitle}
			</span>
			<h1 className="tracking-[5px] font-serif text-[18px] mb-[20px]  leading-[1.8] font-[700]">
				{children}
			</h1>
		</div>
	);
}

export default Header;
