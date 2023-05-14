function addNewAcField()
{
    let newNode= document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("academicField");
    newNode.classList.add("mt-2");

    let acOb=document.getElementById("ac");
    let acAddButtonOb=document.getElementById("acAddButton");

    acOb.appendChild(newNode, acAddButtonOb);
}

function addNewSkField()
{
    //console.log("add");
    let newNode= document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skillesField");
    newNode.classList.add("mt-2");

    let skOb=document.getElementById("sk");
    let skAddButtonOb=document.getElementById("skAddButton");

    skOb.appendChild(newNode, skAddButtonOb);
}

function addNewHbField()
{
    let newNode= document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("hobbyField");
    newNode.classList.add("mt-2");

    let hbOb=document.getElementById("hb");
    let hbAddButtonOb=document.getElementById("hbAddButton");
    
    hbOb.appendChild(newNode, hbAddButtonOb);

}

function addNewQuField()
{
    //console.log("add");
    let quAddButtonOb;
    let newNode= document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("qualificationField");
    newNode.classList.add("mt-2");

    let quOb=document.getElementById("qu");
    quAddButtonOb=document.getElementById("quAddButton");

    quOb.appendChild(newNode, quAddButtonOb);
}

function generateCV()
{
    //console.log("hey");
    let nameField=document.getElementById("nameField").value;
    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML=nameField;
    document.getElementById("nameT2").innerHTML=nameField;
    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;
    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

    let file=document.getElementById("imgField").files[0];
    let reader=new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);
    reader.onloadend = function()
    {
    document.getElementById("imgT").src=reader.result;
    }

    document.getElementById("liT").innerHTML=document.getElementById("linkedinField").value;
    document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;
    document.getElementById("fbT").innerHTML=document.getElementById("facebookField").value;
    document.getElementById("obT").innerHTML=document.getElementById("obField").value;

    let acs=document.getElementsByClassName("academicField");
    let str="";
    for (let e of acs)
    {
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById("acT").innerHTML=str;

    let sks=document.getElementsByClassName("skillesField");
    let str1="";
    for (let e of sks)
    {
        str1 = str1 + `<li> ${e.value} </li>`;
    }
    document.getElementById("skT").innerHTML=str1;

    let hbs=document.getElementsByClassName("hobbyField");
    let str3="";
    for (let e of hbs)
    {
        str3 = str3 + `<li> ${e.value} </li>`;
    }
    document.getElementById("hbT").innerHTML=str3;

    let qus=document.getElementsByClassName("qualificationField");
    let str4="";
    for (let e of qus)
    {
        str4 = str4 + `<li> ${e.value} </li>`;
    }
    document.getElementById("quT").innerHTML=str4;

    document.getElementById("cv-form").style.display= "none";
    document.getElementById("bd").style.backgroundImage= "none";
    document.getElementById("cv-template").style.display="block";
}

function printCV()
{
    window.print();
}