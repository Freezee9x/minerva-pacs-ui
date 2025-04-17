import { useState } from 'react';
import { Cloud, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import './App.css';
import logoImage from './assets/logo1.png';
import icon1 from './assets/1.svg';
import icon2 from './assets/2.svg';
import icon3 from './assets/3.svg';
import icon4 from './assets/4.svg';
import icon5 from './assets/5.svg';
import icon6 from './assets/6.svg';

export default function MinervaPACS() {
  const [selectedPage, setSelectedPage] = useState(2);
  const [viewSize, setViewSize] = useState("100");
  const [activeTab, setActiveTab] = useState("cases");

  const patients = [
    { id: 1, name: "Nguyen Van Hinh", code: "108432153", birthYear: "1989", gender: "Nam", date: "01/01/2018", service: "Chụp XQuang ngực" },
    { id: 2, name: "Nguyen Cong Tu", code: "108432153", birthYear: "1989", gender: "Nam", date: "01/01/2018", service: "Chụp XQuang ngực" },
    { id: 3, name: "Nguyen Van Hinh", code: "108432153", birthYear: "1989", gender: "Nam", date: "01/01/2018", service: "Chụp XQuang ngực" },
    { id: 4, name: "Nguyen Cong Tu", code: "108432153", birthYear: "1989", gender: "Nam", date: "01/01/2018", service: "Chụp XQuang ngực" },
    { id: 5, name: "Nguyen Van Hinh", code: "108432153", birthYear: "1989", gender: "Nam", date: "01/01/2018", service: "Chụp XQuang ngực" },
    { id: 6, name: "Nguyen Cong Tu", code: "108432153", birthYear: "1989", gender: "Nam", date: "01/01/2018", service: "Chụp XQuang ngực" },
    { id: 7, name: "Nguyen Van Hinh", code: "108432153", birthYear: "1989", gender: "Nam", date: "01/01/2018", service: "Chụp XQuang ngực" },
    { id: 8, name: "Nguyen Cong Tu", code: "108432153", birthYear: "1989", gender: "Nam", date: "01/01/2018", service: "Chụp XQuang ngực" },
    { id: 9, name: "Nguyen Van Hinh", code: "108432153", birthYear: "1989", gender: "Nam", date: "01/01/2018", service: "Chụp XQuang ngực" },
  ];

  return (
    <div className="minerva-container">
      {/* Header */}
      <header className="minerva-header">
        <div className="minerva-logo">
          <img src={logoImage} alt="Minerva PACS Logo" className="logo-image" />
          <span className="font-bold">MINERVA PACS</span>
        </div>
        <div className="top-bar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 16px' }}>

          {/* Nhóm icon */}
          <div className="minerva-tools" style={{ display: 'flex', gap: '8px' }}>
            <button className="tool-button">
              <img src={icon1} alt="Icon 1" />
            </button>
            <button className="tool-button">
              <img src={icon2} alt="Icon 2" />
            </button>
            <button className="tool-button">
              <img src={icon3} alt="Icon 3" />
            </button>
            <button className="tool-button">
              <img src={icon4} alt="Icon 4" />
            </button>
            <button className="tool-button">
              <img src={icon5} alt="Icon 5" />
            </button>
          </div>

          {/* Thông tin người dùng */}
          <div className="user-controls" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div className="user-dropdown" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span>Master (K1, K2)</span>
              <ChevronDown size={16} />
            </div>
            <img src={icon6} alt="User" className="rounded-full" style={{ width: '32px', height: '32px' }} />
            <span>Bs. Nguyễn Mạnh Hà</span>
          </div>
        </div>

      </header>

      {/* Main Content */}
      <div className="flex-1">
        {/* Upload Area */}
        <div className="upload-area">
          <button className="upload-button">
            <Cloud size={18} /> Chọn ảnh
          </button>
          <div style={{ marginTop: '8px', color: '#666' }}>hoặc</div>
          <div style={{ marginTop: '4px' }}>Kéo thả file, thư mục ảnh dicom</div>
        </div>

        {/* Instructions */}
        <div className="instructions">
          <div>- Chức năng hỗ trợ tốt trên trình duyệt Chrome hoặc Cốc cốc!</div>
          <div>- Giải nén thư mục chứa ảnh dicom trước khi tải lên</div>
          <div>- Chọn Tự động xóa nếu không muốn lưu trữ lâu dài trên PACS</div>
        </div>

        {/* Tab Navigation */}
        <div className="tab-container">
          <div
            className={`tab ${activeTab === "cases" ? "active" : "inactive"}`}
            onClick={() => setActiveTab("cases")}
          >
            Danh sách ca
          </div>
          <div
            className={`tab ${activeTab === "errors" ? "active" : "inactive"}`}
            onClick={() => setActiveTab("errors")}
          >
            Lỗi
          </div>
        </div>

        {/* Table Controls */}
        <div className="table-controls">
          <div className="paging-buttons">
            <button className="paging-button">
              <ChevronLeft size={16} />
            </button>
            <button className="paging-button">
              <ChevronRight size={16} />
            </button>
          </div>
          <span style={{ marginLeft: '8px' }}>Trang</span>
          <select
            className="control-select"
            value={selectedPage}
            onChange={(e) => setSelectedPage(parseInt(e.target.value))}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>

          <span style={{ marginLeft: '16px' }}>Hiển thị</span>
          <select
            className="control-select"
            value={viewSize}
            onChange={(e) => setViewSize(e.target.value)}
          >
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="200">200</option>
          </select>
          <span>ca</span>

          <span style={{ marginLeft: '16px' }}>Tổng số ca: 430</span>
        </div>

        {/* Table */}
        <table className="patient-table">
          <thead>
            <tr>
              <th>Tên bệnh nhân</th>
              <th>Mã bệnh nhân</th>
              <th>Năm sinh</th>
              <th>Giới tính</th>
              <th>
                <div className="sort-header">
                  Ngày/Giờ chụp
                  <ChevronDown size={16} />
                </div>
              </th>
              <th>
                <div className="sort-header">
                  Dịch vụ
                  <ChevronDown size={16} />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr
                key={patient.id}
                className={index === 2 ? "selected" : ""}
              >
                <td>{patient.name}</td>
                <td>{patient.code}</td>
                <td>{patient.birthYear}</td>
                <td>{patient.gender}</td>
                <td>{patient.date}</td>
                <td>{patient.service}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}