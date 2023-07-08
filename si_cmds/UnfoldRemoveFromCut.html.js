var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>UnfoldRemoveFromCut</title>\n\
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
            <h1>UnfoldRemoveFromCut</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">UnfoldRemoveFromCut</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v7.5</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Removes the specified edge list(s) from the Unfold <a href=\"#!/url=./si_om/Property.html\">Property</a> cutting line.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oBoolean = UnfoldRemoveFromCut( UnfoldProperty, [EdgeList(s)] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns a <a href=\"#!/url=./files/Boolean.htm\">Boolean</a> reporting whether or not the command was successful.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">UnfoldProperty		</td>\n\
		<td><a href=\"#!/url=./si_om/Property.html\">Property</a>		</td>\n\
		<td>\n\
The Unfold property from which you want to remove the new cut(s).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">EdgeList(s)		</td>\n\
		<td><a href=\"#!/url=./files/listexpr.htm\">List of edges</a> or <a href=\"#!/url=./si_om/EdgeCollection.html\">EdgeCollection</a>		</td>\n\
		<td>\n\
Edges to be removed from the cutting line definition.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
If not specified, the current selection is used.			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to remove edges from the\n\
	cutting line of an Unfold property\n\
*/\n\
NewScene(null, false);\n\
var g = CreatePrim(\"Grid\", \"MeshSurface\");\n\
// Set up an Unfold property on the grid with a cutting line\n\
UnfoldApply(\"grid\");\n\
var up = g.Properties(\"Unfold\");\n\
UnfoldSetCut(up, \"grid.edge[14,34,51,68,71,73,75]\");\n\
LogCuts(up);\n\
// Remove 2 edges from the cutting line definition\n\
UnfoldRemoveFromCut(up, \"grid.edge[73,75]\");\n\
LogCuts(up);\n\
// -------------------------\n\
//\n\
//	Expected results\n\
//\n\
// INFO : grid cutting line: grid.edge[14,34,51,68,71,73,75]\n\
// INFO : grid cutting line: grid.edge[14,34,51,68,71]\n\
// -------------------------\n\
//\n\
//	Helper function\n\
//\n\
function LogCuts( in_prop )\n\
{\n\
	var a = Application;\n\
	UnfoldSelectCut(in_prop);\n\
	if (a.Selection.Count) { \n\
		a.LogMessage(in_prop.Parent3DObject.Name + \" cutting line: \" + a.Selection(0)); \n\
	} else { \n\
		a.LogMessage(in_prop.Parent3DObject.Name + \" cutting line: [empty]\"); \n\
	}\n\
	\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/UnfoldAddToCut.html\">UnfoldAddToCut</a> <a href=\"#!/url=./si_cmds/UnfoldAdjustUpdate.html\">UnfoldAdjustUpdate</a> <a href=\"#!/url=./si_cmds/UnfoldApply.html\">UnfoldApply</a> <a href=\"#!/url=./si_cmds/UnfoldApplySel.html\">UnfoldApplySel</a> <a href=\"#!/url=./si_cmds/UnfoldClearCut.html\">UnfoldClearCut</a> <a href=\"#!/url=./si_cmds/UnfoldPackUpdate.html\">UnfoldPackUpdate</a> <a href=\"#!/url=./si_cmds/UnfoldSelectCut.html\">UnfoldSelectCut</a> <a href=\"#!/url=./si_cmds/UnfoldSetCut.html\">UnfoldSetCut</a> <a href=\"#!/url=./si_cmds/UnfoldUpdate.html\">UnfoldUpdate</a> <a href=\"http://softimage.wiki.softimage.com/xsidocs/texmaps_props_Unfold.htm\">Unfold Property Editor reference</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";