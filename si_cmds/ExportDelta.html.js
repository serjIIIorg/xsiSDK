var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ExportDelta</title>\n\
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
            <h1>ExportDelta</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ExportDelta</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v6.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Exports a model delta object into a specific file (usually something like \n\
\"Deltas/modelname.delta\"). This file can be used later as external storage or when \n\
importing a delta.<br /><br />\n\
A Delta is basically a \'diff\' or list of modifications made to the components of a \n\
reference model. You can specify which modifications should be tracked in each delta\n\
(eg., track only expressions and constraints vs. tracking all animation, etc.). Each\n\
model can only have one delta associated to it and each delta contains the name of\n\
the model to which it is associated.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>ExportDelta( Delta, FileName );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">Delta		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 The model delta to be exported.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">FileName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 The filename where to export the model delta.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to export a model delta. It also shows how to find a model\'s delta.\n\
*/\n\
NewScene( null, false );\n\
var oX3DO = CreatePrim( \"Sphere\", \"MeshSurface\" );\n\
var oMdl = CreateModel( oX3DO, \"TestModel\" )(0);\n\
var sMdlPath = XSIUtils.BuildPath( Application.InstallationPath(siFactoryPath), \"Data\", \"XSI_SAMPLES\", \"Models\", \"Test.emdl\" );\n\
ConvertToRefModel( oMdl, sMdlPath );\n\
Translate( oX3DO, -8.21651117203418, 4.54207454997213, -0.454207454997213, siRelative, siView, siObj, siXYZ );\n\
// Export the delta under its Reference Model \n\
var sDeltaPath = XSIUtils.BuildPath( Application.InstallationPath(siFactoryPath), \"Data\", \"XSI_SAMPLES\", \"Deltas\", \"Test.delta\" );\n\
ExportDelta( oMdl.Name + \".Delta\", sDeltaPath );</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Delta.html\">Delta</a> <a href=\"#!/url=./si_cmds/ImportDelta.html\">ImportDelta</a> <a href=\"#!/url=./si_cmds/ImportReferencedDelta.html\">ImportReferencedDelta</a> <a href=\"#!/url=./si_cmds/CommitToReference.html\">CommitToReference</a> <a href=\"#!/url=./si_cmds/ConvertToRefModel.html\">ConvertToRefModel</a> <a href=\"#!/url=./si_cmds/ImportModel.html\">ImportModel</a> <a href=\"#!/url=./si_cmds/ExportModel.html\">ExportModel</a> <a href=\"#!/url=./si_cmds/ApplyDelta.html\">ApplyDelta</a> <a href=\"#!/url=./si_cmds/RemoveUnusedDeltas.html\">RemoveUnusedDeltas</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";