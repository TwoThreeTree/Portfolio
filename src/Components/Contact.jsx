import React, { useState, useRef } from "react";
import { inViewHandler } from "../animationHandler";
import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";
import emailjs from "emailjs-com";
import { Store } from "react-notifications-component";

export const Contact = () => {
  const animation = useAnimation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [emailStatus, setEmailStatus] = useState("");
  const form = useRef();

  const postNotification = (message) => {
    Store.addNotification({
      title: { message },
      message: "teodosii@react-notifications-component",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true,
      },
    });
  };
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
        // console.log(result.text);
        setEmailStatus("success");
        console.log(emailStatus);
      })
      .catch((err) => {
        // setEmailStatus("error");
        alert(
          "Failed sending this email, please check your connection and try again"
        );
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
                <h1 className="text-5xl font-bold text-violet-500">
                  Contact Me
                </h1>
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
                className="space-y-8 mt-2 bg-none px-5 py-5 lg:w-1/2 sm:w-full "
              >
                <div className="flex gap-8">
                  <input
                    className="input rounded-[20px]"
                    name="name"
                    type="text"
                    placeholder="your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <input
                    className="input rounded-[20px]"
                    type="email"
                    name="email"
                    placeholder="your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="flex flex-col  gap-8">
                  <input
                    className="input rounded-[20px]"
                    type="text"
                    name="subject"
                    placeholder="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />

                  <textarea
                    className="textarea rounded-[20px] whitespace-pre-wrap"
                    type="text"
                    name="message"
                    placeholder="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div className="flex flex-row gap-[20px]">
                  <button className="btn btn-lg w-1/3 rounded-[20px] bg-purple-900 hover:bg-purple-700">
                    Send
                  </button>
                  {emailStatus === "empty" && (
                    <div
                      class="bg-red-100 border border-red-400 text-red-700 px-4 w-[fit-content] py-3 rounded-[20px] relative"
                      role="alert"
                    >
                      <strong class="font-bold">Imcompleted Form</strong>
                      <span class="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
                    </div>
                  )}
                  {emailStatus === "success" && (
                    <div
                      class="bg-green-100 border border-green-400 text-green-700 px-4 w-[fit-content] py-3 rounded relative"
                      role="alert"
                    >
                      <strong class="font-bold">Email Sent</strong>
                      <span class="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </InView>
  );
};
