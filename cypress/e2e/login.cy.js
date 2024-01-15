/// <reference types="cypress" />

describe('Funcionalidade Login', () =>{

    it('Deve fazer login com sucesso', () => {
          cy.visit('https://www.saucedemo.com/v1/index.html')
          cy.get('[data-test="username"]').type('standard_user')
          cy.get('[data-test="password"]').type('secret_sauce')
          cy.get('#login-button').click()

          cy.get('.peek').should('be.visible')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
      cy.visit('https://www.saucedemo.com/v1/index.html')
      cy.get('[data-test="username"]').type('user')
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('#login-button').click()

      cy.get('[data-test="error"]').should('contain', 'Epic sadface')
   })

   it('Deve exibir uma mensagem de erro ao inserir senha inválida ', () => {
      cy.visit('https://www.saucedemo.com/v1/index.html')
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="password"]').type('sauce')
      cy.get('#login-button').click()

      cy.get('[data-test="error"]').should('contain', 'Epic sadface')
})

    })
