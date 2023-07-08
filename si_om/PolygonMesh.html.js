var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>PolygonMesh</title>\n\
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
            <h1>PolygonMesh</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">PolygonMesh</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_PolygonMesh\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1PolygonMesh.html\">PolygonMesh</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\"><a href=\"#!/url=./si_om/Geometry.html\">Geometry</a></p>\n\
<p class=\"level3\">PolygonMesh</p>\n\
\n\
<h3>Description</h3>\n\
<div><p>A PolygonMesh is a kind of <a href=\"#!/url=./si_om/Geometry.html\">Geometry</a>. You can \n\
navigate a polygon mesh using generic objects such as <a href=\"#!/url=./si_om/Facet.html\">Facet</a>, \n\
<a href=\"#!/url=./si_om/Segment.html\">Segment</a>, <a href=\"#!/url=./si_om/Point.html\">Point</a> and <a href=\"#!/url=./si_om/Sample.html\">Sample</a> \n\
or you can navigate using objects that are specific to the PolygonMesh such as \n\
<a href=\"#!/url=./si_om/PolygonFace.html\">PolygonFace</a>, <a href=\"#!/url=./si_om/Edge.html\">Edge</a>, <a href=\"#!/url=./si_om/Vertex.html\">Vertex</a> \n\
and <a href=\"#!/url=./si_om/PolygonNode.html\">PolygonNode</a>. \n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Geometry.AddCluster.html\">AddCluster</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Geometry.AddEmptyCluster.html\">AddEmptyCluster</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Geometry.AddICEAttribute.html\">AddICEAttribute</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PolygonMesh.AddVertexColor.html\">AddVertexColor</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PolygonMesh.ConstructPointLocators.html\">ConstructPointLocators</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Geometry.CreateSubComponent.html\">CreateSubComponent</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Geometry.EvaluateClusterProperty.html\">EvaluateClusterProperty</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Geometry.EvaluateNormals.html\">EvaluateNormals</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Geometry.EvaluatePositions.html\">EvaluatePositions</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PolygonMesh.Get.html\">Get</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PolygonMesh.Get2.html\">Get2</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PolygonMesh.GetApproximatedMesh.html\">GetApproximatedMesh</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PolygonMesh.GetApproximatedMeshAndAttributes.html\">GetApproximatedMeshAndAttributes</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Geometry.GetBoundingBox.html\">GetBoundingBox</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Geometry.GetBoundingCapsule.html\">GetBoundingCapsule</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Geometry.GetBoundingSphere.html\">GetBoundingSphere</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Geometry.GetClosestLocations.html\">GetClosestLocations</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Geometry.GetClosestLocationsWithinRadius.html\">GetClosestLocationsWithinRadius</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Geometry.GetICEAttributeFromName.html\">GetICEAttributeFromName</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PolygonMesh.GetPolygonIndexArray.html\">GetPolygonIndexArray</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Geometry.GetRaycastIntersections.html\">GetRaycastIntersections</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Geometry.GetSurfacePointLocatorsFromPoints.html\">GetSurfacePointLocatorsFromPoints</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PolygonMesh.GetTriangleNodeIndexArray.html\">GetTriangleNodeIndexArray</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PolygonMesh.GetTriangleVertexIndexArray.html\">GetTriangleVertexIndexArray</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PolygonMesh.GetTriangleWeightArray.html\">GetTriangleWeightArray</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">IsClassOf</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsEqualTo.html\">IsEqualTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Geometry.RemoveICEAttribute.html\">RemoveICEAttribute</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Geometry.SaveShapeKey.html\">SaveShapeKey</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PolygonMesh.Set.html\">Set</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Geometry.SetupPointLocatorQueries.html\">SetupPointLocatorQueries</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
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
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Application.html\">Application</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Geometry.Cache.html\">Cache</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Categories.html\">Categories</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Geometry.Clusters.html\">Clusters</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PolygonMesh.CurrentVertexColor.html\">CurrentVertexColor</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PolygonMesh.Edges.html\">Edges</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Geometry.Facets.html\">Facets</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Geometry.ICEAttributes.html\">ICEAttributes</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">NestedObjects</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PolygonMesh.Nodes.html\">Nodes</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Origin.html\">Origin</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.OriginPath.html\">OriginPath</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Geometry.Points.html\">Points</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PolygonMesh.Polygons.html\">Polygons</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Geometry.Samples.html\">Samples</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Geometry.Segments.html\">Segments</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Geometry.Triangles.html\">Triangles</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PolygonMesh.VertexColors.html\">VertexColors</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PolygonMesh.Vertices.html\">Vertices</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">set oObject = Application.ActiveProject.ActiveScene.Root.AddGeometry(\"Cube\",\"MeshSurface\")\n\
set oPolygonMesh = oObject.ActivePrimitive.Geometry</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Primitive.Geometry.html\">Primitive.Geometry</a> <a href=\"#!/url=./si_om/X3DObject.AddPolygonMesh.html\">X3DObject.AddPolygonMesh</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";