function handleFormSubmit(event) {
  event.preventDefault();

  var nama = document.getElementById("nama").value;
  var pekerjaan = document.getElementById("pekerjaan").value;
  var hobi = document.getElementById("hobi").value;

  if (nama === "" || pekerjaan === "" || hobi === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Mohon isi semua inputan!",
      confirmButtonColor: "#3085d6",
    });
  } else {
    document.getElementById("result").innerHTML =
      "<h2>Hasil Input</h2>" +
      "<p><strong>Nama:</strong> " +
      nama +
      "</p>" +
      "<p><strong>Pekerjaan:</strong> " +
      pekerjaan +
      "</p>" +
      "<p><strong>Hobi:</strong> " +
      hobi +
      "</p>";
  }
}

document.getElementById("myForm").addEventListener("submit", handleFormSubmit);
