document.getElementById('dowry-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const salary = parseFloat(document.getElementById('salary').value);
    const jobType = document.getElementById('job-type').value;
    const contribution = document.getElementById('contribution').value;

    if (salary) {
        let finalSalary = salary;
        if (jobType === 'government') {
            finalSalary *= 1.20; // Increase salary by 20% for Government Job
            document.body.style.background = "#333"; // Change background color to dark
        } else if (jobType === 'private') {
            finalSalary *= 1.07; // Increase salary by 7% for Private Job
        } else if (jobType === 'berozgaar') {
            finalSalary *= 0.8; // Reduce salary by 20% for Berozgaar
        }
        const dowry = calculateDowry(finalSalary);
        document.getElementById('dowry-amount').textContent = dowry.toFixed(2);
    }

    if (contribution) {
        showContribution(contribution);
    }
});

function calculateDowry(salary) {
    return salary * 100;
}

function showContribution(contribution) {
    alert("NASHA karta HAI :\n\n" + contribution);
}
