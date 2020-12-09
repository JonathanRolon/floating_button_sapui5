sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ns.floating_button.controller.View1", {
		onInit: function () {
			this.byId("_miCoreHTML").setContent(this.getContent());
		},
		getContent: function () {
			return "<head>" +
				"<meta http-equiv='Content-Type' content='text/html; charset=utf-8'>" +
				"<meta name='viewport' content='width=device-width, initial-scale=1.0'>" +
				"<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css'>" +
				"<style type='text/css'>" +

				//"*{padding:0;margin:0;}" +
				"body{" +
				"	font-family:Verdana, Geneva, sans-serif;" +
				"	background-color:#CCC;" +
				"	font-size:12px;" +
				"}" +

				".label-container{" +
				"	position:fixed;}" +
				"	bottom:48px;" +
				"	right:105px;" +
				"	display:table;" +
				"	visibility: hidden;" +
				"}" +

				".label-text{" +
				"	color:#FFF;" +
				"	background:rgba(51,51,51,0.5);" +
				"	display:table-cell;" +
				"	vertical-align:middle;" +
				"	padding:10px;" +
				"	border-radius:3px;" +
				"}" +

				".label-arrow{" +
				"	display:table-cell;" +
				"	vertical-align:middle;" +
				"	color:#333;" +
				"	opacity:0.5;" +
				"}" +

				".float{" +
				"	position:fixed;" +
				"	width:60px;" +
				"	height:60px;" +
				"	bottom:10px;" +
				//"	right:40px;" +
				"	margin: 10px;" +
				"	background-color:#F33;" +
				"	color:#FFF;" +
				"	border-radius:50px;" +
				"	text-align:center;" +
				"	box-shadow: 2px 2px 3px #999;" +
				"	z-index:1000;" +
				"	animation: bot-to-top 2s ease-out;" +
				"}" +

				"ul{" +
				"	position:fixed;" +
				//"	right:40px;" +
				"	padding-bottom:20px;" +
				"	bottom:60px;" +
				"	z-index:100;" +
				"	padding-left: 10px;" +
				"}" +

				"ul li{" +
				"	list-style:none;" +
				"	margin-bottom:10px;" +
				"}" +

				"ul li a{" +
				"	color: #FFF;" +
				"}" +

				"ul:hover{" +
				"	visibility:visible!important;" +
				"	opacity:1!important;" +
				"}" +

				"#id_facebook {" +
				"	background-color: #333dff;" +
				"	border-radius:50px;" +
				"	text-align:center;" +
				"	box-shadow: 2px 2px 3px #999;" +
				"	width:60px;" +
				"	height:60px;" +
				"	display:block;" +
				"}" +

				"#id_google {" +
				"	background-color: #F33;" +
				"	border-radius:50px;" +
				"	text-align:center;" +
				"	box-shadow: 2px 2px 3px #999;" +
				"	width:60px;" +
				"	height:60px;" +
				"	display:block;" +
				"}" +

				"#id_twitter {" +
				"	background-color: #56c3cc;" +
				"	border-radius:50px;" +
				"	text-align:center;" +
				"	box-shadow: 2px 2px 3px #999;" +
				"	width:60px;" +
				"	height:60px;" +
				"	display:block;" +
				"}" +

				".my-float{" +
				"	font-size:24px;" +
				"	margin-top:18px;" +
				"}" +

				"a#menu-share + ul{" +
				"  visibility: hidden;" +
				"}" +

				"a#menu-share:hover + ul{" +
				"  visibility: visible;" +
				"  animation: scale-in 0.5s;" +
				"}" +

				/*	"a#menu-share i{" +
				"	animation: rotate-in 0.5s;" +
				"}" +

				"a#menu-share:hover > i{" +
				"	animation: rotate-out 0.5s;" +
				"}" +
*/
				"@keyframes bot-to-top {" +
				"    0%   {bottom:-40px}" +
				"    50%  {bottom:40px}" +
				"}" +

				"@keyframes scale-in {" +
				"    from {transform: scale(0);opacity: 0;}" +
				"    to {transform: scale(1);opacity: 1;}" +
				"}" +

				"@keyframes rotate-in {" +
				"    from {transform: rotate(0deg);}" +
				"    to {transform: rotate(360deg);}" +
				"}" +

				"@keyframes rotate-out {" +
				"    from {transform: rotate(360deg);}" +
				"    to {transform: rotate(0deg);}" +
				"}" +

				"</style>" +
				"</head>" +
				"<body>" +
				"<a class='float' id='menu-share'>" +
				"<i class='fa fa-bars my-float'></i>" +
				"</a>" +
				"<ul>" +
				"<li id='id_facebook'>" +
				"<a href='https://facebook.com' id='menu-facebook' target='_blank'>" +
				"<i class='fa fa-facebook my-float'></i>" +
				"</a>" +
				"</li>" +
				"<li id='id_google'>" +
				"<a href='https://google.com' id='menu-google-plus' target='_blank'>" +
				"<i class='fa fa-google-plus my-float'></i>" +
				"</a>" +
				"</li>" +
				"<li id='id_twitter'><a href='https://twitter.com' id='menu-twitter' target='_blank'>" +
				"<i class='fa fa-twitter my-float'></i>" +
				"</a></li>" +
				"</ul>" +
				"</body>";
		}
	});
});