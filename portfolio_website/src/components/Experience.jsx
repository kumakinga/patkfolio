import React from 'react';
import nodejs from '../assets/nodejs.png';
import expressjs from '../assets/expressjs.png';
import bootstrap from '../assets/bootstrap.png';
import reactjs from '../assets/reactjs.png';
import github from '../assets/github.png';

const Experience = () => {

    const techs = [
        {
            id : 1,
            src: nodejs,
            title: 'NodeJS',
            style: 'shadow-green-500'
        },
        {
            id : 2,
            src: expressjs,
            title: 'ExpressJS',
            style: 'shadow-yellow-700'
        },
        {
            id : 3,
            src: bootstrap,
            title: 'Bootstrap',
            style: 'shadow-blue-400'
        },
        {
            id : 4,
            src: reactjs,
            title: 'ReactJS',
            style: 'shadow-blue-300'
        },
        {
            id : 5,
            src: github,
            title: 'Github',
            style: 'shadow-gray-400'
        },
    ]
  return (
    <div name='experience' className='bg-gradient-to-b 
    from-gray-900 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col
        justify-center w-full h-full text-white'>

            <div>
                <br /><br />
                <p className='text-4xl font-bold border-b-4
                border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>Voici quelques technologies sur lesquelles j'ai travaillé</p>
            </div>

            <div className='w-full grid grid-cols-2 
            sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                {
                    techs.map(({id, src, title, style}) => (

                    <div key={id} className={`shadow-md hover:scale-105 duration-500 
                    py-2 rounded-lg ${style}`}>
                        <img src={src} alt="" className='w-20 mx-auto' />
                        <p className='mt-4'>{title}</p>
                    </div>

                    ))
                }  
            </div>
        </div>
    </div>
  )
}

export default Experience