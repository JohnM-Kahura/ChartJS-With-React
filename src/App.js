import BarChart from "./components/BarChart";
import { useEffect,useState } from "react";
import axios from 'axios';
import NavBar from "./components/NavBar";
import PieChart from "./components/PieChart";
function App() {
  const [data, setData] = useState([1,3,4])

 
  const fetchData=async()=>{
    try{
      const res = await axios.get('http://127.0.0.1:8000/api/',{
        headers: {
           'accept': 'application/json',
        }
    })
    console.log(res.data)
    
    setData(res.data)
   
  } catch (error) {
      console.log(error)
  }
  }

  useEffect(()=>{
fetchData()
  },[])
  return (
    <div className="App">
      <NavBar/>
      {data.map((item)=>{
        return( 
        <>
        <div className="grid grid-cols-2 ">

        <div style={{width:600}}>

        <BarChart chartData={{
        labels:['Maths','English','Biology','Chemistry','History','Physics'],
        datasets:[{
         label:item.name,
         data:[item.maths,item.english,item.biology,item.chemistry,item.history,item.physics],
         backgroundColor:['red','blue','green','yellow','brown','pink']

         
        }] 
      }}/>
         </div>
<div style={{width:400,height:500}}>
<PieChart chartData={{
  labels:['Maths','English','Biology','Chemistry','History','Physics'],
  datasets:[{
    label:item.name,
    data:[item.maths,item.english,item.biology,item.chemistry,item.history,item.physics],
    backgroundColor:['red','blue','green','yellow','brown','pink']
    
    
  }] 
}}/>
</div>
</div>
         </>
         )
      })}
      
      
    </div>
  );
}

export default App;
