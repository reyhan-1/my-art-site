'use client';

import { useState } from 'react';

export default function SubscribeSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    setLoading(true);

    const { email, firstName, lastName } = formData;

    if (!email.includes('@') || !firstName || !lastName) {
      setStatus('Please fill out all fields with valid information.');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSubscribed(true);
      } else {
        setStatus(data.error || 'Failed to subscribe.');
      }
    } catch {
      setStatus('Something went wrong.');
    }

    setLoading(false);
  };

  if (subscribed) {
    return (
      <div className="max-w-xl mx-auto bg-[#f0eae3] px-8 py-12 text-center mt-16">
        <h2 className="text-3xl font-serif mb-2 text-gray-800">Thanks for subscribing!</h2>
      </div>
    );
  }

  return (
    <section className="bg-[#f0eae3] px-6 py-16">
      <h2 className="text-4xl font-serif text-center mb-4 text-gray-800">
        Join My Mailing List
      </h2>
      <p className="mb-10 text-center text-gray-600">
        Be the first to know about new paintings and occasional yapping about art.
      </p>

      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="flex-1 px-4 py-2 border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="flex-1 px-4 py-2 border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="flex-1 px-4 py-2 border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-3 bg-gray-800 text-white font-medium transition disabled:bg-gray-400"
          >
            {loading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>

        {status && (
          <p className="text-center text-sm text-red-600 mt-2">{status}</p>
        )}
      </form>
    </section>
  );
}
