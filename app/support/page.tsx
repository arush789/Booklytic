import React from "react";

const SupportPage = () => {
  return (
    <div className="min-h-screen  text-gray-800 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Library Support</h1>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-2">How can we help you?</h2>
          <p className="text-gray-600">
            Welcome to the support page. If you have any questions about using
            our library's services, we're here to help! Browse the FAQs below or
            contact us directly.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Frequently Asked Questions
          </h2>
          <ul className="space-y-4">
            <li>
              <h3 className="font-medium">How do I get a library card?</h3>
              <p className="text-gray-600">
                You can apply for a library card by visiting the library in
                person or filling out the online registration form on our
                website.
              </p>
            </li>
            <li>
              <h3 className="font-medium">
                Can I renew my borrowed books online?
              </h3>
              <p className="text-gray-600">
                Yes, you can renew your books online by logging into your
                library account. Renewals are subject to availability.
              </p>
            </li>
            <li>
              <h3 className="font-medium">What are the library's hours?</h3>
              <p className="text-gray-600">
                Our library is open Monday through Friday from 9:00 AM to 8:00
                PM and on Saturdays from 10:00 AM to 5:00 PM. We are closed on
                Sundays and public holidays.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default SupportPage;
