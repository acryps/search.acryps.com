import { Component, PathRouter, Router } from '@acryps/page'
import { registerDirectives } from '@acryps/page-default-directives'
import { PageComponent } from './page';
import { ThreadComponent } from './thread';

export class Application {
	static router: Router;

	static async main() {
		if (location.pathname == '/') {
			location.pathname = `/${Math.random().toString(36).substring(2)}`;
		}

		const router = this.router = new PathRouter(PageComponent
			.route('/:id', ThreadComponent)
		);
		
		registerDirectives(Component, this.router);

		router.host(document.body);
	}
}

Application.main();