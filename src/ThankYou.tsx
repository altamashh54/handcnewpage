import React from "react";
import { Instagram, Facebook, ArrowRight, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

function ThankYou() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
    // Small delay to ensure navigation happens before scroll
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Section with Background */}
      <div
        className="relative h-[40vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('logocompressed.webp')",
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
              Your Info is with us!
            </h1>
            <p className="font-mulish text-xl md:text-2xl">
              Expect a call within the next 12 Hours!
            </p>
          </motion.div>
        </div>
      </div>

      {/* Steps Section - Redesigned */}
      <div className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-playfair text-3xl md:text-4xl text-center mb-16 flex items-center justify-center gap-4"
          >
            Here's what'll happen next
            <ArrowDown className="w-8 h-8 text-soft-pink animate-bounce" />
          </motion.h2>

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
                  <span className="inline-block px-4 py-2 bg-soft-pink/10 text-gray-800 rounded-full text-sm font-mulish font-semibold mb-4">
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
                  <span className="inline-block px-4 py-2 bg-soft-pink/10 text-gray-800 rounded-full text-sm font-mulish font-semibold mb-4">
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
                    customized plan that fits you perfectly.
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
                  <span className="inline-block px-4 py-2 bg-soft-pink/10 text-gray-800 rounded-full text-sm font-mulish font-semibold mb-4">
                    Step 3
                  </span>
                  <h3 className="font-playfair text-2xl md:text-3xl mb-6 text-gray-800">
                    Guidance: Industry Insights & Expert Tips
                  </h3>
                  <p className="font-mulish text-gray-600 leading-relaxed text-lg">
                    This is where the real magic happens. We'll give you insider
                    knowledge of the wedding industry—what's standard, what's
                    expected, and how to navigate the tricky parts of planning.
                    Plus, you'll get our exclusive Gloucestershire Vendor Guide,
                    carefully curated just for you.
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
                  <span className="inline-block px-4 py-2 bg-soft-pink/10 text-gray-800 rounded-full text-sm font-mulish font-semibold mb-4">
                    Step 4
                  </span>
                  <h3 className="font-playfair text-2xl md:text-3xl mb-6 text-gray-800">
                    Your Decision
                  </h3>
                  <p className="font-mulish text-gray-600 leading-relaxed text-lg">
                    At this point, the ball is in your court. If you feel
                    confident and excited to move forward with us, we'll start
                    creating your perfect wedding journey. If not, that's
                    perfectly fine too—no pressure. You're welcome to reach out
                    anytime if you need advice.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center mt-16 bg-soft-pink/10 p-8 rounded-2xl max-w-2xl mx-auto"
          >
            <p className="font-mulish text-2xl text-gray-800 mb-2">
              P.S. Check your email now
            </p>
            <p className="font-mulish text-gray-800 text-lg">
              We've got a surprise waiting for you! 🎁 (Check your spam folder
              if you don't see it)
            </p>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-6 mt-auto">
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
      </footer>
    </div>
  );
}

export default ThankYou;
