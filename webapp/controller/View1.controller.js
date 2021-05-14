sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"../control/ResponsiveFloatingButton",
	"../control/ResponsiveLateralButton"
], function (Controller, floating, lateral) {
	"use strict";

	return Controller.extend("ns.floating_button.controller.View1", {

		onInit: function () {
			this.byId("_miCoreHTML").setContent(floating.getContent());
			lateral.agregarCustomCss();
			lateral.agregarBoton();
		},

		onAfterRendering: function () {
			this.getView().byId("page").scrollTo(0);
		}

	});
});