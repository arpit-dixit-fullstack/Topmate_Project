import React from 'react'
import { ArrowRight } from "lucide-react";
import ContactUs from '../components/ContactUs';


const teamMembers = [
  { name: "Dinesh", role: "Technology", img: "/team/dinesh.jpg" },
  { name: "Ankit", role: "Business", img: "/team/ankit.jpg" },
  { name: "Nimit", role: "Technology", img: "/team/nimit.jpg" },
  { name: "Pawan", role: "Design", img: "/team/pawan.jpg" },
  { name: "Hitesh", role: "QA", img: "/team/hitesh.jpg" },
  { name: "Akshay", role: "Growth", img: "/team/akshay.jpg" },
  { name: "Anvesh", role: "Technology", img: "/team/anvesh.jpg" },
  { name: "Abhijit", role: "Support", img: "/team/abhijit.jpg" },
];

function About() {
  return (
    <div>

      <div className="w-[70%] mx-auto flex items-center justify-between p-8 ">
        {/* Left Side - Text */}
        <div className="w-1/2">
          <h2 className="text-4xl font-bold text-gray-800 leading-tight">
            Everyone has <br />
            something to share <br />
            and we want to <br />
            enable just that
          </h2>
        </div>

        {/* Right Side - Image with layered effect */}
        <div className="relative w-1/2 flex justify-center items-center">
          {/* Background Star Shape */}
          <div className="absolute w-64 h-64 bg-red-500 rotate-45 rounded-xl z-0" />

          {/* Overlapping images (mocked with one image here) */}
          <div className="relative z-10">
            <img
              src="/your-image-path.png"
              alt="Group Discussion"
              className="w-64 h-64 object-cover rounded-lg shadow-lg border-4 border-white"
            />
          </div>
        </div>
      </div>
      {/* open letter */}
      <section className="bg-[#f29667] px-6 md:px-16 py-20 text-[#2d2d2d] flex flex-col md:flex-row items-center justify-center gap-10">

        {/* Left side - Image */}
        <div className="relative">
          <div className="bg-[#ffb34b] p-2 rounded-[30px] border border-black">
            <img
              src="https://topmate.io/cdn-cgi/image/width=384,quality=70/images/about/img-ankit.png" // Make sure to place the image in your public folder as ankit.jpg
              alt="Ankit Agarwal"
              className="rounded-[20px] w-[250px] h-auto object-cover"
            />
          </div>
          <div className="absolute -top-3 -left-3 w-6 h-6 bg-white rounded-full border border-black"></div>
        </div>

        {/* Right side - Text */}
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold mb-6">Open letter</h2>
          <p className="mb-4">
            Out of the 80+ million creators in India, less than 0.5% earn over Rs 15000 per month
          </p>
          <p className="mb-4">
            Yup, while it’s easier than ever to become a creator, it’s harder than ever to monetise it (thanks to the insane competition) We think this needs to change.
          </p>
          <p className="mb-6">
            That’s why we are building Topmate - to empower creators, experts and mentors like you to do what you love. Topmate helps you leverage your personal brand to share your expertise and monetise your time
          </p>
          <p className="italic font-semibold text-sm">
            Ankit Agarwal, <span className="not-italic font-normal">CEO & Founder of Topmate</span>
          </p>
          <a
            href="#"
            className="text-sm underline italic text-blue-800 mt-2 inline-block"
          >
            Book a demo ➡️
          </a>
        </div>
      </section>


      {/* team section */}
      <section className="bg-[#f6f6f6] py-20 px-6 md:px-16 flex flex-col md:flex-row items-center gap-10">
        {/* Left Side: Emoji and Vertical Text */}
        <div className="flex flex-col items-center">
          <div className="rotate-[15deg] text-5xl">
            <span role="img" aria-label="smile">😊</span>
          </div>
          <h2 className="text-[60px] font-bold text-[#333] rotate-[-90deg] mt-6 whitespace-nowrap">The team</h2>
        </div>

        {/* Right Side: Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 flex-1">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-[#f0faff] p-4 rounded-xl text-center"
            >
              <img
                src={member.img}
                alt={member.name}
                className="rounded-lg mb-3 w-full object-cover aspect-[4/4]"
              />
              <h3 className="font-bold">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* journey section */}

      <section className="bg-[#f5dff5] px-6 md:px-16 py-24 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left side content */}
        <div className="flex flex-col items-start max-w-lg">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            On a journey where <br /> we all win together
          </h2>
          <button className="flex items-center justify-between gap-4 border border-black px-6 py-3 rounded-xl font-medium bg-white hover:bg-black hover:text-white transition">
            Start today <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right side content */}
        <div className="text-gray-700 max-w-xl text-lg leading-relaxed">
          <p>
            We believe everyone has something to share. That’s why Topmate empowers
            you to be able to share your knowledge with your followers – in the most
            authentic forms of human connection. Our mission is to help you make a
            living doing what you love
          </p>
        </div>
      </section>

      {/* backer section */}
      <section className="bg-[#fcfcfc] py-16 px-6 md:px-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 flex-wrap">
          <h2 className="text-3xl font-bold text-gray-800 whitespace-nowrap">
            Our backers
          </h2>

          <img src="https://topmate.io/cdn-cgi/image/width=256,quality=70/images/about/img-investor-1.png" alt="India Quotient" className="h-10" />
          <img src="https://topmate.io/cdn-cgi/image/width=256,quality=70/images/about/img-investor-2.png" alt="Titan Capital" className="h-10" />
          <img src="https://topmate.io/cdn-cgi/image/width=64,quality=70/images/about/img-investor-3.svg" alt="20+ angels" className="h-10" />
          <strong>20+ angels</strong>
        </div>
      </section>
      <ContactUs />
    </div>


  )
}

export default About