import { ChangeEventHandler, FormEventHandler } from "react"
import './InnerForm.css'

interface InnerFormType {
    submit: FormEventHandler;
    handleChange: ChangeEventHandler;
}

export const InnerForm: React.FC<InnerFormType> = ({submit, handleChange}) => {
  return (
    <>
        <form className='inner-form' onSubmit={submit}>
            <div className='watch-name' id='watchName'>
                <p>Название</p>
                <input className='input-watch-name' type='text' name="watchName" id='name' onChange={handleChange} placeholder='Название часового пояса'></input>
            </div>
            <div className='watch-zone' id='watchZone'>
                <p>Временная зона GMT</p>
                <input className='input-watch-zone' type='number' name="watchZone" id='timeZone' onChange={handleChange} placeholder='GMT +/-'></input>
            </div>
            <button className='btn-submit' type='submit'>Добавить</button>
        </form>
    </>
  )
}
