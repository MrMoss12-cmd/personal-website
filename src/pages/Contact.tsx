import { FC } from 'react'
import SocialLinks from '../components/SocialLinks'

const Contact: FC = () => {


  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-3">Contact Me</h1>
      <p className="text-sm text-gray-600 mb-12">Let's connect and create something amazing</p>

      <div className="max-w-2xl mx-auto relative">
        {/* Decorative backgrounds */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-xl"></div>
        
        <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50"></div>
          
          <div className="relative p-8">
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">


              </div>

              {/* Phone Number */}
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <a href="tel:+573001234567" className="text-blue-600 hover:text-blue-700">
                    +57 314 5058 746
                  </a>
                </div>
              </div>

              {/* Schedule/Availability */}
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Working Hours</p>
                  <p className="text-gray-900">Mon - Fri: 9:00 AM - 6:00 PM (COT)</p>
                </div>
              </div>

              {/* Languages */}
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Languages</p>
                  <p className="text-gray-900">Spanish (Native), English (Technical)</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="text-gray-900">Medellin</p>
                </div>
              </div>

              {/* Social Links Section */}
              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-4">Connect with me</p>
                <div className="flex justify-center">
                  <SocialLinks />
                </div>
              </div>

              {/* Availability Status */}
              <div className="pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center gap-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <span className="text-gray-700">Available for new projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact