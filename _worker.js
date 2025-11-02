export default {
  async fetch(request) {
    const html = `
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Support Me | SWD STORE</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
  <style>
    body {font-family: Arial, sans-serif; background:#f0f2f5; display:flex; justify-content:center; align-items:center; height:100vh; margin:0;}
    .container {background:#fff; padding:40px; border-radius:15px; text-align:center; box-shadow:0 10px 30px rgba(0,0,0,0.2); width:320px;}
    h1 {margin-bottom:30px; color:#333; font-size:28px;}
    .link-button {display:flex; align-items:center; justify-content:center; text-decoration:none; color:white; padding:12px 20px; margin:12px 0; border-radius:10px; font-weight:bold; font-size:16px; transition:0.3s;}
    .link-button i {margin-right:10px; font-size:18px;}
    .link-button:hover {transform:translateY(-3px); box-shadow:0 8px 20px rgba(0,0,0,0.2);}
    .saweria {background-color:#FF6B6B;}
    .btc {background-color:#F7931A;}
    .telegram {background-color:#0088cc;}
    footer {margin-top:25px; font-size:13px; color:#777;}
  </style>
</head>
<body>
  <div class="container">
    <h1>Support Me</h1>
    <a href="https://saweria.co/username" target="_blank" class="link-button saweria"><i class="fas fa-heart"></i> Saweria</a>
    <a href="bitcoin:1ExampleBTCAddress" target="_blank" class="link-button btc"><i class="fab fa-bitcoin"></i> BTC Wallet</a>
    <a href="https://t.me/NamaBot" target="_blank" class="link-button telegram"><i class="fab fa-telegram-plane"></i> Telegram</a>
    <footer>&copy; 2025 SWD STORE. All rights reserved.</footer>
  </div>
</body>
</html>`;
    return new Response(html, {
      headers: { "content-type": "text/html; charset=UTF-8" },
    });
  },
};
