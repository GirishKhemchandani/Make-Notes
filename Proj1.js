console.log("Hi i am...");



addBtn.addEventListener("click", function(e) {
    
    let data;
    let notesObj=[];
    let addBtn = document.querySelector('#addBtn');
    let textadded;
    
    // This data localstorage part is written to add data again and again in notesObj
    data=localStorage.getItem('Data');

    if(data==null)
        notesObj=[];
    else
        notesObj=JSON.parse(data);
    //

    // This will get text which is in box
    textadded=document.getElementById('addTxt')
    //

    //now the textadded ka value is pushed in notesObj
    notesObj.push(textadded.value)

    //now the local storage is modified again using nodesObj
    localStorage.setItem('Data', JSON.stringify(notesObj));

    //this will clear data in box
    textadded.value= "";

    show();
   
});

show();
    

function show() {
    let data=localStorage.getItem('Data');

    if(data==null)
        notesObj=[];
    else
        notesObj=JSON.parse(data);

    //this will attack notes section in which we have to print cards
    let showNotes=document.getElementById("notes");

    let html="";
    
    notesObj.forEach(function(element,index) {
        //here we create cards
        html+= `
        <div class="card" style="width: 18rem;">
            <div class="card-body my-2 mx-2">
                <h5 class="card-title">My Note ${index + 1}</h5>
                <p class="card-text"></p>
                <div class="form-group">
                    <textarea class="form-control" id="addTxt" rows="3">${element}</textarea>
                     
                </div>
                
                <button class="btn btn-primary" id="${index}" onclick="Dilip(this.id)">Delete Note</button>
            </div>
        </div>
                 `
        //most imp thing here is onclick..
    });
    //card are added
    showNotes.innerHTML = html;

}

function Dilip (index) {
    let data=localStorage.getItem('Data');

    if(data==null)
        notesObj=[];
    else
        notesObj=JSON.parse(data);

    notesObj.splice(index,1);

    localStorage.setItem('Data', JSON.stringify(notesObj));
    //we have to call show again so it will make all the cards again with the current data in local storage
    show();

}

