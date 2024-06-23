$(document).ready(function() {
    // Handle form submission
    $('#calorie-form').on('submit', function(event) {
        event.preventDefault();
        
        // Show the loading animation
        $('#loading').show();
        
        let formData = new FormData(this);
        $.ajax({
            type: 'POST',
            url: '/estimate',
            data: formData,
            processData: false,
            contentType: false,
            success: function(response) {
                // Hide the loading animation
                $('#loading').hide();
                
                // Display the response in the result div
                let resultHtml = `<h4>Reasoning: ${response.reasoning}</h4><ul>`;
                response.food_items.forEach(item => {
                    resultHtml += `<li>${item.name}: ${item.calories} calories</li>`;
                });
                resultHtml += `</ul><h4>Total Calories: ${response.total}</h4>`;
                $('#result').html(resultHtml);
            },
            error: function(response) {
                // Hide the loading animation
                $('#loading').hide();
                
                // Display error message in the result div
                $('#result').html(`<h4>Error: ${response.responseJSON.error}</h4>`);
            }
        });
    });
});
