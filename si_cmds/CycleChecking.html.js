var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>CycleChecking</title>\n\
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
            <h1>CycleChecking</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">CycleChecking</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v3.5</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Checks the Graph For Operator Evaluation Cycles. An evaluation cycle is a looped graph dependency where \n\
an operation is dependent on itself.<br /><br />\n\
This function determines if there is a cycle in a specified hierarchy and outputs to the script window\n\
the operators that are within the cycle, or are accessing the data within the cycle.\n\
Within each cycle traversed the script window outputs a name of a operator as \'Cycle Breaking Point\'\n\
and outputs many operators names labeled as \'Cycle through\' operators.  <br /><br />\n\
The \'Cycle Breaking Point\' operator is the graph location where the evaluation check is terminated.\n\
This is dependent on where the evaluation was initiated from and may slightly vary. This is the critical\n\
location for scene evalution differences/odd results/odd behavior users see with problematic cycles in their\n\
graph.  The reason, is that to avoid an infinite loop the data used to honour this evaluation request, is\n\
the evaluation upto that point in the connection stack.  So in fact the result is not a re-evaluation of itself.<br /><br />\n\
The \'Cycle through\' operators are the contributers to the cycle and breaking one of these key dependencies\n\
will break the dependency cycle. Note: there are also other operators that will access the cycle and during\n\
a scene evaluation may end up with skewed cyclical results, but are not key contributers\n\
and as such removing one of these operators will not break the cycle.<br /><br />\n\
To fix a cycle users should look for, narrow down and remove key contributers within the cycle.\n\
There are suggested approches for this.  First to narrow down a cycle within a hierarchy isolating\n\
the breaking point and rerunning the cycle checking on it\'s data owner or other hierarchy\'s within it\'s\n\
cycled operators to get a handle on the depth and width of the cycle.  Second, look for key contributers\n\
labeled within the cycle.  To do this start with the \'Cycle Breaking Point\' and trace down the output\n\
through the \'Cycle through\' operators until the same \'Cycle Breaking Point\' operator is found\n\
and labled as a \'Cycle through\' operator.  These are your contributers.  Then look through\n\
the contributers for familiar cycle creators such as \"Expression\", \"ScriptedOp\" or \"kine.Constraints\".\n\
A key contributor for a problamatic cycle will not be of the form \"kine.local.PoseCompensatorOp\"or\n\
\"kine.global.ParentPoseCns_E\" or \"kine.local.ParentPoseAndPoseCns_D\" or \"kine.global.SkeletonCtrlOpProp\".\n\
Note: the operators labeled \"*_D\"\'s and \"*_E\"\'s are definers and enforcers of the \"kine.Constraints\". <br /><br />\n\
You can customize cycle checking in several ways: <br /><br />\n\
Tip 1: If you want to check only the current frame for cycles, set the Check Current Frame parameter to true.  \n\
This is especially useful when one of the constraints participating in the cycle the activeness of a cycle \n\
is animated. <br /><br />\n\
Tip 2: If you are running this command from scripting, running the <a href=\"#!/url=./si_cmds/Refresh.html\">Refresh</a> command prior to \n\
running the <a href=\"#!/url=./si_cmds/CycleChecking.html\">CycleChecking</a> command will ensure the values are current for the timeframe. <br /><br />\n\
Tip 3: You can also maximize performance by enabling the \'Disable cycle checking when applying animation \n\
operators\' User Preference and then specifying true for the FollowCycleCheckUserPref parameter. Note that if\n\
you leave the default value (false), this command will proceed with cycle checking regardless of what your\n\
user preference says. <br /><br />\n\
Tip 4: By default the cycle checker checks the entire nested hierarchy, beginning with the scene element \n\
specified by the StartingGraphPt parameter. To check only the StartingGraphPt element, set the CheckFullNestedHier \n\
flag to false. <br /><br />\n\
Note: This command uses <a href=\"#!/url=./files/OutArgDefined.htm\">output arguments</a>. C# and some \n\
scripting languages (such as JScript, PerlScript and Python) don\'t support arguments passed by reference. Normally \n\
you can get the output arguments via either <a href=\"#!/url=./si_om/XSIApplication.ExecuteCommand.html\">XSIApplication.ExecuteCommand</a> method (C#) or the \n\
<a href=\"#!/url=./files/ISIVTCollection.htm\">ISIVTCollection</a> (scripting languages), but this command\n\
already returns a value.\n\
<br /><br />\n\
The only available workaround in this case is to create a VBScript custom command which returns both the output\n\
arguments and the return value in one array. For details, see \n\
<a href=\"#!/url=./files/RtnValProblem.htm\">What Happens when the Function Already Returns a Value?</a>.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oBoolean = CycleChecking( [StartingGraphPt], [Check Current Frame], IsCycle, [DisableCycleCheck], [CheckFullNestedHier], [OutputObjs] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns the result of the cycle check as a <a href=\"#!/url=./files/Boolean.htm\">Boolean</a> (true if there is a cycle).</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">StartingGraphPt		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/objectexpr.htm\">Object</a> where the cycle checking will begin (the starting point). 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Check Current Frame		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 True to check only the current frame for cycles. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
false			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">IsCycle		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 True if there is a cycle. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">DisableCycleCheck		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 Check the User Prefs to see if cycle checking is enabled. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
false			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">CheckFullNestedHier		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 Checks the entire nested hierarchy when enabled. Checks the specified object only when disabled. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
true			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">OutputObjs		</td>\n\
		<td><a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> of <a href=\"#!/url=./si_om/Operator.html\">Operator</a> objects		</td>\n\
		<td>\n\
 The Ops in the cycle(s).		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' Example: A cyclical expression\n\
NewScene\n\
CreatePrim \"Sphere\", \"MeshSurface\"\n\
Translate , -7.20756310877914, 2.07707676083662, -0.207707676083662, siRelative, siView, siObj, siXYZ\n\
GetPrim \"Null\"\n\
Translate , 3.82040230356053, 0.744612423696161, -7.44612423696161E-02, siRelative, siView, siObj, siXYZ\n\
SelectObj \"sphere\", , True\n\
InspectObj \"sphere.kine.local\"\n\
AddExpr \"sphere.kine.local.posy\"\n\
SelectObj \"null\", , True\n\
SetExpr \"sphere.kine.local.posy\", \"null.kine.posy\"\n\
Translate , 0.118156772275078, 0.235140765377718, -2.35140765377718E-02, siRelative, siView, siObj, siXYZ\n\
AddExpr \"null.kine.local.posy\"\n\
SetExpr \"null.kine.local.posy\", \"sphere.kine.posy\"\n\
Translate , 0.669555043461009, 1.01894331750266, -0.101894331750266, siRelative, siView, siObj, siXYZ\n\
Translate , -0.712516724951656, 1.96939066659309, -0.196939066659309, siRelative, siView, siObj, siXYZ\n\
Dim bCycle\n\
bCycle = CycleChecking( \"Scene_Root\" )\n\
Logmessage  bCycle\n\
\' The output is:\n\
\'WARNING : \"3000 - Cycle Breaking Point sphere.kine.local.pos.posy.Expression\"\n\
\'WARNING : \"3000 - Cycle through sphere.kine.global.ParentPoseCns_E\"\n\
\'WARNING : \"3000 - Cycle through sphere.kine.local.PoseCompensatorOp\"\n\
\'WARNING : \"3000 - Cycle through null.kine.local.pos.posy.Expression\"\n\
\'WARNING : \"3000 - Cycle through null.kine.global.ParentPoseCns_E\"\n\
\'WARNING : \"3000 - Cycle through null.kine.local.PoseCompensatorOp\"\n\
\'WARNING : \"3000 - Cycle through sphere.kine.local.pos.posy.Expression\"\n\
\'WARNING : \"3000 - PROBLAMATIC EVALUATION CYCLES ARE IN THE SPECIFIED GRAPH\"\n\
\'CycleChecking \"Scene_Root\"\n\
\'INFO : \"True\"</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' Example: A cyclical constraint\n\
NewScene\n\
CreatePrim \"Cube\", \"MeshSurface\"\n\
Translate , -7.75896137939607, -0.235140765377774, 2.35140765377774E-02, siRelative, siView, siObj, siXYZ\n\
CreatePrim \"Sphere\", \"MeshSurface\"\n\
Translate , 8.12409703994715, -0.284640094775458, 2.84640094775458E-02, siRelative, siView, siObj, siXYZ\n\
ApplyCns \"Pose\", \"sphere\", \"cube\"\n\
SelectObj \"cube\", , True\n\
ApplyCns \"Position\", \"cube\", \"sphere\"\n\
SelectObj \"Scene_Root\"\n\
Dim bCycle\n\
bCycle = CycleChecking( \"Scene_Root\" )\n\
Logmessage  bCycle\n\
\' The output is:\n\
\'WARNING : \"3000 - Cycle Breaking Point cube.kine.global.IndpCns_E\"\n\
\'WARNING : \"3000 - Cycle through sphere.kine.Constraints.posecns.blends.PosePoseCns_D\"\n\
\'WARNING : \"3000 - Cycle through sphere.kine.global.PoseCns_E\"\n\
\'WARNING : \"3000 - Cycle through cube.kine.Constraints.poscns.blends.PosePoseCns_D\"\n\
\'WARNING : \"3000 - Cycle through cube.kine.global.IndpCns_E\"\n\
\'WARNING : \"3000 - Cycle through cube.kine.local.PoseCompensatorOp\"\n\
\'WARNING : \"3000 - Cycle through sphere.kine.local.PoseCompensatorOp\"\n\
\'WARNING : \"3000 - PROBLAMATIC EVALUATION CYCLES ARE IN THE SPECIFIED GRAPH\"\n\
\'CycleChecking \"Scene_Root\"\n\
\'INFO : \"True\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";