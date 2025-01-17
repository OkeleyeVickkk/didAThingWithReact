import React from "react";

const Table = () => {
	return (
		<div>
			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
				<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" className="px-6 py-3">
								Voter ID
							</th>
							<th scope="col" className="px-6 py-3">
								Name
							</th>
							<th scope="col" className="px-6 py-3">
								Department
							</th>
							<th scope="col" className="px-6 py-3">
								Email
							</th>
						</tr>
					</thead>
					<tbody>
						<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
							<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
								Apple MacBook Pro 17"
							</th>
							<td className="px-6 py-4">Silver</td>
							<td className="px-6 py-4">Laptop</td>
							<td className="px-6 py-4">Yes</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Table;
