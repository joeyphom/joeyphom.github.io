import './App.css'
import MenuHeader from "./components/MenuHeader/MenuHeader.tsx";
import BoxDescription from "./components/BoxDescription/BoxDescription.tsx";
import MenuTabs from "./components/MenuTabs/MenuTabs.tsx";

function App() {
  return (
      <>
            <title>Joey Portfolio | Main Menu</title>
            <MenuHeader />
            <MenuTabs />
            <BoxDescription/>
      </>
  )
}

export default App
