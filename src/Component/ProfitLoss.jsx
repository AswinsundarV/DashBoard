
import { FaCheckCircle } from 'react-icons/fa';
import { IoIosTrendingUp } from "react-icons/io";

export default function ProfitLoss() {
    return (
        <div className='profitcontainer'>
            
        <div className='checkcontainer'>
          <FaCheckCircle className="icon" />
            </div>
             <div className='profit'>
              <h2>₹ 1,20,000</h2>
              <IoIosTrendingUp className="icon" />
            </div>
            <div className='profit'>
                <p>Sales</p>
              <h4>₹ 1,20,000</h4>
              <IoIosTrendingUp className="icon" />
            </div>
              <div className='profit'>
                <p>Purchase</p>
              <h4>₹ 1,20,000</h4>
              <IoIosTrendingUp className="icon" />
            </div>
              <div className='profit'>
                <p>Expense</p>
              <h4>₹ 1,20,000</h4>
              <IoIosTrendingUp className="icon" />
              </div>
        </div>
      
  )
}
