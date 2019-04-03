let selectedBreed = ''

describe('integration test', function() {
    it('Visits page', function() {
      cy.visit('localhost:3000')
    })
    it('finds mainpage', function() {
        cy.get('h2')
      })
    it('finds elements', () => {
        cy.get('h2').first().invoke('text')
      })
    it('properly redirects', () => {
        cy.get('#root').get('div').last().click('center')
        cy.url().should('include', `/registration?step=1`)
    })
    it('has correct content', () => {
        cy.get('h2').first().invoke('text').should('equal', `Personal Information`)
    })
    it('doens\t redirect on empty fields', () => {
        cy.get('form').get('div').last().get('input.button').click()
        cy.url().should('include', `/registration?step=1`)
    })
    it('doens\t redirect on empty fields', () => {
        cy.get('form').get('div').last().get('input.button').click()
        cy.url().should('include', `/registration?step=1`)
    })
    it('redirects on filled data fields', () => {
        cy.get('form').get('input').first().type('John Doe')
        cy.get('form').get('input').eq(1).type('johnDoe@email.com')
        cy.get('form').get('input').eq(2).type('test user')
        cy.get('form').get('div').last().get('input.button').click()
        cy.url().should('include', `/registration?step=2`)
    })
    it('has multiple select items', () => {
        cy.get('form > div:first > div:last > div').should('have.length', 12)
    })
    it('selects on click', () => {
        cy.get('form > div:first > div:last > div').eq(0).click()
        cy.get('form > div:first > div:last > div').eq(0).should('have.css', 'background-color')
            .then(color => expect(color).to.equal('rgb(0, 0, 0)') )
    })
    it('has input on second screen', () => {
        cy.get('form').get('textarea').first().type('QA automation')
    })
    it('redirectrs', () => {
        cy.get('form').get('div').last().get('input.button').click()
        cy.url().should('include', `/registration?step=3`)
    })
    it('has working checkboxes', () => {
        cy.get('form').get('[type="radio"]').check('1')
        cy.get('form').get('[type="checkbox"]').check('Job Offers')
    })
    it('requires term and conditions', () => {
        cy.get('form').get('div').last().get('input.button').click()
        cy.url().should('include', `/registration?step=3`)
    })
    it('redirects when term and conditions is accepted', () => {
        cy.get('form').get('[type="checkbox"]').check('true')
        cy.get('form').get('div').last().get('input.button').click()
        cy.url().should('include', `/finalize`)
    })
    it('saved the right values', () => {
        cy.get('li').should((li) => {
            expect(li.first()).to.contain('John Doe')
            expect(li.eq(1)).to.contain('johnDoe@email.com')
            expect(li.eq(2)).to.contain('test user')
            expect(li.eq(3)).to.contain('ReactJS')
            expect(li.eq(4)).to.contain('QA automation')
            expect(li.eq(6)).to.contain('Job Offers')
        })
    })
})