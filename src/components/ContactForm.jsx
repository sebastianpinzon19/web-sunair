'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    comments: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', phone: '', email: '', comments: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-sun-blue focus:ring-2 focus:ring-sun-blue/20"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">
          Phone number
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-sun-blue focus:ring-2 focus:ring-sun-blue/20"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-sun-blue focus:ring-2 focus:ring-sun-blue/20"
        />
      </div>

      {/* Comments */}
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">
          COMMENT
        </label>
        <textarea
          name="comments"
          rows="6"
          value={formData.comments}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-sun-blue focus:ring-2 focus:ring-sun-blue/20 resize-none"
        ></textarea>
      </div>

      <button type="submit" className="btn-primary w-full py-4 text-lg font-bold">
        Submit
      </button>

      {submitted && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-4 rounded text-center font-semibold">
          Thank you! Your submission has been received!
        </div>
      )}
    </form>
  );
}
