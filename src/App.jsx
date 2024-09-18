import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Fragment, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Count from './components/Count'

const studentsData = [
  { name: 'Alexandro' },
  { name: 'Eddie' },
  { name: 'Kevin' },
  { name: 'Favas' },
]

const isItReallyTrue = false

function App() {
  const [isTrue, setIsTrue] = useState(false)

  const [students] = useState(
    studentsData.map(currentStudent => ({ ...currentStudent, id: uuidv4() }))
  )

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <Count />
        <Count />
        <button
          type='button'
          onClick={() => {
            setIsTrue(!isTrue)
          }}
        >
          {isTrue ? 'True' : 'False'}
          {/* {isTrue 
          ? (isItReallyTrue 
            ? "Yes it's true" 
            : 'No it is really false') 
          : "No it's false"} */}
        </button>
        {students
          .filter(currentStudent => currentStudent.name !== 'Eddie')
          .map(currentStudent => (
            <Fragment key={currentStudent.id}>
              <>
                <p>Something</p>
              </>
              <div style={{ border: '1px solid grey' }}>
                <p>Name: </p>
                <p data-uuid={currentStudent.id}>{currentStudent.name}</p>
              </div>
            </Fragment>
          ))}
      </div>
    </>
  )
}

export default App
