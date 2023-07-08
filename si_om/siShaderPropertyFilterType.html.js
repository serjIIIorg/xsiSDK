var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>siShaderPropertyFilterType</title>\n\
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
            <h1>siShaderPropertyFilterType</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">siShaderPropertyFilterType</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v9.0 (2011)</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>Defines the types of filters when creating a shader parameter definition of type property look-up\n\
(<a href=\"#!/url=./si_om/siShaderParameterDataType.html#siShaderDataTypeProperty\">siShaderDataTypeProperty</a>). When you call the SetAttribute method, pass \n\
<a href=\"#!/url=./si_om/siShaderParameterAttribute.html#siPropertyFilterAttribute\">siPropertyFilterAttribute</a> in the first parameter and one of \n\
these values in the second parameter.</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>siShaderPropertyFilterType.siAnyPropertyFilter                              // 0\n\
siShaderPropertyFilterType.siAnyVertexMapPropertyFilter                     // 1\n\
siShaderPropertyFilterType.siUVPropertyFilter                               // 2\n\
siShaderPropertyFilterType.siCAVPropertyFilter                              // 3\n\
siShaderPropertyFilterType.siWeightMapPropertyFilter                        // 4\n\
siShaderPropertyFilterType.siTextureMapPropertyFilter                       // 5\n\
siShaderPropertyFilterType.siNormalPropertyFilter                           // 6</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<div><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th>Constant		</th>		<th>Value		</th>		<th>Description		</th>	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siAnyPropertyFilter\"> </a>siAnyPropertyFilter		</td>\n\
		<td class=\"example\">0		</td>\n\
		<td>\n\
Any property.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siAnyVertexMapPropertyFilter\"> </a>siAnyVertexMapPropertyFilter		</td>\n\
		<td class=\"example\">1		</td>\n\
		<td>\n\
Any vertex map property.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUVPropertyFilter\"> </a>siUVPropertyFilter		</td>\n\
		<td class=\"example\">2		</td>\n\
		<td>\n\
Texture projection property.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCAVPropertyFilter\"> </a>siCAVPropertyFilter		</td>\n\
		<td class=\"example\">3		</td>\n\
		<td>\n\
Color-at-Vertices property.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siWeightMapPropertyFilter\"> </a>siWeightMapPropertyFilter		</td>\n\
		<td class=\"example\">4		</td>\n\
		<td>\n\
Weightmap property.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTextureMapPropertyFilter\"> </a>siTextureMapPropertyFilter		</td>\n\
		<td class=\"example\">5		</td>\n\
		<td>\n\
Texture map property.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siNormalPropertyFilter\"> </a>siNormalPropertyFilter		</td>\n\
		<td class=\"example\">6		</td>\n\
		<td>\n\
Normal property.		</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
\n\
<h3>Applies To</h3>\n\
<div><p><a href=\"#!/url=./si_om/siShaderParameterAttribute.html#siPropertyFilterAttribute\">siPropertyFilterAttribute</a> <a href=\"#!/url=./si_om/ShaderParamDefOptions.SetAttribute.html\">ShaderParamDefOptions.SetAttribute</a> <a href=\"#!/url=./si_cpp/classXSI_1_1ShaderParamDefOptions.html#SetAttribute\">ShaderParamDefOptions::SetAttribute</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";