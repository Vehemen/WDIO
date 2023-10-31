const DashboardPage = require('./dashboard.page');
const DoctorsPage = require('./doctors.page');
const PatientsPage = require('./patients.page');
const CalendarPage = require('./planner-calendar.page')

/**
 * @param name {'dashboard' | 'doctors' | 'patients'}
 * @returns {DashboardPage | DoctorsPage | PatientsPage}
 */

function pages(name) {
    const items = {
        dashboard: new DashboardPage(),
        doctors: new DoctorsPage(),
        patients: new PatientsPage(),
        calendar: new CalendarPage(),
    }
    return items[name.toLowerCase()];
}

module.exports = {
    DashboardPage,
    DoctorsPage,
    PatientsPage,
    CalendarPage,
    pages,
}
