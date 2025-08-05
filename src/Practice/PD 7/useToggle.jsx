import { useState } from "react"

const useToggle = (defaultValue) => {

  const [value,setValue] = useState(defaultValue)

  function toggleValue(v){
    if( typeof v !== 'boolean'){
      setValue(!value)
    }
    else {
      setValue(v)
    }
  }
  return [value,toggleValue];
}
export default useToggle