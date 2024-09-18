let ctr = 1;
function addInput(){
    const fieldType = document.getElementById("field").value;
    const fieldLabel =  document.getElementById("texting").value
    
    const editForm = document.getElementById("your-form");

    const label = document.createElement("label");
    label.innerHTML = fieldLabel;
    label.setAttribute("for","option-"+ctr);

    const input = document.createElement("input");
    input.type = fieldType;
    input.id = "option-"+ctr;

    const div = document.createElement("div");
    div.appendChild(label);
    div.appendChild(input);
    div.setAttribute("class","struct")

    editForm.appendChild(div)
    document.getElementById("texting").value = "";
    
}