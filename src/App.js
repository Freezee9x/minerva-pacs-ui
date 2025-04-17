import React, { useState } from 'react';
import './App.css';

function App() {
  const [filter, setFilter] = useState('Value');
  const [dropdownStates, setDropdownStates] = useState([true, false, false, false]); // Trạng thái của các dropdown

  const toggleDropdown = (index) => {
    const updatedStates = [...dropdownStates];
    updatedStates[index] = !updatedStates[index];
    setDropdownStates(updatedStates);
  };

  return (
    <div className="app-container">
      {/* Tiêu đề */}
      <div className="header">
        <span>Cấu hình người dùng</span>
        <button className="close-btn">×</button>
      </div>

      <div className="main-content">
        {/* Sidebar */}
        <div className="sidebar">
          {/* Dropdown "Danh mục" */}
          <div className="sidebar-item" onClick={() => toggleDropdown(0)}>
            <span>{dropdownStates[0] ? '▼' : '▶'} Danh mục</span>
          </div>
          {dropdownStates[0] && (
            <div className="sidebar-subitem-content">
              <span>Tên filter</span>
              <span>Tên filter 1</span>
            </div>
          )}

          {/* Dropdown "danh mục 1" */}
          <div className="sidebar-item" onClick={() => toggleDropdown(1)}>
            <span>{dropdownStates[1] ? '▼' : '▶'} danh mục 1</span>
          </div>
          {dropdownStates[1] && (
            <div className="sidebar-subitem-content">
              <span>Sub item 1</span>
              <span>Sub item 2</span>
            </div>
          )}

          {/* Dropdown "danh mục 2" */}
          <div className="sidebar-item" onClick={() => toggleDropdown(2)}>
            <span>{dropdownStates[2] ? '▼' : '▶'} danh mục 2</span>
          </div>
          {dropdownStates[2] && (
            <div className="sidebar-subitem-content">
              <span>Sub item 1</span>
              <span>Sub item 2</span>
            </div>
          )}

          {/* Dropdown "danh mục 3" */}
          <div className="sidebar-item" onClick={() => toggleDropdown(3)}>
            <span>{dropdownStates[3] ? '▼' : '▶'} danh mục 3</span>
          </div>
          {dropdownStates[3] && (
            <div className="sidebar-subitem-content">
              <span>Sub item 1</span>
              <span>Sub item 2</span>
            </div>
          )}
        </div>

        {/* Nội dung chính */}
        <div className="content">
          <div className="filter-section">
            <span>Thông báo</span>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="filter-dropdown"
            >
              <option value="Value">Value</option>
              {/* Thêm các option khác nếu cần */}
            </select>
          </div>

          <div className="display-section">
            <span>Chia đội màn hình</span>
            <div className="cards">
              <div className="card-wrapper">
                <div className="card">
                  <div className="split-preview">
                    <div className="split-part" style={{ width: '60%' }}>
                      <span className="split-label">Danh sách</span>
                    </div>
                    <div className="split-part" style={{ width: '40%' }}>
                      <span className="split-label">Viewer</span>
                    </div>
                  </div>
                </div>
                <div className="ratio">tỷ lệ 60:40</div>
              </div>
              <div className="card-wrapper">
                <div className="card active">
                  <div className="split-preview">
                    <div className="split-part" style={{ width: '50%' }}>
                      <span className="split-label">Danh sách</span>
                    </div>
                    <div className="split-part" style={{ width: '50%' }}>
                      <span className="split-label">Viewer</span>
                    </div>
                  </div>
                </div>
                <div className="ratio">tỷ lệ 50:50</div>
              </div>
              <div className="card-wrapper">
                <div className="card">
                  <div className="split-preview">
                    <div className="split-part" style={{ width: '40%' }}>
                      <span className="split-label">Danh sách</span>
                    </div>
                    <div className="split-part" style={{ width: '60%' }}>
                      <span className="split-label">Viewer</span>
                    </div>
                  </div>
                </div>
                <div className="ratio">tỷ lệ 40:60</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nút điều khiển */}
      <div className="footer">
        <button className="cancel-btn">HỦY BỎ</button>
        <button className="confirm-btn">ĐỒNG Ý</button>
      </div>
    </div>
  );
}

export default App;