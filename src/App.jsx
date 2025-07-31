import ForwardRefParent from "./PD 5/ForwardRefParent";
import HandleSubmit from "./PD 5/HandleSubmit";
import PassingFunctionParent from "./PD 5/PassingFunctionParent";


function App() {
  const react = 'React  '
  return (
    <div style={{ marginLeft: '50px' }}>
      <span style={{ fontSize: '80px' }}> {react}  </span>
      <hr />

   <HandleSubmit /> 

    </div>
  );
}

export default App;
