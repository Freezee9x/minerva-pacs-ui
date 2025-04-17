import React from "react";
import "./App.css";
import logoImage from './assets/logo-minerva.png';
import xray1 from './assets/11.jfif';
import xray2 from './assets/22.jpg';
import xray3 from './assets/33.jfif';
import xray4 from './assets/55.jpg';

import {
  FaRegSquare,
  FaWindowMinimize,
  FaWindowRestore,
  FaCog,
  FaQuestionCircle,
  FaUserCircle,
  FaEdit,
  FaUpload,
  FaCogs
} from "react-icons/fa";
import { FaPlus, FaEye, FaCamera, FaLink, FaFileMedical, FaSave, FaLock, FaPrint, FaFileImport, FaBox, FaExchangeAlt, FaCommentAlt, FaSyncAlt } from "react-icons/fa";

function App() {
  return (
    <div className="app">
      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <img src={logoImage} alt="Minerva PACS Logo" className="logo-icon" />

          MINERVA PACS
        </div>
        <div className="header-right">
          <div className="header-icons">
            <FaWindowMinimize className="header-icon" />
            <FaRegSquare className="header-icon" />
            <FaWindowRestore className="header-icon" />
            <FaCog className="header-icon" />
            <FaQuestionCircle className="header-icon" />
          </div>
          <div className="header-controls">
            <select><option>Bệnh viện K3</option></select>
            <FaUserCircle className="user-icon" />
            <select><option>Bs. Nguyễn Mạnh Hà</option></select>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <div className="main-content">
        <aside className="sidebar">
          <h3>Cây làm việc</h3>
          <div className="filter-bar">
            <span>Bộ lọc</span>
            <span>Lưu trữ</span>
          </div>
          <div className="tree">
            <ul>
              <li className="active">CT</li>
              <li style={{ marginLeft: "12px" }}>▶ CT01</li>
              <li style={{ marginLeft: "12px" }}>▶ CT02</li>
              <li>▶ MR</li>
              <li>▶ US</li>
              <li>▶ ED</li>
              <li>▶ XA</li>
            </ul>
          </div>

          <div className="tab-controls">
            <span>Thông tin ca</span>
            <span>Xem trước</span>
            <span>Lịch sử</span>
          </div>

          <div className="info-block">
            <h4>THÔNG TIN BỆNH NHÂN</h4>
            <p><span>PID:</span> 053856656</p>
            <p><span>Họ và tên:</span> Nguyễn Thị Thảo</p>
            <p><span>Năm sinh:</span> 1942</p>
          </div>

          <div className="info-block">
            <h4>THÔNG TIN CA</h4>
            <p><span>Ngày chụp:</span> 22/11/2019 08:33</p>
            <p><span>Bộ phận:</span> HEAD</p>
            <p><span>Ghi chú:</span> CCM NAO CRNN</p>
            <p><span>Máy chụp:</span> CT204</p>
          </div>

          <div className="info-block">
            <h4>YÊU CẦU CHẨN ĐOÁN</h4>
            <p><span className="highlight">Ưu tiên:</span> CC</p>
            <p><span>Loại chẩn đoán:</span> URS - viêm phổi, tắc nhân không đặc hiệu</p>
            <p><span>Bác sĩ chỉ định:</span> BS. Nguyễn Thị Các (thuộc TY - Hồ Hiếu)</p>
            <p><span>Chỉ định:</span> An-Ct: CLVT lồng ngực không tiêm thuốc đối quang từ tìm nguyên nhân ho kéo dài, gợi ý lao phổi, hẹp hạch rốn phổi [từ 1-3-2 dày]</p>
          </div>
        </aside>

        <section className="content">
          {/* Tabs và Filters */}
          <div className="tab-header">
            <button className="active">Danh sách ca</button>
            <button>Ngo Binh </button>
            <button>Quynh Nguyen </button>
          </div><div className="filters-inline">
            <div className="filters-inline-row">
              <input type="text" placeholder="Mã bệnh nhân" />
              <input type="text" placeholder="Tên bệnh nhân" />
              <select><option>Trạng thái</option></select>
              <input type="text" placeholder="01/01/2018 - 01/01/2019" />
              <input type="text" placeholder="Kết quả đọc" />
              <div style={{ display: "flex", gap: "6px" }}>
                <button className="btn-with-icon btn-refresh">
                  <FaSyncAlt /> Làm mới
                </button>
                <button className="btn-with-icon btn-advanced">
                  <FaCog /> Nâng cao
                </button>
              </div>
            </div>
            <div className="filters-inline-row">
              <input type="text" placeholder="Năm sinh" />
              <select><option>Giới tính</option></select>
              <select><option>Loại chụp</option></select>
              <input type="text" placeholder="Ghi chú" />
              <select><option>Mã bệnh</option></select>
              <div></div>
            </div>
          </div>
          {/* Thanh phân trang phía trên bảng */}
          <div className="pagination-bar">
            <button>{"<"}</button>
            <button>{">"}</button>
            <span>Trang</span>
            <select>
              <option value="1">1</option>
              <option value="2" selected>2</option>
            </select>
            <span>Hiển thị</span>
            <select>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="100" selected>100</option>
            </select>
            <span>ca</span>
            <span style={{ marginLeft: 'auto' }}>Tổng số ca: <strong>430</strong></span>
          </div>
          {/* Bảng danh sách ca */}
          <table className="table">
            <thead>
              <tr className="table-header">
                <th><input type="checkbox" />Trạng thái</th>
                <th>Tên bệnh nhân</th>
                <th>Mã bệnh nhân</th>
                <th>Năm sinh</th>
                <th>Giới tính</th>
                <th>TT bổ sung</th>
                <th>Ngày/Giờ chụp</th>
                <th>Dịch vụ</th>
                <th>Modality</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-row da-duyet">
                <td><input type="checkbox" />Đã duyệt</td>
                <td>Nguyen Cong Tu</td>
                <td>108432153</td>
                <td>1989</td>
                <td>Nam</td>
                <td className="tt-icon">📧</td>
                <td>01/01/2018</td>
                <td>Chụp Xquang ngực</td>
                <td>XA</td>
              </tr>
              <tr className="table-row da-in">
                <td><input type="checkbox" />Đã in</td>
                <td>Nguyen Van Hinh</td>
                <td>108432154</td>
                <td>1989</td>
                <td>Nam</td>
                <td className="tt-icon">📧</td>
                <td>01/01/2018</td>
                <td>Chụp Xquang ngực</td>
                <td>CT</td>
              </tr>
              <tr className="table-row chua-doc">
                <td><input type="checkbox" />Chưa đọc</td>
                <td>Nguyen Van Hinh</td>
                <td>108432155</td>
                <td>1989</td>
                <td>Nam</td>
                <td className="tt-icon">📧</td>
                <td>01/01/2018</td>
                <td>Chụp Xquang ngực</td>
                <td>CT</td>
              </tr>
            </tbody>
          </table>
          {/* Ca liên quan - Bảng và Toolbar */}
          <div>
            <h4>Ca liên quan</h4>
            <table className="table-related">
              <thead>
                <tr className="table-related-header">
                  <th><input type="checkbox" />Trạng thái</th>
                  <th>Tên bệnh nhân</th>
                  <th>Mã bệnh nhân</th>
                  <th>Năm sinh</th>
                  <th>Giới tính</th>
                  <th>TT bổ sung</th>
                  <th>Ngày/Giờ chụp</th>
                  <th>Dịch vụ</th>
                  <th>Modality</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input type="checkbox" />Đã duyệt</td>
                  <td>Nguyen Cong Tu</td>
                  <td>108432153</td>
                  <td>1989</td>
                  <td>Nam</td>
                  <td>📧</td>
                  <td>01/01/2018</td>
                  <td>Chụp Xquang ngực</td>
                  <td>CT</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Toolbar dưới bảng */}
          <div className="toolbar styled-toolbar">
            <button><FaPlus /><span>Nhận ca<br /><small>Alt+N</small></span></button>
            <button><FaEye /><span>Xem ảnh<br /><small>Alt+V</small></span></button>
            <button><FaCamera /><span>Chụp ảnh<br /><small>Alt+C</small></span></button>
            <button><FaLink /><span>Link ảnh<br /><small>Alt+L</small></span></button>
            <button><FaFileMedical /><span>Duyệt CD<br /><small>Alt+M</small></span></button>
            <button><FaSave /><span>Lưu nhập CD<br /><small>Alt+N</small></span></button>
            <button><FaEdit /><span>Sửa CD<br /><small>Alt+D</small></span></button>
            <button><FaLock /><span>Hủy khóa<br /><small>Alt+C</small></span></button>
            <button><FaPrint /><span>In<br /><small>Alt+P</small></span></button>
            <button><FaFileImport /><span>Duyệt và in<br /><small>Alt+I</small></span></button>
            <button><FaBox /><span>In nhanh<br /><small>Alt+F</small></span></button>
            <button><FaBox /><span>Thêm vật tư<br /><small>Alt+C</small></span></button>
            <button><FaExchangeAlt /><span>Chuyển ca<br /><small>Alt+C</small></span></button>
            <button><FaCommentAlt /><span>Ghi chú<br /><small>Alt+C</small></span></button>
          </div>
          {/* Dòng chọn chẩn đoán */}

          <div className="app-section">
            {/* Dropdown chẩn đoán */}
            <div className="diagnosis-dropdowns">
              <select>
                <option>Lần 3 | Chẩn đoán mới | BS Nguyễn Hùng</option>
              </select>
              <select>
                <option>XA021 - XQuang chân</option>
              </select>
              <select>
                <option>XA021 - XQuang chân</option>
              </select>
            </div>

            {/* Phần nội dung chẩn đoán */}
            <table className="diagnosis-table">
              <div className="diagnosis-section">
                Kỹ thuật chụp: Chụp Xquang cột sống cổ thẳng nghiêng |
                {"\n"}-- Không thấy gãy xẹp các đốt sống.
                {"\n"}-- Không thấy hẹp các khoảng liên đốt sống.
                {"\n"}-- Cấu trúc các đốt sống không thấy bất thường.
                {"\n"}
                {"\n"}Hiện tại không thấy hình ảnh bất thường xương cột sống cổ trên phim
              </div>
              {/* Table 1: Chọn ảnh + ảnh hiển thị */}
              <table className="table-1">
                <tbody>
                  <tr>
                    <td style={{ width: "180px", verticalAlign: "top" }}>
                      <button className="image-button">
                        <img src="https://img.icons8.com/ios/20/image--v1.png" alt="icon" />
                        Chọn ảnh
                      </button>
                    </td>
                    <td >
                      <div className="image-preview">
                        <div className="images">
                          <img src={xray1} alt="x1" />
                          <img src={xray2} alt="x2" />
                          <img src={xray3} alt="x3" />
                          <img src={xray4} alt="x4" />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Table 2: Nút chụp ảnh/tải lên/cấu hình + ảnh */}
              <table className="table-2">
                <tbody>
                  <tr>
                    <td style={{ width: "180px", verticalAlign: "top" }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <button className="image-button primary"><FaCamera /> Chụp ảnh</button>
                        <button className="image-button"><FaUpload /> Tải lên</button>
                        <button className="image-button"><FaCogs /> Cấu hình</button>
                      </div>
                    </td>
                    <td style={{ verticalAlign: "top" }}>
                      <div className="image-preview">
                        <div className="images">
                          <img src={xray1} alt="x1" />
                          <img src={xray2} alt="x2" />
                          <img src={xray3} alt="x3" />
                          <img src={xray4} alt="x4" />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </table>
          </div>

          {/* Footer controls */}
          <div className="footer-controls">
            {/* Dòng 1 */}
            <div>
              <label>Người ký</label>
              <select defaultValue="BS Phạm Tuấn Tú">
                <option>BS Phạm Tuấn Tú</option>
              </select>
            </div>
            <div>
              <label>Mã bệnh ID</label>
              <input type="text" defaultValue="A1234" />
            </div>
            <div>
              <label>Thẻ tag</label>
              <select defaultValue="Tag name">
                <option>Tag name</option>
              </select>
            </div>

            {/* Dòng 2 */}
            <div>
              <label>Y tá</label>
              <select defaultValue="Lê Minh Thủy">
                <option>Lê Minh Thủy</option>
              </select>
            </div>
            <div>
              <label>Chẩn đoán trước</label>
              <select defaultValue="Có">
                <option>Có</option>
                <option>Không</option>
              </select>
            </div>
            <div>
              <label>Giải phẫu</label>
              <select defaultValue="A1234">
                <option>A1234</option>
              </select>
            </div>

            {/* Hàng riêng: Người chụp và nút lưu */}
            <div style={{ gridColumn: "1 / span 2" }}>
              <label>Người chụp</label>
              <select defaultValue="BS Phạm Tuấn Tú">
                <option>BS Phạm Tuấn Tú</option>
              </select>
            </div>
          </div>

        </section>
      </div>
    </div >
  );
}

export default App;

