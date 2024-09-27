import { IoMdDownload } from "react-icons/io";
import { useEffect, useState } from "react";
import { MdOutlineWorkOutline } from "react-icons/md";

function Home() {
	const [bgId, setBgId] = useState(1);
	const [content, setContent] = useState({
		title: `Hi!`,
		name: "Im Jackson",
		button: "Download CV",
		icon: <IoMdDownload className="text-lg" />,
	});

	useEffect(() => {
		const interval = setInterval(() => {
			setBgId((prevId) => (prevId === 1 ? 2 : 1));
			setContent((prevContent) => {
				if (bgId === 1) {
					return {
						title: `Hi!`,
						name: "Im Jackson",
						button: "Download CV",
						icon: <IoMdDownload className="text-lg" />,
					};
				} else {
					return {
						title: `I am`,
						name: " a designer",
						button: "View portfolio",
						icon: <MdOutlineWorkOutline className="text-lg" />,
					};
				}
			});
		}, 2000);
		return () => clearInterval(interval);
	}, [bgId]);

	return (
		<div
			className={`relative h-screen md:w-[85%] w-full bg-cover bg-no-repeat bg-center duration-300 ease-in-out md:text-left text-center`}
			style={{ backgroundImage: `url(/img_bg_${bgId}.jpg)` }}
		>
			<div className="flex justify-center items-center w-full h-full text-black">
				<div className="content flex flex-col justify-center md:items-start items-center h-full w-3/4 max-w-4xl ">
					<h2 className="md:text-[60px]  text-[50px] leading-[1.3] font-serif font-bold mb-8">
						{content.title}
						<br /> {content.name}
					</h2>
					<p className="text-lg mb-6 font-light">
						100% HTML5 Bootstrap Templates Made by
						<a
							className="text-[#2c98f0] ml-1 underline"
							href="https://colorlib.com/"
						>
							Colorlib.com
						</a>
					</p>
					<div className="w-full flex md:justify-start justify-center items-center">
						<button
							type="button"
							className="bg-transparent border border-black text-sm capitalize py-3 px-6 flex items-center gap-2 hover:bg-black hover:text-white transition-all"
						>
							{content.button} {content.icon}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
