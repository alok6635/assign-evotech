import './header.scss';


const Header=()=>{
    return(
        <>
        <header className='flex header'>
<div className='header-panel'>
<ul className='flex'>
    <li className='icon-one'>
    </li>
    <li className='icon-two'>
    </li>
    <li className='icon-third'>
    </li>
    <li className='icon-fourth'>
    </li>
</ul>
</div>
<div className='user-info flex-center'>
    <span>Nick Thomas</span>
    <strong>N</strong>
</div>
        </header>
        
        </>
    )
}
export default Header;