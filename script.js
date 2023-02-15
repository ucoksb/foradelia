var elem = document.querySelector('.carousel');
var flkty = new Flickity(elem, {
  // options
  cellalign: 'right',
  pageDots: false,
  groupCells: '20%',
  selectedAttraction: 0.03,
  friction: 0.15
});
var flkty = new Flickity('.carousel', {
  // options
});


const carouselCells = document.querySelectorAll(".carousel-cell");

const isiContent = [
  "Dari Gunjek untuk Adelia\n😎😎",
  "I liked ur eyes",
  "I like the ways u look at my eyes when we hv a conversation",
  "I appreciate ur kindness",
  "I admire ur intelligence",
  "I'm so glad we've meet that days",
  "I enjoy talking with you",
  "You inspire me to be a better person",
  "I trust and respect you",
  "You have a beautiful smile",
  "I love ur unique personality",
  "You make me happy",
  "I feel safe and secure with you",
  "You are my favorite person",
  "I appreciate ur support",
  "You make every day brighter",
  "You are an amazing listener",
  "I want u to know that ur my safe place",
  "You bring out the best in me",
  "I am lucky to knonw u",
  "You have a caring heart",
  "I love ur sense of music",
  "You are everything",
  "I appreciate for ur help",
  "You are simply amazing",
  "I can't imagine my life without you",
  "For all the things Happend in ur life, i wish u get happier 😎"
];

for (let i = 0; i < carouselCells.length; i++) {
  const isiDiv = carouselCells[i].querySelector(".isi");
  isiDiv.textContent = isiContent[i];
}
