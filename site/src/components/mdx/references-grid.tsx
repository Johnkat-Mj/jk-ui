import type { ReactNode } from 'react'

export const ReferencesGrid = ({children}:{children:ReactNode}) => {
  return (
    <div className='grid sm:grid-cols-2 mt-7 first:mt-0 gap-4'>
        {children}
    </div>
  )
}
