# GROUP 09 – PORTFOLIO SHOWCASE

<p align="center">
  <strong>Website giới thiệu Portfolio của 6 thành viên Nhóm 09</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Status-Completed-success?style=flat-square" alt="Status">
</p>

## 1. Giới thiệu dự án

**Group 09 – Portfolio Showcase** là website tổng hợp và giới thiệu portfolio cá nhân của 6 thành viên thuộc Nhóm 09.

Dự án được xây dựng nhằm tạo ra một trang web trung tâm, giúp người dùng dễ dàng tìm hiểu thông tin cá nhân, kỹ năng, định hướng nghề nghiệp và các dự án của từng thành viên.

Thay vì truy cập từng website riêng lẻ, người dùng chỉ cần truy cập trang chủ của Nhóm 09, lựa chọn thành viên muốn tìm hiểu và hệ thống sẽ điều hướng đến portfolio tương ứng.

## 2. Mục tiêu dự án

- Xây dựng website giới thiệu tổng thể các thành viên trong nhóm.
- Thiết kế giao diện hiện đại, trực quan và thân thiện với người dùng.
- Tạo hệ thống điều hướng đến portfolio riêng của từng thành viên.
- Áp dụng kiến thức HTML5, CSS3 và JavaScript vào thực tế.
- Thực hành tổ chức mã nguồn, quản lý dự án và làm việc nhóm với Git/GitHub.

## 3. Công nghệ sử dụng

| Công nghệ | Vai trò |
|---|---|
| HTML5 | Xây dựng cấu trúc và nội dung website |
| CSS3 | Thiết kế giao diện, hiệu ứng và Responsive |
| JavaScript (ES6+) | Quản lý dữ liệu, render thành viên và xử lý tương tác |
| Git | Quản lý phiên bản mã nguồn |
| GitHub | Lưu trữ mã nguồn và cộng tác nhóm |
| Google Fonts | Cung cấp font chữ Inter |

**Định hướng kỹ thuật:** Sử dụng HTML, CSS và JavaScript thuần (Vanilla JavaScript), không sử dụng framework frontend.

## 4. Thành viên nhóm

| STT | Họ và tên | Portfolio |
|:---:|---|---|
| 01 | Huỳnh Anh Kiệt | [View Portfolio](./HuynhAnhKiet/) |
| 02 | Lương Thanh Tọa | [View Portfolio](./LuongThanhToa/) |
| 03 | Nguyễn Quốc Huy | [View Portfolio](./NguyenQuocHuy/) |
| 04 | Phạm Hồng Thái | [View Portfolio](./Pham_Hong_Thai/) |
| 05 | Từ Ngọc Toàn | [View Portfolio](./TuNgocToan/) |
| 06 | Phạm Quốc Huy | [View Portfolio](./PhamQuocHuy/) |

## 5. Các chức năng chính

### Trang chủ
- Giới thiệu tổng quan về Nhóm 09.
- Hiển thị danh sách 6 thành viên.
- Điều hướng đến portfolio cá nhân của từng thành viên.

### Giao diện thành viên
- Hiển thị ảnh đại diện và họ tên.
- Thiết kế dạng Member Card.
- Có hiệu ứng tương tác khi di chuột.
- Nhấn vào thẻ để truy cập portfolio tương ứng.

### Trải nghiệm người dùng
- Responsive trên Desktop, Tablet và Mobile.
- Navigation hỗ trợ điều hướng giữa các khu vực.
- Hiệu ứng cuộn trang (Scroll Reveal).
- Header thay đổi trạng thái khi cuộn.
- Nút Back to Top.
- Menu điều hướng dành cho thiết bị di động.

## 6. Cấu trúc thư mục

```text
Nhom9_Web_Portfolio/
│
├── index.html                  # Trang chủ tổng hợp portfolio
├── css
│   └── style.css               # File giao diện chính
│
├── js
│   └── main.js                 # Xử lý logic và tương tác
│
├── README.md                   # Tài liệu dự án
│
├── avatar/                     # Ảnh đại diện thành viên
│   ├── HuynhAnhKiet.jpg
│   └── Thai.png
│
├── HuynhAnhKiet/               # Portfolio thành viên 1
│
├── LuongThanhToa/              # Portfolio thành viên 2
│
├── NguyenQuocHuy/              # Portfolio thành viên 3
│
├── Pham_Hong_Thai/             # Portfolio thành viên 4
│
├── TuNgocToan/                 # Portfolio thành viên 5
│
└── PhamQuocHuy/                # Portfolio thành viên 6
```

*Lưu ý: Cấu trúc trên mô tả các thư mục chính. Bên trong mỗi thư mục portfolio có thể chứa các thư mục con như `css`, `js`, `images`, `assets` và các tài nguyên khác.*

## 7. Hướng dẫn cài đặt và chạy dự án

### Yêu cầu

- Visual Studio Code hoặc trình soạn thảo mã nguồn tương đương.
- Trình duyệt web hiện đại.
- Extension Live Server trong Visual Studio Code (khuyến nghị).

### Bước 1: Clone repository

Mở Terminal và thực hiện:

```bash
git clone https://github.com/anhkiet1210/Nhom9_Web_Portfolio.git
```

### Bước 2: Di chuyển vào thư mục dự án

```bash
cd Nhom9_Web_Portfolio
```

### Bước 3: Mở dự án bằng VS Code

```bash
code .
```

### Bước 4: Chạy website

Mở file `index.html`, nhấn chuột phải và chọn:

```text
Open with Live Server
```

Website sẽ được mở trên trình duyệt mặc định.

## 8. Nguyên tắc đóng góp và quản lý mã nguồn

Để đảm bảo quá trình làm việc nhóm thống nhất, các thành viên cần tuân thủ:

- Không tự ý xóa hoặc thay đổi nội dung portfolio của thành viên khác.
- Không chỉnh sửa mã nguồn của thành viên khác khi chưa trao đổi.
- Đặt tên file và thư mục rõ ràng, thống nhất.
- Kiểm tra chức năng trước khi commit và push lên GitHub.
- Không commit các file không cần thiết như file tạm hoặc thư mục cache.
- Đồng bộ mã nguồn trước khi bắt đầu công việc mới.

### Quy trình Git cơ bản

```bash
# 1. Kiểm tra trạng thái
git status

# 2. Cập nhật mã nguồn
git pull origin main

# 3. Thêm các thay đổi
git add .

# 4. Commit
git commit -m "feat: update portfolio website"

# 5. Push lên GitHub
git push origin main
```

## 9. Kiểm thử

Các nội dung cần kiểm tra trước khi hoàn thành dự án:

- Trang chủ hiển thị đầy đủ 6 thành viên.
- Ảnh đại diện và thông tin thành viên hiển thị chính xác.
- Các thẻ thành viên điều hướng đúng portfolio.
- Các menu điều hướng hoạt động bình thường.
- Giao diện tương thích với Desktop, Tablet và Mobile.
- Không có lỗi JavaScript trên Console.
- Các tài nguyên CSS, JavaScript và hình ảnh được tải chính xác.

## 10. Triển khai website

Dự án có thể được triển khai miễn phí bằng **GitHub Pages**.

Các bước thực hiện:

1. Truy cập repository trên GitHub.
2. Chọn **Settings**.
3. Chọn **Pages** tại thanh điều hướng.
4. Trong phần Build and deployment, chọn Deploy from a branch.
5. Chọn branch `main` và thư mục `/ (root)`.
6. Nhấn Save.
7. Truy cập đường dẫn GitHub Pages được cung cấp sau khi triển khai.

Lưu ý: Các đường dẫn portfolio và tài nguyên cần sử dụng đường dẫn tương đối phù hợp với vị trí triển khai. Tên file và thư mục phải khớp chính xác chữ hoa, chữ thường.

## 11. Định hướng phát triển

Một số chức năng có thể mở rộng trong tương lai:

- Bổ sung hiệu ứng chuyển trang.
- Tối ưu hiệu suất tải hình ảnh.
- Bổ sung chế độ Dark Mode.
- Cải thiện khả năng truy cập (Accessibility).
- Tối ưu SEO và trải nghiệm trên thiết bị di động.
- Bổ sung các liên kết đến GitHub, LinkedIn và các nền tảng cá nhân của thành viên.

---

<p align="center">
  <strong>GROUP 09 – INFORMATION TECHNOLOGY</strong>
  <br>
  <sub>Connecting ideas, skills and creativity.</sub>
</p>
