var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>XSIFactory.CreateScriptedOp</title>\n\
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
            <h1>XSIFactory.CreateScriptedOp</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/XSIFactory.html\">XSIFactory</a>.CreateScriptedOp</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Creates a blank \"runtime\" scripted operator with the code specified. This makes it possible \n\
to create an operator on-the-fly rather than using the the script operator editor.  These \n\
operators will have their code embedded in the scene file and have a different Callback convention \n\
than Self-Installed <a href=\"#!/url=./si_om/CustomOperator.html\">CustomOperator</a>s.\n\
<br /><br />\n\
Scripted operators define the following callbacks. If the operator has a user-specified name then the \n\
name must prefix the Init, Term and Update callbacks:<br /><br />\n\
	CustomOperator_Init( ctx ) <br /><br />\n\
	CustomOperator_Term( ctx ) <br /><br />\n\
	CustomOperator_Update( ctx, out, in1, inN ) <br /><br />\n\
The Update function has 1 argument per input port. If the operator defines 2 groups with 2 input ports each\n\
there must be 4 input arguments to the update method. The names of the input ports must be unique\n\
as this will be used as the argument\'s name. The name \'in\' is not considered a valid port name because it is also\n\
a reserved word in some scripting langauges such as VBScript.\n\
<br /><br />\n\
As of version 3.51, Init and Term are considered reserved function names. Softimage will check the helper \n\
code of scripted operators created using the scripted operator editor or the SPDL file for Init(ctx) and \n\
Term(ctx) callbacks. If the function names are found but specify the wrong number of arguments, Softimage will \n\
issue a warning message. It is possible that a scripted operator created prior to version 3.51 defined \n\
Init or Term helper functions with a signature that matches the callbacks, which may cause a runtime error \n\
when the callback is executed. The only remedy is to modify the code of the operator and rename these helper \n\
functions to something else. \n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>CustomOperator XSIFactory.CreateScriptedOp( String Name, String scriptcode, String Language );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = XSIFactory.CreateScriptedOp( Name, [ScriptCode], [Language] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/CustomOperator.html\">CustomOperator</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The name for the new scripted operator.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
\"\"			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ScriptCode		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The logic that implements the scripted operator			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
\"\"			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Language		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The scripting language to use for the logic; for example \"JScript\"			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
The current scripting language user preference			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example illustrates how to use the XSIFactory to create a multi-output operator \n\
	which constrains the posx position of a number of objects to a single object. \n\
*/\n\
NewScene( null, false );\n\
var null1 = GetPrim( \"Null\" );\n\
var null2 = GetPrim( \"Null\" );\n\
var polymsh1 = CreatePrim( \"sphere\", \"MeshSurface\" );\n\
var op = XSIFactory.CreateScriptedOp( \"myCns\", myCns_Update.toString(), \"JScript\" );\n\
// Allow a maximum of 2 nulls to be connected to the main group\n\
var group1 = op.AddPortGroup( \"mainoutputgroup\", 1, 2, siNullFilter );\n\
// You only need to add 1 port to control 2 objects since the portgroup definition takes \n\
// care of that. The only thing you need to do here is to define what type of object/parameter \n\
// you would like to be connected to.\n\
op.AddOutputPort( null1.posx, \"\", group1.Index );\n\
// Define the second input group that will accept only 1 polygon mesh as input\n\
var group2 = op.AddPortGroup( \"inputgroup\", 1, 1, siPolyMeshFilter );\n\
op.AddInputPort( polymsh1.posx, \"\", group2.Index );\n\
// Create a connection string. Use the semi-colon to delimit where the first group ends and \n\
// the second port group begins.\n\
var cnxstr = null1 + \",\" + null2 + \";\" + polymsh1;\n\
// connect operator\n\
op.Connect( cnxstr );\n\
function myCns_Update( ctx, out, inposx )\n\
{\n\
	out.Value = inposx.Value;\n\
}</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// The following code illustrates how to create a scripted operator\n\
// entirely from the COM API\n\
NewScene( null, false );\n\
var oObject = ActiveSceneRoot.AddGeometry(\"Sphere\",\"MeshSurface\");\n\
apply_splatter( oObject );\n\
var oSplatterOperator = oObject.ActivePrimitive.ConstructionHistory.Find( \"MySplatter\" );\n\
var oPort = oSplatterOperator.Port( \"InGeom\", \"MainGroup\", 0 );\n\
var oInputGeometry = oPort.Target2;\n\
Application.LogMessage( \"splatter is reading from the \" + oInputGeometry.Parent.Name );\n\
function apply_splatter( oObject )\n\
{\n\
	var op = XSIFactory.CreateScriptedOp( \"MySplatter\", MySplatter_Update.toString(), \"JScript\" );\n\
	// Define connections\n\
	var group = op.AddPortGroup( \"MainGroup\" );\n\
	var ioport = op.AddIOPort( oObject.ActivePrimitive, \"Geom\", group.Index );\n\
	var inport = op.AddInputPort( oObject.kinematics.global.posy, \"InGPosY\", group.Index );\n\
	// Define parameters\n\
	var pdef = XSIFactory.CreateParamDef2( \"SquishFactor\", siDouble, 0.5, 0, 1 );\n\
	op.AddParameter( pdef );\n\
	// Connect operator\n\
	op.Connect(oObject);\n\
}\n\
function MySplatter_Update( ctx, out, InGeom, InGPosY )\n\
{\n\
	// Declare variables.\n\
	var dSquishPnt,  i;\n\
	// Get the squish factor.\n\
	var dSquish = ctx.Parameters(\"SquishFactor\").Value\n\
	// Get the array of point positions.\n\
	var aPnts = InGeom.Value.Geometry.Points.PositionArray.toArray();\n\
	// Get the object//s global Y position.\n\
	var dGPosYObj = InGPosY.Value;\n\
	// For each point...\n\
	for ( var i = 0; i &lt; aPnts.length / 3; i++ )\n\
	{\n\
		// Compute the point\'s global Y position.\n\
		var dGPosYPnt = aPnts[1 + (i*3)] + dGPosYObj;\n\
		// If the point is below the Y=0 plane...\n\
		if ( dGPosYPnt &lt; 0 ) \n\
		{\n\
			// Compute the squish factor for the point.\n\
			var dSquishPnt = 1.0 - dGPosYPnt * dSquish;\n\
			// Squish the point.\n\
			aPnts[0 + (i*3)] = aPnts[0 + (i*3)] * dSquishPnt;\n\
			aPnts[1 + (i*3)] = - dGPosYObj;\n\
			aPnts[2 + (i*3)] = aPnts[2 + (i*3)] * dSquishPnt;\n\
		}\n\
	}\n\
	// Update the object//s point positions.\n\
	out.Value.Geometry.Points.PositionArray = aPnts;\n\
	return;\n\
}\n\
//</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/ConvertScriptedOp.html\">ConvertScriptedOp</a> <a href=\"#!/url=./si_om/UpdateContext.html\">UpdateContext</a> <a href=\"#!/url=./si_om/ProjectItem.AddScriptedOp.html\">ProjectItem.AddScriptedOp</a> <a href=\"#!/url=./si_om/ProjectItem.AddScriptedOpFromFile.html\">ProjectItem.AddScriptedOpFromFile</a> <a href=\"#!/url=./si_om/XSIFactory.CreateScriptedOpFromFile.html\">XSIFactory.CreateScriptedOpFromFile</a> <a href=\"#!/url=./si_om/XSIFactory.CreateParamDef.html\">XSIFactory.CreateParamDef</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";