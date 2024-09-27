import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar/SideBar";

function Layout() {
	return (
		<>
			<div className="flex md:flex-row flex-col h-full">
				<SideBar />
				<div className="w-full h-full flex justify-end items-center">
					<Outlet />
				</div>
			</div>
		</>
	);
}

export default Layout;
