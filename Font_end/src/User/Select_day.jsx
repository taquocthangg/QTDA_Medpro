import React, { useState, useEffect } from 'react';
// import { choosehopital } from '../../data'
import DatePicker from 'react-datepicker';
import '../../src/componnets/ChonBenhVien/Choose.css'
import { Link, useNavigate, useParams } from 'react-router-dom';
import api from './../pages/api'
const Select_day = () => {
  const [query, setQuery] = useState("");
  const history = useNavigate()
  const [data_BV, setData_BV] = useState([]);
  const { getId } = useParams();
  const id_benhNhan = localStorage.getItem('userId');
  const id_benhVien = localStorage.getItem('id_benhVien');
  const [selectedScheduleId, setSelectedScheduleId] = useState(null);
  const handleScheduleClick = (scheduleId) => {
    // Lưu id lịch đã chọn vào state
    setSelectedScheduleId(scheduleId);
  };
  const data = [
    {
      id: "1",
      timeSlot: "7:00 - 8:00 AM"
    },
    {
      id: "2",
      timeSlot: "8:00 - 9:00 AM"
    },
    {
      id: "3",
      timeSlot: "10:00 - 11:00 AM"
    },
    {
      id: "4",
      timeSlot: "12:00 - 13:00 AM"
    },
    {
      id: "5",
      timeSlot: "14:00 - 15:00 AM"
    },
    {
      id: "6",
      timeSlot: "16:00 - 17:00 AM"
    },
  ];

  const [selectedDate, setSelectedDate] = useState(null);
  const [scheduleData, setScheduleData] = useState({
    err: 0,
    mess: '',
    count: '0',
    schedule: [],
  });
  const handleDateChange = async (date) => {
    setSelectedDate(date);
    if (date) {
      try {
        const doctorId = "3";
        const specialtyId = "1";
        const timeSlot = ["9:00 - 10:00 AM"];

        const activateDay = date.toISOString();
        console.log(activateDay)
        const response = await api.post('/auth/lichkham/' + doctorId, { activateDay });
        setScheduleData(response.data)
        console.log('Response from API:', response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }

  const [selectedSlots, setSelectedSlots] = useState([]);

  const handleSlotClick = (timeSlot) => {
    const isSlotSelected = selectedSlots.includes(timeSlot);

    if (isSlotSelected) {
      setSelectedSlots(selectedSlots.filter(selectedSlot => selectedSlot !== timeSlot));
    } else {
      setSelectedSlots([...selectedSlots, timeSlot]);
    }
  };
  const handleDeleteSchedule = async () => {
    if (selectedScheduleId) {
      const confirmDelete = window.confirm('Bạn có muốn đặt lịch khám này không?');

      if (confirmDelete) {
        try {
          // Gọi API để xóa lịch khám
          const response = await api.post(`/auth/datlich/` + selectedScheduleId, { id_benhNhan, id_benhVien });
          console.log('Response from API:', response.data);
          console.log(id_benhNhan)
          handleDateChange(selectedDate)

        } catch (error) {
          console.error('Error deleting schedule:', error);
        }
      }
    }
  };

  return (

    <main>
      <div className="format__header">
        <p onClick={() => { history(-1) }}>Trang Chủ </p> {'>'}  <p onClick={() => { history(-1) }}>Chọn Bệnh Viện</p> {'>'} <p onClick={() => { history(-1) }} >Chọn chuyên khoa</p> {'>'}<p onClick={() => { history(-1) }}>Chọn bác sĩ</p> {'>'} <p>Đặt lịch</p>
      </div>
      <div className="select__hopital">
        {/* <div className="select__hopital-search">
                    <input
                        className=""
                        placeholder="Tìm nhanh bác sĩ..."
                        onChange={(e) => setQuery(e.target.value.toLowerCase())}
                    />
                </div> */}
        <ul className="select__hopital-list">
          <div className="basi_body_add">
            <label htmlFor="username">Chọn ngày : </label>
            <DatePicker
              selected={selectedDate}
              minDate={new Date()}
              onChange={handleDateChange} />

            <p>Thông tin lịch khám:</p>
            <div className="bacsi_body_div">

              {(Array.isArray(scheduleData.schedule) && scheduleData.schedule.length > 0) ? (
                scheduleData.schedule.map(item => (
                  <div key={item.id} onClick={() => handleScheduleClick(item.id)}  >
                    <button className="basi_body_time-btn">
                      {item.timeSlot}
                    </button>
                  </div>
                ))
              ) : (
                <p>Không có lịch khám.</p>
              )}
            </div>
            <button className="basi_body_time-btn basi_body_time-btn-add" onClick={handleDeleteSchedule} disabled={!selectedScheduleId}>
              Xóa lịch khám
            </button>

          </div>
        </ul>
      </div>
    </main>

  )
}

export default Select_day