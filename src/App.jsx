import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Nuovo articolo</h1>
      <div className="card">
        <p>
          Qui verrà visualizzato il nuovo articolo inserito dall'Utente
        </p>
      </div>
    </>
  )
}

export default App
