var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>xsi_material.h Source File</title>\n\
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
      initNavTree(\'xsi__material_8h_source.html\', prefix);\n\
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
            <h1>xsi_material.h Source File</h1>\n\
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
<div class=\"title\">xsi_material.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<a href=\"#!/url=./si_cpp/xsi__material_8h.html\">Go to the documentation of this file.</a><div class=\"fragment\"><div class=\"line\"><a name=\"l00001\"></a><span class=\"lineno\">    1</span>&#160;<span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00011\"></a><span class=\"lineno\">   11</span>&#160;<span class=\"comment\"></span><span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00012\"></a><span class=\"lineno\">   12</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00013\"></a><span class=\"lineno\">   13</span>&#160;<span class=\"preprocessor\">#if (_MSC_VER &gt; 1000) || defined(SGI_COMPILER)</span></div>\n\
<div class=\"line\"><a name=\"l00014\"></a><span class=\"lineno\">   14</span>&#160;<span class=\"preprocessor\"></span><span class=\"preprocessor\">#pragma once</span></div>\n\
<div class=\"line\"><a name=\"l00015\"></a><span class=\"lineno\">   15</span>&#160;<span class=\"preprocessor\"></span><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"><a name=\"l00016\"></a><span class=\"lineno\">   16</span>&#160;<span class=\"preprocessor\"></span></div>\n\
<div class=\"line\"><a name=\"l00017\"></a><span class=\"lineno\">   17</span>&#160;<span class=\"preprocessor\">#ifndef __XSIMATERIAL_H__</span></div>\n\
<div class=\"line\"><a name=\"l00018\"></a><span class=\"lineno\">   18</span>&#160;<span class=\"preprocessor\"></span><span class=\"preprocessor\">#define __XSIMATERIAL_H__</span></div>\n\
<div class=\"line\"><a name=\"l00019\"></a><span class=\"lineno\">   19</span>&#160;<span class=\"preprocessor\"></span></div>\n\
<div class=\"line\"><a name=\"l00020\"></a><span class=\"lineno\">   20</span>&#160;<span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./si_cpp/xsi__property_8h.html\">xsi_property.h</a>&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00021\"></a><span class=\"lineno\">   21</span>&#160;<span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./si_cpp/xsi__texturelayer_8h.html\">xsi_texturelayer.h</a>&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00022\"></a><span class=\"lineno\">   22</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00023\"></a><span class=\"lineno\">   23</span>&#160;<span class=\"keyword\">namespace </span>XSI {</div>\n\
<div class=\"line\"><a name=\"l00024\"></a><span class=\"lineno\">   24</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00025\"></a><span class=\"lineno\">   25</span>&#160;<span class=\"keyword\">class </span>OGLMaterial;</div>\n\
<div class=\"line\"><a name=\"l00026\"></a><span class=\"lineno\">   26</span>&#160;<span class=\"keyword\">class </span>OGLTutorial;</div>\n\
<div class=\"line\"><a name=\"l00027\"></a><span class=\"lineno\">   27</span>&#160;<span class=\"keyword\">class </span>OGLTexture;</div>\n\
<div class=\"line\"><a name=\"l00028\"></a><span class=\"lineno\">   28</span>&#160;<span class=\"keyword\">class </span>ClusterProperty;</div>\n\
<div class=\"line\"><a name=\"l00029\"></a><span class=\"lineno\">   29</span>&#160;<span class=\"keyword\">class </span>ImageClip;</div>\n\
<div class=\"line\"><a name=\"l00030\"></a><span class=\"lineno\">   30</span>&#160;<span class=\"keyword\">class </span>ImageClip2;</div>\n\
<div class=\"line\"><a name=\"l00031\"></a><span class=\"lineno\">   31</span>&#160;<span class=\"keyword\">class </span>Texture;</div>\n\
<div class=\"line\"><a name=\"l00032\"></a><span class=\"lineno\">   32</span>&#160;<span class=\"keyword\">class </span>Library;</div>\n\
<div class=\"line\"><a name=\"l00033\"></a><span class=\"lineno\">   33</span>&#160;<span class=\"keyword\">class </span>CParameterRefArray;</div>\n\
<div class=\"line\"><a name=\"l00034\"></a><span class=\"lineno\">   34</span>&#160;<span class=\"keyword\">class </span>CLongArray;</div>\n\
<div class=\"line\"><a name=\"l00035\"></a><span class=\"lineno\">   35</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00036\"></a><span class=\"lineno\">   36</span>&#160;<span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00062\"></a><span class=\"lineno\">   62</span>&#160;<span class=\"comment\"></span><span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00063\"></a><span class=\"lineno\">   63</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00064\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./si_cpp/classXSI_1_1Material.html\">   64</a></span>&#160;<span class=\"keyword\">class </span>SICPPSDKDECL <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Material.html\">Material</a> : <span class=\"keyword\">public</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Property.html\">Property</a></div>\n\
<div class=\"line\"><a name=\"l00065\"></a><span class=\"lineno\">   65</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00066\"></a><span class=\"lineno\">   66</span>&#160;<span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"><a name=\"l00068\"></a><span class=\"lineno\">   68</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Material.html\">Material</a>();</div>\n\
<div class=\"line\"><a name=\"l00069\"></a><span class=\"lineno\">   69</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00071\"></a><span class=\"lineno\">   71</span>&#160;    ~<a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Material.html\">Material</a>();</div>\n\
<div class=\"line\"><a name=\"l00072\"></a><span class=\"lineno\">   72</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00076\"></a><span class=\"lineno\">   76</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Material.html\">Material</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a>&amp; in_ref);</div>\n\
<div class=\"line\"><a name=\"l00077\"></a><span class=\"lineno\">   77</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00081\"></a><span class=\"lineno\">   81</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Material.html\">Material</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Material.html\">Material</a>&amp; in_obj);</div>\n\
<div class=\"line\"><a name=\"l00082\"></a><span class=\"lineno\">   82</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00088\"></a><span class=\"lineno\">   88</span>&#160;    <span class=\"keywordtype\">bool</span> IsA( <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#ad483c77b3d997caca1f369db99c1e68b\">siClassID</a> in_ClassID) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00089\"></a><span class=\"lineno\">   89</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00093\"></a><span class=\"lineno\">   93</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#ad483c77b3d997caca1f369db99c1e68b\">siClassID</a> GetClassID() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00094\"></a><span class=\"lineno\">   94</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00099\"></a><span class=\"lineno\">   99</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Material.html\">Material</a>&amp; operator=(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Material.html\">Material</a>&amp; in_obj);</div>\n\
<div class=\"line\"><a name=\"l00100\"></a><span class=\"lineno\">  100</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00106\"></a><span class=\"lineno\">  106</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Material.html\">Material</a>&amp; operator=(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a>&amp; in_ref);</div>\n\
<div class=\"line\"><a name=\"l00107\"></a><span class=\"lineno\">  107</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00111\"></a><span class=\"lineno\">  111</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRefArray.html\">CRefArray</a>   GetShaders() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00112\"></a><span class=\"lineno\">  112</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00117\"></a><span class=\"lineno\">  117</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRefArray.html\">CRefArray</a>   GetImageClips() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00118\"></a><span class=\"lineno\">  118</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00122\"></a><span class=\"lineno\">  122</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1OGLMaterial.html\">OGLMaterial</a> GetOGLMaterial() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00123\"></a><span class=\"lineno\">  123</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00127\"></a><span class=\"lineno\">  127</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1OGLTexture.html\">OGLTexture</a>  GetOGLTexture() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00128\"></a><span class=\"lineno\">  128</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00131\"></a><span class=\"lineno\">  131</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1ClusterProperty.html\">ClusterProperty</a> GetCurrentUV() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00132\"></a><span class=\"lineno\">  132</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00135\"></a><span class=\"lineno\">  135</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1ImageClip.html\">ImageClip</a>   GetCurrentImageClip() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00136\"></a><span class=\"lineno\">  136</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00140\"></a><span class=\"lineno\">  140</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1ImageClip2.html\">ImageClip2</a>  GetCurrentImageClip2() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00141\"></a><span class=\"lineno\">  141</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00144\"></a><span class=\"lineno\">  144</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Texture.html\">Texture</a> GetCurrentTexture() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00145\"></a><span class=\"lineno\">  145</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00146\"></a><span class=\"lineno\">  146</span>&#160;    <span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a name=\"l00147\"></a><span class=\"lineno\">  147</span>&#160;    <span class=\"comment\">// Texture layering methods -- same as in Shader.</span></div>\n\
<div class=\"line\"><a name=\"l00148\"></a><span class=\"lineno\">  148</span>&#160;    <span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a name=\"l00149\"></a><span class=\"lineno\">  149</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00150\"></a><span class=\"lineno\">  150</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00162\"></a><span class=\"lineno\">  162</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1TextureLayer.html\">TextureLayer</a>    CreateTextureLayer( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp; in_strName = <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>(), <span class=\"keywordtype\">bool</span> in_bAfter = <span class=\"keyword\">true</span>, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1TextureLayer.html\">TextureLayer</a>&amp; in_refLayer = <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1TextureLayer.html\">TextureLayer</a>() );</div>\n\
<div class=\"line\"><a name=\"l00163\"></a><span class=\"lineno\">  163</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00177\"></a><span class=\"lineno\">  177</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a>         AddSharedTextureLayer( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1TextureLayer.html\">TextureLayer</a>&amp; in_layer, <span class=\"keywordtype\">bool</span> in_bAfter = <span class=\"keyword\">true</span>, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1TextureLayer.html\">TextureLayer</a>&amp; in_refLayer = <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1TextureLayer.html\">TextureLayer</a>() );</div>\n\
<div class=\"line\"><a name=\"l00178\"></a><span class=\"lineno\">  178</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00183\"></a><span class=\"lineno\">  183</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRefArray.html\">CRefArray</a>       GetTextureLayers() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00184\"></a><span class=\"lineno\">  184</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00192\"></a><span class=\"lineno\">  192</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a>         RemoveTextureLayer( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1TextureLayer.html\">TextureLayer</a>&amp; in_layer );</div>\n\
<div class=\"line\"><a name=\"l00193\"></a><span class=\"lineno\">  193</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00194\"></a><span class=\"lineno\">  194</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00199\"></a><span class=\"lineno\">  199</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRefArray.html\">CRefArray</a> GetUsedBy() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00204\"></a><span class=\"lineno\">  204</span>&#160;    <span class=\"keywordtype\">bool</span>    IsResolved();</div>\n\
<div class=\"line\"><a name=\"l00210\"></a><span class=\"lineno\">  210</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> Resolve();</div>\n\
<div class=\"line\"><a name=\"l00215\"></a><span class=\"lineno\">  215</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a> GetUnresolvedFullname() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00216\"></a><span class=\"lineno\">  216</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00220\"></a><span class=\"lineno\">  220</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Library.html\">Library</a> GetLibrary() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00221\"></a><span class=\"lineno\">  221</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00232\"></a><span class=\"lineno\">  232</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Property.html\">Property</a>    AddProperty</div>\n\
<div class=\"line\"><a name=\"l00233\"></a><span class=\"lineno\">  233</span>&#160;    (</div>\n\
<div class=\"line\"><a name=\"l00234\"></a><span class=\"lineno\">  234</span>&#160;        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp;  in_preset,</div>\n\
<div class=\"line\"><a name=\"l00235\"></a><span class=\"lineno\">  235</span>&#160;        <span class=\"keywordtype\">bool</span>            in_bBranch = <span class=\"keyword\">false</span> ,</div>\n\
<div class=\"line\"><a name=\"l00236\"></a><span class=\"lineno\">  236</span>&#160;        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp;  in_name = <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>()</div>\n\
<div class=\"line\"><a name=\"l00237\"></a><span class=\"lineno\">  237</span>&#160;    );</div>\n\
<div class=\"line\"><a name=\"l00238\"></a><span class=\"lineno\">  238</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00244\"></a><span class=\"lineno\">  244</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRefArray.html\">CRefArray</a> GetProperties() <span class=\"keyword\">const</span> ;</div>\n\
<div class=\"line\"><a name=\"l00245\"></a><span class=\"lineno\">  245</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00364\"></a><span class=\"lineno\">  364</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRefArray.html\">CRefArray</a> GetConnectedClusterProperties( <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CParameterRefArray.html\">CParameterRefArray</a>&amp; out_refArray ) <span class=\"keyword\">const</span> ;</div>\n\
<div class=\"line\"><a name=\"l00365\"></a><span class=\"lineno\">  365</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00373\"></a><span class=\"lineno\">  373</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#ab36ec0d359fbed88dd1c96aba331005b\">siShaderParameterType</a> GetShaderInputType(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp; in_paramscriptname) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00374\"></a><span class=\"lineno\">  374</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00381\"></a><span class=\"lineno\">  381</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRefArray.html\">CRefArray</a> FindShaders(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp; in_filtername) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00382\"></a><span class=\"lineno\">  382</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00387\"></a><span class=\"lineno\">  387</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRefArray.html\">CRefArray</a>   GetAllShaders() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00388\"></a><span class=\"lineno\">  388</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00395\"></a><span class=\"lineno\">  395</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRefArray.html\">CRefArray</a>   GetAllImageClips() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00396\"></a><span class=\"lineno\">  396</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00397\"></a><span class=\"lineno\">  397</span>&#160;    <span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\"><a name=\"l00398\"></a><span class=\"lineno\">  398</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Material.html\">Material</a> * operator&amp;() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00399\"></a><span class=\"lineno\">  399</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Material.html\">Material</a> * operator&amp;();</div>\n\
<div class=\"line\"><a name=\"l00400\"></a><span class=\"lineno\">  400</span>&#160;};</div>\n\
<div class=\"line\"><a name=\"l00401\"></a><span class=\"lineno\">  401</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00402\"></a><span class=\"lineno\">  402</span>&#160;};</div>\n\
<div class=\"line\"><a name=\"l00403\"></a><span class=\"lineno\">  403</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00404\"></a><span class=\"lineno\">  404</span>&#160;<span class=\"preprocessor\">#endif // __XSIMATERIAL_H__</span></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1Library_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1Library.html\">XSI::Library</a></div><div class=\"ttdoc\">A library is a container of objects of the same type. For example, a material library contains a list...</div><div class=\"ttdef\"><b>Definition:</b> xsi_library.h:193</div></div>\n\
<div class=\"ttc\" id=\"namespaceXSI_html_ab36ec0d359fbed88dd1c96aba331005b\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/namespaceXSI.html#ab36ec0d359fbed88dd1c96aba331005b\">XSI::siShaderParameterType</a></div><div class=\"ttdeci\">siShaderParameterType</div><div class=\"ttdef\"><b>Definition:</b> xsi_decl.h:663</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CRef_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">XSI::CRef</a></div><div class=\"ttdoc\">This class is used to reference Softimage objects. Each instance of an CRef maintains a link with onl...</div><div class=\"ttdef\"><b>Definition:</b> xsi_ref.h:142</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1OGLMaterial_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1OGLMaterial.html\">XSI::OGLMaterial</a></div><div class=\"ttdoc\">This object represents the OpenGL properties of a material object. </div><div class=\"ttdef\"><b>Definition:</b> xsi_oglmaterial.h:52</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1Material_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1Material.html\">XSI::Material</a></div><div class=\"ttdoc\">The Material object represents a material property of a SceneItem object. </div><div class=\"ttdef\"><b>Definition:</b> xsi_material.h:64</div></div>\n\
<div class=\"ttc\" id=\"xsi__texturelayer_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/xsi__texturelayer_8h.html\">xsi_texturelayer.h</a></div><div class=\"ttdoc\">TextureLayer class declaration. </div></div>\n\
<div class=\"ttc\" id=\"xsi__property_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/xsi__property_8h.html\">xsi_property.h</a></div><div class=\"ttdoc\">Property object class declaration. </div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1Texture_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1Texture.html\">XSI::Texture</a></div><div class=\"ttdoc\">Specific Shader object which is a member of the Texture Shaders family (siTextureShaderFamily). </div><div class=\"ttdef\"><b>Definition:</b> xsi_texture.h:70</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1ImageClip2_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1ImageClip2.html\">XSI::ImageClip2</a></div><div class=\"ttdoc\">An ImageClip2 object is an instance of an image Source and is used as the container for applying comp...</div><div class=\"ttdef\"><b>Definition:</b> xsi_imageclip2.h:72</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1TextureLayer_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1TextureLayer.html\">XSI::TextureLayer</a></div><div class=\"ttdoc\">The TextureLayer is an object which simplifies layering of shader effects on top of shaders and mater...</div><div class=\"ttdef\"><b>Definition:</b> xsi_texturelayer.h:105</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1ImageClip_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1ImageClip.html\">XSI::ImageClip</a></div><div class=\"ttdoc\">As of v4.0, this class is obsolete and is replaced by ImageClip2. </div><div class=\"ttdef\"><b>Definition:</b> xsi_imageclip.h:30</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CRefArray_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CRefArray.html\">XSI::CRefArray</a></div><div class=\"ttdoc\">The CRefArray class holds generic CRef objects and acts as a base class for other specialized CRef ar...</div><div class=\"ttdef\"><b>Definition:</b> xsi_ref.h:333</div></div>\n\
<div class=\"ttc\" id=\"namespaceXSI_html_ad483c77b3d997caca1f369db99c1e68b\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/namespaceXSI.html#ad483c77b3d997caca1f369db99c1e68b\">XSI::siClassID</a></div><div class=\"ttdeci\">siClassID</div><div class=\"ttdef\"><b>Definition:</b> xsi_decl.h:1537</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1Property_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1Property.html\">XSI::Property</a></div><div class=\"ttdoc\">The Property class represents the property of the following entities: </div><div class=\"ttdef\"><b>Definition:</b> xsi_property.h:58</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CString_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">XSI::CString</a></div><div class=\"ttdoc\">Character strings in the Softimage SDK are represented with the CString class. CString consist of a v...</div><div class=\"ttdef\"><b>Definition:</b> xsi_string.h:76</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1ClusterProperty_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1ClusterProperty.html\">XSI::ClusterProperty</a></div><div class=\"ttdoc\">Represents a property of a cluster. </div><div class=\"ttdef\"><b>Definition:</b> xsi_clusterproperty.h:235</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CStatus_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">XSI::CStatus</a></div><div class=\"ttdoc\">Encapsulates status data types for error handling purpose. The class also exposes methods to query an...</div><div class=\"ttdef\"><b>Definition:</b> xsi_status.h:36</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1OGLTexture_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1OGLTexture.html\">XSI::OGLTexture</a></div><div class=\"ttdoc\">The OGLTexture object represents the OGL texture properties of a material object. ...</div><div class=\"ttdef\"><b>Definition:</b> xsi_ogltexture.h:68</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CParameterRefArray_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CParameterRefArray.html\">XSI::CParameterRefArray</a></div><div class=\"ttdoc\">An array of Parameters. </div><div class=\"ttdef\"><b>Definition:</b> xsi_parameter.h:70</div></div>\n\
</div><!-- fragment --></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";