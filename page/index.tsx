import { Component, Router } from 'vldom';
import { registerDirectives } from 'vldom-default-directives';
import { PageComponent } from './page';

export class Application {
	static router: Router;

	static async main() {
		const router = this.router = new Router(PageComponent);
		
		registerDirectives(Component, this.router);

		router.host(document.body);
	}
}

Application.main();