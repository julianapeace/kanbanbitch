$(document).ready(function() {
  $(".loader-container").fadeOut("slow")
});

new TypeIt('#typeit', {
   strings: ["Agile-Driven", "Bitchiness"],
   speed: 75,
   breakLines: false,
   autoStart: true,
   loop: true
});
