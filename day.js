/* ===== DATA NGÀY LỄ ===== */
const dayData = {
    "2026-01-01": {
        title: "TẾT DƯƠNG LỊCH",
        quote: "“Chào năm mới – khởi đầu mới.”",
        banner: "1.png",
        content: "Tết Dương lịch (Tết Tây), diễn ra vào ngày 1 tháng 1 hàng năm, là ngày đầu tiên của năm mới theo lịch Gregorius, được kỷ niệm trên toàn cầu. Đây là dịp lễ quốc tế quan trọng đánh dấu khởi đầu mới, sum họp, nghỉ ngơi và đặt mục tiêu tương lai, thường có pháo hoa và tiệc mừng." +
            "Nguồn gốc: Bắt nguồn từ thời cổ đại, Đế quốc La Mã là nơi đầu tiên chọn ngày 1/1 làm ngày đầu năm mới vào năm 153 trước Công nguyên. Sau này được phổ biến rộng rãi qua lịch Gregorian.\n" +
            "Ý nghĩa:\n" +
            "Khởi đầu mới: Đánh dấu sự chuyển giao giữa năm cũ và năm mới, mở ra cơ hội, hy vọng tốt đẹp hơn.\n" +
            "Tính quốc tế: Là ngày lễ chung lớn nhất thế giới.\n" +
            "Gắn kết: Dịp để gia đình, bạn bè sum họp, thư giãn và nhìn lại chặng đường đã qua.  "

    },

    "2026-02-17": {
        title: "MÙNG 1 TẾT NGUYÊN ĐÁN",
        quote: "“Xuân về – Tết đến.”",
        banner: "2.png",
        content: "Tết Nguyên Đán là ngày lễ cổ truyền quan trọng nhất của dân tộc Việt Nam..."
    },
    "2026-03-08": {
        title: "NGÀY QUỐC TẾ PHỤ NỮ",
        quote: "",
        banner: "3.png",
        content: ""
    },

    "2026-04-30": {
        title: "GIẢI PHÓNG MIỀN NAM",
        quote: "“Độc lập – Thống nhất.”",
        banner: "banners/thang4.png",
        content: "Ngày 30/4/1975 đánh dấu mốc lịch sử trọng đại..."
    },
    "2026-05-19": {
        title: "SINH NHẬT CHỦ TỊCH HỒ CHÍ MINH",
        quote: "",
        banner: "5.png",
        content: ""
    },
    "2026-06-21": {
        title: "NGÀY BÁO CHÍ CÁCH MẠNG VIỆT NAM",
        quote: "“Xuân về – Tết đến.”",
        banner: "6.png",
        content: "Tết Nguyên Đán là ngày lễ cổ truyền quan trọng nhất của dân tộc Việt Nam..."
    },
    "2026-07-27": {
        title: "NGÀY THƯƠNG BINH - LIỆT SỸ",
        quote: "“Xuân về – Tết đến.”",
        banner: "7.png",
        content: "Tết Nguyên Đán là ngày lễ cổ truyền quan trọng nhất của dân tộc Việt Nam..."
    },
    "2026-08-19": {
        title: "CÁCH MẠNG THÁNG 8",
        quote: "“Xuân về – Tết đến.”",
        banner: "8.png",
        content: "Tết Nguyên Đán là ngày lễ cổ truyền quan trọng nhất của dân tộc Việt Nam..."
    },
    "2026-09-02": {
        title: "QUỐC KHÁNH",
        quote: "“Xuân về – Tết đến.”",
        banner: "9.png",
        content: "Tết Nguyên Đán là ngày lễ cổ truyền quan trọng nhất của dân tộc Việt Nam..."
    },
    "2026-10-10": {
        title: "GIẢI PHÓNG THỦ ĐÔ",
        quote: "“Xuân về – Tết đến.”",
        banner: "10.png",
        content: "Tết Nguyên Đán là ngày lễ cổ truyền quan trọng nhất của dân tộc Việt Nam..."
    },
    "2026-11-20": {
        title: "NGÀY NHÀ GIÁO VIỆT NAM",
        quote: "“Không thầy đố mày làm nên.”",
        banner: "11.png",
        content: "Ngày 20/11 là dịp để tri ân những người làm công tác giáo dục..."
    },

    "2026-12-22": {
        title: "THÀNH LẬP QĐND VIỆT NAM",
        quote: "“Chiến đấu anh dũng, tiến công thần tốc.”",
        banner: "12.png",
        content: "Ngày 22/12/1944 là ngày thành lập Quân đội Nhân dân Việt Nam..."
    }
};

/* ===== LẤY PARAM DATE ===== */
const params = new URLSearchParams(window.location.search);
const date = params.get("date");

if (!date || !dayData[date]) {
    document.body.innerHTML = "<h2>Không tìm thấy dữ liệu ngày lễ</h2>";
} else {
    const data = dayData[date];

    document.getElementById("day-banner").style.backgroundImage =
        `url('${data.banner}')`;

    document.getElementById("day-title").textContent = data.title;
    document.getElementById("day-quote").textContent = data.quote;
    document.getElementById("day-date").textContent = date;
    document.getElementById("day-name").textContent = data.title;
    document.getElementById("day-content").textContent = data.content;
}
