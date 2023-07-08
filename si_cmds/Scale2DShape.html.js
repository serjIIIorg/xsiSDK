var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Scale2DShape</title>\n\
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
            <h1>Scale2DShape</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Scale2DShape</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v3.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Resizes (scales) the 2D shape (mask shape). This is the scripting equivalent of\n\
selecting the shape, and clicking and dragging any of the handles on its \n\
bounding box. <br /><br />\n\
Note: You may want to change where the center, or pin, of the shape appears \n\
before scaling it. For example, if you move the pin to the left of the shape \n\
and then rotate it, the shape grows faster on the right than on the left.\n\
To move the pin of the shape, use the <a href=\"#!/url=./si_cmds/Move2DShapePin.html\">Move2DShapePin</a>\n\
command.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Scale2DShape( [Shape], x, y );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Shape		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/paramexpr.htm\">Parameter path name</a> for the shape you are scaling.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection. <br /><br />Note: If the current selection is not a valid shape, an error occurs.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">x		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
Specifies the new position of the center in X.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">y		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
Specifies the new position of the center in Y.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example demonstrates how to set a garbage matte mask for a \n\
\' ColorCorrect operator in the FxTree, scale it, change the position\n\
\' of its center and then rotate it around the new center.\n\
\'\n\
\' Create a new FxTree \n\
set oTree = CreateFxTree()\n\
\' Get the projects path for the current system\n\
sPath = InstallationPath( siProjectPath )\n\
set oClip = CreateImageClip( sPath &amp; \"\\Pictures\\noIcon.pic\", \"NewClip\" )\n\
\' Use the clip to create a new image clip operator\n\
set oOperator = AddImageClipFxOp( oTree, oClip )\n\
\' Add a Color Correct operator to the same tree\n\
set oCCOp = AddFxOp( oTree, \"Color Correct\" )\n\
\' Connect the two operators\n\
ConnectFxOp oOperator, oCCOp, \"1\" \n\
\' Since the ConnectFxOp command does not return the new operator,\n\
\' you need to get it from the OperatorCollection on the FxTree object\n\
for each oMember in oTree.FxOperators\n\
	if oMember.Name = \"ColorCorrect\" then\n\
		set oGBMatteOp = oMember\n\
		exit for\n\
	end if\n\
next\n\
\' Adjust the HSV Offset and Gain levels so you can see the \n\
\' results of the color correction\n\
SetValue oGBMatteOp.FullName &amp; \".MasterHueShift,\" _\n\
		&amp; oGBMatteOp.FullName &amp; \".MasterOffset,\" _\n\
		&amp; oGBMatteOp.FullName &amp; \".MasterGain\", _\n\
		Array(0, 0.820731514055631, 0.852844886888196)\n\
\' Add the 2D shape (mask shape) to the GarbageMatte and reshape it so you can see\n\
\' the shape when you open the Fx Viewer with the ColorCorrect operator selected\n\
set oRotospline = Add2DShape( oGBMatteOp &amp; \".GarbageShapes\", \"Polygon\" )\n\
Move2DShapePin oRotospline, 114.75, 143\n\
Add2DShapePoint oRotospline, 44, 194\n\
Add2DShapePoint oRotospline, 65, 78\n\
Add2DShapePoint oRotospline, 116, 138\n\
Add2DShapePoint oRotospline, 169, 84\n\
Add2DShapePoint oRotospline, 180, 207\n\
Add2DShapePoint oRotospline, 153, 137\n\
Add2DShapePoint oRotospline, 114, 172\n\
Add2DShapePoint oRotospline, 77, 134\n\
\' Make the shape a little smaller\n\
Scale2DShape oRotospline, 0.875486381322957, 0.784615384615384\n\
\' Pivot the shape on its bottom right corner\n\
Move2DShapePin oRotospline, 154.75, 69\n\
Set2DShapeRotation oRotospline, -50.6836714968651</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/Add2DShape.html\">Add2DShape</a> <a href=\"#!/url=./si_cmds/Move2DShape.html\">Move2DShape</a> <a href=\"#!/url=./si_cmds/Move2DShapePin.html\">Move2DShapePin</a> <a href=\"#!/url=./si_cmds/Set2DShapeRotation.html\">Set2DShapeRotation</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";