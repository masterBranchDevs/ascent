import React from 'react';
import './privacypolicy.scss';
const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Spacer for navbar */}
      <div className="h-20"></div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Title and Introduction */}
          <div className="lg:sticky lg:top-24">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-10 leading-tight">
              Privacy Policy
            </h1>
            <div className="text-gray-600 text-base leading-relaxed">
              <p>
                At Scoop Investment, your privacy is important to us. This Privacy Policy outlines the types of personal
                information we collect and how we use, store, and protect it.
              </p>
            </div>
          </div>

          {/* Right Column - Sections */}
          <div className="space-y-10">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-8 tracking-wide">
                1. Information We Collect
              </h2>
              <p className="text-sm leading-relaxed text-gray-700">
                We may collect personal details such as name, email, phone number, and financial information when you register,
                subscribe to our services, or fill out a form.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-8 tracking-wide">
                2. How We Use Your Information
              </h2>
              <p className="text-sm leading-relaxed text-gray-700">
                We use your information to provide our services, improve user experience, send periodic emails, and respond to
                inquiries.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-8 tracking-wide">
                3. Protection of Information
              </h2>
              <p className="text-sm leading-relaxed text-gray-700">
                We implement appropriate data collection, storage, and processing practices and security measures to protect
                against unauthorized access, alteration, or disclosure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-8 tracking-wide">
                4. Sharing of Information
              </h2>
              <p className="text-sm leading-relaxed text-gray-700">
                We do not sell, trade, or rent users' personal identification information to others. We may share generic
                aggregated information not linked to any personal identification.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-8 tracking-wide">
                5. Third-party Services
              </h2>
              <p className="text-sm leading-relaxed text-gray-700">
                Our site may contain links to external sites. We are not responsible for the privacy practices or the content of
                such sites.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-8 tracking-wide">
                6. Changes to This Privacy Policy
              </h2>
              <p className="text-sm leading-relaxed text-gray-700">
                Scoop Investment has the discretion to update this policy at any time. You acknowledge and agree that it is your
                responsibility to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-8 tracking-wide">
                7. Your Acceptance
              </h2>
              <p className="text-sm leading-relaxed text-gray-700">
                By using our site, you signify your acceptance of this policy. If you do not agree, please do not use our site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-8 tracking-wide">
                8. Contacting Us
              </h2>
              <p className="text-sm leading-relaxed text-gray-700">
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:contact@scoopinvestment.com" className="text-blue-600 underline">
                  contact@scoopinvestment.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
