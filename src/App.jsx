import Button from './component/Button'
import Navbar from './component/Navbar'
import TopNavbar from './component/TopNavbar'
import './index.css'

export default function App() 
{
  return (
    <div className="p-5">
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <Navbar></Navbar>
        </div>
        <div className="col-span-10">
          <TopNavbar></TopNavbar>
        </div>
      </div>
    </div>
  )
}