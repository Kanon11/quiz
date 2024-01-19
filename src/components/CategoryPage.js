import React from 'react'
import Back from './Back'
import CategoryContent from './CategoryContent'
import SubCategoryContent from './SubCategoryContent'
import Footer from './Footer'

 const CategoryPage=()=> {
  return (
      <div className='home-bg light-bg mb-5'>
          <Back />
          <CategoryContent />
          {/* <SubCategoryContent /> */}
          <Footer/>
      </div>
  )
}
export default CategoryPage