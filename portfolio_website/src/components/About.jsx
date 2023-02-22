import React from 'react'

const About = () => {
  return (
    <div name="about" className=' px-16 w-full max-auto bg-gradient-to-b
    from-gray-900 to-black text-white'>
      <div className='max-w-screen-lg p-4 max-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-2
                border-gray-500'>About</p>
            </div>
            
            <p className='mt-3'>
                Date de creation 01.janv.2023 <br />
                -------------------------------<br />
                Par: Patrick Kumakinga. <br />

                Bonjour ; <br />
                Pour le fun du code, cet espace a été créé spécialement pour vous.
                Pour ceux qui veulent apprendre la programmation soyez le(la) bienvenu(e)
                dans l'équipe <span className='font-bold text-yellow-500'>SimpleCode</span> ; le but 
                de cet espace est de permettre aux apprenants d'être au courant des mises à jour 
                faites par rapport au programme d'apprentissage et interagire avec l'equipe
                selon les problèmes rencontrés, aussi si vous voulez vous inscrire au programme, prière
                de soumetre votre requête en remplissant les cases sur l'onglet Contact ci-dessous.
                <br /> <br />
                Nous vous contacterons juste après. Nos salutations !!

            </p>

        </div>
    </div>
  )
}

export default About