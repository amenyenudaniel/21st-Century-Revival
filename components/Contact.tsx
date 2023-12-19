"use client";
import emailjs from "@emailjs/browser";

import { useRef, useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_9uvmkfq",
        "template_h1cz467",
        {
          from_name: form.name,
          to_name: "Daniel Amenyenu",
          from_email: form.email,
          to_email: "amenyenudaniel321@gmail.com",
          message: form.message,
        },
        "mx4EEn9eZal5w83lc"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  return (
    <div id="contact">
      <div
        className={` flex xl:flex-row flex-col-reverse gap-10 overflow-hidden justify-center padding `}
      >
        <div className="flex-[0.75] rounded-2xl">
          <h1 className="text-center lg:text-[80px] sm:text-[50px] xs:text-[30px] text-[23px] italic font-bold mb-[1rem]">
            Contact Us
          </h1>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col ">
              <span className="text-black text-[20px] font-medium mb-4">
                Your Name
              </span>
              <input
                required
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-transparent border border-black py-4 px-6  text-black rounded-lg outline-none   text-[18px] placeholder-black"
              />
            </label>
            <label className="flex flex-col  ">
              <span className="text-black text-[20px] font-medium mb-4">
                Your email
              </span>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="bg-transparent border border-black py-4 px-6  text-black rounded-lg outline-none   text-[18px] placeholder-black"
              />
            </label>
            <label className="flex flex-col mont text-black">
              <span className="text-black text-[20px] font-medium mb-4">
                Your Message
              </span>
              <textarea
                required
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-transparent border border-black py-4 px-6  text-black rounded-lg outline-none   text-[18px] placeholder-black"
              />
            </label>

            <button
              type="submit"
              className="outline-none py-2 sm:px-4  mt-[2rem] w-fit  px-3 text-black border border-black mt-[2rem] sm:text-[22px] text-[18px] font-bold rounded-[5px]  transition hover:text-white hover:bg-black"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
