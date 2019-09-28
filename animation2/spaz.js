var randomMovement = function() {
    return anime.random(-5, 5) + 'rem'
};

var randomSpeed = function() {
  return anime.random(500, 1000) + 'rem'
};

function animation() {
console.log("animation");
    var timelineParameters = anime.timeline({
        loop: false
    });

    timelineParameters
    .add({
        targets: ['#bubble1', '#bubble2', '#bubble3', '#bubble4'],
        translateX: 0,
        translateY: 0,
        duration: 1000,
        })
    .add({
        targets: '#bubble1',
        translateX: [ { value: randomMovement  }, { value: randomMovement }, { value: randomMovement } ],
        translateY: [ { value: -200  }, { value: -400 }, { value: -600 } ],
        opacity: [ {value: 0.5 }, { value: 0 }],
        easing: 'linear',
        duration: randomSpeed
    })
    .add({
        targets: '#bubble2',
        translateX: [ { value: randomMovement }, { value: randomMovement }, { value: randomMovement } ],
        translateY: [ { value: -200 }, { value: -400 }, { value: -600 } ],
        opacity: [ { value: 0.8 }, { value: 0 }],
        easing: 'linear',
        duration: randomSpeed,
        offset: 100
    })
    .add({
        targets: '#bubble3',
        translateX: [ { value: randomMovement }, { value: randomMovement }, { value: randomMovement } ],
        translateY: [ { value: -200 }, { value: -400 }, { value: -600 } ],
        opacity: [ { value: 0.3 }, { value: 0 }],
        easing: 'linear',
        duration: randomSpeed,
        offset: 0
    })
    .add({
        targets: '#bubble4',
        translateX: [ { value: randomMovement }, { value: randomMovement }, { value: randomMovement } ],
        translateY: [ { value: -200 }, { value: -400 }, { value: -600 } ],
        opacity: [ { value: 0.8 }, { value: 0 }],
        easing: 'linear',
        duration: randomSpeed,
        offset: 300
    });
    timelineParameters.complete = function() {animation();};
}

animation();
