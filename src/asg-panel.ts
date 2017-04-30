module ASG {

	export class PanelController {

		public id : string;
		private asg : IServiceController;

		constructor(private service : IServiceController) {

		}

		public $onInit() {

			// get service instance by id
			this.asg = this.service.getInstance(this.id);

		}

		public get options() {

			return this.asg.options.panel;

		}

	}

	var app : ng.IModule = angular.module('angularSuperGallery');

	app.component("asgPanel", {
		controller: ["asgService", ASG.PanelController],
		templateUrl: 'views/asg-panel.html',
		bindings: {
			id: "@"
		}
	});

}