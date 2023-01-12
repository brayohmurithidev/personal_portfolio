import React, { useState } from "react";
import Typical from "react-typical";
import { toast } from "react-toastify";
import "./ContactMe.css";
import imgBack from "../../../src/images/mailz.jpeg";
import load1 from "../../../src/images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(
    fadeInScreenHandler
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [boolean, setBoolean] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     "portfolio_service",
    //     "contact_me",
    //     e.target,
    //     "Evtmb-q7Qv4UDGjG-"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
    e.target.reset();
  };

  // const submitForm = async (e) => {
  //   e.preventDefault();

  //   try {
  //     let data = {
  //       name,
  //       email,
  //       message
  //     };

  //     setBoolean(true);
  //     const res = await axios.post(`/contact`, data);
  //     if(name.length === 0 || email.length === 0 || message.length === 0){
  //       setBanner(res.data.msg);
  //       toast.error(res.data.msg);
  //       setBoolean(false);
  //     }else if(res.status === 200){
  //       setBanner(res.data.msg);
  //       toast.success(res.data.msg);
  //       setBoolean(false);

  //       setName("")
  //       setEmail("")
  //       setMessage("")
  //     }

  //   } catch (error) {
  //     console.log(error);
  //   }

  // }
  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Keep in Touch"} title={"Contact Me"} />

      <div className="central-form">
        <div className="col">
          <h2 className="title">
            {""}
            <Typical loop={Infinity} steps={["Get In Touch 📧", 1000]} />
          </h2>
          <a
            href="https://www.facebook.com/Deejay-Dephaz-325353291351524"
            target="_blank"
          >
            <i className="fa fa-facebook-square"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="https://github.com/brayohmurithidev" target="_blank">
            <i className="fa fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/brian-murithi/" target="_blank">
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img src={imgBack} alt="image not found.." />
          </div>
          {/* Contact Details */}
          <div className="contact-details">
            <div className="contact-content">
              <i class="fa fa-phone fa-fw" /> <span> Call Me now</span>
              <Typical loop={Infinity} steps={["+254 706 134 387", 1000]} />
            </div>
            <div className="contact-content">
              <i class="fa-regular fa-envelope" /> <span>Email:</span>
              <Typical
                loop={Infinity}
                steps={["murithibrianm@gmail.com", 1000]}
              />
            </div>
          </div>
          {/* END OF CONTACT DETAILS */}
          {/* <form onSubmit={sendEmail}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} value={name} name="name" />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              onChange={handleEmail}
              name="email"
              value={email}
            />

            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              name="message"
              onChange={handleMessage}
              value={message}
            />

            <div class="send-btn">
              <button type="submit">
                send
                <i class="fa fa-paper-plane" />
                {boolean ? (
                  <b className="load">
                    <img src={load1} alt="img not responding" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form> */}
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
