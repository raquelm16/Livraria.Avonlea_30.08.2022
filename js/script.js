

function search_cards() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('card');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="cards-item";                 
        }
    }
}


document.getElementById('sendmail').addEventListener('click', function(event){
  event.preventDefault();
    document.location.href = 'mailto:raquel_coelho@estudante.sesisenai.org.br'
})

