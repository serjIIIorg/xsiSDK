var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>PasteUVW</title>\n\
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
            <h1>PasteUVW</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">PasteUVW</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>Pastes the UVs that are in the clipboard onto the specified texture projection. If the UVs are copied from one texture projection and pasted onto another then the texture coordinates are set based on the indices of the source selection. If they are pasted on the same texture projection then they are scaled and translated so their bounding boxes match (if possible).</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>PasteUVW( TextureProjection, [SubComp], [PasteUVsMode] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">TextureProjection		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 The target texture projection.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SubComp		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 The target cluster of sampled points or tagged sampled points 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PasteUVsMode		</td>\n\
		<td><a href=\"#!/url=./si_om/siPasteUVsMode.html\">siPasteUVsMode</a>		</td>\n\
		<td>\n\
This argument controls how UVs copied from one object are pasted onto\n\
a different object with the same topology.<br /><br />\n\
The default behaviour (siDefaultPasteUVsMode) tries to match UVs based on vertex and\n\
polygon ordering. If that fails the source UV indices and then the target UV indices\n\
will be used in that order.<br /><br />\n\
Specifying siPasteUVsUsingSourceIndices or siPasteUVsUsingTargetIndices will paste\n\
UVs using source or target indices only.\n\
			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
<a href=\"#!/url=./si_om/siPasteUVsMode.html#siDefaultPasteUVsMode\">siDefaultPasteUVsMode</a>			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' This example demonstrates how to copy the UVs from,\n\
\' one object to an other.\n\
NewScene , false\n\
\' create a sphere and generate a texture projection for it\n\
\' using the GenerateUniqueUVs command.\n\
CreatePrim \"Sphere\", \"MeshSurface\", \"Sphere1\"\n\
GenerateUniqueUVs \"Sphere1\", \"Texture_Projection\"\n\
MakeLocal \"Sphere1.Scene_Material\", siDefaultPropagation\n\
BlendInTextureLayersInsp , , 2, True, siReplaceAndNoBlendInTextureLayers\n\
Translate , 9.0, 0.0, 0.0, siRelative, siView, siObj, siXYZ, , , , , , , , , , 0\n\
\' create a second sphere and generate a default cubic projection\n\
\' for it\n\
CreatePrim \"Sphere\", \"MeshSurface\", \"Sphere2\"\n\
CreateProjection \"Sphere2\", siTxtUV, siTxtDefaultCubic, \"Texture_Support\", \"Texture_Projection\", True, siRelDefault\n\
MakeLocal \"Sphere2.Scene_Material\", siDefaultPropagation\n\
BlendInTextureLayersInsp , , 2, True, siReplaceAndNoBlendInTextureLayers\n\
\' now, copy the UVs from the Sphere1 to the Sphere2\n\
CopyUVW \"Sphere1.polymsh.cls.Texture_Coordinates_AUTO.Texture_Projection\"\n\
PasteUVW \"Sphere2.polymsh.cls.Texture_Coordinates_AUTO.Texture_Projection\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";