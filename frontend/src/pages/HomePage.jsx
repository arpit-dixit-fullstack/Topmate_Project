import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Calendar, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import TestimonialRow from '../components/TestimonialRow'

export function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/explore?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const experts = [
    {
      name: "Vanesa Fernanda",
      role: "Product Marketing",
      company: "Microsoft",
      color: "bg-red-400",
    },
    {
      name: "Chiradeep Patra",
      role: "Life Coach (ICF - CCE)",
      company: "I Listen Space",
      color: "bg-green-400",
    },
    {
      name: "Vani Gupta",
      role: "Marketing Consultant",
      company: "Ashoka University",
      color: "bg-pink-400",
    },
    {
      name: "Vatsal Nahata",
      role: "Career Guidance",
      company: "Ridgewood",
      color: "bg-yellow-400",
    },
    {
      name: "Mitchell Clements",
      role: "Design Leader",
      company: "nCino",
      color: "bg-orange-400",
    },
  ];


  const featuredExperts = [
    {
      id: '1',
      name: 'Sarah Johnson',
      title: 'Senior Product Manager at Google',
      expertise: ['Product Strategy', 'User Research', 'Growth'],
      rating: 4.9,
      sessions: 150,
      price: 120,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    {
      id: '2',
      name: 'Michael Chen',
      title: 'Engineering Manager at Meta',
      expertise: ['System Design', 'Leadership', 'Career Growth'],
      rating: 4.8,
      sessions: 200,
      price: 150,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      title: 'UX Director at Airbnb',
      expertise: ['Design Systems', 'User Experience', 'Team Management'],
      rating: 4.9,
      sessions: 180,
      price: 130,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    }
  ];



  const categories = [
    {
      title: "Software & Tech",
      // desc: "DSA/Leetcode · DevOps & Cloud · Frontend + 3...",
      icon: "💻",
    },
    { title: "Best Sellers", icon: "🎯" },
    { title: "Data", icon: "📊" },
    { title: "Product", icon: "🪑" },
    { title: "AI AI AI", icon: "🧠" },
    { title: "Career", icon: "💼" },
    { title: "Marketing", icon: "✏️" },
    { title: "Referrals", icon: "👥" },
    { title: "Go Global", icon: "🌍" },
    { title: "Wellbeing", icon: "🫶" },
    { title: "Study & Skills", icon: "📖" },
    { title: "Personal Growth", icon: "🎓" },
    { title: "Uplift Academy", icon: "🧍‍♂️" },
    { title: "Family", icon: "🏠" },
    { title: "Spiritual", icon: "🧘" },
  ];


  const mentors = [
    {
      name: "Kavach Khanna",
      role: "Mentor You Always Needed",
      img: "https://topmate.io/cdn-cgi/image/width=640,quality=90/https://topmate-staging.s3.ap-south-1.amazonaws.com/eDjrekgQPAyEoXS6UgGVSs.JPG",
    },
    {
      name: "Prashant Verma",
      role: "Building World-Class Scrum Masters. One Sprint at a...",
      img: "/images/prashant.jpg",
    },
    {
      name: "Abhishek Srivastava",
      role: "NOTE: If you're not prepared to confront some tough...",
      img: "/images/abhishek.jpg",
    },
    {
      name: "Shreya Mehta",
      role: "Talent Acquisition / Recruiting / HR / ...",
      img: "/images/shreya.jpg",
    },
    {
      name: "Maveesh Velayudhan",
      role: "Education & Career Advisor",
      img: "/images/maveesh.jpg",
    },
  ];

  const aiTools = [
    {
      title: "Ask & Match",
      desc: "Not sure who to reach out to? Just tell the bot what you need — and it'll find 5 people who can actually help.",
      btnText: "Get Matched",
      bg: "bg-yellow-300",
      btnBg: "bg-orange-500",
      image: "/images/ask-match.png",
    },
    {
      title: "Travel Scout",
      desc: "Planning a trip? Share what you love — and discover 5 travellers who’ve done it and can guide you right.",
      btnText: "Plan my Travel",
      bg: "bg-orange-100",
      btnBg: "bg-blue-200",
      image: "/images/travel-scout.png",
    },
    {
      title: "CV Curator",
      desc: "Your next role starts with the right resume. This bot finds 5 people who’ve helped others land jobs just like yours.",
      btnText: "Improve my Resume",
      bg: "bg-blue-200",
      btnBg: "bg-yellow-300",
      image: "/images/cv-curator.png",
    },
    {
      title: "PM Pathfinder",
      desc: "Interview coming up? Tell the bot your target role — and it'll connect you to 5 mentors who’ve been in your shoes.",
      btnText: "PM Interview",
      bg: "bg-purple-200",
      btnBg: "bg-lime-300",
      image: "/images/pm-pathfinder.png",
    },
  ];

  return (
    <div className="min-h-screen text-white px-4">


      <section className="text-center   bg-black pt-16 pb-10">
        <h1 className="text-4xl md:text-6xl font-light mb-4">
          Connect to Experts in <span className="text-red-500 font-bold">Minutes</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
          Don't navigate your journey alone – get 1:1 guidance and more from proven experts in tech, business, and beyond.
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="max-w-3xl mx-auto mb-6">
          <div className="relative flex items-center bg-[#1a1a1a] rounded-xl">
            <Search className="absolute left-4 text-gray-400 w-5 h-5 pointer-events-none" />

            <input
              type="text"
              placeholder='Describe your requirements… (e.g. "Resume review for product role")'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-20 py-4 text-sm text-gray-300 bg-transparent rounded-xl focus:outline-none placeholder-gray-400"
            />

            <Link
              to="/explore"
              className="absolute right-2 h-10 w-10 bg-orange-600 hover:bg-orange-700 rounded-lg flex items-center justify-center transition-colors"
            >
              <ArrowRight className="text-white w-5 h-5" />
            </Link>
          </div>
        </form>


        {/* Tags */}
        <div className="flex justify-center">
          <div className='w-1/2 flex flex-wrap justify-center  gap-2 mb-10'>
            {['Get Job Referral', 'Resume Review', 'Mock Interview', 'Switch Careers', 'LinkedIn Optimization', 'Startup Guidance', 'Tech Interview Prep', 'Portfolio Review', 'Salary Negotiation', 'Side Business Ideas'].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 border border-gray-600 rounded-lg text-sm hover:bg-white hover:text-black transition"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>




      {/* about section */}

      <div className="bg-peach-50 min-h-screen bg-pink-100 flex flex-col lg:flex-row px-6 py-16 gap-8">
        {/* LEFT */}


        <div className="lg:w-1/2 flex flex-col justify-center">
          <h1 className="text-5xl font-bold leading-tight text-black">
            Crack <br />
            <span className="font-light text-gray-500 italic">the Data Science Role</span>
          </h1>

          <p className="mt-6 text-gray-800 text-lg max-w-md">
            1:1 sessions and resources from people who've already cracked it.
            Get actionable strategies, mock interviews, referrals, and clarity –
            in minutes.
          </p>

          {/* CTA buttons */}
          <div className="grid grid-cols-2 gap-4  text-black mt-8 max-w-md">
            {[
              "Browse Categories",
              "Get a Referral",
              "Meet Recruiters",
              "Explore Resources",
            ].map((text, index) => (
              <button
                key={index}
                className="flex justify-between items-center px-4 py-3 bg-white rounded-xl shadow-md font-medium hover:bg-gray-100 transition"
              >
                {text}
                <span className='bg-black text-white'>

                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            ))}
          </div>

          {/* Reviews */}
          <div className="flex gap-2 mt-8 text-sm">
            <span className="px-3 py-1 bg-inherit  rounded-full border text-black border-gray-200">
              100K+ ★★★★★ reviews
            </span>
            <span className="px-3 py-1 bg-inherit text-black rounded-full border border-gray-200">
              1mn+ professionals
            </span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {experts.map((expert, i) => (
            <div
              key={i}
              className={`rounded-xl p-3 text-white ${expert.color} shadow-md`}
            >
              <div className="aspect-[4/3] rounded-xl bg-opacity-40 bg-white p-3 flex flex-col justify-end">
                <span className="bg-white text-gray-800 text-xs px-2 py-1 rounded-full w-fit mb-2">
                  {expert.company}
                </span>
                <h4 className="font-semibold">{expert.name}</h4>
                <p className="text-sm">{expert.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* refer Section */}
      <section className="bg-white text-center px-6 py-20">
        {/* Heading */}
        <h2 className="text-6xl font-light text-black">
          Not Sure <span className="font-bold text-black">What to Do Next?</span>
        </h2>
        <p className="mt-4 text-gray-900 max-w-4xl mx-auto text-xl whitespace-pre-wrap">
          {`From cracking interviews to managing stress, switching careers to finding your focus
– explore expert-led paths across every stage of your journey.`}
        </p>


        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5  mt-10 mx-auto max-w-6xl">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="relative group border bg-white text-black px-4 py-6 flex flex-col items-start text-left transition hover:shadow hover:bg-black hover:text-white"
            >

              {/* Icon */}
              <div className="text-3xl mb-3 rounded-full size-10 flex justify-center items-center bg-gray-50  transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]">{cat.icon}</div>

              {/* Title */}
              <h4 className="font-semibold">{cat.title}</h4>

              {/* Subtext */}
              {cat.desc && <p className="text-sm text-gray-300 mt-1">{cat.desc}</p>}

              {/* Arrow Icon */}
              <ArrowRight
                className={`absolute top-4 right-4 w-4 h-4 transition-transform group-hover:translate-x-1 ${cat.highlight ? "text-white" : "text-black"
                  }`}
              />
            </div>
          ))}
        </div>

        {/* Button */}
        <button className="mt-10 px-6 py-3 rounded-lg bg-black text-white font-medium hover:bg-gray-900 transition flex items-center mx-auto">
          Explore All Categories
          <ArrowRight className="ml-2 w-4 h-4" />
        </button>
      </section>

      {/* testimonials section */}

      <section className="bg-purple-200 py-20 px-4 text-center">
        {/* Header */}
        <div className="mb-10">
          <div className="flex justify-center gap-4 mb-4 flex-wrap">
            <span className="bg-purple-100 text-black px-4 py-2 rounded-xl font-semibold">
              10mn+
              <span className='font-thin'> Services</span>
            </span>
            <span className="bg-purple-100 text-black px-4 py-2 rounded-xl font-semibold">
              Trusted by
              <span className='font-thin'> 1mn+</span>
            </span>
            <span className="bg-purple-100 text-black px-4 py-2 rounded-xl font-semibold">
              100k+
              <span className='font-thin'> testimonials</span>
            </span>
          </div>
          <h2 className="text-4xl text-black font-light">
            They <span className="font-bold">Asked.</span> Then{" "}
            <span className="font-bold">Acted.</span>
          </h2>
          <p className="text-gray-700 mt-3 max-w-3xl mx-auto text-base">
            Real people, real results – see how others achieved their goals with Topmate.
            Their stories prove what’s possible when you take action on expert advice.
          </p>
        </div>

        {/* Rows */}
        <div className="space-y-6">
          <TestimonialRow reverse={false} />
          <TestimonialRow reverse={true} />
        </div>
      </section>


      {/* mentor */}


      <section className="bg-[#f9f5e7] py-20 px-4 text-center">
        {/* Heading */}
        <div className="max-w-4xl mx-auto mb-8 text-black">
          <h2 className="text-4xl md:text-5xl font-light">
            Our <span className="font-bold">Top Mentors</span>, Handpicked for You
          </h2>
          <p className="mt-4 text-gray-700 text-base">
            Short on time? Start here. Premium Picks highlights the best of Topmate: the highest-rated mentors and most popular resources that consistently drive results.
          </p>
        </div>

        {/* Categories */}
        <div className=' flex justify-center'>

          <div className="flex flex-wrap justify-center gap-3 mb-10 w-9/12">
            {[
              "Career", "Consulting", "Content", "Cybersecurity", "Data & AI", "Design",
              "Finance", "HR", "Law", "Marketing", "Mental Health", "Product", "Software",
              "Study Abroad", "Best Selling", "Supply Chain", "Others"
            ].map((cat, i) => (
              <button
                key={i}
                className={`px-5 py-2 rounded-full text-md border transition ${i === 0
                  ? "bg-black text-white"
                  : "bg-white text-black border-black hover:bg-black hover:text-white"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Mentor Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {mentors.map((mentor, i) => (
            <div
              key={i}
              className="bg-white rounded-xl w-64 shadow-lg overflow-hidden text-left"
            >
              <img
                src={mentor.img}
                alt={mentor.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-base text-black">{mentor.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{mentor.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

     

      {/* ai tools */}
      <section className="py-20 px-4 bg-white text-center">
        <h2 className="text-4xl md:text-5xl font-light text-black">
          Topmate <span className="font-bold">AI Assist</span>
        </h2>
        <p className="max-w-3xl mx-auto mt-4 text-gray-700 text-base">
          Let AI speed up your search for the perfect mentor. Topmate’s AI-powered bots ask simple questions and instantly recommend the best people to talk to – curated just for your goal.
        </p>

        <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center">
          {aiTools.map((tool, i) => (
            <div key={i} className={`w-full max-w-xs rounded-md overflow-hidden ${tool.bg}`}>
              <div className="h-40 flex items-center justify-center bg-opacity-40">
                <img src={tool.image} alt={tool.title} className="h-24" />
              </div>
              <div className="p-4 text-left">
                <h3 className="font-bold text-lg mb-2">{tool.title}</h3>
                <p className="text-sm text-gray-700">{tool.desc}</p>
                <button
                  className={`mt-4 ${tool.btnBg} text-black font-semibold text-sm px-4 py-2 rounded-full flex items-center gap-2 hover:brightness-105 transition`}
                >
                  {tool.btnText}
                  <span className="inline-block bg-black text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div >
  );
}