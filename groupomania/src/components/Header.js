import '../css/style.css'
import logo from '../assets/images/logo.png'
import icon1 from "../assets/images/icon1.png" 

function Header (){
    function handleSubmit(e) {
        e.preventDefault()
        alert(e.target['my_input'].value)
    }
    return ( <header>
        <div className="container">
            <div className="header-data">
                <div className="logo">
                    <a href="index.html" title=""><img height="50" src={logo} alt="logo" /></a>
                </div>
                {/* <!--logo end--> */}
                <div className="search-bar">
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="my_input" defaultValue="Search..." />
                        <button type="submit"><i className="la la-search"></i></button>
                    </form>
                </div>
                {/* <!--search-bar end--> */}
                <nav>
                    <ul>
                        <li>
                            <a href="index.html" title="">
                                <span><img src={icon1} alt="icon" /></span>
                                Home
                            </a>
                        </li>
                    
                    </ul>
                </nav>
                {/* <!--nav end--> */}
                <div className="menu-btn">
                    <a href="http://www.example.com" title=""><i className="fa fa-bars"></i></a>
                </div>
                {/* <!--menu-btn end--> */}
                <div className="user-account">
                    <div className="user-info">
                        <img src="http://via.placeholder.com/30x30" alt="" />
                        <a href="http://www.example.com" title="">John</a>
                        <i className="la la-sort-down"></i>
                    </div>
                    <div className="user-account-settingss">
                        <h3>Online Status</h3>
                        <ul className="on-off-status">
                            <li>
                                <div className="fgt-sec">
                                    <input type="radio" name="cc" id="c5" />
                                    <label for="c5">
                                        <span></span>
                                    </label>
                                    <small>Online</small>
                                </div>
                            </li>
                            <li>
                                <div className="fgt-sec">
                                    <input type="radio" name="cc" id="c6" />
                                    <label for="c6">
                                        <span></span>
                                    </label>
                                    <small>Offline</small>
                                </div>
                            </li>
                        </ul>
                        <h3>Custom Status</h3>
                        <div className="search_form">
                            <form>
                                <input type="text" name="search" />
                                <button type="submit">Ok</button>
                            </form>
                        </div>
                        {/* <!--search_form end--> */}
                        <h3>Setting</h3>
                        <ul className="us-links">
                            <li><a href="profile-account-setting.html" title="">Account Setting</a></li>
                            <li><a href="http://www.example.com" title="">Privacy</a></li>
                            <li><a href="http://www.example.com" title="">Faqs</a></li>
                            <li><a href="http://www.example.com" title="">Terms & Conditions</a></li>
                        </ul>
                        <h3 className="tc"><a href="sign-in.html" title="">Logout</a></h3>
                    </div>
                    {/* <!--user-account-settingss end--> */}
                </div>
            </div>
            {/* <!--header-data end--> */}
        </div>
    </header>
    )
}

export default Header;