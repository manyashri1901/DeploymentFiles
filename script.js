document.getElementById('booking-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.querySelector('input[placeholder="Full Name"]').value;
  const phone = document.querySelector('input[placeholder="Phone Number"]').value;
  const datetime = document.querySelector('input[type="datetime-local"]').value;

  const booking = { name, phone, datetime, car: selectedCar || "Sedan" };

  const res = await fetch('/api/book', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(booking),
  });

  const data = await res.json();
  alert(data.message);
});

let selectedCar = null;

document.querySelectorAll('.car-card button').forEach((btn, index) => {
  btn.addEventListener('click', () => {
    selectedCar = ["Sedan", "SUV", "Hatchback", "Luxury"][index];
    alert(`You selected: ${selectedCar}`);
  });
});
