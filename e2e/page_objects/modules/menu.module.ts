import { Page } from '../../utils/page';
import { HotelsPage } from '../pages/hotels.page';
import { FlightsPage } from '../pages/flights.page';

export const Pages = {
    Hotels: { name: 'Hotels' },
    Flights: { name: 'Flights' }
};

const PageFactory: { [key: string]: Function } = {
    [Pages.Hotels.name]: (): HotelsPage => {
        return new HotelsPage();
    },

    [Pages.Flights.name]: (): FlightsPage => {
        return new FlightsPage();
    }
};

export class MenuModule {
    static getPage<T extends Page>(name: string): T {
        return PageFactory[name]();
    }
}
