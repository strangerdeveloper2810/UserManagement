import React, { Component } from "react";

export default class UserTable extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h3 className="display-5 text-center mt-3">Danh Sách Người Dùng</h3>
        <table className="table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tài Khoản</th>
              <th>Họ Tên</th>
              <th>Mật Khẩu</th>
              <th>Email</th>
              <th>Số Điện Thoại</th>
              <th>Loại Người Dùng</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>demo</td>
              <td>Nguyễn Văn A</td>
              <td>123456</td>
              <td>demo@yahoo.com</td>
              <td>09090909</td>
              <td>Khách Hàng</td>
              <td>
                <button className="btn btn-primary me-2">Chỉnh sửa</button>
                <button className="btn btn-danger">Xóa</button>
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>demo1</td>
              <td>Nguyễn Văn B</td>
              <td>123456</td>
              <td>demo1@yahoo.com</td>
              <td>09090909</td>
              <td>Người dùng</td>
              <td>
                <button className="btn btn-primary me-2">Chỉnh sửa</button>
                <button className="btn btn-danger">Xóa</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
