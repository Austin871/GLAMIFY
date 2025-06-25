  const paymentSelect = document.getElementById("paymentMethod");
  const cardDetails = document.getElementById("cardDetails");

  paymentSelect.addEventListener("change", () => {
    if (paymentSelect.value === "card") {
      cardDetails.style.display = "block";
    } else {
      cardDetails.style.display = "none";
    }
  });