var pinList = [
    "penguin1",
    "penguin2",
    "penguin3",
    "penguin4",
    "penguin5",
    "penguin6",
    "penguin7",
    "penguin8",
    "yeti"    
];

function listPins() {

    var elem = document.getElementById('gameholder');
    for (var i=0; i < pinList.length; i++){
       elem.innerHTML += '<div class="' + pinList[i] + ' pin">' + '</div>';
    }  
}

function shuffle(array) {
  for (var j, x, i = array.length; i > 0; --i) {
      
        j = Math.floor(Math.random() * i);
        x = pinList[--i];
        array[i] = array[j];
        array[j] = x;
    }
  return array;
}

function refresh(){   
    var elem = document.getElementById('gameholder');
    elem.innerHTML = null;   
    shuffle(pinList);
    listPins();
    $(document).ready( function() {
   $(".yeti").mousedown(function() {
        document.getElementById('roar').play()
        });
});
}
refresh();
        
       
