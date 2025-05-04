// edit.js  
import { useState } from '@wordpress/element';  
const Edit = ({ attributes, setAttributes }) => {  
  const [count, setCount] = useState(attributes.initialCount || 0);  
  return (  
    <div>  
      <button onClick={() => setCount(count + 1)}>+</button>  
      <span>{count}</span>  
      <button onClick={() => setCount(count - 1)}>-</button>  
    </div>  
  );  
};  