import { Component } from "@acryps/page";
import { ThreadComponent } from "..";
import { SearchService } from "../../managed/services";

export class PromptComponent extends Component {
	declare parent: ThreadComponent;

	render() {
		let input;

		requestAnimationFrame(() => {
			input.onkeypress = event => {
				if (event.key == 'Enter') {
					new SearchService().search(input.value);
				}
			}
		})

		return <ui-prompt>
			{input = <input type="text" />}
		</ui-prompt>
	}
}