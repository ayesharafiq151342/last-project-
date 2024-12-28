import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({
    noteId: "",
    title: "",
    content: "",
    subject: "",
    createdBy: "",
    collaborators: [],
  });

  // Fetch courses from the backend
  useEffect(() => {
    axios
      .get("http://localhost:10000/c/user/getcourse")
      .then((response) => setCourses(response.data))
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };

  // Handle Add Course form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!newCourse.noteId || !newCourse.title || !newCourse.content || !newCourse.subject || !newCourse.createdBy) {
      console.error("Please fill in all fields.");
      return;
    }

    axios
      .post("http://localhost:10000/coursep", newCourse)
      .then((response) => {
        setCourses([...courses, response.data]);
        setNewCourse({ noteId: "", title: "", content: "", subject: "", createdBy: "", collaborators: [] });
      })
      .catch((error) => console.error("Error adding course:", error));
  };

  // Handle Delete Course
  const handleDeleteCourse = (noteId) => {
    axios
      .delete(`http://localhost:10000/courses/${noteId}`)
      .then((response) => {
        // Remove deleted course from the state
        setCourses(courses.filter((course) => course.noteId !== noteId));
      })
      .catch((error) => console.error("Error deleting course:", error));
  };

  // Handle Update Course
  const handleUpdateCourse = (course) => {
    setNewCourse(course); // Populate form with the current course data
  };

  return (
<div className="min-h-screen bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 p-6">
  <header className="mb-10 text-center">
    <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Notes </h1>
    <p className="text-lg text-gray-600">Manage your courses efficiently</p>
  </header>

  {/* Add Course Form */}
  <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-lg border border-gray-200 mb-12">
    <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
      Add New Course
    </h2>
    <form onSubmit={handleFormSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label className="block text-sm font-medium text-gray-700">Course ID</label>
          <input
            type="text"
            name="noteId"
            value={newCourse.noteId}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Course Title</label>
          <input
            type="text"
            name="title"
            value={newCourse.title}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Course Content</label>
        <textarea
          name="content"
          value={newCourse.content}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          rows="4"
          required
        ></textarea>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label className="block text-sm font-medium text-gray-700">Subject</label>
          <input
            type="text"
            name="subject"
            value={newCourse.subject}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Created By (User ID)</label>
          <input
            type="text"
            name="createdBy"
            value={newCourse.createdBy}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
      >
        Add Course
      </button>
    </form>
  </div>

  {/* Course List */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {courses.map((course) => (
      <div
        key={course.noteId}
        className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow"
      >
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {course.title}
        </h3>
        <p className="text-sm text-gray-500 mb-2">Created By: {course.createdBy}</p>
        <p className="text-sm text-gray-500 mb-2">Subject: {course.subject}</p>
        <p className="text-gray-700 mb-4">{course.content}</p>
        <p className="text-sm text-gray-500 mb-4">
          Collaborators: {course.collaborators.join(", ")}
        </p>
        <div className="flex space-x-4">
          <button
            onClick={() => handleUpdateCourse(course)}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Update
          </button>
          <button
            onClick={() => handleDeleteCourse(course.noteId)}
            className="text-red-600 hover:text-red-800 font-medium"
          >
            Delete
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

  );
}

export default Dashboard;
