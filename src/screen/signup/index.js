let js = document.getElementById("singup");

js.onclick = function () {
  let newarr = JSON.parse(localStorage.getItem("information")) || [];
  console.log(newarr, "ah");
  let UserName = document.getElementById("UserName").value.trim();
  let Password = document.getElementById("Password").value.trim();
  let PhoneNumber = document.getElementById("PhoneNumber").value.trim();
  let Email = document.getElementById("Email").value.trim();
  let text = document.getElementById("text");

  if (!UserName || !Password || !PhoneNumber || !Email) {
    text.textContent = "Please enter your details";
    text.style.color = "red";
    return;
  }

  let conflict = newarr.find(
    (entry) =>
      entry.UserName === UserName ||
      entry.Password === Password ||
      entry.PhoneNumber === PhoneNumber ||
      entry.Email === Email
  );

  if (conflict) {
    text.textContent = "Some of these data are already used!";
    text.style.color = "red";
    return;
  }

  let information = { UserName, Password, PhoneNumber, Email };
  newarr.push(information);
  localStorage.setItem("information", JSON.stringify(newarr));

  text.textContent = "Account created successfully!";
  text.style.color = "green";

  document.getElementById("UserName").value = "";
  document.getElementById("Password").value = "";
  document.getElementById("PhoneNumber").value = "";
  document.getElementById("Email").value = "";

  window.location.href = "/src/screen/signin/index.html";
};
