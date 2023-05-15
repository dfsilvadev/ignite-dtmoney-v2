/* eslint-disable jest/expect-expect */
describe("Form", () => {
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

  it("Checks whether the form is submitted when filled out.", () => {
    cy.get("input[name='description']").type("Pagamento da conta de internet");
    cy.get("input[name='price']").type(109.99);
    cy.get("input[name='category']").type("Internet");
    cy.get(".dmVLBT").click();

    cy.get(".sc-bgqQcB.gGySdV").click();

    cy.get("[aria-label='overlay']").should("not.exist");
    cy.get("[role='dialog']").should("not.exist");
  });

  it("Checks if the outline of inputs changes to red if the form is submitted without data.", () => {
    cy.get(".sc-bgqQcB.gGySdV").click();

    cy.get("input[name='description']").should(
      "have.css",
      "box-shadow",
      "rgb(171, 34, 46) 0px 0px 0px 2px"
    );
    cy.get("input[name='price']").should(
      "have.css",
      "box-shadow",
      "rgb(171, 34, 46) 0px 0px 0px 2px"
    );
    cy.get("input[name='category']").should(
      "have.css",
      "box-shadow",
      "rgb(171, 34, 46) 0px 0px 0px 2px"
    );
  });
});
