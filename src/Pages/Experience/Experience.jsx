import Header from "../../components/Header/Header";
import ExperienceCard from "../../components/ExperienceCard";
import ChildrenContainer from "../../components/ChildrenContainer/ChildrenContainer";
const experiences = [
	{
		title: "Full Stack Developer",
		date: "2017-2018",
		description:
			"Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.",
		color: "#2c98f0",
	},
	{
		title: "Front End Developer at Google Company",
		date: "2017-2018",
		description:
			"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
		color: "#ff1de1",
	},
	{
		title: "System Analyst",
		date: "2017-2018",
		description:
			"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
		color: "#ff1010",
	},
];

function Experience() {
	return (
		<ChildrenContainer>
			<main className="relative">
				<Header subtitle={"EXPERIENCE"}>WORK EXPERIENCE</Header>
				<ul className="relative mt-[20px] flex flex-col gap-[20px] justify-center py-[20px] mb-[1rem] before:top-0 before:bottom-0 h-full before:absolute before:w-[3px] before:bg-[#eee] ml-[-1.5px]">
					{experiences.map((el, index) => (
						<ExperienceCard
							key={index}
							date={el.date}
							title={el.title}
							description={el.description}
							color={el.color}
						/>
					))}
					<li className="relative mb-[20px] h-full">
						<div
							className="absolute  ml-[-25px] z-10 rounded-full bg-white text-center
            shadow-3xl border-[5px] border-[#f2f3f7] w-[50px] h-[50px] flex justify-center items-center"
						></div>
					</li>
				</ul>
			</main>
		</ChildrenContainer>
	);
}

export default Experience;
