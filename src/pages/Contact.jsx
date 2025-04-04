import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="pt-20">
      {/* Map Section */}
      <div className="h-[60vh] relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14422.987268318992!2d91.8825366!3d25.5788438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37507e8f34bd0ddb%3A0x95f676f5c6510fb!2sShillong%2C%20Meghalaya!5e0!3m2!1sen!2sin!4v1656789012345!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        ></iframe>
      </div>

      <div className="container mx-auto px-4 -mt-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          <div className="bg-white p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-3xl font-light mb-8">Contact Us</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                      required
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-black text-white py-3 hover:bg-gray-800 transition-colors"
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-12"
              >
                <div>
                  <h3 className="text-xl font-light mb-4">Headquarters</h3>
                  <p className="text-gray-600">
                    Sugar Studio<br />
                    Police Bazar<br />
                    Shillong, Meghalaya 793001<br />
                    India
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-light mb-4">Contact Details</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>General Inquiries: info@sugarstudio.com</p>
                    <p>New Business: business@sugarstudio.com</p>
                    <p>Phone: +91 123 456 7890</p>
                    <p>Working Hours: Monday to Friday, 9:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-light mb-4">Social Media</h3>
                  <div className="flex space-x-6">
                    <a href="#" className="text-gray-600 hover:text-black transition-colors">Instagram</a>
                    <a href="#" className="text-gray-600 hover:text-black transition-colors">LinkedIn</a>
                    <a href="#" className="text-gray-600 hover:text-black transition-colors">Pinterest</a>
                    <a href="#" className="text-gray-600 hover:text-black transition-colors">Facebook</a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Contact;