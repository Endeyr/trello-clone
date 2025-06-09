import NewColForm from '../forms/new-col-form/index';
import { mockCols } from './mock-data';

const Board = () => {
  // When page loads it should get the latest data from db
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6'>
      <div className='mx-auto max-w-7xl'>
        {/* Board Header */}
        <div className='mb-8'>
          <h1 className='mb-2 text-3xl font-bold text-gray-900'>
            Project Board
          </h1>
          <p className='text-gray-600'>Manage your columns and tasks</p>
        </div>

        {/* Columns Grid */}
        <div className='mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {mockCols.map((col) => (
            <div
              key={col.id}
              className='rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md'
            >
              <h3 className='mb-2 text-lg font-semibold text-gray-900'>
                {col.name}
              </h3>
              <div className='text-sm text-gray-500'>0 tasks</div>
              {/* Placeholder for future task content */}
              <div className='mt-4 space-y-2'>
                <div className='h-2 w-full rounded bg-gray-100'></div>
                <div className='h-2 w-3/4 rounded bg-gray-100'></div>
              </div>
            </div>
          ))}

          {/* New Column Form Card */}
          <div className='rounded-xl border-2 border-dashed border-gray-300 bg-white p-6 shadow-sm transition-colors duration-200 hover:border-blue-400'>
            <div className='mb-4 text-center'>
              <div className='mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100'>
                <svg
                  className='h-6 w-6 text-blue-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 4v16m8-8H4'
                  />
                </svg>
              </div>
              <h3 className='mb-1 font-medium text-gray-900'>Add New Column</h3>
              <p className='mb-4 text-sm text-gray-500'>
                Create a new column for your board
              </p>
            </div>
            <NewColForm />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Board;
