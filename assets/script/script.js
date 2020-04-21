  let prevScrollpos = window.pageYOffset
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset
      if (prevScrollpos > currentScrollPos || document.getElementById("wrapper").clientTop === "0") {
    document.getElementById("myNav").style.top = "0"
      } else {
        document.getElementById("myNav").style.top = '-' + document.getElementById("myNav").clientHeight + 'px'
      }
      prevScrollpos = currentScrollPos
    }
