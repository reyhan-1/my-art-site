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

    <div className="px-6 md:px-10 py-16">
      <h6 className=" text-4xl text-center font-serif  m-10">Contact</h6>
      <p className="text-center font-quicksand max-w-xl mx-auto mb-10">
        Have a question? Don’t hesitate to send me a message about a commission, available work, or upcoming collections.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div>
              <label htmlFor="firstName" className="block mb-2 text-sm font-urbanist text-gray-800">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 font-urbanist px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                placeholder="Your first name"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block mb-2 text-sm font-urbanist text-gray-800">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 px-4 py-3 font-urbanist text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                placeholder="Your last name"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-urbanist text-gray-800">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full border border-gray-300  font-urbanist px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-urbanist text-gray-800">
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleInputChange}
              required
              className="w-full border border-gray-300 font-urbanist px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              placeholder="Subject"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-urbanist text-gray-800">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleInputChange}
              required
              className="w-full border border-gray-300 font-urbanist px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition resize-none"
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 text-white text-lg font-quicksand transition
              ${isSubmitting ? 'bg-indigo-300 cursor-not-allowed' : 'bg-black hover:bg-gray-700'}
            `}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {formStatus && (
            <p
              className={`mt-4 text-center font-quicksand ${
                formStatus.includes('Sent') ? 'text-black' : 'text-red-950'
              }`}
              role="alert"
            >
              {formStatus}
            </p>
          )}
        </form>
    </div>
        </>
  );
}
