
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["C/C++", "Python", "Core Java", "R", "Frameworks"],
        datasets: [{
            label: 'Self Rating',
            data: [14, 12, 9, 6, 8],
              backgroundColor: [
                  'rgb(47, 106, 49)',
                  'rgb(62, 142, 65)',
                  'rgb(78, 177, 81)',
                  'rgb(149, 208, 151)',
                  'rgb(113, 193, 116)'
              ],
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});


var ctxs = document.getElementById("myChart2").getContext('2d');
var myCharts = new Chart(ctxs, {
    type: 'doughnut',
    data: {
        labels: ["Machine Learning", "Network Security", "Data Structure & Algorithms", "Application Development", "Research","Blockchain"],
        datasets: [{
            label: '# of Votes',
            data: [30, 13, 20,10,20,7],
            backgroundColor: [
                'rgb(47, 106, 49)',
                'rgb(62, 142, 65)',
                'rgb(78, 177, 81)',
                'rgb(113, 193, 116)',
                'rgb(149, 208, 151)',
                'rgb(184, 224, 185)'
            ],

        }]
    }
});
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
