var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SIGetShaderOnCnxPoint</title>\n\
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
            <h1>SIGetShaderOnCnxPoint</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SIGetShaderOnCnxPoint</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Connects the shader to the specified connection point.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = SIGetShaderOnCnxPoint( InputObj );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns the <a href=\"#!/url=./si_om/Shader.html\">Shader</a> object.</p></div>\n\
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
 Shader connection point. 		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' create objects for example. \n\
NewScene , false\n\
CreatePrim \"Cube\", \"MeshSurface\"\n\
ApplyShader\n\
\' Connect clear glass shader to material\'s surface\n\
SIApplyShaderToCnxPoint InstallationPath(siFactoryPath) &amp; \"\\Data\\DSPresets\\Shaders\\Material\\soft3d\\Fire.Preset\", \"cube.Material.surface\"\n\
set shader = SIGetShaderOnCnxPoint(  \"cube.Material.surface\" )\n\
logmessage \"shader connected to cube.Material.surface: \" &amp; shader\n\
\'INFO : \"shader connected to cube.Material.surface: cube.Material.Fire\"</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example creates a sphere, applies a lambert shader to it, prints out\n\
\' the list of connection points to that shader, connects the toon shader \n\
\' to the surface and shadow connection points and then prints the updated list.\n\
\'\n\
\' Create the sphere to which the shader will be connected\n\
set oSphere = CreatePrim( \"Sphere\", \"NurbsSurface\" )\n\
\' Apply a lambert shader to instantiate the material\n\
SIApplyShader InstallationPath( siFactoryPath ) _\n\
				&amp; \"\\Data\\DSPresets\\Shaders\\Material\\Lambert.Preset\", _\n\
				oSphere, \"Christopher\" \n\
\' Log the name of the default shader connected to the material Surface \n\
\' connection point\n\
set oShader = SIGetShaderOnCnxPoint(  \"sphere.material.Surface\" )\n\
\' Print lambert shader info \n\
printShaderInfo oShader\n\
\' This is a convenience routine that prints information about the shader\n\
sub printShaderInfo( in_shader )\n\
	\' From the shader object you can get the material it belongs to\n\
	set oMaterial = in_shader.Owners(0)\n\
	\' Use the material to return the parameters that are connected and\n\
	\' print out their names\n\
	for each p in oMaterial.Parameters\n\
		if TypeName( p.Source ) &lt;&gt; \"Nothing\" then\n\
			LogMessage p.ScriptName &amp; \" is connected to \" &amp; p.Source.Name\n\
		end if\n\
	next\n\
end sub\n\
\' Output of the above script:\n\
\'INFO : \"surface is connected to Christopher\"\n\
\'INFO : \"shadow is connected to Christopher\"\n\
\'INFO : \"Photon is connected to Christopher\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/SIApplyShaderToCnxPoint.html\">SIApplyShaderToCnxPoint</a> <a href=\"#!/url=./si_cmds/RemoveShaderFromCnxPoint.html\">RemoveShaderFromCnxPoint</a> <a href=\"#!/url=./si_cmds/RemoveAllShadersFromCnxPoint.html\">RemoveAllShadersFromCnxPoint</a> <a href=\"#!/url=./si_cmds/SIConnectShaderToCnxPoint.html\">SIConnectShaderToCnxPoint</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";