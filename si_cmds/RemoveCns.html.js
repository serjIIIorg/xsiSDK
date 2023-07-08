var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>RemoveCns</title>\n\
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
            <h1>RemoveCns</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">RemoveCns</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Removes the specified constraints between objects. <br /><br />\n\
Tip: If you want to remove all constraints matching a particular \n\
constraint type instead, use the \n\
<a href=\"#!/url=./si_cmds/RemoveCnsType.html\">RemoveCnsType</a> command.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>RemoveCns( [ConstrainedObj], [ConstrainingObj], [ForceDeletion] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">ConstrainedObj		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/listexpr.htm\">List</a> of objects to be constrained. If you pass in a variable, the command returns a <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> of the constrained objects. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Selected objects			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ConstrainingObj		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/listexpr.htm\">List</a> of constraining objects. If you pass in a variable, the command returns a <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> of the constrained objects. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
User is prompted to pick if there is more than one constraining object for a constrained object			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ForceDeletion		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 True to delete all constraints (user is not prompted to pick constraining objects) 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example creates a little planetary scene and applies 2 constraints\n\
\' from the planet (Position constraints on the ring and the moon). Then\n\
\' it removes only the moon\'s constraint by using the RemoveCns command\n\
\' and verifies this by printing out a list of constraints on each object\n\
\' before and after removing the constraints.\n\
\'\n\
\' Create a planet that will serve as the constraining object \n\
set oPlanet = CreatePrim( \"Sphere\", \"NurbsSurface\", \"Planet\" )\n\
\' Create a moon to be constrained by the planet and scale it \n\
set oMoon = CreatePrim( \"Sphere\", \"NurbsSurface\", \"Moon\" )\n\
Translate oMoon, -6, 4, -5, siRelative, siView, siObj, siXYZ\n\
Scale oMoon, 0.15, 0.15, 0.15, siAbsolute, siParent, siObj, siXYZ\n\
\' Create a ring to be constrained by the planet and scale it\n\
set oRing = CreatePrim( \"Disc\", \"NurbsSurface\", \"Ring\" )\n\
Scale oRing, 2.3, 1, 2.3, siAbsolute, siParent, siObj, siXYZ\n\
\' Apply a Position constraint on the ring and the moon from the planet.\n\
\' (The small sphere and the disc depend on the position of the larger sphere.) \n\
\' Notice that you have to pass the name of the object instead of its object \n\
\' variable with this command because the command changes that variable to a \n\
\' different type\n\
ApplyCns \"Position\", oMoon.Name &amp; \",\" &amp; oRing.Name, \"Planet\", true\n\
\' Check to see which constraints are currently set \n\
getCnsInfo oPlanet\n\
getCnsInfo oMoon\n\
getCnsInfo oRing\n\
\' Remove the constraint on the moon but keep the constraint on the ring.\n\
\' Here too you have to pass the name of the object instead of the object\n\
\' variable.\n\
RemoveCns oMoon.Name, oPlanet.Name\n\
\' Check to see which constraints remain\n\
getCnsInfo oPlanet\n\
getCnsInfo oMoon\n\
getCnsInfo oRing\n\
\' Display the constraint relationship in all the default views and\n\
\' the default camera view. This is the equivalent of turning on \n\
\' \"Relation\" and \"Relation Info\" in the view visibility options.\n\
SetValue \"Views.*.*.camvis.*constraint*\", True \n\
SetValue \"Camera.camvis.*constraint*\", True\n\
\' This function just saves us time and typing\n\
function getCnsInfo( in_constrained_obj )\n\
	set oFoundCns = in_constrained_obj.Kinematics.Constraints\n\
	if oFoundCns.Count &gt; 0 then\n\
		LogMessage \"Found the following constraints on the \" &amp; in_constrained_obj &amp; \":\"\n\
		for each c in oFoundCns\n\
			LogMessage vbTab &amp; c.Name\n\
		next\n\
	else\n\
		LogMessage \"No constraints found on \" &amp; in_constrained_obj\n\
	end if\n\
end function\n\
\' Output of the above script:\n\
\' \n\
\' ...before removing constraint:\n\
\'INFO : \"No constraints found on Planet\"\n\
\'INFO : \"Found the following constraints on the Moon:\"\n\
\'INFO : \"	Position Cns\"\n\
\'INFO : \"Found the following constraints on the Ring:\"\n\
\'INFO : \"	Position Cns\"\n\
\' \n\
\' ...after removing constraint:\n\
\'INFO : \"No constraints found on Planet\"\n\
\'INFO : \"No constraints found on Moon\"\n\
\'INFO : \"Found the following constraints on the Ring:\"\n\
\'INFO : \"	Position Cns\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/RemoveCnsType.html\">RemoveCnsType</a> <a href=\"#!/url=./si_cmds/RemoveAllCns.html\">RemoveAllCns</a> <a href=\"#!/url=./si_cmds/SIApplyConstraint.html\">SIApplyConstraint</a> <a href=\"#!/url=./si_cmds/SIApplyCns.html\">SIApplyCns</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";