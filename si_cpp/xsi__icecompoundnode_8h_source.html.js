var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>xsi_icecompoundnode.h Source File</title>\n\
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
      initNavTree(\'xsi__icecompoundnode_8h_source.html\', prefix);\n\
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
            <h1>xsi_icecompoundnode.h Source File</h1>\n\
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
<div class=\"title\">xsi_icecompoundnode.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<a href=\"#!/url=./si_cpp/xsi__icecompoundnode_8h.html\">Go to the documentation of this file.</a><div class=\"fragment\"><div class=\"line\"><a name=\"l00001\"></a><span class=\"lineno\">    1</span>&#160;<span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00011\"></a><span class=\"lineno\">   11</span>&#160;<span class=\"comment\"></span><span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00012\"></a><span class=\"lineno\">   12</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00013\"></a><span class=\"lineno\">   13</span>&#160;<span class=\"preprocessor\">#if (_MSC_VER &gt; 1000) || defined(SGI_COMPILER)</span></div>\n\
<div class=\"line\"><a name=\"l00014\"></a><span class=\"lineno\">   14</span>&#160;<span class=\"preprocessor\"></span><span class=\"preprocessor\">#pragma once</span></div>\n\
<div class=\"line\"><a name=\"l00015\"></a><span class=\"lineno\">   15</span>&#160;<span class=\"preprocessor\"></span><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"><a name=\"l00016\"></a><span class=\"lineno\">   16</span>&#160;<span class=\"preprocessor\"></span></div>\n\
<div class=\"line\"><a name=\"l00017\"></a><span class=\"lineno\">   17</span>&#160;<span class=\"preprocessor\">#ifndef __XSIICECOMPOUNDNODE_H__</span></div>\n\
<div class=\"line\"><a name=\"l00018\"></a><span class=\"lineno\">   18</span>&#160;<span class=\"preprocessor\"></span><span class=\"preprocessor\">#define __XSIICECOMPOUNDNODE_H__</span></div>\n\
<div class=\"line\"><a name=\"l00019\"></a><span class=\"lineno\">   19</span>&#160;<span class=\"preprocessor\"></span></div>\n\
<div class=\"line\"><a name=\"l00020\"></a><span class=\"lineno\">   20</span>&#160;<span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./si_cpp/xsi__icenodecontainer_8h.html\">xsi_icenodecontainer.h</a>&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00021\"></a><span class=\"lineno\">   21</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00022\"></a><span class=\"lineno\">   22</span>&#160;<span class=\"keyword\">namespace </span>XSI {</div>\n\
<div class=\"line\"><a name=\"l00023\"></a><span class=\"lineno\">   23</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00024\"></a><span class=\"lineno\">   24</span>&#160;<span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00231\"></a><span class=\"lineno\">  231</span>&#160;<span class=\"comment\"></span><span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00232\"></a><span class=\"lineno\">  232</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00233\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./si_cpp/classXSI_1_1ICECompoundNode.html\">  233</a></span>&#160;<span class=\"keyword\">class </span>SICPPSDKDECL <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1ICECompoundNode.html\">ICECompoundNode</a> : <span class=\"keyword\">public</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1ICENodeContainer.html\">ICENodeContainer</a></div>\n\
<div class=\"line\"><a name=\"l00234\"></a><span class=\"lineno\">  234</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00235\"></a><span class=\"lineno\">  235</span>&#160;<span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"><a name=\"l00237\"></a><span class=\"lineno\">  237</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1ICECompoundNode.html\">ICECompoundNode</a>();</div>\n\
<div class=\"line\"><a name=\"l00238\"></a><span class=\"lineno\">  238</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00240\"></a><span class=\"lineno\">  240</span>&#160;    ~<a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1ICECompoundNode.html\">ICECompoundNode</a>();</div>\n\
<div class=\"line\"><a name=\"l00241\"></a><span class=\"lineno\">  241</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00245\"></a><span class=\"lineno\">  245</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1ICECompoundNode.html\">ICECompoundNode</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a>&amp; in_ref);</div>\n\
<div class=\"line\"><a name=\"l00246\"></a><span class=\"lineno\">  246</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00250\"></a><span class=\"lineno\">  250</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1ICECompoundNode.html\">ICECompoundNode</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1ICECompoundNode.html\">ICECompoundNode</a>&amp; in_obj);</div>\n\
<div class=\"line\"><a name=\"l00251\"></a><span class=\"lineno\">  251</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00256\"></a><span class=\"lineno\">  256</span>&#160;    <span class=\"keywordtype\">bool</span> IsA( <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#ad483c77b3d997caca1f369db99c1e68b\">siClassID</a> in_ClassID) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00257\"></a><span class=\"lineno\">  257</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00261\"></a><span class=\"lineno\">  261</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#ad483c77b3d997caca1f369db99c1e68b\">siClassID</a> GetClassID() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00262\"></a><span class=\"lineno\">  262</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00268\"></a><span class=\"lineno\">  268</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1ICECompoundNode.html\">ICECompoundNode</a>&amp; operator=(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1ICECompoundNode.html\">ICECompoundNode</a>&amp; in_obj);</div>\n\
<div class=\"line\"><a name=\"l00269\"></a><span class=\"lineno\">  269</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00275\"></a><span class=\"lineno\">  275</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1ICECompoundNode.html\">ICECompoundNode</a>&amp; operator=(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a>&amp; in_ref);</div>\n\
<div class=\"line\"><a name=\"l00276\"></a><span class=\"lineno\">  276</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00502\"></a><span class=\"lineno\">  502</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> GetExposedPorts( <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRefArray.html\">CRefArray</a>&amp; out_exposedPorts, <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRefArray.html\">CRefArray</a>&amp; out_nodePorts ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00503\"></a><span class=\"lineno\">  503</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00509\"></a><span class=\"lineno\">  509</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> GetVersion( ULONG&amp; out_major, ULONG&amp; out_minor ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00510\"></a><span class=\"lineno\">  510</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00511\"></a><span class=\"lineno\">  511</span>&#160;    <span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\"><a name=\"l00512\"></a><span class=\"lineno\">  512</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1ICECompoundNode.html\">ICECompoundNode</a> * operator&amp;() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00513\"></a><span class=\"lineno\">  513</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1ICECompoundNode.html\">ICECompoundNode</a> * operator&amp;();</div>\n\
<div class=\"line\"><a name=\"l00514\"></a><span class=\"lineno\">  514</span>&#160;};</div>\n\
<div class=\"line\"><a name=\"l00515\"></a><span class=\"lineno\">  515</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00516\"></a><span class=\"lineno\">  516</span>&#160;};</div>\n\
<div class=\"line\"><a name=\"l00517\"></a><span class=\"lineno\">  517</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00518\"></a><span class=\"lineno\">  518</span>&#160;<span class=\"preprocessor\">#endif // __XSIICECOMPOUNDNODE_H__</span></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1ICENodeContainer_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1ICENodeContainer.html\">XSI::ICENodeContainer</a></div><div class=\"ttdoc\">The ICENodeContainer object represents the base class for containers in a node graph. </div><div class=\"ttdef\"><b>Definition:</b> xsi_icenodecontainer.h:36</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CRef_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">XSI::CRef</a></div><div class=\"ttdoc\">This class is used to reference Softimage objects. Each instance of an CRef maintains a link with onl...</div><div class=\"ttdef\"><b>Definition:</b> xsi_ref.h:142</div></div>\n\
<div class=\"ttc\" id=\"xsi__icenodecontainer_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/xsi__icenodecontainer_8h.html\">xsi_icenodecontainer.h</a></div><div class=\"ttdoc\">ICENodeContainer class declaration. </div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CRefArray_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CRefArray.html\">XSI::CRefArray</a></div><div class=\"ttdoc\">The CRefArray class holds generic CRef objects and acts as a base class for other specialized CRef ar...</div><div class=\"ttdef\"><b>Definition:</b> xsi_ref.h:333</div></div>\n\
<div class=\"ttc\" id=\"namespaceXSI_html_ad483c77b3d997caca1f369db99c1e68b\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/namespaceXSI.html#ad483c77b3d997caca1f369db99c1e68b\">XSI::siClassID</a></div><div class=\"ttdeci\">siClassID</div><div class=\"ttdef\"><b>Definition:</b> xsi_decl.h:1537</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CStatus_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">XSI::CStatus</a></div><div class=\"ttdoc\">Encapsulates status data types for error handling purpose. The class also exposes methods to query an...</div><div class=\"ttdef\"><b>Definition:</b> xsi_status.h:36</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1ICECompoundNode_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1ICECompoundNode.html\">XSI::ICECompoundNode</a></div><div class=\"ttdoc\">The ICECompoundNode object represents a node sub-graph. </div><div class=\"ttdef\"><b>Definition:</b> xsi_icecompoundnode.h:233</div></div>\n\
</div><!-- fragment --></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";