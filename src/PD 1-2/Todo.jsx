import Image from "./Image";

function Todo() {
  function CallFun (){
    alert('function Called');
  }
  return (
    <div>

      <h1>Arfa Todos</h1>
      <img src={Image} alt="arfa" className="photo" />
      <ul>
        <li>Invent new Traffic lights</li>
        <li>Reharse a movie scene</li>
        <li>Improve the Spectrum</li>
      </ul>
      <button onClick={CallFun} >Click me</button>
    
    </div>
  )
}



export default Todo