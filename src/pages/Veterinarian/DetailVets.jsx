import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import vets from "../../Data/Vet/veterinarian.json";
import caseStudies from "../../Data/Vet/casestudy.json";
import bookings from "../../Data/Vet/booking.json";

function VetDetail() {
  const { id } = useParams();
  const vet = vets.find((v) => v.id === parseInt(id));
  const vetCases = caseStudies.filter((c) => c.name === vet?.name);

  const [activeTab, setActiveTab] = useState("profile");

  useEffect(() => {
    setActiveTab("profile");
  }, [id]);

  if (!vet) {
    return <p className="text-center mt-5">Veterinarian not found.</p>;
  }

  // Xử lý dữ liệu lịch hẹn
  const today = new Date();
  const appointments = bookings.map((b) => ({
    ...b,
    dateObj: new Date(b.date + "T" + String(b.time).padStart(2, "0") + ":00"),
  }));

  const upcoming = appointments.filter((a) => a.dateObj >= today);
  const history = appointments.filter((a) => a.dateObj < today);

  const renderAppointments = (list) =>
    list.length === 0 ? (
      <p className="text-muted">No appointments.</p>
    ) : (
      <div className="table-responsive">
        <table className="table table-bordered table-sm align-middle text-center">
          <thead className="table-light">
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Time</th>
              <th>Pet ID</th>
              <th>Owner</th>
              <th>Reason</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {list.map((a) => (
              <tr key={a.id}>
                <td>{a.id}</td>
                <td>{a.date}</td>
                <td>{a.time}:00</td>
                <td>{a.pet_id}</td>
                <td>{a.owner}</td>
                <td>{a.reason}</td>
                <td>
                  <div>{a.email}</div>
                  <div>{a.phone}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <div
        className="bg-light p-3"
        style={{ width: "250px", borderRight: "1px solid #ddd" }}
      >
        <h5 className="mb-4">Dashboard</h5>
        <ul className="nav flex-column gap-3">
          <li>
            <button
              className={`btn w-100 text-start ${
                activeTab === "profile"
                  ? "btn-dark text-white"
                  : "btn-outline-dark"
              }`}
              onClick={() => setActiveTab("profile")}
            >
              Profile Veterinarian
            </button>
          </li>
          <li>
            <button
              className={`btn w-100 text-start ${
                activeTab === "casestudy"
                  ? "btn-dark text-white"
                  : "btn-outline-dark"
              }`}
              onClick={() => setActiveTab("casestudy")}
            >
              Case Study
            </button>
          </li>
          <li>
            <button
              className={`btn w-100 text-start ${
                activeTab === "appointment"
                  ? "btn-dark text-white"
                  : "btn-outline-dark"
              }`}
              onClick={() => setActiveTab("appointment")}
            >
              Appointment
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4">
        {activeTab === "profile" && (
          <div>
            <h3>{vet.name}</h3>
            <img
              src={vet.image}
              alt={vet.name}
              style={{ width: "200px", borderRadius: "10px" }}
              className="mb-3"
            />
            <p>
              <strong>Specialization:</strong> {vet.specialization}
            </p>
            <p>
              <strong>Email:</strong> {vet.email}
            </p>
            <p>
              <strong>Phone:</strong> {vet.phone}
            </p>
            <p>
              <strong>Working Time:</strong> {vet.working_time}
            </p>
          </div>
        )}

        {activeTab === "casestudy" && (
          <div>
            <h3>Case Studies by {vet.name}</h3>
            {vetCases.length === 0 ? (
              <p className="text-muted">No case studies available.</p>
            ) : (
              vetCases.map((c) => (
                <div key={c.id} className="card mb-3">
                  <div className="card-body">
                    <h5>{c.title}</h5>
                    <p>{c.content1}</p>
                    <p>{c.content2}</p>
                    <small className="text-muted">
                      {c.date} - {c.name}
                    </small>
                    <div className="d-flex gap-2 mt-2">
                      <img
                        src={c.image1}
                        alt=""
                        style={{ width: "120px", borderRadius: "8px" }}
                      />
                      <img
                        src={c.image2}
                        alt=""
                        style={{ width: "120px", borderRadius: "8px" }}
                      />
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {activeTab === "appointment" && (
          <div>
            <h3>Appointments for {vet.name}</h3>
            <h5 className="mt-4">Upcoming</h5>
            {renderAppointments(upcoming)}

            <h5 className="mt-4">History</h5>
            {renderAppointments(history)}
          </div>
        )}
      </div>

      {/* Info Box */}
      <div
        className="p-4"
        style={{ width: "300px", borderLeft: "1px solid #ddd" }}
      >
        <h5>How to Use?</h5>
        <p className="text-muted small">
          - View <b>Profile</b> to see veterinarian info. <br />- Go to{" "}
          <b>Case Study</b> to review treatment cases. <br />- Use{" "}
          <b>Appointment</b> to manage bookings. <br />
        </p>
      </div>
    </div>
  );
}

export default VetDetail;
