import React from 'react'
import InstallNode from '../assets/portfolio/InstallNode-JS.jpg';
import nodejsweb from '../assets/portfolio/nodejsweb.png';
import nodesserver from '../assets/portfolio/nodesserver.png';
import structurenodejs from '../assets/portfolio/structurenodejs.png';
import reactweather from '../assets/portfolio/reactweather.jpg';

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: InstallNode
        },
        {
            id: 2,
            src: nodejsweb
        },
        {
            id: 3,
            src: nodesserver
        },
        {
            id: 4,
            src: structurenodejs
        },
        {
            id: 5,
            src: reactweather
        },
    ]

  return (
    <div name="portfolio" className=" px-16 w-full max-auto bg-gradient-to-b
    from-black to-gray-900 text-white">
        <div className='max-w-screen-lg py-9  mx-auto flex flex-col
         justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline
                border-b-4 border-gray-500'
                >
                    Portfolio</p>
                <p className='py-6'>Quelques de mes realisations</p>
            </div>

            

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8
            px-20 sm:px-0'>
                {
                portfolios.map(({id, src}) =>(
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt="" 
                    className='rounded-md duration-200 hover:scale-105' 
                    />
                    <div className='flex items-center justify-center'>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                    </div>
                </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default Portfolio;