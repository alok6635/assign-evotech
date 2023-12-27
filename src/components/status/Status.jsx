import './status.scss';
// import graphs  from '../../assets/images/graph.JPG';

const Status=()=>{
    return(
        <>
      <div className="status">
      <div className="new_arrivals flex-justify-center">
        <div>
        <strong>Recent Stats</strong>
        <p>More than 400+ new members</p>
        </div>
        <div className="calender">
            <ul className='flex-center'>
                <li>Month</li>
                <li>Week</li>
                <li className='newActive'>Day</li>
            </ul>
        </div>

      </div>
      {/* <img src={graphs} alt=""/> */}
      </div>
        </>
    )
}

export default Status;