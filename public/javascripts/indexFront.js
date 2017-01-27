//var localDataList = <%= dataList %>;
//var localDataList = <%= JSON.stringify( dataList ) %> //;

var innerCode = '';

for (var entry in localDataList){
  var printry = parseInt(entry)+1;
  innerCode += '<br> <p>' + printry + '</p>';
  innerCode += '<li>' + localDataList[entry].entry1 + '</li>' +
               '<li>' + localDataList[entry].entry2 + '</li>' +
               '<li>' + localDataList[entry].entry3 + '</li>';
}

document.getElementById('outputList').innerHTML = innerCode;
