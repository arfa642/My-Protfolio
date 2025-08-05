import React from 'react'
import PassingFunctionChild from './PassingFunctionChild'

const PassingFunctionParent = () => {
  const love = (name) => {
    alert(`i love you ${name} `)
  }
  const hate = (name) => {
    alert(`i hate you ${name} `)
  }
  return (
    <div>
      <PassingFunctionChild love={love} hate={hate} name={"arfa"} />
      <PassingFunctionChild love={love} hate={hate} name={"aniq"} />
      <PassingFunctionChild love={love} hate={hate} name={"supari"} />
      <PassingFunctionChild love={love} hate={hate} name={"uzair"} />
      <PassingFunctionChild love={love} hate={hate} name={"armaghan"} />
      <PassingFunctionChild love={love} hate={hate} name={"abdullah"} />
      <PassingFunctionChild love={love} hate={hate} name={"umair"} />
    </div>
  )
}

export default PassingFunctionParent
