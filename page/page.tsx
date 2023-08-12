import { Component } from "@acryps/page";

export class PageComponent extends Component {
	render(child) {
		return <ui-page>
			<ui-navigation>
				<ui-logo>
					<ui-brand>
						Acryps
					</ui-brand>

					<ui-product>
						Search
					</ui-product>
				</ui-logo>
			</ui-navigation>

			{child}
		</ui-page>;
	}
}