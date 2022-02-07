import { useEffect, useState } from "react";
import ItemShow from "./ItemShow";


const Home = () => {

    const [toDo, setToDo] = useState([])
    
    const bringList = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setToDo(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        bringList()
    }, [])

    let showThis = "id";

    return (

        <div className="Home-Contianer">

            <h1>Home</h1>
           
         
               <ItemShow toDo={toDo} title="this is the title" />
              <h2>The posts of the user id: 2</h2>
               <ItemShow toDo={toDo.filter((toDo)=>toDo.userId==2)} title="this is the title" />
                  
        

        </div>

    );
}

export default Home;