// let btns=document.querySelectorAll('.btn');
let input=document.querySelector('#display');
// btns.forEach((button)=>{
//     button.addEventListener('click',()=>{
//         input.value+=this.innerHtml;
//     })
// })


let append=value=>{
    input.value+=value;
}

fraction=()=>{
    let answer=1/(input.value);
    input.value=answer;

    let item=document.createElement('li');
    document.getElementById('items').append(item);
    item.innerHTML="1/("+input.value+") = "+answer;
}

let sqr=()=>{
    let answer=input.value**2;
    input.value=answer;

    let item=document.createElement('li');
    document.getElementById('items').append(item);
    item.innerHTML="("+input.value+") ^2 = "+answer;
}

let sqrt=()=>{
    let answer=input.value**(1/2);
    input.value=answer;

    let item=document.createElement('li');
    document.getElementById('items').append(item);
    item.innerHTML="√("+input.value+") = "+answer;
}

let calculate=()=>{
    let exp=input.value;
    let result=eval(input.value);
    input.value=result;


    
    let item=document.createElement('li');
    document.getElementById('items').append(item);
    item.innerHTML=exp+" = "+result;
}


del=()=>{
    input.value=input.value.slice(0,-1);
}

let clear=()=>{
    document.getElementById('display').value="";
}


let clearHistory=()=>{
    let list=document.getElementById('items');
    list.innerHTML="";
}