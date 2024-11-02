import allRoutes from '../../pages/allRoutes';

const origin = 'Berlin';
const destination = 'Venice';

describe('Populate From and To', () => {
  it('Populate From and To', () => {
    const populateFromTo = new allRoutes();

    populateFromTo.visit();
    cy.wait(1000); //500 is enough for my Mac
    populateFromTo.selectFrom(origin);
    populateFromTo.selectTo(destination);
    populateFromTo.checkEmpty();
    populateFromTo.checkValue(origin, destination);
  });
});
