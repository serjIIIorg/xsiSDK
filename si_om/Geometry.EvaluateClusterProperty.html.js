var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Geometry.EvaluateClusterProperty</title>\n\
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
            <h1>Geometry.EvaluateClusterProperty</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Geometry.html\">Geometry</a>.EvaluateClusterProperty <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Evaluates the cluster property data at the surface locations defined by the point locator data.\n\
<br /><br />\n\
The dimension of the returned array depends on the cluster property type, in the same way\n\
as defined in <a href=\"#!/url=./si_om/ClusterProperty.html\">ClusterProperty</a>.\n\
<br /><br />\n\
If a point locator doesn\'t correspond exactly to a component defining a value for the cluster property\n\
(for example, sampled point for UVs), then the value will be interpolated between adjacent components. In the case\n\
of <a href=\"#!/url=./si_om/NurbsSurfaceMesh.html\">NurbsSurfaceMesh</a>, the returned values will be smoothed according to the NURBS surface \n\
mathematical equation since some properties are defined on control vertices (for example, weight maps)\n\
while point locators are defined on the surface.\n\
<br /><br />\n\
If a point locator corresponds to a discontinuity in property space, the returned value will be\n\
an arbitrary one among the many values corresponding to that location.\n\
<br /><br />\n\
Notice that the parent cluster is required in addition to the cluster property even if it is unambiguous\n\
to get the parent cluster from the cluster property. The reason is that, in the context of a scripted\n\
operator, both the cluster and the cluster property must come from the value of an input port, otherwise\n\
evaluation errors will occur.\n\
<br /><br />\n\
An example using this method can be found in <a href=\"#!/url=./si_om/PointLocatorData.html\">PointLocatorData</a> object\'s description.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Object Geometry.EvaluateClusterProperty( PointLocatorData in_pPtLocators, Cluster in_pParentCluster, ClusterProperty in_pClusterProperty, Object in_pPointLocatorsIndices );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oArray = Geometry.EvaluateClusterProperty( PointLocators, ParentCluster, ClusterProp, [Indices] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>2-dimensional <a href=\"#!/url=./files/Array.htm\">Array</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PointLocators		</td>\n\
		<td><a href=\"#!/url=./si_om/PointLocatorData.html\">PointLocatorData</a>		</td>\n\
		<td>\n\
Point locators to be evaluated.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ParentCluster		</td>\n\
		<td><a href=\"#!/url=./si_om/Cluster.html\">Cluster</a>		</td>\n\
		<td>\n\
Parent of the cluster property to be evaluated.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ClusterProp		</td>\n\
		<td><a href=\"#!/url=./si_om/ClusterProperty.html\">ClusterProperty</a>		</td>\n\
		<td>\n\
Cluster property to be evaluated.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Indices		</td>\n\
		<td>1-dimensional <a href=\"#!/url=./files/Array.htm\">Array</a>		</td>\n\
		<td>\n\
Indices of the point locators to be evaluated (all in not specified).		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/PointLocatorData.html\">PointLocatorData</a> <a href=\"#!/url=./si_om/Geometry.html\">Geometry</a> <a href=\"#!/url=./si_om/Geometry.GetClosestLocations.html\">Geometry.GetClosestLocations</a> <a href=\"#!/url=./si_om/Geometry.GetClosestLocationsWithinRadius.html\">Geometry.GetClosestLocationsWithinRadius</a> <a href=\"#!/url=./si_om/Geometry.GetRaycastIntersections.html\">Geometry.GetRaycastIntersections</a> <a href=\"#!/url=./si_om/Geometry.SetupPointLocatorQueries.html\">Geometry.SetupPointLocatorQueries</a> <a href=\"#!/url=./si_om/Geometry.GetSurfacePointLocatorsFromPoints.html\">Geometry.GetSurfacePointLocatorsFromPoints</a> <a href=\"#!/url=./si_om/Geometry.EvaluatePositions.html\">Geometry.EvaluatePositions</a> <a href=\"#!/url=./si_om/Geometry.EvaluateNormals.html\">Geometry.EvaluateNormals</a> <a href=\"#!/url=./si_om/PolygonMesh.GetPolygonIndexArray.html\">PolygonMesh.GetPolygonIndexArray</a> <a href=\"#!/url=./si_om/PolygonMesh.GetTriangleVertexIndexArray.html\">PolygonMesh.GetTriangleVertexIndexArray</a> <a href=\"#!/url=./si_om/PolygonMesh.GetTriangleNodeIndexArray.html\">PolygonMesh.GetTriangleNodeIndexArray</a> <a href=\"#!/url=./si_om/PolygonMesh.GetTriangleWeightArray.html\">PolygonMesh.GetTriangleWeightArray</a> <a href=\"#!/url=./si_om/PolygonMesh.ConstructPointLocators.html\">PolygonMesh.ConstructPointLocators</a> <a href=\"#!/url=./si_om/NurbsSurfaceMesh.GetSubSurfaceIndexArray.html\">NurbsSurfaceMesh.GetSubSurfaceIndexArray</a> <a href=\"#!/url=./si_om/NurbsSurfaceMesh.GetNormalizedUVArray.html\">NurbsSurfaceMesh.GetNormalizedUVArray</a> <a href=\"#!/url=./si_om/NurbsSurfaceMesh.ConstructPointLocators.html\">NurbsSurfaceMesh.ConstructPointLocators</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";