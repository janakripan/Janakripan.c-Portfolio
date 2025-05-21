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
    <div className="text-white px-5 pt-2">
      <div className="flex items-center justify-center">
        <p className={`px-4 py-1 rounded-full bg-[rgba(201,198,198,0.15)] ${head.className}`}>
          CONTACT ME
        </p>
      </div>

      <div className="w-full flex flex-col md:flex-row">
        {/* Contact Form */}
        <div className="md:w-[50%] order-2 md:order-1 w-full flex flex-col gap-5 items-center justify-center md:px-10 pt-10 pb-0">
          <form
            onSubmit={onSubmit}
            className={`flex flex-col gap-3 p-5 max-w-[400px] w-full h-auto border border-gray-500 rounded-2xl ${robo.className}`}
          >
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="border py-1 px-2 w-full rounded-xl outline-none border-gray-500"
            />
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="border py-1 px-2 w-full rounded-xl outline-none border-gray-500"
            />
            <input
              type="tel"
              name="phone"
              value={data.phone}
              onChange={handleChange}
              required
              placeholder="Enter your mobile number"
              className="border py-1 px-2 w-full rounded-xl outline-none border-gray-500"
            />
            <input
              type="text"
              name="subject"
              value={data.subject}
              onChange={handleChange}
              required
              placeholder="Enter subject"
              className="border py-1 px-2 w-full rounded-xl outline-none border-gray-500"
            />
            <textarea
              name="message"
              value={data.message}
              onChange={handleChange}
              required
              className="border py-1 px-2 w-full rounded-xl outline-none h-[150px] resize-none border-gray-500"
              placeholder="Enter your message"
            ></textarea>
            <button
              type="submit"
              className="w-[150px] h-[40px] self-center border border-gray-500 cursor-pointer hover:bg-gradient-to-br from-violet-600 via-gray-600 to-green-500 rounded-full"
            >
              Submit
            </button>
          </form>
          <p className="text-gray-400 italic">You can also reach me via social media.</p>
        </div>

        {/* Globe + Quote */}
        <div className="flex-1 p-10  md:order-2 flex flex-col items-center justify-center gap-10 perspective-container">
          <div className="glob w-[300px] h-[300px] bg-white rounded-full relative"></div>

          <blockquote className="text-center text-xl md:text-3xl text-violet-200 font-semibold italic leading-relaxed max-w-xl mt-6">
            “Communication is the bridge between confusion and clarity — reach out and let's build that bridge.”
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Contact;
