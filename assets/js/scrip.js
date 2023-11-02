const movertxt = document.querySelectorAll(".mover>span");
let flag2 = 0;
window.addEventListener("scroll", (e) => {
  if (flag2 <= 0) {
    flag2 -= 10;
    if (flag2 ==100) {
      flag2 = 0;
    }
  }
  movertxt.forEach((val) => {
   txt(val);
  });

});
const txt = (v) => {
  v.style.transform = `translateX(${flag2}px)`;
};

