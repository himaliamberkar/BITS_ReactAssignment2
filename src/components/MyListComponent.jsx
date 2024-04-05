import React from 'react';
import { useState } from 'react';
import { ListGroup, Container} from 'react-bootstrap';


const MyListComponent = () => {
  // Sample state containing an array of objects
  const [data, setData] = useState([
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Mango' },
    { id: 3, name: 'Orange' },
  ]);

  return (
    <div style={{textAlign:'center'}}>
      <h2>List Component</h2>
      <ListGroup >
        {data.map(item => (
          <ListGroup.Item key={item.id}>{item.name}</ListGroup.Item>
        ))}
      </ListGroup>
      </div>
  );
};

export default MyListComponent;
