console.log('Hello World, I am script.js!');

const books = [
    {title: 1984, author: "George Orwell"},
    {title: "In Search of Lost Time", author: "Marcel Proust"},
    {title: "Don Quixote", author: "Miguel de Cervantes"},
    {title: "Moby Dick", author: "Herman Melville"}
   ]

function printBooksWithoutOrwell(books) {

    const booksWithoutOrwell = books.filter(book => book.author !== "George Orwell");
  
    console.log("Books without George Orwell:");
    // using console.table for a formatted output
    console.table(booksWithoutOrwell);  
}

// update the color of your text to blue
function changeColor() {
    document.getElementById("content").style.color = "blue";
}

// update the inner HTML content of the original Hello World to Bye-Bye World!
function updateContent() {
    document.getElementById("content").textContent = "Bye-Bye World";
}

let p1, p2;

function setup() {
  createCanvas(500, 500);
  p1 = new Particle(300, 300);
  p2 = new Box(300, 300);
  p3 = new Circle(300, 300);
  p4 = new Triangle(50, 20);
}

// create more moves
function draw() {
  background(0);
  p1.update();
  p1.show();
  p2.update();
  p2.show();
  p3.update();
  p3.show();
  p4.update();
  p4.show();
}
  