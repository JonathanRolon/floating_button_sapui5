sap.ui.define([

], function () {
	"use strict";

	return {

		buildList: function () {

			var bottom = 0;
			var actions = [{
				title: "TU FACTURA",
				url: "https://www.claro.com.ar/negocios/asistencia/tu-factura",
				style: "float:right",
				icon: "&#xe0c3"
			}, {
				title: "AUTOGESTIONATE",
				url: "https://www.claro.com.ar/negocios/asistencia/autogestionate",
				style: "float:right",
				icon: "&#xe015"
			}, {
				title: "SOPORTE",
				url: "https://www.claro.com.ar/negocios/asistencia/soporte",
				style: "float:right",
				icon: "&#xe221"
			}, {
				title: "CONFIGURÁ TU CLARO",
				url: "https://www.claro.com.ar/negocios/asistencia/configura-tu-claro",
				style: "float:right",
				icon: "&#xe242"
			}, {
				title: "CLOUD",
				url: "https://www.claro.com.ar/negocios/asistencia/cloud",
				style: "float:right",
				icon: "&#xe21d"
			}, {
				title: "ROAMING",
				url: "https://www.claro.com.ar/negocios/asistencia/roaming",
				style: "float:right",
				icon: "&#xe041"
			}];
			bottom = 55 + 35 * (actions.length - 1);

			var custom_style = "bottom:" + bottom + "px;"; // por parámetro

			var list = "<ul id='my-list' style='" + custom_style + "'  class='my-ul'>";

			actions.forEach(function (action) {
				list +=
					"<li style='" + action.style + "'>" +
					'<div class="sapMFlexItemAlignAuto sapMFlexBoxBGTransparent sapMFlexItem" style="order: 0; flex: 1 1 auto; min-height: auto; min-width: auto;">' +
					'<button onclick="window.open(\'' + action.url +
					'\', \'_blank\')" class="sapMBtnBase sapMBtn sapMBtnInverted">' +
					'<span class="sapMBtnInner sapMBtnHoverable sapMFocusable sapMBtnText sapMBtnIconFirst sapMBtnNeutral">' +
					'<span class="sapMBtnContent">' +
					'<bdi aria-live="off">' + action.title + '</bdi></span>' +
					'<span id="idBotonContacto-img" data-sap-ui-icon-content="' + action.icon +
					'" role="presentation" aria-hidden="true" class="sapUiIcon sapUiIconMirrorInRTL sapMBtnCustomIcon sapMBtnIcon sapMBtnIconRight" style="font-family: \'SAP\\2dicons\';">' +
					'</span></button>' +
					'</div>' +
					"</li>";
			});

			list += "</ul>";

			return list;
		},

		getContent: function () {
			return "<html>" +
				"<head>" +
				"<meta http-equiv='Content-Type' content='text/html; charset=utf-8'>" +
				"<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css'>" +
				"<style type='text/css'>" +

				".my-img{" +
				"	font-size:24px;" +
				"	margin-top:10px;" +
				"	z-index: 1000;" +
				"}" +

				"</style>" +
				"<script type='text/javascript'>" +
				"function onClickFAQ(event) {" +
				"var link = document.getElementById('menu-share');" +
				"var element = document.getElementById('my-list');" +
				"var imgElement = document.getElementById('mi-image');" +
				"var img = imgElement.src;" +
				"element.classList.toggle('mystyle');" +
				"link.classList.toggle('mytogglelink');" +
				"if (img.indexOf('Open1.png')!=-1) { " +
				"imgElement.src  = '/images/FAQ-PNG-Close1.png';" +
				"}" +
				"else {" +
				"imgElement.src = '/images/FAQ-PNG-Open1.png';" +
				"}" +
				"}" +
				"</script>" +
				"</head>" +
				"<body>" +
				"<div id='my_div' class='my-div'>" +
				"<a class='float' id='menu-share' onclick='return onClickFAQ();'>" +
				'<img id="mi-image" alt="?" class="my-img"' +
				'src="/images/FAQ-PNG-Open1.png" width=45 height="45">' +
				"</a>" +
				this.buildList() +
				"</div>" +
				"</body>" +
				"</html>";
		}

	};
});