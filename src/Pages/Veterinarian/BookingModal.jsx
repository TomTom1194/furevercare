import React, { useState, useEffect } from "react";

const BookingModal = ({ show, vet, handleClose }) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (!vet) return;

    // Nếu vet có schedule trong JSON thì dùng, nếu không tạo mock
    if (vet.schedule && vet.schedule.length > 0) {
      setBookings(vet.schedule);
    } else {
      const days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ];
      const hours = Array.from({ length: 14 }, (_, i) => i + 8); // 8 -> 21
      const mockSchedule = [];
      days.forEach((day) => {
        hours.forEach((hour) => {
          mockSchedule.push({
            day,
            time: hour,
            status: "available",
          });
        });
      });
      setBookings(mockSchedule);
    }
  }, [vet]);

  const handleSlotClick = (slotIndex) => {
    setBookings((prev) =>
      prev.map((b, index) =>
        index === slotIndex && b.status === "available"
          ? { ...b, status: "booked" }
          : b
      )
    );
    alert(
      `You booked an appointment on ${bookings[slotIndex].day} at ${bookings[slotIndex].time}:00 with ${vet.name}`
    );
  };

  if (!show || !vet) return null;

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const hours = Array.from({ length: 14 }, (_, i) => i + 8);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          maxWidth: "95%",
          maxHeight: "90%",
          overflowY: "auto",
        }}
      >
        <h3 className="mb-3">{vet.name}'s Schedule</h3>
        <div style={{ display: "flex" }}>
          <table
            style={{
              borderCollapse: "collapse",
              minWidth: "700px",
              marginRight: "20px",
            }}
          >
            <thead>
              <tr>
                <th style={{ border: "1px solid #ccc", padding: "5px" }}>
                  Time
                </th>
                {days.map((day) => (
                  <th
                    key={day}
                    style={{
                      border: "1px solid #ccc",
                      padding: "5px",
                      textAlign: "center",
                      backgroundColor: "#f0f0f0",
                    }}
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {hours.map((hour) => (
                <tr key={hour}>
                  <td
                    style={{
                      border: "1px solid #ccc",
                      padding: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    {hour}:00
                  </td>
                  {days.map((day) => {
                    const slotIndex = bookings.findIndex(
                      (b) => b.day === day && b.time === hour
                    );
                    const slot = bookings[slotIndex];
                    return (
                      <td
                        key={day + hour}
                        onClick={() =>
                          slot &&
                          slot.status === "available" &&
                          handleSlotClick(slotIndex)
                        }
                        style={{
                          border: "1px solid #ccc",
                          padding: "5px",
                          textAlign: "center",
                          cursor:
                            slot && slot.status === "available"
                              ? "pointer"
                              : "not-allowed",
                          backgroundColor:
                            slot && slot.status === "available"
                              ? "white"
                              : "#f8c8d8",
                        }}
                      >
                        {slot ? slot.status : "-"}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>

          {/* Legend */}
          <div>
            <h5>Legend</h5>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "5px",
              }}
            >
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: "white",
                  border: "1px solid #ccc",
                  marginRight: "5px",
                }}
              ></div>
              <span>Available</span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: "#f8c8d8",
                  marginRight: "5px",
                }}
              ></div>
              <span>Booked</span>
            </div>
          </div>
        </div>

        {/* Close button */}
        <div className="mt-3 text-end">
          <button
            onClick={handleClose}
            style={{
              backgroundColor: "#7f5539",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
