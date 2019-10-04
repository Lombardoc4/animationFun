function Ball(){
  var doors = anime({
    targets: '.ball',
    loop: true,
    easing: 'linear',
    borderRadius: [
      {value: '45%', duration: 5000},
      {value: '20%', duration: 5000},
    ],
    rotate: {value: '6turn', duration: 10000},
    scale: [
      {value: 5, duration: 5000},
      {value: 1, duration: 5000},
    ],
  });


};
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
    {value: '#fff', duration: 4500},
    {value: '#800080', duration: 1000},
    {value: '#fff', duration: 4500},
  ],
})
var ball6 = anime({
  targets: '.ball6',
  loop: true,
  height: [
    {value: 150, duration: 4500},
    {value: 250, duration: 1000},
    {value: 150, duration: 4500},
  ],
  width: [
    {value: 150, duration: 4500},
    {value: 250, duration: 1000},
    {value: 150, duration: 4500},
  ],
  backgroundColor: [
    {value: '#ffffff', duration: 4500},
    {value: '#0066ff', duration: 1000},
    {value: '#ffffff', duration: 4500},
  ],
})

Ball();
