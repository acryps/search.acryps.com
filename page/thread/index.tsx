import { Component } from "@acryps/page";
import { PromptComponent } from "./prompt";

export class ThreadComponent extends Component {
	render() {
		return <ui-thread>
			{new PromptComponent()}
		</ui-thread>;
	}
}