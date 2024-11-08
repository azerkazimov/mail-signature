import "./_style.scss";
const CookiesPolicy = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className="cookie">
      <div>
        <div className="cookie_head">
          <h1 className="font-size-40 font-weight-700 text-primary">Cookies policy</h1>
        </div>
        <div className="container">
          <div className="cookie_title">
            <h2 className="font-size-32 font-weight-700 text-text">Cookies Policy</h2>
            <p className="pb-5">**Last updated and effective date: {currentDate}**</p>
            <p>
              {`This Cookies Policy explains how emailsignaturegenerator.ai ("we", "us", or "our") uses cookies and similar technologies to recognize you when you visit our website at emailsignaturegenerator.ai ("Website"). It explains what these technologies are, why we use them, and your rights to control our use of them.`}
            </p>

            <div>
              <h2>What Are Cookies?</h2>
              <p>
                {`Cookies are small text files that are placed on your device (computer or mobile) when you visit a website. They help the website recognize your device and remember information about your visit, such as your preferences and login details.`}
              </p>
            </div>

            <div className="scope">
              <h2>How We Use Cookies</h2>
              <p className="pb-5">We use cookies for various purposes, including:</p>
              <ul>
                <li>
                  <strong>Essential Cookies:</strong>{" "}
                  {`These are necessary for the operation of our website. They enable you to navigate the site and use its features.`}
                </li>
                <li>
                  <strong>Performance Cookies:</strong>{" "}
                  {`These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve the functionality of our site.`}
                </li>
                <li>
                  <strong>Functional Cookies:</strong>{" "}
                  {`These cookies allow our website to remember choices you make (such as your username and language preferences) and provide enhanced, more personal features.`}
                </li>
                <li>
                  <strong>Advertising Cookies:</strong>{" "}
                  {`These cookies are used to deliver advertisements that are relevant to you and your interests. They also help us measure the effectiveness of our advertising campaigns.`}
                </li>
              </ul>
            </div>

            <div className="scope">
              <h2>Types of Cookies We Use</h2>
              <ul>
                <li>
                  <strong>Session Cookies:</strong>{" "}
                  {`These are temporary cookies that expire once you close your browser.`}
                </li>
                <li>
                  <strong>Persistent Cookies:</strong>{" "}
                  {`These remain on your device for a set period or until you delete them.`}
                </li>
                <li>
                  <strong>Third-Party Cookies:</strong>{" "}
                  {`These are set by domains other than the one you are visiting, such as analytics or advertising services.`}
                </li>
              </ul>
            </div>

            <div className="scope">
              <h2>Your Choices Regarding Cookies</h2>
              <p>
                {`You have the right to decide whether to accept or reject cookies. You can manage your cookie preferences through your browser settings. Most browsers allow you to:`}
              </p>
              <ul>
                <li>View cookies that are set on your device</li>
                <li>Delete cookies</li>
                <li>Block cookies</li>
                <li>Receive a warning before a cookie is stored on your device</li>
              </ul>
              <p>{`For more information on how to manage cookies, visit the help section of your browser.`}</p>
            </div>

            <div className="scope">
              <h2>Changes to This Cookies Policy</h2>
              <p>
                {`We may update this Cookies Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically to stay informed about our use of cookies.`}
              </p>
            </div>

            <div className="scope">
              <h2>Contact Us</h2>
              <p>
                {`If you have any questions about our use of cookies or other technologies, please contact us at ___.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookiesPolicy;
