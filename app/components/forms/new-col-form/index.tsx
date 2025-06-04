import Form from 'next/form'
import { createColumn } from './create-col'

const NewColForm = () => {
	return (
		<Form action={createColumn} className="flex flex-col gap-3">
			<div className="flex flex-col gap-3">
				<label htmlFor="col-name" className="text-sm font-medium text-gray-500">
					Column Name:
				</label>
				<input
					name="col-name"
					id="col-name"
					type="text"
					placeholder="New column name"
					className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 text-white bg-gray-800 transition-all duration-200 hover:border-gray-400 text-sm"
					required
				/>
			</div>
			<button
				className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-blue-800 text-sm"
				type="submit"
			>
				Create Column
			</button>
		</Form>
	)
}

export default NewColForm
