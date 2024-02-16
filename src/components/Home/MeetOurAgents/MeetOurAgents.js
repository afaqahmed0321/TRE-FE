import { getAllAgentsApi } from '../../../store/api';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

export default function MeetOurAgents() {
  const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    adaptiveHeight: true,

    responsive: [{
      breakpoint: 1292,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false
      }
    }, {
      breakpoint: 993,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false
      }
    }, {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }
    }]
  }

  const [agentList, setAgentList] = useState([]);

  useEffect(() => {
    getAllAgentsApi()
      .then((res) => {
        setAgentList(res?.data?.result);
      })
      .catch(() => { });
  }, []);

  return (
    <>
      <section className="team bg-white rec-pro">
        <div className="container-fluid">
          <div className="sec-title">
            <h2>
              <span>Meet Our </span>Agents
            </h2>
            <p>Our Agents are here to help you</p>
          </div>
          <div className="row team-all">

          </div>
          <Slider {...settings}>
            {/*Team Block*/}


            {agentList?.map((agent) => {
              return (
                <>
                  <div
                    className="team-block "
                    data-aos="fade-up"
                    data-aos-delay={150}
                  >
                    <div className="inner-box team-details">
                      <div className="image team-head">
                        <a href="agents-listing-grid.html">
                          <Link to={`/agentdetails/${agent._id}`}>
                            <img src={process.env.REACT_APP_IMAGE_URL + agent.photo} alt="" />
                          </Link>
                        </a>
                        
                      </div>
                      <div className="lower-box">
                        <h3>
                          <Link to={`/agentdetails/${agent._id}`}>
                            {agent.firstName}
                          </Link>
                        </h3>
                        <div className="designation">Real Estate Agent</div>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}




            {/*Team Block*/}
          </Slider>

        </div>
      </section>
    </>
  );
}
