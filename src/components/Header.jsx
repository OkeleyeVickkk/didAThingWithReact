import { useContext } from "react";
import ProfileAvatar from "../assets/images/avatar.png";
import { AppContext } from "../App";

const Header = () => {
	const { setGeneralState } = useContext(AppContext);
	function togglerSideBar() {
		setGeneralState((prev) => {
			return {
				...prev,
				isSideBarVisible: !prev.isSideBarVisible,
			};
		});
	}

	return (
		<header className="px-3 sm:px-5 py-3 flex justify-between items-center border-b">
			<h1 className="text-3xl font-semibold">SomeLogo</h1>
			<div className="ms-auto flex items-center gap-x-2">
				<figure className="w-10 h-10 flex items-center rounded-full overflow-hidden bg-slate-200 p-1" role="button">
					<img src={ProfileAvatar} alt="" className="img-fluid" />
				</figure>
				<button
					onClick={togglerSideBar}
					className="p-1 transition-all duration-300 ease-in-out rounded-full hover:bg-slate-900 hover:text-white xl:hidden"
					type="button">
					<svg className="rotate-180 w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
						<rect width={18} height={1.5} x={3} y={7.001} fill="currentColor" rx={0.75}></rect>
						<rect width={15} height={1.5} x={3} y={11.251} fill="currentColor" rx={0.75}></rect>
						<rect width={18} height={1.5} x={3} y={15.499} fill="currentColor" rx={0.75}></rect>
					</svg>
				</button>
			</div>
		</header>
	);
};

export default Header;
