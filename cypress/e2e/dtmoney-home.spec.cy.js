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

  it("Check for the initial state", () => {
    cy.percySnapshot();
  });
});
