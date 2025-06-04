import NewColForm from '../forms/new-col-form/index'
import { mockCols } from './mock-data'

const Board = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
			<div className="max-w-7xl mx-auto">
				{/* Board Header */}
				<div className="mb-8">
					<h1 className="text-3xl font-bold text-gray-900 mb-2">
						Project Board
					</h1>
					<p className="text-gray-600">Manage your columns and tasks</p>
				</div>

				{/* Columns Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
					{mockCols.map((col) => (
						<div
							key={col.id}
							className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200"
						>
							<h3 className="font-semibold text-gray-900 text-lg mb-2">
								{col.name}
							</h3>
							<div className="text-sm text-gray-500">0 tasks</div>
							{/* Placeholder for future task content */}
							<div className="mt-4 space-y-2">
								<div className="h-2 bg-gray-100 rounded w-full"></div>
								<div className="h-2 bg-gray-100 rounded w-3/4"></div>
							</div>
						</div>
					))}

					{/* New Column Form Card */}
					<div className="bg-white rounded-xl shadow-sm border-2 border-dashed border-gray-300 p-6 hover:border-blue-400 transition-colors duration-200">
						<div className="text-center mb-4">
							<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
								<svg
									className="w-6 h-6 text-blue-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 4v16m8-8H4"
									/>
								</svg>
							</div>
							<h3 className="font-medium text-gray-900 mb-1">Add New Column</h3>
							<p className="text-sm text-gray-500 mb-4">
								Create a new column for your board
							</p>
						</div>
						<NewColForm />
					</div>
				</div>
			</div>
		</div>
	)
}
export default Board
