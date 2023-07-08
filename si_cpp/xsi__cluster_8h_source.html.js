var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>xsi_cluster.h Source File</title>\n\
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
      initNavTree(\'xsi__cluster_8h_source.html\', prefix);\n\
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
            <h1>xsi_cluster.h Source File</h1>\n\
         </div>\n\
\n\
    <div id=\"top\"><!-- Generated by Doxygen 1.8.6 -->\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./si_cpp/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/pages.html\"><span>Topics</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/modules.html\"><span>Modules</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/namespaces.html\"><span>Namespaces</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/annotated.html\"><span>Classes</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./si_cpp/files.html\"><span>Files</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow2\" class=\"tabs2\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./si_cpp/files.html\"><span>File&#160;List</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/globals.html\"><span>File&#160;Members</span></a></li>\n\
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
  <div class=\"headertitle\">\n\
<div class=\"title\">xsi_cluster.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<a href=\"#!/url=./si_cpp/xsi__cluster_8h.html\">Go to the documentation of this file.</a><div class=\"fragment\"><div class=\"line\"><a name=\"l00001\"></a><span class=\"lineno\">    1</span>&#160;<span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00011\"></a><span class=\"lineno\">   11</span>&#160;<span class=\"comment\"></span><span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00012\"></a><span class=\"lineno\">   12</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00013\"></a><span class=\"lineno\">   13</span>&#160;<span class=\"preprocessor\">#if (_MSC_VER &gt; 1000) || defined(SGI_COMPILER)</span></div>\n\
<div class=\"line\"><a name=\"l00014\"></a><span class=\"lineno\">   14</span>&#160;<span class=\"preprocessor\"></span><span class=\"preprocessor\">#pragma once</span></div>\n\
<div class=\"line\"><a name=\"l00015\"></a><span class=\"lineno\">   15</span>&#160;<span class=\"preprocessor\"></span><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"><a name=\"l00016\"></a><span class=\"lineno\">   16</span>&#160;<span class=\"preprocessor\"></span></div>\n\
<div class=\"line\"><a name=\"l00017\"></a><span class=\"lineno\">   17</span>&#160;<span class=\"preprocessor\">#ifndef __XSICLUSTER_H__</span></div>\n\
<div class=\"line\"><a name=\"l00018\"></a><span class=\"lineno\">   18</span>&#160;<span class=\"preprocessor\"></span><span class=\"preprocessor\">#define __XSICLUSTER_H__</span></div>\n\
<div class=\"line\"><a name=\"l00019\"></a><span class=\"lineno\">   19</span>&#160;<span class=\"preprocessor\"></span></div>\n\
<div class=\"line\"><a name=\"l00020\"></a><span class=\"lineno\">   20</span>&#160;<span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./si_cpp/xsi__sceneitem_8h.html\">xsi_sceneitem.h</a>&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00021\"></a><span class=\"lineno\">   21</span>&#160;<span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./si_cpp/xsi__status_8h.html\">xsi_status.h</a>&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00022\"></a><span class=\"lineno\">   22</span>&#160;<span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./si_cpp/xsi__longarray_8h.html\">xsi_longarray.h</a>&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00023\"></a><span class=\"lineno\">   23</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00024\"></a><span class=\"lineno\">   24</span>&#160;<span class=\"keyword\">namespace </span>XSI {</div>\n\
<div class=\"line\"><a name=\"l00025\"></a><span class=\"lineno\">   25</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00026\"></a><span class=\"lineno\">   26</span>&#160;<span class=\"keyword\">class </span>X3DObject;</div>\n\
<div class=\"line\"><a name=\"l00027\"></a><span class=\"lineno\">   27</span>&#160;<span class=\"keyword\">class </span>SubComponent;</div>\n\
<div class=\"line\"><a name=\"l00028\"></a><span class=\"lineno\">   28</span>&#160;<span class=\"keyword\">class </span>CClusterElementArray;</div>\n\
<div class=\"line\"><a name=\"l00029\"></a><span class=\"lineno\">   29</span>&#160;<span class=\"keyword\">class </span>CBitArray;</div>\n\
<div class=\"line\"><a name=\"l00030\"></a><span class=\"lineno\">   30</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00031\"></a><span class=\"lineno\">   31</span>&#160;<span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00085\"></a><span class=\"lineno\">   85</span>&#160;<span class=\"comment\"></span><span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00086\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./si_cpp/classXSI_1_1Cluster.html\">   86</a></span>&#160;<span class=\"keyword\">class </span>SICPPSDKDECL <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Cluster.html\">Cluster</a> : <span class=\"keyword\">public</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1SceneItem.html\">SceneItem</a></div>\n\
<div class=\"line\"><a name=\"l00087\"></a><span class=\"lineno\">   87</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00088\"></a><span class=\"lineno\">   88</span>&#160;<span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"><a name=\"l00090\"></a><span class=\"lineno\">   90</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Cluster.html\">Cluster</a>();</div>\n\
<div class=\"line\"><a name=\"l00091\"></a><span class=\"lineno\">   91</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00093\"></a><span class=\"lineno\">   93</span>&#160;    ~<a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Cluster.html\">Cluster</a>();</div>\n\
<div class=\"line\"><a name=\"l00094\"></a><span class=\"lineno\">   94</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00098\"></a><span class=\"lineno\">   98</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Cluster.html\">Cluster</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a>&amp; in_ref);</div>\n\
<div class=\"line\"><a name=\"l00099\"></a><span class=\"lineno\">   99</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00103\"></a><span class=\"lineno\">  103</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Cluster.html\">Cluster</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Cluster.html\">Cluster</a>&amp; in_obj);</div>\n\
<div class=\"line\"><a name=\"l00104\"></a><span class=\"lineno\">  104</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00109\"></a><span class=\"lineno\">  109</span>&#160;    <span class=\"keywordtype\">bool</span> IsA( <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#ad483c77b3d997caca1f369db99c1e68b\">siClassID</a> in_ClassID) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00110\"></a><span class=\"lineno\">  110</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00114\"></a><span class=\"lineno\">  114</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#ad483c77b3d997caca1f369db99c1e68b\">siClassID</a> GetClassID() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00115\"></a><span class=\"lineno\">  115</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00121\"></a><span class=\"lineno\">  121</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Cluster.html\">Cluster</a>&amp; operator=(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Cluster.html\">Cluster</a>&amp; in_obj);</div>\n\
<div class=\"line\"><a name=\"l00122\"></a><span class=\"lineno\">  122</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00128\"></a><span class=\"lineno\">  128</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Cluster.html\">Cluster</a>&amp; operator=(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a>&amp; in_ref);</div>\n\
<div class=\"line\"><a name=\"l00129\"></a><span class=\"lineno\">  129</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00133\"></a><span class=\"lineno\">  133</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CClusterElementArray.html\">CClusterElementArray</a> GetElements() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00134\"></a><span class=\"lineno\">  134</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00138\"></a><span class=\"lineno\">  138</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1X3DObject.html\">X3DObject</a> GetCenterReference() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00139\"></a><span class=\"lineno\">  139</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00145\"></a><span class=\"lineno\">  145</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> PutCenterReference(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1X3DObject.html\">X3DObject</a>&amp; in_centerObj);</div>\n\
<div class=\"line\"><a name=\"l00146\"></a><span class=\"lineno\">  146</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00150\"></a><span class=\"lineno\">  150</span>&#160;    <span class=\"keywordtype\">bool</span> HasStaticKinematicState() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00151\"></a><span class=\"lineno\">  151</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00155\"></a><span class=\"lineno\">  155</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRefArray.html\">CRefArray</a> GetStaticKinematicStates() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00156\"></a><span class=\"lineno\">  156</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00160\"></a><span class=\"lineno\">  160</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1SubComponent.html\">SubComponent</a> CreateSubComponent();</div>\n\
<div class=\"line\"><a name=\"l00161\"></a><span class=\"lineno\">  161</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00169\"></a><span class=\"lineno\">  169</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> FindIndex</div>\n\
<div class=\"line\"><a name=\"l00170\"></a><span class=\"lineno\">  170</span>&#160;    (</div>\n\
<div class=\"line\"><a name=\"l00171\"></a><span class=\"lineno\">  171</span>&#160;        LONG in_geometryIndex,</div>\n\
<div class=\"line\"><a name=\"l00172\"></a><span class=\"lineno\">  172</span>&#160;        LONG&amp; out_clusterIndex</div>\n\
<div class=\"line\"><a name=\"l00173\"></a><span class=\"lineno\">  173</span>&#160;    ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00174\"></a><span class=\"lineno\">  174</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00217\"></a><span class=\"lineno\">  217</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> FindIndices</div>\n\
<div class=\"line\"><a name=\"l00218\"></a><span class=\"lineno\">  218</span>&#160;    (</div>\n\
<div class=\"line\"><a name=\"l00219\"></a><span class=\"lineno\">  219</span>&#160;        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CLongArray.html\">CLongArray</a>&amp; in_geometryIndices,</div>\n\
<div class=\"line\"><a name=\"l00220\"></a><span class=\"lineno\">  220</span>&#160;        <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CLongArray.html\">CLongArray</a>&amp; out_clusterIndices</div>\n\
<div class=\"line\"><a name=\"l00221\"></a><span class=\"lineno\">  221</span>&#160;    ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00222\"></a><span class=\"lineno\">  222</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00228\"></a><span class=\"lineno\">  228</span>&#160;    <span class=\"keywordtype\">bool</span> IsAlwaysComplete() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00229\"></a><span class=\"lineno\">  229</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00311\"></a><span class=\"lineno\">  311</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> GetGeometryElementFlags( <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CBitArray.html\">CBitArray</a>&amp; out_flags ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00312\"></a><span class=\"lineno\">  312</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00313\"></a><span class=\"lineno\">  313</span>&#160;    <span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\"><a name=\"l00314\"></a><span class=\"lineno\">  314</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Cluster.html\">Cluster</a> * operator&amp;() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00315\"></a><span class=\"lineno\">  315</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Cluster.html\">Cluster</a> * operator&amp;();</div>\n\
<div class=\"line\"><a name=\"l00316\"></a><span class=\"lineno\">  316</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00317\"></a><span class=\"lineno\">  317</span>&#160;};</div>\n\
<div class=\"line\"><a name=\"l00318\"></a><span class=\"lineno\">  318</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00319\"></a><span class=\"lineno\">  319</span>&#160;<span class=\"comment\">//*************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00364\"></a><span class=\"lineno\">  364</span>&#160;<span class=\"comment\"></span><span class=\"comment\">//*************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00365\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./si_cpp/classXSI_1_1CClusterElementArray.html\">  365</a></span>&#160;<span class=\"keyword\">class </span>SICPPSDKDECL <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CClusterElementArray.html\">CClusterElementArray</a></div>\n\
<div class=\"line\"><a name=\"l00366\"></a><span class=\"lineno\">  366</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00367\"></a><span class=\"lineno\">  367</span>&#160;    <span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"><a name=\"l00369\"></a><span class=\"lineno\">  369</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CClusterElementArray.html\">CClusterElementArray</a>();</div>\n\
<div class=\"line\"><a name=\"l00370\"></a><span class=\"lineno\">  370</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00374\"></a><span class=\"lineno\">  374</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CClusterElementArray.html\">CClusterElementArray</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CClusterElementArray.html\">CClusterElementArray</a>&amp; in_array);</div>\n\
<div class=\"line\"><a name=\"l00375\"></a><span class=\"lineno\">  375</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00377\"></a><span class=\"lineno\">  377</span>&#160;    <span class=\"keyword\">virtual</span> ~<a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CClusterElementArray.html\">CClusterElementArray</a>();</div>\n\
<div class=\"line\"><a name=\"l00378\"></a><span class=\"lineno\">  378</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00383\"></a><span class=\"lineno\">  383</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CClusterElementArray.html\">CClusterElementArray</a>&amp; operator=(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CClusterElementArray.html\">CClusterElementArray</a>&amp; in_array);</div>\n\
<div class=\"line\"><a name=\"l00384\"></a><span class=\"lineno\">  384</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00388\"></a><span class=\"lineno\">  388</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CLongArray.html\">CLongArray</a> GetArray() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00389\"></a><span class=\"lineno\">  389</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00393\"></a><span class=\"lineno\">  393</span>&#160;    LONG GetCount() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00394\"></a><span class=\"lineno\">  394</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00399\"></a><span class=\"lineno\">  399</span>&#160;    LONG GetItem( LONG in_index ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00400\"></a><span class=\"lineno\">  400</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00405\"></a><span class=\"lineno\">  405</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CLongArray.html\">CLongArray</a> GetItemsByIndex( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CLongArray.html\">CLongArray</a>&amp; in_indices ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00406\"></a><span class=\"lineno\">  406</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00411\"></a><span class=\"lineno\">  411</span>&#160;    LONG FindIndex( LONG in_element ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00412\"></a><span class=\"lineno\">  412</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00413\"></a><span class=\"lineno\">  413</span>&#160;    <span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\"><a name=\"l00414\"></a><span class=\"lineno\">  414</span>&#160;    <span class=\"keywordtype\">void</span>* m_ptr;</div>\n\
<div class=\"line\"><a name=\"l00415\"></a><span class=\"lineno\">  415</span>&#160;};</div>\n\
<div class=\"line\"><a name=\"l00416\"></a><span class=\"lineno\">  416</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00417\"></a><span class=\"lineno\">  417</span>&#160;};</div>\n\
<div class=\"line\"><a name=\"l00418\"></a><span class=\"lineno\">  418</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00419\"></a><span class=\"lineno\">  419</span>&#160;<span class=\"preprocessor\">#endif // __XSICLUSTER_H__</span></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CClusterElementArray_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CClusterElementArray.html\">XSI::CClusterElementArray</a></div><div class=\"ttdoc\">An array of cluster elements in a Cluster object. </div><div class=\"ttdef\"><b>Definition:</b> xsi_cluster.h:365</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1SceneItem_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1SceneItem.html\">XSI::SceneItem</a></div><div class=\"ttdoc\">The SceneItem object represents an object in the scene (that is, something with properties) in Softim...</div><div class=\"ttdef\"><b>Definition:</b> xsi_sceneitem.h:38</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CRef_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">XSI::CRef</a></div><div class=\"ttdoc\">This class is used to reference Softimage objects. Each instance of an CRef maintains a link with onl...</div><div class=\"ttdef\"><b>Definition:</b> xsi_ref.h:142</div></div>\n\
<div class=\"ttc\" id=\"xsi__sceneitem_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/xsi__sceneitem_8h.html\">xsi_sceneitem.h</a></div><div class=\"ttdoc\">SceneItem class declaration. </div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CBitArray_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CBitArray.html\">XSI::CBitArray</a></div><div class=\"ttdoc\">This class encapsulates an array of binary values represented as booleans, where true indicates a bit...</div><div class=\"ttdef\"><b>Definition:</b> xsi_bitarray.h:57</div></div>\n\
<div class=\"ttc\" id=\"xsi__longarray_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/xsi__longarray_8h.html\">xsi_longarray.h</a></div><div class=\"ttdoc\">CLongArray class declaration. </div></div>\n\
<div class=\"ttc\" id=\"xsi__status_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/xsi__status_8h.html\">xsi_status.h</a></div><div class=\"ttdoc\">CStatus class declaration. </div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CRefArray_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CRefArray.html\">XSI::CRefArray</a></div><div class=\"ttdoc\">The CRefArray class holds generic CRef objects and acts as a base class for other specialized CRef ar...</div><div class=\"ttdef\"><b>Definition:</b> xsi_ref.h:333</div></div>\n\
<div class=\"ttc\" id=\"namespaceXSI_html_ad483c77b3d997caca1f369db99c1e68b\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/namespaceXSI.html#ad483c77b3d997caca1f369db99c1e68b\">XSI::siClassID</a></div><div class=\"ttdeci\">siClassID</div><div class=\"ttdef\"><b>Definition:</b> xsi_decl.h:1537</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1Cluster_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1Cluster.html\">XSI::Cluster</a></div><div class=\"ttdoc\">A cluster represents a set of components on a Geometry. </div><div class=\"ttdef\"><b>Definition:</b> xsi_cluster.h:86</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CStatus_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">XSI::CStatus</a></div><div class=\"ttdoc\">Encapsulates status data types for error handling purpose. The class also exposes methods to query an...</div><div class=\"ttdef\"><b>Definition:</b> xsi_status.h:36</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1X3DObject_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1X3DObject.html\">XSI::X3DObject</a></div><div class=\"ttdoc\">The X3DObject object represents a basic 3D object of a scene in Softimage. </div><div class=\"ttdef\"><b>Definition:</b> xsi_x3dobject.h:91</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CLongArray_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CLongArray.html\">XSI::CLongArray</a></div><div class=\"ttdoc\">The CLongArray is an uni-dimensional array of LONG values. </div><div class=\"ttdef\"><b>Definition:</b> xsi_longarray.h:45</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1SubComponent_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1SubComponent.html\">XSI::SubComponent</a></div><div class=\"ttdoc\">Provides access to the subelements of an object&#39;s Geometry. </div><div class=\"ttdef\"><b>Definition:</b> xsi_subcomponent.h:30</div></div>\n\
</div><!-- fragment --></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";