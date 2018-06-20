
anime({
  targets: 'img',
  translateX: 0,
  scale: 1,
  rotate: '1turn',
  duration: 3500
});

anime({
    targets: '.text',
    translateX: [
        { value: 1000, duration: 1200 },
        { value: 0, duration: 1500 }
      ],
    opacity: [
        { value: [0, 1], duration: 2000, easing: 'easeOutQuad' }
          ],
    delay: 800
  });