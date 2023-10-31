const BasePage = require('./base.page')

class CalendarPage extends BasePage{
    constructor() {
        super("https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/calendar");
    }
}

module.exports = CalendarPage;
