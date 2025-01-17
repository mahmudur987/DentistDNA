// app/privacy-policy/page.js
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">
          Privacy Policy
        </h1>
        <p className="mb-4 text-gray-700">
          At Dentist DNA, we are committed to safeguarding your privacy. This
          Privacy Policy outlines the types of information we collect, how we
          use it, and the measures we take to ensure its protection.
        </p>

        <h2 className="text-2xl font-bold mb-3 text-blue-500">
          1. Information We Collect
        </h2>
        <p className="mb-4 text-gray-700">
          We may collect the following types of information:
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>
            Personal identification information (Name, email address, phone
            number, etc.)
          </li>
          <li>
            Technical data (IP address, browser type, operating system, etc.)
          </li>
          <li>Interaction details (pages visited, time spent, etc.)</li>
        </ul>

        <h2 className="text-2xl font-bold mb-3 text-blue-500">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>To provide and maintain our services.</li>
          <li>To personalize the user experience and improve our offerings.</li>
          <li>To communicate with you regarding updates or promotions.</li>
          <li>To ensure security and prevent fraudulent activity.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-3 text-blue-500">
          3. Sharing Your Information
        </h2>
        <p className="mb-4 text-gray-700">
          We respect your privacy and will never sell your information to third
          parties. However, we may share data with:
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>Trusted partners for service delivery.</li>
          <li>Legal authorities if required by law.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-3 text-blue-500">
          4. Security Measures
        </h2>
        <p className="mb-4 text-gray-700">
          We take data protection seriously and implement robust measures to
          safeguard your information. However, no method of transmission over
          the internet is 100% secure.
        </p>

        <h2 className="text-2xl font-bold mb-3 text-blue-500">
          5. Your Rights
        </h2>
        <p className="mb-4 text-gray-700">You have the right to:</p>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>Access the personal data we hold about you.</li>
          <li>Request corrections or updates to your information.</li>
          <li>Withdraw consent for data collection or usage.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-3 text-blue-500">
          6. Updates to This Policy
        </h2>
        <p className="mb-4 text-gray-700">
          We may update this Privacy Policy from time to time. Please review
          this page periodically for any changes.
        </p>

        <h2 className="text-2xl font-bold mb-3 text-blue-500">7. Contact Us</h2>
        <p className="mb-4 text-gray-700">
          If you have any questions or concerns about our Privacy Policy, please
          contact us at:
        </p>
        <p className="text-gray-700 font-bold">
          Email: support@dentistdna.com <br />
          Phone: +1 (800) 123-4567
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
