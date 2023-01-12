import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table'
import { useNavigate, useNavigation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { DLT,AddToCart,REMOVE } from "../redux/actions/action";

function CardDetails() {
const[data, setData] = useState([])

  const getData = useSelector((state)=>state.cartReducer.carts);
  const {id} = useParams();

  const compare =() =>{
    let compareDate = getData.filter((e)=>{
      return e.id == id
    })
    setData(compareDate)
    console.log(compareDate)
  }

  const dispatch = useDispatch();
  const history = useNavigate()

  const send =(e)=>{
    //console.log(e)
    dispatch(AddToCart(e))
    }
 
  const dlt =(id) =>{
    dispatch(DLT(id))
    history('/')
  }

  const remove = (item) =>{
    dispatch(REMOVE(item))
  }

  useEffect(()=>{
    compare()
  },[id])
  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Iteams Details Page</h2>
        <section className="container mt-3">
            <div className="iteamsdetails" >
              {
                data.map((e)=>{
                  return(
                    <>
                    <div className="items_img">
         
         <img src={e.imgdata} />
     </div>
     <div className="details">
         <Table>
             <tr>
                 <td>
                     <p><strong>Restaurant</strong>: {e.rname}</p>
                     <p><strong>Price</strong>: ₹ {e.price}</p>
                     <p><strong>Dishes</strong>: {e.address} </p>
                     <p><strong>Total</strong>: {e.price * e.qnty} </p>
                     <div className="mt-5 d-flex justify-content-between align-items-center"style={{width:100,cursor:"pointer",background:"#ddd",color:"#111"}} >
                      <span style={{fontSize:24}} onClick={e.qnty<=1 ?()=>dlt(e.id):()=>remove(e)}>-</span>
                      <span style={{fontSize:22}}>{e.qnty}</span>
                      <span style={{fontSize:24}} onClick={()=>send(e)}>+</span>
                     </div>
                 </td>
                 <td>
                 <p><strong>Rating</strong>: <span style={{backgroundColor:"green", color:"#fff", padding:"2px 5px", borderRadius:"5px"}}>*{e.rating}</span></p>
                 <p><strong>Order Review</strong>: <span>{e.somedata} </span></p>
                 <p><strong>Remove</strong>: <i style={{color:"red", fontSize: "20px", cursor: "pointer"}} className="fas fa-trash" onClick={()=>dlt(e.id)}></i></p>
                 </td>
             </tr>
         </Table>
     </div>
                    </>
                  )
                })
              }
                
            </div>
        </section>
      </div>
    </>
  );
}

export default CardDetails;
