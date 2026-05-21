import React, { useState } from "react";
// const Todo = ()=>{
//   const [todoInput,setTodoInput] = useState('');
//   const [todoArr,setTodoArr] = useState([]);
//   const [isEdit,setIsEdit] = useState(false);
//   const [targetIndex,setTargetIndex] = useState('')
//   //addItem function 
//   const addItem = ()=>{
//     todoArr.push(todoInput)
//     console.log(todoArr)
//     setTodoInput('')
//   }
//   //delete Item function 
//   const deleteItem = (index)=>{
//     let todoClone = [...todoArr];
//     // console.log(todoClone)
//     todoClone.splice(index,1);
//     setTodoArr(todoClone)
//   }
//   //edit Item function
//   const editItem = (index,item)=>{
//     setTargetIndex(index)
//     setTodoInput(item)
//     setIsEdit(true)
    
//   }
//   //update Item 
//   const updateItem = ()=>{
//     let todoClone = [...todoArr];
//     todoClone.splice(targetIndex,1,todoInput);
//     setTodoArr(todoClone);
//     setTargetIndex('');
//     setIsEdit(false);
//     setTodoInput('')

//   }
//   //cancel update function 
//   const cancelUpdate = ()=>{
//     console.log('wok')
//     setTodoInput('');
//     setIsEdit(false)
//   }
//   //delete all function 
//   const deleteAll = ()=>{
//    let todoClone = [...todoArr];
//    setTodoArr([])
//   }
//   return(
//     <div>
//       <h1>Todo List</h1>
//       <input type="text" onChange={(e)=>setTodoInput(e.target.value)} value={todoInput}/>
//       {
//         (isEdit)?(<span><button onClick={updateItem}>update Item</button>
//         <button onClick={cancelUpdate}>cancel update</button></span>): (<span><button onClick={addItem}>add Item</button><button onClick={deleteAll}>delete All</button></span>
// )
//       }
//       <ul>
//         {
//           todoArr?.map((item,index)=>{
//             return(<li key={index}>{item} 
                //  <button onClick={()=>deleteItem(index)}>delete Item</button>
                //  <button onClick={()=>editItem(index,item)}>edit Item</button>
            
//             </li>)
//           })
//         }
//       </ul>
//     </div>
//   )
// }
// export default Todo;
//bootstrap 
import Swal from 'sweetalert2'
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";

export default function Todo() {
      const [todoInput,setTodoInput] = useState('');
  const [todoArr,setTodoArr] = useState([]);
  const [isEdit,setIsEdit] = useState(false);
  const [targetIndex,setTargetIndex] = useState('')
  //addItem function 
  const addItem = ()=>{
    if(todoInput == ''){
      Swal.fire("Enter data!");
      return;
    }
    todoArr.push(todoInput)
    console.log(todoArr)
    setTodoInput('')
  }
  //delete Item function 
  const deleteItem = (index)=>{
    let todoClone = [...todoArr];
    // console.log(todoClone)
    todoClone.splice(index,1);
    setTodoArr(todoClone)
  }
  //edit Item function
  const editItem = (index,item)=>{
    setTargetIndex(index)
    setTodoInput(item)
    setIsEdit(true)
    
  }
  //update Item 
  const updateItem = ()=>{
    let todoClone = [...todoArr];
    todoClone.splice(targetIndex,1,todoInput);
    setTodoArr(todoClone);
    setTargetIndex('');
    setIsEdit(false);
    setTodoInput('')

  }
  //cancel update function 
  const cancelUpdate = ()=>{
    console.log('wok')
    setTodoInput('');
    setIsEdit(false)
  }
  //delete all function 
  const deleteAll = ()=>{
   let todoClone = [...todoArr];
   setTodoArr([])
  }
  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol lg="9" xl="7">
            <MDBCard className="rounded-3">
              <MDBCardBody className="p-4">
                <h4 className="text-center my-3 pb-3">To Do App</h4>
                <MDBRow className="row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                  <MDBCol size="12">
                    <MDBInput
                      label="Enter a task here"
                      id="form1"
                      type="text"
                      onChange={(e)=>setTodoInput(e.target.value)} value={todoInput}
                    />
                  </MDBCol>
                  <MDBCol size="12">
                    {
        (isEdit)?(<span><MDBBtn onClick={updateItem}>update Item</MDBBtn>
        <MDBBtn color="danger" onClick={cancelUpdate}>cancel update</MDBBtn></span>): (<span><MDBBtn onClick={addItem}>add Item</MDBBtn><MDBBtn color="danger" onClick={deleteAll} style={{marginLeft:10}}>delete All</MDBBtn></span>
)
      }
                  </MDBCol>
                  
                </MDBRow>
                <MDBTable className="mb-4">
                  {
                    todoArr.length > 0 && 
                    <MDBTableHead>
                    <tr>
                      <th scope="col">No.</th>
                      <th scope="col">Todo item</th>
                      <th scope="col">Status</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </MDBTableHead>
                  }
                  
                  <MDBTableBody>
                    {
                      todoArr?.map((item,index)=>{
                        return(
                           <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{item}</td>
                      <td>{new Date().toLocaleTimeString()}</td>
                      <td>
                                         <MDBBtn onClick={()=>deleteItem(index)} color="danger">delete Item</MDBBtn>
                 <MDBBtn onClick={()=>editItem(index,item)} style={{marginLeft:10}}>edit Item</MDBBtn>
            
                      </td>
                    </tr>
                        )
                      })
                    }
                   
                    
                  </MDBTableBody>
                </MDBTable>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}