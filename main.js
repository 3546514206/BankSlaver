// 重生之我在银行当牛马 — 入口
const btn = document.getElementById('start-btn');
const status = document.getElementById('status');

btn.addEventListener('click', () => {
  status.hidden = false;
  btn.textContent = '已上班，勿念';
});
