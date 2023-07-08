var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>X3DObject.AddNurbsSurface</title>\n\
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
            <h1>X3DObject.AddNurbsSurface</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a>.AddNurbsSurface</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Creates a <a href=\"#!/url=./si_om/NurbsSurfaceMesh.html\">NurbsSurfaceMesh</a> object composed of one surface.\n\
This is typically used for creating nurbs surface from a set of geometry\n\
data.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>X3DObject X3DObject.AddNurbsSurface( Object in_vsaControlPoints, Object in_vsaUKnots, Object in_vsaVKnots, Boolean in_bUClosed, Boolean in_bVClosed, Int32 in_lUDegree, Int32 in_lVDegree, siKnotParameterization in_uParameterization, siKnotParameterization in_vParameterization, siNurbsFormat in_eNurbsFormat, String in_bstrName );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = X3DObject.AddNurbsSurface( ControlPoints, [UKnots], [VKnots], [UClosed], [VClosed], [UDegree], [VDegree], [UParam], [VParam], [NurbsFormat], [Name] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns a <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> object holding the new geometry, the new X3DObject is parented under this X3DObject.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ControlPoints		</td>\n\
		<td>1D or 3D <a href=\"#!/url=./files/Array.htm\">Array</a>		</td>\n\
		<td>\n\
\n\
		The control points used for creating the nurbs surface. The control points\n\
		can be stored in a 1-dimensional array or in a 3-dimensional matrix (UxVx4)\n\
		of x,y,z,w values. The 1-dimensional array should contain the number of\n\
		points in U and V at the beginning followed by a sequence of x,y,z,w values\n\
		(e.g. {U,V,Xo,Yo,Zo,...X(uv-1),Y(uv-1),Z(uv-1),W(uv-1)}).\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">UKnots		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/Double.htm\">Double</a>s		</td>\n\
		<td>\n\
A vector of knot values in the U direction.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Knots derived from control points.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">VKnots		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/Double.htm\">Double</a>s		</td>\n\
		<td>\n\
A vector of knot values in the V direction.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Knots derived from control points.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">UClosed		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
Specifies whether the nurbs surface is closed or not in U direction.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">VClosed		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
Specifies whether the nurbs surface is closed or not in V direction.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">UDegree		</td>\n\
		<td><a href=\"#!/url=./files/Long.htm\">Long</a>		</td>\n\
		<td>\n\
Degree of the nurbs surface in U direction.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
3			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">VDegree		</td>\n\
		<td><a href=\"#!/url=./files/Long.htm\">Long</a>		</td>\n\
		<td>\n\
Degree of the nurbs surface in V direction.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
3			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">UParam		</td>\n\
		<td><a href=\"#!/url=./si_om/siKnotParameterization.html\">siKnotParameterization</a>		</td>\n\
		<td>\n\
The parameterization factor of the nurbs surface in U direction.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siNonUniformParameterization			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">VParam		</td>\n\
		<td><a href=\"#!/url=./si_om/siKnotParameterization.html\">siKnotParameterization</a>		</td>\n\
		<td>\n\
The parameterization factor of the nurbs surface in V direction.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siNonUniformParameterization			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">NurbsFormat		</td>\n\
		<td><a href=\"#!/url=./si_om/siNurbsFormat.html\">siNurbsFormat</a>		</td>\n\
		<td>\n\
Specifies how the data is formatted. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siSINurbs			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
name of object 		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">NewScene , false\n\
set oRoot = Application.ActiveProject.ActiveScene.Root\n\
set oOrig = oRoot.AddGeometry( \"Sphere\", \"NurbsSurface\" )\n\
oOrig.radius.Value = 1.000\n\
oOrig.subdivu.Value = 1.000\n\
oOrig.subdivv.Value = 1.000\n\
oOrig.ActivePrimitive.Geometry.Surfaces(0).Get  _\n\
	siSINurbs, _\n\
	aCV, _\n\
	aUKnots,aVKnots, _\n\
	bUClosed,bVClosed, _\n\
	lUDegree,lVDegree, _\n\
	eUParameterization,eVParameterization\n\
Application.LogMessage \"bUClosed: \" &amp; bUClosed\n\
Application.LogMessage \"bVClosed: \" &amp; bVClosed\n\
Application.LogMessage \"lUDegree: \" &amp; lUDegree\n\
Application.LogMessage \"lVDegree: \" &amp; lVDegree\n\
Application.LogMessage \"eUParameterization: \" &amp; eUParameterization\n\
Application.LogMessage \"eVParameterization: \" &amp; eVParameterization\n\
Application.LogMessage \"aCV size:\" &amp; ubound(aCV,3)+1 &amp; \":\" &amp; ubound(aCV,2)+1 &amp; \":\" &amp;ubound(aCV,1)+1\n\
for i = lbound( aCV, 3 ) to ubound( aCV, 3 )\n\
	for j = lbound( aCV, 2 ) to ubound( aCV, 2 )\n\
		Application.LogMessage \"aCV(\" &amp; i &amp; \",\" &amp; j &amp;\") = \" &amp; _\n\
			aCV( 0, j, i ) &amp; \",\" &amp; aCV( 1, j, i ) &amp; \",\" &amp; aCV( 2, j, i ) &amp; \",\" &amp; aCV( 3, j, i )\n\
	next\n\
next\n\
for i = lbound( aUKnots, 1 ) to ubound( aUKnots, 1 )\n\
	Application.LogMessage \"aUKnots(\" &amp; i &amp; \") = \" &amp; aUKnots( i )\n\
next\n\
for i = lbound( aVKnots, 1 ) to ubound( aVKnots, 1 )\n\
	Application.LogMessage \"aVKnots(\" &amp; i &amp; \") = \" &amp; aVKnots( i )\n\
next\n\
set oNurbsSurface = oRoot.AddNurbsSurface( _\n\
	aCV, _\n\
	aUKnots,aVKnots, _\n\
	bUClosed,bVClosed, _\n\
	lUDegree,lVDegree, _\n\
	eUParameterization,eVParameterization, _\n\
	siSINurbs _\n\
	)\n\
\' Expected results:\n\
\'INFO : bUClosed: True\n\
\'INFO : bVClosed: False\n\
\'INFO : lUDegree: 3\n\
\'INFO : lVDegree: 3\n\
\'INFO : eUParameterization: 1\n\
\'INFO : eVParameterization: 1\n\
\'INFO : aCV size:3:4:4\n\
\'INFO : aCV(0,0) = 0,-1,0,1\n\
\'INFO : aCV(0,1) = -2.66666666666667,-1,0,1\n\
\'INFO : aCV(0,2) = -2.66666666666667,1,0,1\n\
\'INFO : aCV(0,3) = 0,1,0,1\n\
\'INFO : aCV(1,0) = 0,-1,0,1\n\
\'INFO : aCV(1,1) = 1.33333333333333,-1,2.3094010767585,1\n\
\'INFO : aCV(1,2) = 1.33333333333333,1,2.3094010767585,1\n\
\'INFO : aCV(1,3) = 0,1,0,1\n\
\'INFO : aCV(2,0) = 0,-1,0,1\n\
\'INFO : aCV(2,1) = 1.33333333333333,-1,-2.3094010767585,1\n\
\'INFO : aCV(2,2) = 1.33333333333333,1,-2.3094010767585,1\n\
\'INFO : aCV(2,3) = 0,1,0,1\n\
\'INFO : aUKnots(0) = 0\n\
\'INFO : aUKnots(1) = 1\n\
\'INFO : aUKnots(2) = 2\n\
\'INFO : aUKnots(3) = 3\n\
\'INFO : aVKnots(0) = 0\n\
\'INFO : aVKnots(1) = 0\n\
\'INFO : aVKnots(2) = 0\n\
\'INFO : aVKnots(3) = 1\n\
\'INFO : aVKnots(4) = 1\n\
\'INFO : aVKnots(5) = 1</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/NurbsSurface.html\">NurbsSurface</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";