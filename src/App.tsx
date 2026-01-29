import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import FetchData from "./componentes/FetchData.tsx";
// import FetchingHook from "./componentes/FetchingHook.tsx";
// import FetchingBase from "./componentes/FetchingBase.tsx";

function App() {

  return (
      <>
          <h1 className="display-1">Hola desde Api App React</h1>
          {/*<FetchingBase />*/}
          {/*<FetchingHook />*/}
          <FetchData />
      </>
  )
}

export default App
