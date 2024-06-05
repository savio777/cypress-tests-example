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

    cy.get(".action-form > .btn").click();

    cy.get(".action-form")
      .next()
      .should("contain", "Your form has been submitted!");

    cy.get("#action-canvas").click();

    cy.get("#action-canvas").click("topLeft");

    cy.get("#action-canvas").click(80, 165);

    cy.get(".action-div").dblclick();
    // cy.contains("Double click to edit").should("not.be.visible");
    cy.get(".action-div").should("not.be.visible");
    cy.get(".action-input-hidden").should("be.visible");

    cy.get(".action-checkboxes > :nth-child(1) > label").click();

    cy.get(".action-checkboxes > :nth-child(1) > label > input").should(
      "be.checked"
    );
  });
});
