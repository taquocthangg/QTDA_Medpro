# Giới Thiệu

Hopitech là phần mềm đặt khám online, cung cấp các API để quản lý người dùng, đăng nhập, đăng ký và lấy token.

## Đăng Ký Tài Khoản

**Mô tả:** API này cho phép người dùng mới đăng ký tài khoản.

**Phương thức:** POST

**Endpoint:** `/api/v1/register`

**Tham số:**
```json
{
  "username": "string",  
  "password": "string", 
  "email": "string"      /
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
## Đăng Nhập

**Mô tả:** API này cho phép người dùng đăng nhập vào hệ thống và nhận token.

**Phương thức:** POST

**Endpoint:** `/api/v1/login`

**Tham số:**
```json
{
  {
  "username": "string",  // Tên người dùng
  "password": "string"   // Mật khẩu người dùng
  }
}
```
**Phản hồi:**
```json
{
  "message": "Login successful",
  "success": true,
  "data": {
    "token": "your_generated_token_here"
  }
}
```

## Lấy Thông Tin Người Dùng

**Mô tả:** API này cho phép người dùng lấy thông tin của mình sau khi đăng nhập thành công, sử dụng token để xác thực.

**Phương thức:** Get

**Endpoint:** `/api/v1/user`

**Tham số:**
**Authorization:** Bearer token
