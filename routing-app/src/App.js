import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;
  
  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-extrabold tracking-wide">My Routing App</h1>
            <div className="flex space-x-4">
              <Link 
                to="/" 
                className={`px-3 py-2 rounded-md font-semibold hover:bg-indigo-500 transition-colors`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`px-3 py-2 rounded-md font-semibold hover:bg-indigo-500 transition-colors`}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`px-3 py-2 rounded-md font-semibold hover:bg-indigo-500 transition-colors`}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-6xl font-extrabold text-indigo-700 mb-6">
            Welcome Home!
          </h1>
          <p className="text-2xl text-gray-700 mb-8">
            Explore our app and learn more about how React Router works. Enjoy seamless navigation and smooth user experience!
          </p>
        </div>
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-200 to-pink-400">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-6xl font-extrabold text-purple-900 mb-6">
            About Us
          </h1>
          <p className="text-xl text-purple-800">
            We are passionate about creating amazing React apps with clean code, beautiful UI, and smooth navigation. React Router makes it easy to organize pages efficiently.
          </p>
        </div>
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-6xl font-extrabold text-green-700 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-green-800">
            Got questions? Reach out to us anytime at example@mail.com. We're here to help and provide support for all your app needs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}
