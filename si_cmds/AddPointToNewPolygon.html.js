var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>AddPointToNewPolygon</title>\n\
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
            <h1>AddPointToNewPolygon</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">AddPointToNewPolygon</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.5</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Adds a point to the new polygon being created.\n\
<br /><br />\n\
Note: This command uses <a href=\"#!/url=./files/OutArgDefined.htm\">output arguments</a>. C# and some \n\
scripting languages (such as JScript, PerlScript and Python) don\'t support arguments passed by reference. Normally \n\
you can get the output arguments via either <a href=\"#!/url=./si_om/XSIApplication.ExecuteCommand.html\">XSIApplication.ExecuteCommand</a> method (C#) or the \n\
<a href=\"#!/url=./files/ISIVTCollection.htm\">ISIVTCollection</a> (scripting languages), but this command\n\
already returns a value.\n\
<br /><br />\n\
The only available workaround in this case is to create a VBScript custom command which returns both the output\n\
arguments and the return value in one array. For details, see \n\
<a href=\"#!/url=./files/RtnValProblem.htm\">What Happens when the Function Already Returns a Value?</a>.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oLong = AddPointToNewPolygon( InputObj, X, Y, Z, [InsertPosition], [PolygonID] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns the ID of the newly created point as a <a href=\"#!/url=./files/Long.htm\">Long</a>.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">InputObj		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Mesh <a href=\"#!/url=./files/objectexpr.htm\">object</a> holding the polygon being built 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">X		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 X coordinate 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Y		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Y coordinate 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Z		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Z coordinate 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">InsertPosition		</td>\n\
		<td><a href=\"#!/url=./files/Long.htm\">Long</a>		</td>\n\
		<td>\n\
 Ordinal of the vertex where to insert the new point in the polygon 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">0					</td>\n\
					<td>The point is added at the end of the list					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">0< /><n></n></td>\n\
					<td>The point is inserted between vertices i-1 and i					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PolygonID		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
 ID of the polygon affected (-1 is returned if polygon has less than 3 points) 		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' Create a triangle\n\
dim obj, poly\n\
SIGetPrim \"EmptyPolygonMesh\", , , , obj\n\
SelectObj obj\n\
ApplyOp \"CreatePolygon\", obj, siUnspecified\n\
AddPointToNewPolygon obj, -2.229, 2.713, 0.000\n\
AddPointToNewPolygon obj, -3.140, -1.686, 0.000\n\
AddPointToNewPolygon obj, 1.744, -2.345, 0.000, , poly\n\
SelectObj obj &amp; \".poly[\" &amp; poly &amp; \"]\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/ApplyOp.html\">ApplyOp</a> <a href=\"#!/url=./si_cmds/ConnectNewPolygonToEdge.html\">ConnectNewPolygonToEdge</a> <a href=\"#!/url=./si_cmds/ConnectNewPolygonToPoint.html\">ConnectNewPolygonToPoint</a> <a href=\"#!/url=./si_cmds/RemovePointFromPolygon.html\">RemovePointFromPolygon</a> <a href=\"#!/url=./si_cmds/AddPointInteriorToPolygon.html\">AddPointInteriorToPolygon</a> <a href=\"#!/url=./si_cmds/RemoveLastPointInteriorToPolygon.html\">RemoveLastPointInteriorToPolygon</a> <a href=\"#!/url=./si_cmds/TerminateAddEdgeWithInteriorPoints.html\">TerminateAddEdgeWithInteriorPoints</a> <a href=\"#!/url=./si_cmds/SnapOffsetToPointForSlicePolygons.html\">SnapOffsetToPointForSlicePolygons</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";