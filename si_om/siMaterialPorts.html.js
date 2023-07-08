var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>siMaterialPorts</title>\n\
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
            <h1>siMaterialPorts</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">siMaterialPorts</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>Port choice for the <a href=\"#!/url=./si_cmds/SIGetMaterialShader.html\">SIGetMaterialShader</a> command</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>siMaterialPorts.siMaterialPortSurface                                       // 1\n\
siMaterialPorts.siMaterialPortVolume                                        // 2\n\
siMaterialPorts.siMaterialPortEnvironment                                   // 3\n\
siMaterialPorts.siMaterialPortContour                                       // 4\n\
siMaterialPorts.siMaterialPortDisplacement                                  // 5\n\
siMaterialPorts.siMaterialPortShadow                                        // 6\n\
siMaterialPorts.siMaterialPortPhoton                                        // 7\n\
siMaterialPorts.siMaterialPortPhotonVol                                     // 8\n\
siMaterialPorts.siMaterialPortBumpMap                                       // 9</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<div><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th>Constant		</th>		<th>Value		</th>		<th>Description		</th>	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMaterialPortSurface\"> </a>siMaterialPortSurface		</td>\n\
		<td class=\"example\">1		</td>\n\
		<td>\n\
Surface shader port		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMaterialPortVolume\"> </a>siMaterialPortVolume		</td>\n\
		<td class=\"example\">2		</td>\n\
		<td>\n\
Volume shader port		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMaterialPortEnvironment\"> </a>siMaterialPortEnvironment		</td>\n\
		<td class=\"example\">3		</td>\n\
		<td>\n\
Environment shader port		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMaterialPortContour\"> </a>siMaterialPortContour		</td>\n\
		<td class=\"example\">4		</td>\n\
		<td>\n\
Contour shader port		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMaterialPortDisplacement\"> </a>siMaterialPortDisplacement		</td>\n\
		<td class=\"example\">5		</td>\n\
		<td>\n\
Displacement shader port		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMaterialPortShadow\"> </a>siMaterialPortShadow		</td>\n\
		<td class=\"example\">6		</td>\n\
		<td>\n\
Shadow shader port		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMaterialPortPhoton\"> </a>siMaterialPortPhoton		</td>\n\
		<td class=\"example\">7		</td>\n\
		<td>\n\
Photon shader port		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMaterialPortPhotonVol\"> </a>siMaterialPortPhotonVol		</td>\n\
		<td class=\"example\">8		</td>\n\
		<td>\n\
Photon volume shader port		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMaterialPortBumpMap\"> </a>siMaterialPortBumpMap		</td>\n\
		<td class=\"example\">9		</td>\n\
		<td>\n\
Bump map shader port		</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
\n\
<h3>Applies To</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/SIGetMaterialShader.html\">SIGetMaterialShader</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";