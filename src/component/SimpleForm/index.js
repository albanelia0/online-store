import './index.scss'

const SimpleForm = () => {
  return (
    <form className='simple-form'>
      <label className='simple-form__label'>Código de descuento</label>
      <input className='simple-form__input' type='text' />
      <button className='simple-form__button'>Aplicar</button>
    </form>
  )
}

export default SimpleForm
