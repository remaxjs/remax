export default function trace(...agrs) {
  if (window.gtag) {
    window.gtag(...agrs);
  }
}
