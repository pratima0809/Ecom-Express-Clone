function trackShipment() {
  const awb = document.getElementById("awbInput").value.trim();
  if (!awb) {
    alert("Please enter an AWB number.");
    return;
  }
  
  // Simulate an API call or database check
  alert("Tracking shipment for AWB: " + awb);
  
  // Here you can update the DOM dynamically with new shipment data
}


// DATE UPDATER
function updateCurrentDate() {
  const dayNumEl = document.getElementById('current-day');
  const dateTextEl = document.getElementById('current-date');

  const now = new Date();

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const day = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  const dayName = days[now.getDay()];

  // Update elements
  dayNumEl.textContent = day;
  dateTextEl.textContent = `/ ${month} / ${year}`;

  // If you want to update "Last Updated" weekday
  const lastUpdatedEl = document.querySelector('.update-info strong');
  if (lastUpdatedEl) {
    lastUpdatedEl.textContent = dayName;
  }
}


// TRACK THE PACKAGE
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll('.timeline-item');
  const delay = 3000; // 3 seconds in milliseconds

  items.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add('visible');

      if (index === items.length - 1) {
        document.querySelector('.truck-icon').textContent = "🎊";
        document.getElementById('status').textContent = "Shipment Delivered!";
        alert("✅ Shipment has been delivered!");
      }
    }, index * delay);
  });
});


// SELECTED LOCATIONS
function updateTimelineFromLocalStorage() {
  const allShipments = JSON.parse(localStorage.getItem("shipments")) || [];

  if (allShipments.length === 0) return; // nothing to populate

  const latest = allShipments[allShipments.length - 1]; // last booked shipment

  // Update timeline with stored values
  document.getElementById("pickupLocation").textContent = latest.shipperAddress;
  document.getElementById("deliveryCentre").textContent = latest.receiverAddress;
  document.getElementById("outForDelivery").textContent = latest.receiverAddress;
  document.getElementById("shipmentDelivered").textContent = latest.receiverAddress;
}



document.addEventListener("DOMContentLoaded", () => {
  updateCurrentDate();
  const storedId = localStorage.getItem("trackAwb");
  if (storedId) {
    const awbinput = document.getElementById("awbInput");
    const trkid = document.querySelector('.tracking-id');
    const awbNo = document.getElementById('awbNo')
    if (awbinput)
      {
        awbinput.value = storedId;
        trkid.textContent = storedId;
        awbNo.textContent = storedId;
      }
  }
  localStorage.removeItem("trackAwb");
  updateTimelineFromLocalStorage();
});
