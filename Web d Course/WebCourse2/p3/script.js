function eventForNav(){
    let radiobutton = document.querySelectorAll('#navmiddle input[type="radio"]');
    let labels = document.querySelectorAll('#navmiddle label');

    radiobutton.forEach(radio => {
        radio.addEventListener('change', function(){
            let forAtt = '';
            
            if(radio.checked){
                forAtt = radio.id;
            }

            //remove all illuminated class
            //and add to the one that is checked
            labels.forEach(label => {
                label.children[0].classList.remove('illuminated');
                if(label.getAttribute('for') == forAtt) label.children[0].classList.add('illuminated');
            });
        });
    });
}

