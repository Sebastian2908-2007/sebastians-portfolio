function Resume() {
    return(
        <div className='d-flex justify-content-center'>
        <div className='d-flex flex-column justify-content-center justify-content-evenly w-75 min-vh-100'>
            <a className='d-flex justify-content-center' target="_blank" rel="noreferrer" alt="my badge" href="https://www.credly.com/badges/29dff5f7-ab06-4ab6-81bc-977bb47070af/public_url">Badge Details</a> 
            <div className='d-flex justify-content-center'>
            <img  height="281" width="281" alt="sebastians badge" src={require('../../assets/images/bootcamp-badge.png')} />
            </div> 
            <a href={require("../../assets/resume/Sebastians-Resume.pdf")} download='Sebastians Resume'>
            <p className='d-flex justify-content-center' >Click to download my resume</p>
            </a>
          
        </div>
        </div>
    );
};

export default Resume;