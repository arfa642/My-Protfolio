import React from 'react'
import styled from "styled-components"

const POSC = () => {
  const Heading = styled.h4`
  color: red;
  font-size: 50px`

  const Head = styled.h4({
    color: 'green',
    fontSize: '40px'
  })

  const Btn = styled.button`
  background-color: white;
  height: 50px;
  width: 100px;
  margin: 20px
  `

  const Batan = styled.button({
    backgroundColor: 'black',
    color: 'white',
    height: '50px',
    width: '100px'
  })


  return (
    <div>
      <Heading>Hello heading</Heading>
      <Head>Hello heading 2</Head>
      <Head>Hello heading 3</Head>
      <Head>Hello heading 4</Head>
      <Btn>Bhutto</Btn>
      <Batan>Nawaz</Batan>
    </div>
  )
}

export default POSC
