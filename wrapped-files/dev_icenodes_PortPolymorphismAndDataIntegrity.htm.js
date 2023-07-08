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
      <meta name=\"topicid\" content=\"GUID-17645B37-0FF9-46E2-8EAC-B61D0B4D7713\" />\n\
      <meta name=\"indexterm\" content=\"polymorphism: about\" />\n\
      <meta name=\"indexterm\" content=\"constraint maps: about\" />\n\
      <meta name=\"indexterm\" content=\"ICE nodes: polymorphism: about\" />\n\
      <meta name=\"indexterm\" content=\"ICE nodes: constraint maps: about\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Port Polymorphism and Data Integrity</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-17645B37-0FF9-46E2-8EAC-B61D0B4D7713\"></a></span><div class=\"head\">\n\
            <h1>Port Polymorphism and Data Integrity</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-0A372DC5-A482-4FF9-B306-CDAE026D3D69\"></a></span>The data that connects to or passes through an <a href=\"#!/url=./si_om/ICENodePort.html\">ICENodePort</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1ICENodePort.html\">ICENodePort</a> can be described in three different ways:\n\
            </p>\n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-32A618A4-D9F0-438B-A4FD-A4499E8E7A0E\"></a></span> <em class=\"strong\">Data Type</em> \n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-30232656-D5C9-4A4C-970A-58593A20D2F4\"></a></span>This is the usual concept of data type in most programming languages: boolean, integer\n\
                     and floating point numbers, more complex structures like vector, matrices, colors,\n\
                     etc. The <a href=\"#!/url=./si_om/siICENodeDataType.html\">siICENodeDataType</a> enum basically encapsulates the possible values and combinations possible. See also\n\
                     <a href=\"#!/url=./si_om/ICENodePort.DataType.html\">ICENodePort.DataType</a> or ICENodePort::GetDataType and <a href=\"#!/url=./si_om/ICEAttribute.DataType.html\">ICEAttribute.DataType</a> or ICEAttribute::GetDataType.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-7165CFD5-EAB9-4EEA-A977-E057AC322B0D\"></a></span> <em class=\"strong\">Structure</em> \n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-7FCB33FE-F0B3-4AF9-B4C9-075E42F61EAE\"></a></span>This defines whether the data is structured as a scalar (single value) or as an array\n\
                     of values. The possible values are available in the <a href=\"#!/url=./si_om/siICENodeStructureType.html\">siICENodeStructureType</a> enum. See also <a href=\"#!/url=./si_om/ICENodePort.StructureType.html\">ICENodePort.StructureType</a> or ICENodePort::GetStructureType and <a href=\"#!/url=./si_om/ICEAttribute.StructureType.html\">ICEAttribute.StructureType</a> or ICEAttribute::GetStructureType.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-20C62DCB-98F5-4FC7-858C-8F8B8CB5542B\"></a></span> <em class=\"strong\">Context</em> \n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-134B9ECE-F797-4613-A9E4-6AE5CE309165\"></a></span>This describes the type of data being pushed/pulled (the element set associated with\n\
                     the data set). This can be vertices, polygons, or newly created particles. The possible\n\
                     values are available in the <a href=\"#!/url=./si_om/siICENodeContextType.html\">siICENodeContextType</a> enum. See also <a href=\"#!/url=./si_om/ICENodePort.ContextType.html\">ICENodePort.ContextType</a> or ICENodePort::GetContextType and <a href=\"#!/url=./si_om/ICEAttribute.ContextType.html\">ICEAttribute.ContextType</a> or ICEAttribute::GetContextType.\n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-F10C8EED-91D6-4951-8CCD-FE6A4666C835\"></a></span>Some <a href=\"#!/url=./si_om/ICENodePort.html\">ICENodePort</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1ICENodePort.html\">ICENodePort</a>s support polymorphism, which basically means that the data passing through does not\n\
               need to match some preset criteria on type, structure and context. For example, the\n\
               CompareNode takes any boolean, integer, float, vector, matrix, rotation, or quaternion\n\
               in its two input ports; however, these types must match each other. In other words,\n\
               you want to avoid comparing apples and oranges.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-11459BF4-824D-4366-B450-FE4142BCED0F\"></a></span>The way that the integrity of the port data is enforced is to create a kind of a constraint,\n\
               or limitation on the type, structure, and context of port data when needed. These\n\
               are noted in the reference documentation under the <em class=\"strong\">Restrictions</em> section. So following the previous CompareNode example, this section notes that the\n\
               types must match for the data connected in the first port and the second port (but\n\
               since the result port will always be boolean, it has no restriction). In addition,\n\
               all input and output nodes are constrained to the same structure and context.\n\
            </p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-16328797-C503-452C-8767-1FE7DA98FF1D\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-FC9C26B4-E360-4A7D-92E0-62813672082E\"></a></span>Understanding how to constrain port data because very important when it comes to creating\n\
                     your own custom nodes. For more information, see <a href=\"#!/url=./files/cus_icenodes-1.htm\">Handling Port Polymorphism</a>.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";