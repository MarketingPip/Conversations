/* function to show a element if last child in view. */
function showIfLastChildInView(element) {
  var lastChild = document.body.lastChild;
  var lastChildRect = lastChild.getBoundingClientRect();
  var lastChildInView = (
    lastChildRect.top >= 0 &&
    lastChildRect.left >= 0 &&
    lastChildRect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    lastChildRect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
  if (lastChildInView) {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }
}
/* example of usage. */
var example = document.createElement('div');
example.innerHTML = 'Example';
example.style.display = 'none';
document.body.appendChild(example);
window.addEventListener('scroll', function() {
  showIfLastChildInView(example);
});
