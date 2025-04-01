import React, { useState, useEffect } from "react";
import { Instagram, Facebook, ArrowRight, ArrowDown, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

function OnboardingProcess() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    weddingDate: "",
  });

  const today = new Date().toISOString().split("T")[0];
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 5);
  const maxDateString = maxDate.toISOString().split("T")[0];

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#hero") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          ...formData,
        }).toString(),
      });

      if (response.ok) {
        window.location.href = "/thank-you";
      } else {
        alert("Error submitting form. Please try again.");
      }
    } catch (error) {
      alert("Error submitting form. Please try again.");
    }
  };

  const handleLogoClick = () => {
    navigate("/");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Section with Background - Updated Text */}
      <div
        className="relative h-[40vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/thankyouhero.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="font-playfair text-4xl md:text-6xl mb-4">
              The Exact Step-by-Step Process of Starting this Journey Together
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Steps Section - Removed heading, kept steps */}
      <div className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mb-20"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-soft-pink"></div>
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-soft-pink/10 rounded-full"></div>

                <div className="relative">
                  <span className="inline-block px-4 py-2 bg-soft-pink/10 text-gray-800 rounded-full text-sm font-semibold mb-4">
                    Step 1
                  </span>
                  <h3 className="font-playfair text-2xl md:text-3xl mb-6 text-gray-800">
                    A Quick Call
                  </h3>
                  <p className="font-mulish text-gray-600 leading-relaxed text-lg">
                    We'll start with a friendly, no-pressure call to understand
                    where you are in your wedding planning. Whether you're just
                    starting to dream about your big day or you're already
                    knee-deep in plans, we'll listen to your vision, your
                    concerns, and your unique needs. This call is all about
                    understanding YOU and your wedding—no strings attached.
                  </p>
                </div>
              </div>
              <div className="hidden md:flex justify-center my-8">
                <ArrowRight className="w-12 h-12 text-soft-pink transform rotate-45" />
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative mb-20 md:ml-12"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-soft-pink"></div>
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-soft-pink/10 rounded-full"></div>

                <div className="relative">
                  <span className="inline-block px-4 py-2 bg-soft-pink/10 text-gray-800 rounded-full text-sm font-semibold mb-4">
                    Step 2
                  </span>
                  <h3 className="font-playfair text-2xl md:text-3xl mb-6 text-gray-800">
                    Consultation: Whatever Works for You
                  </h3>
                  <p className="font-mulish text-gray-600 leading-relaxed text-lg">
                    Next, we'll set up a free, relaxed consultation. Whether
                    it's over a coffee in person or from the comfort of your
                    home online, we'll sit down and talk through your vision,
                    your priorities, and your budget. We understand that every
                    couple is different, and our goal is to give you a
                    customized plan that fits you perfectly. We'll help you
                    refine your ideas, offer guidance on what's realistic, and
                    break down the process so it's easy to follow. Whether
                    you're feeling completely lost or you just need some
                    clarity, we're here to provide it.
                  </p>
                </div>
              </div>
              <div className="hidden md:flex justify-center my-8">
                <ArrowRight className="w-12 h-12 text-soft-pink transform rotate-45" />
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative mb-20"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-soft-pink"></div>
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-soft-pink/10 rounded-full"></div>

                <div className="relative">
                  <span className="inline-block px-4 py-2 bg-soft-pink/10 text-gray-800 rounded-full text-sm font-semibold mb-4">
                    Step 3
                  </span>
                  <h3 className="font-playfair text-2xl md:text-3xl mb-6 text-gray-800">
                    Guidance: Industry Insights, Expert Tips, and Your Vendor
                    Guide
                  </h3>
                  <p className="font-mulish text-gray-600 leading-relaxed text-lg">
                    This is where the real magic happens. We'll give you insider
                    knowledge of the wedding industry—what's standard, what's
                    expected, and how to navigate the tricky parts of planning.
                    You'll learn exactly what to expect at every stage and how
                    to make the most of your budget. Plus, we'll give you direct
                    access to Gloucestershire's best vendors—curated just for
                    you. No more sifting through endless options, wondering
                    who's trustworthy. You'll have everything you need to make
                    informed decisions.
                  </p>
                </div>
              </div>
              <div className="hidden md:flex justify-center my-8">
                <ArrowRight className="w-12 h-12 text-soft-pink transform rotate-45" />
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative md:ml-12"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-soft-pink"></div>
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-soft-pink/10 rounded-full"></div>

                <div className="relative">
                  <span className="inline-block px-4 py-2 bg-soft-pink/10 text-gray-800 rounded-full text-sm font-semibold mb-4">
                    Step 4
                  </span>
                  <h3 className="font-playfair text-2xl md:text-3xl mb-6 text-gray-800">
                    Your Decision
                  </h3>
                  <p className="font-mulish text-gray-600 leading-relaxed text-lg">
                    At this point, the ball is in your court. If you feel
                    confident and excited to move forward with us, we'll start
                    creating a personalized timeline and take care of everything
                    from there. If not, that's perfectly fine too—no pressure.
                    You're welcome to reach out anytime if you need advice or
                    help with anything. We're always here for you. Whether you
                    choose to work with us or not, we want you to feel
                    empowered, informed, and supported throughout your journey.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-12 bg-soft-pink/10"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-playfair text-2xl md:text-3xl text-center mb-6">
              Contact Us
            </h2>
            <div className="text-center mb-8">
              <button className="bg-gray-900 text-white px-6 py-3 rounded-full font-mulish font-semibold hover:bg-gray-800 transition duration-300 hover:scale-105 transform text-sm md:text-base">
                Lock In Your Free Consultation—5 Spots Left!
              </button>
            </div>
            <p className="text-center mb-6 font-mulish text-sm md:text-base text-gray-600">
              Fill out the form below, and we'll get in touch.
            </p>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="space-y-4"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don't fill this out if you're human:{" "}
                  <input name="bot-field" />
                </label>
              </p>
              <div>
                <label
                  htmlFor="name"
                  className="block font-mulish mb-2 text-sm"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-soft-pink transition-all duration-300"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-mulish mb-2 text-sm"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-soft-pink transition-all duration-300"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block font-mulish mb-2 text-sm"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-soft-pink transition-all duration-300"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="weddingDate"
                  className="block font-mulish mb-2 text-sm"
                >
                  Wedding Date (Optional)
                </label>
                <input
                  type="date"
                  id="weddingDate"
                  name="weddingDate"
                  min={today}
                  max={maxDateString}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-soft-pink transition-all duration-300"
                  value={formData.weddingDate}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      weddingDate: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block font-mulish mb-2 text-sm"
                >
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-soft-pink transition-all duration-300"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gray-900 text-white px-6 py-3 rounded-full font-mulish font-semibold hover:bg-gray-800 transition duration-300 flex items-center justify-center space-x-2 text-sm md:text-base"
              >
                <span>Submit</span>
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>

      {/* Footer - Same as other pages */}
      <footer className="bg-black text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="flex flex-col space-y-4 mb-6 md:mb-0">
              <button
                onClick={handleLogoClick}
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="/images/logocompressed.webp"
                  alt="Haybales & Chandeliers Logo"
                  className="h-16 object-contain"
                  loading="lazy"
                />
              </button>

              <div className="flex items-start space-x-4">
                <a
                  href="https://www.instagram.com/haybalesandchandeliers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-soft-pink transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/HaybalesAndChandeliers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-soft-pink transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="tel:+447368203447"
                  className="hover:text-soft-pink transition-colors text-sm"
                >
                  +44 7368 203447
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-2 text-sm">
              <p>© 2025 Haybales & Chandeliers. All rights reserved.</p>
              <div className="flex space-x-4">
                <Link
                  to="/onboarding-process"
                  className="hover:text-soft-pink transition-colors"
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  Onboarding Process
                </Link>
                <a
                  href="https://www.freeprivacypolicy.com/live/aba10e91-e336-4056-af89-7c2f9d21690a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-soft-pink transition-colors"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default OnboardingProcess;
