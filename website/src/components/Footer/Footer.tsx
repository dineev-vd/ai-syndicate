import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-tabs">
          <div>
            <div>
              <div>EXPLORE</div>
              <div>What We Do</div>
              <div>Funding</div>
            </div>
            <div className="footer-socials">
              <div>CONTACT US</div>
              <div>
                <i className="bi bi-telephone"></i>
                <div>00971 7 2260000</div>
              </div>
              <div>
                <i className="bi bi-envelope"></i>
                <div>info@rakchamber.ae</div>
              </div>
              <div>
                <i className="bi bi-youtube"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-twitter"></i>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>ABOUT</div>
              <div>About Us</div>
              <div>Meet The Team</div>
              <div>FAQs</div>
              <div>Privacy Policy</div>
              <div>Support</div>
              <div>Contacts</div>
            </div>
          </div>
          <div>
            <div>
              <div>EXPLORE</div>
              <div>How It Works</div>
              <div>Education Center</div>
              <div>Experts Directory</div>
              <div>Fees</div>
              <div>Enterprise</div>
              <div>China</div>
            </div>
          </div>
          <div>
            <div>
              <div>NEWSLETTER</div>
              <div>
                Discover new and clever products in the Indiegogo newsletter
              </div>
              <input placeholder="Your email adress"></input>
              <label>
                <input type={"checkbox"} />I agree to the Terms of Use and have
                read and understand the Privacy Policy
              </label>
              <button>SIGN ME UP</button>
            </div>
          </div>
        </div>
        <div className="footer-big-text">
          <p>
            Check out the background of our broker-dealer and investment
            professionals on FINRA's broker/check.
          </p>

          <p>
            This site is operated by SeedInvest Technology, LLC ("SeedInvest"),
            which is not a registered broker-dealer. SeedInvest does not give
            investment advice, endorsement, analysis or recommendations with
            respect to any securities. All securities listed here are being
            offered by, and all information included on this site is the
            responsibility of, the applicable issuer of such securities.
            SeedInvest has not taken any steps to verify the adequacy, accuracy
            or completeness of any information. Neither SeedInvest nor any of
            its officers, directors, agents and employees makes any warranty,
            express or implied, of any kind whatsoever related to the adequacy,
            accuracy or completeness of any information on this site or the use
            of information on this site. By accessing this site and any pages
            thereof, you agree to be bound by the Terms of Use and Privacy
            Policy.
          </p>

          <p>
            All securities-related activity is conducted by SI Securities, LLC
            ("SI Securities"), an affiliate of SeedInvest, and a registered
            broker-dealer, and member FINRA/SIPC, located at 135 Madison Avenue,
            5th Floor, New York, New York 10016. SI Securities does not make
            investment recommendations and no communication, through this
            website or in any other medium should be construed as a
            recommendation for any security offered on or off this investment
            platform. Equity crowdfunding investments in private placements, and
            start-up investments in particular, are speculative and involve a
            high degree of risk and those investors who cannot afford to lose
            their entire investment should not invest in start-ups. Companies
            seeking startup investments through equity crowdfunding tend to be
            in earlier stages of development and their business model, products
            and services may not yet be fully developed, operational or tested
            in the public marketplace. There is no guarantee that the stated
            valuation and other terms are accurate or in agreement with the
            market or industry valuations. Additionally, investors may receive
            illiquid and/or restricted stock that may be subject to holding
            period requirements and/or liquidity concerns. In the most sensible
            investment strategy for start-up investing, start-ups should only be
            part of your overall investment portfolio. Further, the start-up
            portion of your portfolio may include a balanced portfolio of
            different start-ups. Investments in startups are highly illiquid and
            those investors who cannot hold an investment for the long term (at
            least 5-7 years) should not invest.
          </p>

          <p>
            SI Securities does not provide custody services in connection any
            investments made through the platform. Customer securities and
            account balances, not held directly by the customer or in escrow,
            are held by New Direction Trust Company (“NDTCO”) for the benefit of
            customers. NDTCO is an unaffiliated limited purpose trust company
            chartered under the laws of the State of Kansas.
          </p>

          <p></p>
          <p>© 2022 SeedInvest Technology, LLC · Made with care in NYC</p>
        </div>
        <div className="footer-under-text">
          <div>Terms of Use</div>
          <div>Privacy Policy</div>
          <div>Cookie Policy</div>
          <div>Do Not Sell My Personal Information</div>
          <div>Accessibility</div>
          <div>© 2022 Indiegogo, Inc. All Rights Reserved</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
