import Header from './Header'
import Sidebar from './Sidebar'
import TotalCard from './TotalCard'
import ChartLayout from './ChartLayout'
import '../App.css'

function App() {
  return (
<>
<div >
      <Header/>
      </div>
      <div className="sidebarlayout">
        <div className='sidebarContainer'>
          <Sidebar />
          </div>
        <main className="mainlayout">
          
          <TotalCard  />
          <ChartLayout/>
        </main>
          </div>
          </>
 
  )
}

export default App
