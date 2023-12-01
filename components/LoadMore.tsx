import Image from 'next/image'
import React from 'react'

function LoadMore() {
  return (
    <div>
      <section className='flex justify-center items-center w-full'>
        <div>
          <Image
            src="./spinner.svg"
            alt='spinner' 
            width={36}
            height={36}
            className='object-contain'
          />
        </div>
      </section>
    </div>
  )
}

export default LoadMore
