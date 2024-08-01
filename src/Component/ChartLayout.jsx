import "./chartlayout.css";
import TotalSales from "./TotalSales";
import OrderSummary from "./OrderSummary";
import TotalOrder from "./TotalOrder";
import TotalExp from "./TotalExp";
import TotalReceivable from "./TotalReceivable";
import DueAmount from "./DueAmount";
import SalesAmount from "./SalesAmount";
import ProfitLoss from "./ProfitLoss";


function Stats() {
  return (
   <>
      <div className='cardsmain'>
          <div className='cards_content' >
            <div className='cardinside'>
            <h4>Total Sales and Purchase</h4>
            <div className="chart-container">
            <TotalSales />
            </div>
              </div>
          </div>
           <div className='cards_content' >
            <div className='cardinside'>
              <h4>Profit and Loss</h4>
          </div>
          <div>
            <ProfitLoss/>
          </div>
          </div>
          </div>
          

           <div className='cardsmain2'>
          <div className='cards_content' >
            <div className='cardinside'>
            <h4>Order Summary</h4>
            <div className="chart-container">
              <OrderSummary/>
            </div>
              </div>
              </div>
            <div className='cards_content' >
            <div className='cardinside'>
            <h4>Total Order Fulfillment vs Order Incoming</h4>
            <div>
              <TotalOrder />
            </div>
              </div>
             </div>
            </div>
          
          <div className='cardsmain3'>
          <div className='cards_content' >
            <div className='cardinside'>
              <h4>Total Receivables and Payables</h4>
          </div>
          <div>
            <TotalReceivable/>
          </div>
              </div>
            <div className='cards_content' >
            <div className='cardinside'>
              <h4>Total Expenditure</h4>
          </div>
          <div>
            <TotalExp/>
          </div>
             </div>
           </div>
      
         <div className='cardsmain4'>
          <div className='cards_content' >
            <div className='cardinside'>
              <h4>Top 5 Customers by Due Amount</h4>
          </div>
          <div>
            <DueAmount/>
          </div>
              </div>
             <div className='cards_content' >
            <div className='cardinside'>
              <h4>Top 5 Customers by Sales Amount</h4>
          </div>
          <div>
            <SalesAmount/>
          </div>
          </div>
     </div>
 </>
  );
}

export default Stats;