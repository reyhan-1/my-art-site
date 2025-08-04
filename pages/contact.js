import { useState } from 'react';
import Head from "next/head";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('');

    try {
      const response = await fetch('/api/sendMessage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setFormStatus('Message Sent! Thank you for reaching out.');
      } else {
        setFormStatus('Something went wrong. Please try again later.');
      }
    } catch (error) {
      setFormStatus('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
      <>
      <Head>
        <title>Contact | Reyhan Uyanık</title>
      </Head>

<div className="w-full px-4 py-10">
      <h1 className="text-primary-content text-4xl font-italiana text-center text-baseline-content mb-6">Contact Me</h1>
      <p className="text-center max-w-2xl mx-auto mb-10 text-baseline">
        Have a question? Don’t hesitate to send me a message about a commission, available work, or upcoming collections.
      </p>

      {/* Centered form container */}
      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="w-full max-w-2xl">
          <div className="grid gap-4">
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm">First Name (required)</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm">Last Name (required)</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm">Email Address (required)</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="block text-sm">Subject (required)</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="block text-sm">Message (required)</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="textarea textarea-bordered w-full"
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
          {formStatus && <p className="mt-4 text-center">{formStatus}</p>}
        </form>
      </div>
    </div>
        </>
  );
}
