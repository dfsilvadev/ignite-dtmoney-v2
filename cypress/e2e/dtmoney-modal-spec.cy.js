/* eslint-disable jest/expect-expect */
describe("Home", () => {
  beforeEach(() => {
    cy.visit("index.html", {
      onBeforeLoad(win) {
        Object.defineProperty(win.navigator, "languages", {
          value: ["pt-BR"]
        });
      }
    });

    const time = 2000;
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(time);
  });

  it("Checks if the modal is opened when the button is clicked.", () => {
    cy.get(".sc-duSInm > .sc-bgqQcB").click();

    cy.get("[aria-label='overlay']").should("have.attr", "aria-hidden", "true");
    cy.get("[role='dialog']").should("exist");
  });

  it("Checks if the modal is closed when clicking the X button", () => {
    cy.get(".sc-duSInm > .sc-bgqQcB").click();

    cy.get("[aria-label='overlay']").should("have.attr", "aria-hidden", "true");
    cy.get("[role='dialog']").should("exist");

    cy.get("[aria-label='close button'").should("exist");

    cy.get('[aria-label="close button"').click();

    cy.get("[aria-label='overlay']").should("not.exist");
    cy.get("[role='dialog']").should("not.exist");
  });

  it("checks whether the form is submitted when filled out.", () => {
    cy.get(".sc-duSInm > .sc-bgqQcB").click();

    cy.get("[aria-label='overlay']").should("have.attr", "aria-hidden", "true");
    cy.get("[role='dialog']").should("exist");

    cy.get("input[name='description']").type("Pagamento da conta de internet");
    cy.get("input[name='price']").type(109.99);
    cy.get("input[name='category']").type("Internet");
    cy.get(".dmVLBT").click();

    cy.get(".sc-bgqQcB.gGySdV").click();

    cy.get("[aria-label='overlay']").should("not.exist");
    cy.get("[role='dialog']").should("not.exist");
  });
});
