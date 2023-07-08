var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Geometry</title>\n\
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
            <h1>Geometry</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Geometry</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_Geometry\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1Geometry.html\">Geometry</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\">Geometry</p>\n\
\n\
<h3>Description</h3>\n\
<div><p> The Geometry object provides access to the X3DObject\'s Geometry. The geometry is exposed via the \n\
<a href=\"#!/url=./si_om/Primitive.html\">Primitive</a> object. There are 3 different types of geometry supported: \n\
<a href=\"#!/url=./si_om/PolygonMesh.html\">PolygonMesh</a>, <a href=\"#!/url=./si_om/NurbsSurfaceMesh.html\">NurbsSurfaceMesh</a> and <a href=\"#!/url=./si_om/NurbsCurveList.html\">NurbsCurveList</a>.\n\
<br /><br />\n\
Geometry is made up of the following components:\n\
<br /><br />\n\
- <a href=\"#!/url=./si_om/Facet.html\">Facet</a>: Maps to a <a href=\"#!/url=./si_om/PolygonFace.html\">PolygonFace</a> on a polygon mesh and a \n\
<a href=\"#!/url=./si_om/NurbsSurface.html\">NurbsSurface</a>. On a NURBS surface mesh, there is no direct mapping to NURBS curve list.\n\
<br /><br />\n\
- <a href=\"#!/url=./si_om/Segment.html\">Segment</a>: Maps to a <a href=\"#!/url=./si_om/Edge.html\">Edge</a> on a polygon mesh. There is no direct \n\
mapping for NURBS surface mesh and NURBS curve list.\n\
<br /><br />\n\
- <a href=\"#!/url=./si_om/Point.html\">Point</a>: Maps to a <a href=\"#!/url=./si_om/Vertex.html\">Vertex</a> on a polygon mesh and a \n\
<a href=\"#!/url=./si_om/ControlPoint.html\">ControlPoint</a> on a NURBS surface mesh and NURBS curve list.\n\
<br /><br />\n\
- <a href=\"#!/url=./si_om/Sample.html\">Sample</a>: Maps to a <a href=\"#!/url=./si_om/PolygonNode.html\">PolygonNode</a> on a polygon mesh and a \n\
<a href=\"#!/url=./si_om/NurbsSample.html\">NurbsSample</a> on a NURBS surface mesh and NURBS curve list.\n\
<br /><br />\n\
An object may have multiple <a href=\"#!/url=./si_om/Operator.html\">Operator</a> objects in its <a href=\"#!/url=./si_om/ConstructionHistory.html\">ConstructionHistory</a>\n\
that change the original geometry. For example, an <a href=\"#!/url=./si_om/Envelope.html\">Envelope</a> or Shape Combiner operator \n\
will deform the the geometry. In order to access the geometry without the influence of the operators, use the \n\
<a href=\"#!/url=./si_cmds/DeactivateAbove.html\">DeactivateAbove</a> command to temporarily disable parts of the operator stack.\n\
<br /><br />\n\
Similarily, a geometry may change over time, for example because of an animated deformation.  The time \n\
argument to <a href=\"#!/url=./si_om/Primitive.Geometry.html\">Primitive.Geometry</a> is useful for working with such animated shapes.\n\
<br /><br />\n\
For setting points within the context of a scripted operator, use the\n\
<a href=\"#!/url=./si_om/PointCollection.PositionArray.html\">PointCollection.PositionArray</a> property. If not used in a scripted operator, you must either \n\
call <a href=\"#!/url=./si_cmds/FreezeObj.html\">FreezeObj</a> to remove all operators or use the <a href=\"#!/url=./si_cmds/Translate.html\">Translate</a> command.\n\
<br /><br />\n\
Geometry has several methods related to <a href=\"#!/url=./si_om/PointLocatorData.html\">PointLocatorData</a>. A point locator is a geometric \n\
surface coordinate, and represents a precise location on a geometry. For more information about point locators \n\
and Geometry\'s related methods, see <a href=\"#!/url=./si_om/PointLocatorData.html\">PointLocatorData</a>.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Geometry.AddCluster.html\">AddCluster</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Geometry.AddEmptyCluster.html\">AddEmptyCluster</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Geometry.AddICEAttribute.html\">AddICEAttribute</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Geometry.CreateSubComponent.html\">CreateSubComponent</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Geometry.EvaluateClusterProperty.html\">EvaluateClusterProperty</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Geometry.EvaluateNormals.html\">EvaluateNormals</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Geometry.EvaluatePositions.html\">EvaluatePositions</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Geometry.GetBoundingBox.html\">GetBoundingBox</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Geometry.GetBoundingCapsule.html\">GetBoundingCapsule</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Geometry.GetBoundingSphere.html\">GetBoundingSphere</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Geometry.GetClosestLocations.html\">GetClosestLocations</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Geometry.GetClosestLocationsWithinRadius.html\">GetClosestLocationsWithinRadius</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Geometry.GetICEAttributeFromName.html\">GetICEAttributeFromName</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Geometry.GetRaycastIntersections.html\">GetRaycastIntersections</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Geometry.GetSurfacePointLocatorsFromPoints.html\">GetSurfacePointLocatorsFromPoints</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">IsClassOf</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsEqualTo.html\">IsEqualTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Geometry.RemoveICEAttribute.html\">RemoveICEAttribute</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Geometry.SaveShapeKey.html\">SaveShapeKey</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Geometry.SetupPointLocatorQueries.html\">SetupPointLocatorQueries</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Properties</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Application.html\">Application</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Geometry.Cache.html\">Cache</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Categories.html\">Categories</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Geometry.Clusters.html\">Clusters</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Geometry.Facets.html\">Facets</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Geometry.ICEAttributes.html\">ICEAttributes</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">NestedObjects</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Origin.html\">Origin</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.OriginPath.html\">OriginPath</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Geometry.Points.html\">Points</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Geometry.Samples.html\">Samples</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Geometry.Segments.html\">Segments</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Geometry.Triangles.html\">Triangles</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'VBScript example demonstrating how to access the base geometry of a grid\n\
\'that is being deformed by an envelope.  To do this we temporarily\n\
\'disable the envelope using the DeactivateAbove command\n\
newscene ,false\n\
\' Create the Skeleton\n\
Dim oRoot, aRootPos, aEffPos1, aEffPos2, oChain1, oChain2\n\
Set oRoot = Application.ActiveProject.ActiveScene.Root\n\
aRootPos = Array(-4, 0, 4)\n\
aEffPos1 = Array(0,0,0)\n\
aEffPos2 = Array(2,0,-2)\n\
aEffPos3 = Array(4,0,-4)\n\
Set oChainRoot = oRoot.Add2DChain( aRootPos, aEffPos1, , siViewTop )\n\
oChainRoot.AddBone( aEffPos2 )\n\
oChainRoot.AddBone( aEffPos3 )\n\
set oEff = oChainRoot.Children(\"eff\")\n\
\' Create the Envelope\n\
Dim oGrid, oGeometry\n\
Set oGrid = oRoot.AddGeometry( \"grid\", \"MeshSurface\")\n\
oGrid.Parameters(\"subdivu\").Value = 3\n\
oGrid.Parameters(\"subdivv\").Value = 3\n\
\' Apply the Envelope to the Skeleton\n\
Dim oEnvelope\n\
Set oEnvelope = oGrid.ApplyEnvelope( oChainRoot, siBranch, siBranch )\n\
\' Move the Effector to crumple up the grid\n\
Translate oEff, -8,0,0,siRelative, siLocal, siObj, siXYZ\n\
\' If we access the points now via the object model we get the position with the\n\
\' deformation taken into account\n\
set oPoints = oGrid.ActivePrimitive.Geometry.Points\n\
set oPos = oPoints.Item(12).Position\n\
Application.LogMessage \"Point 12 is at \" &amp; Round( oPos.X, 1 ) &amp; \",\" &amp; _\n\
	Round( oPos.Y, 1 ) &amp; \",\" &amp; Round( oPos.Z, 1 )\n\
\' Disable the operator which connects the skeleton and grid\n\
DeactivateAbove oGrid.ActivePrimitive &amp; \".envelopop\", true\n\
\' Now when we retrieve the points we get the original geometry\n\
set oPoints = oGrid.ActivePrimitive.Geometry.Points\n\
set oPos = oPoints.Item(12).Position\n\
Application.LogMessage \"Point 12 is at \" &amp; Round( oPos.X, 1 ) &amp; \",\" &amp; _\n\
	Round( oPos.Y, 1 ) &amp; \",\" &amp; Round( oPos.Z, 1 )\n\
\' Restore the affect of the envelope on the grid\n\
DeactivateAbove oGrid.ActivePrimitive &amp; \".envelopop\", false</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Primitive.Geometry.html\">Primitive.Geometry</a> <a href=\"#!/url=./si_om/Cluster.html\">Cluster</a> <a href=\"#!/url=./si_om/ClusterProperty.html\">ClusterProperty</a> <a href=\"#!/url=./si_om/Facet.html\">Facet</a> <a href=\"#!/url=./si_om/Segment.html\">Segment</a> <a href=\"#!/url=./si_om/Point.html\">Point</a> <a href=\"#!/url=./si_om/NurbsSurfaceMesh.html\">NurbsSurfaceMesh</a> <a href=\"#!/url=./si_om/NurbsSurface.html\">NurbsSurface</a> <a href=\"#!/url=./si_om/PolygonMesh.html\">PolygonMesh</a> <a href=\"#!/url=./si_om/PolygonFace.html\">PolygonFace</a> <a href=\"#!/url=./si_om/Edge.html\">Edge</a> <a href=\"#!/url=./si_om/Vertex.html\">Vertex</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";