getFromStorage();


function getFromStorage(){
    debugger;
    let issues = JSON.parse(localStorage.getItem("issues"));
    let issueList = document.getElementById("issueList");

    issueList.innerHTML = "";
    for(let i=0; i < issues.length; i++){
        let id = issues[i].id;
        let description = issues[i].description;
        let severity = issues[i].severity;
        let estimatedCompletion = issues[i].estimatedCompletion;
        let status = issues[i].status;

        

        issueList.innerHTML += '<div class="well">'+'<h6>Issue ID: ' + id + '</h6>'+
        '<p><span class="label label-info">' + status + '</span></p>'+
        '<h3>' + description + '</h3>'+
        '<p>' + severity + ' ' + estimatedCompletion + '</p>'+
        '<a href="#" class="btn" onclick="close(\''+id+'\')">Close</a> '+
        '<a href="#" class="btn" onclick="remove(\''+id+'\')">Delete</a>'+
        '</div>';
    }
}

document.getElementById("issueInput").addEventListener("submit", saveToStorage)

function saveToStorage(e){
    debugger;
    let id = Date.now();
    let description = document.getElementById("issueDesc").value;
    let severity = document.getElementById("issueSeverity").value;
    let estimatedCompletion = document.getElementById("estimatedCompletion").value;
    let status = "Open";

    let issue = {
        id,
        description,
        severity,
        estimatedCompletion,
        status
    }

    if (localStorage.getItem("issues") === null){
        let issues = [];
        issues.push(issue);
        localStorage.setItem("issues", JSON.stringify(issues));
    }
    else{
        let issues = JSON.parse(localStorage.getItem("issues"));
        issues.push(issue);
        localStorage.setItem("issues", JSON.stringify(issues));
    }

    document.getElementById("issueInput").reset();

    getFromStorage();
    e.preventDefault(); 
}

function close(id){
    debugger;
    let issues = JSON.parse(localStorage.getItem("issues"));

    for (let i=0; i<issues.length; i++){
        if(issues[i].id === id){
            issues[i].status = "Closed";
        }
    }
    localStorage.setItem('issues', JSON.stringify(issues));
    getFromStorage();
}

function remove(id) {
    debugger;
    let issues = JSON.parse(localStorage.getItem('issues'));
    
    for(let i = 0; i < issues.length; i++) {
      if (issues[i].id == id) {
        issues.splice(i, 1);
      }
    }
    
    localStorage.setItem('issues', JSON.stringify(issues));
    
    getFromStorage();
  }



