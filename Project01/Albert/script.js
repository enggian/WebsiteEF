const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const infoText = document.getElementById('info-text');
const infoImage = document.getElementById('info-image');


var img = new Image();
img.src = 'Blackhole1.png';
img.width = 10;
img.height = 10;



// Bälle generieren
const balls = [
  { x: 165, y: 95, r: 20, color: 'red', info: 'Albert Einstein wurde am 14. März 1879 in Ulm, Deutschland, geboren. Bereits als Kind zeigte er eine bemerkenswerte Neugierde und ein außergewöhnliches Interesse an Mathematik, Naturwissenschaften und der Welt um ihn herum. Obwohl er in der Schule nicht immer den Erwartungen entsprach und als rebellisch galt, war seine intellektuelle Begabung offensichtlich. Im Alter von fünf Jahren zog die Familie Einstein nach München, wo Albert seine Grundschulbildung erhielt. Dort entwickelte er sich zu einem eigenständigen Lerner, der seine Zeit lieber mit dem Studium von Büchern über Mathematik und Physik verbrachte als mit den vorgeschriebenen Lehrinhalten. Schon früh zeigte er eine tiefe Faszination für abstrakte mathematische Konzepte. Im Alter von zehn Jahren bekam Einstein Geigenunterricht, was sein musikalisches Talent weckte und eine lebenslange Liebe zur Musik entfachte. Gleichzeitig vertiefte er sein Verständnis für mathematische Prinzipien und begann, sich mit komplexen Theorien auseinanderzusetzen.Im Jahr 1889 zog die Familie Einstein nach Italien, während Albert in München blieb, um seine schulische Ausbildung fortzusetzen. Dort entwickelte er eine zunehmende Unzufriedenheit mit dem traditionellen Schulsystem und brach schließlich im Alter von 15 Jahren die Schule vorzeitig ab. Er schloss sich seiner Familie in Italien an und setzte seine Bildung eigenständig fort, indem er Bücher über Mathematik und Physik studierte.1894 zog die Familie Einstein erneut um, diesmal nach Zürich, Schweiz. Im darauf folgenden Jahr schrieb sich Albert am renommierten Polytechnikum, der heutigen ETH Zürich, ein. Obwohl er zu diesem Zeitpunkt erst 16 Jahre alt war, zeigte er <br> eine außergewöhnliche akademische <br> Begabung und ein tiefes Verständnis für <br> komplexe mathematische und physikalische <br> Konzepte. Sein Studium legte den <br> Grundstein für seine zukünftigen <br> wegweisenden Arbeiten in der <br> theoretischen Physik.  ', image: 'AlbertJung.jpg' },
  { x: 55, y: 615, r: 20, color: 'lightcoral', info: 'Im Jahr 1905 veröffentlichte der junge Albert Einstein im Alter von 26 Jahren fünf wegweisende wissenschaftliche Werke, die die Welt der Physik nachhaltig prägten. Am 17. März veröffentlichte er eine bahnbrechende Arbeit über den faszinierenden photoelektrischen Effekt, in der er einen kühnen und erhellenden heuristischen Ansatz zur Erzeugung und Transformation von Licht präsentierte. Am 30. April reichte er seine Dissertation über eine neue Bestimmung der Moleküldimensionen ein, in der er akribisch die Größe von Zuckermolekülen in Lösung berechnete und dadurch einen herausragenden Wert für die Avogadro-Konstante ableitete. Diese brillante Forschungsarbeit festigte die damals noch umstrittene Atomhypothese und erregte das Interesse angesehener Physiker wie Wilhelm Ostwald und Ernst Mach. Im Mai des gleichen Jahres veröffentlichte Einstein eine weitere bemerkenswerte Studie über die faszinierende brownsche Molekularbewegung. In dieser wegweisenden Arbeit erläuterte er anschaulich die Bewegung winziger Teilchen, die in ruhenden Flüssigkeiten schweben, basierend auf den Prinzipien der molekularkinetischen Theorie der Wärme. Durch seine eindrucksvollen Untersuchungen unterstützte er nachdrücklich die atomistische Sichtweise und festigte das Vertrauen in die Existenz von Atomen und Molekülen. Am 30. Juni reichte Einstein eine Abhandlung zur Elektrodynamik bewegter Körper ein, gefolgt von einem ergänzenden Beitrag, in dem er die bahnbrechende Äquivalenz von Masse und Energie formuliert. In diesen wegweisenden Arbeiten präsentierte Einstein mit beeindruckender Genialität die <br> legendäre Formel E = mc², die besagt, dass <br> Energie proportional zur Masse und dem <br> Quadrat der Lichtgeschwindigkeit ist. Diese <br> epochale Gleichung, die Energie und Materie <br> auf einzigartige Weise verbindet, revolutionierte <br> unser Verständnis der Physik und hat bis heute <br> weitreichende Auswirkungen. Zusammen bilden <br> diese fünf herausragenden Werke das <br> Fundament für die spezielle Relativitätstheorie.', image: 'image1.jpg' },
  { x: 665, y: 215, r: 20, color: 'green', info: 'Einstein wurde ab 1910 vermehrt als potenzieller Kandidat für den Nobelpreis gehandelt. Besonders seit 1919, als seine Vorhersage der Lichtablenkung durch Gravitation erfolgreich bestätigt wurde, stieg sein Ansehen weiter. Jedoch gab es im Nobelpreiskomitee hartnäckigen Widerstand, was dazu führte, dass der Preis für das Jahr 1921 erst ein Jahr später zusammen mit dem Preis für 1922 verliehen wurde. Viele Mitglieder des Komitees bevorzugten die Experimentalphysik gegenüber der theoretischen Physik und zweifelten die spekulativen theoretischen Entwicklungen zur Quantennatur des Lichts und den Relativitätstheorien an. Obwohl Einsteins Gesetz des photoelektrischen Effekts mittlerweile durch Messungen bestätigt war, wurden die Beobachtungen von Arthur Stanley Eddington im Jahr 1919, die eine von der Allgemeinen Relativitätstheorie vorhergesagte Lichtablenkung nahe der Sonne beschrieben, aufgrund unzureichender Messgenauigkeit weiterhin angezweifelt. Insbesondere Allvar Gullstrand, der angeblich Fehler in Einsteins Theorien entdeckt haben wollte, verhinderte 1921 trotz internationaler Unterstützung Einsteins Nominierung.Letztendlich erhielt Einstein den Nobelpreis für Physik, der für das Jahr 1921 bestimmt war, erst ein Jahr später. Allerdings wurde er nicht für eine seiner Relativitätstheorien oder die Lichtquantenhypothese, mit der er das Gesetz des photoelektrischen Effekts formuliert hatte, ausgezeichnet, sondern lediglich für die Entdeckung dieses Gesetzes. In seiner Nobelpreisrede wurde ihm auferlegt, sich nicht zur Relativitätstheorie zu äußern. Aufgrund eines Aufenthalts in Japan konnte Einstein nicht an der offiziellen Preisverleihung im Dezember 1922 <br> teilnehmen. Stattdessen nahm er den Preis am <br> 11. Juli 1923 bei der 17. Nordischen <br> Naturforscherversammlung in Göteborg <br> entgegen.', image: 'Nobel.jpg' },
  { x: 235, y: 315, r: 20, color: 'blue', info: 'Black hole overlapped ball 4', image: 'path/to/image4.jpg' },
  { x: 515, y: 65, r: 20, color: 'blueviolet', info: 'Black hole overlapped ball 5', image: 'path/to/image5.jpg' },
  { x: 565, y: 615, r: 20, color: 'orange', info: 'Black hole overlapped ball 6', image: 'path/to/image6.jpg' },
  { x: 415, y: 415, r: 20, color: 'brown', info: 'Black hole overlapped ball 7', image: 'path/to/image7.jpg' },
  { x: 1, y: 790, r: 20, color: 'white', info: 'easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 easteregg 😎👍 ', image: 'easteregg.png' }
];

// Schwarzes Loch machen
const blackHole = { 
  x: 315, 
  y: 215, 
  r: 35, 
  color: 'black' 
};

// Bälle zeichnen
function drawBalls() {
  balls.forEach(ball => {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
    ctx.fillStyle = ball.color;
    ctx.fill();
  });
}


function drawBlackImage() {
  ctx.beginPath();
  ctx.drawImage(img, blackHole.x, blackHole.y, blackHole.r, blackHole.r);
  ctx.fill();



}

// Überprüfen der Überlappung
function checkOverlap() {
  let overlap = false;
  balls.forEach(ball => {
    const dx = 15 + blackHole.x - ball.x;
    const dy = 15 + blackHole.y - ball.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < 10 + ball.r) {
      infoText.innerHTML = ball.info;
      infoImage.src = ball.image;
      overlap = true;

      
    }
  });
  if (!overlap && infoText.innerText !== '') {
    infoText.innerText = '';
    infoImage.src = '';
  }
}

// Schwarzes Loch mit Pfeiltasten bewegen
blackHole.x = 20
blackHole.y = 20
function moveBlackHole(e) {
  if(e.keyCode === 37) {
    blackHole.x -= 10;
  } else if (e.keyCode === 38) {
    blackHole.y -= 10;
  } else if (e.keyCode === 39) {
    blackHole.x += 10;
  } else if (e.keyCode === 40) {
    blackHole.y += 10;
  }
  
  draw();
}

// Zeichnen der Canvas-Elemente
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBalls();
  drawBlackImage();
  //drawBlackHole();
  checkOverlap();
}

window.addEventListener('keydown', moveBlackHole);

draw();
