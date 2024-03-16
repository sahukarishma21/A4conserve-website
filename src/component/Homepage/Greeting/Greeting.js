import React from 'react';
import Image from '../../../Assets/img5.jpg';
import Image2 from '../../../Assets/image6.png';
import Image3 from '../../../Assets/image7.png';
import Image4 from '../../../Assets/img8.jpg';
import './Greeting.css';

const Greeting = () => {
  return (
    <section className="program container" id="program">
      <h1 className='title'>CTO,CEO ETC...</h1>
      <h2 className="section-title">Meet every learner's needs</h2>
      <p className='text'>Looking to onboard new hires,upskill your sales team, or build trust
      with parternes or customers through training? You can do it all with a
      single integrated learning platform providing highly customized and
      AI-drive personalized experiences for each of you audiences.</p>
      <br/>
      <br/>
      <div className="row program-row">
        <div className="col program-card">
          <img className="program-card-image" src={Image} alt="Cardio & Strength" />
          <h4 className="card-title">EMPLOYEES</h4>
          <p className="card-description">
          Strengthen essential skills and 
      expedite time-to-productivity.
          </p>
        </div>
        <div className="col program-card">
          <img className="program-card-image" src={Image2} alt="Muscle Building" />
          <h4 className="card-title">PARTERNS</h4>
          <p className="card-description">
            Unify your brand message and
            provide essential resources.
          </p>
        </div>
        <div className="col program-card">
          <img className="program-card-image" src={Image3} alt="Stretch & Yoga" />
          <h4 className="card-title">CUSTOMERS</h4>
          <p className="card-description">
            Build trust,create value, and 
            develop long-term relationships.
          </p>
        </div>
        <div className="col program-card">
        <img className="program-card-image" src={Image4} alt="Stretch & Yoga" />
          <h4 className="card-title">SALESPEOPLE</h4>
          <p className="card-description">
            Connect learning to sales to boost
            win rates.
          </p>
        </div>
        </div>
      
    </section>
  );
};

export default Greeting;