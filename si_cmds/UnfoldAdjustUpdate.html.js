var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>UnfoldAdjustUpdate</title>\n\
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
            <h1>UnfoldAdjustUpdate</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">UnfoldAdjustUpdate</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v7.5</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Updates the texture editor with your changes to the adjustment settings when the \'Live adjusting\' option \n\
is off. This is the scripting equivalent of clicking the Adjust button on the Unfold property editor.\n\
<br /><br />\n\
The adjustment settings try to reduce the surface stretching caused by the unfolding process. \n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oBoolean = UnfoldAdjustUpdate( UnfoldProperty(s) );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">UnfoldProperty(s)		</td>\n\
		<td><a href=\"#!/url=./si_om/Property.html\">Property</a>		</td>\n\
		<td>\n\
The Unfold property to which you want to add the new cut(s).		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to invoke the adjustment settings for an Unfold property\n\
*/\n\
NewScene(null, false);\n\
CreatePrim(\"Grid\", \"MeshSurface\");\n\
UnfoldApply(\"grid\");\n\
// Set the iteration number to 4 and then invoke adjustments\n\
SetValue(\"grid.Unfold.Adjust_iterations\", 4);\n\
UnfoldAdjustUpdate(\"grid.Unfold\");\n\
// Set the iteration number to 2 and then re-invoke adjustments \n\
SetValue(\"grid.Unfold.Adjust_iterations\", 2);\n\
UnfoldAdjustUpdate(\"grid.Unfold\");</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/UnfoldAddToCut.html\">UnfoldAddToCut</a> <a href=\"#!/url=./si_cmds/UnfoldApply.html\">UnfoldApply</a> <a href=\"#!/url=./si_cmds/UnfoldApplySel.html\">UnfoldApplySel</a> <a href=\"#!/url=./si_cmds/UnfoldClearCut.html\">UnfoldClearCut</a> <a href=\"#!/url=./si_cmds/UnfoldPackUpdate.html\">UnfoldPackUpdate</a> <a href=\"#!/url=./si_cmds/UnfoldRemoveFromCut.html\">UnfoldRemoveFromCut</a> <a href=\"#!/url=./si_cmds/UnfoldSelectCut.html\">UnfoldSelectCut</a> <a href=\"#!/url=./si_cmds/UnfoldSetCut.html\">UnfoldSetCut</a> <a href=\"#!/url=./si_cmds/UnfoldUpdate.html\">UnfoldUpdate</a> <a href=\"http://softimage.wiki.softimage.com/xsidocs/texmaps_props_Unfold.htm\">Unfold Property Editor reference</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";