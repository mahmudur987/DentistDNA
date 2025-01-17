// app/terms-of-service/page.js
import React from "react";

const TermsOfService = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">
          Terms of Service
        </h1>
        <p className="mb-4 text-gray-700">
          Welcome to Dentist DNA. By accessing and using our website, you agree
          to the following terms and conditions. Please read them carefully.
        </p>

        <h2 className="text-2xl font-bold mb-3 text-blue-500">
          1. Acceptance of Terms
        </h2>
        <p className="mb-4 text-gray-700">
          By accessing our website or using our services, you agree to comply
          with these Terms of Service and any applicable laws and regulations.
          If you do not agree, please refrain from using our website or
          services.
        </p>

        <h2 className="text-2xl font-bold mb-3 text-blue-500">
          2. Use of the Website
        </h2>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>You must be at least 18 years old to use our services.</li>
          <li>
            You agree not to use our website for any illegal or unauthorized
            purpose.
          </li>
          <li>
            You are responsible for maintaining the confidentiality of your
            account credentials.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-3 text-blue-500">
          3. Intellectual Property
        </h2>
        <p className="mb-4 text-gray-700">
          All content on this website, including text, images, logos, and
          graphics, is the property of Dentist DNA and is protected by copyright
          laws. You may not reproduce, distribute, or use any content without
          prior written permission.
        </p>

        <h2 className="text-2xl font-bold mb-3 text-blue-500">
          4. Service Availability
        </h2>
        <p className="mb-4 text-gray-700">
          We strive to ensure uninterrupted access to our website and services.
          However, we cannot guarantee availability at all times. We reserve the
          right to modify, suspend, or discontinue any part of our services
          without notice.
        </p>

        <h2 className="text-2xl font-bold mb-3 text-blue-500">
          5. Limitation of Liability
        </h2>
        <p className="mb-4 text-gray-700">
          Dentist DNA is not liable for any direct, indirect, incidental, or
          consequential damages resulting from the use or inability to use our
          website or services.
        </p>

        <h2 className="text-2xl font-bold mb-3 text-blue-500">
          6. User Responsibilities
        </h2>
        <p className="mb-4 text-gray-700">
          You agree to provide accurate and complete information when using our
          services. You are responsible for any actions taken under your
          account.
        </p>

        <h2 className="text-2xl font-bold mb-3 text-blue-500">
          7. Changes to Terms
        </h2>
        <p className="mb-4 text-gray-700">
          We may update these Terms of Service from time to time. Any changes
          will be effective immediately upon posting. Continued use of our
          website constitutes acceptance of the updated terms.
        </p>

        <h2 className="text-2xl font-bold mb-3 text-blue-500">
          8. Governing Law
        </h2>
        <p className="mb-4 text-gray-700">
          These terms are governed by the laws of [Your Country/State]. Any
          disputes arising from these terms will be resolved in the courts of
          [Your Jurisdiction].
        </p>

        <h2 className="text-2xl font-bold mb-3 text-blue-500">9. Contact Us</h2>
        <p className="mb-4 text-gray-700">
          If you have any questions or concerns about these Terms of Service,
          please contact us at:
        </p>
        <p className="text-gray-700 font-bold">
          Email: support@dentistdna.com <br />
          Phone: +1 (800) 123-4567
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
