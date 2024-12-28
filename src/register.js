import React, { useState } from 'react';
import axios from 'axios';
import rightimage from '../src/images/do.jpg'
 // Import useNavigate for redirection

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phonenumber: ''
    });

    const [error, setError] = useState('');  // For validation error messages
    const [loading, setLoading] = useState(false);  // To show loading state during form submission

  // Initialize useNavigate hook for redirection

    // Handle input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Form validation
    const validateForm = () => {
        if (!formData.name || !formData.email || !formData.password || !formData.phonenumber) {
            return "All fields are required!";
        }
        return null;
    };

    // Handle form submission
    // Handle form submission
const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
        setError(validationError);  // Set validation error message
        return;
    }
    setError('');  // Clear previous error
    setLoading(true);  // Show loading state

    try {
        // Make POST request to backend for user registration
        const response = await axios.post('http://localhost:10000/r/user/register', formData, { withCredentials: true });

        // Handle success
        console.log(response.data);  // Server response
        alert('Registration successful! Redirecting to login...');
        setLoading(false);

        // Redirect to the login page using window.location
        window.location.href = './loginpage.js';  // Change this to the correct path for your login page
    } catch (err) {
        console.error(err);
        setLoading(false);
        setError('Something went wrong. Please try again.');
    }
};
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="flex flex-col sm:flex-row bg-white p-8 rounded-lg shadow-lg w-4/5 max-w-4xl">
            {/* Left: Registration Form */}
            <div className="w-full sm:w-1/2 p-4">
                <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
    
                {/* Display error message if validation fails */}
                {error && <div className="text-red-500 mb-4">{error}</div>}
    
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                            placeholder="Enter your name"
                        />
                    </div>
    
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                            placeholder="Enter your email"
                        />
                    </div>
    
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                            placeholder="Enter your password"
                        />
                    </div>
    
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input
                            type="text"
                            name="phonenumber"
                            value={formData.phonenumber}
                            onChange={handleChange}
                            className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                            placeholder="Enter your phone number"
                        />
                    </div>
    
                    <div className="flex justify-center mt-6">
                        <button
                            type="submit"
                            className={`w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 ${loading && 'opacity-50 cursor-not-allowed'}`}
                            disabled={loading}
                        >
                            {loading ? 'Submitting...' : 'Register'}
                        </button>
                    </div>
                </form>
            </div>
    
            {/* Right: Image */}
            <div className="w-full sm:w-1/2 flex justify-center items-center p-4 hidden sm:flex">
                <img
                    src={rightimage} // Replace this with your actual image source
                    alt="Illustration"
                    className="w-full h-full object-cover rounded-md"
                />
            </div>
        </div>
    </div>
    
    
    );
}

export default Register;
