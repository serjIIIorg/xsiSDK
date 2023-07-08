var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>xsi_icenodedef.h Source File</title>\n\
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
      initNavTree(\'xsi__icenodedef_8h_source.html\', prefix);\n\
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
            <h1>xsi_icenodedef.h Source File</h1>\n\
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
<div class=\"title\">xsi_icenodedef.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<a href=\"#!/url=./si_cpp/xsi__icenodedef_8h.html\">Go to the documentation of this file.</a><div class=\"fragment\"><div class=\"line\"><a name=\"l00001\"></a><span class=\"lineno\">    1</span>&#160;<span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00011\"></a><span class=\"lineno\">   11</span>&#160;<span class=\"comment\"></span><span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00012\"></a><span class=\"lineno\">   12</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00013\"></a><span class=\"lineno\">   13</span>&#160;<span class=\"preprocessor\">#if (_MSC_VER &gt; 1000) || defined(SGI_COMPILER)</span></div>\n\
<div class=\"line\"><a name=\"l00014\"></a><span class=\"lineno\">   14</span>&#160;<span class=\"preprocessor\"></span><span class=\"preprocessor\">#pragma once</span></div>\n\
<div class=\"line\"><a name=\"l00015\"></a><span class=\"lineno\">   15</span>&#160;<span class=\"preprocessor\"></span><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"><a name=\"l00016\"></a><span class=\"lineno\">   16</span>&#160;<span class=\"preprocessor\"></span></div>\n\
<div class=\"line\"><a name=\"l00017\"></a><span class=\"lineno\">   17</span>&#160;<span class=\"preprocessor\">#ifndef __XSIICENODEDEF_H__</span></div>\n\
<div class=\"line\"><a name=\"l00018\"></a><span class=\"lineno\">   18</span>&#160;<span class=\"preprocessor\"></span><span class=\"preprocessor\">#define __XSIICENODEDEF_H__</span></div>\n\
<div class=\"line\"><a name=\"l00019\"></a><span class=\"lineno\">   19</span>&#160;<span class=\"preprocessor\"></span></div>\n\
<div class=\"line\"><a name=\"l00020\"></a><span class=\"lineno\">   20</span>&#160;<span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./si_cpp/xsi__base_8h.html\">xsi_base.h</a>&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00021\"></a><span class=\"lineno\">   21</span>&#160;<span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./si_cpp/xsi__value_8h.html\">xsi_value.h</a>&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00022\"></a><span class=\"lineno\">   22</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00023\"></a><span class=\"lineno\">   23</span>&#160;<span class=\"keyword\">namespace </span>XSI {</div>\n\
<div class=\"line\"><a name=\"l00024\"></a><span class=\"lineno\">   24</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00025\"></a><span class=\"lineno\">   25</span>&#160;<span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00034\"></a><span class=\"lineno\">   34</span>&#160;<span class=\"comment\"></span><span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00035\"></a><span class=\"lineno\">   35</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00036\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./si_cpp/classXSI_1_1ICENodeDef.html\">   36</a></span>&#160;<span class=\"keyword\">class </span>SICPPSDKDECL <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1ICENodeDef.html\">ICENodeDef</a> : <span class=\"keyword\">public</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CBase.html\">CBase</a></div>\n\
<div class=\"line\"><a name=\"l00037\"></a><span class=\"lineno\">   37</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00038\"></a><span class=\"lineno\">   38</span>&#160;<span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"><a name=\"l00039\"></a><span class=\"lineno\">   39</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00041\"></a><span class=\"lineno\">   41</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1ICENodeDef.html\">ICENodeDef</a>();</div>\n\
<div class=\"line\"><a name=\"l00042\"></a><span class=\"lineno\">   42</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00044\"></a><span class=\"lineno\">   44</span>&#160;    ~<a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1ICENodeDef.html\">ICENodeDef</a>();</div>\n\
<div class=\"line\"><a name=\"l00045\"></a><span class=\"lineno\">   45</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00049\"></a><span class=\"lineno\">   49</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1ICENodeDef.html\">ICENodeDef</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a>&amp; in_ref);</div>\n\
<div class=\"line\"><a name=\"l00050\"></a><span class=\"lineno\">   50</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00054\"></a><span class=\"lineno\">   54</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1ICENodeDef.html\">ICENodeDef</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1ICENodeDef.html\">ICENodeDef</a>&amp; in_obj);</div>\n\
<div class=\"line\"><a name=\"l00055\"></a><span class=\"lineno\">   55</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00060\"></a><span class=\"lineno\">   60</span>&#160;    <span class=\"keywordtype\">bool</span> IsA( <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#ad483c77b3d997caca1f369db99c1e68b\">siClassID</a> in_ClassID) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00061\"></a><span class=\"lineno\">   61</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00065\"></a><span class=\"lineno\">   65</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#ad483c77b3d997caca1f369db99c1e68b\">siClassID</a> GetClassID() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00066\"></a><span class=\"lineno\">   66</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00071\"></a><span class=\"lineno\">   71</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1ICENodeDef.html\">ICENodeDef</a>&amp; operator=(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1ICENodeDef.html\">ICENodeDef</a>&amp; in_obj);</div>\n\
<div class=\"line\"><a name=\"l00072\"></a><span class=\"lineno\">   72</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00078\"></a><span class=\"lineno\">   78</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1ICENodeDef.html\">ICENodeDef</a>&amp; operator=(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a>&amp; in_ref);</div>\n\
<div class=\"line\"><a name=\"l00079\"></a><span class=\"lineno\">   79</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00091\"></a><span class=\"lineno\">   91</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> PutThreadingModel( <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#a2e77132c412f0b988ff1e9b88ba0fe9a\">siICENodeThreadingModel</a> in_nModel );</div>\n\
<div class=\"line\"><a name=\"l00092\"></a><span class=\"lineno\">   92</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00097\"></a><span class=\"lineno\">   97</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#a2e77132c412f0b988ff1e9b88ba0fe9a\">siICENodeThreadingModel</a> GetThreadingModel( ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00098\"></a><span class=\"lineno\">   98</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00115\"></a><span class=\"lineno\">  115</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> DefineCustomType(   <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp;  in_strCustomType,</div>\n\
<div class=\"line\"><a name=\"l00116\"></a><span class=\"lineno\">  116</span>&#160;                                <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp;  in_strDisplayName,</div>\n\
<div class=\"line\"><a name=\"l00117\"></a><span class=\"lineno\">  117</span>&#160;                                <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp;  in_strDescription,</div>\n\
<div class=\"line\"><a name=\"l00118\"></a><span class=\"lineno\">  118</span>&#160;                                <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">char</span>   in_red,</div>\n\
<div class=\"line\"><a name=\"l00119\"></a><span class=\"lineno\">  119</span>&#160;                                <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">char</span>   in_green,</div>\n\
<div class=\"line\"><a name=\"l00120\"></a><span class=\"lineno\">  120</span>&#160;                                <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">char</span>   in_blue );</div>\n\
<div class=\"line\"><a name=\"l00121\"></a><span class=\"lineno\">  121</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00134\"></a><span class=\"lineno\">  134</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> AddPortGroup(   ULONG in_uniqueGroupId,</div>\n\
<div class=\"line\"><a name=\"l00135\"></a><span class=\"lineno\">  135</span>&#160;                            ULONG in_nMin=1,</div>\n\
<div class=\"line\"><a name=\"l00136\"></a><span class=\"lineno\">  136</span>&#160;                            ULONG in_nMax=1,</div>\n\
<div class=\"line\"><a name=\"l00137\"></a><span class=\"lineno\">  137</span>&#160;                            <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a> in_strGroupName=<a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>() );</div>\n\
<div class=\"line\"><a name=\"l00138\"></a><span class=\"lineno\">  138</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00156\"></a><span class=\"lineno\">  156</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> AddInputPort(   ULONG in_uniquePortId,</div>\n\
<div class=\"line\"><a name=\"l00157\"></a><span class=\"lineno\">  157</span>&#160;                            ULONG in_uniqueGroupId,</div>\n\
<div class=\"line\"><a name=\"l00158\"></a><span class=\"lineno\">  158</span>&#160;                            ULONG in_nDataType,</div>\n\
<div class=\"line\"><a name=\"l00159\"></a><span class=\"lineno\">  159</span>&#160;                            ULONG in_nStructType,</div>\n\
<div class=\"line\"><a name=\"l00160\"></a><span class=\"lineno\">  160</span>&#160;                            ULONG in_nContextType,</div>\n\
<div class=\"line\"><a name=\"l00161\"></a><span class=\"lineno\">  161</span>&#160;                            <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp; in_strName,</div>\n\
<div class=\"line\"><a name=\"l00162\"></a><span class=\"lineno\">  162</span>&#160;                            <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp; in_strScriptName,</div>\n\
<div class=\"line\"><a name=\"l00163\"></a><span class=\"lineno\">  163</span>&#160;                            <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CValue.html\">CValue</a>&amp; in_defaultVal = <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CValue.html\">CValue</a>(),</div>\n\
<div class=\"line\"><a name=\"l00164\"></a><span class=\"lineno\">  164</span>&#160;                            ULONG in_typeMapId = UINT_MAX,</div>\n\
<div class=\"line\"><a name=\"l00165\"></a><span class=\"lineno\">  165</span>&#160;                            ULONG in_structMapId = UINT_MAX,</div>\n\
<div class=\"line\"><a name=\"l00166\"></a><span class=\"lineno\">  166</span>&#160;                            ULONG in_contextMapId = UINT_MAX );</div>\n\
<div class=\"line\"><a name=\"l00167\"></a><span class=\"lineno\">  167</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00189\"></a><span class=\"lineno\">  189</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> AddInputPort(   ULONG in_uniquePortId,</div>\n\
<div class=\"line\"><a name=\"l00190\"></a><span class=\"lineno\">  190</span>&#160;                            ULONG in_uniqueGroupId,</div>\n\
<div class=\"line\"><a name=\"l00191\"></a><span class=\"lineno\">  191</span>&#160;                            ULONG in_nDataType,</div>\n\
<div class=\"line\"><a name=\"l00192\"></a><span class=\"lineno\">  192</span>&#160;                            ULONG in_nStructType,</div>\n\
<div class=\"line\"><a name=\"l00193\"></a><span class=\"lineno\">  193</span>&#160;                            ULONG in_nContextType,</div>\n\
<div class=\"line\"><a name=\"l00194\"></a><span class=\"lineno\">  194</span>&#160;                            <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp; in_strName,</div>\n\
<div class=\"line\"><a name=\"l00195\"></a><span class=\"lineno\">  195</span>&#160;                            <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp; in_strScriptName,</div>\n\
<div class=\"line\"><a name=\"l00196\"></a><span class=\"lineno\">  196</span>&#160;                            <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CValue.html\">CValue</a>&amp; in_defaultVal,</div>\n\
<div class=\"line\"><a name=\"l00197\"></a><span class=\"lineno\">  197</span>&#160;                            <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CValue.html\">CValue</a>&amp; in_minVal,</div>\n\
<div class=\"line\"><a name=\"l00198\"></a><span class=\"lineno\">  198</span>&#160;                            <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CValue.html\">CValue</a>&amp; in_maxVal,</div>\n\
<div class=\"line\"><a name=\"l00199\"></a><span class=\"lineno\">  199</span>&#160;                            ULONG in_typeMapId,</div>\n\
<div class=\"line\"><a name=\"l00200\"></a><span class=\"lineno\">  200</span>&#160;                            ULONG in_structMapId,</div>\n\
<div class=\"line\"><a name=\"l00201\"></a><span class=\"lineno\">  201</span>&#160;                            ULONG in_contextMapId );</div>\n\
<div class=\"line\"><a name=\"l00202\"></a><span class=\"lineno\">  202</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00217\"></a><span class=\"lineno\">  217</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> AddInputPort(   ULONG               in_uniquePortId,</div>\n\
<div class=\"line\"><a name=\"l00218\"></a><span class=\"lineno\">  218</span>&#160;                            ULONG               in_uniqueGroupId,</div>\n\
<div class=\"line\"><a name=\"l00219\"></a><span class=\"lineno\">  219</span>&#160;                            <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStringArray.html\">CStringArray</a>&amp; in_strCustomDataTypes,</div>\n\
<div class=\"line\"><a name=\"l00220\"></a><span class=\"lineno\">  220</span>&#160;                            ULONG               in_nStructType,</div>\n\
<div class=\"line\"><a name=\"l00221\"></a><span class=\"lineno\">  221</span>&#160;                            ULONG               in_nContextType,</div>\n\
<div class=\"line\"><a name=\"l00222\"></a><span class=\"lineno\">  222</span>&#160;                            <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp;      in_strName,</div>\n\
<div class=\"line\"><a name=\"l00223\"></a><span class=\"lineno\">  223</span>&#160;                            <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp;      in_strScriptName,</div>\n\
<div class=\"line\"><a name=\"l00224\"></a><span class=\"lineno\">  224</span>&#160;                            ULONG               in_typeMapId,</div>\n\
<div class=\"line\"><a name=\"l00225\"></a><span class=\"lineno\">  225</span>&#160;                            ULONG               in_structMapId,</div>\n\
<div class=\"line\"><a name=\"l00226\"></a><span class=\"lineno\">  226</span>&#160;                            ULONG               in_contextMapId );</div>\n\
<div class=\"line\"><a name=\"l00227\"></a><span class=\"lineno\">  227</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00242\"></a><span class=\"lineno\">  242</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> AddOutputPort(  ULONG in_uniquePortId,</div>\n\
<div class=\"line\"><a name=\"l00243\"></a><span class=\"lineno\">  243</span>&#160;                            ULONG in_nDataType,</div>\n\
<div class=\"line\"><a name=\"l00244\"></a><span class=\"lineno\">  244</span>&#160;                            ULONG in_nStructType,</div>\n\
<div class=\"line\"><a name=\"l00245\"></a><span class=\"lineno\">  245</span>&#160;                            ULONG in_nContextType,</div>\n\
<div class=\"line\"><a name=\"l00246\"></a><span class=\"lineno\">  246</span>&#160;                            <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp; in_strName,</div>\n\
<div class=\"line\"><a name=\"l00247\"></a><span class=\"lineno\">  247</span>&#160;                            <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp; in_strScriptName,</div>\n\
<div class=\"line\"><a name=\"l00248\"></a><span class=\"lineno\">  248</span>&#160;                            ULONG in_typeMapId = UINT_MAX,</div>\n\
<div class=\"line\"><a name=\"l00249\"></a><span class=\"lineno\">  249</span>&#160;                            ULONG in_structMapId = UINT_MAX,</div>\n\
<div class=\"line\"><a name=\"l00250\"></a><span class=\"lineno\">  250</span>&#160;                            ULONG in_contextMapId = UINT_MAX );</div>\n\
<div class=\"line\"><a name=\"l00251\"></a><span class=\"lineno\">  251</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00265\"></a><span class=\"lineno\">  265</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> AddOutputPort(  ULONG               in_uniquePortId,</div>\n\
<div class=\"line\"><a name=\"l00266\"></a><span class=\"lineno\">  266</span>&#160;                            <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStringArray.html\">CStringArray</a>&amp; in_strCustomDataTypes,</div>\n\
<div class=\"line\"><a name=\"l00267\"></a><span class=\"lineno\">  267</span>&#160;                            ULONG               in_nStructType,</div>\n\
<div class=\"line\"><a name=\"l00268\"></a><span class=\"lineno\">  268</span>&#160;                            ULONG               in_nContextType,</div>\n\
<div class=\"line\"><a name=\"l00269\"></a><span class=\"lineno\">  269</span>&#160;                            <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp;      in_strName,</div>\n\
<div class=\"line\"><a name=\"l00270\"></a><span class=\"lineno\">  270</span>&#160;                            <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp;      in_strScriptName,</div>\n\
<div class=\"line\"><a name=\"l00271\"></a><span class=\"lineno\">  271</span>&#160;                            ULONG               in_typeMapId = UINT_MAX,</div>\n\
<div class=\"line\"><a name=\"l00272\"></a><span class=\"lineno\">  272</span>&#160;                            ULONG               in_structMapId = UINT_MAX,</div>\n\
<div class=\"line\"><a name=\"l00273\"></a><span class=\"lineno\">  273</span>&#160;                            ULONG               in_contextMapId = UINT_MAX );</div>\n\
<div class=\"line\"><a name=\"l00274\"></a><span class=\"lineno\">  274</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00290\"></a><span class=\"lineno\">  290</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> AddOutputPort(  ULONG in_uniquePortId,</div>\n\
<div class=\"line\"><a name=\"l00291\"></a><span class=\"lineno\">  291</span>&#160;                            ULONG in_uniqueGroupId,</div>\n\
<div class=\"line\"><a name=\"l00292\"></a><span class=\"lineno\">  292</span>&#160;                            ULONG in_nDataType,</div>\n\
<div class=\"line\"><a name=\"l00293\"></a><span class=\"lineno\">  293</span>&#160;                            ULONG in_nStructType,</div>\n\
<div class=\"line\"><a name=\"l00294\"></a><span class=\"lineno\">  294</span>&#160;                            ULONG in_nContextType,</div>\n\
<div class=\"line\"><a name=\"l00295\"></a><span class=\"lineno\">  295</span>&#160;                            <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp; in_strName,</div>\n\
<div class=\"line\"><a name=\"l00296\"></a><span class=\"lineno\">  296</span>&#160;                            <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp; in_strScriptName,</div>\n\
<div class=\"line\"><a name=\"l00297\"></a><span class=\"lineno\">  297</span>&#160;                            ULONG in_typeMapId = UINT_MAX,</div>\n\
<div class=\"line\"><a name=\"l00298\"></a><span class=\"lineno\">  298</span>&#160;                            ULONG in_structMapId = UINT_MAX,</div>\n\
<div class=\"line\"><a name=\"l00299\"></a><span class=\"lineno\">  299</span>&#160;                            ULONG in_contextMapId = UINT_MAX );</div>\n\
<div class=\"line\"><a name=\"l00300\"></a><span class=\"lineno\">  300</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00310\"></a><span class=\"lineno\">  310</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> PutColor( <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">char</span> in_red, <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">char</span> in_green, <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">char</span> in_blue );</div>\n\
<div class=\"line\"><a name=\"l00311\"></a><span class=\"lineno\">  311</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00312\"></a><span class=\"lineno\">  312</span>&#160;    <span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\"><a name=\"l00313\"></a><span class=\"lineno\">  313</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1ICENodeDef.html\">ICENodeDef</a> * operator&amp;() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00314\"></a><span class=\"lineno\">  314</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1ICENodeDef.html\">ICENodeDef</a> * operator&amp;();</div>\n\
<div class=\"line\"><a name=\"l00315\"></a><span class=\"lineno\">  315</span>&#160;};</div>\n\
<div class=\"line\"><a name=\"l00316\"></a><span class=\"lineno\">  316</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00317\"></a><span class=\"lineno\">  317</span>&#160;};</div>\n\
<div class=\"line\"><a name=\"l00318\"></a><span class=\"lineno\">  318</span>&#160;<span class=\"preprocessor\">#endif // __XSIICENODEDEF_H__</span></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CRef_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">XSI::CRef</a></div><div class=\"ttdoc\">This class is used to reference Softimage objects. Each instance of an CRef maintains a link with onl...</div><div class=\"ttdef\"><b>Definition:</b> xsi_ref.h:142</div></div>\n\
<div class=\"ttc\" id=\"xsi__value_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/xsi__value_8h.html\">xsi_value.h</a></div><div class=\"ttdoc\">CValue and CValueArray class declarations. </div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CValue_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CValue.html\">XSI::CValue</a></div><div class=\"ttdoc\">The CValue object provides the convenience of a loosely typed variable inside a strictly typed langua...</div><div class=\"ttdef\"><b>Definition:</b> xsi_value.h:159</div></div>\n\
<div class=\"ttc\" id=\"namespaceXSI_html_a2e77132c412f0b988ff1e9b88ba0fe9a\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/namespaceXSI.html#a2e77132c412f0b988ff1e9b88ba0fe9a\">XSI::siICENodeThreadingModel</a></div><div class=\"ttdeci\">siICENodeThreadingModel</div><div class=\"ttdef\"><b>Definition:</b> xsi_decl.h:2831</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CBase_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CBase.html\">XSI::CBase</a></div><div class=\"ttdoc\">CBase is the base class of all API classes and provides access to Softimage objects through generic C...</div><div class=\"ttdef\"><b>Definition:</b> xsi_base.h:137</div></div>\n\
<div class=\"ttc\" id=\"namespaceXSI_html_ad483c77b3d997caca1f369db99c1e68b\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/namespaceXSI.html#ad483c77b3d997caca1f369db99c1e68b\">XSI::siClassID</a></div><div class=\"ttdeci\">siClassID</div><div class=\"ttdef\"><b>Definition:</b> xsi_decl.h:1537</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CString_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">XSI::CString</a></div><div class=\"ttdoc\">Character strings in the Softimage SDK are represented with the CString class. CString consist of a v...</div><div class=\"ttdef\"><b>Definition:</b> xsi_string.h:76</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CStatus_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">XSI::CStatus</a></div><div class=\"ttdoc\">Encapsulates status data types for error handling purpose. The class also exposes methods to query an...</div><div class=\"ttdef\"><b>Definition:</b> xsi_status.h:36</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CStringArray_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CStringArray.html\">XSI::CStringArray</a></div><div class=\"ttdoc\">The CStringArray is an uni-dimensional array of CString objects. </div><div class=\"ttdef\"><b>Definition:</b> xsi_string.h:675</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1ICENodeDef_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1ICENodeDef.html\">XSI::ICENodeDef</a></div><div class=\"ttdoc\">ICENodeDef objects are used for describing a unique custom ICENode object. Instances of this object a...</div><div class=\"ttdef\"><b>Definition:</b> xsi_icenodedef.h:36</div></div>\n\
<div class=\"ttc\" id=\"xsi__base_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/xsi__base_8h.html\">xsi_base.h</a></div><div class=\"ttdoc\">CBase class declaration. </div></div>\n\
</div><!-- fragment --></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";