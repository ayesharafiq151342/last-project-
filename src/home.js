import React from "react";
import image from '../src/images/banner-2.jpg' 
import imagess from '../src/images/service3.jpg'
const Homepage = () => {
  return (
    <div>
      {/* Navbar */}
 

      {/* Hero Section */}
      <section className="bg-green-100 py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center h-screen">
          <div className="text-center md:text-left md:w-1/2 ">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Further Your Mission Through Online Education with ash learning
            </h1>
            <p className="text-gray-600 mb-6">
              Empower your team with cutting-edge online learning solutions
            ASh
            </p>
            <button className="bg-green-500 text-white py-3 px-6 rounded hover:bg-green-600">
              Get Started
            </button>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img
              src={image}
              alt="Hero"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="solutions" className="py-16 bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Learning Management System",
              description:
                "An easy-to-use system for managing your online courses and tracking progress.",
              buttonText: "Learn More",
            },
            {
              title: "Content Production",
              description:
                "Create engaging, professional-quality online courses with our tools and resources.",
              buttonText: "Learn More",
            },
            {
              title: "The Association Academy",
              description:
                "Join a network of associations improving member education and engagement.",
              buttonText: "Learn More",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 shadow-lg rounded-lg text-center"
            >
              <div className="bg-green-500 text-white w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-4">
                <span className="text-2xl font-bold">{index + 1}</span>
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                {feature.title}
              </h2>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                {feature.buttonText}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Section */}
      <section id="why" className="bg-gray-100 py-16">
  <div className="container mx-auto flex flex-col md:flex-row items-center">
    {/* Image Section */}
    <div className="w-full md:w-1/2 flex justify-center">
  <img
    src={imagess}  // Replace `imagess` with the actual image variable
    alt="Why Intuto"
    className="rounded-lg shadow-md object-cover w-full max-w-[300px] h-auto"
  />
</div>

    {/* Text Section */}
    <div className="md:w-1/2 mt-6 md:mt-0 md:pl-8 flex flex-col justify-center text-center md:text-left">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Why Ash learning?
      </h2>
      <p className="text-gray-600 mb-4">
        Intuto provides tailored solutions for organizations of all sizes,
        empowering you to deliver effective online education experiences.
      </p>
      <p className="text-gray-600 mb-6">
        Our tools simplify content creation and management, ensuring a
        seamless learning experience.
      </p>
      <button className="bg-green-500 text-white py-3 px-6 rounded hover:bg-green-600">
        Learn More
      </button>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-grren-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} Intuto. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
