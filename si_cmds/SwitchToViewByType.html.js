var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SwitchToViewByType</title>\n\
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
            <h1>SwitchToViewByType</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SwitchToViewByType</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Makes the specified view in a docked layout visible if it\'s hidden. For example, \n\
you can use this command to change the main toolbar from the Toolbar Panel to \n\
the Weight Paint Panel or the Palettes Panel.<br /><br />\n\
You specify the type of the view (you can get it from the <a href=\"#!/url=./si_om/SIObject.Type.html\">SIObject.Type</a> \n\
property of the <a href=\"#!/url=./si_om/View.html\">View</a> object) to identify it. Alternatively, you \n\
can use the <a href=\"#!/url=./si_cmds/SwitchToView.html\">SwitchToView</a> command, which allows you to pick from \n\
multiple instances of one view type by using its <a href=\"#!/url=./si_om/SIObject.Name.html\">SIObject.Name</a> instead.\n\
Note: This command cannot switch between any of the toolbar menus on the Toolbar \n\
Panel. However, you can use this command with the Type argument set to \"Toolbar \n\
Panel\" to open the toolbar panel and then use the <a href=\"#!/url=./si_cmds/SwitchToolbar.html\">SwitchToolbar</a> \n\
command to switch between toolbar menus (Model, Animate, Render, Simulate, and Hair).\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>SwitchToViewByType( ViewType );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">ViewType		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Type of the view to display (see the <a href=\"#!/url=./si_cmds/OpenView.html\">OpenView</a> command for a list of possible values). 		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' \n\
\' This example opens the Palettes Panel, then the Toolbar Panel, then switches\n\
\' to the Simulate and then Hair menus on that panel. (It happens so fast\n\
\' that you can\'t really see it well in the UI, but you can run each line\n\
\' individually to see each result.)\n\
\' \n\
SwitchToViewByType \"Palettes\"\n\
SwitchToViewByType \"Toolbar Panel\"\n\
SwitchToolbar 4\n\
SwitchToolbar 5</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/SwitchToView.html\">SwitchToView</a> <a href=\"#!/url=./si_cmds/OpenView.html\">OpenView</a> <a href=\"#!/url=./si_cmds/SwitchToolbar.html\">SwitchToolbar</a> <a href=\"#!/url=./si_cmds/OpenXSIExplorer.html\">OpenXSIExplorer</a> <a href=\"#!/url=./si_cmds/OpenAnimationEditor.html\">OpenAnimationEditor</a> <a href=\"#!/url=./si_cmds/OpenTransientExplorer.html\">OpenTransientExplorer</a> <a href=\"#!/url=./si_cmds/OpenNetView.html\">OpenNetView</a> <a href=\"#!/url=./si_om/Layout.CreateView.html\">Layout.CreateView</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";