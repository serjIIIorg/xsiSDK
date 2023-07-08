var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>xsi_ppgitem.h Source File</title>\n\
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
      initNavTree(\'xsi__ppgitem_8h_source.html\', prefix);\n\
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
            <h1>xsi_ppgitem.h Source File</h1>\n\
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
<div class=\"title\">xsi_ppgitem.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<a href=\"#!/url=./si_cpp/xsi__ppgitem_8h.html\">Go to the documentation of this file.</a><div class=\"fragment\"><div class=\"line\"><a name=\"l00001\"></a><span class=\"lineno\">    1</span>&#160;<span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00011\"></a><span class=\"lineno\">   11</span>&#160;<span class=\"comment\"></span><span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00012\"></a><span class=\"lineno\">   12</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00013\"></a><span class=\"lineno\">   13</span>&#160;<span class=\"preprocessor\">#if (_MSC_VER &gt; 1000) || defined(SGI_COMPILER)</span></div>\n\
<div class=\"line\"><a name=\"l00014\"></a><span class=\"lineno\">   14</span>&#160;<span class=\"preprocessor\"></span><span class=\"preprocessor\">#pragma once</span></div>\n\
<div class=\"line\"><a name=\"l00015\"></a><span class=\"lineno\">   15</span>&#160;<span class=\"preprocessor\"></span><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"><a name=\"l00016\"></a><span class=\"lineno\">   16</span>&#160;<span class=\"preprocessor\"></span></div>\n\
<div class=\"line\"><a name=\"l00017\"></a><span class=\"lineno\">   17</span>&#160;<span class=\"preprocessor\">#ifndef __XSIPPGITEM_H__</span></div>\n\
<div class=\"line\"><a name=\"l00018\"></a><span class=\"lineno\">   18</span>&#160;<span class=\"preprocessor\"></span><span class=\"preprocessor\">#define __XSIPPGITEM_H__</span></div>\n\
<div class=\"line\"><a name=\"l00019\"></a><span class=\"lineno\">   19</span>&#160;<span class=\"preprocessor\"></span></div>\n\
<div class=\"line\"><a name=\"l00020\"></a><span class=\"lineno\">   20</span>&#160;<span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./si_cpp/xsi__base_8h.html\">xsi_base.h</a>&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00021\"></a><span class=\"lineno\">   21</span>&#160;<span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./si_cpp/xsi__value_8h.html\">xsi_value.h</a>&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00022\"></a><span class=\"lineno\">   22</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00023\"></a><span class=\"lineno\">   23</span>&#160;<span class=\"keyword\">namespace </span>XSI {</div>\n\
<div class=\"line\"><a name=\"l00024\"></a><span class=\"lineno\">   24</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00025\"></a><span class=\"lineno\">   25</span>&#160;<span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00122\"></a><span class=\"lineno\">  122</span>&#160;<span class=\"comment\"></span><span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00123\"></a><span class=\"lineno\">  123</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00124\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./si_cpp/classXSI_1_1PPGItem.html\">  124</a></span>&#160;<span class=\"keyword\">class </span>SICPPSDKDECL <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1PPGItem.html\">PPGItem</a> : <span class=\"keyword\">public</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CBase.html\">CBase</a></div>\n\
<div class=\"line\"><a name=\"l00125\"></a><span class=\"lineno\">  125</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00126\"></a><span class=\"lineno\">  126</span>&#160;<span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"><a name=\"l00128\"></a><span class=\"lineno\">  128</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1PPGItem.html\">PPGItem</a>();</div>\n\
<div class=\"line\"><a name=\"l00129\"></a><span class=\"lineno\">  129</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00131\"></a><span class=\"lineno\">  131</span>&#160;    ~<a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1PPGItem.html\">PPGItem</a>();</div>\n\
<div class=\"line\"><a name=\"l00132\"></a><span class=\"lineno\">  132</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00136\"></a><span class=\"lineno\">  136</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1PPGItem.html\">PPGItem</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a>&amp; in_ref);</div>\n\
<div class=\"line\"><a name=\"l00137\"></a><span class=\"lineno\">  137</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00141\"></a><span class=\"lineno\">  141</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1PPGItem.html\">PPGItem</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1PPGItem.html\">PPGItem</a>&amp; in_obj);</div>\n\
<div class=\"line\"><a name=\"l00142\"></a><span class=\"lineno\">  142</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00147\"></a><span class=\"lineno\">  147</span>&#160;    <span class=\"keywordtype\">bool</span> IsA( <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#ad483c77b3d997caca1f369db99c1e68b\">siClassID</a> in_ClassID) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00148\"></a><span class=\"lineno\">  148</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00152\"></a><span class=\"lineno\">  152</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#ad483c77b3d997caca1f369db99c1e68b\">siClassID</a> GetClassID() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00153\"></a><span class=\"lineno\">  153</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00158\"></a><span class=\"lineno\">  158</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1PPGItem.html\">PPGItem</a>&amp; operator=(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1PPGItem.html\">PPGItem</a>&amp; in_obj);</div>\n\
<div class=\"line\"><a name=\"l00159\"></a><span class=\"lineno\">  159</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00165\"></a><span class=\"lineno\">  165</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1PPGItem.html\">PPGItem</a>&amp; operator=(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a>&amp; in_ref);</div>\n\
<div class=\"line\"><a name=\"l00166\"></a><span class=\"lineno\">  166</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00173\"></a><span class=\"lineno\">  173</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a> GetName() <span class=\"keyword\">const</span> ;</div>\n\
<div class=\"line\"><a name=\"l00174\"></a><span class=\"lineno\">  174</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00180\"></a><span class=\"lineno\">  180</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> PutName( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp; in_Name ) ;</div>\n\
<div class=\"line\"><a name=\"l00181\"></a><span class=\"lineno\">  181</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00186\"></a><span class=\"lineno\">  186</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a> GetLabel() <span class=\"keyword\">const</span> ;</div>\n\
<div class=\"line\"><a name=\"l00187\"></a><span class=\"lineno\">  187</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00206\"></a><span class=\"lineno\">  206</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> PutLabel( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp; in_Label ) ;</div>\n\
<div class=\"line\"><a name=\"l00207\"></a><span class=\"lineno\">  207</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00212\"></a><span class=\"lineno\">  212</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a> GetType() <span class=\"keyword\">const</span> ;</div>\n\
<div class=\"line\"><a name=\"l00213\"></a><span class=\"lineno\">  213</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00221\"></a><span class=\"lineno\">  221</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> PutType( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp; in_Type ) ;</div>\n\
<div class=\"line\"><a name=\"l00222\"></a><span class=\"lineno\">  222</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00230\"></a><span class=\"lineno\">  230</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CValueArray.html\">CValueArray</a> GetUIItems() <span class=\"keyword\">const</span> ;</div>\n\
<div class=\"line\"><a name=\"l00231\"></a><span class=\"lineno\">  231</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00241\"></a><span class=\"lineno\">  241</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> PutUIItems( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CValueArray.html\">CValueArray</a> &amp; in_items ) ;</div>\n\
<div class=\"line\"><a name=\"l00242\"></a><span class=\"lineno\">  242</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00247\"></a><span class=\"lineno\">  247</span>&#160;    LONG GetWidthPercentage() <span class=\"keyword\">const</span> ;</div>\n\
<div class=\"line\"><a name=\"l00248\"></a><span class=\"lineno\">  248</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00256\"></a><span class=\"lineno\">  256</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> PutWidthPercentage(LONG in_percent) ;</div>\n\
<div class=\"line\"><a name=\"l00257\"></a><span class=\"lineno\">  257</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00263\"></a><span class=\"lineno\">  263</span>&#160;    LONG GetLabelPercentage() <span class=\"keyword\">const</span> ;</div>\n\
<div class=\"line\"><a name=\"l00264\"></a><span class=\"lineno\">  264</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00278\"></a><span class=\"lineno\">  278</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> PutLabelPercentage(LONG in_percent) ;</div>\n\
<div class=\"line\"><a name=\"l00279\"></a><span class=\"lineno\">  279</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00285\"></a><span class=\"lineno\">  285</span>&#160;    LONG GetLabelMinPixels() <span class=\"keyword\">const</span> ;</div>\n\
<div class=\"line\"><a name=\"l00286\"></a><span class=\"lineno\">  286</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00297\"></a><span class=\"lineno\">  297</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> PutLabelMinPixels(LONG in_pixels) ;</div>\n\
<div class=\"line\"><a name=\"l00298\"></a><span class=\"lineno\">  298</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00318\"></a><span class=\"lineno\">  318</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> PutAttribute ( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp; in_UIAttribute,</div>\n\
<div class=\"line\"><a name=\"l00319\"></a><span class=\"lineno\">  319</span>&#160;                           <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CValue.html\">CValue</a>&amp; in_AttributeValue );</div>\n\
<div class=\"line\"><a name=\"l00320\"></a><span class=\"lineno\">  320</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00395\"></a><span class=\"lineno\">  395</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CValue.html\">CValue</a> GetAttribute ( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp; in_UIAttribute ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00396\"></a><span class=\"lineno\">  396</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00397\"></a><span class=\"lineno\">  397</span>&#160;    <span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\"><a name=\"l00398\"></a><span class=\"lineno\">  398</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1PPGItem.html\">PPGItem</a> * operator&amp;() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00399\"></a><span class=\"lineno\">  399</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1PPGItem.html\">PPGItem</a> * operator&amp;();</div>\n\
<div class=\"line\"><a name=\"l00400\"></a><span class=\"lineno\">  400</span>&#160;};</div>\n\
<div class=\"line\"><a name=\"l00401\"></a><span class=\"lineno\">  401</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00402\"></a><span class=\"lineno\">  402</span>&#160;};</div>\n\
<div class=\"line\"><a name=\"l00403\"></a><span class=\"lineno\">  403</span>&#160;<span class=\"preprocessor\">#endif // __XSIPPGITEM_H__</span></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CRef_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">XSI::CRef</a></div><div class=\"ttdoc\">This class is used to reference Softimage objects. Each instance of an CRef maintains a link with onl...</div><div class=\"ttdef\"><b>Definition:</b> xsi_ref.h:142</div></div>\n\
<div class=\"ttc\" id=\"xsi__value_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/xsi__value_8h.html\">xsi_value.h</a></div><div class=\"ttdoc\">CValue and CValueArray class declarations. </div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CValue_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CValue.html\">XSI::CValue</a></div><div class=\"ttdoc\">The CValue object provides the convenience of a loosely typed variable inside a strictly typed langua...</div><div class=\"ttdef\"><b>Definition:</b> xsi_value.h:159</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CBase_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CBase.html\">XSI::CBase</a></div><div class=\"ttdoc\">CBase is the base class of all API classes and provides access to Softimage objects through generic C...</div><div class=\"ttdef\"><b>Definition:</b> xsi_base.h:137</div></div>\n\
<div class=\"ttc\" id=\"namespaceXSI_html_ad483c77b3d997caca1f369db99c1e68b\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/namespaceXSI.html#ad483c77b3d997caca1f369db99c1e68b\">XSI::siClassID</a></div><div class=\"ttdeci\">siClassID</div><div class=\"ttdef\"><b>Definition:</b> xsi_decl.h:1537</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CString_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">XSI::CString</a></div><div class=\"ttdoc\">Character strings in the Softimage SDK are represented with the CString class. CString consist of a v...</div><div class=\"ttdef\"><b>Definition:</b> xsi_string.h:76</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1PPGItem_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1PPGItem.html\">XSI::PPGItem</a></div><div class=\"ttdoc\">This object represents a component of the user interface of a Property Page. </div><div class=\"ttdef\"><b>Definition:</b> xsi_ppgitem.h:124</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CStatus_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">XSI::CStatus</a></div><div class=\"ttdoc\">Encapsulates status data types for error handling purpose. The class also exposes methods to query an...</div><div class=\"ttdef\"><b>Definition:</b> xsi_status.h:36</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CValueArray_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CValueArray.html\">XSI::CValueArray</a></div><div class=\"ttdoc\">The CValueArray is an uni-dimensional array of CValue. </div><div class=\"ttdef\"><b>Definition:</b> xsi_value.h:1214</div></div>\n\
<div class=\"ttc\" id=\"xsi__base_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/xsi__base_8h.html\">xsi_base.h</a></div><div class=\"ttdoc\">CBase class declaration. </div></div>\n\
</div><!-- fragment --></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";