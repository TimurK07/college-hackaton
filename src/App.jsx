import './App.css'
import DownloadInfo from './components/DownloadInfo/DownloadInfo'
import HackInfo from './components/HackInfo/HackInfo'
import Header from './components/Header/Header'
import Register from './components/Register/Register'

function App() {

  return (
    <div className='app'>
      <Header/>
      <HackInfo/>
      <DownloadInfo/>
      <Register/>
    </div>
  )
}

export default App
