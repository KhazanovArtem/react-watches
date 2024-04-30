
import { useState } from 'react';
import './App.css'
import { InnerForm } from './components/InnerForm/InnerForm';
import { Watch } from './components/Watch/Watch';

export interface IForm {
  name: string;
  timeZone: string;
}

function App() {
  let [form, setForm] = useState<IForm>({
    name: '',
    timeZone: ''
  })
  let [data, setData] = useState<IForm[]>([]);

  const addWatch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
    setData([...data, form]);
    console.log(form);
    console.log(data);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const{name, value} = e.target
    if (name === 'watchZone') {
      setForm(prevForm => ({...prevForm, timeZone: value}))
    } else {
      setForm(prevForm => ({...prevForm, name: value}))
    }
  }

  function removeWatch(e: React.MouseEvent<HTMLButtonElement>) {
    const { id } = e.target;
    setData(data.filter((item, index) => index !== Number(id)
  ))

  }


  return (
    <>
      <div className='container'>
        <InnerForm submit={addWatch} handleChange={handleChange}></InnerForm>
        <div className='watch-container'>
          {data.map((item, index) => 
          <Watch 
            key={index} 
            name={item.name} 
            timeZone={item.timeZone} 
            removeWatch={removeWatch} 
            id={index.toString()} />)}
        </div>
      </div>
    </>
  )
}

export default App
