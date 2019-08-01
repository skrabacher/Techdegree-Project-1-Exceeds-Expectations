//  Sarah Krabacher
//  Project 1 - Random Quote Generator - Striving for Exceeds Expectations
//  Date: 2019.01.08
//  Portland Cohort 3
//  Treehouse Full Stack Javascript Apprenticeship




// Code below sets a time interval of 5 seconds (5,000 milleseconds) which will call the newQuote function every 5 seconds.
//I referenced the MDN link below for guidance on how to write the fucntion 
    //https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
var intervalID = window.setInterval(newQuote, 5000);

function newQuote() {

    // Array below contains objects that have the following properties: quote, source of the quote, citation for the quote, year for the quote, and a genre tag for the quote.
    // Every object has a quote and source property. But the other properties vary depending on the object. 
    // Per the instructions, I initially used console.log() to log the array to the console and ensure I had correct syntax/formatting for my array.
    // After I was confident that my array was functional, I removed the console.log() part to make my code a little more succinct.
    var quotes = [
      {
          quote: 'Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.',
          source: 'Marcus Aurelius',
          tag: 'philosophy'
        },
      {
          quote: "Never say that you can't do something, or that something seems impossible, or that something can't be done, no matter how discouraging or harrowing it may be; human beings are limited only by what we allow ourselves to be limited by: our own minds. We are each the masters of our own reality; when we become self-aware to this: absolutely anything in the world is possible.",
          source: 'Mike Norton', 
          citation: 'Fighting For Redemption',
          year: '2014',
          tag: 'psychology'
        },
      {
          quote: "I am an expression of the divine, just like a peach is, just like a fish is. I have a right to be this way... I can't apologize for that, nor can I change it, nor do I want to... We will never have to be other than who we are in order to be successful... We realize that we are as ourselves unlimited and our experiences valid. It is for the rest of the world to recognize this, if they choose.",
          source: 'Alice Walker', 
          citation: 'The Color Purple',
          year: '1982',
          tag: 'religion'
        },
      {
          quote: 'When you blame others, you give away your power.',
          source: 'Cate Huisman',
          tag: 'psychology'
        },
      {
          quote: 'If it sounds good, it is good.',
          source: 'Duke Ellington',
          tag: 'music'
        },
      {
          quote: "This process of the good life is not, I am convinced, a life for the faint-hearted. It involves the stretching and growing of becoming more and more of one's potentialities. It involves the courage to be. It means launching oneself fully into the stream of life." ,
          source: 'Carl Rogers',
          citation: 'On Becoming a Person',
          year: '1961',
          tag: 'psychology'
        },
      {
          quote: "Everything can be taken from a person but one thing: the last of the human freedoms -- to choose one's attitude in any given set of circumstances, to choose one's own way.",
          source: 'Viktor Frankl',
          citation: "Man's Search for Meaning",
          year: '1946',
          tag: 'psychology'
        },
      {
          quote: 'You’re imperfect and you’re wired for struggle but you are worthy of love and belonging.',
          source: 'Brené Brown',
          citation: 'The Power of Vulnerability - TEDxHouston',
          year: '2010',
          tag: 'psychology'
        },
      {
          quote: 'I have no mercy or compassion in me for a society that will crush people, and then penalize them for not being able to stand up under the weight.',
          source: 'Malcolm X',
          citation: 'The Autobiography of Malcolm X',
          year: '1965',
          tag: 'sociology'
        },
      {
          quote: "If you have come to help me, you are wasting our time. But if you have come because your liberation is bound up with mine, then let us work together.",
          source: 'Aboriginal activists group',
          citation: 'Queensland',
          year: "1970s'",
          tag: 'sociology'
        },
      {
          quote: 'When we choose to love we choose to move against fear—against alienation and separation. The choice to love is a choice to connect—to find ourselves in the other.',
          source: 'bell hooks',
          citation: 'All About Love',
          year: "2000",
          tag: 'love'
        },
      {
          quote: 'It is not difference that immobilizes us, but silence. And there are so many silences to be broken.',
          source: 'Audre Lorde',
          citation: 'The Cancer Journals',
          year: "1980",
          tag: 'sociology'
        },
      {
        quote: 'Coding is a humbling trade. The better you get at coding, the dumber you realize you are.',
        source: 'Matt Krabacher',
        year: "2019",
        tag: 'humor'
        },
    ];



      // Function below generates random integer no greater than the length of the Quotes Array. 
      //(I used quotes.length instead of a specific number. This way I can add or remove objects from the array without having to modfy my getRandomQuote function.)
      // It then returns the object in the Quotes Array that corresponds with the randomly generated number.

    function getRandomQuote() {
      var randomNumber = Math.floor( Math.random() * quotes.length ); 
      return (quotes[randomNumber]); 
    };

    //Function below generates a random background color each time a quote is generated on the page. 
    //I used the instructional link below to help guide me in creating this function
    //For my own clarity, I changed many of the variable names to be more specific.
    //In order to ensure that the backgroung colors were dark enough to contrast with the white quote text, I lowered the colorInteger range to 156.
    //https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php
    //*** function DOES NOT change the button color to match the background color.
    //*** If I have time, I would really like to get the button color matching.
    function getRandomBackgroundColor() {
      var colorInteger1 = Math.floor(Math.random() * 156);
      var colorInteger2 = Math.floor(Math.random() * 156);
      var colorInteger3 = Math.floor(Math.random() * 156);
      var backgroundColor = "rgb(" + colorInteger1 + "," + colorInteger2 + "," + colorInteger3 + ")";
    console.log(backgroundColor);

      document.body.style.background = backgroundColor;
    }

    //Called getRandomBackgroundColor function here so that the program randomly generates a color on it's first run, as opposed to the default green color on line 89 of the syles.css file.
    getRandomBackgroundColor();

    // Function below calls the getRandomQuote function so that I have one random object from my array. 
    // It then formats each of the properties in the selected object.
    // Not all of the objects in my array have every property.
    // I used If Else statements to make the formatting conditional upon whether or not a property was present in the selected object.

    function printQuote() {
      getRandomBackgroundColor();
      var randomQuotesArrayObject = getRandomQuote();
      var htmlString = '<p class="quote">' + randomQuotesArrayObject.quote + '</p>'
        htmlString+= '<p class="source">' + randomQuotesArrayObject.source
        if (randomQuotesArrayObject.citation) { 
          htmlString+= '<span class="citation">' + randomQuotesArrayObject.citation + '</span>'; 
        } else {

        }
        if (randomQuotesArrayObject.year) { 
        htmlString+= '<span class="year">' + randomQuotesArrayObject.year + '</span>';
        } else {
          
        }
        if (randomQuotesArrayObject.tag) { 
          htmlString+= '<span class="tag">' + randomQuotesArrayObject.tag + '</span>' ; // added formatting for this tag class to the styles.css file on line 74
          } else {
          
          }
        '</p>';
      document.getElementById('quote-box').innerHTML = htmlString;
    };

    //Called printQuote function here so that the program randomly generates a quote as it is first run, as opposed to the default Patrick McKenzie quote written into the HTML file.
    printQuote();


    //this line of code allows the event listener to trigger when the "Show another quote" button is clicked.
    //the event listener then runs the printQuote function that I wrote above.
    //I did not write the line of code below. It was provided by TeamTreehouse as part of the file template for this project.
    document.getElementById('loadQuote').addEventListener("click", printQuote, false);
    
} //closing curly brace for the newQuote function started on line 15

  //EXCEEDS EXPECTATIONS CRITERIA LISTED BELOW
      // *DONE* Add more properties to the quote object
        // For example, a tags property could include a list of "tags" like "humor", "business", or "politics" to categorize each quote.
        // Use the new properties to conditionally add to the HTML string that gets printed to the screen.
      // *DONE* Random background color *styles.css line 89 is where the bakcground color is stipulated. Line 94 is where the botton hover color change is located.
        // When the quote changes, randomly change the background color of the page.
      // *DONE* Auto-refresh the quote
        // After a set amount of time, like 20 to 30 seconds, print a new quote to the page. A timing method like setInterval() is helpful here. Avoid using the setTimeout function for this step. See the links in the “Additional Resources” section.
