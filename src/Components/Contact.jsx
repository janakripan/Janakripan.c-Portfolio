'use client';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { VT323, Roboto_Condensed } from 'next/font/google';

const head = VT323({
  subsets: ['latin'],
  weight: ['400'],
});

const robo = Roboto_Condensed({
  subsets: ['greek-ext'],
  weight: ['600'],
});

const Contact = () => {
  const [data,setData]=useState({
    name:'',
    email:'',
    phone:'',
    subject:'',
    message:''
  })

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setData(prev=>({...prev,[name]:value}))
  }
  const onSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = {
      access_key: "963943f5-c17f-4805-8dbc-df34f497baec",
      name: data.name,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
    };
    console.log(formData);
    
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        Swal.fire({
          title: "Success",
          text: "Message Sent Successfully!",
          icon: "success",
        });
        setData({
          name:'',
          email:'',
          phone:'',
          subject:'',
          message:''
        });
      } else {
        Swal.fire({
          title: "Error",
          text: data.message || "Something went wrong.",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Network or server error.",
        icon: "error",
      });
    }
  };
  return (
    <div className="text-white px-5 py-2 relative">
      <div className="absolute top-0 right-0 w-96 bg-gradient-to-bl from-blue-500/20 via-blue-600/15 to-transparent rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute -bottom-20 -left-20 w-[120%] h-50 bg-gradient-to-t from-blue-400/25 via-blue-500/18 to-transparent blur-2xl animate-pulse-glow" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-gradient-to-r from-purple-500/15 to-indigo-500/20 rounded-full blur-2xl animate-float"></div>
      <div className="flex items-center justify-center relative z-10">
        <p className={`px-8 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-white/10 shadow-xl text-lg tracking-widest ${head.className}`}>
          CONTACT ME
        </p>
      </div>

      <div className="w-full flex flex-col md:flex-row">
        {/* Contact Form */}
        <div className="md:w-[50%] order-2 md:order-1 w-full flex flex-col gap-5 items-center justify-center md:px-10 py-8 relative z-10">
          <form
            onSubmit={onSubmit}
            className={`flex flex-col gap-4 p-6 max-w-[400px] w-full h-auto bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl ${robo.className}`}
          >
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="bg-white/10 backdrop-blur-sm border border-white/20 py-3 px-4 w-full rounded-xl outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all text-white placeholder-gray-300"
            />
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="bg-white/10 backdrop-blur-sm border border-white/20 py-3 px-4 w-full rounded-xl outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all text-white placeholder-gray-300"
            />
            <input
              type="tel"
              name="phone"
              value={data.phone}
              onChange={handleChange}
              required
              placeholder="Enter your mobile number"
              className="bg-white/10 backdrop-blur-sm border border-white/20 py-3 px-4 w-full rounded-xl outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all text-white placeholder-gray-300"
            />
            <input
              type="text"
              name="subject"
              value={data.subject}
              onChange={handleChange}
              required
              placeholder="Enter subject"
              className="bg-white/10 backdrop-blur-sm border border-white/20 py-3 px-4 w-full rounded-xl outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all text-white placeholder-gray-300"
            />
            <textarea
              name="message"
              value={data.message}
              onChange={handleChange}
              required
              className="bg-white/10 backdrop-blur-sm border border-white/20 py-3 px-4 w-full rounded-xl outline-none h-[150px] resize-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all text-white placeholder-gray-300"
              placeholder="Enter your message"
            ></textarea>
            <button
              type="submit"
              className="w-[160px] h-[45px] self-center bg-gradient-to-r from-blue-500 to-purple-600 cursor-pointer hover:from-blue-600 hover:to-purple-700 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Submit
            </button>
          </form>
          <p className="text-gray-400 italic">You can also reach me via social media.</p>
        </div>

        {/* Globe + Quote */}
        <div className="flex-1 p-6 md:p-8 md:order-2 flex flex-col items-center justify-center gap-6 perspective-container relative z-10">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-2xl"></div>
            <div className="glob w-[300px] h-[300px] bg-white rounded-full relative shadow-2xl"></div>
          </div>

          <blockquote className="text-center text-xl md:text-2xl bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent font-semibold italic leading-relaxed max-w-xl mt-6 backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
            “Communication is the bridge between confusion and clarity — reach out and let's build that bridge.”
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Contact;
