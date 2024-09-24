// Function to add a trip
function addTrip() {
    // Get the trip name, destination, and date from the input fields
    const tripName = document.getElementById('tripName').value;
    const tripDestination = document.getElementById('tripDestination').value;
    const tripDate = document.getElementById('tripDate').value;

    // Check if all fields are filled
    if (tripName && tripDestination && tripDate) {
        // Create a new list item for the trip
        const li = document.createElement('li');
        li.classList.add('trip-item');

        // Create content for the trip item
        const tripContent = document.createElement('div');
        tripContent.classList.add('trip-content');
        tripContent.textContent = `${tripName} to ${tripDestination} on ${tripDate}`;

        // Create details for the trip item
        const tripDetails = document.createElement('div');
        tripDetails.classList.add('trip-details');
        tripDetails.textContent = `Details for ${tripName}: Destination - ${tripDestination}, Date - ${tripDate}`;

        // Append content and details to the list item
        li.appendChild(tripContent);
        li.appendChild(tripDetails);

        // Add the new list item to the trip list
        document.getElementById('tripList').appendChild(li);

        // Clear the input fields
        document.getElementById('tripName').value = '';
        document.getElementById('tripDestination').value = '';
        document.getElementById('tripDate').value = '';
    } else {
        alert('Please enter all fields: trip name, destination, and date.');
    }
}
