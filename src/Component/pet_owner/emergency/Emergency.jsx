import React from "react";

function Emergency() {
    const vetContacts = [
        {
            "id": 1,
            "name": "Dr. Emily Carter",
            "specialization": "animal welfare",
            "email": "emily.carter@petshelter.com",
            "phone": "+1-202-555-0110",
            "image": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "working_time": "Mon - Fri, 9:00 AM - 5:00 PM"
        },
        {
            "id": 2,
            "name": "Dr. Michael Nguyen",
            "specialization": "dentistry",
            "email": "michael.nguyen@petshelter.com",
            "phone": "+1-202-555-0111",
            "image": "https://images.pexels.com/photos/15962799/pexels-photo-15962799.jpeg",
            "working_time": "Tue - Sat, 10:00 AM - 6:00 PM"
        },
        {
            "id": 3,
            "name": "Dr. Sarah Johnson",
            "specialization": "dermatology",
            "email": "sarah.johnson@petshelter.com",
            "phone": "+1-202-555-0112",
            "image": "https://images.pexels.com/photos/12889997/pexels-photo-12889997.jpeg",
            "working_time": "Mon - Fri, 8:30 AM - 4:30 PM"
        }
    ];

    const hotlines = [
        { name: "Pet Poison Control Center", phone: "1800 123 456" },
        { name: "24/7 Veterinary Emergency Line", phone: "1800 222 333" },
        { name: "Animal Rescue Hotline", phone: "1800 444 555" },
    ];

    return (
        <div className="emergency container my-5">
            <div className="card shadow-sm mb-4">
                <div className="card-header bg-brown text-white fw-bold">Veterinary Contacts</div>
                <div className="card-body">
                    <div className="list-group">
                        {vetContacts.map((vet, index) => (
                            <div key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 className="mb-1">{vet.name}</h6>
                                    <small className="text-muted">{vet.email}</small>
                                </div>
                                <a href={`tel:${vet.phone}`} className="btn btn-outline-primary btn-sm text-nowrap">
                                    📞 {vet.phone}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <div className="card shadow-sm mb-4">
                <div className="card-header bg-warning text-dark fw-bold">Hotlines & Help Centers</div>
                <div className="card-body">
                    <ul className="list-group">
                        {hotlines.map((hotline, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                <span>{hotline.name}</span>
                                <a href={`tel:${hotline.phone}`} className="btn btn-outline-danger btn-sm text-nowrap">
                                    📞 {hotline.phone}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>


            <div className="card shadow-sm">
                <div className="card-header bg-success text-white fw-bold">Contact Us</div>
                <div className="card-body">
                    <p><strong>📍 Address:</strong> 21bis Hau Giang,Tan Binh, Ho Chi Minh City, Vietnam</p>
                    <p><strong>📧 Email:</strong> <a href="mailto:support@petcare.com">support@furevercare.com</a></p>
                    <p><strong>📞 Hotline:</strong> <a href="tel:0123456789">+1 (123) 456-7890</a></p>
                    <div className="mt-3">
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0466913070227!2d106.66085841023961!3d10.80773595857173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175293ca6cabe9b%3A0xfe7e5f0c4d1672c3!2zMjFCaXMgSOG6rXUgR2lhbmcsIFBoxrDhu51uZyA0LCBUw6JuIELDrG5oLCBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1757488921581!5m2!1sen!2s"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Emergency;
