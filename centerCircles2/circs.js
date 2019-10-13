
function partTwo(){
  var team1 = document.querySelectorAll('.ball1, .ball3, .ball5');
  var team2 = document.querySelectorAll('.ball2, .ball4, .ball6');
  var teamSq = document.querySelectorAll('.squares');

  var doors = anime({
    targets: '.team1',
    loop: true,
    easing: 'linear',
    direction: 'alternate',
    borderRadius: [
      {value: '49%', duration: 5000}
    ],
    scale: [
      {value: 5, duration: 5000},
    ],
    rotate: {value: '6turn', duration: 5000},
  });
  var doors = anime({
    targets: '.team2',
    loop: true,
    easing: 'linear',
    direction: 'alternate',
    borderRadius: [
      {value: '49%', duration: 5000}
    ],
    scale: [
      {value: 5, duration: 5000},
    ],
    rotate: {value: '-6turn', duration: 5000},
  });



var ball1 = anime({
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
})
var ball2 = anime({
  targets: '.ball2',
  loop: true,
  backgroundColor: [
    {value: '#0066ff', duration: 2666},
    {value: '#800080', duration: 1334},
    {value: '#0066ff', duration: 2000},
    {value: '#800080', duration: 1334},
    {value: '#0066ff', duration: 2666},
  ],
})
var ball3 = anime({
  targets: '.ball3',
  loop: true,
  backgroundColor: [
    {value: '#800080', duration: 4000},
    {value: '#0066ff', duration: 2000},
    {value: '#800080', duration: 4000},
  ],
})

var ball4 = anime({
  targets: '.ball4',
  loop: true,
  backgroundColor: [
    {value: '#0066ff', duration: 10000},
  ],
})
var ball5 = anime({
  targets: '.ball5',
  loop: true,
  backgroundColor: [
    {value: '#fff', duration: 4000},
    {value: '#800080', duration: 2000},
    {value: '#fff', duration: 4000},
  ],
})
var ball6 = anime({
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
    {value: '#ffffff', duration: 4000},
    {value: '#0066ff', duration: 1000},
    {value: '#ffffff', duration: 5000},
  ],
});

var square = anime({
  targets: teamSq,
  loop: true,
  backgroundColor: '#ebb434',
  borderRadius: [
    {value: '49%', duration: 1000},
    {value: '0%', duration: 1000}
  ],
});
var wrap1 = anime({
  targets: '.sqWrap',
  direction: 'alternate',
  loop: true,
  easing: 'steps(17)',
  rotate: {value: '3turn', duration: 5000},
})
var wrap1 = anime({
  targets: '.sqWrap2',
  direction: 'alternate',
  loop: true,
  easing: 'steps(17)',
  rotate: {value: '-3turn', duration: 5000},
})

};
partTwo();
