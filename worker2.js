export default {
  async fetch(request) {
    const html = `
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Support Me | SWD STORE</title>

  <link 
    rel="stylesheet" 
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
    crossorigin="anonymous" 
    referrerpolicy="no-referrer"
  />

  <style>
    :root {
      --bg-color: #f0f2f5;
      --text-color: #333;
      --container-bg: #fff;
      --footer-color: #777;
      --shadow-color: rgba(0, 0, 0, 0.2);
    }

    @media (prefers-color-scheme: dark) {
      :root {
        --bg-color: #121212;
        --text-color: #f5f5f5;
        --container-bg: #1e1e1e;
        --footer-color: #aaa;
        --shadow-color: rgba(255, 255, 255, 0.1);
      }
    }

    body {
      font-family: "Segoe UI", Arial, sans-serif;
      background: var(--bg-color);
      color: var(--text-color);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      transition: background 0.3s, color 0.3s;
    }

    .container {
      background: var(--container-bg);
      padding: 30px;
      border-radius: 15px;
      text-align: center;
      box-shadow: 0 10px 30px var(--shadow-color);
      width: 90%;
      max-width: 400px;
      transition: background 0.3s, box-shadow 0.3s;
    }

    h1 {
      margin: 15px 0 25px;
      color: var(--text-color);
      font-size: 26px;
    }

    /* Kalender */
    .calendar {
      background: var(--bg-color);
      border: 1px solid var(--footer-color);
      border-radius: 10px;
      padding: 10px;
      margin-bottom: 10px;
      text-align: center;
    }

    .calendar-date {
      font-size: 22px;
      font-weight: bold;
    }

    .calendar-day {
      font-size: 15px;
      color: var(--footer-color);
      margin-bottom: 5px;
    }

    .clock {
      font-size: 18px;
      font-weight: bold;
      color: var(--text-color);
      margin-bottom: 20px;
    }

    /* Tombol link */
    .link-button {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: #fff;
      padding: 12px 20px;
      margin: 10px 0;
      border-radius: 10px;
      font-weight: bold;
      font-size: 16px;
      transition: 0.3s;
    }

    .link-button i {
      margin-right: 10px;
      font-size: 18px;
    }

    .link-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 20px var(--shadow-color);
    }

    .saweria { background-color: #ff6b6b; }
    .sociabuzz { background-color: #ff4500; }
    .telegram { background-color: #0088cc; }
    .trakter { background-color: #1db954; }
    .discord { background-color: #7289da; }

    footer {
      margin-top: 25px;
      font-size: 13px;
      color: var(--footer-color);
    }

    .theme-toggle, .trakter-toggle {
      background: none;
      border: 1px solid var(--footer-color);
      color: var(--footer-color);
      padding: 6px 10px;
      border-radius: 6px;
      font-size: 13px;
      cursor: pointer;
      transition: 0.3s;
      margin-top: 5px;
    }

    .theme-toggle:hover, .trakter-toggle:hover {
      color: var(--text-color);
      border-color: var(--text-color);
    }

    /* Responsif */
    @media (max-width: 500px) {
      h1 { font-size: 22px; }
      .calendar-date { font-size: 20px; }
      .container { padding: 25px; }
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Kalender -->
    <div class="calendar">
      <div id="calendarDate" class="calendar-date"></div>
      <div id="calendarDay" class="calendar-day"></div>
      <div id="clock" class="clock"></div>
    </div>

    <h1>Support Me</h1>

    <a href="https://saweria.co/username" target="_blank" class="link-button saweria">
      <i class="fas fa-heart"></i> Saweria
    </a>

    <a href="https://sociabuzz.com/username" target="_blank" class="link-button sociabuzz">
      <i class="fas fa-bolt"></i> Sociabuzz
    </a>

    <a href="https://trakter.id/username" target="_blank" class="link-button trakter" style="margin-top:10px;">
      <i class="fas fa-film"></i> Trakter.id
    </a>

    <a href="https://t.me/NamaBot" target="_blank" class="link-button telegram">
      <i class="fab fa-telegram-plane"></i> Telegram
    </a>

    <a href="https://discord.com/users/username" target="_blank" class="link-button discord" style="margin-top:10px;">
      <i class="fab fa-discord"></i> Discord
    </a>

    <footer>
      &copy; 2025 SWD STORE. All rights reserved.<br />
      <button id="themeToggle" class="theme-toggle">🌓 Ganti Tema</button><br />
      <button id="trakterToggle" class="trakter-toggle">🎬 Toggle Trakter.id</button>
    </footer>
  </div>

  <script>
    // ========== Kalender & Jam ==========
    const calendarDate = document.getElementById("calendarDate");
    const calendarDay = document.getElementById("calendarDay");
    const clock = document.getElementById("clock");

    const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const months = [
      "Januari", "Februari", "Maret", "April", "Mei", "Juni",
      "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

    function updateDateTime() {
      const now = new Date();
      calendarDate.textContent = \`\${now.getDate()} \${months[now.getMonth()]} \${now.getFullYear()}\`;
      calendarDay.textContent = days[now.getDay()];

      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      clock.textContent = \`\${hours}:\${minutes}:\${seconds}\`;
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);

    // ========== Dark Mode Toggle ==========
    const themeToggle = document.getElementById("themeToggle");
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (currentTheme === "light") {
      document.documentElement.classList.remove("dark");
    }

    themeToggle.addEventListener("click", () => {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      }
    });

    // ========== Trakter.id Toggle ==========
    const trakterToggle = document.getElementById("trakterToggle");
    const trakterLink = document.querySelector(".link-button.trakter");

    trakterToggle.addEventListener("click", () => {
      if (trakterLink.style.display === "none" || trakterLink.style.display === "") {
        trakterLink.style.display = "flex";
      } else {
        trakterLink.style.display = "none";
      }
    });

    // Sembunyikan Trakter.id secara default
    trakterLink.style.display = "none";
  </script>
</body>
</html>
    `;

    return new Response(html, {
      headers: { "Content-Type": "text/html; charset=UTF-8" },
    });
  },
};
