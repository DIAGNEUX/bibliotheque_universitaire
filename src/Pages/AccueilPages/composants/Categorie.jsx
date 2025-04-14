import React from 'react'
import { Histoire , Litterature , Science , Informatique , Geographie , Maths } from '../../../import/import'

const Categorie = () => {
  const LesCategories = [
    {id: 1, name: "Litterature", img:Litterature , NBr_articles: 30},
    {id: 2, name: "Science", img:Science , NBr_articles: 40},
    {id: 3, name: "Informatique", img:Informatique , NBr_articles: 10},
    {id: 4, name: "Geographie", img:Geographie , NBr_articles: 20},
    {id: 5, name: "Maths", img:Maths , NBr_articles: 50},
    {id: 6, name: "Histoire", img:Histoire , NBr_articles: 60},
  ]
  return (
    <div className='bg-background py-2'>
        <h1 className='text-center text-white text-3xl font-bold'>Categorie</h1>
        <div className='flex flex-col justify-center items-center'>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 py-8 px-12 w-4/5 '>
                {LesCategories.map((item) => (
                    <div className='flex flex-row  items-center border border-border_card rounded  py-2 px-4' key={item.id} >
                      <div className='flex justify-center items-center mr-2'>
                        <img src={item.img} alt="" className='w-16 h-16' />
                      </div>
                      <div className='flex flex-col justify-center'>
                        <p className='text-white/90 text-3xl font-bold'>{item.name}</p>
                        <p className='text-white/50 font-thin '>{item.NBr_articles} articles</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        
    </div>
  )
}

export default Categorie