var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>xsi_renderercontext.h Source File</title>\n\
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
      initNavTree(\'xsi__renderercontext_8h_source.html\', prefix);\n\
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
            <h1>xsi_renderercontext.h Source File</h1>\n\
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
<div class=\"title\">xsi_renderercontext.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<a href=\"#!/url=./si_cpp/xsi__renderercontext_8h.html\">Go to the documentation of this file.</a><div class=\"fragment\"><div class=\"line\"><a name=\"l00001\"></a><span class=\"lineno\">    1</span>&#160;<span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00011\"></a><span class=\"lineno\">   11</span>&#160;<span class=\"comment\"></span><span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00012\"></a><span class=\"lineno\">   12</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00013\"></a><span class=\"lineno\">   13</span>&#160;<span class=\"preprocessor\">#if (_MSC_VER &gt; 1000) || defined(SGI_COMPILER)</span></div>\n\
<div class=\"line\"><a name=\"l00014\"></a><span class=\"lineno\">   14</span>&#160;<span class=\"preprocessor\"></span><span class=\"preprocessor\">#pragma once</span></div>\n\
<div class=\"line\"><a name=\"l00015\"></a><span class=\"lineno\">   15</span>&#160;<span class=\"preprocessor\"></span><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"><a name=\"l00016\"></a><span class=\"lineno\">   16</span>&#160;<span class=\"preprocessor\"></span></div>\n\
<div class=\"line\"><a name=\"l00017\"></a><span class=\"lineno\">   17</span>&#160;<span class=\"preprocessor\">#ifndef __XSIRENDERERCONTEXT_H__</span></div>\n\
<div class=\"line\"><a name=\"l00018\"></a><span class=\"lineno\">   18</span>&#160;<span class=\"preprocessor\"></span><span class=\"preprocessor\">#define __XSIRENDERERCONTEXT_H__</span></div>\n\
<div class=\"line\"><a name=\"l00019\"></a><span class=\"lineno\">   19</span>&#160;<span class=\"preprocessor\"></span></div>\n\
<div class=\"line\"><a name=\"l00020\"></a><span class=\"lineno\">   20</span>&#160;<span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./si_cpp/xsi__base_8h.html\">xsi_base.h</a>&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00021\"></a><span class=\"lineno\">   21</span>&#160;<span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./si_cpp/xsi__value_8h.html\">xsi_value.h</a>&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00022\"></a><span class=\"lineno\">   22</span>&#160;<span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./si_cpp/xsi__context_8h.html\">xsi_context.h</a>&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00023\"></a><span class=\"lineno\">   23</span>&#160;<span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./si_cpp/xsi__time_8h.html\">xsi_time.h</a>&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00024\"></a><span class=\"lineno\">   24</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00025\"></a><span class=\"lineno\">   25</span>&#160;<span class=\"keyword\">namespace </span>XSI {</div>\n\
<div class=\"line\"><a name=\"l00026\"></a><span class=\"lineno\">   26</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00027\"></a><span class=\"lineno\">   27</span>&#160;<span class=\"keyword\">class </span>Framebuffer;</div>\n\
<div class=\"line\"><a name=\"l00028\"></a><span class=\"lineno\">   28</span>&#160;<span class=\"keyword\">class </span>Property;</div>\n\
<div class=\"line\"><a name=\"l00029\"></a><span class=\"lineno\">   29</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00037\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./si_cpp/classXSI_1_1RendererImageFragment.html\">   37</a></span>&#160;<span class=\"keyword\">class </span><a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1RendererImageFragment.html\">RendererImageFragment</a></div>\n\
<div class=\"line\"><a name=\"l00038\"></a><span class=\"lineno\">   38</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00039\"></a><span class=\"lineno\">   39</span>&#160;<span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"><a name=\"l00044\"></a><span class=\"lineno\">   44</span>&#160;    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1RendererImageFragment.html#a4f19fc7d527b385adac325ce79a71449\">GetOffsetX</a>( ) <span class=\"keyword\">const</span> = 0;</div>\n\
<div class=\"line\"><a name=\"l00045\"></a><span class=\"lineno\">   45</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00050\"></a><span class=\"lineno\">   50</span>&#160;    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1RendererImageFragment.html#addc0bc8b95a7e61ce2ef37bcbc257af4\">GetOffsetY</a>( ) <span class=\"keyword\">const</span> = 0;</div>\n\
<div class=\"line\"><a name=\"l00051\"></a><span class=\"lineno\">   51</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00055\"></a><span class=\"lineno\">   55</span>&#160;    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1RendererImageFragment.html#a1b872b7a860133e0fbdf4b3e08b4582f\">GetWidth</a>( ) <span class=\"keyword\">const</span> = 0;</div>\n\
<div class=\"line\"><a name=\"l00056\"></a><span class=\"lineno\">   56</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00060\"></a><span class=\"lineno\">   60</span>&#160;    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1RendererImageFragment.html#a43a973a05f66c93adc28466e6c69ebbd\">GetHeight</a>( ) <span class=\"keyword\">const</span> = 0;</div>\n\
<div class=\"line\"><a name=\"l00061\"></a><span class=\"lineno\">   61</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00080\"></a><span class=\"lineno\">   80</span>&#160;    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">bool</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1RendererImageFragment.html#a591602553983241f702ddb0b2d3fff6a\">GetScanlineRGBA</a>( <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> in_uiRow, <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#a981c544ff2dd9013bf90d3f83fe25a36\">siImageBitDepth</a> in_eBitDepth, <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">char</span> *out_pScanline ) <span class=\"keyword\">const</span> = 0;</div>\n\
<div class=\"line\"><a name=\"l00081\"></a><span class=\"lineno\">   81</span>&#160;};</div>\n\
<div class=\"line\"><a name=\"l00082\"></a><span class=\"lineno\">   82</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00083\"></a><span class=\"lineno\">   83</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00084\"></a><span class=\"lineno\">   84</span>&#160;<span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00092\"></a><span class=\"lineno\">   92</span>&#160;<span class=\"comment\"></span><span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00093\"></a><span class=\"lineno\">   93</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00094\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./si_cpp/classXSI_1_1RendererContext.html\">   94</a></span>&#160;<span class=\"keyword\">class </span>SICPPSDKDECL <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1RendererContext.html\">RendererContext</a> : <span class=\"keyword\">public</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Context.html\">Context</a></div>\n\
<div class=\"line\"><a name=\"l00095\"></a><span class=\"lineno\">   95</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00096\"></a><span class=\"lineno\">   96</span>&#160;<span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"><a name=\"l00097\"></a><span class=\"lineno\">   97</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00099\"></a><span class=\"lineno\">   99</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1RendererContext.html\">RendererContext</a>();</div>\n\
<div class=\"line\"><a name=\"l00100\"></a><span class=\"lineno\">  100</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00102\"></a><span class=\"lineno\">  102</span>&#160;    ~<a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1RendererContext.html\">RendererContext</a>();</div>\n\
<div class=\"line\"><a name=\"l00103\"></a><span class=\"lineno\">  103</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00107\"></a><span class=\"lineno\">  107</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1RendererContext.html\">RendererContext</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a>&amp; in_ref);</div>\n\
<div class=\"line\"><a name=\"l00108\"></a><span class=\"lineno\">  108</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00112\"></a><span class=\"lineno\">  112</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1RendererContext.html\">RendererContext</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1RendererContext.html\">RendererContext</a>&amp; in_obj);</div>\n\
<div class=\"line\"><a name=\"l00113\"></a><span class=\"lineno\">  113</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00118\"></a><span class=\"lineno\">  118</span>&#160;    <span class=\"keywordtype\">bool</span> IsA( <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#ad483c77b3d997caca1f369db99c1e68b\">siClassID</a> in_ClassID) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00119\"></a><span class=\"lineno\">  119</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00123\"></a><span class=\"lineno\">  123</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#ad483c77b3d997caca1f369db99c1e68b\">siClassID</a> GetClassID() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00124\"></a><span class=\"lineno\">  124</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00129\"></a><span class=\"lineno\">  129</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1RendererContext.html\">RendererContext</a>&amp; operator=(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1RendererContext.html\">RendererContext</a>&amp; in_obj);</div>\n\
<div class=\"line\"><a name=\"l00130\"></a><span class=\"lineno\">  130</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00136\"></a><span class=\"lineno\">  136</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1RendererContext.html\">RendererContext</a>&amp; operator=(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a>&amp; in_ref);</div>\n\
<div class=\"line\"><a name=\"l00137\"></a><span class=\"lineno\">  137</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00145\"></a><span class=\"lineno\">  145</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CTime.html\">CTime</a> GetTime() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00146\"></a><span class=\"lineno\">  146</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00154\"></a><span class=\"lineno\">  154</span>&#160;    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> GetSequenceIndex( ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00155\"></a><span class=\"lineno\">  155</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00161\"></a><span class=\"lineno\">  161</span>&#160;    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> GetSequenceLength( ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00162\"></a><span class=\"lineno\">  162</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00171\"></a><span class=\"lineno\">  171</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> ProgressUpdate( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a> &amp;in_strProgressShort, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a> &amp;in_strProgressLong, <span class=\"keywordtype\">int</span> in_iPercentage );</div>\n\
<div class=\"line\"><a name=\"l00172\"></a><span class=\"lineno\">  172</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00183\"></a><span class=\"lineno\">  183</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> NewFrame( <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> in_uiWidth, <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> in_uiHeight );</div>\n\
<div class=\"line\"><a name=\"l00184\"></a><span class=\"lineno\">  184</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00190\"></a><span class=\"lineno\">  190</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> NewFragment( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1RendererImageFragment.html\">RendererImageFragment</a> &amp;in_fragment );</div>\n\
<div class=\"line\"><a name=\"l00191\"></a><span class=\"lineno\">  191</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00208\"></a><span class=\"lineno\">  208</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> TriggerEvent( <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#afb6ebbe7710e6898a918148eb7c6b0e5\">siEventID</a> in_eEventID, <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#a03fe29449ab21ba9a85ae1ab1b38a532\">siRenderingType</a> in_eRenderingType, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CTime.html\">CTime</a> &amp;in_rTime, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStringArray.html\">CStringArray</a> &amp;in_filenames, <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#a21ecf40e5374e704576f1c0e32058cf9\">siRenderFieldType</a> in_eFieldType, <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#ad2ad8c6d0c942fcd9c7ed4be85abd414\">siRenderingErrorType</a> in_eRenderErrorType );</div>\n\
<div class=\"line\"><a name=\"l00209\"></a><span class=\"lineno\">  209</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00210\"></a><span class=\"lineno\">  210</span>&#160;    <span class=\"comment\">// For back-comp.</span></div>\n\
<div class=\"line\"><a name=\"l00211\"></a><span class=\"lineno\">  211</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> TriggerEvent( <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#afb6ebbe7710e6898a918148eb7c6b0e5\">siEventID</a> in_eEventID, <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#a03fe29449ab21ba9a85ae1ab1b38a532\">siRenderingType</a> in_eRenderingType, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CTime.html\">CTime</a> &amp;in_rTime, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStringArray.html\">CStringArray</a> &amp;in_filenames, <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#a21ecf40e5374e704576f1c0e32058cf9\">siRenderFieldType</a> in_eFieldType );</div>\n\
<div class=\"line\"><a name=\"l00212\"></a><span class=\"lineno\">  212</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00219\"></a><span class=\"lineno\">  219</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Property.html\">Property</a> GetRendererProperty( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CTime.html\">CTime</a> &amp;in_rTime );</div>\n\
<div class=\"line\"><a name=\"l00220\"></a><span class=\"lineno\">  220</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00230\"></a><span class=\"lineno\">  230</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Framebuffer.html\">Framebuffer</a> GetDisplayFramebuffer( );</div>\n\
<div class=\"line\"><a name=\"l00231\"></a><span class=\"lineno\">  231</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00236\"></a><span class=\"lineno\">  236</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRefArray.html\">CRefArray</a> GetFramebuffers( );</div>\n\
<div class=\"line\"><a name=\"l00237\"></a><span class=\"lineno\">  237</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00262\"></a><span class=\"lineno\">  262</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> SetObjectClean( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a>&amp; in_ref );</div>\n\
<div class=\"line\"><a name=\"l00263\"></a><span class=\"lineno\">  263</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00264\"></a><span class=\"lineno\">  264</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00265\"></a><span class=\"lineno\">  265</span>&#160;    <span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\"><a name=\"l00266\"></a><span class=\"lineno\">  266</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1RendererContext.html\">RendererContext</a> * operator&amp;() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00267\"></a><span class=\"lineno\">  267</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1RendererContext.html\">RendererContext</a> * operator&amp;();</div>\n\
<div class=\"line\"><a name=\"l00268\"></a><span class=\"lineno\">  268</span>&#160;};</div>\n\
<div class=\"line\"><a name=\"l00269\"></a><span class=\"lineno\">  269</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00270\"></a><span class=\"lineno\">  270</span>&#160;};</div>\n\
<div class=\"line\"><a name=\"l00271\"></a><span class=\"lineno\">  271</span>&#160;<span class=\"preprocessor\">#endif // __XSIRENDERERCONTEXT_H__</span></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CRef_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">XSI::CRef</a></div><div class=\"ttdoc\">This class is used to reference Softimage objects. Each instance of an CRef maintains a link with onl...</div><div class=\"ttdef\"><b>Definition:</b> xsi_ref.h:142</div></div>\n\
<div class=\"ttc\" id=\"xsi__context_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/xsi__context_8h.html\">xsi_context.h</a></div><div class=\"ttdoc\">Context class declaration. </div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1RendererImageFragment_html_addc0bc8b95a7e61ce2ef37bcbc257af4\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1RendererImageFragment.html#addc0bc8b95a7e61ce2ef37bcbc257af4\">XSI::RendererImageFragment::GetOffsetY</a></div><div class=\"ttdeci\">virtual unsigned int GetOffsetY() const =0</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1RendererImageFragment_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1RendererImageFragment.html\">XSI::RendererImageFragment</a></div><div class=\"ttdoc\">This abstract class needs to be implemented by the rendering engine to provide image fragments to Sof...</div><div class=\"ttdef\"><b>Definition:</b> xsi_renderercontext.h:37</div></div>\n\
<div class=\"ttc\" id=\"xsi__value_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/xsi__value_8h.html\">xsi_value.h</a></div><div class=\"ttdoc\">CValue and CValueArray class declarations. </div></div>\n\
<div class=\"ttc\" id=\"namespaceXSI_html_a03fe29449ab21ba9a85ae1ab1b38a532\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/namespaceXSI.html#a03fe29449ab21ba9a85ae1ab1b38a532\">XSI::siRenderingType</a></div><div class=\"ttdeci\">siRenderingType</div><div class=\"ttdef\"><b>Definition:</b> xsi_decl.h:1423</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1Framebuffer_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1Framebuffer.html\">XSI::Framebuffer</a></div><div class=\"ttdoc\">The Framebuffer object controls the file output of a RenderChannel object. It can be created using th...</div><div class=\"ttdef\"><b>Definition:</b> xsi_framebuffer.h:104</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CRefArray_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CRefArray.html\">XSI::CRefArray</a></div><div class=\"ttdoc\">The CRefArray class holds generic CRef objects and acts as a base class for other specialized CRef ar...</div><div class=\"ttdef\"><b>Definition:</b> xsi_ref.h:333</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1RendererImageFragment_html_a591602553983241f702ddb0b2d3fff6a\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1RendererImageFragment.html#a591602553983241f702ddb0b2d3fff6a\">XSI::RendererImageFragment::GetScanlineRGBA</a></div><div class=\"ttdeci\">virtual bool GetScanlineRGBA(unsigned int in_uiRow, siImageBitDepth in_eBitDepth, unsigned char *out_pScanline) const =0</div></div>\n\
<div class=\"ttc\" id=\"namespaceXSI_html_ad483c77b3d997caca1f369db99c1e68b\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/namespaceXSI.html#ad483c77b3d997caca1f369db99c1e68b\">XSI::siClassID</a></div><div class=\"ttdeci\">siClassID</div><div class=\"ttdef\"><b>Definition:</b> xsi_decl.h:1537</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1Property_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1Property.html\">XSI::Property</a></div><div class=\"ttdoc\">The Property class represents the property of the following entities: </div><div class=\"ttdef\"><b>Definition:</b> xsi_property.h:58</div></div>\n\
<div class=\"ttc\" id=\"namespaceXSI_html_ad2ad8c6d0c942fcd9c7ed4be85abd414\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/namespaceXSI.html#ad2ad8c6d0c942fcd9c7ed4be85abd414\">XSI::siRenderingErrorType</a></div><div class=\"ttdeci\">siRenderingErrorType</div><div class=\"ttdef\"><b>Definition:</b> xsi_decl.h:1434</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CString_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">XSI::CString</a></div><div class=\"ttdoc\">Character strings in the Softimage SDK are represented with the CString class. CString consist of a v...</div><div class=\"ttdef\"><b>Definition:</b> xsi_string.h:76</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1RendererContext_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1RendererContext.html\">XSI::RendererContext</a></div><div class=\"ttdoc\">This object is provided as the context object in the Renderer callbacks for a Plugin-based Custom Ren...</div><div class=\"ttdef\"><b>Definition:</b> xsi_renderercontext.h:94</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1Context_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1Context.html\">XSI::Context</a></div><div class=\"ttdoc\">This is a general, flexible Context object that is used for callbacks. Instances of this object are u...</div><div class=\"ttdef\"><b>Definition:</b> xsi_context.h:46</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CStatus_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">XSI::CStatus</a></div><div class=\"ttdoc\">Encapsulates status data types for error handling purpose. The class also exposes methods to query an...</div><div class=\"ttdef\"><b>Definition:</b> xsi_status.h:36</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CStringArray_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CStringArray.html\">XSI::CStringArray</a></div><div class=\"ttdoc\">The CStringArray is an uni-dimensional array of CString objects. </div><div class=\"ttdef\"><b>Definition:</b> xsi_string.h:675</div></div>\n\
<div class=\"ttc\" id=\"namespaceXSI_html_a981c544ff2dd9013bf90d3f83fe25a36\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/namespaceXSI.html#a981c544ff2dd9013bf90d3f83fe25a36\">XSI::siImageBitDepth</a></div><div class=\"ttdeci\">siImageBitDepth</div><div class=\"ttdef\"><b>Definition:</b> xsi_decl.h:2562</div></div>\n\
<div class=\"ttc\" id=\"xsi__time_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/xsi__time_8h.html\">xsi_time.h</a></div><div class=\"ttdoc\">CTime and CTimeArray class declarations. </div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1RendererImageFragment_html_a4f19fc7d527b385adac325ce79a71449\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1RendererImageFragment.html#a4f19fc7d527b385adac325ce79a71449\">XSI::RendererImageFragment::GetOffsetX</a></div><div class=\"ttdeci\">virtual unsigned int GetOffsetX() const =0</div></div>\n\
<div class=\"ttc\" id=\"namespaceXSI_html_afb6ebbe7710e6898a918148eb7c6b0e5\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/namespaceXSI.html#afb6ebbe7710e6898a918148eb7c6b0e5\">XSI::siEventID</a></div><div class=\"ttdeci\">siEventID</div><div class=\"ttdef\"><b>Definition:</b> xsi_decl.h:1334</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1RendererImageFragment_html_a1b872b7a860133e0fbdf4b3e08b4582f\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1RendererImageFragment.html#a1b872b7a860133e0fbdf4b3e08b4582f\">XSI::RendererImageFragment::GetWidth</a></div><div class=\"ttdeci\">virtual unsigned int GetWidth() const =0</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CTime_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CTime.html\">XSI::CTime</a></div><div class=\"ttdoc\">The CTime class is a utility class for manipulating time. </div><div class=\"ttdef\"><b>Definition:</b> xsi_time.h:49</div></div>\n\
<div class=\"ttc\" id=\"xsi__base_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/xsi__base_8h.html\">xsi_base.h</a></div><div class=\"ttdoc\">CBase class declaration. </div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1RendererImageFragment_html_a43a973a05f66c93adc28466e6c69ebbd\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1RendererImageFragment.html#a43a973a05f66c93adc28466e6c69ebbd\">XSI::RendererImageFragment::GetHeight</a></div><div class=\"ttdeci\">virtual unsigned int GetHeight() const =0</div></div>\n\
<div class=\"ttc\" id=\"namespaceXSI_html_a21ecf40e5374e704576f1c0e32058cf9\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/namespaceXSI.html#a21ecf40e5374e704576f1c0e32058cf9\">XSI::siRenderFieldType</a></div><div class=\"ttdeci\">siRenderFieldType</div><div class=\"ttdef\"><b>Definition:</b> xsi_decl.h:1415</div></div>\n\
</div><!-- fragment --></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";