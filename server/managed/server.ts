import { BaseServer, ViewModel, Inject } from "vlserver";

import { SearchService } from "././../search/service";

Inject.mappings = {
	"SearchService": {
		objectConstructor: SearchService,
		parameters: []
	}
};

export class ManagedServer extends BaseServer {
	prepareRoutes() {
		this.expose(
			"RlYjRsbnwxYWpxZXNtZWFsMDRvanZibT",
			{
				"JuYXBjcDVhemp0bjphNDJrZGRhZWJqbm": {
					isArray: false,
					type: "string"
				}
			},
			inject => inject.construct(SearchService),
			(controller, params) => controller.search(
				params["JuYXBjcDVhemp0bjphNDJrZGRhZWJqbm"]
			)
		)
	}
}

ViewModel.mappings = {
	
};