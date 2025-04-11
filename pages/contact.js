import { useState } from 'react';

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

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('Sending...');

    try {
      const response = await fetch('/api/sendMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
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
    <div className="container mx-auto p-4">
      <h2 className="text-primary-content text-4xl font-bold text-center text-gray-900 mb-12">Contact Me</h2>
      <p className="mb-8">
        Have a question? Don’t hesitate for a moment to send me a message about a commission, available work, or upcoming collections.
      </p>
      <form onSubmit={handleSubmit}>
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
      </form>
      {formStatus && <p className="mt-4 text-center">{formStatus}</p>}
    </div>
  );
}
