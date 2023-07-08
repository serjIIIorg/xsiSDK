var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Model</title>\n\
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
            <h1>Model</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Model</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_Model\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1Model.html\">Model</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\"><a href=\"#!/url=./si_om/ProjectItem.html\">ProjectItem</a></p>\n\
<p class=\"level3\"><a href=\"#!/url=./si_om/SceneItem.html\">SceneItem</a></p>\n\
<p class=\"level4\"><a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a></p>\n\
<p class=\"level5\">Model</p>\n\
\n\
<h3>Description</h3>\n\
<div><p> The Model object represents any Softimage model node, including referenced models, and even the\n\
Scene Root. Softimage Models act as a container for objects (usually hierarchies of objects) and \n\
many of their properties. are a type of <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> and as such can be \n\
positioned in space. A model can contains objects, <a href=\"#!/url=./si_om/Group.html\">Group</a>s, or other models.<br /><br />\n\
The Scene Root can be accessed using the <a href=\"#!/url=./si_om/XSIApplication.ActiveSceneRoot.html\">XSIApplication.ActiveSceneRoot</a>. In\n\
addition, any <a href=\"#!/url=./si_om/ProjectItem.html\">ProjectItem</a> or <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> item can return\n\
a reference to the model in which it lives via the <a href=\"#!/url=./si_om/ProjectItem.Model.html\">ProjectItem.Model</a> and \n\
<a href=\"#!/url=./si_om/Parameter.Model.html\">Parameter.Model</a> properties. <br /><br />\n\
You can also get a collection of all models under a given model by using the \n\
<a href=\"#!/url=./si_om/X3DObject.Models.html\">X3DObject.Models</a> property (a Model is a specialized kind of X3DObject). \n\
Therefore, if you use the the Models property on the Scene Root recursively, it will return \n\
all models in the active scene.<br /><br />\n\
To create a new model, use the <a href=\"#!/url=./si_om/X3DObject.AddModel.html\">X3DObject.AddModel</a> method, which also \n\
returns a Model object. There are also a few scripting commands which create model nodes as\n\
well: <a href=\"#!/url=./si_cmds/CreateModel.html\">CreateModel</a>, <a href=\"#!/url=./si_cmds/SICreateModel.html\">SICreateModel</a>, etc. <br /><br />\n\
You can also import or export models (including referenced models) with a series of commands: \n\
<a href=\"#!/url=./si_cmds/ImportModel.html\">ImportModel</a>, <a href=\"#!/url=./si_cmds/ExportModel.html\">ExportModel</a>, <a href=\"#!/url=./si_cmds/ImportRefModels.html\">ImportRefModels</a>, \n\
etc. When a referenced model is instantiated in the scene, changes to that model are tracked \n\
by the <a href=\"#!/url=./si_om/Delta.html\">Delta</a> system as of v6.0.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.Add2DChain.html\">Add2DChain</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.Add3DChain.html\">Add3DChain</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Model.AddActionSource.html\">AddActionSource</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.AddAnnotation.html\">AddAnnotation</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.AddCamera.html\">AddCamera</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.AddCameraRig.html\">AddCameraRig</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.AddChild.html\">AddChild</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.AddControl.html\">AddControl</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AddCustomOp.html\">AddCustomOp</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SceneItem.AddCustomProperty.html\">AddCustomProperty</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.AddFxTree.html\">AddFxTree</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.AddGeometry.html\">AddGeometry</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Model.AddGroup.html\">AddGroup</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AddICEAttribute.html\">AddICEAttribute</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.AddLattice.html\">AddLattice</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.AddLight.html\">AddLight</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.AddLightRig.html\">AddLightRig</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SceneItem.AddMaterial.html\">AddMaterial</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Model.AddMixer.html\">AddMixer</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.AddModel.html\">AddModel</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.AddNull.html\">AddNull</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.AddNurbsCurve.html\">AddNurbsCurve</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.AddNurbsCurveList.html\">AddNurbsCurveList</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.AddNurbsCurveList2.html\">AddNurbsCurveList2</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.AddNurbsSurface.html\">AddNurbsSurface</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.AddNurbsSurfaceMesh.html\">AddNurbsSurfaceMesh</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.AddNurbsSurfaceMesh2.html\">AddNurbsSurfaceMesh2</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.AddPolygonMesh.html\">AddPolygonMesh</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.AddPrimitive.html\">AddPrimitive</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SceneItem.AddProperty.html\">AddProperty</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AddScriptedOp.html\">AddScriptedOp</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AddScriptedOpFromFile.html\">AddScriptedOpFromFile</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AnimatedParameters2.html\">AnimatedParameters2</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SceneItem.ApplyEnvelope.html\">ApplyEnvelope</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.BelongsTo.html\">BelongsTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Model.CommitToReference.html\">CommitToReference</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.EvaluateAt.html\">EvaluateAt</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.FindChild.html\">FindChild</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.FindChild2.html\">FindChild2</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.FindChildren.html\">FindChildren</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.FindChildren2.html\">FindChildren2</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Model.FindObjects.html\">FindObjects</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Model.FindObjectsFromCLSID.html\">FindObjectsFromCLSID</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.GetActivePrimitive2.html\">GetActivePrimitive2</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.GetActivePrimitive3.html\">GetActivePrimitive3</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.GetBoundingBox.html\">GetBoundingBox</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.GetICEAttributeFromName.html\">GetICEAttributeFromName</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SceneItem.GetLocalPropertyFromName.html\">GetLocalPropertyFromName</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SceneItem.GetLocalPropertyFromName2.html\">GetLocalPropertyFromName2</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.GetModels2.html\">GetModels2</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SceneItem.GetPropertyFromName.html\">GetPropertyFromName</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SceneItem.GetPropertyFromName2.html\">GetPropertyFromName2</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.GetStaticKinematicState.html\">GetStaticKinematicState</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Model.HasMixer.html\">HasMixer</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.HasStaticKinematicState.html\">HasStaticKinematicState</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsA.html\">IsA</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsAnimated2.html\">IsAnimated2</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">IsClassOf</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsEqualTo.html\">IsEqualTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsKindOf.html\">IsKindOf</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsLocked.html\">IsLocked</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.IsNodeAnimated.html\">IsNodeAnimated</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsSelected.html\">IsSelected</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockOwners.html\">LockOwners</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.NodeAnimatedParameters.html\">NodeAnimatedParameters</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.RemoveChild.html\">RemoveChild</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.RemoveFromParent.html\">RemoveFromParent</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.RemoveICEAttribute.html\">RemoveICEAttribute</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.SetAsSelected.html\">SetAsSelected</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.SetCapabilityFlag.html\">SetCapabilityFlag</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.SetLock.html\">SetLock</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SceneItem.SetMaterial.html\">SetMaterial</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.ShapeAnimatedClusters.html\">ShapeAnimatedClusters</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.TaggedParameters.html\">TaggedParameters</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.UnSetLock.html\">UnSetLock</a>		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
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
		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.ActivePrimitive.html\">ActivePrimitive</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Application.html\">Application</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.BranchFlag.html\">BranchFlag</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Capabilities.html\">Capabilities</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Categories.html\">Categories</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.Children.html\">Children</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SceneItem.Envelopes.html\">Envelopes</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.EvaluationID.html\">EvaluationID</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Model.ExternalFiles.html\">ExternalFiles</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Families.html\">Families</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Model.Groups.html\">Groups</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.HierarchicalEvaluationID.html\">HierarchicalEvaluationID</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.ICEAttributes.html\">ICEAttributes</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Model.InstanceMaster.html\">InstanceMaster</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.Kinematics.html\">Kinematics</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SceneItem.LocalProperties.html\">LocalProperties</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.LocalRotation.html\">LocalRotation</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.LocalScaling.html\">LocalScaling</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.LocalTranslation.html\">LocalTranslation</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockLevel.html\">LockLevel</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockMasters.html\">LockMasters</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockType.html\">LockType</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SceneItem.Material.html\">Material</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.Materials.html\">Materials</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Model.Mixer.html\">Mixer</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Model.html\">Model</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Model.ModelKind.html\">ModelKind</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.Models.html\">Models</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">NestedObjects</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.ObjectID.html\">ObjectID</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Origin.html\">Origin</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.OriginPath.html\">OriginPath</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Owners.html\">Owners</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.PPGLayout.html\">PPGLayout</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Parameters.html\">Parameters</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Parent3DObject.html\">Parent3DObject</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.Primitives.html\">Primitives</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SceneItem.Properties.html\">Properties</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Selected.html\">Selected</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Model.Sources.html\">Sources</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";