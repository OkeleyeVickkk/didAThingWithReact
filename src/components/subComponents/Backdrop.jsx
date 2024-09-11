import { useContext } from "react";
import { AppContext } from "../../App";

function Backdrop() {
	const { generalState } = useContext(AppContext);
	return generalState.isOffCanvasOpen ? <div className={`bg-black/25 z-[9] fixed inset-0 animateIt backdrop-blur-[2px] `}></div> : "";
}

export default Backdrop;
