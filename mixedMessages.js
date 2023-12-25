// CONSTRUCT MESSAGES
const messageGroup1 = [
    'Thanks for your question!', 
    'Shaking... Shaking...',
    'Give me a second...'
];

const messageGroup2 = [
    'It is certain',
    'It is decidely so',
    'Without a doubt',
    'Yes definitely',
    'You may rely on it',
    'As I see it, yes',
    'Most likely',
    'Outlook good',
    'Yes',
    'Signs point to yes',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don\'t count on it',
    'My reply is no',
    'Ny sources say no',
    'Outlook not so good',
    'Very doubtful'
];

// GENERATE RANDOM NUMBERS
let i = Math.floor(Math.random() * messageGroup1.length);
let j = Math.floor(Math.random() * messageGroup2.length);

// OUTPUT MESSAGE
const magic8Ball = yourQuestion => {
    console.log(`You asked \"${yourQuestion}".\n${messageGroup1[i]} ${messageGroup2[j]}!`);
};

// TEST
magic8Ball('Does this code work?');