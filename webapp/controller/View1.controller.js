sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"../control/ResponsiveFloatingButton"
], function (Controller, floating) {
	"use strict";

	return Controller.extend("ns.floating_button.controller.View1", {
		
		onInit: function () {
			this.byId("_miCoreHTML").setContent(floating.getContent());
		},

		onAfterRendering: function () {
			this.getView().byId("page").scrollTo(0);
		}
		
	});
});