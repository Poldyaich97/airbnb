export default function getCardsNumber([a, b, c]) {
  if (window.innerWidth > 1024) {
    return a;
  } else if (window.innerWidth > 750) {
    return b;
  } else {
    return c;
  }
}
