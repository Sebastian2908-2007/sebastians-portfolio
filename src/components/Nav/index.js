import { useState } from "react";



function Nav(props) {
    // state for displaying the right componenet]
    const { currentPage,setCurrentPage } = props;
    // state for about link
    const [isAboutActive,setIsAboutActive] = useState(false);
    // state for portfolio link
    const [isPortfolioActive,setIsPortfolioActive] = useState(false);
    // state for resume link
    const [isResumeActive,setIsResumeActive] = useState(false);
    // state for Contact link
    const [isContactActive,setIsContactActive] = useState(false);

    // functions below set state true for referenced section as well as setting false state for all the others probably not the most elegant solution but it works for now
    const setAllFalseAbout = () => {
        setIsAboutActive(true);
        setIsPortfolioActive(false);
        setIsResumeActive(false);
        setIsContactActive(false);
    }
    const setAllFalsePortfolio = () => {
        setIsAboutActive(false);
        setIsPortfolioActive(true);
        setIsResumeActive(false);
        setIsContactActive(false);
    }
    const setAllFalseResume = () => {
        setIsAboutActive(false);
        setIsPortfolioActive(false);
        setIsResumeActive(true);
        setIsContactActive(false);
    }
    const setAllFalseContact = () => {
        setIsAboutActive(false);
        setIsPortfolioActive(false);
        setIsResumeActive(false);
        setIsContactActive(true);
    }
  
    return (
        <header>
            <h2>Sebastian Bowen</h2>
            <nav className="container">
                <ul className="list-unstyled row">
                    <li className={`col-3 ${isAboutActive ? "navActive": null}`}
                    onClick={setAllFalseAbout}
                    
                    >
                        <span className="text-wrap fs-6" onClick={() => setCurrentPage('about')}>
                            About
                        </span>
                    </li>
                    <li className={`col-3 ${isPortfolioActive ? "navActive": null}`}
                    onClick={setAllFalsePortfolio}
                    >
                        <span className="text-wrap fs-6" onClick={() => setCurrentPage('portfolio')}>
                          Portfolio
                        </span>
                    </li>
                    <li className={`col-3 ${isResumeActive ? "navActive": null}`}
                    onClick={setAllFalseResume}
                    >
                        <span className="text-wrap fs-6" onClick={() => setCurrentPage('resume')}>
                           Resume
                        </span>
                    </li>
                    <li className={`col-3 ${isContactActive ? "navActive": null}`}
                    onClick={setAllFalseContact}
                    >
                        <span className="text-wrap fs-6" onClick={() => setCurrentPage('contact')}>
                           Contact
                        </span>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Nav;