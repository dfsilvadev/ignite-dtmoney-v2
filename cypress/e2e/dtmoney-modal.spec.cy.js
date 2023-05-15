/* eslint-disable jest/expect-expect */
describe("Modal", () => {
  beforeEach(() => {
    cy.visit("index.html", {
      onBeforeLoad(win) {
        Object.defineProperty(win.navigator, "languages", {
          value: ["pt-BR"]
        });
      }
    });

    cy.get(".sc-duSInm > .sc-bgqQcB").click();
  });

  it("Checks if the modal is opened when the button is clicked.", () => {
    cy.get("[aria-label='overlay']").should("have.attr", "aria-hidden", "true");
    cy.get("[role='dialog']").should("exist");
  });

  it("Checks if the modal is closed when clicking the X button", () => {
    cy.get("[aria-label='overlay']").should("have.attr", "aria-hidden", "true");
    cy.get("[role='dialog']").should("exist");

    cy.get("[aria-label='close button'").should("exist");

    cy.get('[aria-label="close button"').click();

    cy.get("[aria-label='overlay']").should("not.exist");
    cy.get("[role='dialog']").should("not.exist");
  });
});
