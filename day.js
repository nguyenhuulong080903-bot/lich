/* ===== DATA NGÀY LỄ ===== */
const dayData = {
    "2026-01-01": {
        title: "TẾT DƯƠNG LỊCH",
        quote: "“Chào năm mới – khởi đầu mới.”",
        banner: "banners/thang1.png",
        content: "Tết Dương Lịch là ngày đầu tiên của năm mới theo lịch Gregorius..."
    },

    "2026-02-17": {
        title: "MÙNG 1 TẾT NGUYÊN ĐÁN",
        quote: "“Xuân về – Tết đến.”",
        banner: "banners/thang2.png",
        content: "Tết Nguyên Đán là ngày lễ cổ truyền quan trọng nhất của dân tộc Việt Nam..."
    },

    "2026-04-30": {
        title: "GIẢI PHÓNG MIỀN NAM",
        quote: "“Độc lập – Thống nhất.”",
        banner: "banners/thang4.png",
        content: "Ngày 30/4/1975 đánh dấu mốc lịch sử trọng đại..."
    },

    "2026-11-20": {
        title: "NGÀY NHÀ GIÁO VIỆT NAM",
        quote: "“Không thầy đố mày làm nên.”",
        banner: "banners/thang11.png",
        content: "Ngày 20/11 là dịp để tri ân những người làm công tác giáo dục..."
    },

    "2026-12-22": {
        title: "THÀNH LẬP QĐND VIỆT NAM",
        quote: "“Chiến đấu anh dũng, tiến công thần tốc.”",
        banner: "banners/thang12.png",
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
