import Link from 'next/link'

const Nav = () => {
	return (
		<nav className="bg-white border-b border-gray-200 shadow-sm">
			<div className="max-w-7xl mx-auto px-6">
				<div className="flex justify-between items-center h-16">
					{/* Logo/Brand */}
					<div className="flex items-center">
						<Link
							href="/"
							className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
						>
							<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
								<svg
									className="w-5 h-5 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 002-2M9 7a2 2 0 012 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012-2"
									/>
								</svg>
							</div>
							<span className="text-xl font-bold text-gray-900">BoardFlow</span>
						</Link>
					</div>

					{/* Navigation Links */}
					<div className="hidden md:flex items-center space-x-8">
						<Link
							href="/dashboard"
							className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
						>
							Dashboard
						</Link>
						<Link
							href="/boards"
							className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
						>
							Boards
						</Link>
						<Link
							href="/projects"
							className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
						>
							Projects
						</Link>
						<Link
							href="/settings"
							className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
						>
							Settings
						</Link>
					</div>

					{/* Right side - User menu */}
					<div className="flex items-center space-x-4">
						{/* Notifications */}
						<button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200">
							<svg
								className="w-5 h-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M15 17h5l-5 5-5-5h5zm-5-10a5 5 0 01-5-5m0 0a5 5 0 015-5m-5 5h10"
								/>
							</svg>
						</button>

						{/* User Avatar */}
						<div className="relative">
							<button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
								<div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
									<svg
										className="w-5 h-5 text-gray-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
										/>
									</svg>
								</div>
								<span className="hidden sm:block text-sm font-medium text-gray-700">
									John Doe
								</span>
								<svg
									className="w-4 h-4 text-gray-500"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</button>
						</div>

						{/* Mobile menu button */}
						<button className="md:hidden p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200">
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>

			{/* Mobile menu (hidden by default) */}
			<div className="md:hidden border-t border-gray-200 bg-gray-50">
				<div className="px-6 py-4 space-y-2">
					<Link
						href="/dashboard"
						className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-white rounded-md font-medium transition-colors duration-200"
					>
						Dashboard
					</Link>
					<Link
						href="/boards"
						className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-white rounded-md font-medium transition-colors duration-200"
					>
						Boards
					</Link>
					<Link
						href="/projects"
						className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-white rounded-md font-medium transition-colors duration-200"
					>
						Projects
					</Link>
					<Link
						href="/settings"
						className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-white rounded-md font-medium transition-colors duration-200"
					>
						Settings
					</Link>
				</div>
			</div>
		</nav>
	)
}

export default Nav
