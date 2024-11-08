import "./_style.scss";
const Privacy = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="privacy">
      <div className="">
        <div className="privacy_head">
          <h1 className="font-size-40 font-weight-700 text-primary">Privacy Policy</h1>
        </div>
        <div className="container">
          <div className="terms_title">
            <h2 className="font-size-32 font-weight-700 text-text">Preamble</h2>
            <p>Last Updated: 01.10.{currentYear}</p>
            <p>
              Welcome to Email Signature Generator! By using our service at{" "}
              <a className="priv_link" href="http://www.emailsignaturegenerator.ai">
                http://www.emailsignaturegenerator.ai
              </a>{" "}
              {`("Service", "Platform")`}, you agree to be bound by these Terms and Conditions ({`"Terms"`}). If you do
              not agree to these Terms, you may not use the Service.
            </p>

            <div>
              <h2>1. Information We Collect</h2>
              <p>
                The types of Personal Data collected by{" "}
                <a className="priv_link" href="http://www.emailsignaturegenerator.ai">
                  www.emailsignaturegenerator.ai
                </a>
                , either directly or through third parties, include:
              </p>

              <ul className="privacy_ul">
                <li>Email address</li>
                <li>Usage Data</li>
                <li>Cookies</li>
                <li>First and last names</li>
                <li>Company name</li>
                <li>Unique device identifiers for advertising</li>
                <li>Phone number</li>
                <li>Country and city</li>
                <li>Geographical location</li>
                <li>Address</li>
                <li>Username</li>
                <li>ZIP/Postal code</li>
                <li>Language</li>
                <li>Device information</li>
              </ul>

              <p>Personal Data may be provided voluntarily by the User or collected automatically when using</p>
              <a className="priv_link" href="http://www.emailsignaturegenerator.ai">
                www.emailsignaturegenerator.ai
              </a>
              <p>
                Unless otherwise specified, all Data requested by
                <a className="priv_link" href="http://www.emailsignaturegenerator.ai">
                  www.emailsignaturegenerator.ai
                </a>{" "}
                is mandatory. Failure to provide this Data may prevent{" "}
                <a className="priv_link" href="http://www.emailsignaturegenerator.ai">
                  www.emailsignaturegenerator.ai
                </a>{" "}
                from delivering its Services. In instances where{" "}
                <a className="priv_link" href="http://www.emailsignaturegenerator.ai">
                  www.emailsignaturegenerator.ai
                </a>{" "}
                specifies that certain Data is not mandatory, Users are free to withhold such Data without any impact on
                the availability or operation of the Service.
              </p>
              <p>
                Any use of Cookies or other tracking tools by{" "}
                <a className="priv_link" href="http://www.emailsignaturegenerator.ai">
                  www.emailsignaturegenerator.ai
                </a>{" "}
                or third-party services used by{" "}
                <a className="priv_link" href="http://www.emailsignaturegenerator.ai">
                  www.emailsignaturegenerator.ai
                </a>{" "}
                serves the purpose of providing the Service requested by the User, in addition to any other purposes
                described in this document and in the Cookie Policy, if available.
              </p>
              <p>
                Users are responsible for any third-party Personal Data obtained, published, or shared through{" "}
                <a className="priv_link" href="http://www.emailsignaturegenerator.ai">
                  www.emailsignaturegenerator.ai
                </a>{" "}
                and must confirm that they have the third party&apos;s consent to provide the Data to the Owner.
              </p>
            </div>

            <div className="scope">
              <h2>2. How We Process Your Information</h2>
              <p>Processing Methods</p>
              <p>
                The Company takes reasonable precautions to prevent unauthorized access, disclosure, modification, or
                destruction of the Data. The Data is processed using computers and/or IT-enabled tools, following
                organizational procedures strictly related to the purposes outlined. Besides the Owner, in some cases,
                Data may be accessible to specific individuals involved with the operation of{" "}
                <a className="priv_link" href="http://www.emailsignaturegenerator.ai">
                  www.emailsignaturegenerator.ai
                </a>{" "}
                or external parties (such as third-party technical service providers, mail carriers, hosting providers,
                IT companies, communication agencies) appointed, if necessary, as Data Processors.
              </p>
            </div>

            <div className="scope">
              <h2>3. Why We Process Your Information</h2>
              <p>We collect and use your Data for the following purposes:</p>
              <ul className="privacy_ul">
                <li>Providing and managing our Services</li>
                <li>Fulfilling legal obligations</li>
                <li>Responding to law enforcement requests</li>
                <li>Protecting our rights, property, and safety, and that of our Users and third parties</li>
                <li>Detecting and preventing fraud and security threats</li>
                <li>Conducting analytics and research to improve our Services</li>
                <li>Managing user accounts and payments</li>
                <li>Communicating with you, including for marketing and promotional purposes</li>
              </ul>
            </div>

            {/* Additional sections omitted for brevity */}

            <div className="scope">
              <h2>9. Contact Information</h2>
              <p>
                For any questions or concerns about this Privacy Policy, please contact us at [contact information].
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
