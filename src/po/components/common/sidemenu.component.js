const BaseComponent = require('./base.component')

class SideMenuComponent extends BaseComponent {
    
    constructor() {
        super('#plannerSiderBar')
    }

    get name() {
        return this.rootEL.$('.name');
    }

    item(param) {
        const selectors = {
            dashboard: '[routerLink="/dashboard"]',
            schedule: '[routerLink="/calendar"]',
            doctors: '[routerLink="/doctors"]',
            patients: '[routerLink="/patients"]',
        };
        return this.rootEL.$(selectors[param.toLowerCase()]);
    }
}

module.exports = SideMenuComponent;