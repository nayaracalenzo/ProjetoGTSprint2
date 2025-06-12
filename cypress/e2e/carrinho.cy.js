describe("Navegação por clique", () => {
  it("Deve ir da home page para a página do carrinho clicando no menu", () => {
    cy.visit("/");
    cy.wait(5000);
    cy.get('a[href="/carrinho"]').click();
    cy.wait(5000);
    cy.url().should("include", "/carrinho");
    cy.wait(5000);
    cy.contains("MEU CARRINHO").should("be.visible");
  });
});
