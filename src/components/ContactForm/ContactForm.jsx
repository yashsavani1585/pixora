import React, { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { sendEmail } from "../../utils/email";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { success, error } = await sendEmail(formData);

    if (success) {
      toast.success(
        ` Message sent!\n\nName: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
        { duration: 6000 }
      );

      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    } else {
      toast.error(" Failed to send message");
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div className="bg-white py-16 px-6 md:px-20 w-full">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 w-full">

        <div className="w-full">
          <span className="bg-blue-900 text-white px-5 py-3 rounded-full text-sm font-semibold">
            Contact Form
          </span>

          <h2 className="text-3xl font-bold mt-6 mb-4">We are here to help</h2>
          <p className="text-gray-600 mb-8">
            Get in touch with us today to discuss your requirements and receive
            a free, no-obligation quote.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Your first name"
                className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Your last name"
                className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                required
              />
            </div>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email address"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
              required
            />

            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
              required
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className={`bg-blue-900 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-blue-800 transition w-full md:w-auto ${loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
            >
              {loading ? "Sending..." : "SUBMIT"}
            </button>
          </form>
        </div>

        <div className="flex flex-col justify-center space-y-8 w-full">
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-blue-900 w-6 h-6 mt-1" />
            <div>
              <h4 className="font-bold">Location :</h4>
              <p className="text-gray-700">
                C2/1212, Pragati IT PARK, <br />
                OPP. AR mall, Mota Varachha, <br />
                Surat, Gujarat 394101
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaEnvelope className="text-blue-900 w-6 h-6 mt-1" />
            <div>
              <h4 className="font-bold">Email :</h4>
              <p className="text-gray-700">pixoratetechnologies@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-blue-900 w-6 h-6 mt-1" />
            <div>
              <h4 className="font-bold">Call :</h4>
              <p className="text-gray-700">+91 92742 79905</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaWhatsapp className="text-blue-900 w-6 h-6 mt-1" />
            <div>
              <h4 className="font-bold">Message :</h4>
              <a
                href="https://wa.me/919274279905"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:underline"
              >
                +91 92742 79905
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactForm;
