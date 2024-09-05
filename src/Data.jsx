import Comp from "./Comp";
import { useState } from "react";
function Data() {
    const data = [
      { name: "John Doe", image: "https://via.placeholder.com/150", isFriend: false },
      { name: "Jane Smith", image: "https://via.placeholder.com/150", isFriend: true },
      { name: "Alex Johnson", image: "https://via.placeholder.com/150", isFriend: false },
      // Add more users here
    ];
  
    const [realdata, setdata] = useState(data);
  
   const dummy=(i)=>setdata((prev)=>prev.map((item,idx)=>{
    
   }))
  
    return (
      <div className="h-screen bg-zinc-800 flex items-center justify-center gap-7">
        {realdata.map((element, index) => (
          <Comp
            key={index}
            image={element.image}
            name={element.name}
            isFriend={element.isFriend}
            dummy={() => dummy(index)} // Pass the index to the dummy function
          />
        ))}
      </div>
    );
  }
  
  export default Data;