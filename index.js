<style type="text/css">
#container
{
	width: 100%; height: 100%;
	position: fixed; top: 0;left: 0;
	z-index: 100; display: none;
	background-color: #808080;
	filter: alpha(opacity=70);
	-moz-opacity: 0.7;-khtml-opacity: 0.7; opacity: 0.7;
}
.window a { text-decoration: none; }
.popupbox
{
	width: 100%; margin: 0 auto;
	display: none; position: fixed; z-index: 101;
}
.window
{
	width: 360px; height:266px;
	min-width: 362px; min-height: 95px;
	margin: 80px auto; padding: 1px; background: #e6e6e6;
	position: relative; z-index: 103; border-radius: 5px;
	box-shadow: 0 2px 5px #000;
}
.window p
{
	color: #555555; clear: both;
	text-align: justify;
}
.window p a { color: #d91900; font-weight: bold;}
.window .close
{
	width: 34px; height: 35px; top: -25px; left: 22px;
	float: right; position: relative;
}
.window .close:hover { cursor: pointer;}
</style>