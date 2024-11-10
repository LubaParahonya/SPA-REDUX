import React from 'react'
import style from './Item.module.css'
// import { DELETE_ITEM, IS_LIKE } from '../../actionsType'
import { useSelector } from 'react-redux'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { FaHeart } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { useNavigate} from 'react-router-dom';
import { connect } from 'react-redux'
import { deleteItem, isLikeAction } from '../../actions';

const Item = (props) => {
    const navigate = useNavigate()
    
    const handelSubmitDelete = (id) =>{
        props.deleteItem(id)
    } 
    const handelSubmitLike = (id) => {
        props.isLikeAction(id)
    }
    
  return (
  <div className={style.mainBox}>
    <div  className={style.boxInfo} onClick={()=> {
      navigate(`/products/${props.id}`)
      console.log('перешла на станицу:', props.id, props.title)
      }}>
        <img src={props.url} className={props.url? style.url : style.urlNone} alt="logo" />
        <div className={style.textBox}>
        <span className={style.catecories}>{props.catecories} </span>
        <span className={style.title}>{props.title}</span>
        <span className={style.discription}>{props.discription ? props.discription: null}</span>
        <span className={style.price}>{props.price} руб</span>
        </div>
    </div>
    <div className={style.buttongroup}>
    <IconButton aria-label="delete" size="small" onClick={()=> handelSubmitDelete(props.id)}>
      <DeleteIcon fontSize="inherit" />
    </IconButton>
    <IconButton aria-label="isLike" size="small" onClick={()=> handelSubmitLike(props.id)} className={props.isLike ? style.likeActiv: style.like}>
      <FaHeart />
    </IconButton>
    <IconButton aria-label="edit" size="small" onClick={()=> {
      navigate(`/create/${props.id}`)
      console.log('перешла на станицу:', props.id, props.title)
      }} >
      <AiFillEdit/>
    </IconButton>
    </div>
  </div>  
  )
}

export default connect(null, { deleteItem, isLikeAction})(Item)
