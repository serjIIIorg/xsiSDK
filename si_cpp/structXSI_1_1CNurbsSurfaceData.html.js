var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>CNurbsSurfaceData Struct Reference</title>\n\
   \n\
</head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><link rel=\"stylesheet\" type=\"text/css\" href=\"si_cpp/navtree.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"si_cpp/doxygen.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"si_cpp/tabs.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"style/adsk.cpm.css\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/yepnope.1.5.4-min.js\"); });</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">\n\
var weAreIn21 = $(\"div#main.view-active\").length;\n\
var prefix = \"\";\n\
if (weAreIn21)\n\
{ prefix = \"si_cpp/\"; }\n\
yepnope([{\n\
load:[prefix + \"jquery.js\", prefix + \"navtree.js\", prefix + \"resize.js\", prefix + \"dynsections.js\"],\n\
complete: function() {\n\
  dQuery = jQuery.noConflict(\'true\');\n\
  dQuery(window).load(resizeHeight);\n\
  dQuery(document).ready( function () {\n\
    setTimeout( function () {\n\
      initResizable();\n\
      initNavTree(\'structXSI_1_1CNurbsSurfaceData.html\', prefix);\n\
      dQuery(window).trigger(\"load\");\n\
      }, 100);\n\
    }\n\
  );\n\
}\n\
}]\n\
)\n\
</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>CNurbsSurfaceData Struct Reference</h1>\n\
         </div>\n\
\n\
    <div id=\"top\"><!-- Generated by Doxygen 1.8.6 -->\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./si_cpp/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/pages.html\"><span>Topics</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/modules.html\"><span>Modules</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/namespaces.html\"><span>Namespaces</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./si_cpp/annotated.html\"><span>Classes</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/files.html\"><span>Files</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow2\" class=\"tabs2\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./si_cpp/annotated.html\"><span>Class&#160;List</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/hierarchy.html\"><span>Class&#160;Hierarchy</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions.html\"><span>Class&#160;Members</span></a></li>\n\
    </ul>\n\
  </div>\n\
</div><!-- top -->\n\
<div id=\"side-nav\" class=\"ui-resizable side-nav-resizable\">\n\
  <div id=\"nav-tree\">\n\
    <div id=\"nav-tree-contents\">\n\
      <div id=\"nav-sync\" class=\"sync\"></div>\n\
    </div>\n\
  </div>\n\
  <div id=\"splitbar\" style=\"-moz-user-select:none;\" class=\"ui-resizable-handle\">\n\
  </div>\n\
</div>\n\
\n\
<div id=\"doc-content\">\n\
<div class=\"header\">\n\
  <div class=\"summary\">\n\
<a href=\"#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"#pub-attribs\">Public Attributes</a>  </div>\n\
  <div class=\"headertitle\">\n\
<div class=\"title\">CNurbsSurfaceData Struct Reference</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/xsi__nurbsdata_8h_source.html\">xsi_nurbsdata.h</a>&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>This structure represents a data description for a <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1NurbsSurface.html\" title=\"The NurbsSurface object gives access to the X3DObject&#39;s nurbs surface Geometry. \">NurbsSurface</a>. </p>\n\
<dl class=\"section see\"><dt>See Also</dt><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CNurbsSurfaceDataArray.html\" title=\"The CNurbsSurfaceDataArray is an uni-dimensional array of CNurbsSurfaceData objects. \">CNurbsSurfaceDataArray</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1X3DObject.html#a71e19252d7e5a43b6f05cae6938f0355\">X3DObject::AddNurbsSurface</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1NurbsSurface.html#a279a02c96676c65f653c06a1766beea8\">NurbsSurface::Get</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1NurbsSurface.html#a4beb8c424eb72e4fbc32bd45b8652fb4\">NurbsSurface::Set</a> </dd></dl>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:afe3567f7f4dd7daeafec5aa92ef68d50\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CNurbsSurfaceData.html#afe3567f7f4dd7daeafec5aa92ef68d50\">CNurbsSurfaceData</a> ()</td></tr>\n\
<tr class=\"separator:afe3567f7f4dd7daeafec5aa92ef68d50\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a362fe92f8adb7a1e3e9c4b56f23c18da\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CNurbsSurfaceData.html#a362fe92f8adb7a1e3e9c4b56f23c18da\">operator==</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CNurbsSurfaceData.html\">CNurbsSurfaceData</a> &amp;in_surfaceData) const </td></tr>\n\
<tr class=\"separator:a362fe92f8adb7a1e3e9c4b56f23c18da\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a1736fc1d1422b03f392885eca1e43dbb\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CNurbsSurfaceData.html#a1736fc1d1422b03f392885eca1e43dbb\">operator!=</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CNurbsSurfaceData.html\">CNurbsSurfaceData</a> &amp;in_surfaceData) const </td></tr>\n\
<tr class=\"separator:a1736fc1d1422b03f392885eca1e43dbb\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-attribs\"></a>\n\
Public Attributes</h2></td></tr>\n\
<tr class=\"memitem:a3231fdedd4ab1d27b8ba183023aab657\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CVector4Array.html\">MATH::CVector4Array</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CNurbsSurfaceData.html#a3231fdedd4ab1d27b8ba183023aab657\">m_aControlPoints</a></td></tr>\n\
<tr class=\"separator:a3231fdedd4ab1d27b8ba183023aab657\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a33efb5a21096eb383b86123b2670f480\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">LONG&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CNurbsSurfaceData.html#a33efb5a21096eb383b86123b2670f480\">m_lNbUControlPoints</a></td></tr>\n\
<tr class=\"separator:a33efb5a21096eb383b86123b2670f480\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a9095f1ee5eab89aef73d24e59dede747\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">LONG&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CNurbsSurfaceData.html#a9095f1ee5eab89aef73d24e59dede747\">m_lNbVControlPoints</a></td></tr>\n\
<tr class=\"separator:a9095f1ee5eab89aef73d24e59dede747\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a70ebc4431400a95e0010af235a27d46a\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CDoubleArray.html\">CDoubleArray</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CNurbsSurfaceData.html#a70ebc4431400a95e0010af235a27d46a\">m_aUKnots</a></td></tr>\n\
<tr class=\"separator:a70ebc4431400a95e0010af235a27d46a\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a4539c16532aeb2fae422854444ffdebc\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CDoubleArray.html\">CDoubleArray</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CNurbsSurfaceData.html#a4539c16532aeb2fae422854444ffdebc\">m_aVKnots</a></td></tr>\n\
<tr class=\"separator:a4539c16532aeb2fae422854444ffdebc\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab6367b379609625a8aa02aa69831e21c\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CNurbsSurfaceData.html#ab6367b379609625a8aa02aa69831e21c\">m_bUClosed</a></td></tr>\n\
<tr class=\"separator:ab6367b379609625a8aa02aa69831e21c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a9fb32daf786fb2f6b45664bf3c0888aa\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CNurbsSurfaceData.html#a9fb32daf786fb2f6b45664bf3c0888aa\">m_bVClosed</a></td></tr>\n\
<tr class=\"separator:a9fb32daf786fb2f6b45664bf3c0888aa\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a623f62f2a7049b73a0a84812826b810a\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">LONG&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CNurbsSurfaceData.html#a623f62f2a7049b73a0a84812826b810a\">m_lUDegree</a></td></tr>\n\
<tr class=\"separator:a623f62f2a7049b73a0a84812826b810a\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab819af3ed4886fe4b9349d22b8c2632a\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">LONG&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CNurbsSurfaceData.html#ab819af3ed4886fe4b9349d22b8c2632a\">m_lVDegree</a></td></tr>\n\
<tr class=\"separator:ab819af3ed4886fe4b9349d22b8c2632a\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a61466b40b53aa16d99149f56f1b6776a\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/namespaceXSI.html#a375fad35ea924c98b5693f8134f10054\">siKnotParameterization</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CNurbsSurfaceData.html#a61466b40b53aa16d99149f56f1b6776a\">m_siUParameterization</a></td></tr>\n\
<tr class=\"separator:a61466b40b53aa16d99149f56f1b6776a\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a531f04c8db2e82a6d2e5ca03cb55c492\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/namespaceXSI.html#a375fad35ea924c98b5693f8134f10054\">siKnotParameterization</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CNurbsSurfaceData.html#a531f04c8db2e82a6d2e5ca03cb55c492\">m_siVParameterization</a></td></tr>\n\
<tr class=\"separator:a531f04c8db2e82a6d2e5ca03cb55c492\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"afe3567f7f4dd7daeafec5aa92ef68d50\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CNurbsSurfaceData.html\">CNurbsSurfaceData</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">inline</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
<p>Default Constructor. </p>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a362fe92f8adb7a1e3e9c4b56f23c18da\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool operator== </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CNurbsSurfaceData.html\">CNurbsSurfaceData</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>in_surfaceData</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">inline</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
<p>Equality operator. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramname\">in_surfaceData</td><td><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CNurbsSurfaceData.html\" title=\"This structure represents a data description for a NurbsSurface. \">CNurbsSurfaceData</a> to compare with. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>true if they are equal; false if they are not equal. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a1736fc1d1422b03f392885eca1e43dbb\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool operator!= </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CNurbsSurfaceData.html\">CNurbsSurfaceData</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>in_surfaceData</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">inline</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
<p>Inequality operator. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramname\">in_surfaceData</td><td><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CNurbsSurfaceData.html\" title=\"This structure represents a data description for a NurbsSurface. \">CNurbsSurfaceData</a> to compare with. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>true if they are not equal; false if they are equal. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Data Documentation</h2>\n\
<a class=\"anchor\" id=\"a3231fdedd4ab1d27b8ba183023aab657\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CVector4Array.html\">MATH::CVector4Array</a> m_aControlPoints</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Array of <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1ControlPoint.html\" title=\"The ControlPoint of a NurbsSurface or a NurbsCurve. \">ControlPoint</a> values. </p>\n\
<dl class=\"section user\"><dt>Note:</dt><dd>UV ordering is different for the C++ API than it is for scripting. In scripting, a control point array is ordered U-V like so: <br>\n\
<br>\n\
 <code> (0,0)...(0,cntV-1), (1,0)....(1,cntV-1),(cntU-1,0)...(cntU-1,cntV-1) </code> <br>\n\
<br>\n\
 However, the order for the C++ API is V-U: <br>\n\
<br>\n\
 <code> (0,0)...(cntU-1,0), (0,1)....(cntU-1,1)...(0,cntV-1)...(cntU-1,cntV-1) </code> <br>\n\
<br>\n\
 Since functions like <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1NurbsSurface.html#a4beb8c424eb72e4fbc32bd45b8652fb4\">NurbsSurface::Set</a> and <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1X3DObject.html#a71e19252d7e5a43b6f05cae6938f0355\">X3DObject::AddNurbsSurface</a> expect the U-V order, you must reorder the array before passing it to these functions. See <a href=\"#!/url=./files/cpp_understand_UV_Ordering.htm\">UV Ordering</a> for a sample conversion function. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a33efb5a21096eb383b86123b2670f480\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">LONG m_lNbUControlPoints</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Number of ControlPoints in U </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a9095f1ee5eab89aef73d24e59dede747\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">LONG m_lNbVControlPoints</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Number of ControlPoints in V </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a70ebc4431400a95e0010af235a27d46a\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CDoubleArray.html\">CDoubleArray</a> m_aUKnots</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>U Knot values </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a4539c16532aeb2fae422854444ffdebc\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CDoubleArray.html\">CDoubleArray</a> m_aVKnots</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>V Knot values </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ab6367b379609625a8aa02aa69831e21c\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool m_bUClosed</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Specify if the surface is closed in U direction. </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a9fb32daf786fb2f6b45664bf3c0888aa\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool m_bVClosed</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Specify if the surface is closed in V direction. </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a623f62f2a7049b73a0a84812826b810a\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">LONG m_lUDegree</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Specify if the degree of the nurbs surface in U. </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ab819af3ed4886fe4b9349d22b8c2632a\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">LONG m_lVDegree</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Specify if the degree of the nurbs surface in V. </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a61466b40b53aa16d99149f56f1b6776a\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/namespaceXSI.html#a375fad35ea924c98b5693f8134f10054\">siKnotParameterization</a> m_siUParameterization</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Parameterization factor of the nurbs surface in U. </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a531f04c8db2e82a6d2e5ca03cb55c492\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/namespaceXSI.html#a375fad35ea924c98b5693f8134f10054\">siKnotParameterization</a> m_siVParameterization</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Parameterization factor of the nurbs surface in V. </p>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this struct was generated from the following file:<ul>\n\
<li><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/xsi__nurbsdata_8h_source.html\">xsi_nurbsdata.h</a></li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";