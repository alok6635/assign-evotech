import './progress.scss';
import progress from '../../assets/images/progress.png'
import dots from '../../assets/images/dots.png'
import ProgressDetails from './ProgressDetails';

const Progress=()=>{
    return(
        <>
        <div className="progress_cover">
            <div className='progress_bar'>
                <img src={progress} alt="" />
            </div>
            <div className='progress_status'>
                <div className='sales'>
                <span>Sales Progress</span>
                <div>
                <img src={dots} alt="dots" />
                </div>
                </div>
                <ProgressDetails/>
            </div>
        </div>
        </>
    )
}

export default Progress