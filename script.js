function calculateAge() {
  const birthdate = document.getElementById("birthdate").value;
  if (!birthdate) {
    document.getElementById("result").innerText = "Please select your birthdate.";
    return;
  }

  const birthDate = new Date(birthdate);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  const dayDifference = today.getDate() - birthDate.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
  }

  document.getElementById("result").innerText = `Your age is: ${age} years`;
}