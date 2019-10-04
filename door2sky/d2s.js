for(var i = 1; i <= 100; i++) {
  var div = document.createElement('div');
  div.setAttribute('class', 'door doorLeft');
var body = document.getElementsByTagName('body')[0];
body.appendChild(div);
}
for(var i = 1; i <= 100; i++) {
  var div = document.createElement('div');
  div.setAttribute('class', 'door doorRight');
var body = document.getElementsByTagName('body')[0];
body.appendChild(div);
}
for(var i = 1; i <= 50; i++) {
  var div = document.createElement('div');
  div.setAttribute('class', 'sky skyUp');
var body = document.getElementsByTagName('body')[0];
body.appendChild(div);
}

function openDoors(){
  var doors = anime.timeline({
    easing: 'linear',
  });

  var slide = {
    targets :'.doorRight',
    delay: function(el, i){
      return i * 250;
    },
    translateX: [
      {value: 1600, duration: 1200}
    ],
    width: ['0%', '25%'],
  };
  var slide2 = {
    targets :'.doorLeft',
    delay: function(el, i){
      return i * 250;
    },
    translateX: [
      {value: -1600, duration: 1200}
    ],
    width: ['0%', '25%'],
  };

  var skySlide = {
    targets :'.sky',
    delay: function(el, i){
      return i * 500;
    },
    translateY: function(el ,i){
      return -500 + (10 * i);
    },
    height:['0%', '20%'],
  };

  doors.add(slide );
  doors.add(slide2, '-500');
  doors.add(skySlide, '1000');

}
openDoors();
