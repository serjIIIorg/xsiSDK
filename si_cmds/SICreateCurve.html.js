var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SICreateCurve</title>\n\
   \n\
</head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style>\n\
/*  These settings override ones in the default stylesheets\n\
	used by the merged files that cause problems in combination\n\
	with the standard HTML help styles and page templates. */\n\
\n\
div, div.example, div.tip {\n\
	 margin:0;\n\
}\n\
\n\
td.example {\n\
	background: inherit;\n\
}\n\
\n\
/* This fixes a problem with nested pre blocks on an example page */\n\
pre pre {\n\
	display:block;\n\
	padding:0;\n\
	border-style:none;\n\
}\n\
</style><link rel=\"stylesheet\" href=\"si_cmds/css/en.css\" type=\"text/css\" /><script>$(document).ready(function() { yepnope.injectJs(\"./si_cmds/lib/utils.js\"); });</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>SICreateCurve</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SICreateCurve</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>Creates a curve with no points.</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = SICreateCurve( [Name], [Degree], [CurveType] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns the curve (a <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> object).</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Name of the curve 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Degree		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
 Degree of curve 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
3			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">3					</td>\n\
					<td>Cubic NURBS Curve					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">1					</td>\n\
					<td>Linear NURBS Curve					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">CurveType		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
 Specifies whether the curve is interpolated 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
1			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">1					</td>\n\
					<td>Interpolated Curve					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">0					</td>\n\
					<td>Non-Interpolated Curve					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'This example creates a curve by adding points to the curve\n\
newscene\n\
\'Create a cubic interpolating curve called MyCurve\n\
SICreateCurve \"MyCurve\", 3, 1\n\
SIAddPointOnCurveAtEnd \"MyCurve\", -8.074, -1.352, 0.135, False\n\
SIAddPointOnCurveAtEnd \"MyCurve\", -5.041, -4.056, 0.406, False\n\
SIAddPointOnCurveAtEnd \"MyCurve\", 4.293, -2.567, 0.257, False	\n\
SIAddPointOnCurveAtEnd \"MyCurve\", 8.05, -4.0, 3.0123, False	\n\
\'Show the knots since we created an interpolating curve\n\
SelectObj \"MyCurve\", , True\n\
ToggleValue \"compobjselknot\", \"*.camvis,Views.*.*.camvis\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/CreateCurve.html\">CreateCurve</a> <a href=\"#!/url=./si_cmds/SIAddPointOnCurve.html\">SIAddPointOnCurve</a> <a href=\"#!/url=./si_cmds/SIAddPointOnCurveAtStart.html\">SIAddPointOnCurveAtStart</a> <a href=\"#!/url=./si_cmds/SIAddPointOnCurveAtEnd.html\">SIAddPointOnCurveAtEnd</a> <a href=\"#!/url=./si_cmds/GetCurveLength.html\">GetCurveLength</a> <a href=\"#!/url=./si_cmds/EvaluateCurveAt.html\">EvaluateCurveAt</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";