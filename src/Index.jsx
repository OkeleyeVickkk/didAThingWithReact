import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "./App";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import Offcanvas from "./components/Offcanvas";

const Index = () => {
	const { generalState } = useContext(AppContext);

	return (
		<>
			<div className="grid grid-cols-12 min-h-[var(--dynamic-height)] items-start">
				<aside
					className={`xl:col-span-2 w-full xs:w-11/12 sm:w-7/12 md:w-3/6 lg:w-2/6 xl:w-full h-full border-r fixed z-[10] xl:z-0 bg-white xl:relative shadow-md xl:shadow-none transition-all ease-in-out duration-300 ${
						generalState.isSideBarVisible ? "translate-x-0" : "-translate-x-full xl:translate-x-0"
					}`}>
					<SideBar />
				</aside>
				<aside className="col-span-12 xl:col-span-10 h-full">
					<Main />

					<Offcanvas />
				</aside>
			</div>
		</>
	);
};

export default Index;
