import './hero_header.scss'

const HeroHeader = () => {
    return (
        <>
            <div className="hero_header flex-justify-center">
                <div className="show_pannel">
                    <span>Dashboard</span>
                    <strong>Add New</strong>
                </div>
                <div className="routine_task flex-center">
                    <ul className='flex-center'>
                        <li className='active'>Today</li>
                        <li>Month</li>
                        <li>Year</li>
                        <li className='active'>Actions</li>
                    </ul>
                    <i></i>
                </div>

            </div>

        </>
    )
}


export default HeroHeader