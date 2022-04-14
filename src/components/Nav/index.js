function Nav(props) {
    const { currentPage,setCurrentPage } = props
    console.log(currentPage);
    return (
        <header>
            <h2>Sebastian Bowen</h2>
            <nav>
                <ul>
                    <li>
                        <span onClick={() => setCurrentPage('about')}>
                            About
                        </span>
                    </li>
                    <li>
                        <span onClick={() => setCurrentPage('portfolio')}>
                          Portfolio
                        </span>
                    </li>
                    <li>
                        <span onClick={() => setCurrentPage('resume')}>
                           Resume
                        </span>
                    </li>
                    <li>
                        <span onClick={() => setCurrentPage('contact')}>
                           Contact
                        </span>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Nav;