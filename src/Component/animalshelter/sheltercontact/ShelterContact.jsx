function ShelterContact() {
  return (
    <div className="contactus">
      {/* HeroBanner */}
      <section className="position-relative">
        <img
          src="https://smdp.com/wp-content/uploads/sites/21/2024/07/%E2%80%98Kitten-season-begins-at-the-Santa-Monica-Animal-Shelter-1.jpg"
          className="img-fluid w-100"
          alt="Hero Banner"
          style={{ height: "600px", objectFit: "cover" }}
        />

        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        ></div>

        <div className="position-absolute top-50 start-50 translate-middle text-center text-white px-3">
          <h2 className="display-6 fw-bold">Contact Us</h2>
          <p className="lead">
            Feel free to reach out to us via email, phone, or visit our office.
            We’d love to hear from you!
          </p>
        </div>
      </section>

      {/* InforContact */}
      <section>
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-lg-5">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body">
                  <h4 className="card-title fw-bold text-success mb-4">
                    Team Contact Information
                  </h4>
                  <p className="card-text mb-3">
                    <i className="bi bi-envelope-fill text-danger me-2"></i>
                    <strong>Email:</strong> contact@furevercare.com
                  </p>
                  <p className="card-text mb-3">
                    <i className="bi bi-telephone-fill text-primary me-2"></i>
                    <strong>Phone:</strong> +1 (123) 456-7890
                  </p>
                  <p className="card-text mb-3">
                    <i className="bi bi-geo-alt-fill text-warning me-2"></i>
                    <strong>Address:</strong> 21bis Hau Giang, Tan Binh, Ho Chi
                    Minh, VietNam
                  </p>
                  <p className="card-text mb-3">
                    <i className="bi bi-globe2 text-info me-2"></i>
                    <strong>Website:</strong> www.furevercare.com
                  </p>
                  <p className="card-text">
                    <i className="bi bi-clock-fill text-secondary me-2"></i>
                    <strong>Working Hours:</strong> Mon - Fri, 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body p-0">
                  <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0466913070227!2d106.66085841023961!3d10.80773595857173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175293ca6cabe9b%3A0xfe7e5f0c4d1672c3!2zMjFCaXMgSOG6rXUgR2lhbmcsIFBoxrDhu51uZyA0LCBUw6JuIELDrG5oLCBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1757488921581!5m2!1sen!2s"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ShelterContact;
