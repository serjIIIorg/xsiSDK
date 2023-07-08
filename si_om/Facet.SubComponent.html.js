var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Facet.SubComponent</title>\n\
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
            <h1>Facet.SubComponent</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Facet.html\">Facet</a>.SubComponent <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v2.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Creates a <a href=\"#!/url=./si_om/SubComponent.html\">SubComponent</a> from this facet. The new SubComponent\n\
allows you to access the specific type of <a href=\"#!/url=./si_om/Geometry.html\">Geometry</a>, such as\n\
a <a href=\"#!/url=./si_om/PolygonFace.html\">PolygonFace</a> for a <a href=\"#!/url=./si_om/PolygonMesh.html\">PolygonMesh</a> object vs. \n\
a <a href=\"#!/url=./si_om/NurbsSurface.html\">NurbsSurface</a> for a <a href=\"#!/url=./si_om/NurbsSurfaceMesh.html\">NurbsSurfaceMesh</a>.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
SubComponent rtn = Facet.SubComponent;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example demonstrates how to work with a subset of facets on a polygon mesh\n\
\'\n\
NewScene , false\n\
dim oObj, oSubComponent \n\
set oObj = Application.ActiveSceneRoot.AddGeometry(\"Cube\",\"MeshSurface\")\n\
set oFacetColl = oObj.ActivePrimitive.Geometry.Facets\n\
set oSubComponent = oFacetColl(2).SubComponent\n\
Application.LogMessage oSubComponent &amp; \" has \" &amp; UBound(oSubComponent.ElementArray)+1 &amp; _\n\
	\" components of type \" &amp; TypeName(oSubComponent.ComponentCollection(0))\n\
set oObj = Application.ActiveSceneRoot.AddGeometry(\"Cube\",\"MeshSurface\")\n\
set oSubComponent = oObj.ActivePrimitive.Geometry.Facets(2).SubComponent\n\
oSubComponent.AddElement 3\n\
Application.LogMessage oSubComponent &amp; \" has \" &amp; UBound(oSubComponent.ElementArray)+1 &amp; _\n\
	\" components of type \" &amp; TypeName(oSubComponent.ComponentCollection(0))\n\
\' Expected results:\n\
\'INFO : cube.poly[2] has 1 components of type PolygonFace\n\
\'INFO : cube1.poly[2,3] has 2 components of type PolygonFace</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to access a PolygonMesh-specific property.\n\
	First it starts out getting the generic Facets collection. From the \n\
	FacetCollection it creates a SubComponent. From the SubComponent, it gets \n\
	the PolygonMesh-specific PolygonFaceCollection\n\
*/\n\
NewScene( null, false );\n\
// Setup: create a PolygonMesh and get its facet collection\n\
var grid = Application.ActiveSceneRoot.AddGeometry( \"Grid\", \"MeshSurface\" );\n\
var fcs = grid.ActivePrimitive.Geometry.Facets;\n\
// Convert it to SubComponent and just for fun, consider only four facets \n\
var subcmp = fcs.SubComponent;\n\
var subset = new Array(27,28,35,36);\n\
subcmp.ElementArray = subset;\n\
// Now convert the SubComponent to a PolygonFaceCollection using the\n\
// SubComponent.ComponentCollection property and then loop through the \n\
// list of PolygonFaces, getting its adjacent neighbors\n\
var polyfaces = subcmp.ComponentCollection;\n\
for (var i=0; i&lt;polyfaces.Count; i++) {\n\
	Application.LogMessage( \"PolygonFace[\" + i + \"] at index \" + polyfaces(i) + \" is next to...\" );\n\
	var adjacent = polyfaces(i).NeighborPolygons();\n\
	for (var j=0; j&lt;adjacent.Count; j++) {\n\
		Application.LogMessage( \"\\t...the PolygonFace at index \" + adjacent(j).Index );\n\
	}\n\
}\n\
// Expected results:\n\
//INFO : PolygonFace[0] at index PolygonFace is next to...\n\
//INFO : 	...the PolygonFace at index 19\n\
//INFO : 	...the PolygonFace at index 28\n\
//INFO : 	...the PolygonFace at index 35\n\
//INFO : 	...the PolygonFace at index 26\n\
//INFO : PolygonFace[1] at index PolygonFace is next to...\n\
//INFO : 	...the PolygonFace at index 20\n\
//INFO : 	...the PolygonFace at index 29\n\
//INFO : 	...the PolygonFace at index 36\n\
//INFO : 	...the PolygonFace at index 27\n\
//INFO : PolygonFace[2] at index PolygonFace is next to...\n\
//INFO : 	...the PolygonFace at index 27\n\
//INFO : 	...the PolygonFace at index 36\n\
//INFO : 	...the PolygonFace at index 43\n\
//INFO : 	...the PolygonFace at index 34\n\
//INFO : PolygonFace[3] at index PolygonFace is next to...\n\
//INFO : 	...the PolygonFace at index 28\n\
//INFO : 	...the PolygonFace at index 37\n\
//INFO : 	...the PolygonFace at index 44\n\
//INFO : 	...the PolygonFace at index 35</pre></td></tr>\n\
</table>\n\
</div><h4>3. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#\n\
# This example demonstrates how to determine which polygons are selected\n\
# in the UI by using the SubComponent object via the Selection\n\
# \n\
app = Application\n\
app.NewScene( \"\", 0 )\n\
# Setup: create a polygon mesh and select some polygons on it\n\
disc = app.ActiveSceneRoot.AddGeometry( \"Sphere\", \"MeshSurface\" )\n\
app.Selection.Clear()\n\
app.Selection.SetAsText( disc.Name + \".poly[20,3,47,0,16,34,22]\" );\n\
# When components are selected, the first member of the Selection\n\
# is returned as a CollectionItem which can then be converted to a\n\
# SubComponent object. From there, the ComponentCollection property\n\
# converts it to the proper collection type (in this case a \n\
# PolygonFaceCollection)\n\
selected = app.Selection(0).SubComponent.ComponentCollection\n\
for sel in selected :\n\
	app.LogMessage( \"poly[%s] is selected.\" % (sel.Index) )\n\
# Expected results:\n\
#INFO : poly[20] is selected.\n\
#INFO : poly[3] is selected.\n\
#INFO : poly[47] is selected.\n\
#INFO : poly[0] is selected.\n\
#INFO : poly[16] is selected.\n\
#INFO : poly[34] is selected.\n\
#INFO : poly[22] is selected.</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";