// CSVデータを取得する関数
function fetchCSV(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr.responseText);
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
}

// CSVデータをHTMLテーブルに変換する関数
function convertCSVtoHTML(csvData) {
    var rows = csvData.split('\n');
    var tableHTML = '<table>';
    
    rows.forEach(function(row) {
        tableHTML += '<tr>';
        var columns = row.split(',');
        columns.forEach(function(column) {
            tableHTML += '<td>' + column + '</td>';
        });
        tableHTML += '</tr>';
    });

    tableHTML += '</table>';
    return tableHTML;
}

// CSVファイルのURL
var csvUrl = './penguins.csv';

// CSVデータを取得してHTMLに変換し、テーブルコンテナに挿入する
fetchCSV(csvUrl, function(csvData) {
    var htmlTable = convertCSVtoHTML(csvData);
    document.getElementById('table-container').innerHTML = htmlTable;
});
