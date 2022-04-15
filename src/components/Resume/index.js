function Resume() {
    return(
        <div>
            <a href={require("../../assets/resume/Sebastians-Resume.pdf")} download='Sebastians Resume'>
            <p>Click to download my resume</p>
            </a>
            <img alt="sebastians badge" src={require('../../assets/images/bootcamp-badge.png')} />
          <a target="_blank" rel="noreferrer" alt="my badge" href="https://www.credly.com/badges/29dff5f7-ab06-4ab6-81bc-977bb47070af/public_url">Badge Details</a>  
        </div>
    );
};

export default Resume;