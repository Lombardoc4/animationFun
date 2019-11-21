var div = document.createElement("div");
div.setAttribute("class", "circles circle1");
var body = document.getElementsByTagName("body")[0];
body.appendChild(div);

for (var i = 1; i <= 5; i++) {
  var div = document.createElement("div");
  div.setAttribute("class", "circles circle2");
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(div);
}
for (var i = 1; i <= 11; i++) {
  var div = document.createElement("div");
  div.setAttribute("class", "circles circle3");
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(div);
}

var circles3 = anime({
  targets: ".circle3",
  loop: true,
  delay: function(el, i) {
    return i * 100;
  },
  easing: "easeInOutQuad",
  translateY: function(el, i) {
    return i * -20;
  },
  translateX: function(el, i) {
    return i * 10;
  },
  direction: "alternate"
});

var circles2 = anime({
  targets: ".circle2",
  loop: true,
  delay: function(el, i) {
    return i * 5;
  },
  easing: "steps(10)",
  translateY: "100px",
  translateX: "200px",
  rotate: { value: "1turn", duration: 1000 },
  direction: "alternate"
});

var circle1 = anime({
  targets: ".circle1",
  loop: true,
  easing: "linear",
  easing: "linear",
  rotate: { value: "10turn", duration: 30000 },
  direction: "alternate",
  borderRadius: [{ value: "49%", duration: 1000 }],
  scale: [{ value: 1.5, duration: 1000 }]
});
