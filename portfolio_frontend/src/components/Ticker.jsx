import React from 'react'

const Ticker = () => {
  return (
    <>
    <div className='flex justify-center px-8 py-2 gap-2'>
        <h1 className='special-gothic-expanded-one-regular'>TECH STACK : </h1>
        <div className="w-full overflow-hidden bg-gray-200 whitespace-nowrap rounded-full shadow-lg">
            <div className="ticker-track inline-block animate-scroll px-4 py-4 roboto-rt">
                <span className="mx-4">● HTML</span>
                <span className="mx-4">● Tailwind CSS</span>
                <span className="mx-4">● React.js</span>
                <span className="mx-4">● Node.js</span>
                <span className="mx-4">● Javascript</span>
                <span className="mx-4">● Core Java</span>
                <span className="mx-4">● SQL</span>
                <span className="mx-4">● NOSQL</span>
                <span className="mx-4">● Data Structures and Algorithms</span>
                <span className="mx-4">● Version Control(GitHub)</span>
                <span className="mx-4">● Docker</span>
                <span className="mx-4">● Azure</span>
            </div>
        </div>
    </div>
    </>
  )
}

export default Ticker
