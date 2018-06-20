
anime({
  targets: 'img',
  translateX: 0,
  scale: 1,
  rotate: '1turn',
  duration: 3500
});

anime({
    targets: '.text',
    opacity: [
        { value: [0, 1], duration: 2000, easing: 'easeOutQuad' }
          ],
    delay: 2500
  });