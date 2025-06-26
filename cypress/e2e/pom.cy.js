import { Loginpage } from "./pages/login_page"
const loginpage=new Loginpage()

describe('Allpage',()=>{
    beforeEach(function(){
        cy.visit('https://staging-app-jyn.netlify.app/works/auth/login')
    })
    it('validcredentials',()=>{
    
    loginpage.enterusername('anusha.purad@machintel.net')
    loginpage.enterpassword('Anusha1410+')
    loginpage.clicklogin()
})
it.only('invalidusername',()=>{
    
    loginpage.enterusername('test@machintel.net')
    loginpage.enterpassword('Anusha1410+')
    loginpage.clicklogin()
})
it('invalidpassword',()=>{
    
    loginpage.enterusername('anusha.purad@machintel.net')
    loginpage.enterpassword('Anusha1410@')
    loginpage.clicklogin()
})
})
    
