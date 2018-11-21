import { $$, browser, by, element, Key } from 'protractor';
import { Page } from '../../utils/page';

enum HotelSearch {
    NAME = 0,
    CHECK_IN = 1,
    CHECK_OUT = 2
}

export class HotelsPage extends Page {
    searchTags = $$('[name="fCustomHotelSearch"] > div');
    form = element(by.name('fCustomHotelSearch'));

    search(city: string) {
        this.clickSearchTag(HotelSearch.NAME);

        const input = $$('.select2-input')
            .filter(element => element.isDisplayed())
            .first();

        input.sendKeys(city);
        browser.sleep(500);
        input.sendKeys(Key.ENTER);

        this.clickSearchTag(HotelSearch.CHECK_IN);

        $$('.day.active')
            .filter(element => element.isDisplayed())
            .first()
            .click();

        this.form.element(by.css('[type=submit]')).click();

        expect($$('div.img_list').count()).toBeGreaterThan(0);
    }

    private clickSearchTag = (idx: HotelSearch) => this.searchTags.get(idx).click();
}
