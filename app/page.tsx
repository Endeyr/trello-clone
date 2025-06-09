import Board from './components/board';
import Nav from './components/nav';

export default function Home() {
  return (
    <div className='grid min-h-screen items-center justify-items-center font-[family-name:var(--font-geist-sans)]'>
      <main className='flex w-full flex-col items-center sm:items-start'>
        <div className='w-full'>
          <Nav />
          <Board />
        </div>
      </main>
      <footer className='flex w-full flex-wrap items-center justify-center'></footer>
    </div>
  );
}
