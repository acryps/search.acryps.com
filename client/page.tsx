import { Component } from 'vldom';

export class PageComponent extends Component {
	render(child) {
		return <ui-page>
			<ui-title>Hello World</ui-title>
		</ui-page>;
	}
}