import './App.css'
import MenuHeader from "./components/MenuHeader/MenuHeader.tsx";
import BoxDescription from "./components/BoxDescription/BoxDescription.tsx";
import MenuTab from "./components/MenuTab/MenuTab.tsx";

function App() {
  return (
      <>
            <MenuHeader />
            <MenuTab/>
            <BoxDescription/>
      </>
  )
}

export default App
