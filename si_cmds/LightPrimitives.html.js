var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Light Primitives</title>\n\
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
            <h1>Light Primitives</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Light Primitives</h2>\n\
\n\
<div>\n\
	<p><a href=\"#!/url=./si_om/Light.html\">Light</a> primitive presets can be used with either the <a href=\"#!/url=./si_om/X3DObject.AddPrimitive.html\">X3DObject.AddPrimitive</a> or <a href=\"#!/url=./si_om/X3DObject.AddLight.html\">X3DObject.AddLight</a> methods or one of the light-creation commands (<a href=\"#!/url=./si_cmds/GetPrimLight.html\">GetPrimLight</a>, <a href=\"#!/url=./si_cmds/SIGetPrimLight.html\">SIGetPrimLight</a>). All light types use the same <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/light.html\">set of light parameters</a> configured differently.</p>\n\
<div class=\"tip\">\n\
<table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<td class=\"label\">Note</td>\n\
		<td class=\"emph\">See <a href=\"#!/url=./si_cmds/PrimPreset.html\">Primitive Presets</a> for list of the possible types of primitives. Also see <a href=\"#!/url=./si_cmds/AlphabeticalListOfAllPrimitives.html#\">Alphabetical Listing of All Primitive Presets</a> for a complete list of available primitive types.</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
</div>\n\
\n\
<div><table class=\"values\">\n\
	<tr>\n\
		<th>Preset</th>\n\
		<th>Primitives</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Infinite</td>\n\
		<td><a name=\"Infinite\"></a>Infinite lights simulate light sources that are infinitely far from objects in the scene. There is no position associated with an infinite light, only a direction. All objects are lit by parallel light rays. The scene\'s default light is infinite.<br /><br />		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Light_Box</td>\n\
		<td><a name=\"Light_Box\"></a>Light Box lights simulate a light diffused with a white fabric, like a studio\'s light box. The light and shadows created by this light are very soft. Speculars are still visible, but noticeably weaker. The box can be manipulated to shape the projected light.<br /><br />		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">LightInfinite</td>\n\
		<td><a name=\"LightInfinite\"></a>See \"Infinite\".		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">LightPoint</td>\n\
		<td><a name=\"LightPoint\"></a>See \"Point\".		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">LightSpot</td>\n\
		<td><a name=\"LightSpot\"></a>See \"Spot\".		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">LightSun</td>\n\
		<td><a name=\"LightSun\"></a>See \"Sun\".		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Neon</td>\n\
		<td><a name=\"Neon\"></a>Neon lights simulate real-world neon lights. They are essentially point lights with their settings and shapes altered to resemble neon or fluorescent tubes. The manipulators can be used to change the tube into any rectangular or square shape.<br /><br />		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Point</td>\n\
		<td><a name=\"Point\"></a>Point lights casts rays in all directions from the position of the light. They are similar to light bulbs, whose light rays emanate from the bulb in all directions.<br /><br />		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Spot</td>\n\
		<td><a name=\"Spot\"></a>Spot lights cast rays in a cone-shape, simulating real spotlights. This is useful for lighting a specific object or area. The manipulators can be used to edit the light cone\'s length, width, and falloff points. See the <a href=\"#!/url=./si_cmds/SIGetPrimSpotLight.html\">SIGetPrimSpotLight</a> command.<br /><br />		</td>\n\
	</tr>\n\
</table>\n\
<br />\n\
\n\
</div>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";