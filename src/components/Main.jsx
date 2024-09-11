import FileUploader from "./subComponents/FileUploader";
import Header from "./Header";
import UploadingFileWrapper from "./UploadingFileWrapper";
import Table from "./Table";
import Backdrop from "./subComponents/Backdrop";
import { useContext } from "react";
import { AppContext } from "../App";

const Main = () => {
	const { generalState, setGeneralState } = useContext(AppContext);
	function toggleOffCanvas() {
		setGeneralState((prev) => {
			return {
				...prev,
				isOffCanvasOpen: true,
				isSideBarOpen: false,
			};
		});
	}
	return (
		<div className="">
			<Header />
			<section className="px-4 py-4 lg:px-5">
				<FileUploader />
				<UploadingFileWrapper />
				<div className="my-8">
					<div className="mb-5 flex items-center justify-between flex-wrap gap-3">
						<div className="flex flex-col">
							<h2 className="text-2xl leading-tight font-semibold">Students Voters List</h2>
							<span className="text-sm leading-tight">Here's a list of students who voted</span>
						</div>
						<button type="button" onClick={toggleOffCanvas} className="btn text-[.8rem] !px-4 bg-slate-900 text-white ">
							View statistics
						</button>
					</div>
					<Table />
				</div>
			</section>
			<Backdrop value={{ offcanvas: generalState.isOffCanvasOpen, sideBar: generalState.isSideBarVisible }} />
		</div>
	);
};

export default Main;
