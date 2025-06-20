import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer class="bg-[#111111] text-white py-16 px-6">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">


        <div class="flex flex-col gap-6">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="https://topmate.io/cdn-cgi/image/width=384,quality=90/images/common/topmate-dark.svg"
              alt="Topmate Logo"
              className="h-8"
            />
          </Link>

          <button class="inline-flex items-center border border-white rounded-full px-5 py-2 gap-2 text-white text-sm">
            <span class="text-yellow-400">★</span>
            Top Profiles
            <span>▼</span>
          </button>

          <p class="text-sm text-gray-300">
            548 Market St PMB 30073, San Francisco
          </p>
          <p class="text-sm text-gray-300">©2025 Topmate</p>
        </div>


        <div class="flex flex-col md:flex-row gap-12 text-sm text-gray-300">
          <div class="flex flex-col gap-2">
            <a href="/about">About</a>
            <a href="/contact">Contact Us</a>
            <a href="#">Terms Of Service</a>
            <a href="#">Privacy</a>
          </div>
          <div class="flex flex-col gap-2">
            <a href="#">Pricing</a>
            <a href="#">Blog</a>
          </div>
        </div>


        <div class="flex items-center gap-6">
          <a href="#">
          <Linkedin className='hover:text-blue-400'/>
          </a>
          <a href="#">
          <Instagram className='hover:text-rose-400'/>
          </a>
          <a href="#">
          <Twitter className='hover:text-blue-700'/>
          </a>
        </div>
      </div>
    </footer>


  );
}