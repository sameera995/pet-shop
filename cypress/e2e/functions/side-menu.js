export class SideMenu {

    clickDashboard() { cy.get('.v-list-item-title').contains('Dashboard').click(); }
    clickShipmentLocation() { cy.get('.v-list-item-title').contains('Shipment Location').click(); }
    clickCustomers() { cy.get('.v-list-item-title').contains('Customers').click(); }
    clickProduct() { cy.get('.v-list-item-title').contains('Products').click(); }

}

export const onSideMenu = new SideMenu();
