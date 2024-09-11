import React from "react";
import FileIcon from "../../assets/images/excel_file_icon.png";

const FileUploadIcon = () => {
	return (
		<div className="relative w-max mx-auto">
			<figure className="flex items-center justify-center w-20 h-20 opacity-50 mb-4">
				<img src={FileIcon} alt={FileIcon} className="max-w-full h-auto" />
			</figure>
			<span className="flex items-center rounded-full bg-slate-300 p-2 text-white absolute bottom-0 right-0 ">
				<svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
					<g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5}>
						<path d="M6.286 19C3.919 19 2 17.104 2 14.765s1.919-4.236 4.286-4.236q.427.001.83.08m7.265-2.582a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228C20.392 8.78 22 10.881 22 13.353c0 2.707-1.927 4.97-4.5 5.52"></path>
						<path strokeLinejoin="round" d="M12 16v6m0-6l2 2m-2-2l-2 2"></path>
					</g>
				</svg>
			</span>
		</div>
	);
};

export default FileUploadIcon;
