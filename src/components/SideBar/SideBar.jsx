import { useContext, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { MobileHandlerContext } from "../../utils/MobileHandlerProvider";
import { motion, AnimatePresence } from "framer-motion";
import "./SideBar.css";
function SideBar() {
	const [open, setOpen] = useState(false);
	const { isMobile } = useContext(MobileHandlerContext);
	const sidebarLinks = [
		{
			name: "Home",
			link: "/",
		},
		{
			name: "About",
			link: "/about",
		},
		{
			name: "Skills",
			link: "/skills",
		},
		{
			name: "Experience",
			link: "/experience",
		},
		{
			name: "Work",
			link: "/work",
		},
	];

	function handleClose() {
		setOpen((e) => !e);
	}
	return (
		<div
			className={` z-50 lg:min-h-screen flex flex-col py-5 px-4 md:items-center items-start fixed top-0 left-0 lg:bg-[#f5f5f5] font-Quicksand`}
		>
			{!isMobile && (
				<>
					<div className="logo w-full px-5 pt-5 text-center uppercase">
						<div
							className="bg-[url('/logo.jpg')] bg-cover bg-no-repeat bg-center max-w-full mx-auto mb-[30px] w-[9.375rem] max-h-full h-[9.375rem] rounded-full"
							src="logo.jpg"
							alt="Logo"
						/>
						<h1 className="mb-[0.5rem] text-[1.375rem] font-[700]">
							<Link to={window.location.pathname}>Jackson Ford</Link>
						</h1>
						<p className="text-[#000000b3] mb-6 leading-[1.8] font-[400] text-[0.75rem]">
							<Link className="text-[#2c98f0]" to={window.location.pathname}>
								UI/UX/Designer
							</Link>{" "}
							in Philippines
						</p>
					</div>
					<ul className="flex flex-col justify-center text-center items-center text-[0.75rem] tracking-[1px] font-Quicksand w-full">
						{sidebarLinks.map((item, index) => {
							return (
								<motion.li
									initial={{ opacity: 0, x: -100 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{
										delay: 0.2 * (index + 1),
										ease: [0.17, 0.55, 0.55, 1],
									}}
									key={index}
									className="mb-[10px] w-full"
								>
									<NavLink
										to={`${item.link}`}
										onClick={() => {
											handleClose();
										}}
										className={`before:absolute before:w-0 before:bottom-0 after:bottom-0 before:duration-300 after:duration-300 before:left-2/4 after:absolute after:w-0 after:right-2/4 hover:before:w-2/4 hover:after:w-2/4 before:h-[0.5px] after:h-[0.5px] before:bg-[#2c98f0] after:bg-[#2c98f0] relative uppercase py-[5px]`}
									>
										{item.name}
									</NavLink>
								</motion.li>
							);
						})}
					</ul>{" "}
				</>
			)}
			{isMobile && (
				<button
					onClick={() => setOpen(true)}
					className="lg:border-none border-[0.5px] border-black/20 rounded-[0.375rem] py-[0.25rem] px-[0.75rem]"
				>
					<IoMenu className="text-3xl font-light" />
				</button>
			)}
			<AnimatePresence>
				{open && isMobile && (
					<>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.5 }}
							onClick={handleClose}
							className="left-0 top-0 h-full z-20 fixed inset-0 overflow-hidden bg-black bg-opacity-50"
						></motion.div>
						<motion.div
							initial={{ x: -100, opacity: 0 }}
							animate={open ? { opacity: 1, x: 0 } : {}}
							exit={{ x: -100, opacity: 0 }}
							transition={{ duration: 0.5 }}
							className={`fixed ${
								open ? "" : "hidden"
							} left-0 top-0 z-[999] w-[40%] lg:top-5`}
						>
							<ul
								className={`flex h-screen w-full flex-col items-start justify-start gap-10 bg-white p-3 backdrop-blur-lg lg:hidden`}
							>
								<button
									aria-label="close sidebar"
									className="text-4xl text-black"
									onClick={() => handleClose()}
								>
									<IoClose />
								</button>
								{sidebarLinks.map((item, index) => {
									return (
										<motion.li
											initial={{ opacity: 0, x: -100 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{
												delay: 0.2 * (index + 1),
												ease: [0.17, 0.55, 0.55, 1],
											}}
											key={index}
										>
											<NavLink
												to={`${item.link}`}
												onClick={() => {
													handleClose();
												}}
												className={`before:absolute before:w-0 before:bottom-0 after:bottom-0 before:duration-300 after:duration-300 before:left-2/4 after:absolute after:w-0 after:right-2/4 hover:before:w-2/4 hover:after:w-2/4 before:h-[1px] after:h-[1px] before:bg-[#2c98f0] after:bg-[#2c98f0] relative uppercase py-[5px]`}
											>
												{item.name}
											</NavLink>
										</motion.li>
									);
								})}
							</ul>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</div>
	);
}

export default SideBar;
