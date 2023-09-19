let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
  cursor: "<span style='color: #ff0094;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #ff0094;">Desarrollo sitios web y proyectos de investigación.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
