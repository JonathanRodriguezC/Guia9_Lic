const newForm=document.getElementById("idNewForm");

const butonCrear=document.getElementById("idBtnCrear");
const buttonAddElemento=document.getElementById("idBtnAddElement");

const cmbElemento=document.getElementById("idCmbElemento");

const tituloElemento=document.getElementById("idTituloELemento");
const nombreELemento=document.getElementById("idNombreELemento");

const modal=new bootstrap.Modal(document.getElementById("idModal"),{});

const verificarTipoElemento=function(){
    let elemento=cmbElemento.value;
    if(elemento!=""){
        modal.show();

    }else{
        alert("Debe seleccionar el elemento que se creara");
    }
};
const newSelect=function(){
    let addElemento=document.createElement("select");
    addElemento.setAttribute("id",`id${nombreELemento.value}`);
    addElemento.setAttribute("class","form-select");

    for(let i=1;i<=10;i++){
        let addOption=document.createElement("Option");
        addOption.value=i;
        addOption.innerHTML=`Opcion ${i}`;
        addElemento.appendChild(addOption);
    }
    let labelElemento=document.creareElement("label");
    labelElemento.setAttribute("for",`id${nombreELemento.value}`);
    labelElemento.textContent=tituloElemento.value;

    let labelId=document.createElement("span");
    labelId.textContent=`ID de control:${nombreElemento.value}`;

    let divElemento=document.createElement("div");

    divElemento.setAttribute("class","form-floating");
    divElemento.appendChild(addElemento);
    divElemento.appendChild(labelElemento);
    newForm.appendChild(labelId);
    newForm.appendChild(divElemento);
};

const newInput=function(newElmento)
{
    let addElemento=newElmento=="textarea"
    ?document.createElement("textarea")
    :document.createElement("input");
    
    addElemento.setAttribute("id",`id${nombreELemento.value}`);
    addElemento.setAttribute("type",newElmento);
    addElemento.setAttribute("class","form-control");
    addElemento.setAttribute("placeholder",`id${nombreELemento.value}`);

    let labelElemento=document.createElement("label");
    labelElemento.setAttribute("class","bi bi-tag");

    labelElemento.textContent=tituloElemento.value;
    labelElemento.insertAdjacentElement("afterbegin",iconLabel);
    let labelId=document.createElement("span");
    labelId.textContent=`ID de cotrol: ${nombreElemento.value}`;

    let divElemento=document.createElement("div");
    divElemento.setAttribute("class","form-floating mb-3");
    divElemento.appendChild(addElemento);
    divElemento.appendChild(labelElemento);
    newForm.appendChild(labelId);
    newForm.appendChild(divElemento);

};

butonCrear.onclick=()=>{verificarTipoElemento();};
buttonAddElemento.onclick=()=>{
    if(nombreELemento.value != "" && tituloElemento.value != ""){
        let elemento=cmbElemento.value;
        if(elemento=="select"){
            newSelect();

        }else if(elemento=="radio"||elemento=="checkbox"){
            newRadioCheckbox(elemento);
        }else{
            newInput(elemento);
        }
        
    }else{
        alert("Faltan campos por completar")
    }
}

document.getElementById("idModal").addEventListener("shown.bs.modal",()=>{
tituloElemento.value="";
nombreELemento.value="";
tituloElemento.focus();
})

