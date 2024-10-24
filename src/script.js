let clickHandler = () => {
    let binary = Number(document.querySelector('input').value);
    let p = document.getElementById('p');
    let numArray = [];
    let binaryArray = [];

    while(binary > 0){
        numArray.push(binary % 2);
        binary = Math.floor(binary / 2);
    }
    
    while(numArray.length > 0){
        binaryArray.push(numArray[numArray.length - 1]);
        numArray.pop();
    }
    
    p.innerText = binaryArray.join('');
}
