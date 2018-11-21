import { $, $$, browser, by, element } from 'protractor';
import { AccountPage } from './account.page';
import { Page } from '../../utils/page';

export class PhpLoginPage extends Page {
    email = $('[name=username]');
    password = $('[name=password]');

    static at(): PhpLoginPage {
        browser.get('https://www.phptravels.net');

        return this.assert();
    }

    static assert(): PhpLoginPage {
        expect(browser.getTitle()).toBe('PHPTRAVELS | Travel Technology Partner');
        return new PhpLoginPage();
    }

    login(email: string, password: string) {
        $$('#li_myaccount')
            .get(1)
            .click();
        element
            .all(by.cssContainingText('a', 'Login'))
            .get(1)
            .click();

        this.email.sendKeys(email);
        this.password.sendKeys(password);
        $('[type=submit]').click();

        expect($('h3.RTL').getText()).toBe('Hi, Johny Smith');

        return new AccountPage();
    }
}
