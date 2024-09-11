import { useCallback, useContext, useRef, useState } from "react";
import FileUploadIcon from "./FileUploadIcon";
import { AppContext } from "../../App";

function FileUploader() {
	const fileInputRef = useRef(null);
	const [isDragActive, setDragActive] = useState(false);
	const { generalState, setGeneralState } = useContext(AppContext);

	const triggerFileInput = () => (fileInputRef != null ? fileInputRef.current.click() : null);

	const stopDefaultAndPropagation = function (e) {
		e.preventDefault();
		e.stopPropagation();
	};
	const handleIsDragging = useCallback(function (e) {
		stopDefaultAndPropagation(e);
		setDragActive(true);
	}, []);

	const handleDropFiles = useCallback(function (e) {
		stopDefaultAndPropagation(e);
		setDragActive(false);

		const files = [...e.dataTransfer.files];
		const dataTransfer = new DataTransfer();

		files.forEach((file) => dataTransfer.items.add(file));
		fileInputRef.current.files = dataTransfer.files;

		updateInputFilesToState([...fileInputRef.current.files]);
	}, []);

	function updateInputFilesToState(filesToUpload) {
		if (fileInputRef.current == null || !fileInputRef.current.files.length) return;
		setGeneralState((prev) => {
			return {
				...prev,
				filesToUpload: filesToUpload,
			};
		});
	}

	function handleFileInputUpload() {
		const files = fileInputRef.current && fileInputRef.current.files;
		if (!files) return;
		updateInputFilesToState(files);
	}

	const handleFileSizeCheck = function (file) {
		const FILE_SIZE = 50 * 1024 * 1024;
		if (!file) return;

		// return file.size > FILE_SIZE
		// 	?
		// 	: true;

		//TODO: set error message
	};

	const handleUpload = (file) => {
		fetch("https://example.com/upload", {
			method: "POST",
			body: file,
		}).upload.addEventListener("progress", (e) => {
			if (e.lengthComputable) {
				const percentage = Math.round((e.loaded / e.total) * 100);
				console.log(percentage);
			}
		});
	};

	return (
		<div className="my-3">
			<div className="flex justify-between items-center flex-wrap gap-3">
				<div className="flex flex-col items-start">
					<h2 className="text-2xl font-semibold">Upload files</h2>
					<span className="text-sm">Documents uploaded will should be ...</span>
				</div>
				<div className="grid grid-cols-2 gap-3 md:ms-auto">
					<button type="button" className="btn has-icon border border-slate-600 hover:border-slate-900 hover:bg-slate-900 hover:text-white/90">
						<svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<g fill="none" stroke="currentColor" strokeWidth={1.5}>
								<path d="M9 11.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></path>
								<path strokeLinecap="round" d="M14.32 16.802L9 13.29m5.42-6.45L9.1 10.352" opacity={0.5}></path>
								<path d="M19 18.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm0-13a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></path>
							</g>
						</svg>
						<span className="text-sm">Share</span>
					</button>
					<button type="button" className="btn has-icon border border-slate-900 bg-slate-900 text-white hover:bg-slate-800">
						<svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={1.5}
								d="M18 12h-6m0 0H6m6 0V6m0 6v6"></path>
						</svg>
						<span className="text-sm">Invite team</span>
					</button>
				</div>
			</div>
			<section className="mt-4">
				<button
					onDragOver={handleIsDragging}
					onDrop={handleDropFiles}
					onDragLeave={() => setDragActive(false)}
					className="border-dashed border-2 rounded-lg p-5 w-full min-h-56 relative"
					type="button"
					onClick={triggerFileInput}>
					<input
						type="file"
						hidden
						multiple
						onChange={handleFileInputUpload}
						ref={fileInputRef}
						className="absolute inset-0"
						// accept=".csv, .xlsx, .csv, .xls, .xlsx,.xlsm, .xlsb, .xltx, .xltm"
					/>
					{isDragActive ? (
						<>
							<span>Drop the files here ...</span>
						</>
					) : (
						<div>
							<FileUploadIcon />
							<h6 className="flex items-center flex-wrap justify-center gap-x-1">
								<b className="font-medium">Click to upload</b>
								<span className="opacity-75">or drag and drop some files (.csv, .xlsx)</span>
							</h6>
							<span className="text-sm opacity-50">
								Maximum file size <b className="opacity-100">50MB </b>per file
							</span>
						</div>
					)}
				</button>
			</section>
		</div>
	);
}

export default FileUploader;
