google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var valuesTorn = document.getElementsByClassName("valorTorneo");
    var valuesRul = document.getElementsByClassName("valorRuleta");
    var valuesLin = document.getElementsByClassName("valorLineal");

    let dataSet = []

    document.getElementById("aux").innerHTML = valuesRul.length

    dataSet.push(['Iteracion', 'Torneo', 'Ruleta', 'n mejores(lineal)'])
    for (i = 0; i < valuesTorn.length; i++) {
        var tuple = [i, Number(valuesTorn[i].innerHTML), Number(valuesRul[i].innerHTML), Number(valuesLin[i].innerHTML)]
        dataSet.push(tuple)
    }

    var data = google.visualization.arrayToDataTable(
        dataSet
);

var options = {
    title: 'Velocidad de convergencia',
    curveType: 'function',
    legend: { position: 'bottom' }
};

var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

chart.draw(data, options);
}