import { createContext, useState } from "react";
import Index from "./Index";
import "./assets/style/index.css";
import { FileIcon, IndexIcon, ProductIcon, SettingIcon } from "./components/subComponents/sideBarIcons";

export const AppContext = createContext(null);

function App() {
	const appState = {
		filesToUpload: [],
		error: "",
		isSideBarVisible: false,
		isOffCanvasOpen: false,
		sideBarLinks: [
			{
				linkId: 1,
				icon: <IndexIcon w={"w-5"} h={"h-5"} />,
				linkName: "Home",
				hasDropdown: false,
			},
			{
				linkId: 2,
				icon: <ProductIcon w={"w-5"} h={"h-5"} />,
				linkName: "Products",
				isOpen: false,
				hasDropdown: true,
				subLinks: ["All projects", "Saved", "Archived", "Files and assets", "Preferences"],
			},
			{
				linkId: 3,
				icon: <FileIcon w={"w-5"} h={"h-5"} />,
				linkName: "Files",
				isOpen: false,
				hasDropdown: true,
				subLinks: ["PDF", "CSV", "DOCX", "XLXS"],
			},
			{
				linkId: 4,
				icon: <SettingIcon w={"w-5"} h={"h-5"} />,
				linkName: "Setting",
				hasDropdown: false,
			},
		],
	};
	const [generalState, setGeneralState] = useState(appState);
	return (
		<AppContext.Provider value={{ generalState, setGeneralState }}>
			<Index />
		</AppContext.Provider>
	);
}

export default App;
