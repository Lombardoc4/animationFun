var el = document.querySelectorAll('.box');

for(var i = 1; i <= 100; i++) {
  var div = document.createElement('div');
  div.setAttribute('class', 'tests');
var body = document.getElementsByTagName('body')[0];
body.appendChild(div);
}
for(var i = 1; i <= 100; i++) {
  var div = document.createElement('div');
  div.setAttribute('class', 'test');
var body = document.getElementsByTagName('body')[0];
body.appendChild(div);
}
for(var i = 1; i <= 100; i++) {
  var div = document.createElement('div');
  div.setAttribute('class', 'testss');
var body = document.getElementsByTagName('body')[0];
body.appendChild(div);
}

var test = document.querySelectorAll('.test');
var tests = document.querySelectorAll('.tests');
var testss = document.querySelectorAll('.testss');

var randoY = function(){
  return anime.random(0,35) + 'rem';
};
var randoX = function(){
  return anime.random(0,75) + 'rem';
};

function timeline1() {
var t1 = anime.timeline({
  targets: tests,
  delay: function(el, i){
    return i * 5;
  },
  easing: 'spring',
});
  var tladd1 = {
    translateY: randoY,
    translateX: randoX,
    backgroundColor: '#00f',

  };
t1.add(tladd1, '-=200');

  var tladd2 = {
  backgroundColor: '#ff0',
  translateY: randoY,
  translateX: randoX,
  };
t1.add(tladd2, '-=200');

  var tladd3 = {
  backgroundColor: '#f0f',
  translateY: randoY,
  translateX: randoX,
  };
t1.add(tladd3, '-=200');

  t1.complete= function() {timeline1();};
}

function timeline2() {
var t2 = anime.timeline({
  targets: test,
  delay: function(el, i){
    return i * 5;
  },
  easing: 'spring',
});
  var tladd1 = {
    translateY: randoY,
    translateX: randoX,
    backgroundColor: '#f0f',

  };
t2.add(tladd1, '-=200');

  var tladd2 = {
  backgroundColor: '#00f',
  translateY: randoY,
  translateX: randoX,
  };
t2.add(tladd2, '-=200');

  var tladd3 = {
  backgroundColor: '#ff0',
  translateY: randoY,
  translateX: randoX,
  };
t2.add(tladd3, '-=200');

  t2.complete= function() {timeline2();};
}

function timeline3() {
var t3 = anime.timeline({
  targets: testss,
  delay: function(el, i){
    return i * 5;
  },
  easing: 'spring',
});
  var tladd1 = {
    translateY: randoY,
    translateX: randoX,
    backgroundColor: '#ff0',

  };
t3.add(tladd1, '-=200');

  var tladd2 = {
  backgroundColor: '#f0f',
  translateY: randoY,
  translateX: randoX,
  };
t3.add(tladd2, '-=200');

  var tladd3 = {
  backgroundColor: '#00f',
  translateY: randoY,
  translateX: randoX,
  };
t3.add(tladd3, '-=200');

  t3.complete= function() {timeline3();};
}

timeline3();
timeline2();
timeline1();

anime({
  targets: el,
  backgroundColor: {value: '#f0f', duration: 1000},
  translateY: [
    {value: 300, duration: 500},
    {value: 0, duration: 500},
  ],
  translateX: [
    {value: 300, duration: 500},
    {value: 0, duration: 500},
  ],
  rotate: {
    value: '1turn',
    duration: 1000,
  },
  easing: 'cubicBezier(.5, .05, .1, .3)',
  delay: function(el, i, l){
    return i * 1000
  },
  loop: true
});
