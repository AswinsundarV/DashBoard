import { HiMiniCurrencyRupee } from "react-icons/hi2";
import { BsDatabaseFillDown } from "react-icons/bs";
import { HiCurrencyRupee } from "react-icons/hi";
import { GiReceiveMoney } from "react-icons/gi";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import './totalcard.css';

import { useNavigate } from 'react-router-dom';




function TotalCard() {

  const navigate = useNavigate();

  const handleSave = () => {
    navigate('/Save');
  };

  return (
    <div className='maincon'>
        <div className='maintitle'>
        <h3>Welcome to Bridge Analytics</h3>
        <button type="button" onClick={handleSave} className="save">Save</button>
      </div>
      <div className='maincards'>
      <div className='cards'>
        <HiMiniCurrencyRupee className='hicons'/>
        <div className='cardin'>
          <h3>Total Revenue</h3>
          <h2>12,00,000</h2>
        </div>
      </div>
      <div className='cards'>
        <RiMoneyRupeeCircleLine className='hicons'/>
        <div className='cardin'>
          <h3>Total Due Amount</h3>
          <h2>12,00,000</h2>
        </div>
      </div>
      <div className='cards'>
        <HiCurrencyRupee className='hicons'/>
        <div className='cardin'>
          <h3>Total Collection</h3>
          <h2>12,00,000</h2>
        </div>
      </div>
      <div className='cards'>
        <BsDatabaseFillDown className='hicons'/>
        <div className='cardin'>
          <h3>Receivables</h3>
          <h2>12,00,000</h2>
        </div>
      </div>
      <div className='cards'>
        <GiReceiveMoney className='hicons'/>
        <div className='cardin'>
          <h3>Payables</h3>
          <h2>12,00,000</h2>
        </div>
      </div>
    </div>
    </div>

  );
}

export default TotalCard;