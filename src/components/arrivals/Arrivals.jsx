import NewArrivals from "./NewArrivals";
import './arrivals.scss';

const Arrivals = () => {
    return (
        <>
            <div className="arrivals">
                <NewArrivals />
                <div className="arrivals_details">
                    <ul className="prog_details">
                        <li className="flex-justify-center">
                            <div className="flex-center">
                                <span>
                                    <i className="plurk"></i>
                                </span>
                                <div className='progress_data'>
                                    <h4>Sant Outstanding</h4>
                                    <h6>
                                        <strong> FTP:</strong>
                                        bprow@bnc.cc</h6>
                                </div>
                            </div>
                            <div className="arrival_covers">
                                <div className="expense">
                                    <h2>$2,000,000</h2>
                                    <h6>Paid</h6>
                                </div>
                                <div className="btn approved">Approved</div>
                                <ul className="flex-center">
                                    <li>
                                        <i className="setting"></i>
                                    </li>
                                    <li>
                                        <i className="edit"></i>
                                    </li>
                                    <li>
                                        <i className="delete"></i>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="flex-justify-center">
                            <div className="flex-center">
                                <span>
                                    <i className="telegram"></i>
                                </span>
                                <div className='progress_data'>
                                    <h4>Telegram Application</h4>
                                    <h6>
                                        <strong> FTP:</strong>
                                        bprow@bnc.cc</h6>
                                </div>
                            </div>
                            <div className="arrival_covers">
                                <div className="expense">
                                    <h2>$4,600,000</h2>
                                    <h6>Paid</h6>
                                </div>
                                <div className="btn progress">Approved</div>
                                <ul className="flex-center">
                                    <li>
                                        <i className="setting"></i>
                                    </li>
                                    <li>
                                        <i className="edit"></i>
                                    </li>
                                    <li>
                                        <i className="delete"></i>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="flex-justify-center">
                            <div className="flex-center">
                                <span>
                                    <i className="cisco"></i>
                                </span>
                                <div className='progress_data'>
                                    <h4>Cisco Management</h4>
                                    <h6>
                                        <strong> FTP:</strong>
                                        bprow@bnc.cc</h6>
                                   
                                </div>
                            </div>
                            <div className="arrival_covers">
                                <div className="expense">
                                    <h2>$5,600,000</h2>
                                    <h6>Paid</h6>
                                </div>
                                <div className="btn success">Success</div>
                                <ul className="flex-center">
                                    <li>
                                        <i className="setting"></i>
                                    </li>
                                    <li>
                                        <i className="edit"></i>
                                    </li>
                                    <li>
                                        <i className="delete"></i>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="flex-justify-center">
                            <div className="flex-center">
                                <span>
                                    <i className="bebo"></i>
                                </span>
                                <div className='progress_data'>
                                    <h4>HR Management</h4>
                                    <h6>
                                        <strong> FTP:</strong>
                                        bprow@bnc.cc</h6>
                                </div>
                            </div>
                            <div className="arrival_covers">
                                <div className="expense">
                                    <h2>$57,000</h2>
                                    <h6>Paid</h6>
                                </div>
                                <div className="btn rejected">Rejected</div>
                                <ul className="flex-center">
                                    <li>
                                        <i className="setting"></i>
                                    </li>
                                    <li>
                                        <i className="edit"></i>
                                    </li>
                                    <li>
                                        <i className="delete"></i>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="flex-justify-center">
                            <div className="flex-center">
                                <span>
                                    <i className="kickstar"></i>
                                </span>
                                <div className='progress_data'>
                                    <h4>KTR Mobile Application</h4>
                                    <h6>
                                        <strong> FTP:</strong>
                                        bprow@bnc.cc</h6>
                                </div>
                            </div>
                            <div className="arrival_covers">
                                <div className="expense">
                                    <h2>$45,200,000</h2>
                                    <h6>Paid</h6>
                                </div>
                                <div className="btn progress">In Progress</div>
                                <ul className="flex-center">
                                    <li>
                                        <i className="setting"></i>
                                    </li>
                                    <li>
                                        <i className="edit"></i>
                                    </li>
                                    <li>
                                        <i className="delete"></i>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Arrivals