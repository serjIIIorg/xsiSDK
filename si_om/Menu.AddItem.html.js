var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Menu.AddItem</title>\n\
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
</style><link rel=\"stylesheet\" href=\"si_om/css/en.css\" type=\"text/css\" /><script>$(document).ready(function() { yepnope.injectJs(\"./si_om/lib/utils.js\"); });</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Menu.AddItem</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Menu.html\">Menu</a>.AddItem</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Adds a menu item at to end of the menu.\n\
<span class=\"b\">Note:</span> To add a <a href=\"#!/url=./si_om/MenuItem.html\">MenuItem</a> that invokes a command or \n\
callback it is better to use <a href=\"#!/url=./si_om/Menu.AddCommandItem.html\">Menu.AddCommandItem</a> or\n\
<a href=\"#!/url=./si_om/Menu.AddCallbackItem.html\">Menu.AddCallbackItem</a>.\n\
<br /><br /><span class=\"b\">Note:</span>It\'s preferable to use <a href=\"#!/url=./si_om/Menu.AddSubMenu.html\">Menu.AddSubMenu</a> in python for adding sub-menu objects instead of invoking \n\
AddItem with siMenuItemSubmenu. \n\
<br /><br />\n\
Tip: See the C++ API and Python examples for creating a\n\
<a href=\"#!/url=./examples/Addons/SimpleMenu/netview_SimpleMenu.htm\">Simple Menu plug-in</a>\n\
to see this method in action.\n\
<br /><br />Note: This method could return an invalid object in python, use <a href=\"#!/url=./si_om/Menu.AddItem2.html\">Menu.AddItem2</a> instead.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>MenuItem Menu.AddItem( String in_pLabel, siMenuItemStyle in_style );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = Menu.AddItem( Label, Style );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>If the style is siMenuItemSubmenu the newly created <a href=\"#!/url=./si_om/Menu.html\">Menu</a> is returned.\n\
Otherwise the newly created <a href=\"#!/url=./si_om/MenuItem.html\">MenuItem</a> is returned.\n\
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
		<td class=\"name\">Label		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The menu item label.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Style		</td>\n\
		<td><a href=\"#!/url=./si_om/siMenuItemStyle.html\">siMenuItemStyle</a>		</td>\n\
		<td>\n\
The menu item style, for example siMenuItemSubmenu.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/MenuItem.html\">MenuItem</a> <a href=\"#!/url=./si_om/Menu.AddSubMenu.html\">Menu.AddSubMenu</a> <a href=\"#!/url=./si_om/Menu.AddSeparatorItem.html\">Menu.AddSeparatorItem</a> <a href=\"#!/url=./si_om/Menu.AddCommandItem.html\">Menu.AddCommandItem</a> <a href=\"#!/url=./si_om/Menu.AddCallbackItem.html\">Menu.AddCallbackItem</a> <a href=\"#!/url=./si_cmds/callbacks.html\">Definition Callbacks for Menus</a> <a href=\"#!/url=./examples/Addons/SimpleMenu/netview_SimpleMenu.htm\">Simple Menu plug-in example</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";