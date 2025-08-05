import Button from 'react-bootstrap/Button';

function BasicExample() {
  return (
    <>
      <Button variant="primary" style={{margin:'5px'}} >Primary</Button>
      <Button variant="secondary"style={{margin:'5px'}}>Secondary</Button>
      <Button variant="success"style={{margin:'5px'}}>Success</Button>
      <Button variant="warning"style={{margin:'5px'}}>Warning</Button>
      <Button variant="danger"style={{margin:'5px'}}>Danger</Button>
      <Button variant="info"style={{margin:'5px'}}>Info</Button>
      <Button variant="dark"style={{margin:'5px'}}>Dark</Button>
      
    </>
  );
}

export default BasicExample;