import { useState } from 'react';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: ''
  });

  const [entries, setEntries] = useState([]);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email format is incorrect';
    }

    if (!formData.course.trim()) {
      newErrors.course = 'Please select a course';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const newEntry = {
        id: Date.now(),
        ...formData
      };

      setEntries(prev => [...prev, newEntry]);

      setFormData({
        name: '',
        email: '',
        course: ''
      });

      setErrors({});
    }
  };

  const handleDelete = (id) => {
    setEntries(prev => prev.filter(entry => entry.id !== id));
  };

  const handleClearAll = () => {
    if (window.confirm('Do you really want to remove all entries?')) {
      setEntries([]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-indigo-700 mb-2">
            Student Registration
          </h1>
          <p className="text-gray-600">Complete the form below to register a student</p>
        </div>

        {/* Form Section */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-indigo-800 mb-6">
              Registration Form
            </h2>
            
            <div className="space-y-5">
              {/* Name Field */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition ${
                    errors.name 
                      ? 'border-red-500 focus:ring-red-400' 
                      : 'border-gray-300 focus:ring-indigo-500'
                  }`}
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition ${
                    errors.email 
                      ? 'border-red-500 focus:ring-red-400' 
                      : 'border-gray-300 focus:ring-indigo-500'
                  }`}
                  placeholder="example@gmail.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Course Field */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Course *
                </label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Select a course</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Information Technology">Information Technology</option>
                  <option value="Electronics Engineering">Electronics Engineering</option>
                  <option value="Mechanical Engineering">Mechanical Engineering</option>
                  <option value="Civil Engineering">Civil Engineering</option>
                  <option value="Business Administration">Business Administration</option>
                </select>
                {errors.course && (
                  <p className="text-red-500 text-sm mt-1">{errors.course}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-indigo-700 hover:bg-indigo-800 text-white py-3 rounded-lg font-semibold transition"
              >
                Register Student
              </button>
            </div>
          </div>
        </div>

        {/* Table Section */}
        {entries.length > 0 && (
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-indigo-700 px-6 py-4 flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-white">
                  Registered Students ({entries.length})
                </h2>
                <button
                  onClick={handleClearAll}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition text-sm font-medium"
                >
                  Clear All
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-100 border-b-2 border-gray-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                        #
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                        Course
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {entries.map((entry, index) => (
                      <tr 
                        key={entry.id}
                        className="hover:bg-gray-50 transition"
                      >
                        <td className="px-6 py-4 text-sm text-gray-700 font-medium">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800">
                          {entry.name}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800">
                          {entry.email}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800">
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                            {entry.course}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <button
                            onClick={() => handleDelete(entry.id)}
                            className="text-red-600 hover:text-red-800 font-medium hover:underline"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {entries.length === 0 && (
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No Registered Students Yet
              </h3>
              <p className="text-gray-600">
                Complete the form above to add a student to the table
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
