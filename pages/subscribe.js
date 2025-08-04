'use client';
import Head from "next/head";

import { useState } from 'react';

export default function SubscribePage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false); // <-- NEW STATE

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
        setSubscribed(true); // <-- MARK AS SUBSCRIBED
      } else {
        setStatus(data.error || 'Failed to subscribe.');
      }
    } catch (error) {
      setStatus('Something went wrong.');
    }

    setLoading(false);
  };

  return (
      <>
      <Head>
        <title> Subscribe | Reyhan Uyanık</title>
      </Head>
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-4">
      <div className="w-full max-w-md bg-base-200 p-8 rounded-xl shadow-xl text-center">
        {subscribed ? (
          <h1 className="text-3xl font-bold font-shadows-into-light">
            Thanks for subscribing!
          </h1>
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-6 font-italiana">
              Join My Mailing List
            </h1>
            <p className="mb-6">Be the first to know about new paintings and occasional art talks</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="input input-bordered w-full"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="input input-bordered w-full"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="input input-bordered w-full"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-full" disabled={loading}>
                {loading ? 'Subscribing...' : 'Subscribe'}
              </button>
              {status && <p className="text-sm mt-4">{status}</p>}
            </form>
          </>
        )}
      </div>
    </div>
        </>
  );
}
