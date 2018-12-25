export function resetFont () {
	// font 适配
  var rem,window_w;
  function resetREM(){
      window_w = window.innerWidth;
      rem = window_w / 750 * 100;
      document.getElementsByTagName('html')[0].style.fontSize = rem + 'px';
  }
  resetREM();
  window.onresize = resetREM;
}
