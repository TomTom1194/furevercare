import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../../index.css"

function InforTeam() {
    // Team member data
    const teamMembers = [
        {
            id: 1,
            name: "Tang Thien Tan",
            role: "Team Leader",
            email: "tientan@example.com",
            slogan: "Leading the way to innovation 🐾",
            avatar: "https://randomuser.me/api/portraits/men/11.jpg"
        },
        {
            id: 2,
            name: "Pham Gia Bao",
            role: "Backend Developer",
            email: "giabao@example.com",
            slogan: "Building the logic behind the magic ✨",
            avatar: "https://randomuser.me/api/portraits/men/12.jpg"
        },
        {
            id: 3,
            name: "Nguyen Thanh Bao",
            role: "Frontend Developer",
            email: "thanhbao@example.com",
            slogan: "Designing clean and beautiful interfaces 🎨",
            avatar: "https://randomuser.me/api/portraits/men/13.jpg"
        },
        {
            id: 4,
            name: "Hong Ngoc",
            role: "UI/UX Designer",
            email: "hongngoc@example.com",
            slogan: "Crafting delightful user experiences 🌿",
            avatar: "https://randomuser.me/api/portraits/women/14.jpg"
        },
        {
            id: 5,
            name: "Quoc Anh",
            role: "Database Engineer",
            email: "quocanh@example.com",
            slogan: "Keeping data clean and structured 📂",
            avatar: "https://randomuser.me/api/portraits/men/15.jpg"
        },
        {
            id: 6,
            name: "Tran Van Huy",
            role: "QA Tester",
            email: "vanhuy@example.com",
            slogan: "Breaking things so they work better 🧪",
            avatar: "https://randomuser.me/api/portraits/men/16.jpg"
        }
    ];

    return (
        <div className="container py-5">

            <div className="row g-4">
                {teamMembers.map((member) => (
                    <div key={member.id} className="col-sm-6 col-lg-4">
                        <div className="card shadow border-0 h-100 text-center">
                            <img
                                src={member.avatar}
                                alt={member.name}
                                className="card-img-top rounded-circle mx-auto mt-4"
                                style={{
                                    width: "120px",
                                    height: "120px",
                                    objectFit: "cover",
                                    border: "4px solid #fff",
                                    boxShadow: "0 0 10px rgba(0,0,0,0.15)"
                                }}
                            />

                            <div className="card-body">
                                <h5 className="card-title fw-bold">{member.name}</h5>
                                <p className="text-primary fw-semibold mb-1">{member.role}</p>
                                <p className="text-muted fst-italic mb-3 slogan">"{member.slogan}"</p>
                                <p className="mb-0">
                                    <i className="bi bi-envelope-fill text-danger me-2"></i>
                                    <a href={`mailto:${member.email}`} className="text-decoration-none text-dark">
                                        {member.email}
                                    </a>
                                </p>
                            </div>

                            <div className="card-footer bg-light">
                                <small className="text-muted">FureverCare Team</small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default InforTeam;
