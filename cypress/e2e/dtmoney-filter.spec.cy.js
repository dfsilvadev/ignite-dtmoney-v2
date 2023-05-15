/* eslint-disable jest/expect-expect */
describe("Filter", () => {
  beforeEach(() => {
    cy.visit("index.html", {
      onBeforeLoad(win) {
        Object.defineProperty(win.navigator, "languages", {
          value: ["pt-BR"]
        });
      }
    });
  });

  it("Checks if the field has a green outline when in focus.", () => {
    cy.get("input").type("Search");
    cy.get("input").should(
      "have.css",
      "box-shadow",
      "rgb(0, 135, 95) 0px 0px 0px 2px"
    );
    cy.percySnapshot();
  });

  it("Checks if it filters the table when searching for an existing value in the input.", () => {
    cy.get("input").type("Almoço");
    cy.get(".sc-jrrXlR > .sc-bgqQcB").click();
    cy.percySnapshot();
  });
});
