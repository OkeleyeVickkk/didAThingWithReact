import React, { useContext } from "react";
import { AppContext } from "../App";
import { MinusIcon, PlusIcon } from "./subComponents/sideBarIcons";

const SideBar = () => {
	const { generalState, setGeneralState } = useContext(AppContext);

	function closeSideBar() {
		setGeneralState((prev) => {
			return {
				...prev,
				isOffCanvasOpen: false,
				isSideBarVisible: false,
			};
		});
	}
	function toggleDropdown(id) {
		if (!id) return;
		setGeneralState((prev) => {
			const newSideBarLinks = prev.sideBarLinks.map((item) => {
				if (item.linkId === id) {
					return {
						...item,
						isOpen: !item.isOpen,
					};
				} else {
					return { ...item, isOpen: false };
				}
			});
			return {
				...prev,
				sideBarLinks: [...newSideBarLinks],
			};
		});
	}
	return (
		<div className="p-4">
			<header className="flex items-center justify-between gap-y-4 mb-4 ps-2">
				<h3 className="text-base font-semibold">MENU</h3>
				<button type="button" onClick={() => closeSideBar()} className="btn btn-rounded-full hover:bg-slate-900 xl:hidden" title="Close">
					<svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
						<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m7 7l10 10M7 17L17 7"></path>
					</svg>
				</button>
			</header>
			<ul className="flex flex-col items-start gap-y-1.5">
				{generalState?.sideBarLinks.map((eachLink) => {
					return (
						<React.Fragment key={eachLink.linkId}>
							<li className="w-full">
								{eachLink?.hasDropdown ? (
									<>
										<button
											type="button"
											onClick={() => toggleDropdown(eachLink.linkId)}
											className={`flex items-center gap-x-2 w-full p-2 rounded-md animateIt ${
												eachLink?.isOpen ? "bg-slate-200" : "bg-transparent hover:bg-slate-100"
											} ${eachLink.isOpen ? "active" : "inactive"}`}>
											<em className="text-slate-500">{eachLink.icon}</em>
											<span className="flex-grow text-start">{eachLink.linkName}</span>
											<em className="ms-auto text-zinc-500">{eachLink?.isOpen ? <MinusIcon /> : <PlusIcon />}</em>
										</button>
										<div
											className={`grid transition-[grid-template-rows] duration-[400ms]`}
											style={{ gridTemplateRows: `${eachLink.isOpen ? "1fr" : "0fr"}` }}>
											<ul className={`overflow-hidden flex flex-col ms-4 mt-1`}>
												{eachLink.subLinks?.map((eachItem) => (
													<React.Fragment key={`${eachLink.linkId}${eachItem}`}>
														<li className="w-full">
															<a
																href="#"
																className="border-l-slate-300 border-l hover:border-l-slate-500 transition-all duration-300 ease-in-out py-1.5 px-3 rounded-[4px] rounded-s-none text-[.9rem] hover:bg-slate-100 block">
																{eachItem}
															</a>
														</li>
													</React.Fragment>
												))}
											</ul>
										</div>
									</>
								) : (
									<>
										<a
											href="#"
											className={`flex items-center gap-x-2 w-full p-2 rounded-md animateIt ${
												eachLink?.isOpen ? "bg-slate-200" : "bg-transparent hover:bg-slate-100"
											}`}>
											<em className="text-slate-500">{eachLink.icon}</em>
											<span className="flex-grow text-start">{eachLink.linkName}</span>
										</a>
									</>
								)}
							</li>
						</React.Fragment>
					);
				})}
			</ul>
		</div>
	);
};

export default SideBar;
