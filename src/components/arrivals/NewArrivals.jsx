import './new_arrivals.scss'

const NewArrivals=()=>{
    return(
        <>
      <div className="new_arrivals flex-justify-center">
        <div>
        <strong>New Arrivals</strong>
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
        </>
    )
}
export default NewArrivals