import { by, element } from 'protractor';
import { MenuModule } from '../page_objects/modules/menu.module';

export abstract class Page {
    navigateTo<T extends Page>(page): T {
        element(by.cssContainingText('span', page.name)).click();
        return MenuModule.getPage<T>(page.name);
    }
}
