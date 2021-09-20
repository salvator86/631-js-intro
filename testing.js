// alert('Hello!');

// const message = 'Hello!';
// aler(message);

// let counter = 0;
// counter = counter + 1;
// counter = counter + 1;
// counter += 1;
// counter++;
// alert(counter);

const userAge = parseFloat(prompt('Enter your age'));
alert('Your entered ' + userAge);

const nextAge = add(userAge, 1);
alert('Your next age ' + nextAge);

if (userAge >= 18) { 
    alert('You are adult');
} else {
    alert('You are underaged');
}

function add(a, b) {
    const result = a + b;
    return result;
}
