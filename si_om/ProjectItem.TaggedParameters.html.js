var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ProjectItem.TaggedParameters</title>\n\
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
            <h1>ProjectItem.TaggedParameters</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/ProjectItem.html\">ProjectItem</a>.TaggedParameters</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns a collection of <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> objects containing all parameters \n\
tagged by the specified tag. This function can return local as well as nested parameters. \n\
<br /><br />\n\
The tagging system helps you set a collection of parameters. Tags are persisted \n\
with a scene, so you never lose them. You can use this method to get a set of parameters \n\
in order to pass it to a command.\n\
<br /><br />\n\
Note: Because this method returns all tagged parameters for the object and its children, \n\
use this method carefully on models (such as the scene root).\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>ParameterCollection ProjectItem.TaggedParameters( siTags, Boolean );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = ProjectItem.TaggedParameters( [Tag], [Local] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/ParameterCollection.html\">ParameterCollection</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Tag		</td>\n\
		<td><a href=\"#!/url=./si_om/siTags.html\">siTags</a>		</td>\n\
		<td>\n\
 \n\
		The tags to look for. This can be a combination of tags. When a parameter \n\
		supports at least one of the tags specified in an argument, it is added to \n\
		the return list.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
 siTagAll 			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Local		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 \n\
		Specifies whether the tag to check is local to the object or not. If \n\
		true then all tagged parameters that come from propagated properties or \n\
		from intermediate nodes are ignored (referenced parameters). Intermediate \n\
		nodes are nested under the object but are not necessary owned by the object \n\
		itself. For instance, the camera object nested under a Texture_Projection_Def \n\
		property is not considered unless the target object is the projection \n\
		property itself. When the argument is set to false (default), all parameters \n\
		are considered.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
 False 			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">CreatePrim( \"Cone\", \"MeshSurface\" );\n\
var oGeom = GetValue( \"Cone.polymsh.geom\" );\n\
var oParam1 = oGeom.Parameters(\"subdivu\");\n\
var oParam2 = oGeom.Parameters(\"subdivv\");\n\
var oObj = GetValue( \"Cone\" );\n\
// Set the Tags\n\
oParam1.Tags = siTag2 + siTag6;\n\
oParam2.Tags = siTag6;\n\
// Get the parameters with siTag2 (subdivu)\n\
Application.LogMessage( \"tag2 parameters with local flag on:\" )\n\
var oList = oObj.TaggedParameters( siTag2, true );\n\
// Nothing will be displayed because we checked only the cone object\n\
for ( i=0; i&lt;oList.Count; i++ )\n\
{\n\
	Application.LogMessage( oList.Item(i) );\n\
}\n\
// Get the parameters with siTag2 (subdivu)\n\
Application.LogMessage( \"tag2 parameters with local flag off:\" )\n\
var oList = oObj.TaggedParameters( siTag2, false );\n\
for ( i=0; i&lt;oList.Count; i++ )\n\
{\n\
	Application.LogMessage( oList.Item(i) );\n\
}\n\
// Now get the parameters with siTag6 (subdivu and subdivv)\n\
Application.LogMessage( \"tag6 parameters with local flag off:\" )\n\
var oList = oGeom.TaggedParameters( siTag6, false );\n\
for ( i=0; i&lt;oList.Count; i++ )\n\
{\n\
	Application.LogMessage( oList.Item(i) );\n\
}\n\
// Remove all tags\n\
oParam1.Tags = siTagNone\n\
oParam2.Tags = siTagNone</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Parameter.Tags.html\">Parameter.Tags</a> <a href=\"#!/url=./si_cmds/Tag.html\">Tag</a> <a href=\"#!/url=./si_cmds/Untag.html\">Untag</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";