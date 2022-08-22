import React, { Component } from "react";

export default class FormSignUp extends Component {
  render() {
    return (
      <div classname="container-fluid">
        <div className="row">
          <div className="col-6 mx-auto">
            <h3 className="display-4 text-center">Form Đăng Ký</h3>
            <form>
              <div className="form-group">
                <label htmlFor>Tài Khoản : </label>
                <input type="text" className="form-control" name="account" required />
              </div>

              <div className="form-group">
                <label htmlFor>Họ Tên : </label>
                <input type="text" className="form-control" name="fName" required/>
              </div>

              <div className="form-group">
                <label htmlFor>Mật Khẩu : </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor>Email :</label>
                <input type="text" className="form-control" name="email" required />
              </div>

              <div className="form-group">
                <label htmlFor>Số điện thoại : </label>
                <input type="tel" className="form-control" name="phoneNumber" required />
              </div>

              <div className="form-group">
                <label htmlFor>Mã loại người dùng : </label>
                <select className="form-select">
                  <option value={1}>Khách Hàng</option>
                  <option value={2}>Quản Trị</option>
                </select>
              </div>

              <div className="form-group d-flex justify-content-center mt-3">
                <button type="button" className="btn btn-success">
                  Đăng Kí
                </button>
                <button
                  type="button"
                  id="btnUpdate"
                  className="btn btn-primary ms-4"
                >
                  Cập nhật
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
