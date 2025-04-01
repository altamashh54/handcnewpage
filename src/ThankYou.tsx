import React from "react";
import { Instagram, Facebook } from "lucide-react";
import { motion } from "framer-motion";

function ThankYou() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Section with Background */}
      <div
        className="relative h-[60vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://i.imgur.com/SHKZVmP.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="font-playfair text-4xl md:text-6xl mb-4">
              Thank You!
            </h1>
            <p className="font-mulish text-xl md:text-2xl">
              We'll contact you within 24 hours
            </p>
          </motion.div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg mx-auto"
          >
            <h2 className="font-playfair text-2xl md:text-3xl text-center mb-8">
              What to Expect Next
            </h2>

            <div className="space-y-6 font-mulish">
              <p>
                We're thrilled that you're considering us for your special day!
                Here's what happens next:
              </p>

              <ol className="list-decimal space-y-4 pl-4">
                <li>
                  <strong>Initial Contact:</strong> Within 24 hours, our lead
                  wedding coordinator will reach out to you via email or phone
                  (based on your preferred contact method).
                </li>

                <li>
                  <strong>Consultation Scheduling:</strong> We'll arrange a time
                  for your free consultation that works best for you - either in
                  person or via video call.
                </li>

                <li>
                  <strong>Vendor Guide:</strong> Check your email - we've sent
                  you our exclusive Gloucestershire Vendor Guide to browse
                  through before our meeting.
                </li>
              </ol>

              <p className="italic mt-8">
                "The perfect wedding doesn't happen by chance - it's a result of
                careful planning, attention to detail, and having the right team
                by your side."
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-6 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="flex flex-col space-y-4 mb-6 md:mb-0">
              <img
                src="https://i.imgur.com/J5jhJBB.png"
                alt="Haybales & Chandeliers Logo"
                className="h-16 object-contain"
              />

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
