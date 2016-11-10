angular
	.module("App")
	.service("AppSvc", AppSvc);

AppSvc.$inject = [];

function AppSvc() {
	var self = this;

	self.about = "About Angular Service";

};