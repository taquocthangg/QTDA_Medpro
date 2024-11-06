# Giới Thiệu

Hopitech là phần mềm đặt khám online, cung cấp các API để quản lý người dùng, đăng nhập, đăng ký và lấy token.

## Đăng Ký Tài Khoản

**Mô tả:** API này cho phép người dùng mới đăng ký tài khoản.

**Phương thức:** POST

**Endpoint:** `/api/v1/register`

**Tham số:**
```json
{
  "username": "string",  "// Tên người dùng"
  "password": "string",  // Mật khẩu người dùng
  "email": "string"      // Địa chỉ email người dùng
}
```
**Phản hồi:**
```json
{
  {
  "message": "Đăng ký tài khoản thành công!!!",
  "success": true,
  "data": "token"
}

}
```
