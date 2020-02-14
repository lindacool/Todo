describe('about page', () => {
    it('should load about page', () => {

        cy.visit('http://localhost:5002/todolist')
        
        cy.contains('About').click()

        cy.url().should('include', '/about')

        cy.contains('This todo app was created by Linda')
    })
})