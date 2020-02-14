// Här skiver vi vår UI tester

//mocha syntax: 
describe('UI tests for Todo app', () => { //Valfri testrubrik som beskiver att detta är en samlig av test för din app/webbsida. 

    it('', () => {
        cy.visit('http://localhost:5002/todolist')

        cy.contains('Min todo')


        // Kolla om en länk finns
        //Om du har en länk som heter tex 'nästa' så går det bra

        // VI ska klicka på länken 

        //Kontrollera att vi hamnar på rätt sökväg tex /todo/delete. 

    })
    it('', () => {
        cy.get('#input').type('den todon {enter}') //Här väljer vi input att skiva in en ny todo

        // cy.get('#submit').click() // Här klickar vi på submitknappen/länken

        cy.get('.fa-trash"').click({multiple: true})
        

    })

})