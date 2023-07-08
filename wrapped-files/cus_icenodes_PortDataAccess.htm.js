var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script>\n\
      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\n\
      <meta name=\"product\" content=\"SI\" />\n\
      <meta name=\"release\" content=\"2015\" />\n\
      <meta name=\"book\" content=\"Developer\" />\n\
      <meta name=\"created\" content=\"2014-03-13\" />\n\
      <meta name=\"topicid\" content=\"GUID-7A08E846-8E73-44EB-9B67-D1D10D7E7F40\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Port Data Access</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"CDataArray\", \"si_cpp/classXSI_1_1CDataArray.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"CVector3f\", \"si_cpp/classXSI_1_1MATH_1_1CVector3f.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"CDataArray2D\", \"si_cpp/classXSI_1_1CDataArray2D.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"CRotationf\", \"si_cpp/classXSI_1_1MATH_1_1CRotationf.html\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-7A08E846-8E73-44EB-9B67-D1D10D7E7F40\"></a></span><div class=\"head\">\n\
            <h1>Port Data Access</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-2334A993-EAF2-414D-B2DD-189C765E5CC4\"></a></span>To access the input port data from the <a href=\"#!/url=./si_cmds/cb_ICENode_Evaluate.html\">Evaluate</a> function, the SDK provides a set of classes that match the type of input and output\n\
               ports defined during the <a href=\"#!/url=./si_cpp/classXSI_1_1ICENode.html\">ICENode</a> registration.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-DA1303C4-40D0-4253-BC73-AF2852C42F07\"></a></span>The following classes are provided for accessing complex data types:\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-8DD3E5FE-F233-41DA-9DC8-89042691C03C\"></a></span> XSI::MATH::CVector2f -&gt; <a href=\"#!/url=./si_om/siICENodeDataType.html\">siICENodeDataVector2</a></p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-FED77C1C-FBB0-4B48-B1FA-C8AD619E02DD\"></a></span> XSI::MATH::CVector3f -&gt; <a href=\"#!/url=./si_om/siICENodeDataType.html\">siICENodeDataVector3</a></p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-A8237B9F-E3C2-43A5-8A33-DD8E365032D1\"></a></span> XSI::MATH::CVector4f -&gt; <a href=\"#!/url=./si_om/siICENodeDataType.html\">siICENodeDataVector4</a></p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-E145355A-5B97-44E3-8C4F-456477CA58CE\"></a></span> XSI::MATH::CQuaternionf -&gt; <a href=\"#!/url=./si_om/siICENodeDataType.html\">siICENodeDataQuaternion</a></p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-B981EB39-662E-48E3-B7C7-5EDD4D2BF665\"></a></span> XSI::MATH::CMatrix3f -&gt; <a href=\"#!/url=./si_om/siICENodeDataType.html\">siICENodeDataMatrix33</a></p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-4EB8C0E1-3133-46C0-956C-421680B73021\"></a></span> XSI::MATH::CMatrix4f -&gt; <a href=\"#!/url=./si_om/siICENodeDataType.html\">siICENodeDataMatrix44</a></p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-EE25BF13-FFE1-45F8-8C1F-25BA18B9BD02\"></a></span> XSI::MATH::CColor4f -&gt; <a href=\"#!/url=./si_om/siICENodeDataType.html\">siICENodeDataColor4</a></p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-EE1D16CB-7DE3-49EB-BADE-CE6393B5A659\"></a></span> XSI::MATH::CRotationf -&gt; <a href=\"#!/url=./si_om/siICENodeDataType.html\">siICENodeDataRotation</a></p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-857341A2-A9C2-4DA3-8DCA-171C503D366C\"></a></span> XSI::MATH::CShape -&gt; <a href=\"#!/url=./si_om/siICENodeDataType.html\">siICENodeDataShape</a></p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-CE289BD6-6255-4328-B443-7229437351A4\"></a></span> <a href=\"#!/url=./si_cpp/classXSI_1_1CICEGeometry.html\">CICEGeometry</a> -&gt; <a href=\"#!/url=./si_om/siICENodeDataType.html\">siICENodeDataGeometry</a></p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-BDE73EA8-A0A2-4F1C-BAAD-0C6822EFD0D7\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-88E130DD-46E6-494D-9F20-3735C5E29F8D\"></a></span>CICEGeometry can be accessed from the <a href=\"#!/url=./si_cmds/cb_ICENode_BeginEvaluate.html\">BeginEvaluate</a> callback but can also be used in all custom evaluation callbacks. However, it cannot\n\
                     be used from the <a href=\"#!/url=./si_cmds/cb_ICENode_Evaluate.html\">Evaluate</a> callback in multi-thread mode with a non-singleton context. Calls to CICEGeometry\n\
                     methods just return default values in this context.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-C59DDC4D-65C0-450D-B9F3-F1AE5B129A2F\"></a></span>The input data buffers sent to custom <a href=\"#!/url=./si_cpp/classXSI_1_1ICENode.html\">ICENodes</a> are either stored in a 1D- or 2D-array depending of the port structure type set during\n\
               the ICENode registration. The <a href=\"#!/url=./si_cpp/classXSI_1_1CDataArray.html\">CDataArray</a> and <a href=\"#!/url=./si_cpp/classXSI_1_1CDataArray2D.html\">CDataArray2D</a> template classes can be combined with one of the above classes for handling theses\n\
               arrays. For instance, if a port type is defined as <span class=\"code\" translate=\"no\">siICENodeDataVector3 + siICENodePortStructureSingle then <a href=\"javascript:void(0)\" data=\"CDataArray\" class=\"a_multireflink\">CDataArray</a>&lt;<a href=\"javascript:void(0)\" data=\"CVector3f\" class=\"a_multireflink\">CVector3f</a>&gt;</span> must be used to access the data. If a port is defined as <span class=\"code\" translate=\"no\">siICENodeDataRotation + siICENodePortStructureArray</span>, then <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"CDataArray2D\" class=\"a_multireflink\">CDataArray2D</a>&lt;<a href=\"javascript:void(0)\" data=\"CRotationf\" class=\"a_multireflink\">CRotationf</a>&gt;</span> must be used, etc. For simple port data types such as float and bool, simply use\n\
               the type as the template parameter (for example, <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"CDataArray\" class=\"a_multireflink\">CDataArray</a>&lt; float &gt;</span> or <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"CDataArray2D\" class=\"a_multireflink\">CDataArray2D</a>&lt; bool &gt;</span>). The input data is considered read-only and cannot be changed, nor can items be\n\
               removed with these template classes.\n\
            </p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-DDEE5834-6413-4D40-B32E-5D5214B25DBA\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-AC219D5C-613E-4256-AFF1-1A637E2A6252\"></a></span>Using the wrong template class to access a given port data will result in unexpected\n\
                     behavior.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-60231D84-8528-4094-8342-C521374CF0B5\"></a></span>For convenience, a number of array types have been defined for each port data type\n\
               (CDataArrayLong, CDataArrayBool, CDataArrayShape, CDataArray2DVector2f etc.)\n\
            </p>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";