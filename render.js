console.log(data);

let table = document.getElementById('table');
let HTML = "";
HTML += "<tr>";
Object.keys(data[0]).forEach(key => {
    HTML += `<th>${key}</th>`;
});

HTML += "</tr>";


data.forEach(item => {
    HTML += "<tr>";
    // Object.keys(data[0]).forEach(key => {
    //     HTML += `<td>${item[key]}</td>  `;
    // });
    Object.values(item).forEach(value => {
        HTML += `<td>${value}</td>  `;
    });

    HTML += "</tr>";

});
table.innerHTML += HTML;