document.addEventListener("DOMContentLoaded", () => {
  // Fetch JSON and populate dropdowns
  fetch('/routes.json')
    .then(res => res.json())
    .then(data => {
      const origins = [...new Set(data.map(item => item.origin))];
      const destinations = [...new Set(data.map(item => item.destination))];

      const originSelect = document.getElementById("shipperAddress");
      const destinationSelect = document.getElementById("receiverAddress");

      origins.forEach(city => {
        const option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        originSelect.appendChild(option);
      });

      destinations.forEach(city => {
        const option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        destinationSelect.appendChild(option);
      });
    });


    function generateShipmentID(length = 10) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let id = '';
        for (let i = 0; i < length; i++) {
            id += chars[Math.floor(Math.random() * chars.length)];
        }
        return id;
    }
  // Form Submission Handler
    document.getElementById("shipmentForm").addEventListener("submit", function(event) {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        const shipmentId = generateShipmentID();
        const shipperAddress = formData.get("shipperAddress");
        const receiverAddress = formData.get("receiverAddress");

        const shipmentData = {
            shipmentId,
            shipperAddress,
            receiverAddress
        };

        // Save to localStorage
        let storedShipments = JSON.parse(localStorage.getItem("shipments")) || [];
        storedShipments.push(shipmentData);
        localStorage.setItem("shipments", JSON.stringify(storedShipments));

        console.log("Shipment stored locally:", shipmentData);


        document.getElementById("formSuccess").textContent = `✅ Shipment booked successfully!ID(please copy to track): ${shipmentId}`;
        form.reset();

        function returntoindex(){
            window.location.href = '/index.html';
        }

        setInterval(4000,returntoindex);
        
    });
    });