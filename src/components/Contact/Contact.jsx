import "./Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { BsGithub } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rawgmly",
        "template_4l1doz9",
        form.current,
        "0FcrmD2WPLhzu_WKM"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent! Thank You For Your Time!!");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <BsGithub className="contact-option-icon" />
            <h4>Github</h4>
            <h5>github.com/Subhransu38</h5>
            <a href="https://github.com/Subhransu38" target="_blank">
              View My Github
            </a>
          </article>
          <article className="contact-option">
            <IoLogoWhatsapp className="contact-option-icon" />
            <h4>Whatsapp</h4>
            <h5>7894655185</h5>
            <a href="https://wa.me/917894655185">Whatsapp Me</a>
          </article>
          <article className="contact-option">
            <IoCallSharp className="contact-option-icon" />
            <h4>Phone</h4>
            <h5>7894655185</h5>
            <a href="tel:+917894655185">Call Me</a>
          </article>
          <article className="contact-option">
            <SiGmail className="contact-option-icon" />
            <h4>Email</h4>
            <h5>ssrath38@gmail.com</h5>
            <a href="mailto:ssrath38@gmail.com">Send an Email</a>
          </article>
        </div>
        <div className="form-map">
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="name" placeholder="Full Name" required />
              <input type="email" name="email" placeholder="Email" required />
              <input
                type="number"
                name="phone"
                placeholder="Phone Number"
                required
              />
              <textarea
                name="message"
                rows="7"
                placeholder="Type Your Message Here....."
                required
              ></textarea>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>

          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10649.454413672423!2d84.84412970685091!3d19.319265197164356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3d50ae2d339c8b%3A0xe4c5fb85dfe27dd0!2sAmbapua%2C%20Bima%20Nagar%2C%20Dura%20Bahadurpetta%2C%20Odisha%20760010!5e0!3m2!1sen!2sin!4v1661249740582!5m2!1sen!2sin"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
