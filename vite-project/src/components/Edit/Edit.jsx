import React from 'react'
import style from './Edit.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Edit = () => {
    const list = useSelector(state => state.list)
    const cardId = useParams().id
    const element = list.allIds.filter(el => el.id === parseInt(cardId))
    const valueInput = useSelector(state => state.inputValue)
    const valueInputCategory = useSelector(state => state.inputValueCatecories)
    const valueInputDiscription = useSelector(state => state.inputValueDiscription)
    const valueInputPrice = useSelector(state => state.inputValuePrice)  
    const navigate = useNavigate()

    const handelSubmitInput = (e) =>{
        e.preventDefault()
        props.addValueInput(e.target.value)
    }
    const handelSubmitInputCategory = (e) =>{
      e.preventDefault()
      props.addValueInputCatecories(e.target.value)
  }
    const handelSubmitInputDiscription = (e) =>{
      e.preventDefault()
      props.addValueInputDiscription(e.target.value)
}
    const handelSubmitInputPrice = (e) =>{
      e.preventDefault()
      props.addValueInputPric(e.target.value)
}
  return (
    <div className={style.main} >
      <h1>Старница не доработана</h1>
    <form className={style.formInput}>
    <span className={style.name}>Редактировать карточку</span>
    <input type='text' onChange={(e)=> handelSubmitInput(e)} value={element[0].title} className={style.inputBox} placeholder='Введите название'/>
    <input type='text' onChange={(e)=> handelSubmitInputCategory(e)} value={element[0].catecories} className={style.inputBox} placeholder='Введите категорию'/>
    <input type='text' onChange={(e)=> handelSubmitInputDiscription(e)} value={element[0].discription} className={style.inputBox} placeholder='Введите описание'/>
    <input type='text' onChange={(e)=> handelSubmitInputPrice(e)}  value={element[0].price} className={style.inputBox} placeholder='Введите цену'/>
    <button  className={style.inputBox}>Сохранить данные</button>
    <button onClick={()=> navigate('/')} className={style.inputBox}>Вернуться на гланую</button>
  </form>
  </div>
  )
}

export default Edit

