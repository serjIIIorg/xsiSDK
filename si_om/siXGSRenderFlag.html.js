var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>siXGSRenderFlag</title>\n\
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
            <h1>siXGSRenderFlag</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">siXGSRenderFlag</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>XGS render flags for the \n\
<a href=\"#!/url=./files/cus_graphicsequencer.htm\">Graphic Sequencer</a>.</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>siXGSRenderFlag.siRenderDefault                                             // 2\n\
siXGSRenderFlag.siRenderUnsorted                                            // 4\n\
siXGSRenderFlag.siRenderSorted                                              // 8\n\
siXGSRenderFlag.siRenderSortedNear                                          // 16\n\
siXGSRenderFlag.siRenderSortedCenter                                        // 32\n\
siXGSRenderFlag.siRenderSortedFar                                           // 64\n\
siXGSRenderFlag.siRenderSortFront                                           // 128\n\
siXGSRenderFlag.siRenderSelected                                            // 256\n\
siXGSRenderFlag.siTexEnvReplace                                             // 512\n\
siXGSRenderFlag.siRenderNoRTSOverride                                       // 1024\n\
siXGSRenderFlag.siRenderNoAttributes                                        // 2048</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<div><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th>Constant		</th>		<th>Value		</th>		<th>Description		</th>	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRenderDefault\"> </a>siRenderDefault		</td>\n\
		<td class=\"example\">0x00000002		</td>\n\
		<td>\n\
Render normally.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRenderUnsorted\"> </a>siRenderUnsorted		</td>\n\
		<td class=\"example\">0x00000004		</td>\n\
		<td>\n\
Render unsorted objects.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRenderSorted\"> </a>siRenderSorted		</td>\n\
		<td class=\"example\">0x00000008		</td>\n\
		<td>\n\
Render sorted objects (back to front).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRenderSortedNear\"> </a>siRenderSortedNear		</td>\n\
		<td class=\"example\">0x00000010		</td>\n\
		<td>\n\
Render objects sorted by nearest point in bounding box.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRenderSortedCenter\"> </a>siRenderSortedCenter		</td>\n\
		<td class=\"example\">0x00000020		</td>\n\
		<td>\n\
Render objects sorted by center of bounding box.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRenderSortedFar\"> </a>siRenderSortedFar		</td>\n\
		<td class=\"example\">0x00000040		</td>\n\
		<td>\n\
Render objects sorted by farthest point of bounding box.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRenderSortFront\"> </a>siRenderSortFront		</td>\n\
		<td class=\"example\">0x00000080		</td>\n\
		<td>\n\
Sorted objects are rendered from front to back (instead of the default back to front).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRenderSelected\"> </a>siRenderSelected		</td>\n\
		<td class=\"example\">0x00000100		</td>\n\
		<td>\n\
Render selected objects.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTexEnvReplace\"> </a>siTexEnvReplace		</td>\n\
		<td class=\"example\">0x00000200		</td>\n\
		<td>\n\
Replace texture.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRenderNoRTSOverride\"> </a>siRenderNoRTSOverride		</td>\n\
		<td class=\"example\">0x00000400		</td>\n\
		<td>\n\
Ignore realtime shader overrides when rendering.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRenderNoAttributes\"> </a>siRenderNoAttributes		</td>\n\
		<td class=\"example\">0x00000800		</td>\n\
		<td>\n\
Don\'t display mesh attributes (vertices/edges/etc)		</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
\n\
<h3>Applies To</h3>\n\
<div><p><a href=\"#!/url=./si_cpp/classXSI_1_1CGraphicSequencer.html#RenderSceneUsingMaterial\">CGraphicSequencer::RenderSceneUsingMaterial</a> <a href=\"#!/url=./si_cpp/classXSI_1_1CGraphicSequencer.html#RenderSceneUsingMode\">CGraphicSequencer::RenderSceneUsingMode</a></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cpp/classXSI_1_1CGraphicSequencer.html\">CGraphicSequencer</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";