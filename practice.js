function greet(event) {
    event.preventDefault();

    var name = document.getElementById('nameInput').value;
    var greeting;

    if (name === 'Eric' || name === '埃里克') {
        greeting = '哈哈，知道就是你';
    } else {
        greeting = '不，你不是';
    }

    document.getElementById('greetingText').innerText = greeting;
}
