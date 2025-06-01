document.querySelectorAll('.button').forEach( (btn) => {
    btn.onclick = () => { //alert('Wcisnięto przyscik') 
        fetch(`./html/${btn.dataset.var}`)
        .then(r => {
            r.text().then( s => {
                document.querySelector("#center").innerHTML = s
               // console.log(s)
            })
        }) 
        .catch( res => {
            console.log("Nie załadowano strony z powodu ", res)
        })
    
    }
    //console.log("Wykonałam się!", btn)
})