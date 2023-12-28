// Greet user

const userName = 'Marjolein';

userName ? console.log(`Hello, ${userName}!`) : console.log(`Hello!`);

// Display user question

const userQuestion = 'Will I be rich?';

userName ? console.log(`${userName} asked: ${userQuestion}`) : console.log(`User asked: ${userQuestion}`);

// Generate random number between 0 and 7

const randomNumber = Math.floor(Math.random() * 8);

// Initialize eightBall

let eightBall = '';

// Assign value to eightBall

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}

// Display eightBall prediction

console.log(eightBall);