var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>CICEAttributeDataArray2DCustomType Class Reference</title>\n\
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
      initNavTree(\'classXSI_1_1CICEAttributeDataArray2DCustomType.html\', prefix);\n\
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
            <h1>CICEAttributeDataArray2DCustomType Class Reference</h1>\n\
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
<a href=\"#pub-methods\">Public Member Functions</a>  </div>\n\
  <div class=\"headertitle\">\n\
<div class=\"title\">CICEAttributeDataArray2DCustomType Class Reference</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/xsi__iceattributedataarray2D_8h_source.html\">xsi_iceattributedataarray2D.h</a>&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>This class is a specialization of <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEAttributeDataArray.html\" title=\"This template class encapsulates ICEAttribute data as a 1D array. CICEAttributeDataArray objects are ...\">CICEAttributeDataArray</a> to give access to the <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1ICEAttribute.html\" title=\"The ICEAttribute object represents an attribute data set (a collection of information used in the ICE...\">ICEAttribute</a> data as a 2D array of type <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/namespaceXSI.html#a307f67e56bb2121f6a8eb0a99929bb1aa33dc9df06b749104a4b8ace5e5f7e3f4\">siICENodeDataCustomType</a>. CICEAttributeDataArray2DCustomType objects are read-only and can be filled with the methods supplied with the <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1ICEAttribute.html\" title=\"The ICEAttribute object represents an attribute data set (a collection of information used in the ICE...\">ICEAttribute</a> class. </p>\n\
<dl class=\"section user\"><dt>Note:</dt><dd>Data of type <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/namespaceXSI.html#a307f67e56bb2121f6a8eb0a99929bb1aa33dc9df06b749104a4b8ace5e5f7e3f4\">siICENodeDataCustomType</a> can be created with custom ICENodes.</dd></dl>\n\
<dl class=\"section see\"><dt>See Also</dt><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1ICEAttribute.html#ac6e52dd6db12632e390ee738cca58187\">ICEAttribute::GetDataArray2D</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1ICEAttribute.html#abd8b88c0aded6796c3aedca14b546f82\">ICEAttribute::GetDataArray2DChunk</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEAttributeDataArrayCustomType.html\" title=\"This class is a specialization of CICEAttributeDataArray to give access to the ICEAttribute data as a...\">CICEAttributeDataArrayCustomType</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/CICEAttributeDataArrayTypedefs.html\">Type Definitions for CICEAttributeDataArray</a> </dd></dl>\n\
<dl class=\"section since\"><dt>Since</dt><dd>Supernova</dd></dl>\n\
<dl class=\"section user\"><dt>Example:</dt><dd>This example demonstrates how to iterate over the siICENodeDataCustomType 2D attributes on a geometry. Check out the SDK InspectICEAttributes sample for a more detailed example. <div class=\"fragment\"><div class=\"line\"><span class=\"keyword\">using namespace </span>XSI;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Application.html\">Application</a> app;</div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1X3DObject.html\">X3DObject</a> x3dObj = app.<a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Application.html#a86e4238f625d2af6344a7313766631c1\">GetSelection</a>().<a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Selection.html#aadd1f10944ec7c05a35c1548b502d7e1\">GetItem</a>(0);</div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1ICEAttribute.html\">ICEAttribute</a> attr = x3dObj.GetActivePrimitive().GetGeometry().GetICEAttributeFromName( L<span class=\"stringliteral\">&quot;SomeCustomDataType2DAttribute&quot;</span> );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Log the data pointer address and size of data.</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CICEAttributeDataArray2DCustomType.html\">CICEAttributeDataArray2DCustomType</a> customData2D;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">attr.GetDataArray2D( customData2D );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordflow\">for</span>( ULONG i=0; i&lt;customData2D.GetCount( ); i++ )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CICEAttributeDataArrayCustomType.html\">CICEAttributeDataArrayCustomType</a> customData;</div>\n\
<div class=\"line\">    customData2D.GetSubArray( i, customData );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span>( ULONG j=0; j&lt;customData.<a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CBaseICEAttributeDataArray.html#aaf99ae62191d421f6b41f34092e683e2\">GetCount</a>( ); j++ )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        ULONG nSize;</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> CICEAttributeDataArrayCustomType::TData* pBuffer;</div>\n\
<div class=\"line\">        customData.<a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CICEAttributeDataArrayCustomType.html#afb6c32d658fb0bad00d127989db7cd98\">GetData</a>( j, &amp;pBuffer, nSize );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        app.<a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Application.html#a9b269de260f6a9fca710d9b9003bd1a3\">LogMessage</a>( <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>( (<span class=\"keywordtype\">void</span>*)pBuffer ) + L<span class=\"stringliteral\">&quot;:&quot;</span> + <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>( nSize ) );</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </dd></dl>\n\
</div><div id=\"dynsection-0\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\">\n\
  <img id=\"dynsection-0-trigger\" src=\"closed.png\" alt=\"+\"> Inheritance diagram for CICEAttributeDataArray2DCustomType:</div>\n\
<div id=\"dynsection-0-summary\" class=\"dynsummary\" style=\"display:block;\">\n\
</div>\n\
<div id=\"dynsection-0-content\" class=\"dyncontent\" style=\"display:none;\">\n\
 <div class=\"center\">\n\
  <img src=\"classXSI_1_1CICEAttributeDataArray2DCustomType.png\" usemap=\"#CICEAttributeDataArray2DCustomType_map\" alt=\"\">\n\
  <map id=\"CICEAttributeDataArray2DCustomType_map\" name=\"CICEAttributeDataArray2DCustomType_map\">\n\
<area href=\"classXSI_1_1CBaseICEAttributeDataArray.html\" title=\"Base class CICEAttributeDataArray class for the CICEAttributeDataArray and CICEAttributeDataArray2D t...\" alt=\"CBaseICEAttributeDataArray\" shape=\"rect\" coords=\"0,0,232,24\">\n\
</map>\n\
 </div></div>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:af4511ab85591bb28bc70f71f328ca17c\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEAttributeDataArray2DCustomType.html#af4511ab85591bb28bc70f71f328ca17c\">CICEAttributeDataArray2DCustomType</a> ()</td></tr>\n\
<tr class=\"separator:af4511ab85591bb28bc70f71f328ca17c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a3e86169205d6c20cc61ea69e83a48518\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEAttributeDataArray2DCustomType.html#a3e86169205d6c20cc61ea69e83a48518\">~CICEAttributeDataArray2DCustomType</a> ()</td></tr>\n\
<tr class=\"separator:a3e86169205d6c20cc61ea69e83a48518\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a9d224776b1ca5a6ddca0561dbfe7c09f\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEAttributeDataArray2DCustomType.html#a9d224776b1ca5a6ddca0561dbfe7c09f\">GetSubArray</a> (ULONG in_index, <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CBaseICEAttributeDataArray.html\">CBaseICEAttributeDataArray</a> &amp;out_dataArray) const </td></tr>\n\
<tr class=\"separator:a9d224776b1ca5a6ddca0561dbfe7c09f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a77962db378107edbaccb2a14ec56d2e9\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEAttributeDataArray2DCustomType.html#a77962db378107edbaccb2a14ec56d2e9\">SetSubArray</a> (ULONG in_index, const unsigned char **in_ppData, ULONG in_count, ULONG *in_pElemSizes)</td></tr>\n\
<tr class=\"separator:a77962db378107edbaccb2a14ec56d2e9\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa9abf13e159374ca69695ce430caa66d\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEAttributeDataArray2DCustomType.html#aa9abf13e159374ca69695ce430caa66d\">SetSubArray</a> (ULONG in_index, const unsigned char **in_ppData, ULONG in_count, ULONG in_fixedElemSize)</td></tr>\n\
<tr class=\"separator:aa9abf13e159374ca69695ce430caa66d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"inherit_header pub_methods_classXSI_1_1CBaseICEAttributeDataArray\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pub_methods_classXSI_1_1CBaseICEAttributeDataArray\')\"><img src=\"closed.png\" alt=\"-\">&#160;Public Member Functions inherited from <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CBaseICEAttributeDataArray.html\">CBaseICEAttributeDataArray</a></td></tr>\n\
<tr class=\"memitem:aaf99ae62191d421f6b41f34092e683e2 inherit pub_methods_classXSI_1_1CBaseICEAttributeDataArray\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">ULONG&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CBaseICEAttributeDataArray.html#aaf99ae62191d421f6b41f34092e683e2\">GetCount</a> () const </td></tr>\n\
<tr class=\"separator:aaf99ae62191d421f6b41f34092e683e2 inherit pub_methods_classXSI_1_1CBaseICEAttributeDataArray\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a03aafe48c441185a645a7b1055481a93 inherit pub_methods_classXSI_1_1CBaseICEAttributeDataArray\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CBaseICEAttributeDataArray.html#a03aafe48c441185a645a7b1055481a93\">IsConstant</a> () const </td></tr>\n\
<tr class=\"separator:a03aafe48c441185a645a7b1055481a93 inherit pub_methods_classXSI_1_1CBaseICEAttributeDataArray\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa45d9784f08ca0d0b525db6bd863d6a1 inherit pub_methods_classXSI_1_1CBaseICEAttributeDataArray\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/namespaceXSI.html#a307f67e56bb2121f6a8eb0a99929bb1a\">XSI::siICENodeDataType</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CBaseICEAttributeDataArray.html#aa45d9784f08ca0d0b525db6bd863d6a1\">GetDataType</a> () const </td></tr>\n\
<tr class=\"separator:aa45d9784f08ca0d0b525db6bd863d6a1 inherit pub_methods_classXSI_1_1CBaseICEAttributeDataArray\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a925874a7a044415741ff83bd06e95821 inherit pub_methods_classXSI_1_1CBaseICEAttributeDataArray\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/namespaceXSI.html#a25edb7cb80d670db4441230cee17938d\">XSI::siICENodeStructureType</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CBaseICEAttributeDataArray.html#a925874a7a044415741ff83bd06e95821\">GetStructureType</a> () const </td></tr>\n\
<tr class=\"separator:a925874a7a044415741ff83bd06e95821 inherit pub_methods_classXSI_1_1CBaseICEAttributeDataArray\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"af4511ab85591bb28bc70f71f328ca17c\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEAttributeDataArray2DCustomType.html\">CICEAttributeDataArray2DCustomType</a> </td>\n\
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
<p>Constructor. </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a3e86169205d6c20cc61ea69e83a48518\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">~<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEAttributeDataArray2DCustomType.html\">CICEAttributeDataArray2DCustomType</a> </td>\n\
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
<p>Destructor. </p>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a9d224776b1ca5a6ddca0561dbfe7c09f\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> GetSubArray </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">ULONG&#160;</td>\n\
          <td class=\"paramname\"><em>in_index</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CBaseICEAttributeDataArray.html\">CBaseICEAttributeDataArray</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>out_dataArray</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">inline</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
<p>Returns the sub-array containing the custom type data at a given index. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramname\">in_index</td><td>Index in the array. The index must be smaller than the number of elements in the array, otherwise the results are unpredictable. </td></tr>\n\
    <tr><td class=\"paramname\">out_dataArray</td><td>A read-only reference to a <code><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CICEAttributeDataArrayCustomType.html\" title=\"This class is a specialization of CICEAttributeDataArray to give access to the ICEAttribute data as a...\">CICEAttributeDataArrayCustomType</a></code> object at a specific index. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281da2bc49ec37d6a5715dd23e85f1ff5bb59\">CStatus::OK</a> Success </dd>\n\
<dd>\n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281dad795f6709d0c6419c4fe31703e454e27\">CStatus::InvalidArgument</a> If <code>in_index</code> or <code>out_dataArray</code> is invalid. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a77962db378107edbaccb2a14ec56d2e9\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> SetSubArray </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">ULONG&#160;</td>\n\
          <td class=\"paramname\"><em>in_index</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const unsigned char **&#160;</td>\n\
          <td class=\"paramname\"><em>in_ppData</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">ULONG&#160;</td>\n\
          <td class=\"paramname\"><em>in_count</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">ULONG *&#160;</td>\n\
          <td class=\"paramname\"><em>in_pElemSizes</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Set the sub-array at a given index This is only supported for writable attributes and not available for built-in attributes. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramname\">in_index</td><td>Index in the array. The index must be smaller than the number of elements in the array, otherwise the result is unpredictable. If this DataArray2D is an array chunk, <code>in_index</code> <code>is</code> relative to the chunk offset. </td></tr>\n\
    <tr><td class=\"paramname\">in_ppData</td><td>Array containing the input custom-typed data </td></tr>\n\
    <tr><td class=\"paramname\">in_count</td><td>Number of elements </td></tr>\n\
    <tr><td class=\"paramname\">in_pElemSizes</td><td>Array specifying the element sizes </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281da2bc49ec37d6a5715dd23e85f1ff5bb59\">CStatus::OK</a> Success </dd>\n\
<dd>\n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281dad795f6709d0c6419c4fe31703e454e27\">CStatus::InvalidArgument</a> If <code>in_index</code>, <code>in_ppData</code>, <code>in_count</code> or <code>in_pElemSizes</code> is invalid. </dd></dl>\n\
<dl class=\"section since\"><dt>Since</dt><dd>v12.0 (2014) </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aa9abf13e159374ca69695ce430caa66d\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> SetSubArray </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">ULONG&#160;</td>\n\
          <td class=\"paramname\"><em>in_index</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const unsigned char **&#160;</td>\n\
          <td class=\"paramname\"><em>in_ppData</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">ULONG&#160;</td>\n\
          <td class=\"paramname\"><em>in_count</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">ULONG&#160;</td>\n\
          <td class=\"paramname\"><em>in_fixedElemSize</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Set the sub-array at a given index This is only supported for writable attributes and not available for built-in attributes. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramname\">in_index</td><td>Index in the array. The index must be smaller than the number of elements in the array, otherwise the result is unpredictable. If this DataArray2D is an array chunk, <code>in_index</code> <code>is</code> relative to the chunk offset. </td></tr>\n\
    <tr><td class=\"paramname\">in_ppData</td><td>array containing the input custom type data </td></tr>\n\
    <tr><td class=\"paramname\">in_count</td><td>number of elements to be set </td></tr>\n\
    <tr><td class=\"paramname\">in_fixedElemSize</td><td>the fixed size of all elements </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281da2bc49ec37d6a5715dd23e85f1ff5bb59\">CStatus::OK</a> Success </dd>\n\
<dd>\n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281dad795f6709d0c6419c4fe31703e454e27\">CStatus::InvalidArgument</a> If <code>in_index</code>, <code>in_ppData</code>, <code>in_count</code> or <code>in_fixedElemSize</code> is invalid. </dd></dl>\n\
<dl class=\"section since\"><dt>Since</dt><dd>12.0 (2014) </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following file:<ul>\n\
<li><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/xsi__iceattributedataarray2D_8h_source.html\">xsi_iceattributedataarray2D.h</a></li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";