
const ItemShow = ({toDo,title}) => {
 
    return ( 
        toDo.map((el, i) => 
            (
                <div style={{color:el.id%2==0?"red":"blue"}} key={i}>
                    <h3>post num {el.id} --- {title} {el.title}</h3>
                   <h4>the user id is: {el.userId} </h4>
                     <h4>and it is about: {el.body}</h4>
                </div>
            )
        )
     );
}
 
export default ItemShow;