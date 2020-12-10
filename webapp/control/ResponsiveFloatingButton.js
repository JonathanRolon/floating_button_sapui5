sap.ui.define([

], function () {
	"use strict";

	return {

		getContent: function () {
			return "<html>" +
				"<head>" +
				"<meta http-equiv='Content-Type' content='text/html; charset=utf-8'>" +
				"<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css'>" +
				"<style type='text/css'>" +

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
				"</body>" +
				"</html>";
		}

	};
});