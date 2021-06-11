import React from 'react'
import Education from 'assets/education.svg'
import Examination from 'assets/examination.svg'
import Graduation from 'assets/graduation.svg'
import Notebook from 'assets/notebook.svg'
import Test from 'assets/test.svg'

const Logo = () => {
  const Images = [Education, Examination, Graduation, Notebook, Test]

  const randomImageIndex = Math.floor(Math.random() * Images.length)

  const RandomImage = Images[randomImageIndex]

  return <img src={RandomImage} width='70%' />
}

export { Logo }
