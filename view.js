const figlet = require("figlet")
const chalk = require("chalk")
const inquirer = require("inquirer")
const { listForm } = require("../../../Laboratorios/counter_app_example-master/view")

function getTitle(){
    return chalk.green(
        figlet.textSync(
            "Tip App" ,
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
        {BillAmount: billAmount},
        {Percentage: percentage},
        {Tip: tip},
        {Total: total}    
    ]
}

function inputForm(model){
    const {input} = model
    const billMessage = "Bill Account?"
    const tipMessage = "Tip(%)?"
    return inquirer.prompt([
        {
            name: "input",
            type: "input",
            billmessage: billMessage,
            tipMessage: tipMessage,
            default: input,
            validate: function(value){
                if(value == int){
                    return true
                } else {
                    return "Bill Account?"
                }
            }
        }
    ])
}

function listForm(model){
    const {input} = model
    const billMessage = "Bill Account?"
    const tipMessage = "Tip(%)?" 
    return inquirer.prompt({
        name: "input",
        type: "list",
        billMessage: billMessage,
        tipMessage: tipMessage,
        default: input
    })
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