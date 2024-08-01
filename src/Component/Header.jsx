import { BsFillBellFill,BsPersonCircle,BsSearch } from 'react-icons/bs'
import "./header.css";


export default function Header() {

  return (
    <header className='headerStyle'>
      <div className='leftStyle'>
        <h1>Bridge Analytics</h1>
      </div>
      <div className='rightStyle'>
        <a href="#" >
          <BsFillBellFill className='iconh' />
        </a>
        <a href="#" >
          <BsPersonCircle className='iconh' />
        </a>
        <a href="#" >
          <BsSearch className='iconh' />
        </a>
      </div>
    </header>
  );
}

