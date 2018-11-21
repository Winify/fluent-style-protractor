import { Pages } from '../page_objects/modules/menu.module';
import { FlightsPage } from '../page_objects/pages/flights.page';
import { HotelsPage } from '../page_objects/pages/hotels.page';
import { PhpLoginPage } from '../page_objects/pages/php-login.page';

describe('phptravels', () => {
    it('should login', () =>
        PhpLoginPage.at()
            .login('user@phptravels.com', 'demouser')
            .navigateTo<HotelsPage>(Pages.Hotels)
            .search('Budapest'));

    it('should flight', () =>
        PhpLoginPage.at()
            .login('user@phptravels.com', 'demouser')
            .navigateTo<FlightsPage>(Pages.Flights)
            .search());
});
