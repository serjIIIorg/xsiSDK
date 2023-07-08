var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ShaderArrayParameter</title>\n\
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
            <h1>ShaderArrayParameter</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ShaderArrayParameter</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_ShaderArrayParameter\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1ShaderArrayParameter.html\">ShaderArrayParameter</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\"><a href=\"#!/url=./si_om/Parameter.html\">Parameter</a></p>\n\
<p class=\"level3\"><a href=\"#!/url=./si_om/ShaderParameter.html\">ShaderParameter</a></p>\n\
<p class=\"level4\">ShaderArrayParameter</p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v9.0 (2011)</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Represents an array parameter for a <a href=\"#!/url=./si_om/Shader.html\">Shader</a>. An array parameter is a special kind of \n\
<a href=\"#!/url=./si_om/ShaderParameter.html\">ShaderParameter</a> which contains a set of <a href=\"#!/url=./si_om/ShaderParameter.html\">ShaderParameter</a> objects. These \n\
types of parameters are useful for supporting a dynamic number of instances of parameters. For example, the \n\
<a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_March_Fractal_vol_1_0.html\">Volume Effects</a> shader includes an \n\
array parameter of light references labeled \'scatter_lights_input\' that allows you to add any number of lights.\n\
<br /><br />\n\
You get this object when you iterate over the <a href=\"#!/url=./si_om/ParameterCollection.html\">ParameterCollection</a> property (via\n\
Shader.Parameters) when the collection item is a shader array parameter.\n\
<br /><br />\n\
These type of parameters can be defined using the <a href=\"#!/url=./si_om/ShaderArrayParamDef.html\">ShaderArrayParamDef</a> interface.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderArrayParameter.Add.html\">Add</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.AddCustomOp.html\">AddCustomOp</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.AddExpression.html\">AddExpression</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.AddFCurve.html\">AddFCurve</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.AddFCurve2.html\">AddFCurve2</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.AddScriptedOp.html\">AddScriptedOp</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.AddScriptedOpFromFile.html\">AddScriptedOpFromFile</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.AnimatedParameters.html\">AnimatedParameters</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderArrayParameter.Clear.html\">Clear</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Connect.html\">Connect</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.ConnectFromFile.html\">ConnectFromFile</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.ConnectFromFile2.html\">ConnectFromFile2</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.ConnectFromPreset.html\">ConnectFromPreset</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.ConnectFromPreset2.html\">ConnectFromPreset2</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.ConnectFromProgID.html\">ConnectFromProgID</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.ConnectFromProgID2.html\">ConnectFromProgID2</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Disconnect.html\">Disconnect</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Enable.html\">Enable</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.GetInstanceValue.html\">GetInstanceValue</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.GetValue2.html\">GetValue2</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.IsAnimated.html\">IsAnimated</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">IsClassOf</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsEqualTo.html\">IsEqualTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.IsLocked.html\">IsLocked</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.IsSupportedInstanceValue.html\">IsSupportedInstanceValue</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderArrayParameter.Move.html\">Move</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.PutValue2.html\">PutValue2</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderArrayParameter.Remove.html\">Remove</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.SetCapabilityFlag.html\">SetCapabilityFlag</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.SetInstanceValue.html\">SetInstanceValue</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.SetLock.html\">SetLock</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Show.html\">Show</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.UnSetLock.html\">UnSetLock</a>		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Properties</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Animatable.html\">Animatable</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Application.html\">Application</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Capabilities.html\">Capabilities</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Categories.html\">Categories</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderArrayParameter.Count.html\">Count</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ShaderParameter.DataType.html\">DataType</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Default.html\">Default</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ShaderParameter.Definition.html\">Definition</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ShaderParameter.Definition2.html\">Definition2</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Description.html\">Description</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.HasInstanceValue.html\">HasInstanceValue</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderArrayParameter.Item.html\">Item</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderArrayParameter.Item2.html\">Item2</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Keyable.html\">Keyable</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.LockLevel.html\">LockLevel</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.LockType.html\">LockType</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Marked.html\">Marked</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Max.html\">Max</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Min.html\">Min</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Model.html\">Model</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">NestedObjects</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Origin.html\">Origin</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.OriginPath.html\">OriginPath</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.OriginalValue.html\">OriginalValue</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.OverridenObject.html\">OverridenObject</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.OverridingObject.html\">OverridingObject</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Parameters.html\">Parameters</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Parent3DObject.html\">Parent3DObject</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.ReadOnly.html\">ReadOnly</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.ScriptName.html\">ScriptName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Source.html\">Source</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Sources.html\">Sources</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.SuggestedMax.html\">SuggestedMax</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.SuggestedMin.html\">SuggestedMin</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Tags.html\">Tags</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ShaderParameter.Targets.html\">Targets</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Value.html\">Value</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.ValueType.html\">ValueType</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\"># \n\
# This example demonstrates how to work with a ShaderArrayParameter by instantiating\n\
# a shader that implements a shader array parameter, adding 2 elements to that array, \n\
# setting some values on the new elements, and then finding them again by iterating \n\
# over the shader parameters.\n\
#\n\
from win32com.client import constants as si\n\
app = Application\n\
app.NewScene(\"\", False)\n\
# Set up a cylinder with a Volume Effects shader \n\
app.GetPrimLight(\"Light_Box.Preset\", \"Light_Box\")\n\
app.GetPrimLight(\"LightFlat.Preset\")\n\
app.CreatePrim(\"Cylinder\", \"MeshSurface\")\n\
sh = app.CreateShaderFromProgID(\"Softimage.March_Fractal_vol.1.0\", \"Sources.Materials.DefaultLib.Scene_Material\")\n\
app.SIConnectShaderToCnxPoint(\"Sources.Materials.DefaultLib.Scene_Material.Volume_Effects.out\", \n\
	\"Sources.Materials.DefaultLib.Scene_Material.volume\", False)\n\
# Add 2 instances of the input array parameters and set some values on them\n\
ap = sh.Parameters(\"scatter_lights_input\");\n\
app.SIAddArrayElement(\"Sources.Materials.DefaultLib.Scene_Material.Volume_Effects.scatter_lights_input\")\n\
app.SetReference2(\"Sources.Materials.DefaultLib.Scene_Material.Volume_Effects.scatter_lights_input.scatter_lights_input\", \"Light_Box\")\n\
app.SIAddArrayElement(\"Sources.Materials.DefaultLib.Scene_Material.Volume_Effects.scatter_lights_input\")\n\
app.SetReference2(\"Sources.Materials.DefaultLib.Scene_Material.Volume_Effects.scatter_lights_input.scatter_lights_input[1]\", \"light1\")\n\
# Now we can iterate over the list of items\n\
for param in sh.Parameters :\n\
	if (param.IsClassOf(si.siShaderParameterID)) :\n\
		if (app.ClassName(param) == \"ShaderArrayParameter\") :\n\
			app.LogMessage(\"\'\" + param.ScriptName + \"\' is an array with \" + str(param.Count) + \" members\")\n\
# Expected output:\n\
# INFO : \'scatter_lights_input\' is an array with 2 members\n\
# INFO : \'shadow_lights_input\' is an array with 0 members\n\
# INFO : \'trans_model\' is an array with 0 members</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/* \n\
	This example demonstrates how to work with a ShaderArrayParameter by instantiating\n\
	a shader that implements a shader array parameter, and then manipulating the array\n\
	using the Add and Remove methods.\n\
	NB: This example manipulates the ParameterCollection directly instead of getting a\n\
	pointer to it (eg., var pArrayParam = sh.Parameters(\"inputs\")) because the proxy\n\
	object (pointer) is not dynamic.\n\
*/\n\
app = Application;\n\
NewScene(null, false);\n\
// Set up a cylinder with a Volume Effects shader \n\
CreatePrim(\"Cylinder\", \"MeshSurface\");\n\
var sh = CreateShaderFromProgID(\"Softimage.March_Fractal_vol.1.0\", \"Sources.Materials.DefaultLib.Scene_Material\");\n\
SIConnectShaderToCnxPoint(\"Sources.Materials.DefaultLib.Scene_Material.Volume_Effects.out\", \n\
	\"Sources.Materials.DefaultLib.Scene_Material.volume\", false);\n\
// Add 3 instances of the inputs array parameters\n\
sh.Parameters(\"shadow_lights_input\").Add();\n\
sh.Parameters(\"shadow_lights_input\").Add();\n\
sh.Parameters(\"shadow_lights_input\").Add();\n\
app.LogMessage(\"Found \" + sh.Parameters(\"shadow_lights_input\").Parameters.Count \n\
	+ \" element(s) on the inputs array parameter\");\n\
// Remove one of the elements\n\
sh.Parameters(\"shadow_lights_input\").Remove(1);\n\
app.LogMessage(\"Now there are \" + sh.Parameters(\"shadow_lights_input\").Parameters.Count + \" element(s)\");\n\
// Expected output:\n\
// INFO : Found 3 element(s) on the inputs array parameter\n\
// INFO : Now there are 2 element(s)</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/ArrayParameter.html\">ArrayParameter</a> <a href=\"#!/url=./si_om/ShaderParameter.html\">ShaderParameter</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";