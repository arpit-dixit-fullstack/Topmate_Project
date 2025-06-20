import React from 'react'
import {Link} from 'react-router-dom'


function ContactUs() {
  return (
    <div>
         <div className="min-h-screen bg-[#fce4bb]">
        
        
              {/* Contact Section */}
              <section className="p-10 text-black">
                <h1 className="text-4xl font-bold text-gray-800 mb-8">Let's connect!</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Left - Email */}
                  <div className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl font-semibold mb-2">Reach out</h2>
                      <p className="text-lg text-gray-700">support@topmate.io</p>
                    </div>
                    <div className="text-4xl text-right">📞</div>
                    <Link to="/" className="flex items-center space-x-2 ">
                      <img
                        src="https://topmate.io/cdn-cgi/image/width=256,quality=90/images/common/topmate-light.svg"
                        alt="Topmate Logo"
                        className="h-8 text-black"
                      />
                    </Link>
                  </div>
        
                  {/* Right - Locations */}
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="text-4xl text-right mb-2">📍</div>
                    <div className="text-md text-gray-800 space-y-4">
                      <div>
                        <h3 className="font-semibold">San Francisco</h3>
                        <p>548 Market St PMB 30073, San Francisco</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">Singapore</h3>
                        <p>160 Robinson Road, #14–04 Singapore Business Federation Center, Singapore (068914)</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">Bengaluru</h3>
                        <p>
                          Topmate.io, Ground Floor, 656, 13th Cross Rd, Sector 2, PWD Quarters,<br />
                          1st Sector, HSR Layout, Bengaluru, Karnataka 560102
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
        
              {/* Footer */}
            </div>
    </div>
  )
}

export default ContactUs