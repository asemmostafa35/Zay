let button = document.getElementById("singin");
let pas = document.getElementById("message");

button.onclick = function () {
  let usernameInput = document.getElementById("UserName").value.trim();
  let passwordInput = document.getElementById("Password").value.trim();

  let storedArr = JSON.parse(localStorage.getItem("information")) || [];
  let found = storedArr.some(
    (entry) =>
      entry.UserName === usernameInput && entry.Password === passwordInput
  );

  if (found) {
    pas.textContent = "تم تسجيل الدخول بنجاح";
    pas.style.color = "green";
    window.location.href = "/src/screen/home/index.html";
  } else {
    pas.textContent = "اسم المستخدم او كلمه المرور غير صحيحه";
    pas.style.color = "red";
  }
};
