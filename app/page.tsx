import Board from './components/board'
import Nav from './components/nav'

export default function Home() {
	return (
		<div className="grid items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col items-center sm:items-start w-full">
				<div className="w-full">
					<Nav />
					<Board />
				</div>
			</main>
			<footer className="flex w-full flex-wrap items-center justify-center"></footer>
		</div>
	)
}
