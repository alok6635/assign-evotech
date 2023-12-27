import Progress from './Progress';
import './main_dashboard.scss';
import library from '../../assets/images/library.png';
import blocks  from '../../assets/images/blocks.png';
import Movies  from '../../assets/images/Movies.png';
import Equalizer  from '../../assets/images/Equalizer.png';
import Shield  from '../../assets/images/Shield.png';
import Arrivals from '../arrivals/Arrivals';
import Status from '../status/Status';



const MainDashboard = () => {
    return (
        <>
            <div className="content">
                <div className='dashboard_plans'>
                    <ul className='flex-center'>
                        <li>
                            <img src={library} alt="" />
                            <span>Saas Application</span>
                        </li>
                        <li>
                            <img src={blocks} alt="" />
                            <span>Main Categories</span>
                        </li>
                        <li>
                            <img src={Movies} alt="" />
                            <span>Video Tutorials</span>
                        </li>
                        <li>
                            <img src={Equalizer} alt="" />
                            <span>Sales Statistics</span>
                        </li>
                        <li>
                            <img src={Shield} alt="" />
                            <span>ARC Security</span>
                        </li>
                    </ul>
                </div>
                <Progress/>
                <Arrivals/>
                <Status/>
            </div>

        </>
    )
}
export default MainDashboard;