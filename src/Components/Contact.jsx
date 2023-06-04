import React, { useState, useRef } from "react";
import { inViewHandler } from "../animationHandler";
import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";
import emailjs from "emailjs-com";

export const Contact = () => {
  const animation = useAnimation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [emailStatus, setEmailStatus] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      setEmailStatus("empty");
      return;
    }

    const templateParams = {
      from_name: name,
      to_name: "Kai",
      subject: subject,
      message: message,
      reply_to: email,
    };

    console.log(e.target);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then((result) => {
        console.log(result.text);
        setEmailStatus("success");
      })
      .catch((error) => {
        console.log(error.text);
        setEmailStatus("error");
      });
  };

  return (
    <InView onChange={(inView) => inViewHandler(inView, animation)}>
      <section id="contact" className="section bg-primary">
        <div className="container mx-auto">
          <motion.div
            className=""
            initial={{ opacity: 0, scale: 0.5 }}
            animate={animation}
          >
            <div className="flex flex-col lg:gap-x-8  lg:flex-row justify-around items-center">
              <div className="flex text-center flex-col lg:w-1/3 h-[200px] justify-between sm:w-full sm:mb-5">
                <h1 className="text-3xl">Contact Me</h1>
                <p>
                  Thank you for visiting my portfolio! If you have any inquiries
                  or would like to discuss potential collaborations or projects,
                  please feel free to reach out to me. I'm always excited to
                  connect with new people in the industry.
                </p>

                <p>Looking forward to hearing from you!</p>
              </div>
              <form
                ref={form}
                onSubmit={sendEmail}
                className="space-y-8 bg-black px-5 py-5 lg:w-1/2 sm:w-full "
              >
                <div className="flex gap-8">
                  <input
                    className="input"
                    name="name"
                    type="text"
                    placeholder="your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <input
                    className="input"
                    type="email"
                    name="email"
                    placeholder="your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="flex flex-col gap-8">
                  <input
                    className="input"
                    type="text"
                    name="subject"
                    placeholder="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />

                  <textarea
                    className="textarea whitespace-pre-wrap"
                    type="text"
                    name="message"
                    placeholder="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <button className="btn btn-lg w-1/3 bg-blue-700 hover:bg-blue-900">
                  Send
                </button>
              </form>
              {/* <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
              </form> */}
            </div>

            <div className="email-status mt-4">
              {emailStatus === "empty" && <p>please fill out all fields</p>}
              {emailStatus === "success" && <p>email sent</p>}
            </div>
          </motion.div>
        </div>
      </section>
    </InView>
  );
};
