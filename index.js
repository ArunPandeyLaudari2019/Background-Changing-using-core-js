function bgcolor(color){
    document.body.style.backgroundColor=color;
    let txt=document.getElementsByClassName('text');

    if(color == 'white'){
        for(let i of txt){
            i.style.color='black';
        }
    }
    else if (color == 'yellow') {
        for(let i of txt){
            i.style.color='red';
        }
    }else{
        for(let i of txt){
            i.style.color='white';
        }

    }
}
