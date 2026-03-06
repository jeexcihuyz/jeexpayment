const paymentData = {
  qris: {
    title: "Scan QRIS",
    content: `
      <img src="qris.jpg" alt="QRIS" class="qris-img">
      <p style="margin-top:15px; font-size:14px; color:var(--muted);">Scan kode QR untuk melakukan pembayaran</p>
    `,
  },
  ewallet: {
    title: "E-Wallet",
    content: `
      <div style="margin-top: 20px;">
        <div class="copy-container">
          <span>DANA:<br> <strong id="dana-num">083135825844</strong></span>
          <button class="copy-btn" onclick="copyText('dana-num', this)">Copy</button>
        </div>
        <div class="copy-container">
          <span>GOPAY:<br> <strong id="gopay-num">083135825844</strong></span>
          <button class="copy-btn" onclick="copyText('gopay-num', this)">Copy</button>
        </div>
      </div>
      <p style="margin-top:15px; font-size:14px; color:var(--muted); text-align:center;">a.n. A J</p>
    `,
  },
  bank: {
    title: "Transfer Bank",
    content: `
      <div style="margin-top: 20px;">
        <div class="copy-container">
          <span>SEABANK:<br> <strong id="seabank-num">901901891501</strong></span>
          <button class="copy-btn" onclick="copyText('seabank-num', this)">Copy</button>
        </div>
      </div>
      <p style="margin-top:15px; font-size:14px; color:var(--muted); text-align:center;">a.n. A J</p>
    `,
  },
};

const modal = document.getElementById("paymentModal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");

function openModal(type) {
  modalTitle.innerHTML = paymentData[type].title;
  modalBody.innerHTML = paymentData[type].content;
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};

function copyText(elementId, btn) {
  const textToCopy = document.getElementById(elementId).innerText;

  navigator.clipboard.writeText(textToCopy).then(() => {
    const originalText = btn.innerText;
    btn.innerText = "Copied!";
    btn.style.background = "var(--accent3)"; // Berubah jadi hijau
    btn.style.borderColor = "var(--accent3)";
    btn.style.color = "#000";

    setTimeout(() => {
      btn.innerText = originalText;
      btn.style.background =
        "linear-gradient(135deg, rgba(0, 212, 255, .18), rgba(168, 85, 247, .18))";
      btn.style.borderColor = "rgba(0, 212, 255, .35)";
      btn.style.color = "var(--text)";
    }, 2000);
  });
}
