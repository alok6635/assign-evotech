import Header from "../Header/Header"
import HeroHeader from "../Header/HeroHeader"
import MainDashboard from "../content/MainDashboard"
import './main.scss'

const Main=()=>{
    
    return(
        <>
<div className="main">
<Header/>
<HeroHeader/>
<MainDashboard/>
</div>


        </>
    )
}

export default Main