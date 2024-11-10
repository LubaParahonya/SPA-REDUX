import React from 'react'
import Item from '../Item/Item'
import { useNavigate, useParams } from 'react-router-dom'
import { connect } from "react-redux";
import { getTodosByVisibilityFilter } from '../../reducer/selector';
import style from './Card.module.css'

const Card = ({list}) => {
    const cardId = useParams().id
    const element = list.filter(el => el.id.id === parseInt(cardId))
    console.log('list', list)    
    const navigate = useNavigate()
  return (
    <div className={style.mainBoxCard}>
      <button onClick={() => navigate('/')} className={style.back}>Вернуться на основную страницу</button>
      <Item 
      id={element[0].id.id}
      title={element[0].id.title}
      isLike={element[0].id.isLike}
      catecories={element[0].id.catecories}
      price={element[0].id.price}
      discription={element[0].id.discription}
      url={element[0].id.url} 
      className={style.item}/>
    </div>
    
  )
}

//export default Card

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  const list = getTodosByVisibilityFilter(state, visibilityFilter);
  return { list };
}

//export default ListItem
export default connect(mapStateToProps)(Card);

