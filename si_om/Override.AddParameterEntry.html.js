var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Override.AddParameterEntry</title>\n\
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
            <h1>Override.AddParameterEntry</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Override.html\">Override</a>.AddParameterEntry</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v7.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Adds a new entry to override the input parameter and returns the new overriding parameter.\n\
<br /><br />\n\
Note: Adding an entry to the override doesn\'t activate the override parameter automatically, \n\
you must first set its value with the <a href=\"#!/url=./si_cmds/SetValue.html\">SetValue</a> command. \n\
<a href=\"#!/url=./si_om/Parameter.Value.html\">Parameter.Value</a> will not activate the override parameter.\n\
<br /><br />Note: This method could return an invalid object in python, use <a href=\"#!/url=./si_om/Override.AddParameterEntry2.html\">Override.AddParameterEntry2</a> instead.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Parameter Override.AddParameterEntry( Parameter in_pObj );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = Override.AddParameterEntry( Parameter );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/Parameter.html\">Parameter</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Parameter		</td>\n\
		<td><a href=\"#!/url=./si_om/Parameter.html\">Parameter</a>		</td>\n\
		<td>\n\
The parameter to override.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#\n\
# This example demonstrates how to add entries to an override property\n\
#\n\
from win32com.client import constants as c\n\
app = Application\n\
log = app.LogMessage\n\
app.NewScene(None, 0);\n\
pointLight = app.GetPrimLight(\"Point.Preset\", \"Point\")\n\
# Create/fill the override \n\
override = pointLight.AddProperty(\"Override\", 0, \"PointOverride\" );\n\
posx = pointLight.Kinematics.Local.posx\n\
posxOverride = override.AddParameterEntry2( posx )\n\
app.SetValue( posxOverride.FullName, -4.0 )\n\
softLightColor = pointLight.Shaders(\"soft_light\").Color\n\
softLightColor.Red = 0.5\n\
softLightColor.Blue = 0.5\n\
softLightColorOverride = override.AddParameterEntry2( softLightColor )\n\
app.SIApplyShaderToCnxPoint( \"Shaders\\\\Texture\\\\Color_Channels\\\\RGBA_combine.Preset\", softLightColorOverride )\n\
log(\"* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * ** \")\n\
log(\"posxOverride : \" + posxOverride.FullName );\n\
log(\"posxOverride value: \" + str(posxOverride.Value) )\n\
log(\"posxOverride original value: \" + str(posxOverride.OriginalValue) )\n\
log(\"* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * ** \")\n\
log(\"softLightColorOverride : \" + softLightColorOverride.FullName );\n\
log(\"softLightColorOverride value: \" + str(softLightColorOverride.Value) )\n\
log(\"softLightColorOverride source: \" + str(softLightColorOverride.Source) )\n\
log(\"softLightColorOverride original value: \" + str(softLightColorOverride.OriginalValue) )\n\
# Output\n\
# INFO : * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * ** \n\
# INFO : posxOverride : Point.PointOverride.posx\n\
# INFO : posxOverride value: -4.0\n\
# INFO : posxOverride original value: 0.0\n\
# INFO : * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * ** \n\
# INFO : softLightColorOverride : Point.PointOverride.light-soft_light-color\n\
# INFO : softLightColorOverride value: light-soft_light-color\n\
# INFO : softLightColorOverride source: Point.PointOverride.RGBA_combine\n\
# INFO : softLightColorOverride original value: &lt;win32com.gen_py.Softimage Object Model Library v1.5.Color instance at 0x480184680&gt;</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Override.RemoveParameterEntry.html\">Override.RemoveParameterEntry</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";