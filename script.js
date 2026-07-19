// let btns=document.querySelectorAll('.btn');
let input = document.querySelector('#display');
// btns.forEach((button)=>{
//     button.addEventListener('click',()=>{
//         input.value+=this.innerHtml;
//     })
// })


let append = value => {
    input.value += value;
}



fraction = () => {
    let answer = 1 / (input.value);
    input.value = answer;

    let item = document.createElement('li');
    document.getElementById('items').append(item);
    item.innerHTML = "1/(" + input.value + ") = " + answer;
}



let sqr = () => {
    let answer = input.value ** 2;
    input.value = answer;

    let item = document.createElement('li');
    document.getElementById('items').append(item);
    item.innerHTML = "(" + input.value + ") ^2 = " + answer;
}

let sqrt = () => {
    let answer = input.value ** (1 / 2);
    input.value = answer;

    let item = document.createElement('li');
    document.getElementById('items').append(item);
    item.innerHTML = "√(" + input.value + ") = " + answer;
}



let clear = () => {
    input.value = "";
}

document.getElementById('btn-clear').addEventListener('click', clear);




let calculate = () => {
    // let exp=input.value;
    // let result=eval(input.value);
    // input.value=result;




    try {

        let exp = input.value;

        let result = eval(input.value);

        input.value = result;


        // Adding to history
        let item = document.createElement('li'); {
            document.getElementById('items').append(item);
            item.innerHTML = exp + " = " + result;
        }
    }


    catch {

        input.value = "Error";

    }


}

del = () => {
    input.value = input.value.slice(0, -1);
}


let clearHistory = () => {
    let list = document.getElementById('items');
    list.innerHTML = "";
}






let switchTab = (tabId,button) => {


    let buttons = document.querySelectorAll('.tab');
    buttons.forEach((button) => {
        button.classList.remove('active-tab');
    })


    let contents=document.querySelectorAll('.tab-content');
    contents.forEach((content)=>{
        content.classList.remove('active-content');
        content.classList.add('hidden');
    });

    document.getElementById(tabId).classList.remove('hidden');
    document.getElementById(tabId).classList.add('active-content');
    button.classList.add('active-tab');

}