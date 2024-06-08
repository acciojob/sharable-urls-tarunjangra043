// your code here
document.getElementById('urlForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent the form from submitting
    
    // Get values from form inputs
    var name = document.getElementById('name').value;
    var year = document.getElementById('year').value;
    
    // Construct the query string
    var queryString = '?name=' + encodeURIComponent(name) + '&year=' + encodeURIComponent(year);
    
    // Update the URL display
    document.getElementById('url').textContent = 'URL: https://localhost:8080/' + queryString;
});