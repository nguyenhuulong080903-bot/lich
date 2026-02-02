/* ===== DATA 12 THÁNG ===== */
const months = [
    {
        month: 0,
        title: "THÁNG 1 – 2026",
        subtitle: "Chúc Mừng Năm Mới",
        slogan: "“Không có gì quý hơn độc lập, tự do”",
        banner: "1.png",
        zodiac: "ho.png",
        holidays: { "2026-01-01": "Tết Dương Lịch" }
    },
    {
        month: 1,
        title: "THÁNG 2 – 2026",
        subtitle: "Tết Nguyên Đán",
        slogan: "",
        banner: "2.png",
        zodiac: "mèo.png",
        holidays: { "2026-02-17": "Mùng 1 Tết Nguyên Đán" }
    },
    {
        month: 2,
        title: "THÁNG 3 – 2026",
        subtitle: "Quốc tế Phụ nữ",
        slogan: "“Giặc đến nhà, đàn bà cũng đánh”",
        banner: "3.png",
        zodiac: "rong.png",
        holidays: { "2026-03-08": "Quốc tế Phụ nữ" }
    },
    {
        month: 3,
        title: "THÁNG 4 – 2026",
        subtitle: "Giải phóng miền Nam",
        slogan: "“Độc lập – Thống nhất”",
        banner: "4.png",
        zodiac: "ran.png",
        holidays: { "2026-04-30": "Giải phóng miền Nam" }
    },
    {
        month: 4,
        title: "THÁNG 5 – 2026",
        subtitle: "Sinh nhật Chủ tịch Hồ Chí Minh",
        slogan: "“Vì nước, vì dân”",
        banner: "5.png",
        zodiac: "ngua.png",
        holidays: { "2026-05-19": "Sinh nhật Chủ tịch Hồ Chí Minh" }
    },
    {
        month: 5,
        title: "THÁNG 6 – 2026",
        subtitle: "Báo chí Cách mạng",
        slogan: "“Khoan thư sức dân”",
        banner: "6.png",
        zodiac: "de.png",
        holidays: { "2026-06-21": "Ngày Báo chí Cách mạng Việt Nam" }
    },
    {
        month: 6,
        title: "THÁNG 7 – 2026",
        subtitle: "Uống nước nhớ nguồn",
        slogan: "“Uống nước nhớ nguồn”",
        banner: "7.png",
        zodiac: "khi.png",
        holidays: { "2026-07-27": "Ngày Thương binh – Liệt sĩ" }
    },
    {
        month: 7,
        title: "THÁNG 8 – 2026",
        subtitle: "Cách mạng Tháng Tám",
        slogan: "“Tự do và độc lập”",
        banner: "8.png",
        zodiac: "ga.png",
        holidays: { "2026-08-19": "Cách mạng Tháng Tám" }
    },
    {
        month: 8,
        title: "THÁNG 9 – 2026",
        subtitle: "Quốc khánh",
        slogan: "“Nước Việt Nam có quyền hưởng tự do”",
        banner: "9.png",
        zodiac: "cho.png",
        holidays: { "2026-09-02": "Quốc khánh" }
    },
    {
        month: 9,
        title: "THÁNG 10 – 2026",
        subtitle: "Giải phóng Thủ đô",
        slogan: "“Trái tim cả nước chung niềm vui chiến thắng”",
        banner: "10.png",
        zodiac: "lon.png",
        holidays: { "2026-10-10": "Giải phóng Thủ đô" }
    },
    {
        month: 10,
        title: "THÁNG 11 – 2026",
        subtitle: "Tri ân Nhà giáo Việt Nam",
        slogan: "“Không thầy đố mày làm nên”",
        banner: "11.png",
        zodiac: "chuot.png",
        holidays: { "2026-11-20": "Ngày Nhà giáo Việt Nam" }
    },
    {
        month: 11,
        title: "THÁNG 12 – 2026",
        subtitle: "Quân đội Nhân dân Việt Nam",
        slogan: "“Chiến đấu anh dũng, tiến công thần tốc”",
        banner: "12.png",
        zodiac: "trau.png",
        holidays: { "2026-12-22": "Ngày thành lập QĐND Việt Nam" }
    }
];

/* ===== HÀM RENDER LỊCH ===== */
function renderMonth(year, monthIndex, elementId, holidays) {
    const container = document.getElementById(elementId);
    container.innerHTML = "";

    const weekdays = document.createElement("div");
    weekdays.className = "weekdays";
    ["CN","T2","T3","T4","T5","T6","T7"].forEach(d=>{
        const div=document.createElement("div");
        div.textContent=d;
        weekdays.appendChild(div);
    });

    const days = document.createElement("div");
    days.className = "days";

    const firstDay = new Date(year, monthIndex, 1).getDay();
    const lastDate = new Date(year, monthIndex + 1, 0).getDate();

    for(let i=0;i<firstDay;i++) days.appendChild(document.createElement("div"));

    for(let d=1;d<=lastDate;d++){
        const div=document.createElement("div");
        const key=`${year}-${String(monthIndex+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`;

        if(holidays[key]){
            const btn=document.createElement("button");
            btn.className="day-btn holiday";
            btn.textContent=d;
            btn.onclick = () => {
                location.href = `day.html?date=${key}`;
            };

            div.appendChild(btn);
        }else{
            div.textContent=d;
        }

        if((firstDay+d-1)%7===0) div.classList.add("sunday");
        days.appendChild(div);
    }

    container.appendChild(weekdays);
    container.appendChild(days);
}

/* ===== RENDER 12 THÁNG ===== */
document.addEventListener("DOMContentLoaded",()=>{
    const root=document.getElementById("calendar-list");

    months.forEach(cfg=>{
        const page=document.createElement("section");
        page.className="month-page";

        page.innerHTML=`
            <div class="month-banner" style="background-image:url('${cfg.banner}')">
                <div class="banner-overlay">
                    <p class="quote">${cfg.slogan}</p>
                    <h3 class="subtitle">${cfg.subtitle}</h3>
                </div>
            </div>

            <div class="month-content">
                <div class="month-left">
                    <h2>${cfg.title}</h2>
                    <p class="month-text">${cfg.subtitle}</p>
                    <img src="${cfg.zodiac}" class="zodiac">
                </div>
                <div class="month-right">
                    <div id="calendar-${cfg.month}"></div>
                    ${Object.entries(cfg.holidays).map(
            ([d,name])=>`<div class="note">⭐ ${d.slice(8,10)}/${d.slice(5,7)}: ${name}</div>`
        ).join("")}
                </div>
            </div>
        `;

        root.appendChild(page);
        renderMonth(2026, cfg.month, `calendar-${cfg.month}`, cfg.holidays);
    });
});
