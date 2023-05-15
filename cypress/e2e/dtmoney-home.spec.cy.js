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
  });

  it("Check for the initial state", () => {
    cy.percySnapshot();
  });
});
