import React from 'react'
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const navigate=useNavigate()
  return (
    <div className="dashbody">
<section className='section'>
  <div className="containerdash">
    <div className="row justify-content-center">
      <div className="col-8 col-md-6">
        <div className="jelly-card">
          <div className="card py-3 ">
            <div className="row">
              <div className="col-10 col-md-4 col-lg-3 jelly-bloc text-center text-md-start">
                <img
                  src="https://www.jellypir.at/CODEPEN/picture/autre/fichier4.png"
                  className="card-img-top card-pic slowfloat2s"
                  alt="meduse"
                />
              </div>
              <div className="col-12 col-md-8 col-lg-8">
                <div className="card-body">
                  <h5 className="card-title">Alpha</h5>
                  <div className="line" />
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                  <i className="fas fa-disease slowfloat3s" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<button onClick={()=>navigate('/ajoutClient')}>Ajout</button>
<button onClick={()=>navigate('/update/:id')}>Update</button>
<button onClick={()=>navigate('/affichageClient')}>View</button>
</div>
  )
}

export default Dashboard
