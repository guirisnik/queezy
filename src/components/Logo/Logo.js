import React from 'react'
import Education from 'assets/education.svg'
import Examination from 'assets/examination.svg'
import Graduation from 'assets/graduation.svg'
import Notebook from 'assets/notebook.svg'
import Test from 'assets/test.svg'
import 'utils/Array.extensions'

const Logo = () => {
  // TODO: Fix image shuffling
  // const [randomImageSource] = [
  //   Education,
  //   Examination,
  //   Graduation,
  //   Notebook,
  //   Test,
  // ].shuffle()

  return <img src={Test} width='70%' />
}

export { Logo }
