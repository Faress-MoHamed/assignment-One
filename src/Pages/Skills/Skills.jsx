import ChildrenContainer from "../../components/ChildrenContainer/ChildrenContainer";
import ProcessBar from "../../components/processBar/ProcessBar";
import Header from "./../../components/Header/Header";

function Skills() {
	return (
		<main className="flex justify-center items-center h-full">
			<ChildrenContainer>
				<Header subtitle={"MY SPECIALTY"}>MY SKILLS</Header>

				<p className="mb-[1.5em] leading-[1.8] text-[15px] font-[400] color-[#000000b3]">
					The Big Oxmox advised her not to do so, because there were thousands
					of bad Commas, wild Question Marks and devious Semikoli, but the
					Little Blind Text didn’t listen. She packed her seven versalia, put
					her initial into the belt and made herself on the way.
				</p>
				<div className="flex flex-col gap-6 justify-center items-center">
					<div className="row flex md:flex-row gap-6 flex-col items-center justify-between w-full">
						<div className="item md:w-2/4 w-full">
							<ProcessBar title={"html"} color={"red"} percentage={75} />
						</div>
						<div className="item md:w-2/4 w-full">
							<ProcessBar title={"css"} color={"#2c98f0"} percentage={60} />
						</div>
					</div>
					<div className="row flex md:flex-row gap-6 flex-col items-center w-full">
						<div className="item md:w-2/4 w-full">
							<ProcessBar title={"js"} color={"#2fa499"} percentage={40} />
						</div>
						<div className="item md:w-2/4 w-full">
							<ProcessBar title={"React"} color={"#ec5453"} percentage={70} />
						</div>
					</div>
					<div className="row flex md:flex-row gap-6 flex-col items-center w-full">
						<div className="item md:w-2/4 w-full">
							<ProcessBar title={"Nextjs"} color={"#a84cb8"} percentage={80} />
						</div>
						<div className="item md:w-2/4 w-full">
							<ProcessBar title={"nodejs"} color={"#4054b2"} percentage={100} />
						</div>
					</div>
				</div>
			</ChildrenContainer>
		</main>
	);
}

export default Skills;
