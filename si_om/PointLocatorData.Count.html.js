var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>PointLocatorData.Count</title>\n\
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
            <h1>PointLocatorData.Count</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/PointLocatorData.html\">PointLocatorData</a>.Count <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns the number of point locators contained in the <a href=\"#!/url=./si_om/PointLocatorData.html\">PointLocatorData</a> \n\
as a <a href=\"#!/url=./files/Long.htm\">Long</a>.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
Int32 rtn = PointLocatorData.Count;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example uses PointLocatorData to find closest vertices on a polygon mesh\n\
	within a specific radius, and then creates a cluster on these points.\n\
*/\n\
NewScene(null, false);\n\
var root = Application.ActiveSceneRoot;\n\
var GridObj = root.AddGeometry(\"Grid\", \"MeshSurface\");\n\
Translate(GridObj, 0, 0, -2.0, siRelative, siView, siObj, siXYZ);\n\
var GridGeom = GridObj.ActivePrimitive.Geometry;\n\
// Set up to closest vertex search\n\
GridGeom.SetupPointLocatorQueries(siClosestVertexOrKnot, GridObj.Kinematics.Global.Transform, null, -1);\n\
// Get all vertices within a radius of 2 units relatively to the world center\n\
var PositionToQuery = XSIMath.CreateVector3(0,0,0);\n\
var PointLocatorsWithinTwoUnits = GridGeom.GetClosestLocationsWithinRadius(PositionToQuery, 2.0);\n\
var VerticesString = \" \";\n\
var ClosestVerticesArray = new Array();\n\
var PtLocIndexToQuery = new Array();\n\
for( i=0; i&lt;PointLocatorsWithinTwoUnits.Count; i++ ) {\n\
	// Even though the point locators have be defined to exactly match the vertex \n\
	// positions, the search data is returned as a position on a specific triangle, \n\
	// just as any other use of the Point Locator.  However the vertex that matches \n\
	// can be determined because it will be weighted at 100%.\n\
	PtLocIndexToQuery[0] = i;\n\
	var SubTriangleVertices = GridGeom.GetTriangleVertexIndexArray(\n\
		PointLocatorsWithinTwoUnits, PtLocIndexToQuery).toArray();\n\
	var SubTriangleWeights = GridGeom.GetTriangleWeightArray(\n\
		PointLocatorsWithinTwoUnits, PtLocIndexToQuery).toArray();\n\
	var VtxIdx = SubTriangleVertices[0];\n\
	if(SubTriangleWeights[1] &gt; SubTriangleWeights[0] &amp;&amp; SubTriangleWeights[1] &gt; SubTriangleWeights[2])\n\
		VtxIdx = SubTriangleVertices[1];\n\
	else if(SubTriangleWeights[2] &gt; SubTriangleWeights[0] &amp;&amp; SubTriangleWeights[2] &gt; SubTriangleWeights[1])\n\
		VtxIdx = SubTriangleVertices[2];\n\
	ClosestVerticesArray[i] = VtxIdx;\n\
	VerticesString += VtxIdx\n\
	if( i != PointLocatorsWithinTwoUnits.Count-1) {\n\
		VerticesString += \", \";\n\
	}\n\
}\n\
// Create a cluster on these vertices\n\
GridGeom.AddCluster(siVertexCluster, \"ClosestVertices\", ClosestVerticesArray);\n\
Application.LogMessage(\"There are \" + PointLocatorsWithinTwoUnits.Count \n\
			+ \" grid vertices in the 2 unit sphere located at the world center.\");\n\
Application.LogMessage(\"These vertices are (ordered by proximity):\");\n\
Application.LogMessage(VerticesString);\n\
// Expected results:\n\
// INFO : There are 5 grid vertices in the 2 unit sphere located at the world center.\n\
// INFO : These vertices are (ordered by proximity):\n\
// INFO :  42, 51, 41, 33, 43</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/PointLocatorData.html\">PointLocatorData</a> <a href=\"#!/url=./si_om/Geometry.html\">Geometry</a> <a href=\"#!/url=./si_om/Geometry.GetClosestLocations.html\">Geometry.GetClosestLocations</a> <a href=\"#!/url=./si_om/Geometry.GetClosestLocationsWithinRadius.html\">Geometry.GetClosestLocationsWithinRadius</a> <a href=\"#!/url=./si_om/Geometry.GetRaycastIntersections.html\">Geometry.GetRaycastIntersections</a> <a href=\"#!/url=./si_om/Geometry.SetupPointLocatorQueries.html\">Geometry.SetupPointLocatorQueries</a> <a href=\"#!/url=./si_om/Geometry.GetSurfacePointLocatorsFromPoints.html\">Geometry.GetSurfacePointLocatorsFromPoints</a> <a href=\"#!/url=./si_om/Geometry.EvaluatePositions.html\">Geometry.EvaluatePositions</a> <a href=\"#!/url=./si_om/Geometry.EvaluateNormals.html\">Geometry.EvaluateNormals</a> <a href=\"#!/url=./si_om/Geometry.EvaluateClusterProperty.html\">Geometry.EvaluateClusterProperty</a> <a href=\"#!/url=./si_om/PolygonMesh.GetPolygonIndexArray.html\">PolygonMesh.GetPolygonIndexArray</a> <a href=\"#!/url=./si_om/PolygonMesh.GetTriangleVertexIndexArray.html\">PolygonMesh.GetTriangleVertexIndexArray</a> <a href=\"#!/url=./si_om/PolygonMesh.GetTriangleNodeIndexArray.html\">PolygonMesh.GetTriangleNodeIndexArray</a> <a href=\"#!/url=./si_om/PolygonMesh.GetTriangleWeightArray.html\">PolygonMesh.GetTriangleWeightArray</a> <a href=\"#!/url=./si_om/PolygonMesh.ConstructPointLocators.html\">PolygonMesh.ConstructPointLocators</a> <a href=\"#!/url=./si_om/NurbsSurfaceMesh.GetSubSurfaceIndexArray.html\">NurbsSurfaceMesh.GetSubSurfaceIndexArray</a> <a href=\"#!/url=./si_om/NurbsSurfaceMesh.GetNormalizedUVArray.html\">NurbsSurfaceMesh.GetNormalizedUVArray</a> <a href=\"#!/url=./si_om/NurbsSurfaceMesh.ConstructPointLocators.html\">NurbsSurfaceMesh.ConstructPointLocators</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";