const main = document.querySelector('main');
const addNote = document.querySelector('#addNote');
const saver = document.querySelector('#saver');

addNote.addEventListener('click',()=>{
    addNoteMain('');
});

function saveNotes(){
    let allnotes = document.querySelectorAll('main div textarea');
    let notes = [];
    allnotes.forEach(note=>{
        notes.push(note.value);
    })
    console.log(notes);
    saver.classList.add('blink');
    localStorage.setItem('mainHtml',JSON.stringify(notes));
    setTimeout(()=>{
        saver.classList.remove('blink');
    },2000)
}

function loadData(){
    let storedData = localStorage.getItem('mainHtml');
    let notes = JSON.parse(storedData);

    notes.forEach(note=>{
        addNoteMain(note);
    })

    if(notes.length==0){
        addNoteMain('');
    }
}

function addNoteMain(message){

    let odiv = document.createElement('div');
    odiv.classList.add('note');

    odiv.innerHTML = `
        <div class="about">
            <h3>NOTE</h3>
            <h2><i class="ri-close-line"></i></h2>
        </div>
        <textarea>${message}</textarea>`;

    odiv.querySelector('.about h2 i').addEventListener('click', () => {
        main.removeChild(odiv);
        //save note after deleting a note
        saveNotes();
    });


    odiv.querySelector('textarea').addEventListener('input',()=>{
        //save note after text changed
        saveNotes();
    })
    main.appendChild(odiv);
    odiv.scrollIntoView({behavior:"smooth"});
}

//load preexisting text if any exist
if (localStorage.getItem('mainHtml') == null){
    addNoteMain('');
}
else{
    loadData();
}

