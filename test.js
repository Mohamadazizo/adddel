var spanns = document.querySelectorAll('.spanns span'),
    input = document.getElementById("input"),
    results = document.getElementById('results');
spanns.forEach(span => {
    span.addEventListener("click" , (e)=>{
        if( e.target.classList.contains("chack")){
            checkItem();
        }
        if( e.target.classList.contains("delete")){
            deleteItem();
        }
        if( e.target.classList.contains("show")){
            showItem();
        }
        if( e.target.classList.contains("add")){
            addItem();
        }
    })
});
function checkInput(){
    if ( input.value === ""){
        results.innerHTML = "none"
    }
}
function checkItem( )
{
    if( input.value !== ""){
        if( localStorage.getItem(input.value)){
            results.innerHTML = `the value for input is <span>${input.value}</span>`
        }else{
            results.innerHTML = `the value for input is not found <span>${input.value}</span>`
        }
    }
    else{
        checkInput();
    }
}
function deleteItem( )
{
    if(input.value !== ""){
        if(localStorage.getItem(input.value)){
            localStorage.removeItem(input.value);
            results.innerHTML = `the input value <span>${input.value}</span> has been deleted form local storage `
        }else{
            results.innerHTML = `the value for input is not found <span>${input.value}</span>`
        }
    }else{
        checkItem()
    }
}
function showItem( )
{
    if( localStorage.length){
        results.innerHTML = '';
        for( var [key,value] of Object.entries(localStorage)){
            results.innerHTML += `<span>${key} </span>`
        }
    }else{
        results.innerHTML = 'local storage is empty'
    }
}
function addItem( )
{
    if( input.value !== ""){
        localStorage.setItem(input.value , 'test')
            results.innerHTML = `the input value <span>${input.value}</span> has been added to local storage `
    }else{
        checkItem()
    }
}