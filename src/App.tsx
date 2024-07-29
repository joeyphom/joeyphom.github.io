import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <h1>Joey Phommasone Portfolio</h1>
          <header className={"menu-nav"}>
              <ul>
                  <li className={"menu-nav__button"}>
                      <img src={"https://placehold.co/20"} alt={"Placeholder"}/>
                      <a className={"menu-nav__button-text"} href={"#"}>Menu Text</a>
                  </li>
                  <li className={"menu-nav__button"}>
                      <img src={"https://placehold.co/20"} alt={"Placeholder"}/>
                      <a className={"menu-nav__button-text"} href={"#"}>Menu Text</a>
                  </li>
                  <li className={"menu-nav__button"}>
                      <img src={"https://placehold.co/20"} alt={"Placeholder"}/>
                      <a className={"menu-nav__button-text"} href={"#"}>Menu Text</a>
                  </li>
              </ul>
          </header>
          <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
              </button>
          </div>
      </>
  )
}

export default App
