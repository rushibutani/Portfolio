import React, { useRef, useState } from "react";
import myImg2 from "../assets/img/RbImg2b.jpg";
import emailjs from "@emailjs/browser";
import { Link } from "react-scroll";
import { FaLinkedin } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { GrInstagram } from "react-icons/gr";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { BiSolidPhone } from "react-icons/bi";

export default function Contact() {
  const contactNumber = "+919638293911";
  const handlecontactNumberClick = () => {
    window.location.href = `tel:${contactNumber}`;
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_b2dfn2m",
        "template_x76rmb7",
        form.current,
        "HkADYiBSymTkzi_iX"
      )
      .then(
        (result) => {
          console.log(result);
          // alert("Message sent successfully! Thanks for connecting with me.");
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (userName === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Plese give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(
        `${userName}, your message has been sent successfully! Thanks for contacting.`
      );
      setErrMsg("");
      setUserName("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");

      if (!errMsg) {
        sendEmail(e);
      }
    }
  };

  const emailAddress = "rushibutani@gmail.com";
  const mailToButton = () => {
    const mailtoLink = `mailto:${emailAddress}`;
    window.location.href = mailtoLink;
  };

  const handleLinkedInClick = () => {
    const linkedinProfileUrl = "https://in.linkedin.com/in/rushibutani";
    window.open(linkedinProfileUrl, "_blank");
  };

  const handleFacebookClick = () => {
    const facebookProfileUrl = "https://www.facebook.com/rushibutani";
    window.open(facebookProfileUrl, "_blank");
  };

  const handleInstagramClick = () => {
    const instagramProfileUrl = "https://www.instagram.com/rushibutani/";
    window.open(instagramProfileUrl, "_blank");
  };

  const handleTwitterClick = () => {
    const twitterProfileUrl = "https://twitter.com/rushibutani_";
    window.open(twitterProfileUrl, "_blank");
  };

  return (
    <>
      <section id="contact">
        <p className="section-text-p1">Get in Touch</p>
        <h1 className="title mb-40 font-heading">Contact Me</h1>
        <div className="contact-main-section">
          <div className="first-half-contact flex flex-col justify-center items-center">
            <div className="flex items-center contact-img">
              <img src={myImg2} alt="Rushi Profile" />
            </div>

            <div className="contact-social-container">
              <div className="contact-social-content link-mail">
                <MdMail className="icon" onClick={mailToButton} />
                <p>
                  <Link
                    to="mailto:rushibutani@gmail.com"
                    target="_blank"
                    onClick={mailToButton}
                    className="link-a font-heading"
                  >
                    rushibutani@gmail.com
                  </Link>
                </p>
              </div>
              <div className="contact-social-content link-linkedin">
                <BiSolidPhone
                  className="icon"
                  onClick={handlecontactNumberClick}
                />
                <p>
                  <Link
                    to={`tel:${contactNumber}`}
                    target="_blank"
                    className="link-a link-a-phone font-heading"
                    onClick={handlecontactNumberClick}
                  >
                    +919638293911
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div id="form">
            <form ref={form}>
              {errMsg && <p className="err-msg">{errMsg}</p>}
              {successMsg && <p>{successMsg}</p>}
              <div>
                <p className="form-p">NAME</p>
                <input
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                  name="name"
                  className={`${
                    errMsg === "Username is required!" && "alertcss"
                  } w-full input`}
                  type="text"
                  onClick={() => setErrMsg(false)}
                />
              </div>
              <div>
                <p className="form-p">PHONE NUMBER</p>
                <input
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                  name="phonenumber"
                  className={`${
                    errMsg === "Phone number is required!" && "alertcss"
                  } w-full input`}
                  type="text"
                  onClick={() => setErrMsg(false)}
                />
              </div>
              <div>
                <p className="form-p">EMAIL</p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  name="email"
                  className={`${
                    errMsg === "Please give your Email!" && "alertcss"
                  } w-full input`}
                  type="email"
                  onClick={() => setErrMsg(false)}
                />
              </div>
              <div>
                <p className="form-p">SUBJECT</p>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  name="subject"
                  className={`${
                    errMsg === "Plese give your Subject!" && "alertcss"
                  } w-full input`}
                  type="text"
                  onClick={() => setErrMsg(false)}
                />
              </div>
              <div>
                <p className="form-p">MESSAGE</p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  name="message"
                  className={`${
                    errMsg === "Message is required!" && "alertcss"
                  } resize-none input`}
                  rows="5"
                  onClick={() => setErrMsg(false)}
                ></textarea>
              </div>
              <div className="w-full flex items-center justify-center">
                <button
                  type="submit"
                  onClick={handleSend}
                  className="form-btn font-heading"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer id="footer">
        <div className="flex show-menu-icon-container">
          <span className="show-menu-icon" onClick={handleLinkedInClick}>
            <FaLinkedin />
          </span>
          <span className="show-menu-icon" onClick={handleInstagramClick}>
            <GrInstagram />
          </span>
          <span className="show-menu-icon" onClick={handleTwitterClick}>
            <BsTwitter />
          </span>
          <span className="show-menu-icon" onClick={handleFacebookClick}>
            <BsFacebook />
          </span>
        </div>
        <p>Copyright &#169; 2023 Rushi Butani. All Rights Reserved.</p>
      </footer>
    </>
  );
}
