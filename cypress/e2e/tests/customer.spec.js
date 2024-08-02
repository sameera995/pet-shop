import '../../support/commands';
import {onSideMenu} from '../functions/side-menu';
import {inCustomersPage} from '../functions/customers';

describe('template spec', () => {

beforeEach(() => {
    cy.adminLogin('admin@buckhill.co.uk', 'admin');
  });

  it('Verify add new customer function', () => {
    onSideMenu.clickCustomers();
    inCustomersPage.isVisibleAddNewCustBTN();
    inCustomersPage.clickAddNewCustomer();
    inCustomersPage.isVisibleNewCustModal();
    inCustomersPage.inputDetails();
  })
})