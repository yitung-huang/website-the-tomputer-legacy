const COMMON_BROWSER_DATA = [
    { label: 'Chrome', value: 65.2, colour: '#FFAABB' },
    { label: 'Safari', value: 17.5, colour: '#FFBBAA' },
    { label: 'IE & Edge', value: 5.6, colour: '#FFCCAA' },
    { label: 'Firefox', value: 4.4, colour: '#FFDD99' },
    { label: 'Opera', value: 1.6, colour: '#FFEE99' }
];

function drawBarGraph(title, div_id, data) {
    let max = -Infinity;

    let graph = document.createElement('TABLE');

    let table_rows = [];

    for (let i = 0; i < data.length; i++) {
        // Record the maximum value to set the scale
        if (data[i].value > max) {
            max = data[i].value;
        }

        let table_row = document.createElement('TR');
        let label = document.createElement('TD');
        let bar_container = document.createElement('TD');
        let bar = document.createElement('DIV');
        let value = document.createElement('DIV');

        label.innerHTML = data[i].label;
        label.classList.add('graph__label');

        bar_container.classList.add('graph__bar-container');
        bar.classList.add('graph__bar');
        bar.style.background = data[i].colour;
        value.innerHTML = data[i].value + '%';
        value.classList.add('graph__value');

        bar_container.appendChild(bar);
        bar_container.appendChild(value);

        table_row.appendChild(label);
        table_row.appendChild(bar_container);

        table_rows.push(table_row);
    }

    const scale = 60;

    for (let i = 0; i < data.length; i++) {
        table_rows[i].children[1].children[0].style.width =
            (data[i].value / scale) * 100 + '%';
        graph.appendChild(table_rows[i]);
    }

    let graph_title = document.createElement('DIV');
    graph_title.innerHTML = title;
    graph_title.classList.add('graph__title');

    let container = document.getElementById(div_id);
    container.appendChild(graph_title);
    container.appendChild(graph);
}

window.addEventListener('load', function (event) {
    drawBarGraph(
        'Most commonly used browsers - March 2021',
        'common-browser-graph',
        COMMON_BROWSER_DATA
    );
});
