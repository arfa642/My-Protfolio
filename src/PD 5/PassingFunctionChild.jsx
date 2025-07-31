import Button from 'react-bootstrap/Button';

const PassingFunctionChild = ({love,hate,name}) => {
  return (
    <div>
      <h4 style={{margin: '10px'}}>{name}</h4>
      <Button variant='danger' onClick={() => love(name)} style={{margin: '10px'}} >Love button</Button>
       <Button variant='danger' onClick={() => hate(name)} >Hate button</Button>
    </div>
  )
}

export default PassingFunctionChild
