import React from 'react'
import { useSelector } from 'react-redux'
import { connect } from 'react-redux'
import { addValueInput, addItem, addValueInputCatecories, addValueInputDiscription, addValueInputPric } from '../../actions'
import style from './Input.module.css'
import { useNavigate } from 'react-router-dom'


const Input = (props) => {
  const navigate = useNavigate()
    const valueInput = useSelector(state => state.inputValue)
    const list = useSelector(state => state.list)
    const valueInputCategory = useSelector(state => state.inputValueCatecories)
    const valueInputDiscription = useSelector(state => state.inputValueDiscription)
    const valueInputPrice = useSelector(state => state.inputValuePrice)
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
    const handelSubmitAdd = (e) =>{
        props.addItem(valueInput, valueInputCategory, valueInputDiscription, valueInputPrice)
        e.preventDefault()
        // props.addItem(wwwww, ttttt, ssss, hhhhh)
        props.addValueInput('')
        props.addValueInputCatecories('')
        props.addValueInputDiscription('')
        props.addValueInputPric('')
        console.log(valueInput, valueInputCategory, valueInputDiscription, valueInputPrice)
        console.log(list)

    }

  return (
    <div className={style.main}>
      <form className={style.formInput}>
      <span className={style.name}>Форма для создания карточки</span>
      <input type='text' onChange={(e) => handelSubmitInput(e)} value={valueInput} className={style.inputBox} placeholder='Введите название'/>
      <input type='text' onChange={(e) => handelSubmitInputCategory(e)} value={valueInputCategory} className={style.inputBox} placeholder='Введите категорию'/>
      <input type='text' onChange={(e) => handelSubmitInputDiscription(e)} value={valueInputDiscription} className={style.inputBox} placeholder='Введите описание'/>
      <input type='text' onChange={(e) => handelSubmitInputPrice(e)} value={valueInputPrice} className={style.inputBox} placeholder='Введите цену'/>
      <button onClick={(e) => handelSubmitAdd(e)} className={style.inputBox}>Добавить карточку</button>
      <button onClick={()=> navigate('/')} className={style.inputBox}>Вернуться на гланую</button>
    </form>
    </div>
  )
}

export default connect(null, { addValueInput, addValueInputCatecories, 
                               addValueInputDiscription, addValueInputPric,
                               addItem })(Input)
