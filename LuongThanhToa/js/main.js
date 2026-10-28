'use strict';
const $ = (s, p = document) => p.querySelector(s);
const $$ = (s, p = document) => [...p.querySelectorAll(s)];

/* 1. Menu mobile */
const menu = $('#menu'), menuBtn = $('#menuBtn');
menuBtn.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
$$('#menu a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));

/* 2. Dark mode (ghi nhớ lựa chọn) */
const themeBtn = $('#themeBtn');
function setTheme(t) {
  document.documentElement.dataset.theme = t;
  themeBtn.textContent = t === 'dark' ? '☀️' : '🌙';
  try { localStorage.setItem('theme', t); } catch (e) {}
}
let saved = null;
try { saved = localStorage.getItem('theme'); } catch (e) {}
setTheme(saved || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
themeBtn.addEventListener('click', () =>
  setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));

/* 3. Hiệu ứng gõ chữ */
const roles = ['sinh viên CNTT', 'lập trình viên Front-end', 'người thích học công nghệ mới']; // SỬA
let r = 0, c = 0, del = false;
function type() {
  const word = roles[r];
  $('#typed').textContent = word.slice(0, c);
  c += del ? -1 : 1;
  let wait = del ? 40 : 90;
  if (!del && c > word.length) { del = true; wait = 1400; }
  else if (del && c < 0) { del = false; c = 0; r = (r + 1) % roles.length; wait = 300; }
  setTimeout(type, wait);
}
type();

/* 4. Thanh kỹ năng chạy khi cuộn tới */
const io = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) {
    $$('i', e.target).forEach(b => b.style.width = b.dataset.level + '%');
    io.unobserve(e.target);
  }
}), { threshold: .3 });
io.observe($('.skills'));

/* 5. Lọc dự án */
$$('.chip').forEach(btn => btn.addEventListener('click', () => {
  $$('.chip').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const f = btn.dataset.filter;
  $$('.card').forEach(card => card.classList.toggle('hide', f !== 'all' && card.dataset.cat !== f));
}));

/* 6. Modal chi tiết dự án */
const projects = [
  { t: 'UTH Lab Monitor', d: 'Dự án C# WinForms mô phỏng hệ thống giám sát phòng máy qua LAN: máy giảng viên xem CPU/RAM và màn hình máy sinh viên, gửi file bài tập và gửi lệnh điều khiển.' },
  { t: 'Secondhand Marketplace', d: 'Nền tảng mua bán đồ cũ. Xem mã nguồn và mô tả chi tiết trên GitHub.' }
]; // SỬA
const modal = $('#modal');
$$('[data-modal]').forEach(b => b.addEventListener('click', () => {
  const p = projects[b.dataset.modal];
  $('#mTitle').textContent = p.t;
  $('#mText').textContent = p.d;
  modal.showModal();
}));
$('#mClose').addEventListener('click', () => modal.close());
modal.addEventListener('click', e => { if (e.target === modal) modal.close(); });

/* 7. Nút lên đầu trang + thanh "đường" tiến trình */
const topBtn = $('#topBtn'), bus = $('#bus');
addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  bus.style.left = (max > 0 ? scrollY / max * 100 : 0) + '%';
  topBtn.classList.toggle('show', scrollY > 400);
});
topBtn.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));

/* 8. Kiểm tra form liên hệ */
const form = $('#contactForm');
const rules = {
  name: v => v.trim().length >= 2 || 'Nhập họ tên (ít nhất 2 ký tự).',
  email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Email chưa đúng định dạng, ví dụ: ten@gmail.com.',
  msg: v => v.trim().length >= 10 || 'Nội dung cần ít nhất 10 ký tự.'
};
form.addEventListener('submit', e => {
  e.preventDefault();
  let ok = true;
  Object.keys(rules).forEach(id => {
    const input = $('#' + id), res = rules[id](input.value);
    input.classList.toggle('invalid', res !== true);
    input.nextElementSibling.textContent = res === true ? '' : res;
    if (res !== true) ok = false;
  });
  $('#formOk').textContent = ok ? 'Đã gửi! Mình sẽ phản hồi sớm nhất.' : '';
  if (ok) form.reset();
});
