import Svg from './Svg';
import './sidebar.scss';


const Sidebar = () => {


    return (
        <>
            <div className='aside_wrapper'>
                <div className='logo flex-justify-center'>
                    <h1>dashboard</h1>
                    <i className='toggle-icon'></i>
                </div>
                <div className='dashboard flex-center'>
                    <i className='dashboard-icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                            <path d="M14.3068 20.6777C14.855 21.1163 15.6339 21.116 16.1818 20.6771L24.4118 14.0836L24.9856 13.6264C25.7381 13.0267 25.7394 11.8835 24.9881 11.2822L16.1819 4.23389C15.6339 3.79534 14.8552 3.79533 14.3072 4.23389L5.49655 11.2858C4.74672 11.8859 4.74623 13.0264 5.49555 13.6271L6.0649 14.0836L14.3068 20.6777Z" fill="#6993FF" />
                            <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M16.1691 23.9335C15.6212 24.372 14.8426 24.3721 14.2947 23.9337L6.95388 18.0606C6.45874 17.6644 5.73488 17.7517 5.34816 18.2543C4.9666 18.7501 5.0592 19.4614 5.555 19.8431L14.3277 26.5955C14.8669 27.0106 15.618 27.0107 16.1573 26.5957L24.9259 19.8489C25.4259 19.4642 25.5191 18.7468 25.1339 18.2471C24.744 17.7414 24.015 17.6538 23.5164 18.0529L16.1691 23.9335Z" fill="#6993FF" />


                        </svg>
                    </i>
                    <h2>dashboard</h2>
                </div>

                {/* accordian desgin */}

                <div className='accordian_design'>
                    <span>CUSTOM</span>

                    <div className='accodianHead flex-justify-center'>
                        <div className='flex-center'>
                        <i className='dashboard-icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                                <path d="M14.3068 20.6777C14.855 21.1163 15.6339 21.116 16.1818 20.6771L24.4118 14.0836L24.9856 13.6264C25.7381 13.0267 25.7394 11.8835 24.9881 11.2822L16.1819 4.23389C15.6339 3.79534 14.8552 3.79533 14.3072 4.23389L5.49655 11.2858C4.74672 11.8859 4.74623 13.0264 5.49555 13.6271L6.0649 14.0836L14.3068 20.6777Z" fill="#6993FF" />
                                <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M16.1691 23.9335C15.6212 24.372 14.8426 24.3721 14.2947 23.9337L6.95388 18.0606C6.45874 17.6644 5.73488 17.7517 5.34816 18.2543C4.9666 18.7501 5.0592 19.4614 5.555 19.8431L14.3277 26.5955C14.8669 27.0106 15.618 27.0107 16.1573 26.5957L24.9259 19.8489C25.4259 19.4642 25.5191 18.7468 25.1339 18.2471C24.744 17.7414 24.015 17.6538 23.5164 18.0529L16.1691 23.9335Z" fill="#6993FF" />
                            </svg>
                        </i>
                        <h2>Applications</h2>
                        </div>
                     
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M10.3399 0.566988C10.6536 0.253701 11.1621 0.253701 11.4757 0.566988C11.7893 0.880275 11.7893 1.38821 11.4757 1.7015L6.65704 6.51484C6.353 6.81854 5.86344 6.82917 5.54648 6.53894L0.727811 2.12672C0.400848 1.82733 0.378761 1.31987 0.678476 0.993275C0.978191 0.666675 1.48621 0.644611 1.81318 0.943995L6.06501 4.83719L10.3399 0.566988Z" fill="white" />

                            </svg>
                        </i>
                    </div>

                    <ul>
                        <li className='flex-justify'> 
                        <div className='flex'>
                        <span>-</span> 
                        Users
                        </div>
                        
                        <Svg/>

                        </li>
                        <li className='flex-justify'>
                            <div className='flex'>
                            <span>-</span>  Contacts
                            </div>
                        <Svg/>
                        </li>

                        <li className='flex-justify'>
                            <div className='flex'>
                            <span>-</span>  Chat
                            </div>
                        <Svg/>
                        </li>
                    </ul>


                    <div className='accodianHead flex-justify-center'>
                        <div className='flex-center'>
                        <i className='dashboard-icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                                <path d="M14.3068 20.6777C14.855 21.1163 15.6339 21.116 16.1818 20.6771L24.4118 14.0836L24.9856 13.6264C25.7381 13.0267 25.7394 11.8835 24.9881 11.2822L16.1819 4.23389C15.6339 3.79534 14.8552 3.79533 14.3072 4.23389L5.49655 11.2858C4.74672 11.8859 4.74623 13.0264 5.49555 13.6271L6.0649 14.0836L14.3068 20.6777Z" fill="#6993FF" />
                                <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M16.1691 23.9335C15.6212 24.372 14.8426 24.3721 14.2947 23.9337L6.95388 18.0606C6.45874 17.6644 5.73488 17.7517 5.34816 18.2543C4.9666 18.7501 5.0592 19.4614 5.555 19.8431L14.3277 26.5955C14.8669 27.0106 15.618 27.0107 16.1573 26.5957L24.9259 19.8489C25.4259 19.4642 25.5191 18.7468 25.1339 18.2471C24.744 17.7414 24.015 17.6538 23.5164 18.0529L16.1691 23.9335Z" fill="#6993FF" />
                            </svg>
                        </i>
                        <h2>Pages</h2>
                        </div>
                     
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M10.3399 0.566988C10.6536 0.253701 11.1621 0.253701 11.4757 0.566988C11.7893 0.880275 11.7893 1.38821 11.4757 1.7015L6.65704 6.51484C6.353 6.81854 5.86344 6.82917 5.54648 6.53894L0.727811 2.12672C0.400848 1.82733 0.378761 1.31987 0.678476 0.993275C0.978191 0.666675 1.48621 0.644611 1.81318 0.943995L6.06501 4.83719L10.3399 0.566988Z" fill="white" />

                            </svg>
                        </i>
                    </div>

                    <ul>
                        <li className='flex-justify'> 
                        <div className='flex'>
                        <span>-</span> 
                        Home
                        </div>
                        
                        <Svg/>

                        </li>
                        <li className='flex-justify'>
                            <div className='flex'>
                            <span>-</span>  About
                            </div>
                        <Svg/>
                        </li>

                        <li className='flex-justify'>
                            <div className='flex'>
                            <span>-</span>  Service
                            </div>
                        <Svg/>
                        </li>
                    </ul>

                </div>
            </div>




        </>
    )
}

export default Sidebar;