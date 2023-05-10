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

    const time = 2000;
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(time);
  });

  it("Checks if the field has a green outline when in focus.", () => {
    cy.get("input").type("Search");
    cy.percySnapshot();
  });

  it("Checks if it filters the table when searching for an existing value in the input.", () => {
    cy.get("input").type("Almoço");
    cy.get(".sc-jrrXlR > .sc-bgqQcB").click();
    cy.percySnapshot();
  });
});
