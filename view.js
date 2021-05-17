const figlet = require("figlet")
const chalk = require("chalk")
const inquirer = require("inquirer")

function getTitle(){
    return chalk.green(
        figlet.textSync(
            "Tip Calculator App" ,
            {
                horizontalLayout: "full",
                font: "Nancyj-Underlined"
            }
        )
    )    
}

function getTable(model){
    const{billAmount} = model
    const{percentage} = model
    const{tip} = model
    const{total} = model
    return[
        {Bill_Amount: billAmount},
        {Percentage: percentage},
        {Tip: tip},
        {Total: total}    
    ]
}

function inputForm(model){
    const {input} = model
    const billMessage = "Bill Amount?"
    const tipMessage = "Tip(%)?"
    return inquirer.prompt([
        {
            name: "Bill",
            type: "input",
            billmessage: billMessage,
            default: input,
            validate: function(value){
                if (isNaN(value)){
                    return "Erase and enter a number"
                }else{
                    return true
                }
            }
        },
        {
            name: "Percentage",
            type: "input",
            tipMessage: tipMessage,
            default: input,
            validate: function(value){
                if (isNaN(value)){
                    return "Erase and enter a number"
                }else{
                    return true
                }
            }
        }
    ])
}

function listForm(model){
    const {input} = model
    const billMessage = "Bill Amount?"
    const tipMessage = "Tip(%)?" 
    return inquirer.prompt([
        {
            name: "billAmount",
            type: "list",
            billMessage: billMessage,
            default: input
        },
        {
            name: "Tip",
            type: "list",
            tipMessage: tipMessage,
            default: input
        }
    ])

}

function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view,
    inputForm,
    listForm
}