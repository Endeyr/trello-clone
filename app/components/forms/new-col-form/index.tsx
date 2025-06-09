import Form from 'next/form';
import { createColumn } from './create-col';

const NewColForm = () => {
  return (
    <Form action={createColumn} className='flex flex-col gap-3'>
      <div className='flex flex-col gap-3'>
        <label htmlFor='col-name' className='text-sm font-medium text-gray-500'>
          Column Name:
        </label>
        <input
          name='col-name'
          id='col-name'
          type='text'
          placeholder='New column name'
          className='w-full rounded-md border border-gray-300 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-500 transition-all duration-200 hover:border-gray-400 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none'
          required
        />
      </div>
      <button
        className='w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none active:bg-blue-800'
        type='submit'
      >
        Create Column
      </button>
    </Form>
  );
};

export default NewColForm;
