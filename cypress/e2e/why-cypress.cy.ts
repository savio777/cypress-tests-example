describe("tests in cypress playground", () => {
  it("cy type", () => {
    cy.visit("https://example.cypress.io");

    cy.contains("type").click();

    cy.get("#email1").focus();

    cy.wait(2000);

    cy.get("#email1").type("test@gmail.com");

    cy.get("#email1").should("have.value", "test@gmail.com");

    // generate error (input disabled)
    // cy.get(":nth-child(2) > .form-control").type("test");

    // ignore errors
    cy.get(":nth-child(2) > .form-control").type("test", { force: true });
  });
});
