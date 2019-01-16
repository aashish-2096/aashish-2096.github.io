var ctx = document.getElementById("myChart1").getContext('2d');
var myChart = new Chart(ctx, {
    type:'bar',
    data: {
        labels: ["C/C++", "Python","Core Java"," R " ,"Frameworks"],
        datasets: [{
            label: '# of Votes',
            data: [35,15,20,15,10],
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(153, 102, 255)',
            ],
        }]
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
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(153, 102, 255)',
                'rgba(255, 159, 64)'
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
