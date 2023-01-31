import React, {useState, useEffect} from 'react';
import { Row } from 'react-bootstrap';
import App from '../App';


function Tags() {

  const [tags, setTags] = useState([]);

  const fetchData = async ()=>{
    const data = await fetch("http://api.quotable.io/tags")
    setTags(tags);
  }

  useEffect(() => {
      fetchData();
  
  }, []);
  

  return (
   
            <div>
                {tags.map((tags) => (
                    <h2>{tags.quote.content}</h2>
                ))}
            </div>
      
  );
}

export default Tags;
