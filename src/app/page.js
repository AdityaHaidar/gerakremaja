import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white px-6 py-16 flex flex-col items-center">
      {/* Hero Section */}
      <section className="max-w-4xl text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Welcome to <span className="text-blue-600 dark:text-blue-400">NovaTech</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Innovating tomorrow's solutions today. We build scalable, cutting-edge software tailored for your business.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#services"
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 dark:hover:bg-gray-800 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mt-24 w-full max-w-5xl text-center">
        <h2 className="text-3xl font-semibold mb-4">What We Do</h2>
        <p className="mb-12 text-gray-600 dark:text-gray-400">
          We offer a wide range of tech solutions designed to help you scale.
        </p>
        <div className="grid sm:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg bg-gray-50 dark:bg-gray-900">
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Build fast, responsive, and secure websites using the latest tech.
            </p>
          </div>
          <div className="p-6 border rounded-lg bg-gray-50 dark:bg-gray-900">
            <h3 className="text-xl font-semibold mb-2">Cloud Integration</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Leverage the power of cloud computing with seamless integrations.
            </p>
          </div>
          <div className="p-6 border rounded-lg bg-gray-50 dark:bg-gray-900">
            <h3 className="text-xl font-semibold mb-2">AI & Automation</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Automate workflows with intelligent systems and machine learning.
            </p>
          </div>
        </div>

      <Link
        href="/info"
        className="text-blue-600 hover:underline mt-6"
      >
        Learn more about us →
      </Link>
      </section>
    
      {/* Contact */}
      <section id="contact" className="mt-24 w-full max-w-xl text-center">
        <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          Let's talk about how we can work together.
        </p>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-3 rounded border bg-white dark:bg-gray-800 dark:border-gray-700"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="px-4 py-3 rounded border bg-white dark:bg-gray-800 dark:border-gray-700"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="px-4 py-3 rounded border bg-white dark:bg-gray-800 dark:border-gray-700"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="mt-24 text-center text-sm text-gray-500 dark:text-gray-600">
        &copy; {new Date().getFullYear()} NovaTech. All rights reserved.
      </footer>
    </main>
  );
}
