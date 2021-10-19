let footerDate = document.getElementById('year')
footerDate.innerText = new Date().getFullYear()
// init scrollSpy 
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#main-nav'
  })