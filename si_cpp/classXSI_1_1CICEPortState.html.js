var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>CICEPortState Class Reference</title>\n\
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
      initNavTree(\'classXSI_1_1CICEPortState.html\', prefix);\n\
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
            <h1>CICEPortState Class Reference</h1>\n\
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
<a href=\"#pub-types\">Public Types</a> &#124;\n\
<a href=\"#pub-methods\">Public Member Functions</a>  </div>\n\
  <div class=\"headertitle\">\n\
<div class=\"title\">CICEPortState Class Reference</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/xsi__iceportstate_8h_source.html\">xsi_iceportstate.h</a>&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html\" title=\"CICEPortState is used for accessing the state of a custom ICENode input port from the BeginEvaluate c...\">CICEPortState</a> is used for accessing the state of a custom <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1ICENode.html\" title=\"The ICENode object represents an effect node in the ICE graph. \">ICENode</a> input port from the <a href=\"#!/url=./files/cb_ICENode_BeginEvaluate.htm\">BeginEvaluate</a> callback. </p>\n\
<p><a class=\"anchor\" id=\"dirty states:checking for port changes\"></a> The state information is normally used by custom nodes for managing internal cache in order to optimize the computation and improve performance. The following port states are supported: </p>\n\
<pre class=\"fragment\">\\li CICEPortState::siTimeDirtyState: This state is true if the input data is animated and the time line has changed.\n\
\\li CICEPortState::siDataDirtyState: This state is true when the data going through the port have been modified.\n\
    CICEPortState::siTimeDirtyState is always true when \\c siDataDirtyState is set to true. Disconnecting a port\n\
    will set \\c siDataDirtyState to true.\n\
\\li CICEPortState::siTypeDirtyState: This state is true if the port connection type has changed. When\n\
    CICEPortState::siTypeDirtyState is true all other states are also true.\n\
</pre><dl class=\"section user\"><dt>Tip:</dt><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html#a79be0489b44a77620de069631265f22fa4990f4431660053845f6189e5e019198\">CICEPortState::siAnyDirtyState</a> can be used to test if at least one state is dirty. </dd></dl>\n\
<dl class=\"section user\"><dt>Note:</dt><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html\" title=\"CICEPortState is used for accessing the state of a custom ICENode input port from the BeginEvaluate c...\">CICEPortState</a> cannot be used in the <a href=\"#!/url=./files/cb_ICENode_Evaluate.htm\">Evaluate</a> callback.</dd></dl>\n\
<dl class=\"section since\"><dt>Since</dt><dd>8.0 (2010)</dd></dl>\n\
<dl class=\"section user\"><dt>Example:</dt><dd>This example logs the dirty state information of input ports by using the CICEPortState class. For a more detailed example see the <a href=\"#!/url=./files/CustomICENodes/netview_CustomICENodes.htm\">PortStateObserver custom ICE node</a> example <div class=\"fragment\"><div class=\"line\">XSIPLUGINCALLBACK CStatus Port_State_Observer_BeginEvaluate( ICENodeContext&amp; in_ctxt )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html#a6841a7c358d93c640a101ab58eb03523\">CICEPortState</a> portGeomGroup( in_ctxt, ID_IN_GeometryGroup );</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html#a6841a7c358d93c640a101ab58eb03523\">CICEPortState</a> portGeomCurve( in_ctxt, ID_IN_NurbsCurve );</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html#a6841a7c358d93c640a101ab58eb03523\">CICEPortState</a> portGeomMesh( in_ctxt, ID_IN_MeshSurf );</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html#a6841a7c358d93c640a101ab58eb03523\">CICEPortState</a> portGeomNurbsSurf( in_ctxt, ID_IN_NurbsSurf );</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html#a6841a7c358d93c640a101ab58eb03523\">CICEPortState</a> portGeomCloud( in_ctxt, ID_IN_PointCloud );</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html#a6841a7c358d93c640a101ab58eb03523\">CICEPortState</a> data( in_ctxt, ID_IN_Data );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span> dCurrentFrame = in_ctxt.GetTime();</div>\n\
<div class=\"line\">    LogPortStates( portGeomGroup, L<span class=\"stringliteral\">&quot;GeometryGroup&quot;</span>, dCurrentFrame );</div>\n\
<div class=\"line\">    LogPortStates( portGeomCurve, L<span class=\"stringliteral\">&quot;NurbsCurve&quot;</span>, dCurrentFrame );</div>\n\
<div class=\"line\">    LogPortStates( portGeomMesh, L<span class=\"stringliteral\">&quot;MeshSurf&quot;</span>, dCurrentFrame );</div>\n\
<div class=\"line\">    LogPortStates( portGeomNurbsSurf, L<span class=\"stringliteral\">&quot;NurbsSurf&quot;</span>, dCurrentFrame );</div>\n\
<div class=\"line\">    LogPortStates( portGeomCloud, L<span class=\"stringliteral\">&quot;PointCloud&quot;</span>, dCurrentFrame );</div>\n\
<div class=\"line\">    LogPortStates( data, L<span class=\"stringliteral\">&quot;Data&quot;</span>, dCurrentFrame );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281da2bc49ec37d6a5715dd23e85f1ff5bb59\">CStatus::OK</a>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> LogPortStates( <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html#a6841a7c358d93c640a101ab58eb03523\">CICEPortState</a>&amp; in_port, <span class=\"keyword\">const</span> CString&amp; in_portName, <span class=\"keywordtype\">double</span> in_dCurrentFrame )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( in_port.IsDirty( <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html#a79be0489b44a77620de069631265f22fa4990f4431660053845f6189e5e019198\">CICEPortState::siAnyDirtyState</a> ) )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">bool</span> bTypeDirtyState = in_port.IsDirty( <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html#a79be0489b44a77620de069631265f22fab1e3d0b8cc32909fc23c02639b3d2b4b\">CICEPortState::siTypeDirtyState</a> );</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">bool</span> bDataDirtyState = in_port.IsDirty( <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html#a79be0489b44a77620de069631265f22fa3497edb42bb4fc49b6957ad1aea45178\">CICEPortState::siDataDirtyState</a> );</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">bool</span> bTimeDirtyState = in_port.IsDirty( <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html#a79be0489b44a77620de069631265f22fa4ad33080513b8324d8a933e5110899c8\">CICEPortState::siTimeDirtyState</a> );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        in_port.ClearState();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        Application app;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Don&#39;t log redundant information:</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// bTypeDirtyState always implies bDataDirtyState + bTimeDirtyState</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// bDataDirtyState always implies bTimeDirtyState</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( bTypeDirtyState)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            app.LogMessage( <span class=\"stringliteral\">&quot;&gt;&gt;&gt; Port &quot;</span> + in_portName + <span class=\"stringliteral\">&quot; siTypeDirtyState at frame &quot;</span> + CString(in_dCurrentFrame) + <span class=\"stringliteral\">&quot; is dirty&quot;</span> );</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> ( bDataDirtyState)</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                app.LogMessage( <span class=\"stringliteral\">&quot;&gt;&gt;&gt; Port &quot;</span> + in_portName + <span class=\"stringliteral\">&quot; siDataDirtyState at frame &quot;</span> + CString(in_dCurrentFrame) + <span class=\"stringliteral\">&quot; is dirty&quot;</span> );</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> ( bTimeDirtyState)</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                app.LogMessage( <span class=\"stringliteral\">&quot;&gt;&gt;&gt; Port &quot;</span> + in_portName + <span class=\"stringliteral\">&quot; siTimeDirtyState at frame &quot;</span> + CString(in_dCurrentFrame) + <span class=\"stringliteral\">&quot; is dirty&quot;</span> );</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </dd></dl>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-types\"></a>\n\
Public Types</h2></td></tr>\n\
<tr class=\"memitem:a79be0489b44a77620de069631265f22f\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">enum &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html#a79be0489b44a77620de069631265f22f\">DirtyState</a> { <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html#a79be0489b44a77620de069631265f22fab1e3d0b8cc32909fc23c02639b3d2b4b\">siTypeDirtyState</a> = 1&lt;&lt;0, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html#a79be0489b44a77620de069631265f22fa3497edb42bb4fc49b6957ad1aea45178\">siDataDirtyState</a> = 1&lt;&lt;1, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html#a79be0489b44a77620de069631265f22fa4ad33080513b8324d8a933e5110899c8\">siTimeDirtyState</a> = 1&lt;&lt;2, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html#a79be0489b44a77620de069631265f22fa4990f4431660053845f6189e5e019198\">siAnyDirtyState</a> = siTypeDirtyState|siDataDirtyState|siTimeDirtyState\n\
 }</td></tr>\n\
<tr class=\"separator:a79be0489b44a77620de069631265f22f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:ad3e5499ec94b2b6826212a7d9b8679d7\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html#ad3e5499ec94b2b6826212a7d9b8679d7\">CICEPortState</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1ICENodeContext.html\">ICENodeContext</a> &amp;in_ctxt, ULONG in_nInputPortID, ULONG in_nInstanceIndex=0)</td></tr>\n\
<tr class=\"separator:ad3e5499ec94b2b6826212a7d9b8679d7\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a6841a7c358d93c640a101ab58eb03523\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html#a6841a7c358d93c640a101ab58eb03523\">CICEPortState</a> ()</td></tr>\n\
<tr class=\"separator:a6841a7c358d93c640a101ab58eb03523\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a2336f9908708c2efcdff9d8c6c46b0e7\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html#a2336f9908708c2efcdff9d8c6c46b0e7\">~CICEPortState</a> ()</td></tr>\n\
<tr class=\"separator:a2336f9908708c2efcdff9d8c6c46b0e7\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a2fc345baa86b02c4d7070fa3d73f45d7\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html#a2fc345baa86b02c4d7070fa3d73f45d7\">CICEPortState</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html\">CICEPortState</a> &amp;in_obj)</td></tr>\n\
<tr class=\"separator:a2fc345baa86b02c4d7070fa3d73f45d7\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a074d075a54090f94f7c47e24f4c17208\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html#a074d075a54090f94f7c47e24f4c17208\">operator==</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html\">CICEPortState</a> &amp;in_obj) const </td></tr>\n\
<tr class=\"separator:a074d075a54090f94f7c47e24f4c17208\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad58e9bca030782751e415ae79f074680\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html#ad58e9bca030782751e415ae79f074680\">operator!=</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html\">CICEPortState</a> &amp;in_obj) const </td></tr>\n\
<tr class=\"separator:ad58e9bca030782751e415ae79f074680\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab25bbf6e6c4ab36c0c7d114e7200ccfe\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html\">CICEPortState</a> &amp;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html#ab25bbf6e6c4ab36c0c7d114e7200ccfe\">operator=</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html\">CICEPortState</a> &amp;in_obj)</td></tr>\n\
<tr class=\"separator:ab25bbf6e6c4ab36c0c7d114e7200ccfe\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:afa8720abaf6972d6dac22a8cd1a67225\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html#afa8720abaf6972d6dac22a8cd1a67225\">IsValid</a> () const </td></tr>\n\
<tr class=\"separator:afa8720abaf6972d6dac22a8cd1a67225\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a8ba7104f19642abbf575c4a5475ae5fe\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html#a8ba7104f19642abbf575c4a5475ae5fe\">IsDirty</a> (unsigned short in_flag=<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html#a79be0489b44a77620de069631265f22fa4990f4431660053845f6189e5e019198\">siAnyDirtyState</a>) const </td></tr>\n\
<tr class=\"separator:a8ba7104f19642abbf575c4a5475ae5fe\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aadd0c8bf4d40d83e231053dc5094bd63\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">void&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html#aadd0c8bf4d40d83e231053dc5094bd63\">ClearState</a> ()</td></tr>\n\
<tr class=\"separator:aadd0c8bf4d40d83e231053dc5094bd63\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Enumeration Documentation</h2>\n\
<a class=\"anchor\" id=\"a79be0489b44a77620de069631265f22f\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">enum <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html#a79be0489b44a77620de069631265f22f\">DirtyState</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Defines the supported dirty port state types. </p>\n\
<table class=\"fieldtable\">\n\
<tr><th colspan=\"2\">Enumerator</th></tr><tr><td class=\"fieldname\"><em><a class=\"anchor\" id=\"a79be0489b44a77620de069631265f22fab1e3d0b8cc32909fc23c02639b3d2b4b\"></a>siTypeDirtyState</em>&#160;</td><td class=\"fielddoc\">\n\
<p>Port type change. This state is true if the port connection type has changed. When <code>siTypeDirtyState</code> is true all other states are also true. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><em><a class=\"anchor\" id=\"a79be0489b44a77620de069631265f22fa3497edb42bb4fc49b6957ad1aea45178\"></a>siDataDirtyState</em>&#160;</td><td class=\"fielddoc\">\n\
<p>Data change. This state is true when the data going through the port has been modified. <code>siTimeDirtyState</code> is always true when <code>siDataDirtyState</code> is set to true. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><em><a class=\"anchor\" id=\"a79be0489b44a77620de069631265f22fa4ad33080513b8324d8a933e5110899c8\"></a>siTimeDirtyState</em>&#160;</td><td class=\"fielddoc\">\n\
<p>Time change. This state is true if the input data is animated and the time line has changed. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><em><a class=\"anchor\" id=\"a79be0489b44a77620de069631265f22fa4990f4431660053845f6189e5e019198\"></a>siAnyDirtyState</em>&#160;</td><td class=\"fielddoc\">\n\
<p>Any type. </p>\n\
</td></tr>\n\
</table>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"ad3e5499ec94b2b6826212a7d9b8679d7\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html\">CICEPortState</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1ICENodeContext.html\">ICENodeContext</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>in_ctxt</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">ULONG&#160;</td>\n\
          <td class=\"paramname\"><em>in_nInputPortID</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">ULONG&#160;</td>\n\
          <td class=\"paramname\"><em>in_nInstanceIndex</em> = <code>0</code>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Constructor for creating and initializing an instance of <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html\" title=\"CICEPortState is used for accessing the state of a custom ICENode input port from the BeginEvaluate c...\">CICEPortState</a>. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramname\">in_ctxt</td><td><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1ICENode.html\" title=\"The ICENode object represents an effect node in the ICE graph. \">ICENode</a> evaluation context. </td></tr>\n\
    <tr><td class=\"paramname\">in_nInputPortID</td><td>Input port identifier. </td></tr>\n\
    <tr><td class=\"paramname\">in_nInstanceIndex</td><td>The group instance of the port. Defaults to <code>0</code>. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a6841a7c358d93c640a101ab58eb03523\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html\">CICEPortState</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Default constructor. </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a2336f9908708c2efcdff9d8c6c46b0e7\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">~<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html\">CICEPortState</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Default destructor. </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a2fc345baa86b02c4d7070fa3d73f45d7\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html\">CICEPortState</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html\">CICEPortState</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>in_obj</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Copy constructor. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramname\">in_obj</td><td>constant class object. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a074d075a54090f94f7c47e24f4c17208\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool operator== </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html\">CICEPortState</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>in_obj</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Equality operator. Tests whether the states on two ports are the same. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramname\">in_obj</td><td><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html\" title=\"CICEPortState is used for accessing the state of a custom ICENode input port from the BeginEvaluate c...\">CICEPortState</a> instance to compare. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>true if both objects are the same, false if different. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ad58e9bca030782751e415ae79f074680\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool operator!= </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html\">CICEPortState</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>in_obj</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Inequality operator. Tests whether the states on two ports are different. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramname\">in_obj</td><td><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html\" title=\"CICEPortState is used for accessing the state of a custom ICENode input port from the BeginEvaluate c...\">CICEPortState</a> instance to compare. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>true if both objects are different, false otherwise. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ab25bbf6e6c4ab36c0c7d114e7200ccfe\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html\">CICEPortState</a>&amp; operator= </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html\">CICEPortState</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>in_obj</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Assignment operator. Assign this <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html\" title=\"CICEPortState is used for accessing the state of a custom ICENode input port from the BeginEvaluate c...\">CICEPortState</a> to another <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html\" title=\"CICEPortState is used for accessing the state of a custom ICENode input port from the BeginEvaluate c...\">CICEPortState</a>. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramname\">in_obj</td><td><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html\" title=\"CICEPortState is used for accessing the state of a custom ICENode input port from the BeginEvaluate c...\">CICEPortState</a> object to assign. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>A reference to new <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html\" title=\"CICEPortState is used for accessing the state of a custom ICENode input port from the BeginEvaluate c...\">CICEPortState</a>. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"afa8720abaf6972d6dac22a8cd1a67225\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool IsValid </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Returns true if the object is valid. Unless not created properly, the object is always valid. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>True if valid, false otherwise. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a8ba7104f19642abbf575c4a5475ae5fe\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool IsDirty </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">unsigned short&#160;</td>\n\
          <td class=\"paramname\"><em>in_flag</em> = <code><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html#a79be0489b44a77620de069631265f22fa4990f4431660053845f6189e5e019198\">siAnyDirtyState</a></code></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Returns the dirty state of a port for a given state type defined in the <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEPortState.html#a79be0489b44a77620de069631265f22f\">CICEPortState::DirtyState</a> enumerator. By default, IsDirty returns true if at least one of the port states is dirty or returns false otherwise. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>true if dirty, false otherwise. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aadd0c8bf4d40d83e231053dc5094bd63\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">void ClearState </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Clears the port states. </p>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following file:<ul>\n\
<li><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/xsi__iceportstate_8h_source.html\">xsi_iceportstate.h</a></li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";