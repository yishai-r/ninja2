import { useEffect, useState } from "react";


const Home = () => {

    const [toDo, setToDo] = useState([])

    const bringList = () => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then(data => setToDo(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        bringList()
    }, [])


    return (

        <div className="Home-Contianer">

            <h1>Home</h1>
            <ul>
                {toDo.map((el, i) => {
                    return (
                        <li
                            style={{ color: el.completed ? "red" : null }}
                            key={i}>

                            {el.title}
                            
                            </li>
                    )
                })}
            </ul>

        </div>

    );
}

export default Home;