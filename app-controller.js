angular
	.module("App")
	.controller("AppCtrl", AppCtrl);

AppCtrl.$inject = ["AppSvc"];

function AppCtrl(AppSvc) {
	var self = this;
	self.about = AppSvc.about;
};