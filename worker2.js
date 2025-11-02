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
    integrity="sha512-papNM5a+6aH3K+Gv8/9QkY5y/SmrT5BfU3BzG8bFMLV9N9R5bKTZqP7rVqRaJ2FpiQySmF4ZPr+oqkSsvGKN1g==" 
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
      font-family: Arial, sans-serif;
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
      padding: 40px;
      border-radius: 15px;
      text-align: center;
      box-shadow: 0 10px 30px var(--shadow-color);
      width: 320px;
      transition: background 0.3s, box-shadow 0.3s;
    }

    h1 {
      margin-bottom: 30px;
      color: var(--text-color);
      font-size: 28px;
    }

    .link-button {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: #fff;
      padding: 12px 20px;
      margin: 12px 0;
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
    .btc { background-color: #f7931a; }
    .telegram { background-color: #0088cc; }

    footer {
      margin-top: 25px;
      font-size: 13px;
      color: var(--footer-color);
    }

    .theme-toggle {
      background: none;
      border: 1px solid var(--footer-color);
      color: var(--footer-color);
      padding: 6px 10px;
      border-radius: 6px;
      font-size: 13px;
      cursor: pointer;
      transition: 0.3s;
    }

    .theme-toggle:hover {
      color: var(--text-color);
      border-color: var(--text-color);
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Support Me</h1>

    <a href="https://saweria.co/username" target="_blank" class="link-button saweria">
      <i class="fas fa-heart"></i> Saweria
    </a>

    <a href="bitcoin:1ExampleBTCAddress" target="_blank" class="link-button btc">
      <i class="fab fa-bitcoin"></i> BTC Wallet
    </a>

    <a href="https://t.me/NamaBot" target="_blank" class="link-button telegram">
      <i class="fab fa-telegram-plane"></i> Telegram
    </a>

    <footer>
      &copy; 2025 SWD STORE. All rights reserved.
      <br />
      <button id="themeToggle" class="theme-toggle">🌓 Ganti Tema</button>
    </footer>
  </div>

  <script>
    // Simpan preferensi pengguna di localStorage
    const toggle = document.getElementById("themeToggle");
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "dark") document.documentElement.classList.add("dark");
    if (currentTheme === "light") document.documentElement.classList.remove("dark");

    toggle.addEventListener("click", () => {
      const html = document.documentElement;
      html.classList.toggle("dark");
      const newTheme = html.classList.contains("dark") ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
    });

    // Terapkan gaya dark mode manual
    const style = document.createElement("style");
    style.textContent = \`
      .dark {
        --bg-color: #121212;
        --text-color: #f5f5f5;
        --container-bg: #1e1e1e;
        --footer-color: #aaa;
        --shadow-color: rgba(255, 255, 255, 0.1);
      }
    \`;
    document.head.appendChild(style);
  </script>
</body>
</html>
`;

    return new Response(html, {
      headers: { "content-type": "text/html; charset=UTF-8" },
    });
  },
};
