const BasePage = require('./base.page')
const SideMenuComponent = require('./../components/common/sidemenu.component');

class CalendarPage extends BasePage{
    constructor() {
        super("https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/calendar");
        this.sideMenu = new SideMenuComponent();
    }
}

module.exports = CalendarPage;
