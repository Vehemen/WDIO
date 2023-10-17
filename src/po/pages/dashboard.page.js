const BasePage = require('./base.page')
const SideMenuComponent = require('./../components/common/sidemenu.component');

class DashboardPage extends BasePage{
    constructor() {
        super("https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard");
        this.sideMenu = new SideMenuComponent();
    }
}

module.exports = DashboardPage;


