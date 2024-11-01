import allRoutes from '../../pages/allRoutes';

describe('Populate From and To', () => {
  const populateFromTo = new allRoutes();

  it('Populate From and To', () => {
    populateFromTo.visit();
    populateFromTo.from('Prague');
    populateFromTo.selectFrom();
    populateFromTo.to('Vienna');
    populateFromTo.selectTo();
    populateFromTo.check();
  });
});
