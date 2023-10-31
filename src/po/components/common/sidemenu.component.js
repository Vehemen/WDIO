const BaseComponent = require('./base.component')

class SideMenuComponent extends BaseComponent {
    
    constructor() {
        super('#plannerSiderBar')
    }

    get name() {
        return this.rootEL.$('.name');
    }
    
    async getAllMenuItem() {
        await this.rootEL; // Ensure rootEL is resolved
        return this.rootEL.$$('ejs-sidebar#plan nerSiderBar div.sidebar-item');
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