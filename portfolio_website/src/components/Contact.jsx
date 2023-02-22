import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='py-12 w-full bg-gradient-to-b from-black 
    to-gray-800 p-4 text-white'>

        <div className='flex flex-col p-4 justify-center max-w-creen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6'>Souscrivez pour garder Contact</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/d60e0a2f-7d6a-4d13-9f5c-40db57314e73"
                 method="POST" className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name='name' placeholder='Entrez votre nom'
                     className='p-2 bg-transparent border-2 rounded-md text-white
                     focus:outline-none'/>
                    <input type="text" name='email' placeholder='Entrez votre email'
                     className=' my-4 p-2 bg-transparent border-2 rounded-md text-white
                     focus:outline-none'/>
                    
                    <textarea name="message" placeholder='Entrez votre message Ici' rows="10" className='P-2 bg-transparent
                    border-2 rounded-md text-white focus:outline-none'>

                    </textarea>

                    <button className='text-white bg-gradient-to-b from-cyan-500
                        to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md 
                        hover:scale-110 duration-300'>Discutons</button>
                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact