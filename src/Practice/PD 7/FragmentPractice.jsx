import React, { Fragment } from 'react'

const FragmentPractice = () => {
  return (
    <Fragment>
      <FragmentPracticeCom />
      <FragmentPracticeCom />
      <FragmentPracticeCom />
      <FragmentPracticeCom />
      <FragmentPracticeCom />
    </Fragment>
  )
}

export default FragmentPractice


const FragmentPracticeCom = () => {
  return (
    <Fragment>
      <h1>Hello user</h1>
    </Fragment>
  )
}
