
document.addEventListener('DOMContentLoaded', () => {
  const ram = navigator.deviceMemory || 4;
  document.getElementById('ram').innerText = `${(ram * 0.65).toFixed(1)} GB / ${ram} GB`;

  const cores = navigator.hardwareConcurrency || 4;
  document.getElementById('cpu').innerText = `${Math.floor(cores * 12)}%`;

  const freeStorage = Math.floor(Math.random() * 4 + 10);
  document.getElementById('storage').innerText = `${freeStorage}.${Math.floor(Math.random() * 10)} GB свободно`;

  const ua = navigator.userAgent;
  const deviceInfo = document.createElement('p');
  deviceInfo.style.fontSize = '0.8rem';
  deviceInfo.style.marginTop = '1rem';
  deviceInfo.style.color = '#aaa';

  let model = 'Неизвестное устройство';
  const match = ua.match(/\((.*?)\)/);
  if (match && match[1]) {
    const details = match[1].split(';');
    model = details.length >= 3 ? details[2].trim() : details[0].trim();
  }
  deviceInfo.innerText = 'Модель устройства: ' + model;
  document.querySelector('.container').appendChild(deviceInfo);

  if (navigator.getBattery) {
    navigator.getBattery().then(battery => {
      const level = Math.round(battery.level * 100);
      const batteryStatus = document.createElement('p');
      batteryStatus.style.fontSize = '0.9rem';
      batteryStatus.style.color = '#ccc';
      batteryStatus.innerHTML = `<span style="margin-right:6px;">🔋</span>Батарея: ${level}%`;
      document.querySelector('.container').appendChild(batteryStatus);
    });
  }
});

document.getElementById('scanBtn').addEventListener('click', () => {
  document.getElementById('scanBtn').style.display = 'none';
  const scanner = document.getElementById('scanner');
  const progress = document.getElementById('progress');
  scanner.style.display = 'block';

  let percent = 0;
  const interval = setInterval(() => {
    percent += 2;
    progress.style.width = percent + '%';

    if (percent >= 100) {
      clearInterval(interval);
      scanner.style.display = 'none';
      const resultSection = document.getElementById('result');
      const resultTitle = resultSection.querySelector('h2');
      resultSection.style.display = 'block';
      resultTitle.classList.add('blink');
    }
  }, 100);
});

document.getElementById('confirmBtn').addEventListener('click', () => {
  window.location.href = 'https://redirect.scndprfttrck.click/click?o=10790&a=26&sub_id1={custom1}&aff_click_id={clickId}';
});
