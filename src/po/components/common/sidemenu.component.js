class SideMenuComponent {
    
    get rootEL() {
        return $('#plannerSiderBar');
    }

    get name() {
        return this.rootEL.$('.name');
    }

    item(param) {
        const selectors = {
            dashboard: '[routerLink="/dashboard"]',
            schedule: '[routerLink="/calendar"]',
            doctors: '[routerLink="/doctors"]'
        };
        return this.rootEL.$(selectors[param.toLowerCase()]);
    }
}

module.exports = SideMenuComponent;