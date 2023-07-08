var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>GetConstrainedObjects</title>\n\
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
            <h1>GetConstrainedObjects</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">GetConstrainedObjects</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v3.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Finds all the objects constrained to an <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a><br /><br />\n\
Note: This command uses <a href=\"#!/url=./files/OutArgDefined.htm\">output arguments</a>. C# and some \n\
scripting languages (such as JScript, PerlScript and Python) don\'t support arguments passed by reference so you \n\
need to use the best workaround for your situation:\n\
<br /><br />\n\
For scripting languages this command returns an <a href=\"#!/url=./files/ISIVTCollection.htm\">ISIVTCollection</a> \n\
which you can use to get the output arguments. \n\
<br /><br />\n\
For C# you can use the <a href=\"#!/url=./si_om/XSIApplication.ExecuteCommand.html\">XSIApplication.ExecuteCommand</a> method to call this command. ExecuteCommand \n\
packs the output arguments into a C# System.Object containing an <a href=\"#!/url=./files/Array.htm\">Array</a> of the output arguments (see\n\
<a href=\"#!/url=./files/csharp_understand_CallingCommandsfromCSharp.htm\">Calling Commands from C#</a>).\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>GetConstrainedObjects( InputObj, OutputObjs );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">InputObj		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a> or <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a>		</td>\n\
		<td>\n\
Object which is constraining other objects		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">OutputObjs		</td>\n\
		<td><a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a>		</td>\n\
		<td>\n\
Returns the list of constrained objects		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\'	This example demonstrates the GetConstrainedObjects command\n\
\'\n\
NewScene , false\n\
Create2DSkeleton 0, -0.2, 3.0, 0, 2, 0.2, 0, 90, 0, 4\n\
Create2DSkeleton 0, -1, 2.0, 0, 4, 0.1, 0, 90, 0, 4\n\
CreatePrim \"Cube\", \"MeshSurface\"\n\
\' Constrain two bones to the cube\n\
ApplyCns \"Position\", \"eff\", \"cube\"\n\
ApplyCns \"Position\", \"eff1\", \"cube\"\n\
dim objCollection\n\
call GetConstrainedObjects (Selection(0), objCollection)\n\
logmessage \"There are \" &amp; objCollection.Count &amp; _\n\
	\" objects constrained to \" &amp; Selection(0)\n\
logmessage \"The first constrained object is \" &amp; objCollection.Item(0)\n\
logmessage \"The second constrained object is \" &amp; objCollection.Item(1)\n\
\' Expected results:\n\
\'INFO : There are 2 objects constrained to cube\n\
\'INFO : The first constrained object is eff1\n\
\'INFO : The second constrained object is eff</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates the GetConstrainedObjects command\n\
*/\n\
NewScene( null, false ) ;\n\
Create2DSkeleton( 0, -0.2, 3.0, 0, 2, 0.2, 0, 90, 0, 4 );\n\
Create2DSkeleton( 0, -1, 2.0, 0, 4, 0.1, 0, 90, 0, 4 ) ;\n\
CreatePrim( \"Cube\", \"MeshSurface\" ) ;\n\
// Constrain both skeletons to the cube\n\
ApplyCns( \"Position\", \"eff\", \"cube\" ) ;\n\
ApplyCns( \"Position\", \"eff1\", \"cube\" ) ;\n\
// JScript doesn\'t support output arguments but the \n\
// information is also available as a return value\n\
var aRetArgs = GetConstrainedObjects(Selection(0) );\n\
// There is only one output argument so it is\n\
// first in the returned collection\n\
var objCollection = aRetArgs(0) ;\n\
logmessage( \"There are \" + objCollection.Count +\n\
	\" objects constrained to \" + Selection(0) ) ;\n\
logmessage( \"The first constrained object is \" + objCollection.Item(0) ) ;\n\
logmessage( \"The second constrained object is \" + objCollection.Item(1) ) ;\n\
//Expected results:\n\
//INFO : There are 2 objects constrained to cube\n\
//INFO : The first constrained object is eff1\n\
//INFO : The second constrained object is eff</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Constraint.html\">Constraint</a> <a href=\"#!/url=./si_om/Kinematics.Constraints.html\">Kinematics.Constraints</a> <a href=\"#!/url=./si_cmds/ApplyCns.html\">ApplyCns</a> <a href=\"#!/url=./si_cmds/SelectConstrainingObjects.html\">SelectConstrainingObjects</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";