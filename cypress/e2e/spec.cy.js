describe('Categories Menu', () => {
  it('should navigate to Categories page and perform CRUD operations', () => {
    cy.visit('http://localhost:5173/')
    cy.wait(3000); // Tunggu 3 detik setelah mengunjungi halaman

    cy.get('[data-testid="form"]').should("exist")

    cy.get('input#email')
      .should('be.visible')
      .should('have.attr', 'placeholder', 'email')
      .type('admin@store.com').should('have.value', 'admin@store.com')

    cy.get('input#password')
      .should('be.visible')
      .should('have.attr', 'placeholder', 'password')
      .type('123456').should('have.value', '123456') 
      
    cy.get('[data-testid="submit"]').click()
    cy.wait(3000); // Tunggu 3 detik setelah klik submit

    cy.get('div.home').should('be.visible')
    cy.get('div.sidebar').should('be.visible')

    // 1) Mengklik menu Categories dan memastikan masuk ke halaman Categories
    cy.get('[data-testid="categories"]', { timeout: 10000 }).should('be.visible').click()
    cy.wait(3000); // Tunggu 3 detik setelah mengklik Categories
    cy.url().should('include', '/categories')
    cy.get('div.datatableTitle').contains('CATEGORIES')

    // 2) Klik tombol Add New 
    cy.get('[data-testid="add-new"]').click() // Ganti selector sesuai dengan tombol Add New
    cy.wait(2000); // Tunggu 3 detik setelah mengklik Add New
    
    // 3) Tunggu dan menulis "Dessert" pada placeholder yang ada
    cy.get('input[placeholder="Coffee"]', { timeout: 10000 }) // Ganti selector sesuai placeholder yang tepat
      .should('be.visible')
      .type('Dessert')
      .should('have.value', 'Dessert')

    // 4) Klik tombol Send
    cy.get('button[type="submit"]').click()
 

  })
})