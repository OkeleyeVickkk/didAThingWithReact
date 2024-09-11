import { useContext } from "react";
import UploadingFile from "./UploadingFile";
import { AppContext } from "../App";

const UploadingFileWrapper = () => {
	const { generalState } = useContext(AppContext);

	function getFileDetails(f) {
		if (!f) return;

		function getFileExt(file) {
			return file && file.name.split(".").at(-1).toLowerCase();
		}

		function getFileSize(file) {
			const fileSize = file.size;
			const fileSizeInKb = (fileSize / 1024).toFixed(2); // Convert to KB
			const fileSizeInMB = (fileSize / (1024 * 1024)).toFixed(2); // Convert to MB

			const res = fileSize > 1024 * 1024 ? fileSizeInMB + " MB" : fileSizeInKb + " KB";
			return res;
		}

		return {
			fileSize: getFileSize(f),
			fileName: f.name,
			fileExt: getFileExt(f),
		};
	}

	return (
		<>
			{generalState.filesToUpload.length ? (
				<div className="grid md:grid-cols-2 gap-3">
					{generalState.filesToUpload &&
						[...generalState.filesToUpload].map((eachItem, index) => {
							return <UploadingFile key={index} fileDetails={{ ...getFileDetails(eachItem) }} />;
						})}
				</div>
			) : null}
		</>
	);
};

export default UploadingFileWrapper;
