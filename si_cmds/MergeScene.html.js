var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MergeScene</title>\n\
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
            <h1>MergeScene</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">MergeScene</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Merges a Softimage scene into the current scene. Creates a new model \n\
to hold the merged scene. The new model is selected and inspected.<br /><br />\n\
This command is accessed through the main menu under File->Merge.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = MergeScene( [FileName], [Name], [Parent], [ShareOptions] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns the new <a href=\"#!/url=./si_om/Model.html\">Model</a> object containing all the elements of the merged scene.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">FileName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 File name of the scene file to load 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
File browser pops up			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Name of the new model created 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Scene file name			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Parent		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Parent of the model created 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Scene root			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ShareOptions		</td>\n\
		<td><a href=\"#!/url=./si_om/siImportShareOptions.html\">siImportShareOptions</a>		</td>\n\
		<td>\n\
\n\
		Bit field values of type <a href=\"#!/url=./files/Integer.htm\">Integer</a> that specify the different options \n\
		for sharing objects when merging a scene.<br /><br />\n\
		Share the image clips when importing the model. Image clips are identical if they \n\
		refer to the same image source and all their parameters are equal, therefore FCurves \n\
		on the parameters are ignored for the comparaison. <br /><br />\n\
		Referenced models share only image clips that are locked by referenced models, or if \n\
		the image clip is unused. Standard models share only imageclips that are not locked \n\
		at all.<br /><br />\n\
		Note that the image sources are always shared when importing a model.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siImportShareOptionsAll			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' Demonstrates how to use the MergeScene command to merge the current\n\
\' scene with another scene file. \n\
\'\n\
NewScene , False\n\
\' First create an object in the new scene.\n\
SICreateModel , \"MyModel\"\n\
SICreateModel , \"MergeRoot\", \"\"\n\
CreatePrim \"Torus\", \"MeshSurface\", \"MyTorus\", \"MyModel\"\n\
\' Now merge the scene with a sample scene.\n\
scene_file = XSIUtils.BuildPath( _\n\
	Application.InstallationPath(siFactoryPath), _\n\
	\"Data\", \"XSI_SAMPLES\", \"Scenes\", \"Rendering\", \"Rendertree_Light_Rainbow.scn\" _\n\
)\n\
MergeScene scene_file, \"Rainbow\", \"MergeRoot\"\n\
RecursiveCheck Application.ActiveSceneRoot, \"\"\n\
\'---------------------------------------------------------\n\
\' Output from this script:\n\
\' INFO : Scene_Root\n\
\' INFO : ...MyModel\n\
\' INFO : ...MergeRoot\n\
\' INFO : ......Rainbow\n\
\'---------------------------------------------------------\n\
\' Convenience to write model hierarchy using visual cues \n\
sub RecursiveCheck( in_root, in_indent ) \n\
	Application.LogMessage in_indent &amp; in_root.Name\n\
	for each mdl in in_root.Models(False)\n\
		RecursiveCheck mdl, in_indent &amp; \"...\"\n\
	next\n\
end sub</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/OpenScene.html\">OpenScene</a> <a href=\"#!/url=./si_cmds/NewScene.html\">NewScene</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";