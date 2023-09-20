import React, { useRef, useState } from "react";
import myImg2 from "../assets/img/RbImg2b.webp";
import emailjs from "@emailjs/browser";
import { MdMail } from "react-icons/md";
import { BiSolidPhone } from "react-icons/bi";
import { SocialLinks } from "../CommoonComponents/SocialLinks";

export default function Contact() {
  const links = [
    {
      id: 1,
      child: (
        <>
          <MdMail />
          <span>rushibutani@gmail.com</span>
        </>
      ),
      href: "mailto:rushibutani@gmail.com",
      arealabel: "Email: rushibutani@gmail.com",
    },
    {
      id: 2,
      child: (
        <>
          <BiSolidPhone />
          <span>+919638293911</span>
        </>
      ),
      href: "tel:+919638293911",
      arealabel: "Phone: +919638293911",
    },
  ];

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

  return (
    <>
      <section id="contact">
        <p className="section-text-p1">Get in Touch</p>
        <h1 className="title mb-40 font-heading">CONTACT ME</h1>
        <div className="contact-main-section">
          <div className="first-half-contact flex flex-col justify-center items-center">
            <div className="contact-img">
              <img
                src={myImg2}
                width={1211}
                height={1280}
                loading="lazy"
                alt="Rushi Profile"
              />
            </div>
            <ul className="contact-social-container">
              {links.map(({ id, child, href, arealabel }) => (
                <li key={id}>
                  <a
                    href={href}
                    className="contact-social-content"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={arealabel}
                  >
                    {child}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div id="form">
            <form ref={form}>
              {errMsg && <p className="err-msg">{errMsg}</p>}
              {successMsg && <p>{successMsg}</p>}
              <div>
                <label htmlFor="name" className="form-p">
                  NAME
                </label>
                <input
                  id="name"
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
                <label htmlFor="phonenumber" className="form-p">
                  PHONE NUMBER
                </label>
                <input
                  id="phonenumber"
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
                <label htmlFor="email" className="form-p">
                  EMAIL
                </label>
                <input
                  id="email"
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
                <label htmlFor="subject" className="form-p">
                  SUBJECT
                </label>
                <input
                  id="subject"
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
                <label htmlFor="message" className="form-p">
                  MESSAGE
                </label>
                <textarea
                  id="message"
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
                  className="form-btn font-title"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer id="footer">
        <SocialLinks />
        <p>Copyright &#169; 2023 Rushi Butani. All Rights Reserved.</p>
      </footer>
    </>
  );
}
