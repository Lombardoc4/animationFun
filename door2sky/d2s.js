
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

  var fullsky = {
    targets: '.sky',
    height: '110%',
    width: '110%',
    backgroundColor: '#add8e6'
  };


  var team1 = document.querySelectorAll('.ball1, .ball3, .ball5');
  var team2 = document.querySelectorAll('.ball2, .ball4, .ball6');
  var teamSq = document.querySelectorAll('.squares');

  var teamA = {
    targets: '.team1',
    loop: true,
    zIndex: 3,
    easing: 'linear',
    direction: 'alternate',
    borderRadius: [
      {value: '49%', duration: 5000}
    ],
    scale: [
      {value: 5, duration: 5000},
    ],
    rotate: {value: '6turn', duration: 5000},
  };
  var teamB = {
    targets: '.team2',
    loop: true,
    zIndex: 3,
    easing: 'linear',
    direction: 'alternate',
    borderRadius: [
      {value: '49%', duration: 5000}
    ],
    scale: [
      {value: 5, duration: 5000},
    ],
    rotate: {value: '-6turn', duration: 5000},
  };

  var squareInit = {
    targets: teamSq,
    loop: true,
    direction: 'alternate',
    scale: [
      {value: '.3', duration: 5000},
      {value: '1.5', duration: 5000},
      {value: '.1', duration: 10000},
      {value: '1', duration: 1000}
    ],
  };

var ball1 = {
  targets: '.ball1',
  loop: true,
  backgroundColor: [
    {value: '#800080', duration: 1333},
    {value: '#0066ff', duration: 1333},
    {value: '#800080', duration: 1334},
    {value: '#0066ff', duration: 2000},
    {value: '#800080', duration: 1334},
    {value: '#0066ff', duration: 1333},
    {value: '#800080', duration: 1333},
  ],
}
var ball2 = {
  targets: '.ball2',
  loop: true,
  backgroundColor: [
    {value: '#0066ff', duration: 2666},
    {value: '#800080', duration: 1334},
    {value: '#0066ff', duration: 2000},
    {value: '#800080', duration: 1334},
    {value: '#0066ff', duration: 2666},
  ],
}
var ball3 = {
  targets: '.ball3',
  loop: true,
  backgroundColor: [
    {value: '#800080', duration: 4000},
    {value: '#0066ff', duration: 2000},
    {value: '#800080', duration: 4000},
  ],
}
var ball4 = {
  targets: '.ball4',
  loop: true,
  backgroundColor: [
    {value: '#0066ff', duration: 10000},
  ],
}
var ball5 = {
  targets: '.ball5',
  loop: true,
  backgroundColor: [
    {value: '#add8e6', duration: 4000},
    {value: '#800080', duration: 2000},
    {value: '#add8e6', duration: 4000},
  ],
}
var ball6 = {
  targets: '.ball6',
  loop: true,
  height: [
    {value: 150, duration: 4000},
    {value: 250, duration: 2000},
    {value: 150, duration: 4000},
  ],
  width: [
    {value: 150, duration: 4000},
    {value: 250, duration: 2000},
    {value: 150, duration: 4000},
  ],
  backgroundColor: [
    {value: '#add8e6', duration: 4000},
    {value: '#0066ff', duration: 1000},
    {value: '#add8e6', duration: 5000},
  ],
};

var square = {
  targets: teamSq,
  loop: true,
  zIndex: 3,
  backgroundColor: '#ebb434',
  borderRadius: [
    {value: '49%', duration: 1000},
    {value: '0%', duration: 1000}
  ],
};
var wrap1 = {
  targets: '.sqWrap',
  zIndex: 3,
  direction: 'alternate',
  loop: true,
  easing: 'steps(17)',
  rotate: {value: '3turn', duration: 5000},
}
var wrap2 = {
  targets: '.sqWrap2',
  zIndex: 3,
  direction: 'alternate',
  loop: true,
  easing: 'steps(17)',
  rotate: {value: '-3turn', duration: 5000},
};

  doors.add(slide, '-500' );
  doors.add(slide2, '-500');
  doors.add(squareInit, '500');
  doors.add(skySlide, '10000');
  doors.add(fullsky, '35000');
  doors.add(teamA, '36000');
  doors.add(teamB, '36000');
  doors.add(ball1, '36000');
  doors.add(ball2, '36000');
  doors.add(ball3, '36000');
  doors.add(ball4, '36000');
  doors.add(ball5, '36000');
  doors.add(ball6, '36000');
  doors.add(square, '35000');
  doors.add(wrap1, '35000');
  doors.add(wrap2, '35000');
}
openDoors();
