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
// for(var i = 1; i <= 50; i++) {
//   var div = document.createElement('div');
//   div.setAttribute('class', 'sky skyUp');
// var body = document.getElementsByTagName('body')[0];
// body.appendChild(div);
// }
// for(var i = 1; i <= 50; i++) {
//   var div = document.createElement('div');
//   div.setAttribute('class', 'sky skyDown');
// var body = document.getElementsByTagName('body')[0];
// body.appendChild(div);
// }

function openDoors(){
  var doors = anime.timeline({
    easing: 'linear',
  });

  var slide = {
    // rotate: function(el, i){
    //   return i* 30;
    // },
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
    // rotate: function(el, i){
    //   return i* 30;
    // },
    targets :'.doorLeft',
    delay: function(el, i){
      return i * 250;
    },
    translateX: [
      {value: -1600, duration: 1200}
    ],
    width: ['0%', '25%'],
  };

  doors.add(slide );
  doors.add(slide2, '-500');
}
function openSky(){
  var doors = anime.timeline({
    loop: false,
    easing: 'linear',
  });

  var slide = {
    rotate: function(el, i){
      return i* 30;
    },
    targets :'.skyDown',
    delay: function(el, i){
      return i * 500;
    },
    translateY: 1000,
    height: ['0%', '20%'],
  };
  var slide2 = {
    rotate: function(el, i){
      return i* 30;
    },
    targets :'.skyUp',
    delay: function(el, i){
      return i * 500;
    },
    translateY: -1025,
    height: ['0%', '20%'],
  };

  doors.add(slide );
  doors.add(slide2, '-500');
};

function Ball(){
  var doors = anime({
    targets: '.ballL, .ballR, .ballT, .ballB',
    loop: true,
    easing: 'linear',
    borderRadius: [
      {value: '50%', duration: 5000},
      {value: '0%', duration: 5000},
    ],
    rotate: {value: 360, duration: 10000},
    scale: [
      {value: 5, duration: 5000},
      {value: 1, duration: 5000},
    ],
  });
};

openDoors();
// openSky();
// Ball();

function furyBalls(){
  var test = anime.timeline({
  targets: '.ballL, .ballR',
  loop: true,
  });

  var test1 = {
    loop: true,
  backgroundColor: [
    {value: '#eeff38', duration: 1333},
    {value: '#ffc338', duration: 1333},
    {value: '#ff7e38', duration: 1334},
    {value: '#ff3838', duration: 2000},
    {value: '#ff7e38', duration: 1334},
    {value: '#ffc338', duration: 1333},
    {value: '#eeff38', duration: 1333},
    {value: '#ff3838', duration: 2000},
  ],
};

var test2 = {
  targets: '.ballT, .ballB',
  loop: true,
  backgroundColor: [
    {value: '#eeff38', duration: 1333},
    {value: '#ffc338', duration: 1333},
    {value: '#ff7e38', duration: 1334},
    {value: '#ff3838', duration: 2000},
    {value: '#ff7e38', duration: 1334},
    {value: '#ffc338', duration: 1333},
    {value: '#eeff38', duration: 1333},
    {value: '#ff3838', duration: 2000},
  ]
};

  test.add(test1);

  test.add(test2, '25000');
};
furyBalls();
