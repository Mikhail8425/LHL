const checkAir = function (samples, threshold) {
  // Code here!
  let x = 0;
  let y = 0;
  for (let i = 0; i < samples.length; i++) {
    if (samples[i] === 'clean') {
      x += 1;
    } else if (samples[i] === 'dirty') {
      y += 1;
    }
  }
  let z = y/(x+y);

  if (z > threshold) {
    return('Polluted')
  } else {
    return ('Clean')
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))