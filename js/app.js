








const copyemail = document.getElementById("copyemail");

document.getElementById("emailbutton").onclick = () => {
  window.navigator.clipboard.writeText(copyemail.textContent).then(() => {
    alert("이메일 복사완료");
  });
};
const copyphone = document.getElementById("copyphone");

document.getElementById("phonebutton").onclick = () => {
  window.navigator.clipboard.writeText(copyphone.textContent).then(() => {
    alert("전화번호 복사완료");
  });
};
