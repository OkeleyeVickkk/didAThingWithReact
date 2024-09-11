import { useContext } from "react";
import { AppContext } from "../App";
import Charts from "./subComponents/Charts";

const Offcanvas = () => {
	const { generalState, setGeneralState } = useContext(AppContext);

	function closeOffcanvas() {
		setGeneralState((prev) => {
			return {
				...prev,
				isSideBarVisible: false,
				isOffCanvasOpen: false,
			};
		});
	}

	return (
		<div
			className={`fixed h-full max-w-full md:max-w-[400px] lg:max-w-[450px] animateIt w-full bg-white right-0 top-0 shadow-lg z-10 ${
				generalState.isOffCanvasOpen == false ? "translate-x-[110%]" : ""
			}`}>
			<header className="flex items-center justify-between py-3 px-4">
				<h2 className="font-semibold text-xl">Voting Statistics</h2>
				<button type="button" onClick={() => closeOffcanvas()} className="btn btn-rounded-full hover:bg-slate-900" title="Close">
					<svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
						<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m7 7l10 10M7 17L17 7"></path>
					</svg>
				</button>
			</header>
			<div className="p-4 flex items-center justify-center">
				<Charts />
			</div>
		</div>
	);
};

export default Offcanvas;
