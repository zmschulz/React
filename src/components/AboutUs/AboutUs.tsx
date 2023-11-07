
const About = () => {
    return (
      <>
      <div style={{padding: '25px'}}>
      <br />
      <h3>About Us
</h3>
      <br/>
      <p> We are a team of passionate individuals who love to create amazing things. Our mission is to provide high-quality services and products that exceed our customers' expectations.

</p>
      <hr />
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div className="card" style={{width: '25%', margin: '20px'}}>
          <img src="https://preview.redd.it/7jh5s0cmatf21.jpg?width=640&crop=smart&auto=webp&s=a0325ecfd97e5177bd6c192f305159c6852699d4" className="card-img-top" alt="..."/>
          <div className="card-body">
              <h5 className="card-title">Feature 1
</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              
          </div>
          </div>
      <div className="card" style={{width: '25%',height: '25%' , margin: '20px'}}>
          <img src="https://i.redd.it/08nkgizapvn91.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
              <h5 className="card-title">Feature 2
</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              
          </div>
      </div>
      <div className="card" style={{width: '25%', margin: '20px'}}>
          <img src="https://i.redd.it/05ncxmbtkrqb1.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
              <h5 className="card-title">Feature 3
</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              
          </div>
      </div>
      </div>
      <br />
      </div>
      
      </>
    )
  }
  
  export default About