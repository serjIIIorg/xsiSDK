var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>xsi_icegeometry.h Source File</title>\n\
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
      initNavTree(\'xsi__icegeometry_8h_source.html\', prefix);\n\
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
            <h1>xsi_icegeometry.h Source File</h1>\n\
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
<div class=\"title\">xsi_icegeometry.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<a href=\"#!/url=./si_cpp/xsi__icegeometry_8h.html\">Go to the documentation of this file.</a><div class=\"fragment\"><div class=\"line\"><a name=\"l00001\"></a><span class=\"lineno\">    1</span>&#160;<span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00011\"></a><span class=\"lineno\">   11</span>&#160;<span class=\"comment\"></span><span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00012\"></a><span class=\"lineno\">   12</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00013\"></a><span class=\"lineno\">   13</span>&#160;<span class=\"preprocessor\">#if (_MSC_VER &gt; 1000) || defined(SGI_COMPILER)</span></div>\n\
<div class=\"line\"><a name=\"l00014\"></a><span class=\"lineno\">   14</span>&#160;<span class=\"preprocessor\"></span><span class=\"preprocessor\">#pragma once</span></div>\n\
<div class=\"line\"><a name=\"l00015\"></a><span class=\"lineno\">   15</span>&#160;<span class=\"preprocessor\"></span><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"><a name=\"l00016\"></a><span class=\"lineno\">   16</span>&#160;<span class=\"preprocessor\"></span></div>\n\
<div class=\"line\"><a name=\"l00017\"></a><span class=\"lineno\">   17</span>&#160;<span class=\"preprocessor\">#ifndef __XSIICEGEOMETRY_H__</span></div>\n\
<div class=\"line\"><a name=\"l00018\"></a><span class=\"lineno\">   18</span>&#160;<span class=\"preprocessor\"></span><span class=\"preprocessor\">#define __XSIICEGEOMETRY_H__</span></div>\n\
<div class=\"line\"><a name=\"l00019\"></a><span class=\"lineno\">   19</span>&#160;<span class=\"preprocessor\"></span></div>\n\
<div class=\"line\"><a name=\"l00020\"></a><span class=\"lineno\">   20</span>&#160;<span class=\"keyword\">namespace </span>XSI {</div>\n\
<div class=\"line\"><a name=\"l00021\"></a><span class=\"lineno\">   21</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00022\"></a><span class=\"lineno\">   22</span>&#160;<span class=\"keyword\">class </span>MATH::CMatrix4f;</div>\n\
<div class=\"line\"><a name=\"l00023\"></a><span class=\"lineno\">   23</span>&#160;<span class=\"keyword\">class </span>CLongArray;</div>\n\
<div class=\"line\"><a name=\"l00024\"></a><span class=\"lineno\">   24</span>&#160;<span class=\"keyword\">class </span>CDoubleArray;</div>\n\
<div class=\"line\"><a name=\"l00025\"></a><span class=\"lineno\">   25</span>&#160;<span class=\"keyword\">class </span>ICENodeContext;</div>\n\
<div class=\"line\"><a name=\"l00026\"></a><span class=\"lineno\">   26</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00027\"></a><span class=\"lineno\">   27</span>&#160;<span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00271\"></a><span class=\"lineno\">  271</span>&#160;<span class=\"comment\"></span><span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00272\"></a><span class=\"lineno\">  272</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00273\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./si_cpp/classXSI_1_1CICEGeometry.html\">  273</a></span>&#160;<span class=\"keyword\">class </span>SICPPSDKDECL <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CICEGeometry.html\">CICEGeometry</a></div>\n\
<div class=\"line\"><a name=\"l00274\"></a><span class=\"lineno\">  274</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00275\"></a><span class=\"lineno\">  275</span>&#160;    <span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"><a name=\"l00276\"></a><span class=\"lineno\">  276</span>&#160;    <span class=\"keyword\">friend</span> <span class=\"keyword\">class </span><a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1ICENodeContext.html\">ICENodeContext</a>;</div>\n\
<div class=\"line\"><a name=\"l00277\"></a><span class=\"lineno\">  277</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00280\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./si_cpp/classXSI_1_1CICEGeometry.html#a1d1cfd8ffb84e947f82999c682b666a7\">  280</a></span>&#160;    <span class=\"keyword\">enum</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CICEGeometry.html#a1d1cfd8ffb84e947f82999c682b666a7\">Type</a></div>\n\
<div class=\"line\"><a name=\"l00281\"></a><span class=\"lineno\">  281</span>&#160;    {</div>\n\
<div class=\"line\"><a name=\"l00282\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./si_cpp/classXSI_1_1CICEGeometry.html#a1d1cfd8ffb84e947f82999c682b666a7a503c885e8c07d491843923e6295252b5\">  282</a></span>&#160;        siNoneType          =0, </div>\n\
<div class=\"line\"><a name=\"l00283\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./si_cpp/classXSI_1_1CICEGeometry.html#a1d1cfd8ffb84e947f82999c682b666a7a24b0984b47f8d96bc3874357c001321d\">  283</a></span>&#160;        <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#a0420e9febd8f85c2932c76c3fafb126e\">siGroupType</a>         =1, </div>\n\
<div class=\"line\"><a name=\"l00284\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./si_cpp/classXSI_1_1CICEGeometry.html#a1d1cfd8ffb84e947f82999c682b666a7a17989a42a25a20706d1f46c7473a68eb\">  284</a></span>&#160;        siMeshSurfaceType   =2, </div>\n\
<div class=\"line\"><a name=\"l00285\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./si_cpp/classXSI_1_1CICEGeometry.html#a1d1cfd8ffb84e947f82999c682b666a7a1a55b1710dffaec6e982fa6b9dd5d6e6\">  285</a></span>&#160;        siNurbsSurfaceType  =3, </div>\n\
<div class=\"line\"><a name=\"l00286\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./si_cpp/classXSI_1_1CICEGeometry.html#a1d1cfd8ffb84e947f82999c682b666a7a5d4d6d710d8c05c4ac2f89c690ad4207\">  286</a></span>&#160;        siNurbsCurveType    =4, </div>\n\
<div class=\"line\"><a name=\"l00287\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./si_cpp/classXSI_1_1CICEGeometry.html#a1d1cfd8ffb84e947f82999c682b666a7a732a272e8d93b3d9934f506ec7be4e42\">  287</a></span>&#160;        siPointCloudType    =5  </div>\n\
<div class=\"line\"><a name=\"l00288\"></a><span class=\"lineno\">  288</span>&#160;    };</div>\n\
<div class=\"line\"><a name=\"l00289\"></a><span class=\"lineno\">  289</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00292\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./si_cpp/classXSI_1_1CICEGeometry.html#a79be0489b44a77620de069631265f22f\">  292</a></span>&#160;    <span class=\"keyword\">enum</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CICEGeometry.html#a79be0489b44a77620de069631265f22f\">DirtyState</a></div>\n\
<div class=\"line\"><a name=\"l00293\"></a><span class=\"lineno\">  293</span>&#160;    {</div>\n\
<div class=\"line\"><a name=\"l00294\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./si_cpp/classXSI_1_1CICEGeometry.html#a79be0489b44a77620de069631265f22fa434376409d26c467320b1d046435c72a\">  294</a></span>&#160;        siGeometryTypeDirtyState    = 1&lt;&lt;0, </div>\n\
<div class=\"line\"><a name=\"l00296\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./si_cpp/classXSI_1_1CICEGeometry.html#a79be0489b44a77620de069631265f22fa9ee491e427205139588b4ea649b4a00b\">  296</a></span>&#160;        siTransformationDirtyState  = 1&lt;&lt;1, </div>\n\
<div class=\"line\"><a name=\"l00298\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./si_cpp/classXSI_1_1CICEGeometry.html#a79be0489b44a77620de069631265f22fafda97d4337b4872babc8c6a9463c9e9c\">  298</a></span>&#160;        siPointPositionDirtyState   = 1&lt;&lt;2, </div>\n\
<div class=\"line\"><a name=\"l00299\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./si_cpp/classXSI_1_1CICEGeometry.html#a79be0489b44a77620de069631265f22fa9be0106c9503b862ed14f4a71fa8b956\">  299</a></span>&#160;        siTopologyDirtyState        = 1&lt;&lt;3, </div>\n\
<div class=\"line\"><a name=\"l00302\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./si_cpp/classXSI_1_1CICEGeometry.html#a79be0489b44a77620de069631265f22fa4990f4431660053845f6189e5e019198\">  302</a></span>&#160;        siAnyDirtyState             = siGeometryTypeDirtyState|</div>\n\
<div class=\"line\"><a name=\"l00303\"></a><span class=\"lineno\">  303</span>&#160;                                      siTransformationDirtyState|</div>\n\
<div class=\"line\"><a name=\"l00304\"></a><span class=\"lineno\">  304</span>&#160;                                      siPointPositionDirtyState|</div>\n\
<div class=\"line\"><a name=\"l00305\"></a><span class=\"lineno\">  305</span>&#160;                                      siTopologyDirtyState </div>\n\
<div class=\"line\"><a name=\"l00306\"></a><span class=\"lineno\">  306</span>&#160;    };</div>\n\
<div class=\"line\"><a name=\"l00307\"></a><span class=\"lineno\">  307</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00313\"></a><span class=\"lineno\">  313</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CICEGeometry.html\">CICEGeometry</a>( <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1ICENodeContext.html\">ICENodeContext</a>&amp; in_ctxt, ULONG in_nInputPortID, ULONG in_nInstanceIndex=0 ) ;</div>\n\
<div class=\"line\"><a name=\"l00314\"></a><span class=\"lineno\">  314</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00317\"></a><span class=\"lineno\">  317</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CICEGeometry.html\">CICEGeometry</a>( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CICEGeometry.html\">CICEGeometry</a>&amp; in_geom );</div>\n\
<div class=\"line\"><a name=\"l00318\"></a><span class=\"lineno\">  318</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00321\"></a><span class=\"lineno\">  321</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CICEGeometry.html\">CICEGeometry</a>( );</div>\n\
<div class=\"line\"><a name=\"l00322\"></a><span class=\"lineno\">  322</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00325\"></a><span class=\"lineno\">  325</span>&#160;    ~<a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CICEGeometry.html\">CICEGeometry</a>();</div>\n\
<div class=\"line\"><a name=\"l00326\"></a><span class=\"lineno\">  326</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00338\"></a><span class=\"lineno\">  338</span>&#160;    <span class=\"keywordtype\">bool</span> IsValid() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00339\"></a><span class=\"lineno\">  339</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00343\"></a><span class=\"lineno\">  343</span>&#160;    Type GetGeometryType() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00344\"></a><span class=\"lineno\">  344</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00350\"></a><span class=\"lineno\">  350</span>&#160;    <span class=\"keywordtype\">bool</span> <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#af5ffad5b92da29b448799939bd42282c\">operator == </a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CICEGeometry.html\">CICEGeometry</a>&amp; in_geom) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00351\"></a><span class=\"lineno\">  351</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00357\"></a><span class=\"lineno\">  357</span>&#160;    <span class=\"keywordtype\">bool</span> <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#ad9d3fcb26eddd2e76772270276771406\">operator != </a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CICEGeometry.html\">CICEGeometry</a>&amp; in_geom) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00358\"></a><span class=\"lineno\">  358</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00364\"></a><span class=\"lineno\">  364</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CICEGeometry.html\">CICEGeometry</a>&amp; operator = (<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CICEGeometry.html\">CICEGeometry</a>&amp; in_geom) ;</div>\n\
<div class=\"line\"><a name=\"l00365\"></a><span class=\"lineno\">  365</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00369\"></a><span class=\"lineno\">  369</span>&#160;    ULONG GetSubGeometryCount() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00370\"></a><span class=\"lineno\">  370</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00375\"></a><span class=\"lineno\">  375</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CICEGeometry.html\">CICEGeometry</a> GetSubGeometry( ULONG in_index ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00376\"></a><span class=\"lineno\">  376</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00380\"></a><span class=\"lineno\">  380</span>&#160;    ULONG GetPointPositionCount() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00381\"></a><span class=\"lineno\">  381</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00419\"></a><span class=\"lineno\">  419</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> GetPointPositions( <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CDoubleArray.html\">CDoubleArray</a>&amp; out_points ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00420\"></a><span class=\"lineno\">  420</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00424\"></a><span class=\"lineno\">  424</span>&#160;    ULONG GetTriangleCount() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00425\"></a><span class=\"lineno\">  425</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00464\"></a><span class=\"lineno\">  464</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> GetTrianglePointIndices( <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CLongArray.html\">CLongArray</a>&amp; out_indices ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00465\"></a><span class=\"lineno\">  465</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00469\"></a><span class=\"lineno\">  469</span>&#160;    ULONG GetPolygonCount() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00470\"></a><span class=\"lineno\">  470</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00508\"></a><span class=\"lineno\">  508</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> GetPolygonIndices( <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CLongArray.html\">CLongArray</a>&amp; out_sizes, <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CLongArray.html\">CLongArray</a>&amp; out_indices ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00509\"></a><span class=\"lineno\">  509</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00514\"></a><span class=\"lineno\">  514</span>&#160;    ULONG GetSegmentCount() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00515\"></a><span class=\"lineno\">  515</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00553\"></a><span class=\"lineno\">  553</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> GetSegmentIndices( <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CLongArray.html\">CLongArray</a>&amp; out_indices ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00554\"></a><span class=\"lineno\">  554</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00563\"></a><span class=\"lineno\">  563</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> GetTransformation( <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CMatrix4f.html\">XSI::MATH::CMatrix4f</a>&amp; out_mat44 ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00564\"></a><span class=\"lineno\">  564</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00573\"></a><span class=\"lineno\">  573</span>&#160;    <span class=\"keywordtype\">bool</span> IsDirty( <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">short</span> in_flag=siAnyDirtyState ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00574\"></a><span class=\"lineno\">  574</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00579\"></a><span class=\"lineno\">  579</span>&#160;    <span class=\"keywordtype\">void</span> ClearState( );</div>\n\
<div class=\"line\"><a name=\"l00580\"></a><span class=\"lineno\">  580</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00581\"></a><span class=\"lineno\">  581</span>&#160;    <span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\"><a name=\"l00582\"></a><span class=\"lineno\">  582</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> Init( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1ICENodeContext.html\">ICENodeContext</a>&amp; in_ctxt, ULONG in_nInputPortID, ULONG in_nInstanceIndex );</div>\n\
<div class=\"line\"><a name=\"l00583\"></a><span class=\"lineno\">  583</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00584\"></a><span class=\"lineno\">  584</span>&#160;    Type    m_geomType;</div>\n\
<div class=\"line\"><a name=\"l00585\"></a><span class=\"lineno\">  585</span>&#160;    ULONG   m_nInputPortID;</div>\n\
<div class=\"line\"><a name=\"l00586\"></a><span class=\"lineno\">  586</span>&#160;    ULONG   m_nID;</div>\n\
<div class=\"line\"><a name=\"l00587\"></a><span class=\"lineno\">  587</span>&#160;    <span class=\"keywordtype\">void</span>*   m_pParent;</div>\n\
<div class=\"line\"><a name=\"l00588\"></a><span class=\"lineno\">  588</span>&#160;    <span class=\"keywordtype\">void</span>*   m_pGeom;</div>\n\
<div class=\"line\"><a name=\"l00589\"></a><span class=\"lineno\">  589</span>&#160;    <span class=\"keywordtype\">void</span>*   m_pCtxt;</div>\n\
<div class=\"line\"><a name=\"l00590\"></a><span class=\"lineno\">  590</span>&#160;};</div>\n\
<div class=\"line\"><a name=\"l00591\"></a><span class=\"lineno\">  591</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00592\"></a><span class=\"lineno\">  592</span>&#160;};</div>\n\
<div class=\"line\"><a name=\"l00593\"></a><span class=\"lineno\">  593</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00594\"></a><span class=\"lineno\">  594</span>&#160;<span class=\"preprocessor\">#endif // __XSIICEGEOMETRY_H__</span></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CDoubleArray_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CDoubleArray.html\">XSI::CDoubleArray</a></div><div class=\"ttdoc\">The CDoubleArray is an uni-dimensional array of doubles. </div><div class=\"ttdef\"><b>Definition:</b> xsi_doublearray.h:41</div></div>\n\
<div class=\"ttc\" id=\"namespaceXSI_html_af5ffad5b92da29b448799939bd42282c\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/namespaceXSI.html#af5ffad5b92da29b448799939bd42282c\">XSI::operator==</a></div><div class=\"ttdeci\">bool operator==(CStatus::Code lhs, const CStatus &amp;rhs)</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CICEGeometry_html_a79be0489b44a77620de069631265f22f\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CICEGeometry.html#a79be0489b44a77620de069631265f22f\">XSI::CICEGeometry::DirtyState</a></div><div class=\"ttdeci\">DirtyState</div><div class=\"ttdef\"><b>Definition:</b> xsi_icegeometry.h:292</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1MATH_1_1CMatrix4f_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CMatrix4f.html\">XSI::MATH::CMatrix4f</a></div><div class=\"ttdoc\">A class to represent a single precision floating point 4 by 4 matrix. This class is typically used fo...</div><div class=\"ttdef\"><b>Definition:</b> xsi_matrix4f.h:32</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CICEGeometry_html_a1d1cfd8ffb84e947f82999c682b666a7\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CICEGeometry.html#a1d1cfd8ffb84e947f82999c682b666a7\">XSI::CICEGeometry::Type</a></div><div class=\"ttdeci\">Type</div><div class=\"ttdef\"><b>Definition:</b> xsi_icegeometry.h:280</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CICEGeometry_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CICEGeometry.html\">XSI::CICEGeometry</a></div><div class=\"ttdoc\">Provides a read-only API for accessing the data of a geometry object connected to a custom ICE node...</div><div class=\"ttdef\"><b>Definition:</b> xsi_icegeometry.h:273</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1ICENodeContext_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1ICENodeContext.html\">XSI::ICENodeContext</a></div><div class=\"ttdoc\">ICENodeContext is used for accessing/handling custom node graph data. Instances of this object can pa...</div><div class=\"ttdef\"><b>Definition:</b> xsi_icenodecontext.h:42</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CStatus_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">XSI::CStatus</a></div><div class=\"ttdoc\">Encapsulates status data types for error handling purpose. The class also exposes methods to query an...</div><div class=\"ttdef\"><b>Definition:</b> xsi_status.h:36</div></div>\n\
<div class=\"ttc\" id=\"namespaceXSI_html_ad9d3fcb26eddd2e76772270276771406\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/namespaceXSI.html#ad9d3fcb26eddd2e76772270276771406\">XSI::operator!=</a></div><div class=\"ttdeci\">bool operator!=(CStatus::Code lhs, const CStatus &amp;rhs)</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CLongArray_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CLongArray.html\">XSI::CLongArray</a></div><div class=\"ttdoc\">The CLongArray is an uni-dimensional array of LONG values. </div><div class=\"ttdef\"><b>Definition:</b> xsi_longarray.h:45</div></div>\n\
<div class=\"ttc\" id=\"namespaceXSI_html_a0420e9febd8f85c2932c76c3fafb126e\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/namespaceXSI.html#a0420e9febd8f85c2932c76c3fafb126e\">XSI::siGroupType</a></div><div class=\"ttdeci\">const wchar_t * siGroupType</div></div>\n\
</div><!-- fragment --></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";