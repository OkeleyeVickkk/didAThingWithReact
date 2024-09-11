import { useEffect, useState } from "react";
import csv from "../assets/fileIcons/csv.png";
import excel from "../assets/fileIcons/excel.png";
import pdf from "../assets/fileIcons/pdf.png";
import xlsx from "../assets/fileIcons/xlsx.png";
import docx from "../assets/fileIcons/docx.png";
import defaultFile from "../assets/fileIcons/defaultFile.png";

const fileIcons = {
	pdf: pdf,
	xlsx: xlsx,
	excel: excel,
	csv: csv,
	docx: docx,
};
const UploadingFile = (file) => {
	const { fileSize, fileName, fileExt } = file.fileDetails;
	const [fileIcon, setFileIcon] = useState(null);

	useEffect(() => {
		setFileIcon(fileIcons[fileExt] || defaultFile);
	}, [file]);

	return (
		<div className="border rounded-md p-4 border-slate-300/60 flex items-start gap-x-3 relative">
			<figure className="flex items-center justify-center w-10 h-10 border-slate-500/30 border rounded-md p-1.5">
				<img src={fileIcon} alt="" className="w-full h-full object-cover" />
			</figure>
			<div className="flex-grow">
				<span className="flex flex-col mb-2">
					<span className="font-medium text-[0.93rem] leading-tight max-w-84 text-ellipsis whitespace-nowrap overflow-hidden">{fileName}</span>
					<span className="opacity-80 leading-tight text-[.84rem]">{fileSize}</span>
				</span>
				<figure role="progressbar" className="flex items-center gap-x-4 mt-auto">
					<div className="w-full bg-gray-200 rounded-full h-1.5">
						<div
							className="bg-slate-900 h-1.5 rounded-full "
							style={{
								width: "45%",
							}}></div>
					</div>
					<figcaption className="text-slate-800 text-sm">45%</figcaption>
				</figure>
			</div>
			<button type="button" className="btn absolute right-2 top-2 btn-rounded-full hover:bg-slate-800" title="Remove">
				<svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
					<g fill="none" fillRule="evenodd">
						<path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
						<path
							fill="currentColor"
							d="m12 13.414l5.657 5.657a1 1 0 0 0 1.414-1.414L13.414 12l5.657-5.657a1 1 0 0 0-1.414-1.414L12 10.586L6.343 4.929A1 1 0 0 0 4.93 6.343L10.586 12l-5.657 5.657a1 1 0 1 0 1.414 1.414z"></path>
					</g>
				</svg>
			</button>
		</div>
	);
};

export default UploadingFile;
