export class Loginpage{
        enterusername(username){
            cy.get('#loginemail').should('be.visible').type(username)

        }
        enterpassword(password){
            cy.get('.ant-input-affix-wrapper').should('be.visible').type(password)

        }
        clicklogin(){
            cy.get('.max-w-sm > form > .justify-center > .text-sm').should('be.visible').click()

        }


}