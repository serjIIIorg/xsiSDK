var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>xsi_clusterproperty.h Source File</title>\n\
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
      initNavTree(\'xsi__clusterproperty_8h_source.html\', prefix);\n\
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
            <h1>xsi_clusterproperty.h Source File</h1>\n\
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
<div class=\"title\">xsi_clusterproperty.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<a href=\"#!/url=./si_cpp/xsi__clusterproperty_8h.html\">Go to the documentation of this file.</a><div class=\"fragment\"><div class=\"line\"><a name=\"l00001\"></a><span class=\"lineno\">    1</span>&#160;<span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00011\"></a><span class=\"lineno\">   11</span>&#160;<span class=\"comment\"></span><span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00012\"></a><span class=\"lineno\">   12</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00013\"></a><span class=\"lineno\">   13</span>&#160;<span class=\"preprocessor\">#if (_MSC_VER &gt; 1000) || defined(SGI_COMPILER)</span></div>\n\
<div class=\"line\"><a name=\"l00014\"></a><span class=\"lineno\">   14</span>&#160;<span class=\"preprocessor\"></span><span class=\"preprocessor\">#pragma once</span></div>\n\
<div class=\"line\"><a name=\"l00015\"></a><span class=\"lineno\">   15</span>&#160;<span class=\"preprocessor\"></span><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"><a name=\"l00016\"></a><span class=\"lineno\">   16</span>&#160;<span class=\"preprocessor\"></span></div>\n\
<div class=\"line\"><a name=\"l00017\"></a><span class=\"lineno\">   17</span>&#160;<span class=\"preprocessor\">#ifndef __XSICLUSTERPROPERTY_H__</span></div>\n\
<div class=\"line\"><a name=\"l00018\"></a><span class=\"lineno\">   18</span>&#160;<span class=\"preprocessor\"></span><span class=\"preprocessor\">#define __XSICLUSTERPROPERTY_H__</span></div>\n\
<div class=\"line\"><a name=\"l00019\"></a><span class=\"lineno\">   19</span>&#160;<span class=\"preprocessor\"></span></div>\n\
<div class=\"line\"><a name=\"l00020\"></a><span class=\"lineno\">   20</span>&#160;<span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./si_cpp/xsi__property_8h.html\">xsi_property.h</a>&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00021\"></a><span class=\"lineno\">   21</span>&#160;<span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./si_cpp/xsi__status_8h.html\">xsi_status.h</a>&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00022\"></a><span class=\"lineno\">   22</span>&#160;<span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./si_cpp/xsi__doublearray_8h.html\">xsi_doublearray.h</a>&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00023\"></a><span class=\"lineno\">   23</span>&#160;<span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./si_cpp/xsi__longarray_8h.html\">xsi_longarray.h</a>&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00024\"></a><span class=\"lineno\">   24</span>&#160;<span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./si_cpp/xsi__bitarray_8h.html\">xsi_bitarray.h</a>&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00025\"></a><span class=\"lineno\">   25</span>&#160;<span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./si_cpp/xsi__floatarray_8h.html\">xsi_floatarray.h</a>&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00026\"></a><span class=\"lineno\">   26</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00027\"></a><span class=\"lineno\">   27</span>&#160;<span class=\"keyword\">namespace </span>XSI {</div>\n\
<div class=\"line\"><a name=\"l00028\"></a><span class=\"lineno\">   28</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00029\"></a><span class=\"lineno\">   29</span>&#160;<span class=\"keyword\">class </span>CClusterPropertyElementArray;</div>\n\
<div class=\"line\"><a name=\"l00030\"></a><span class=\"lineno\">   30</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00031\"></a><span class=\"lineno\">   31</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00032\"></a><span class=\"lineno\">   32</span>&#160;<span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00233\"></a><span class=\"lineno\">  233</span>&#160;<span class=\"comment\"></span><span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00234\"></a><span class=\"lineno\">  234</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00235\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./si_cpp/classXSI_1_1ClusterProperty.html\">  235</a></span>&#160;<span class=\"keyword\">class </span>SICPPSDKDECL <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1ClusterProperty.html\">ClusterProperty</a> : <span class=\"keyword\">public</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Property.html\">Property</a></div>\n\
<div class=\"line\"><a name=\"l00236\"></a><span class=\"lineno\">  236</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00237\"></a><span class=\"lineno\">  237</span>&#160;<span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"><a name=\"l00239\"></a><span class=\"lineno\">  239</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1ClusterProperty.html\">ClusterProperty</a>();</div>\n\
<div class=\"line\"><a name=\"l00240\"></a><span class=\"lineno\">  240</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00242\"></a><span class=\"lineno\">  242</span>&#160;    ~<a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1ClusterProperty.html\">ClusterProperty</a>();</div>\n\
<div class=\"line\"><a name=\"l00243\"></a><span class=\"lineno\">  243</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00247\"></a><span class=\"lineno\">  247</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1ClusterProperty.html\">ClusterProperty</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a>&amp; in_ref);</div>\n\
<div class=\"line\"><a name=\"l00248\"></a><span class=\"lineno\">  248</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00252\"></a><span class=\"lineno\">  252</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1ClusterProperty.html\">ClusterProperty</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1ClusterProperty.html\">ClusterProperty</a>&amp; in_obj);</div>\n\
<div class=\"line\"><a name=\"l00253\"></a><span class=\"lineno\">  253</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00258\"></a><span class=\"lineno\">  258</span>&#160;    <span class=\"keywordtype\">bool</span> IsA( <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#ad483c77b3d997caca1f369db99c1e68b\">siClassID</a> in_ClassID) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00259\"></a><span class=\"lineno\">  259</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00263\"></a><span class=\"lineno\">  263</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#ad483c77b3d997caca1f369db99c1e68b\">siClassID</a> GetClassID() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00264\"></a><span class=\"lineno\">  264</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00270\"></a><span class=\"lineno\">  270</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1ClusterProperty.html\">ClusterProperty</a>&amp; operator=(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1ClusterProperty.html\">ClusterProperty</a>&amp; in_obj);</div>\n\
<div class=\"line\"><a name=\"l00271\"></a><span class=\"lineno\">  271</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00277\"></a><span class=\"lineno\">  277</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1ClusterProperty.html\">ClusterProperty</a>&amp; operator=(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a>&amp; in_ref);</div>\n\
<div class=\"line\"><a name=\"l00278\"></a><span class=\"lineno\">  278</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00282\"></a><span class=\"lineno\">  282</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CClusterPropertyElementArray.html\">CClusterPropertyElementArray</a> GetElements() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00283\"></a><span class=\"lineno\">  283</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00289\"></a><span class=\"lineno\">  289</span>&#160;    LONG GetValueSize() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00290\"></a><span class=\"lineno\">  290</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00295\"></a><span class=\"lineno\">  295</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#a5e63ed127a4ff6d6b824838ec93e6a33\">siClusterPropertyType</a> GetPropertyType() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00296\"></a><span class=\"lineno\">  296</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00305\"></a><span class=\"lineno\">  305</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CValue.html#ad8ed01ff3ff33333d8e19db4d2818bb6\">CValue::DataType</a> GetInternalType() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00306\"></a><span class=\"lineno\">  306</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00318\"></a><span class=\"lineno\">  318</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> GetValues( <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CFloatArray.html\">CFloatArray</a>&amp; out_data ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00319\"></a><span class=\"lineno\">  319</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00335\"></a><span class=\"lineno\">  335</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> GetValues( <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CFloatArray.html\">CFloatArray</a>&amp; out_data, <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CBitArray.html\">CBitArray</a>&amp; out_elemIdx ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00336\"></a><span class=\"lineno\">  336</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00362\"></a><span class=\"lineno\">  362</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> SetValues(</div>\n\
<div class=\"line\"><a name=\"l00363\"></a><span class=\"lineno\">  363</span>&#160;        <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span>*    in_pValues,</div>\n\
<div class=\"line\"><a name=\"l00364\"></a><span class=\"lineno\">  364</span>&#160;        LONG            in_nValues,</div>\n\
<div class=\"line\"><a name=\"l00365\"></a><span class=\"lineno\">  365</span>&#160;        LONG            in_nOffset=0);</div>\n\
<div class=\"line\"><a name=\"l00366\"></a><span class=\"lineno\">  366</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00385\"></a><span class=\"lineno\">  385</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> SetValues(</div>\n\
<div class=\"line\"><a name=\"l00386\"></a><span class=\"lineno\">  386</span>&#160;        <span class=\"keyword\">const</span> LONG*     in_pElements,</div>\n\
<div class=\"line\"><a name=\"l00387\"></a><span class=\"lineno\">  387</span>&#160;        <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span>*    in_pValues,</div>\n\
<div class=\"line\"><a name=\"l00388\"></a><span class=\"lineno\">  388</span>&#160;        LONG            in_nElements);</div>\n\
<div class=\"line\"><a name=\"l00389\"></a><span class=\"lineno\">  389</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00390\"></a><span class=\"lineno\">  390</span>&#160;    <span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\"><a name=\"l00391\"></a><span class=\"lineno\">  391</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1ClusterProperty.html\">ClusterProperty</a> * operator&amp;() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00392\"></a><span class=\"lineno\">  392</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1ClusterProperty.html\">ClusterProperty</a> * operator&amp;();</div>\n\
<div class=\"line\"><a name=\"l00393\"></a><span class=\"lineno\">  393</span>&#160;};</div>\n\
<div class=\"line\"><a name=\"l00394\"></a><span class=\"lineno\">  394</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00395\"></a><span class=\"lineno\">  395</span>&#160;<span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00482\"></a><span class=\"lineno\">  482</span>&#160;<span class=\"comment\"></span><span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00483\"></a><span class=\"lineno\">  483</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00484\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./si_cpp/classXSI_1_1CClusterPropertyElementArray.html\">  484</a></span>&#160;<span class=\"keyword\">class </span>SICPPSDKDECL <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CClusterPropertyElementArray.html\">CClusterPropertyElementArray</a></div>\n\
<div class=\"line\"><a name=\"l00485\"></a><span class=\"lineno\">  485</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00486\"></a><span class=\"lineno\">  486</span>&#160;    <span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"><a name=\"l00488\"></a><span class=\"lineno\">  488</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CClusterPropertyElementArray.html\">CClusterPropertyElementArray</a>();</div>\n\
<div class=\"line\"><a name=\"l00489\"></a><span class=\"lineno\">  489</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00493\"></a><span class=\"lineno\">  493</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CClusterPropertyElementArray.html\">CClusterPropertyElementArray</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CClusterPropertyElementArray.html\">CClusterPropertyElementArray</a>&amp; in_array);</div>\n\
<div class=\"line\"><a name=\"l00494\"></a><span class=\"lineno\">  494</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00496\"></a><span class=\"lineno\">  496</span>&#160;    <span class=\"keyword\">virtual</span> ~<a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CClusterPropertyElementArray.html\">CClusterPropertyElementArray</a>();</div>\n\
<div class=\"line\"><a name=\"l00497\"></a><span class=\"lineno\">  497</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00502\"></a><span class=\"lineno\">  502</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CClusterPropertyElementArray.html\">CClusterPropertyElementArray</a>&amp; operator=(</div>\n\
<div class=\"line\"><a name=\"l00503\"></a><span class=\"lineno\">  503</span>&#160;        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CClusterPropertyElementArray.html\">CClusterPropertyElementArray</a>&amp; in_array);</div>\n\
<div class=\"line\"><a name=\"l00504\"></a><span class=\"lineno\">  504</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00510\"></a><span class=\"lineno\">  510</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CDoubleArray.html\">CDoubleArray</a> GetArray() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00511\"></a><span class=\"lineno\">  511</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00517\"></a><span class=\"lineno\">  517</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> PutArray(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CDoubleArray.html\">CDoubleArray</a>&amp; in_values);</div>\n\
<div class=\"line\"><a name=\"l00518\"></a><span class=\"lineno\">  518</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00522\"></a><span class=\"lineno\">  522</span>&#160;    LONG GetCount() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00523\"></a><span class=\"lineno\">  523</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00529\"></a><span class=\"lineno\">  529</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CDoubleArray.html\">CDoubleArray</a> GetItem( LONG in_index ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00530\"></a><span class=\"lineno\">  530</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00538\"></a><span class=\"lineno\">  538</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> PutItem( LONG in_index, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CDoubleArray.html\">CDoubleArray</a>&amp; in_values );</div>\n\
<div class=\"line\"><a name=\"l00539\"></a><span class=\"lineno\">  539</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00545\"></a><span class=\"lineno\">  545</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CDoubleArray.html\">CDoubleArray</a> GetItemsByIndex( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CLongArray.html\">CLongArray</a>&amp; in_indices ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00546\"></a><span class=\"lineno\">  546</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00554\"></a><span class=\"lineno\">  554</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> PutItemsByIndex( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CLongArray.html\">CLongArray</a>&amp; in_indices,</div>\n\
<div class=\"line\"><a name=\"l00555\"></a><span class=\"lineno\">  555</span>&#160;        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CDoubleArray.html\">CDoubleArray</a>&amp; in_values );</div>\n\
<div class=\"line\"><a name=\"l00556\"></a><span class=\"lineno\">  556</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00561\"></a><span class=\"lineno\">  561</span>&#160;    LONG GetValueSize() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00562\"></a><span class=\"lineno\">  562</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00563\"></a><span class=\"lineno\">  563</span>&#160;    <span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\"><a name=\"l00564\"></a><span class=\"lineno\">  564</span>&#160;    <span class=\"keywordtype\">void</span>*   m_ptr;</div>\n\
<div class=\"line\"><a name=\"l00565\"></a><span class=\"lineno\">  565</span>&#160;    <span class=\"keywordtype\">bool</span>    m_bFlag;</div>\n\
<div class=\"line\"><a name=\"l00566\"></a><span class=\"lineno\">  566</span>&#160;};</div>\n\
<div class=\"line\"><a name=\"l00567\"></a><span class=\"lineno\">  567</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00568\"></a><span class=\"lineno\">  568</span>&#160;};</div>\n\
<div class=\"line\"><a name=\"l00569\"></a><span class=\"lineno\">  569</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00570\"></a><span class=\"lineno\">  570</span>&#160;<span class=\"preprocessor\">#endif // __XSICLUSTERPROPERTY_H__</span></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CRef_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">XSI::CRef</a></div><div class=\"ttdoc\">This class is used to reference Softimage objects. Each instance of an CRef maintains a link with onl...</div><div class=\"ttdef\"><b>Definition:</b> xsi_ref.h:142</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CFloatArray_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CFloatArray.html\">XSI::CFloatArray</a></div><div class=\"ttdoc\">The CFloatArray is an uni-dimensional array of floats. </div><div class=\"ttdef\"><b>Definition:</b> xsi_floatarray.h:39</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CDoubleArray_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CDoubleArray.html\">XSI::CDoubleArray</a></div><div class=\"ttdoc\">The CDoubleArray is an uni-dimensional array of doubles. </div><div class=\"ttdef\"><b>Definition:</b> xsi_doublearray.h:41</div></div>\n\
<div class=\"ttc\" id=\"xsi__property_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/xsi__property_8h.html\">xsi_property.h</a></div><div class=\"ttdoc\">Property object class declaration. </div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CBitArray_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CBitArray.html\">XSI::CBitArray</a></div><div class=\"ttdoc\">This class encapsulates an array of binary values represented as booleans, where true indicates a bit...</div><div class=\"ttdef\"><b>Definition:</b> xsi_bitarray.h:57</div></div>\n\
<div class=\"ttc\" id=\"xsi__longarray_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/xsi__longarray_8h.html\">xsi_longarray.h</a></div><div class=\"ttdoc\">CLongArray class declaration. </div></div>\n\
<div class=\"ttc\" id=\"xsi__status_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/xsi__status_8h.html\">xsi_status.h</a></div><div class=\"ttdoc\">CStatus class declaration. </div></div>\n\
<div class=\"ttc\" id=\"namespaceXSI_html_a5e63ed127a4ff6d6b824838ec93e6a33\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/namespaceXSI.html#a5e63ed127a4ff6d6b824838ec93e6a33\">XSI::siClusterPropertyType</a></div><div class=\"ttdeci\">siClusterPropertyType</div><div class=\"ttdef\"><b>Definition:</b> xsi_decl.h:2476</div></div>\n\
<div class=\"ttc\" id=\"namespaceXSI_html_ad483c77b3d997caca1f369db99c1e68b\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/namespaceXSI.html#ad483c77b3d997caca1f369db99c1e68b\">XSI::siClassID</a></div><div class=\"ttdeci\">siClassID</div><div class=\"ttdef\"><b>Definition:</b> xsi_decl.h:1537</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1Property_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1Property.html\">XSI::Property</a></div><div class=\"ttdoc\">The Property class represents the property of the following entities: </div><div class=\"ttdef\"><b>Definition:</b> xsi_property.h:58</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CValue_html_ad8ed01ff3ff33333d8e19db4d2818bb6\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CValue.html#ad8ed01ff3ff33333d8e19db4d2818bb6\">XSI::CValue::DataType</a></div><div class=\"ttdeci\">DataType</div><div class=\"ttdoc\">DataType enumerator. </div><div class=\"ttdef\"><b>Definition:</b> xsi_value.h:172</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CClusterPropertyElementArray_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CClusterPropertyElementArray.html\">XSI::CClusterPropertyElementArray</a></div><div class=\"ttdoc\">An array of cluster property elements in a ClusterProperty object. </div><div class=\"ttdef\"><b>Definition:</b> xsi_clusterproperty.h:484</div></div>\n\
<div class=\"ttc\" id=\"xsi__bitarray_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/xsi__bitarray_8h.html\">xsi_bitarray.h</a></div><div class=\"ttdoc\">CBitArray class declaration. </div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1ClusterProperty_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1ClusterProperty.html\">XSI::ClusterProperty</a></div><div class=\"ttdoc\">Represents a property of a cluster. </div><div class=\"ttdef\"><b>Definition:</b> xsi_clusterproperty.h:235</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CStatus_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">XSI::CStatus</a></div><div class=\"ttdoc\">Encapsulates status data types for error handling purpose. The class also exposes methods to query an...</div><div class=\"ttdef\"><b>Definition:</b> xsi_status.h:36</div></div>\n\
<div class=\"ttc\" id=\"xsi__doublearray_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/xsi__doublearray_8h.html\">xsi_doublearray.h</a></div><div class=\"ttdoc\">CDoubleArray class declaration. </div></div>\n\
<div class=\"ttc\" id=\"xsi__floatarray_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/xsi__floatarray_8h.html\">xsi_floatarray.h</a></div><div class=\"ttdoc\">CFloatArray class declaration. </div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CLongArray_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CLongArray.html\">XSI::CLongArray</a></div><div class=\"ttdoc\">The CLongArray is an uni-dimensional array of LONG values. </div><div class=\"ttdef\"><b>Definition:</b> xsi_longarray.h:45</div></div>\n\
</div><!-- fragment --></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";