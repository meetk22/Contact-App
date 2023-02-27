const initialData = {
    list:[]
}

//const [list,setList] = useState([]);
const todoReducers = (state = initialData, action) => {
    switch(action.type){
        case "Add_todo":
            
        const{id,data} = action.payload;
            
        return{
            ...state,
            list:[
              ...state.list,  
              {
                    id:id,
                    data:data
              }]    
        }
    

        case "Delete_todo":
            
        const newList = state.list.filter((element) => element.id != action.id)
            
        return{
            ...state,
            list : newList
        }

        default:return state;
    }
}

export default todoReducers