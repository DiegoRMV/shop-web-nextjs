// https://tailwindcomponents.com/component/hoverable-table
import { Title } from "@/components";

import Link from "next/link";
import { IoCardOutline } from "react-icons/io5";

export default function Orders() {
	return (
		<>
			<Title title="Orders" />

			<div className="mb-10">
				<table className="min-w-full table-fixed text-center text-gray-900 text-xs sm:text-sm md:text-base">
					<thead className="bg-gray-200 border-b">
						<tr>
							<th
								scope="col"
								className="py-3"
							>
								ID
							</th>
							<th
								scope="col"
								className="py-3"
							>
								Nombre
							</th>
							<th
								scope="col"
								className="py-3"
							>
								Estado
							</th>
							<th
								scope="col"
								className="py-3"
							>
								Opciones
							</th>
						</tr>
					</thead>
					<tbody className="font-light">
						<tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
							<td className="whitespace-nowrap py-3 font-medium">
								1
							</td>
							<td className="whitespace-nowrap py-3">
								Mark
							</td>
							<td className="inline-flex justify-center items-center whitespace-nowrap py-3">
								<IoCardOutline className="text-green-800" />
								<span className="ml-2 text-green-800">Pagada</span>
							</td>
							<td className="py-3">
								<Link href="/orders/123" className="hover:underline">
									Ver orden
								</Link>
							</td>
						</tr>

						<tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
							<td className="whitespace-nowrap py-3 font-medium">
								1
							</td>
							<td className="whitespace-nowrap py-3">
								Mark
							</td>
							<td className="inline-flex justify-center items-center whitespace-nowrap py-3">
								<IoCardOutline className="text-red-800" />
								<span className="ml-2 text-red-800">No Pagada</span>
							</td>
							<td className="py-3">
								<Link href="/orders/124" className="hover:underline">
									Ver orden
								</Link>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
}
