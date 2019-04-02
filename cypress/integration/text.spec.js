let selectedBreed = ''

describe('My First Test', function() {
    it('Visits page', function() {
      cy.visit('localhost:3000')
    })
    it('finds list', function() {
        cy.get('ul')
      })
    it('finds elements', () => {
        cy.get('li').first().invoke('text').then(breed => {
            selectedBreed = breed;
        })
      })
    it('properly redirects', () => {
        cy.get('li').first().click('center')
        cy.url().should('include', `/breed/${selectedBreed}`)
    })
    it('has correct content', () => {
        cy.get('img').should('be.visible')
        cy.get('h2').should('contain', `${selectedBreed}`)
    })
    [100, 200, 500, 1000, 3000].forEach(width => {
        it('is responsive' + width, () => {
            cy.viewport(width, 720)
            cy.get('img').its('width').should('be', width/2)
        })
    })
})

describe('mocked test', function() {
    it('Visits page', function() {
        cy.server({})
        cy.route('**/breeds/list',{ message:['test1','test2'] })
        cy.visit('localhost:3000')
    })
    it('list has all elements of list', function() {
        cy.get('li').should('have.length', 2)
    })
    it('finds list', () => {
        cy.get('li').first().invoke('text').then(breed => {
            selectedBreed = breed;
        })
    })
    it('properly redirects', () => {
        cy.server({})
        cy.route(`**/breed/${selectedBreed}/images/random`, {message: 'image source'})
        cy.get('li').first().click('center')
        cy.url().should('include', `/breed/${selectedBreed}`)
    })
    it('has correct content', () => {
        cy.get('img').should('have.attr', 'src', 'image source')
        cy.get('h2').should('contain', `${selectedBreed}`)
    })
})