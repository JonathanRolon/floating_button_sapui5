sap.ui.define([

], function () {
	"use strict";

	return {
		agregarBoton: function () {

			// var oRendererExtensions = jQuery.sap.getObject("sap.ushell.renderers.fiori2.RendererExtensions");
			// oPlgFeedback.oSupportHeaderItem = new sap.ushell.ui.shell.ShellHeadItem("idBotonFeedback", {
			// 	icon: sap.ui.core.IconPool.getIconURI("message-popup"),
			// 	tooltip: "Enviar comentarios o reportar errores",
			// 	showSeparator: true,
			// 	press: this.iniciarSelector
			// });

			// oRendererExtensions.addHeaderEndItem(oPlgFeedback.oSupportHeaderItem);

			// crear clase para el botón
			$(
				"<style type='text/css'> .botonFeedback{ \
					height: 40px;\
					border: solid 3px #FFFFFF;\
					background: #0f8ef5; \
					width: auto; \
					line-height: 32px; \
					-webkit-transform: rotate(-90deg); \
					font-weight: 600; \
					color: white; \
					transform: rotate(-90deg); \
					-ms-transform: rotate(-90deg); \
					-moz-transform: rotate(-90deg); \
					text-align: center; \
					font-size: 17px; \
					position: fixed; \
					right: -60px; \
					top: 45%; \
					font-family: helvetica, arial, sans-serif; \
					z-index: 999; \
					cursor: pointer; \
				}  </style>"
			).appendTo("head");

			$("<button/>", {
				id: "botonFeedback"
			}).appendTo("body");
			$("#botonFeedback").html("Administrá los servicios y cuentas");
			$("#botonFeedback").on("click", this.popupFeedback);
			$("#botonFeedback").addClass("botonFeedback");

		},
		agregarCustomCss: function () {
			$(
				"<style type='text/css'> .botonNegativo .sapMBtnInner { \
					border-color: #02b8f4; \
					color: #02b8f4; \
				}  </style>"
			).appendTo("head");

			$(
				"<style type='text/css'> .botonNeutro .sapMBtnInner { \
					border-color: #323ffc; \
					color: #323ffc; \
				}  </style>"
			).appendTo("head");

			$(
				"<style type='text/css'> .botonPositivo .sapMBtnInner { \
					border-color: #02e298; \
					color: #02e298; \
				}  </style>"
			).appendTo("head");

			$(
				"<style type='text/css'> .botonFondoNegativo .sapMBtnInner { \
					background-color: #02b8f4; \
					color: #ffffff; \
						}  </style>"
			).appendTo("head");

			$(
				"<style type='text/css'> .botonFondoNeutro .sapMBtnInner { \
					background-color: #323ffc; \
					color: #ffffff; \
						}  </style>"
			).appendTo("head");

			$(
				"<style type='text/css'> .botonFondoPositivo .sapMBtnInner { \
					background-color: #02e298; \
					color: #ffffff; \
						}  </style>"
			).appendTo("head");

			$(
				"<style type='text/css'> .letraChica{ \
					font-size: .675rem; \
				}  </style>"
			).appendTo("head");

			$(
				"<style type='text/css'> .margen{ \
					margin: .2rem !important; \
				}  </style>"
			).appendTo("head");

		},
	};
});