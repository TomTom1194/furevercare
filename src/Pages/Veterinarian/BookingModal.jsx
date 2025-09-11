import React, { useState, useEffect } from "react";
import booking from "../../Data/Vet/booking.json";

function BookingModal() {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [appointments, setAppointments] = useState([]);

  const hours = Array.from({ length: 10 }, (_, i) => i + 8); // 8-17
  const todayDate = new Date();
  const todayDay = todayDate.getDate();
  const todayStr = todayDate.toISOString().split("T")[0]; // YYYY-MM-DD
  const days = Array.from({ length: 30 }, (_, i) => i + 1); // 1-30

  useEffect(() => {
    setAppointments(booking);
  }, []);

  const handleSelect = (day, hour) => {
    if (day < todayDay) return; // không chọn ngày đã trôi qua

    const isBooked = appointments.some((a) => {
      const aDate = new Date(a.date);
      return aDate.getDate() === day && a.time === hour;
    });
    if (isBooked) return;

    if (selectedSlot?.day === day && selectedSlot?.hour === hour) {
      setSelectedSlot(null);
    } else {
      setSelectedSlot({ day, hour });
    }
  };
  console.log(todayStr);
  const isSlotBooked = (day, hour) => {
    return appointments.some((a) => {
      const aDate = new Date(a.date);
      return aDate.getDate() === day && a.time === hour;
    });
  };

  const isSlotBookedToday = (day, hour) => {
    return appointments.some((a) => {
      return (
        a.create_date.startsWith(todayStr) &&
        new Date(a.date).getDate() === day &&
        a.time === hour
      );
    });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Lịch hẹn bác sĩ thú y</h2>
      <p>September 2025</p>
      <div
        className="table-responsive"
        style={{ maxHeight: "500px", overflowY: "auto" }}
      >
        <table className="table table-bordered table-hover text-center">
          <thead className="table-light sticky-top">
            <tr>
              <th scope="col">Ngày / Giờ</th>
              {hours.map((hour) => (
                <th key={hour} scope="col">
                  {hour}:00
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {days.map((day) => (
              <tr key={day}>
                <th scope="row">Ngày {day}</th>
                {hours.map((hour) => {
                  const isPast = day < todayDay;
                  const isSelected =
                    selectedSlot?.day === day && selectedSlot?.hour === hour;
                  const isBooked = isSlotBooked(day, hour);
                  const isTodayBooked = isSlotBookedToday(day, hour);
                  return (
                    <td
                      key={hour}
                      onClick={() => handleSelect(day, hour)}
                      style={{
                        cursor: isPast || isBooked ? "not-allowed" : "pointer",
                        backgroundColor: isBooked
                          ? isTodayBooked
                            ? "#FFD700"
                            : "red" // vàng
                          : isSelected
                          ? "#28a745" // xanh khi chọn
                          : isPast
                          ? "#aaaaaaff"
                          : "",
                        color:
                          isPast || isBooked || isTodayBooked
                            ? "white"
                            : isSelected
                            ? "white"
                            : "black",
                        transition: "0.2s",
                      }}
                    >
                      {isSelected ? "Đã chọn" : ""}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedSlot && (
        <div className="alert alert-success mt-3">
          Slot đã chọn: Ngày {selectedSlot.day}, {selectedSlot.hour}:00
        </div>
      )}
    </div>
  );
}

export default BookingModal;
