"use client"
import React, { useState } from 'react';
import { FiMail, FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';

const message = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID || '';
  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setIsSending(false);
        setIsSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => setIsSuccess(false), 3000); // Reset success state after 3 seconds
      })
      .catch((err) => {
        console.error('Failed to send email. Error:', err);
        setIsSending(false);
      });
  };

  return (
    <section id="message" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="bg-dark-700 w-16 h-16 mb-4 rounded-full text-3xl text-white grid place-items-center mx-auto">
            <FiMail />
          </div>
          <h2 className="text-4xl font-bold">Get in Touch</h2>
          <p className="mt-4 text-lg">
            Please fill out the form below to contact me. I'd love to hear from you!
          </p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 rounded text-black"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 rounded text-black"
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full px-4 py-2 rounded text-black"
          />
          <motion.button
            type="submit"
            disabled={isSending}
            className="bg-blue-500 text-white font-semibold w-full py-4 rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center justify-center">
              {isSending && (
                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 1 1 8 8 8 8 0 0 1-8-8zm8-6a6 6 0 0 0 0 12 6 6 0 0 0 0-12z"></path>
                </svg>
              )}
              {isSuccess && (
                <FiCheckCircle className="h-6 w-6 text-white" />
              )}
              {!isSending && !isSuccess && "Send Message"}
            </div>
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default message;
