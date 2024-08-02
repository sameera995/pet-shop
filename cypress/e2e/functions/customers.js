export class CustomersPage {

    addNewCustomerBTN = () => cy.get('.v-btn__content').contains(' add new customer ');
    newCustomerModal = () => cy.get('.customer-card');
    inputfield = (field) => cy.get('.customer-card').find('input').eq(field); 

    isVisibleAddNewCustBTN() { this.addNewCustomerBTN().should('be.visible'); }
    isVisibleNewCustModal() { this.newCustomerModal().should('be.visible'); }
    clickAddNewCustomer() { this.addNewCustomerBTN().click(); }
    inputDetails() {
        this.inputfield(1).type('Sam');
        this.inputfield(2).type('John');
        this.inputfield(3).type('sam@gmail.com');
        this.inputfield(4).type('0712365478');
        this.inputfield(5).type('Colombo');
        this.inputfield(6).type('John123');
        this.inputfield(7).type('John123', {force: true});

    }
}

export const inCustomersPage = new CustomersPage();