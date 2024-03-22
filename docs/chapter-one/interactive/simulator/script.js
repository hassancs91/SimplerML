document.addEventListener('DOMContentLoaded', () => {
    // Prefill data
    let prefillData = [
        [10, 51, 41.80, 0],
        [4, 764, 34.89, 1],
        [14, 892, 47.12, 0],
        [16, 575, 38.52, 1],
        [22, 196, 5.94, 1]
    ];

    prefillData.forEach(rowData => addRow(rowData));
});

function addRow(data) {
    let table = document.getElementById('inputTable');
    if (table.rows.length <= 5) {
        let row = table.insertRow();
        for (let i = 0; i < 4; i++) {
            let cell = row.insertCell();
            let input = document.createElement('input');
            input.type = 'number';
            input.value = data[i]; // Use data to prefill the cell
            cell.appendChild(input);
        }
    }
}

function removeRow() {
    let table = document.getElementById('inputTable');
    if (table.rows.length > 2) table.deleteRow(-1); // Keeps at least one row
}

async function startSimulation() {
    let table = document.getElementById('inputTable');
    let twitterPosts = [];
    let viralityStatus = [];

    // Extract data from table (once, before the loop)
    for (let i = 1; i < table.rows.length; i++) {
        let row = table.rows[i];
        let rowData = [];
        for (let j = 0; j < row.cells.length - 1; j++) {
            rowData.push(parseFloat(row.cells[j].firstElementChild.value));
        }
        twitterPosts.push(rowData);
        viralityStatus.push(parseInt(row.cells[row.cells.length - 1].firstElementChild.value));
    }

    let normalizedPosts = normalizeData(twitterPosts);
    let errorThreshold = parseFloat(document.getElementById('errorThreshold').value);
    let predictionThreshold = parseFloat(document.getElementById('predictionThreshold').value);
    let numIterations = parseInt(document.getElementById('numIterations').value);
    let randomWeights = initializeWeights(normalizedPosts[0].length);
    let iterationsOutput = document.getElementById('iterationsOutput');
    let errors = [];
    iterationsOutput.innerHTML = '';

    for (let i = 0; i < numIterations; i++) {
        await new Promise(resolve => setTimeout(resolve, 0));

        // Reinitialize weights in each iteration to match Python script behavior
        randomWeights = initializeWeights(normalizedPosts[0].length);

        let predictedVirality = normalizedPosts.map(post => predictVirality(post, randomWeights));
        let averageError = calculateAverageError(predictedVirality, viralityStatus, predictionThreshold);
        errors.push(averageError);
        iterationsOutput.innerHTML += `Iteration ${i + 1}: Error = ${averageError.toFixed(4)}<br>`;

        if (averageError < errorThreshold) {
            break;
        }

        let progress = (i + 1) / numIterations * 100;
        updateProgressBar(progress);
    }

    displayChart(errors);
}


function normalizeData(data) {
    let normData = [];
    for (let i = 0; i < data[0].length; i++) {
        let col = data.map(row => row[i]);
        let minVal = Math.min(...col);
        let maxVal = Math.max(...col);
        let normCol = col.map(x => (x - minVal) / (maxVal - minVal));
        normData.push(normCol);
    }
    return normData[0].map((_, colIndex) => normData.map(row => row[colIndex]));
}

function initializeWeights(numFeatures) {
    return Array.from({ length: numFeatures }, () => Math.random());
}

function predictVirality(postFeatures, weights) {
    return postFeatures.reduce((acc, feature, idx) => acc + feature * weights[idx], 0);
}

function calculateAverageError(predictions, actuals, predictionThreshold) {
    let totalError = 0;
    for (let i = 0; i < predictions.length; i++) {
        let predictedVirality = predictions[i] >= predictionThreshold ? 1 : 0;
        totalError += Math.abs(predictedVirality - actuals[i]);
    }
    return totalError / actuals.length;
}

function updateProgressBar(progress) {
    let progressBar = document.getElementById('progressBar');
    progressBar.style.width = progress + '%';
    progressBar.innerText = Math.round(progress) + '%';
}

function displayChart(errors) {
    let ctx = document.getElementById('myChart').getContext('2d');

    if (window.myChart && typeof window.myChart.destroy === 'function') {
        window.myChart.destroy();
    }

    window.myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: errors.map((_, index) => index + 1),
            datasets: [{
                label: 'Average Error per Iteration',
                data: errors,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}