function About() {
    return (
        <div className="d-flex flex-column justify-content center about-container">
            <div className="d-flex flex-column flex-lg-row" >
        <div className="card" >
               <img src={require('../../assets/about-images/my-interests.png')} className="card-img-top about-img" alt="nice"/>
          <div className="card-body">
            <p className="card-text">This is why I do what I do the programing the freelancing. 
            Because there is nothing better than spending a day in 
            a beautiful place with this company, it doesn't even have to be a beautiful 
            place with them any place will do.</p>
          </div>
       </div>  

        <div className="card" >
               <img src={require('../../assets/about-images/tree.png')} className="card-img-top" alt="nice"/>
          <div className="card-body">
            <p className="card-text">If I'm not spending time with computers and machines I'm definitely looking for more friends like this!.</p>
          </div>
       </div>  
            </div>

        <div className="d-flex flex-column flex-lg-row">
         <div className="card " >
               <img  src={require('../../assets/about-images/camping-interest.png')}  className="card-img-top" alt="nice"/>
          <div className="card-body">
            <p className="card-text">No electricity out here! Who needs them when I've got her!.</p>
          </div>
       </div>  
       
        <div className="card ">
               <img src={require('../../assets/about-images/interest-family.png')} className="card-img-top" alt="nice"/>
          <div className="card-body">
            <p className="card-text">No mortal can escape the jaws of time...Spend it with those that matter the most..</p>
          </div>
       </div>  
    </div>
  </div>
    )
};
export default About;