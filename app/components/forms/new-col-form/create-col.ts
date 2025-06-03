'use server'

import { redirect } from 'next/navigation'

export const createColumn = async (formData: FormData) => {
	const columnName = formData.get('col-name')

	// Validate the input
	if (!columnName) {
		throw new Error('Column name is required')
	}

	redirect(`/${columnName}`)
}
