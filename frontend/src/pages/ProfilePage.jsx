import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, MapPin, Calendar, MessageSquare, Clock, Award, Users, Globe } from 'lucide-react';

export function ProfilePage() {
  const { id } = useParams();
  const [expert, setExpert] = useState(null);
  const [activeTab, setActiveTab] = useState('about');

  useEffect(() => {
    // Mock expert data - in a real app, this would be fetched from an API
    const mockExpert = {
      id: id || '1',
      name: 'Sarah Johnson',
      title: 'Senior Product Manager',
      company: 'Google',
      expertise: ['Product Strategy', 'User Research', 'Growth', 'Analytics', 'Team Leadership'],
      rating: 4.9,
      sessions: 150,
      price: 120,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      location: 'San Francisco, CA',
      bio: 'Product leader with 8+ years of experience building consumer products at scale. I\'ve helped launch products used by millions of users and led cross-functional teams of 20+ people.',
      experience: '8+ years in Product Management at Google, previously at Uber and Airbnb',
      languages: ['English', 'Spanish'],
      availability: ['Mon-Fri 9AM-5PM PST'],
      responseTime: '2 hours',
      reviews: [
        {
          id: '1',
          user: 'Alex Chen',
          rating: 5,
          comment: 'Sarah provided incredible insights into product strategy. Her experience at Google really shows!',
          date: '2 weeks ago'
        },
        {
          id: '2',
          user: 'Maria Garcia',
          rating: 5,
          comment: 'Amazing session! Sarah helped me understand user research methodologies and gave practical advice.',
          date: '1 month ago'
        },
        {
          id: '3',
          user: 'John Smith',
          rating: 4,
          comment: 'Very knowledgeable and patient. Great for anyone looking to break into product management.',
          date: '2 months ago'
        }
      ]
    };

    setExpert(mockExpert);
  }, [id]);

  if (!expert) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading expert profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Profile Header */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex items-start space-x-6">
                <img
                  src={expert.avatar}
                  alt={expert.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">{expert.name}</h1>
                  <p className="text-lg text-gray-600 mb-2">{expert.title} at {expert.company}</p>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                      <span className="font-medium">{expert.rating}</span>
                      <span className="text-gray-500 ml-1">({expert.sessions} sessions)</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{expert.location}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>Responds in {expert.responseTime}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {expert.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-sm mb-6">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6">
                  {['about', 'reviews'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                        activeTab === tab
                          ? 'border-red-500 text-red-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-6">
                {activeTab === 'about' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">About</h3>
                      <p className="text-gray-600 leading-relaxed">{expert.bio}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Experience</h3>
                      <p className="text-gray-600">{expert.experience}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Languages</h3>
                      <div className="flex flex-wrap gap-2">
                        {expert.languages.map((language) => (
                          <span
                            key={language}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                          >
                            {language}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Availability</h3>
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{expert.availability[0]}</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">Reviews</h3>
                      <div className="flex items-center">
                        <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                        <span className="font-medium">{expert.rating}</span>
                        <span className="text-gray-500 ml-1">({expert.reviews.length} reviews)</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {expert.reviews.map((review) => (
                        <div key={review.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                                <span className="text-sm font-medium text-gray-600">
                                  {review.user.charAt(0)}
                                </span>
                              </div>
                              <span className="font-medium text-gray-900">{review.user}</span>
                            </div>
                            <div className="flex items-center">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < review.rating
                                        ? 'text-yellow-400 fill-current'
                                        : 'text-gray-300'
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-gray-500 ml-2">{review.date}</span>
                            </div>
                          </div>
                          <p className="text-gray-600">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Booking Card */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6 sticky top-8">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  ${expert.price}<span className="text-lg font-normal text-gray-500">/hour</span>
                </div>
                <p className="text-gray-600">1:1 Video Call</p>
              </div>

              <div className="space-y-4 mb-6">
                <Link
                  to={`/book/${expert.id}`}
                  className="w-full bg-red-500 text-white py-3 px-4 rounded-lg hover:bg-red-600 transition-colors text-center block font-medium"
                >
                  Book a Session
                </Link>
                <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Send Message
                </button>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                  <span>Response time</span>
                  <span>{expert.responseTime}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Sessions completed</span>
                  <span>{expert.sessions}</span>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                    <Award className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{expert.rating}/5.0</div>
                    <div className="text-sm text-gray-500">Average Rating</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <Users className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{expert.sessions}</div>
                    <div className="text-sm text-gray-500">Sessions Completed</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <Globe className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{expert.languages.length}</div>
                    <div className="text-sm text-gray-500">Languages</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}