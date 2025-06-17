import React from 'react';
import './Termsandconditions.scss';

// Define the component with proper TypeScript
const TermsAndconditionsPage: React.FC = () => {
  return (
    <div className="terms-page">
      <div className="terms-container">
        <div className="terms-grid">
          <div className="terms-header">
            <h1 className="terms-title">Terms of Service</h1>
            <div className="terms-description">
              <p>
                These Terms of Service (the "Terms") of the MetricsNavigator
                application offering customer analytics and e-commerce shop
                reporting solution helping merchants understand and predict their
                customer behavior and store profitability (the "Service") and
                related website in the address{" "}
                <a href="https://metricsnavigator.ai" className="terms-link">
                  metricsnavigator.ai
                </a>{" "}
                (together the "Service") provided by MetricsNavigator ("we" or
                "us" or "our") govern your access to and use the Service.
              </p>
            </div>
          </div>
        </div>

        <div className="terms-content">
          <div className="terms-section">
            <p className="terms-paragraph">
              By using the Services you agree to be bound by these Terms and to
              comply with all applicable laws and regulations. We may revise these
              Terms from time to time and the most current version will always be
              posted on our website and apply to your use of the Service. By
              continuing to access or use the Service after revisions become
              effective, you agree to be bound by the revised Terms. In case the
              change of the Terms is material we may inform you of the changes in
              a way we deem best.
            </p>
          </div>

          <div className="terms-section">
            <p className="terms-paragraph">
              <strong>1. Acceptance of Terms</strong><br />
              By accessing and using MetricsNavigator, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </div>

          <div className="terms-section">
            <p className="terms-paragraph">
              <strong>2. Use License</strong><br />
              Permission is granted to temporarily download one copy of MetricsNavigator per device for personal, non-commercial transitory viewing only.
            </p>
          </div>

          <div className="terms-section">
            <p className="terms-paragraph">
              <strong>3. Disclaimer</strong><br />
              The materials on MetricsNavigator are provided on an 'as is' basis. MetricsNavigator makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </div>

          <div className="terms-section">
            <p className="terms-paragraph">
              <strong>4. Limitations</strong><br />
              In no event shall MetricsNavigator or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use MetricsNavigator, even if MetricsNavigator or a MetricsNavigator authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </div>

          <div className="terms-section">
            <p className="terms-paragraph">
              <strong>5. Privacy Policy</strong><br />
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.
            </p>
          </div>

          <div className="terms-section">
            <p className="terms-paragraph">
              <strong>6. Modifications</strong><br />
              MetricsNavigator may revise these terms of service for its website at any time without notice. By using this web site, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </div>

          <div className="terms-section">
            <p className="terms-paragraph">
              <strong>7. Contact Information</strong><br />
              If you have any questions about these Terms of Service, please contact us at support@metricsnavigator.ai
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndconditionsPage;