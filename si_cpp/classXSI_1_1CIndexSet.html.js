var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>CIndexSet Class Reference</title>\n\
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
      initNavTree(\'classXSI_1_1CIndexSet.html\', prefix);\n\
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
            <h1>CIndexSet Class Reference</h1>\n\
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
<a href=\"#nested-classes\">Classes</a> &#124;\n\
<a href=\"#pub-methods\">Public Member Functions</a>  </div>\n\
  <div class=\"headertitle\">\n\
<div class=\"title\">CIndexSet Class Reference</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/xsi__indexset_8h_source.html\">xsi_indexset.h</a>&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CIndexSet.html\" title=\"CIndexSet encapsulates an index set for indexing CDataArray object types for the current evaluation...\">CIndexSet</a> encapsulates an index set for indexing <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CDataArray.html\" title=\"This template class encapsulates the 1D data arrays passed to custom node plug-ins during a graph eva...\">CDataArray</a> object types for the current evaluation. </p>\n\
<dl class=\"section user\"><dt>Example:</dt><dd><div class=\"fragment\"><div class=\"line\">XSIPLUGINCALLBACK CStatus YPosFilter_Evaluate( ICENodeContext&amp; in_ctxt )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// The current output port being evaluated...</span></div>\n\
<div class=\"line\">    ULONG out_portID = in_ctxt.GetEvaluatedOutputPortID( );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">switch</span>( out_portID )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">case</span> OutPort200:</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            CDataArrayVector3f inputData( ctxt, InPort0 );</div>\n\
<div class=\"line\">            CDataArrayVector3f outData( ctxt );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"comment\">// We need a CIndexSet to iterate over the data</span></div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CIndexSet.html#aef20573548ba94dad1ed30dcb2fc72f4\">CIndexSet</a> indexSet( in_ctxt );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"keywordflow\">for</span>(CIndexSet::Iterator it = indexSet.Begin(); it.HasNext(); )</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                outData[ it ] = inputData[ it ];</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                <span class=\"keywordflow\">if</span> ( inputData[it].GetY() &lt; 0.0 )</div>\n\
<div class=\"line\">                {</div>\n\
<div class=\"line\">                    it.Remove( );</div>\n\
<div class=\"line\">                }</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">                {</div>\n\
<div class=\"line\">                    it.Next( );</div>\n\
<div class=\"line\">                }</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">    };</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281da2bc49ec37d6a5715dd23e85f1ff5bb59\">CStatus::OK</a>;</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --></dd></dl>\n\
<dl class=\"section since\"><dt>Since</dt><dd>7.0 </dd></dl>\n\
<dl class=\"section see\"><dt>See Also</dt><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CIndexSet_1_1Iterator.html\" title=\"A class for iterating over CDataArray objects during an evaluation. Iterator objects must always be c...\">CIndexSet::Iterator</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CDataArray.html\" title=\"This template class encapsulates the 1D data arrays passed to custom node plug-ins during a graph eva...\">CDataArray</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CDataArray2D.html\" title=\"This template class encapsulates 2D data arrays that are passed to custom node plug-ins during a grap...\">CDataArray2D</a> </dd></dl>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"nested-classes\"></a>\n\
Classes</h2></td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CIndexSet_1_1Iterator.html\">Iterator</a></td></tr>\n\
<tr class=\"memdesc:\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">A class for iterating over <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CDataArray.html\" title=\"This template class encapsulates the 1D data arrays passed to custom node plug-ins during a graph eva...\">CDataArray</a> objects during an evaluation. <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CIndexSet_1_1Iterator.html\" title=\"A class for iterating over CDataArray objects during an evaluation. Iterator objects must always be c...\">Iterator</a> objects must always be created with <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CIndexSet.html#a6ddde4815b16f8449b19328d03eeef20\">CIndexSet::Begin()</a>.  <a href=\"#!/url=./si_cpp/classXSI_1_1CIndexSet_1_1Iterator.html#details\">More...</a><br></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:aef20573548ba94dad1ed30dcb2fc72f4\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">SICPPSDK_INLINE&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CIndexSet.html#aef20573548ba94dad1ed30dcb2fc72f4\">CIndexSet</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1ICENodeContext.html\">ICENodeContext</a> &amp;in_ctxt)</td></tr>\n\
<tr class=\"separator:aef20573548ba94dad1ed30dcb2fc72f4\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a7b5ca5d95a116ace95e7a05afafa2dfb\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">SICPPSDK_INLINE&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CIndexSet.html#a7b5ca5d95a116ace95e7a05afafa2dfb\">CIndexSet</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1ICENodeContext.html\">ICENodeContext</a> &amp;in_ctxt, ULONG in_nInputPortID, ULONG in_nInstanceIndex=0)</td></tr>\n\
<tr class=\"separator:a7b5ca5d95a116ace95e7a05afafa2dfb\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac89e14006759725894dd7e694bc76709\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">SICPPSDK_INLINE&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CIndexSet.html#ac89e14006759725894dd7e694bc76709\">~CIndexSet</a> ()</td></tr>\n\
<tr class=\"separator:ac89e14006759725894dd7e694bc76709\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a6ddde4815b16f8449b19328d03eeef20\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">SICPPSDK_INLINE <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CIndexSet_1_1Iterator.html\">Iterator</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CIndexSet.html#a6ddde4815b16f8449b19328d03eeef20\">Begin</a> ()</td></tr>\n\
<tr class=\"separator:a6ddde4815b16f8449b19328d03eeef20\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:adb88f230888b18cbf7ab8c4182875994\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">SICPPSDK_INLINE ULONG&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CIndexSet.html#adb88f230888b18cbf7ab8c4182875994\">GetFilteredCount</a> () const </td></tr>\n\
<tr class=\"separator:adb88f230888b18cbf7ab8c4182875994\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"aef20573548ba94dad1ed30dcb2fc72f4\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">SICPPSDK_INLINE <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CIndexSet.html\">CIndexSet</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1ICENodeContext.html\">ICENodeContext</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>in_ctxt</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Constructor. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramname\">in_ctxt</td><td><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1ICENode.html\" title=\"The ICENode object represents an effect node in the ICE graph. \">ICENode</a> evaluation context. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a7b5ca5d95a116ace95e7a05afafa2dfb\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">SICPPSDK_INLINE <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CIndexSet.html\">CIndexSet</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1ICENodeContext.html\">ICENodeContext</a> &amp;&#160;</td>\n\
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
<p>Constructor. Creates the index set for a specific port. </p>\n\
<dl class=\"section user\"><dt>Note:</dt><dd>The <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CIndexSet.html\" title=\"CIndexSet encapsulates an index set for indexing CDataArray object types for the current evaluation...\">CIndexSet</a> created can not be used to set the output port data array and is only valid when the underlying custom <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1ICENode.html\" title=\"The ICENode object represents an effect node in the ICE graph. \">ICENode</a> is set with the <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/namespaceXSI.html#a2e77132c412f0b988ff1e9b88ba0fe9aadcb9b57357b7c73b1a953946848cee08\">siICENodeSingleThreading</a> or <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/namespaceXSI.html#a2e77132c412f0b988ff1e9b88ba0fe9aae9f32fd23b51a1afbf5c165ab277fa27\">siICENodeMultiEvaluationPhase</a> mode. The object created is read-only, indices cannot be removed with <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CIndexSet_1_1Iterator.html#ac80e139d09a8d4758b280d05a04f16fa\">CIndexSet::Iterator::Remove</a>.</dd></dl>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramname\">in_ctxt</td><td><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1ICENode.html\" title=\"The ICENode object represents an effect node in the ICE graph. \">ICENode</a> evaluation context. </td></tr>\n\
    <tr><td class=\"paramname\">in_nInputPortID</td><td>Input port identifier. </td></tr>\n\
    <tr><td class=\"paramname\">in_nInstanceIndex</td><td>The group instance of the port. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ac89e14006759725894dd7e694bc76709\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">SICPPSDK_INLINE ~<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CIndexSet.html\">CIndexSet</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Destructor. </p>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a6ddde4815b16f8449b19328d03eeef20\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">SICPPSDK_INLINE <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CIndexSet_1_1Iterator.html\">CIndexSet::Iterator</a> Begin </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Returns an <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CIndexSet_1_1Iterator.html\" title=\"A class for iterating over CDataArray objects during an evaluation. Iterator objects must always be c...\">Iterator</a> object pointing to the first index element. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>An <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CIndexSet_1_1Iterator.html\" title=\"A class for iterating over CDataArray objects during an evaluation. Iterator objects must always be c...\">Iterator</a> object. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"adb88f230888b18cbf7ab8c4182875994\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">SICPPSDK_INLINE ULONG GetFilteredCount </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Returns the filtered size of the index set. </p>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following file:<ul>\n\
<li><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/xsi__indexset_8h_source.html\">xsi_indexset.h</a></li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";