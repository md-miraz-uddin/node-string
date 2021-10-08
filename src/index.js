let haystack = document.querySelector('#haystack');
let needle = document.querySelector('#needle');
let result = document.querySelector('#result');

needle.addEventListener('keypress', function(){
    let str = haystack.value;
    let key = needle.value;
    let match = str.indexOf(key);
    
    if(match === -1){
        result.innerHTML = `The value ${key} was not found`;
    }else{
        result.innerHTML = `The value ${key} was found at ${match} no. location`;
    }
});