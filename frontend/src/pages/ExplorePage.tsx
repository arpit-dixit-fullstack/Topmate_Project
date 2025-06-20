import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Filter, Star, MapPin } from 'lucide-react';

interface Expert {
  id: string;
  name: string;
  title: string;
  company: string;
  expertise: string[];
  rating: number;
  sessions: number;
  price: number;
  avatar: string;
  location: string;
  bio: string;
}

export function ExplorePage() {
  const [searchParams] = useSearchParams();
  const [experts, setExperts] = useState<Expert[]>([]);
  const [filteredExperts, setFilteredExperts] = useState<Expert[]>([]);
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('rating');

  const categories = [
    'all',
    'Product Management',
    'Engineering',
    'Design',
    'Marketing',
    'Sales',
    'Data Science',
    'Leadership'
  ];

  const mockExperts: Expert[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      title: 'Senior Product Manager',
      company: 'Google',
      expertise: ['Product Strategy', 'User Research', 'Growth'],
      rating: 4.9,
      sessions: 150,
      price: 120,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      location: 'San Francisco, CA',
      bio: 'Product leader with 8+ years of experience building consumer products at scale.'
    },
    {
      id: '2',
      name: 'Michael Chen',
      title: 'Engineering Manager',
      company: 'Meta',
      expertise: ['System Design', 'Leadership', 'Career Growth'],
      rating: 4.8,
      sessions: 200,
      price: 150,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      location: 'Seattle, WA',
      bio: 'Engineering leader passionate about building high-performing teams and scalable systems.'
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      title: 'UX Director',
      company: 'Airbnb',
      expertise: ['Design Systems', 'User Experience', 'Team Management'],
      rating: 4.9,
      sessions: 180,
      price: 130,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      location: 'New York, NY',
      bio: 'Design leader focused on creating inclusive and accessible user experiences.'
    },
    {
      id: '4',
      name: 'David Kim',
      title: 'VP of Marketing',
      company: 'Stripe',
      expertise: ['Growth Marketing', 'Brand Strategy', 'Analytics'],
      rating: 4.7,
      sessions: 120,
      price: 140,
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      location: 'Austin, TX',
      bio: 'Marketing executive with expertise in scaling B2B and B2C growth strategies.'
    },
    {
      id: '5',
      name: 'Lisa Wang',
      title: 'Data Science Manager',
      company: 'Netflix',
      expertise: ['Machine Learning', 'Analytics', 'Data Strategy'],
      rating: 4.8,
      sessions: 90,
      price: 160,
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      location: 'Los Angeles, CA',
      bio: 'Data science leader specializing in recommendation systems and personalization.'
    },
    {
      id: '6',
      name: 'James Wilson',
      title: 'Sales Director',
      company: 'Salesforce',
      expertise: ['Enterprise Sales', 'Team Building', 'Negotiation'],
      rating: 4.6,
      sessions: 110,
      price: 100,
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      location: 'Chicago, IL',
      bio: 'Sales leader with a track record of building and scaling enterprise sales teams.'
    }
  ];

  useEffect(() => {
    setExperts(mockExperts);
    setFilteredExperts(mockExperts);
  }, []);

  useEffect(() => {
    let filtered = experts;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(expert =>
        expert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        expert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        expert.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        expert.expertise.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(expert =>
        expert.expertise.some(skill => skill.includes(selectedCategory)) ||
        expert.title.includes(selectedCategory)
      );
    }

    // Filter by price range
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(expert => {
        if (max) {
          return expert.price >= min && expert.price <= max;
        } else {
          return expert.price >= min;
        }
      });
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'sessions':
          return b.sessions - a.sessions;
        default:
          return 0;
      }
    });

    setFilteredExperts(filtered);
  }, [experts, searchQuery, selectedCategory, priceRange, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Explore Experts</h1>
          <p className="text-gray-600">
            Find the perfect mentor to accelerate your career growth
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by name, company, or expertise..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="sessions">Most Sessions</option>
              </select>
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
            <div className="flex flex-wrap gap-2">
              {['all', '0-100', '100-150', '150-200', '200'].map(range => (
                <button
                  key={range}
                  onClick={() => setPriceRange(range)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    priceRange === range
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {range === 'all' ? 'All Prices' : 
                   range === '200' ? '$200+' : 
                   `$${range}`}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredExperts.length} expert{filteredExperts.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Expert Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredExperts.map((expert) => (
            <div key={expert.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="flex items-start space-x-4">
                <img
                  src={expert.avatar}
                  alt={expert.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{expert.name}</h3>
                      <p className="text-gray-600">{expert.title} at {expert.company}</p>
                      <div className="flex items-center mt-1">
                        <MapPin className="w-4 h-4 text-gray-400 mr-1" />
                        <span className="text-sm text-gray-500">{expert.location}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-gray-900">${expert.price}/hr</div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-sm font-medium">{expert.rating}</span>
                        <span className="text-sm text-gray-500 ml-1">({expert.sessions})</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mt-2 text-sm">{expert.bio}</p>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {expert.expertise.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                    {expert.expertise.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{expert.expertise.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-3 mt-4">
                    <Link
                      to={`/profile/${expert.id}`}
                      className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-center text-sm"
                    >
                      View Profile
                    </Link>
                    <Link
                      to={`/book/${expert.id}`}
                      className="flex-1 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors text-center text-sm"
                    >
                      Book Session
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredExperts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Filter className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No experts found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters</p>
          </div>
        )}
      </div>
    </div>
  );
}