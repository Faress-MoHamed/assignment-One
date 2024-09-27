import { FaPencilAlt } from "react-icons/fa";

function ExperienceCard({ title, date, description, color }) {
	return (
		<li className="relative mb-[20px] h-full">
			<div
				className={`absolute  ml-[-25px] z-10 rounded-full text-center
            shadow-3xl border-[5px] border-[#f2f3f7] w-[50px] h-[50px] flex justify-center items-center`}
				style={{ backgroundColor: color }}
			>
				<FaPencilAlt className="text-2xl text-white" />
			</div>
			<div className="timeline-panel w-[92%] float-right rounded-[2px] relative p-[20px] bg-[#f2f3f7] after:left-[-7%] md:after:left-[-27px] after:border-[15px] after:border-r-[#f2f3f7] after:top-[10%] after:absolute after:border-b-transparent after:border-l-transparent after:border-t-transparent border-b-transparent">
				<h2 className="mb-[10px]">
					<span className="text-lg font-[500]">{title}</span>{" "}
					<span className="text-gray-400">{date}</span>
				</h2>
				<p className="text-gray-500">{description}</p>
			</div>
		</li>
	);
}

export default ExperienceCard;
