import Navbar from './components/navbar/navbar'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ItemListContainer from './containers/itemListContainer/itemListContainer';
function App() {
  

  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting="Santino Strupini"/>
    </div>
  )
}

export default App
