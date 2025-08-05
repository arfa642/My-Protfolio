import ContextAPI from "./PD 8/ContextAPI/ContextAPI";

function App() {
  const react = 'React  ';
  const bold = { border: '3px solid black' }; 

  return (
    <div style={{ marginLeft: '50px' }}>
      <span style={{ fontSize: '80px' }}> {react} </span>
      <hr style={bold} />

      <ContextAPI />

    </div>
  );
}

export default App;
