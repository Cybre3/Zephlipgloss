import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Social Media:</span>
        </div>

        <div>
          <a href="/" class="me-4 text-reset">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="/" class="me-4 text-reset">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="/" class="me-4 text-reset">
            <i class="fab fa-google"></i>
          </a>
          <a href="/" class="me-4 text-reset">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="/" class="me-4 text-reset">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="/" class="me-4 text-reset">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </section>

      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Zephlipgloss
              </h6>
              <p>Placeholder</p>
            </div>
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </p>
              <p>
                <Link to="/terms-and-conditions">Terms and Conditions</Link>
              </p>
              <p>
                <Link to="/">Zephlipgloss.com</Link>
              </p>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i class="fas fa-home me-3"></i> Philadelphia, PA, US
              </p>
              <p>
                <i class="fas fa-envelope me-3"></i>
                info@example.com
              </p>
              <p>
                <i class="fas fa-phone me-3"></i> + 01 234 567 88
              </p>
              <p>
                <i class="fas fa-print me-3"></i> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>

      <div class="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        Copyright © 2021 Zephlipgloss.com - All Rights Reserved
        <a class="text-reset fw-bold" href="https://mdbootstrap.com/">
          {/* Placeholder.com */}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
