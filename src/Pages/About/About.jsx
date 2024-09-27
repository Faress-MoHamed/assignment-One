import { TfiThought } from "react-icons/tfi";
import Header from "../../components/Header/Header";
import { BiWorld } from "react-icons/bi";
import { FaDatabase } from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";
import AbouUsCards from "../../components/AbouUsCards/AbouUsCards";
import ChildrenContainer from "../../components/ChildrenContainer/ChildrenContainer";

function About() {
	const cardsDetails = [
		{
			id: 1,
			name: "Graphic Design",
			element: <TfiThought className="text-[30px] text-[#2c98f0]" />,
			color: "#2c98f0",
		},
		{
			id: 2,
			name: "Web Design",
			element: <BiWorld className="text-[30px] text-[#ec5453]" />,
			color: "#ec5453",
		},
		{
			id: 3,
			name: "Software",
			element: <FaDatabase className="text-[30px] text-[#f9bf3f]" />,
			color: "#f9bf3f",
		},
		{
			id: 4,
			name: "Application",
			element: <FiSmartphone className="text-[30px] text-[#a84cb8]" />,
			color: "#a84cb8",
		},
	];
	return (
		<ChildrenContainer>
			<main className="flex flex-col gap-8">
				<Header subtitle={"ABOUT US"}>WHO AM I?</Header>
				<section className="text-[#000000b3] flex-col flex gap-5">
					<p>
						<span className="font-[500] mr-1">Hi Im Jackson Ford</span>
						On her way she met a copy. The copy warned the Little Blind Text,
						that where it came from it would have been rewritten a thousand
						times and everything that was left from its origin would be the word
						(and) and the Little Blind Text should turn around and return to its
						own, safe country.
					</p>
					<p>
						Even the all-powerful Pointing has no control about the blind texts
						it is an almost unorthographic life One day however a small line of
						blind text by the name of Lorem Ipsum decided to leave for the far
						World of Grammar.
					</p>
				</section>
				<div className="flex md:flex-row flex-col gap-5 items-center  md:h-[150px] justify-between w-full">
					{cardsDetails.map((el, _i) => (
						<AbouUsCards
							key={el.id}
							color={el.color}
							icon={el.element}
							title={el.name}
						/>
					))}
				</div>
			</main>
		</ChildrenContainer>
	);
}

export default About;
