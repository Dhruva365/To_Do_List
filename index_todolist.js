let add_button = document.getElementById("button_1");
let input_box = document.getElementById("input_task");
// add_button.Disabled = true;
// add_button.disabled = true;
let i = 0;
let delete_button;
let main_div;
let card1;
let main_cont;
let current_val;
let text1;
let text2;
let check_box;

input_box.addEventListener("keyup",button_disable);

add_button.addEventListener("click",add_list);

function button_disable()
{
    // add_button.disabled = true;
    let val = document.getElementById("input_task").value;
    // console.log(val);
    if(val == "")
    {
        add_button.disabled = true;

    }
    else
    {
        add_button.disabled = false;
    }


}


function add_list()
{
    i++;
    main_cont = document.getElementById("maincont");
    current_val = document.getElementById("input_task").value;

    main_div = document.createElement("div");
    card1 = document.createElement("div");
    delete_button = document.createElement("button");
    check_box = `<input type="checkbox" id="check_id${i}">`;

    text1 = document.createTextNode("Task:" + current_val);
    text2 = document.createTextNode("Delete");

    delete_button.appendChild(text2);
    card1.appendChild(text1);
    
    delete_button.id = "del_id" + i;
    // delete_button.setAttribute("for","del_id" + i);
    delete_button.classList.add("new_button");
    // delete_button.classList.add("match" + i);

    main_div.classList.add("maindiv");
    // main_div.id = "maindiv_id" + i;
    card1.classList.add("card_1");
    card1.id = "card_id" + i;
    // main_div.classList.add("main_div" + i); // to add class to newly created element inorder to design.
    main_div.insertAdjacentHTML("afterbegin",check_box);
    main_div.appendChild(card1);
    main_div.appendChild(delete_button);

    

    main_cont.appendChild(main_div);
    let current_val_1 = "";
    document.getElementById("input_task").value = current_val_1;
    button_disable();
    // document.getElementById("del_id"+i) = "";
    // console.log(document.getElementById("del_id" + i));


    delete_button.addEventListener("click",delete_list);
    function delete_list(){
        // console.log(this); // this keyword in a regular function refers to the object info that has called the fuunction.
        let refer = this;
        // console.log(refer.parentNode); // .parentNode refers the parent of child in this case it refers the parent of refer variable.
        let parent_node = refer.parentNode;
        main_cont.removeChild(parent_node);
        // console.log(refer.parentNode);
        

        // console.log(document.getElementById("del_id" + i));
        // console.log(document.getElementById("maindiv_id" + i));
        // let refer = document.getElementById("del_id" + i);
        // console.log(refer);
        // console.log(refer.getAttribute("id"));
        
        // for(let j=1; j<=i; j++)
        // {
        //     if(refer.getAttribute("id") == "del_id"+j)
        //     {
        //         main_cont.removeChild(document.getElementById("maindiv_id"+j));

        //     }
        // }
        

    }

    let status = document.getElementById("check_id"+i);
    status.addEventListener("change",checkbut_disable);

    function checkbut_disable()
    {
        let refer_1 = this;
        let refer_2;
        let refer_3;
        if(refer_1.checked)
        {
            // refer_3 = `<s>refer_1.nextElementSibling.value</s>`;
            refer_2 = refer_1.nextElementSibling;
            refer_3 = refer_2.nextElementSibling;
            refer_3.disabled = true;
            let card_value = document.getElementById(refer_2.id).innerHTML;
            let strike_value = `<strike>${card_value}</strike>`;
            document.getElementById(refer_2.id).innerHTML = strike_value;
            console.log(strike_value);
            // console.log(refer_2);
            // console.log(card_value);

            // console.log(`<s>${card_value}</s>`);
            // refer_2.disabled = true;



        }
        else{
            
            refer_2.enabled = true;
            checkbut_disable();
        }
        // else{
        //     // delete_button
        // }
        // console.log(this);
        // console.log("hello");
        // delete_button.disabled = true;
    }
    




}
// let del_but = document.getElementById("del_id");
// del_but.addEventListener("click",delete_list);
// function delete_list(){
//     console.log("hello");
//     main_cont.removeChild(document.getElementsByClassName("maindiv"));
// }