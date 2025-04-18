import React, { useState, useRef, useEffect } from "react";
import {
  Heart,
  BellRing,
  Sparkles,
  Calendar,
  Star,
  Quote,
  Send,
  Instagram,
  Facebook,
  ArrowDown,
} from "lucide-react";
import { motion, animate } from "framer-motion";
import { Routes, Route, Link } from "react-router-dom";
import ThankYou from "./ThankYou";
import OnboardingProcess from "./OnboardingProcess";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    weddingDate: "",
  });

  const contactFormRef = useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const images = [
    "/images/carousel1.webp",
    "/images/carousel2.webp",
    "/images/carousel3.webp",
    "/images/carousel4.webp",
    "/images/carousel5.webp",
    "/images/carousel6.webp",
    "/images/carousel7.webp",
    "/images/carousel8.webp",
    "/images/carousel9.webp",
    "/images/carousel10.webp",
    "/images/carousel11.webp",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const scrollToSection = (elementId: string) => {
      const element = document.getElementById(elementId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        // Add highlight effect for freeguide
        if (elementId === "freeguide") {
          element.classList.add("highlight");
          setTimeout(() => {
            element.classList.remove("highlight");
          }, 2000);
        }
      }
    };

    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        // Wait for any animations/content to load
        setTimeout(() => {
          scrollToSection(hash);
        }, 300);
      }
    };

    // Handle initial hash on page load
    if (window.location.hash) {
      handleHashChange();
    }

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const today = new Date().toISOString().split("T")[0];
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 5);
  const maxDateString = maxDate.toISOString().split("T")[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);
    try {
      // First submit the form to Netlify's built-in form handling
      const netlifyResponse = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          ...formData,
        }).toString(),
      });

      if (!netlifyResponse.ok) {
        throw new Error("Netlify form submission failed");
      }

      // Then trigger your custom function to send the welcome email
      const emailResponse = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!emailResponse.ok) {
        console.error("Failed to send welcome email");
        // Still redirect even if email fails, but log the error
      }

      // Redirect to thank you page on success
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        weddingDate: "",
      });
      window.location.href = "/thank-you";
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToContact = () => {
    if ("scrollBehavior" in document.documentElement.style) {
      const contactSection = contactFormRef.current;
      if (!contactSection) return;

      const start = window.pageYOffset;
      const end = contactSection.offsetTop;

      animate(start, end, {
        duration: 1.2, // Adjust duration as needed
        ease: [0.32, 0.72, 0, 1], // Custom easing
        onUpdate: (value) => {
          window.scrollTo(0, value);
        },
        onComplete: () => {
          // Optional: Focus first input
          const firstInput = contactSection.querySelector('input[type="text"]');
          if (firstInput instanceof HTMLInputElement) {
            firstInput.focus();
          }
        },
      });
    } else {
      // Fallback for browsers that don't support smooth scrolling
      contactFormRef.current?.scrollIntoView();
    }
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\d\s+()-]+$/;

    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      return false;
    }
    if (!phoneRegex.test(formData.phone)) {
      alert("Please enter a valid phone number");
      return false;
    }
    return true;
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <motion.div
              id="contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative hero-curve"
            >
              <div className="absolute inset-0 bg-soft-pink/20"></div>
              <div className="h-[85vh] bg-cover bg-center bg-no-repeat relative bg-desktop-hero">
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="relative container mx-auto px-4 h-full flex items-center justify-end">
                  <div className="max-w-xl bg-white/95 p-8 rounded-lg shadow-lg md:bg-transparent md:p-0 md:shadow-none">
                    <motion.h1
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8 }}
                      className="font-playfair font-black text-3xl md:text-5xl text-gray-900 md:text-white mb-4"
                    >
                      Bringing it all together & taking your stress away
                    </motion.h1>
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="font-mulish text-base md:text-lg text-gray-700 md:text-white mb-6 leading-relaxed"
                    >
                      Don't know where to start? See how we've helped over 200
                      Brides craft their dream wedding & bring the Pinterest
                      vision to life—within budget.
                    </motion.p>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="flex flex-col items-start space-y-3"
                    >
                      <button
                        onClick={scrollToContact}
                        className="bg-white text-gray-900 px-6 py-3 rounded-full font-mulish font-semibold hover:bg-gray-100 transition duration-300 w-full sm:w-auto hover:scale-105 transform text-sm md:text-base"
                        aria-label="Book consultation"
                      >
                        Book Your Free Consultation Now
                      </button>
                      <div className="bg-[#FDF3F3] text-[#333333] px-4 py-3 rounded-lg text-xs md:text-sm font-mulish">
                        <p>
                          <span className="font-bold text-sm md:text-base text-black-900">
                            🎁 Limited Time Bonus
                          </span>
                          : Get a Free Gloucestershire Vendor Guide with your
                          consultation—handpicked trustworthy suppliers to save
                          time and avoid hidden costs!{" "}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Services Section */}
            <motion.div
              id="services"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="py-12 md:py-16 bg-white"
            >
              <div className="container mx-auto px-4">
                <div className="text-center mb-10 md:mb-12">
                  <h2 className="font-playfair text-2xl md:text-3xl mb-4">
                    You can stop being overwhelmed....{" "}
                  </h2>
                  <div className="font-mulish text-sm md:text-base text-gray-600 max-w-4xl mx-auto space-y-6">
                    <p>
                      You've spent months imagining your perfect wedding,
                      scrolling through Pinterest,planning tiny details and
                      saving ideas. But turning that vision into reality?
                      <span className="font-extrabold text-sm md:text-base text-black">
                        {" "}
                        That's where we come in.{" "}
                      </span>
                    </p>
                    <p>
                      We'll handle the logistics, the details, and the stress—so
                      you don't have to. From coordinating vendors to setting up
                      the perfect décor, we'll ensure everything is exactly as
                      you imagined it to be. So instead of stressing over
                      timelines and to-do lists, you can be excited about your
                      wedding day like you were when you first put that
                      engagement ring on.{" "}
                    </p>

                    <p>
                      Imagine walking down the aisle, gleaming while people
                      stare at you in awe; knowing everything is handled
                      perfectly—no last-minute chaos, no stress—just pure joy,
                      love, and celebration.{" "}
                      <span className="font-extrabold text-sm md:text-base text-black">
                        After guiding over 200 Couples,
                      </span>{" "}
                      we know exactly how to help you - no matter where you are.
                    </p>
                    <p>
                      {" "}
                      {/* <span className="font-extrabold text-md md:text-lg text-black"> */}
                      <span className="font-extrabold text-sm md:text-base text-black">
                        Our packages start from £750 & are fully customisable
                        depending on your needs.
                      </span>{" "}
                    </p>

                    <div className="pt-6">
                      <button
                        onClick={scrollToContact}
                        className="bg-gray-900 text-white px-6 py-3 rounded-full font-mulish font-semibold hover:bg-gray-800 transition duration-300 hover:scale-105 transform text-sm md:text-base"
                        aria-label="Book consultation"
                      >
                        Let's make it happen, together.
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
                  <ServiceCard
                    icon={<Calendar className="w-6 h-6 text-soft-pink" />}
                    title="Wedding Planning & Coordination"
                    description="Handling backend logistics, vendor communication & timeline management."
                  />
                  <ServiceCard
                    icon={<BellRing className="w-6 h-6 text-soft-pink" />}
                    title="Wedding Décor Hire"
                    description="Elegant tablescapes, breathtaking backdrops & stylish centerpieces without the hassle of buying or DIYing."
                  />
                  <ServiceCard
                    icon={<Sparkles className="w-6 h-6 text-soft-pink" />}
                    title="Venue Setup & Styling"
                    description="From an empty space to a picture-perfect wedding, we transform your venue with expert styling & attention to detail."
                  />
                  <ServiceCard
                    icon={<Heart className="w-6 h-6 text-soft-pink" />}
                    title="Exclusive Booking Bonus"
                    description="Choose between a Free Audio Guestbook OR 20% Blue Light Discount on ALL Décor Rentals."
                  />
                  <div id="freeguide">
                    <ServiceCard
                      icon={<Star className="w-6 h-6 text-soft-pink" />}
                      title="Free Vendor Guide"
                      description="Handpicked Gloucestershire vendors who have been serving for 10+ Years to give you the best options. Save time & avoid hidden costs."
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Testimonials Section */}
            <motion.div
              id="testimonials"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="py-12 bg-gray-50"
            >
              <div className="container mx-auto px-4">
                <h2 className="font-playfair text-2xl md:text-3xl text-center mb-12">
                  <span className="block mb-2">From Isolated to Excited,</span>
                  <span className="block mb-2">We're By Your Side -</span>
                  <span className="block mb-6">Every Step of The Way</span>
                  <span className="block mt-6 text-2xl md:text-3xl text-black-600 flex items-center justify-center gap-4">
                    What Brides Say About Us
                    <ArrowDown className="w-8 h-8 text-soft-pink animate-bounce" />
                  </span>
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <TestimonialCard
                    quote="All our guests commented on how beautiful our venue looked. If you are thinking of booking these guys, don't hesitate as you will not be disappointed. Punctual, friendly & approachable."
                    author="Tammy Jackson"
                    year="2022"
                  />
                  <TestimonialCard
                    quote="They will go above and beyond to meet all your needs and desires. Loved it!!!"
                    author="Helen Sullivan"
                    year="2020"
                  />
                </div>
              </div>
            </motion.div>

            {/* Image Carousel Section */}
            <div
              id="gallery"
              className="relative overflow-hidden bg-gray-50 py-12"
            >
              <div className="max-w-5xl mx-auto px-4">
                <div className="aspect-[3/2] relative rounded-lg overflow-hidden shadow-xl">
                  {images.map((image, index) => (
                    <motion.div
                      key={index}
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: currentImage === index ? 1 : 0,
                        scale: currentImage === index ? 1 : 1.1,
                      }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    >
                      <img
                        src={image}
                        alt={`Wedding moment ${index + 1}`}
                        className="w-full h-full object-contain bg-white"
                        loading={index === 0 ? "eager" : "lazy"}
                        onError={(e) => {
                          e.currentTarget.src = "/images/fallback.webp";
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              id="form"
              ref={contactFormRef}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="py-12 bg-soft-pink/10"
            >
              <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto">
                  <h2 className="font-playfair text-2xl md:text-3xl text-center mb-6">
                    Contact Us - 5 spots left.
                  </h2>

                  <h3 className="custom-font-h3 font-playfair text-2xl md:text-3xl text-center mb-6">
                  We'll get in touch and clarify everything, so you know exactly what you're getting into—without making a commitment to
                    anything.
                  </h3>


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
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className={`w-full ${
                        isSubmitting ? "bg-gray-500" : "bg-gray-900"
                      } text-white px-6 py-3 rounded-full font-mulish font-semibold hover:bg-gray-800 transition duration-300 flex items-center justify-center space-x-2 text-sm md:text-base`}
                    >
                      <span>{isSubmitting ? "Submitting..." : "Submit"}</span>
                      <Send className="w-4 h-4" />
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* Footer */}
            <footer className="bg-black text-white py-6">
              <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div className="flex flex-col space-y-4 mb-6 md:mb-0">
                    <Link
                      to="/"
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    >
                      <img
                        src="/images/logocompressed.webp"
                        alt="Haybales & Chandeliers Logo"
                        className="h-16 object-contain hover:opacity-80 transition-opacity"
                        loading="lazy"
                      />
                    </Link>

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
                        to="/onboarding-process#hero"
                        className="hover:text-soft-pink transition-colors"
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
        }
      />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/onboarding-process" element={<OnboardingProcess />} />
    </Routes>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  const handleClick = () => {
    const contactSection = document.getElementById("form");
    if (!contactSection) return;

    const start = window.pageYOffset;
    const end = contactSection.offsetTop - 80; // Adding offset for header

    animate(start, end, {
      duration: 1.2,
      ease: [0.32, 0.72, 0, 1],
      onUpdate: (value) => {
        window.scrollTo(0, value);
      },
      onComplete: () => {
        const firstInput = contactSection.querySelector('input[type="text"]');
        if (firstInput instanceof HTMLInputElement) {
          firstInput.focus();
        }
      },
    });
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 cursor-pointer"
      onClick={handleClick}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="font-playfair text-lg md:text-xl mb-3">{title}</h3>
      <p className="font-mulish text-sm text-gray-600">{description}</p>
    </motion.div>
  );
}

function TestimonialCard({
  quote,
  author,
  year,
}: {
  quote: string;
  author: string;
  year: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white p-6 rounded-lg shadow-lg relative"
    >
      <Quote className="w-6 h-6 text-soft-pink/30 absolute top-4 left-4" />
      <div className="pl-6">
        <p className="font-mulish text-sm text-gray-600 mb-4 italic">{quote}</p>
        <div className="flex items-center space-x-2">
          <div className="flex text-soft-pink">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-current" />
            ))}
          </div>
          <p className="font-playfair text-sm">
            {author}, <span className="text-gray-500">{year}</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default App;
