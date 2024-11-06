## Endpoint: /products/{id}

**Mô tả:** Lấy thông tin chi tiết của một sản phẩm.

**Phương thức:** GET

**Tham số:**
* **id:** Số nguyên, bắt buộc. ID của sản phẩm cần lấy thông tin.

**Phản hồi:**
Trả về một đối tượng JSON chứa thông tin của sản phẩm, bao gồm:
* **id:** Số nguyên, ID của sản phẩm.
* **name:** Chuỗi, tên của sản phẩm.
* **price:** Số nguyên, giá của sản phẩm.

**Ví dụ:**
```markdown
```bash
# Tạo một thư mục mới
mkdir my_project

# Truy cập vào thư mục đó
cd my_project
```bash
curl -X GET http://your-api-url/products/123

**Phản hồi:**
{
  "id": 123,
  "name": "Táo",
  "price": 10000
}
