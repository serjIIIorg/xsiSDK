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
      <meta name=\"topicid\" content=\"GUID-E15D1709-524F-4D73-BA84-4E4B522AB4CE\" />\n\
      <meta name=\"indexterm\" content=\"What Does the Type Property Test For?\" />\n\
      <meta name=\"indexterm\" content=\"Example: using the Type property\" />\n\
      <meta name=\"indexterm\" content=\"What Does the ClassName Method Test For?\" />\n\
      <meta name=\"indexterm\" content=\"Example: calling the ClassName method using JScript\" />\n\
      <meta name=\"indexterm\" content=\"Example: testing both Type and ClassName on a sphere\" />\n\
      <meta name=\"indexterm\" content=\"Other Tests: BelongsTo, Owners, Parent, and Parent3DObject\" />\n\
      <meta name=\"indexterm\" content=\"What are Families?\" />\n\
      <meta name=\"indexterm\" content=\"Example: finding the family of an action source\" />\n\
      <meta name=\"indexterm\" content=\"To find out the family information for the currently-selected object\" />\n\
      <meta name=\"indexterm\" content=\"What Are Parents And Owners?\" />\n\
      <meta name=\"indexterm\" content=\"To find the owner of the currently-selected object\" />\n\
      <meta name=\"indexterm\" content=\"To find the parent of the currently-selected object\" />\n\
      <meta name=\"indexterm\" content=\"To find the parent information of the currently-selected subcomponent\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Checking Return Values for Type</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"OGLLight\", \"si_cpp/classXSI_1_1OGLLight.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"Pass\", \"si_cpp/classXSI_1_1Pass.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"Group\", \"si_cpp/classXSI_1_1Group.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"X3DObject\", \"si_cpp/classXSI_1_1X3DObject.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"Primitive\", \"si_cpp/classXSI_1_1Primitive.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"SubComponent\", \"si_cpp/classXSI_1_1SubComponent.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"Operator\", \"si_cpp/classXSI_1_1Operator.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"FCurve\", \"si_cpp/classXSI_1_1FCurve.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"Kinematics\", \"si_cpp/classXSI_1_1Kinematics.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"KinematicState\", \"si_cpp/classXSI_1_1KinematicState.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"Material\", \"si_cpp/classXSI_1_1Material.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"Property\", \"si_cpp/classXSI_1_1Property.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"Parameter\", \"si_cpp/classXSI_1_1Parameter.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"Constraint\", \"si_cpp/classXSI_1_1Constraint.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"EventInfo\", \"si_cpp/classXSI_1_1EventInfo.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"type\", \"si_cpp/group__RenderMapDefine.html#ga7117e14e60390664f1862525dd6acaf6\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"name\", \"si_cpp/group__RenderMapDefine.html#ga882c17490314f92c7159d6d7d69696e7\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-E15D1709-524F-4D73-BA84-4E4B522AB4CE\"></a></span><div class=\"head\">\n\
            <h1>Checking Return Values for Type</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-8A9C5F81-5FC3-4D00-8243-E9B90DB9F76D\"></a></span>Checking to see what type of object you are working with can be very tricky, because\n\
               there\'s a lot of \"type\" information to find in Autodesk Softimage SDK. For example,\n\
               there\'s the <a href=\"#!/url=./si_om/Application.ClassName.html\">ClassName (Application)</a> property that every Softimage object implements, which differs from the <a href=\"#!/url=./si_om/Application.ClassName.html\">ClassName (Application)</a> method, which identifies which interface or class the item belongs to. \n\
            </p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-B887BB45-2FA8-44A8-8E28-70003820A9FA\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-37DC520C-9644-493E-BBCD-BD9B156F83F5\"></a></span>The <em class=\"strong\">Application.ClassName</em> method is similar to the VBScript <em class=\"strong\">TypeName</em> function which returns the subtype, or what kind of scene item it is (such as X3DObject).\n\
                     The Application.ClassName method allows non-VBScript programmers to test for the interface\n\
                     name. \n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-A3A600D9-B884-40A1-ADBF-339EE569C105\"></a></span>However, the behavior of the Application.ClassName method differs from the VBScript\n\
                     TypeName function in that TypeName can test for standard data type (string, boolean,\n\
                     integer, etc.) as well as class name but Application.ClassName cannot. For example,\n\
                     in JScript you would have to test with the <em class=\"strong\">typeof</em> operator to figure out the data type of a return value. \n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-0016F78B-77CA-451C-B575-529A9788E06B\"></a></span>The table below provides an overview of several Softimage objects and what they return\n\
               depending on whether you are working with the Type property or the ClassName method:\n\
               \n\
            </p><span class=\"anchor_wrapper\"><a name=\"TABLE_3230F6DEF1D94A59AF817FA002851F09\"></a></span><div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col />\n\
                     <col />\n\
                     <col />\n\
                     <col />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-90C9DC4E-3B1C-497D-AE49-13FC7E74C929\"></a></span><p class=\"table-heading\">Item to Test </p> \n\
                     </th>\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9F4317CF-8EB7-48A3-A7E0-E28EF312DA4A\"></a></span><p class=\"table-heading\">What the Type Property Returns </p> \n\
                     </th>\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F5672C21-D197-4C26-98E6-290470A26A36\"></a></span><p class=\"table-heading\">What LogMessage Shows for Object.Type </p> \n\
                     </th>\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7EA04B67-78A2-4378-BF3E-9A1AB342E4DB\"></a></span><p class=\"table-heading\">What LogMessage Shows for ClassName(Object) </p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-34193C1B-2B50-4FD1-91EF-040DDD83D90E\"></a></span><p class=\"table-body\">XSICollection </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5FF40373-7670-4C15-BFED-DEFB079638F6\"></a></span><p class=\"table-body\">Softimage collection type. </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-69AC7C05-492E-4251-9364-E8408D71BBD0\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"XSICollection\"</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BE4451FB-3908-4F1D-B873-B578B13A519C\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"Object\"</span> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FF9DEDE3-421D-4AFD-B16E-075EF55E0880\"></a></span><p class=\"table-body\">CollectionItem </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1F536C65-A965-4A0F-AE90-13469374000D\"></a></span><p class=\"table-body\">Object type as a string. This could describe the kind of geometry, or indicate that\n\
                           it is a pass or a light or a camera, depending on what the CollectionItem is. \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-53ABBC3E-6B4B-447E-90D7-E81965177EAB\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"camera\"</span>, <span class=\"code\" translate=\"no\">\"polymsh\"</span>, <span class=\"code\" translate=\"no\">etc</span>. \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B3E21B6B-259C-469D-9DCA-7E3A241F2085\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"CollectionItem\"</span> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5005371D-985F-40E3-81EA-BE645F4CBF13\"></a></span><p class=\"table-body\">Camera Rigs (Camera_Root, Telephoto_Root, etc.) </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-139D6C6D-D89A-4D68-921F-C8476B6BFF0E\"></a></span><p class=\"table-body\">Primitive type (for camera rigs, there\'s only one type). </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2A6B19F8-9A67-4397-B4A7-DCB2B669CBB0\"></a></span><p class=\"table-body\">\"CameraRoot\" </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0E4CBCD0-D495-4DD2-8B14-4AF2C105E160\"></a></span><p class=\"table-body\">\"CameraRig\" </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-23D8DC60-DD72-4CF0-9C6A-30B9D6362A04\"></a></span><p class=\"table-body\">Cameras (Camera, Telephoto, etc.) </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-62497631-897D-4D61-B49C-E5EA0C0508D0\"></a></span><p class=\"table-body\">Primitive type (for cameras, there\'s only one type). </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E1459470-E65C-43C3-A541-9CD9ED7D60C1\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"camera\"</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4D25D64E-E9EA-49F7-BFBE-6272FF4447ED\"></a></span><p class=\"table-body\">\"Camera\" </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B4CBB01A-BBA3-4AF0-A671-863CB23B6009\"></a></span><p class=\"table-body\">Light Rigs (Light_Box_Root, Spot_Root, etc.) </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A16F3630-DEFA-450E-A492-9ED5F6289AA0\"></a></span><p class=\"table-body\">Primitive type. (for light rigs, there\'s only one type). </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-439A5821-A9C3-4615-A499-6EE43AF8ECDC\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"SpotRoot\"</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-59A4CA61-B33B-4C33-9F06-3019D84B49A0\"></a></span><p class=\"table-body\">\"LightRig\" </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F98B07DA-FE6C-40DC-AE92-65876EC18BF8\"></a></span><p class=\"table-body\">Lights (Light_Box, Spot, etc.) </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-778BD103-5B8A-42B8-AF43-89E7BF6F5F2A\"></a></span><p class=\"table-body\">Primitive type (for lights, there\'s only one type). </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2799401E-29CF-4726-BBC8-8D830BD56280\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"light\"</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5100AE4D-F63E-4CE1-999E-B157684CA82F\"></a></span><p class=\"table-body\">\"Light\" </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-33DFA3A4-0C97-47C5-9579-8C57C1C4BD29\"></a></span><p class=\"table-body\">OGLLight </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F7D5C54E-3783-43D9-9321-C489A004519D\"></a></span><p class=\"table-body\">Light type as an siLightType constant value: </p> <span class=\"anchor_wrapper\"><a name=\"UL_702707584E9140D495EB095F51AD4B56\"></a></span><ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-2EA01031-C229-4927-B41B-B689EB9375B5\"></a></span>0 for siLightPoint \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-6BB80768-FE8A-4EAE-B032-00BACA990B12\"></a></span>1 for siLightInfinite \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-FDA5E510-C438-4E17-AB21-226F63EBE22A\"></a></span>2 for siLightSpot \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-77061C6F-3D1E-4C27-AC99-DEFB10FD503A\"></a></span>3 for siLightSun \n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9DF833F8-4067-471A-9773-0FAC79424767\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"0\"</span>, <span class=\"code\" translate=\"no\">\"1\"</span>, <span class=\"code\" translate=\"no\">\"2\"</span>, <span class=\"code\" translate=\"no\">etc</span>. \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-69D9301C-BCD5-4E93-9B0B-2DC3BC48E61D\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"<a href=\"javascript:void(0)\" data=\"OGLLight\" class=\"a_multireflink\">OGLLight</a>\"</span> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3FD62A79-F74E-4762-B927-5BB58D84103B\"></a></span><p class=\"table-body\">Passes (Default_Pass, etc.) </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-07EA4C8B-B032-40B3-BF26-1BCF20C09407\"></a></span><p class=\"table-body\">Object type (for passes, there\'s only one type). </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-41E98EF4-A648-4CF7-9346-500637BE02FE\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"#<a href=\"javascript:void(0)\" data=\"Pass\" class=\"a_multireflink\">Pass</a>\"</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-14181940-4F7A-4E1A-9CFA-680B2D06F5E1\"></a></span><p class=\"table-body\">\"Pass\" </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F95DC9D2-751B-4EBB-8976-BECD6A02BFC7\"></a></span><p class=\"table-body\">Layers (Default_Layer, etc.) </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-786C84C6-ABF9-43E0-9313-760C34D3515F\"></a></span><p class=\"table-body\">Object type (for layers, there\'s only one type). </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-42A7E0AD-D85F-43F6-B39B-C61CE0DE23B4\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"#<a href=\"javascript:void(0)\" data=\"Group\" class=\"a_multireflink\">Group</a>\"</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9AC7DD7C-C650-48EF-A832-1827660C60F9\"></a></span><p class=\"table-body\">\"Layer\" </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-97375066-A683-4082-858B-DE9E6BAACFFB\"></a></span><p class=\"table-body\">Nulls </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C612FAE5-27D1-4852-AB40-BF3640A1E3D6\"></a></span><p class=\"table-body\">Primitive type. </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0F2FBF31-90AF-44A2-A62F-EE2CAC34C965\"></a></span><p class=\"table-body\">\"null\" </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AC774CEB-5FE1-4399-A79E-DFC1F8CDD06D\"></a></span><p class=\"table-body\">\"Null\" </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FE532E17-922A-4982-82D3-3DFE6E3F3E6C\"></a></span><p class=\"table-body\">Mesh surface objects (cone, cube, cylinder, disc, grid, sphere, torus, *hedron, soccer\n\
                           ball) \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F4B8DB02-734C-4553-90CB-32724AF4426B\"></a></span><p class=\"table-body\">Geometry type. </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-90153611-843B-41E3-BCE0-77F669E2040D\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"polymsh\"</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A4A3F8F4-F160-43A4-8114-DE058D76362A\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"<a href=\"javascript:void(0)\" data=\"X3DObject\" class=\"a_multireflink\">X3DObject</a>\"</span> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A584CB99-382C-463D-B21E-8DB1D8BA7BC2\"></a></span><p class=\"table-body\">Implicits (arc, circle, spiral, square, cone, cube, cylinder, disc, grid, sphere,\n\
                           torus) \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3B617736-5BFB-4705-AACD-65BE5C42A531\"></a></span><p class=\"table-body\">Implicit type. </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0331E965-7731-4C8B-BBED-16573BCA19F1\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"arc\"</span>, <span class=\"code\" translate=\"no\">\"circle\"</span>, <span class=\"code\" translate=\"no\">\"cone\"</span>, <span class=\"code\" translate=\"no\">etc</span>. \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D3ED19EB-4AD0-4627-B469-CD50DD4E3FAC\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"<a href=\"javascript:void(0)\" data=\"X3DObject\" class=\"a_multireflink\">X3DObject</a>\"</span> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F20E362B-88E5-4B4F-9673-42C8C002F61F\"></a></span><p class=\"table-body\">Nurbs surface objects (cone, cube, cylinder, disc, grid, sphere, torus) </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-375971CE-8F6D-49D0-BBE4-AE1793C875FC\"></a></span><p class=\"table-body\">Geometry type. </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6A8F75DF-5F44-4462-BFD0-10D85570DE90\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"surfmsh\"</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-71C8015C-4CE1-48E3-8301-96C6853EE43E\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"<a href=\"javascript:void(0)\" data=\"X3DObject\" class=\"a_multireflink\">X3DObject</a>\"</span> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F5245F69-50E2-4C36-9D26-0AD7420E7D07\"></a></span><p class=\"table-body\">CurveList (arc, circle, spiral, square) </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-73BF2AC2-0FD5-44ED-BB7F-7BA3D6606E89\"></a></span><p class=\"table-body\">Geometry type. </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BF7F8B8C-ABCE-4C49-8A74-825044FDA796\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"crvlist\"</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-78F6FC05-D0CB-4849-B9AA-F3B42E941527\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"<a href=\"javascript:void(0)\" data=\"X3DObject\" class=\"a_multireflink\">X3DObject</a>\"</span> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F2CF9BC7-60CA-4B46-A141-B5BA428F997E\"></a></span><p class=\"table-body\">Primitive </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-66F33360-ECF5-4A8E-9514-91084BB97F47\"></a></span><p class=\"table-body\">Geometry type. </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-85914905-42BD-4E92-83A7-91B905BE5AEA\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"polymsh\"</span>, <span class=\"code\" translate=\"no\">\"surfmsh\"</span>, <span class=\"code\" translate=\"no\">\"crvlist\"</span>, <span class=\"code\" translate=\"no\">etc</span>. \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-856392F4-BE3F-49FA-AD70-64390D29B819\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"<a href=\"javascript:void(0)\" data=\"Primitive\" class=\"a_multireflink\">Primitive</a>\"</span> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6AB0EFD5-91F4-46C0-9A0B-FE7D2FC1A348\"></a></span><p class=\"table-body\">SubComponent </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-53FEA906-71B6-40EA-A666-AAACFA1B3D57\"></a></span><p class=\"table-body\">Subcomponent\'s Cluster type as a string. Format is: cluster_type + \"SubComponent\"\n\
                           \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-07E37B33-F8AC-4C7E-BAB1-874A82D08D68\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"pntSubComponent\"</span>, <span class=\"code\" translate=\"no\">\"edgeSubComponent\"</span>, <span class=\"code\" translate=\"no\">\"polySubComponent\"</span>, <span class=\"code\" translate=\"no\">etc</span>. \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B46713C6-B17B-4395-9E3F-540736D3202E\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"<a href=\"javascript:void(0)\" data=\"SubComponent\" class=\"a_multireflink\">SubComponent</a>\"</span> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C31BC201-CC12-4DF7-96A6-05945432BEA5\"></a></span><p class=\"table-body\">Operator </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0793D968-B147-403F-A0B4-5A54031B2C54\"></a></span><p class=\"table-body\">Operator type. </p> \n\
                        <div><span class=\"anchor_wrapper\"><a name=\"GUID-1C30E64E-3FDA-4C6E-8209-01F11BA2F418\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-8D0DEA87-7DD3-40C0-8FF2-A9E34EA73C10\"></a></span>See <a href=\"#!/url=./si_cmds/OpPreset.html\">Operator Presets</a> for a list of available operators. \n\
                              </p> \n\
                           </div>\n\
                        </div> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-07A97F78-F5CA-40FB-9D71-4C33171BB85F\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"twistop\"</span>, <span class=\"code\" translate=\"no\">\"geom\"</span>, <span class=\"code\" translate=\"no\">etc</span>. \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D76B1FF3-6B59-48E1-B732-228EDEA93189\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"<a href=\"javascript:void(0)\" data=\"Operator\" class=\"a_multireflink\">Operator</a>\"</span> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EF503386-ADC4-49AD-9D20-9DC0D9F26E74\"></a></span><p class=\"table-body\">FCurve </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C5713956-9B5C-4AFB-BD9A-BB3D5E970439\"></a></span><p class=\"table-body\">FCurve type as an siFCurveType constant: </p> <span class=\"anchor_wrapper\"><a name=\"UL_FCB87321D260400EBF9B95E0FC2F4F54\"></a></span><ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-8F5C35AA-D504-416E-9207-93D097924FDE\"></a></span>0 for siUnknownFCurve \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-9909B69D-FDA7-4DCA-B7D3-04119D474014\"></a></span>0 for siDefaultFCurve \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-C7F3B72E-1090-465C-85D0-E58687AA10AA\"></a></span>10 for siBooleanFCurve \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-AF5FCED9-BD2E-4295-B3EF-B08B4BA3786F\"></a></span>15 for siIntegerFCurve \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-C20630DA-7756-4175-8D83-E74CABB0B57B\"></a></span>20 for siStandardFCurve \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-5DE3F1F1-4BE0-4EF9-91B5-8A5865100574\"></a></span>30 for siRawDataFCurve \n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AA4ACA7A-92F5-4661-889E-6F9F8D06300E\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"0\"</span>, <span class=\"code\" translate=\"no\">\"10\"</span>, <span class=\"code\" translate=\"no\">\"20\"</span>, <span class=\"code\" translate=\"no\">etc</span>. \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-ED0B9A01-9DFD-4DC6-9D90-1D735A5B52CA\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"<a href=\"javascript:void(0)\" data=\"FCurve\" class=\"a_multireflink\">FCurve</a>\"</span> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-55C4573E-1840-4660-BE19-40299977C62B\"></a></span><p class=\"table-body\">Geometry0D Geometry1D Geometry2D </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-CFB22272-62DD-4530-A8F7-23B182BE79D6\"></a></span><p class=\"table-body\">Subcomponent\'s Cluster type as a string. </p> \n\
                        <div><span class=\"anchor_wrapper\"><a name=\"GUID-2994300D-1DCD-45AD-B25C-693221ACFC6A\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-6D8887C3-6BA4-4BE5-A8BB-58D8C26E0EAD\"></a></span>These objects and their components are obsolete. \n\
                              </p> \n\
                           </div>\n\
                        </div> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C4658750-2581-427A-810A-7F36490E6D3A\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"pntSubComponent\"</span>, <span class=\"code\" translate=\"no\">\"edgeSubComponent\"</span>, <span class=\"code\" translate=\"no\">\"polySubComponent\"</span>, <span class=\"code\" translate=\"no\">etc</span>. \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BC8DE814-94DD-46BE-A3A2-AEE0C1226351\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"Geometry0D\"</span>, <span class=\"code\" translate=\"no\">\"Geometry1D\"</span>, <span class=\"code\" translate=\"no\">\"Geometry2D\"</span>, <span class=\"code\" translate=\"no\">etc</span>. \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-25549F2D-5CC4-4B26-A7A9-DCB13B04573C\"></a></span><p class=\"table-body\">Kinematics, Global / Local Transform, Scene_Material (specific parameter sets) </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-97B55900-D71A-4427-B3E7-FEC93BB097AB\"></a></span><p class=\"table-body\">Parameter (property) set type. </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2BCE100E-BAF4-4466-8027-A6E0E78B2AB8\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"kine\"</span>, <span class=\"code\" translate=\"no\">\"CompoundParameter\"</span>, <span class=\"code\" translate=\"no\">\"material\"</span>, <span class=\"code\" translate=\"no\">etc</span>. \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-42046429-6A9F-48E0-B378-E9B399FD59FD\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"<a href=\"javascript:void(0)\" data=\"Kinematics\" class=\"a_multireflink\">Kinematics</a>\"</span>, <span class=\"code\" translate=\"no\">\"<a href=\"javascript:void(0)\" data=\"KinematicState\" class=\"a_multireflink\">KinematicState</a>\"</span>, <span class=\"code\" translate=\"no\">\"<a href=\"javascript:void(0)\" data=\"Material\" class=\"a_multireflink\">Material</a>\"</span>, <span class=\"code\" translate=\"no\">etc</span>. \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-21F3B92E-AAC1-4FF1-83B8-751136DA0861\"></a></span><p class=\"table-body\">Scene Colors, Ambient Lighting, Display, Geometry Approximation (general parameter\n\
                           sets) \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-03CA079E-CBAD-4C4D-8C2E-FEDE8B323BD2\"></a></span><p class=\"table-body\">Parameter (property) set type. </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8A58F09D-1EC4-409C-8AB9-F3B67F3A6C6F\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"Scenecolors\"</span>, <span class=\"code\" translate=\"no\">\"AmbientLighting\"</span>, <span class=\"code\" translate=\"no\">\"display\"</span>, <span class=\"code\" translate=\"no\">\"geomapprox\"</span>, <span class=\"code\" translate=\"no\">etc</span>. \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-CCDB775B-0859-44A2-B09C-1D4CE67A112B\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"<a href=\"javascript:void(0)\" data=\"Property\" class=\"a_multireflink\">Property</a>\"</span> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7B5F9DBE-D8A6-4717-AD22-C49F6E1CABAB\"></a></span><p class=\"table-body\">Parameters (PosX, Green, Length, U Subdivisions, etc.) </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C5913AE9-F35E-40BA-A13F-488A36C8FEA0\"></a></span><p class=\"table-body\">Parameter. </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F9545E4C-CE77-4753-B40B-23DF126C4BD7\"></a></span><p class=\"table-body\">\"Parameter\" </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F8BB007B-3390-4CDC-8E38-AC303561740D\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"<a href=\"javascript:void(0)\" data=\"Parameter\" class=\"a_multireflink\">Parameter</a>\"</span> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D48230AF-285C-4765-B9AD-08F2020F9538\"></a></span><p class=\"table-body\">Constraints </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-935B0EDC-652F-4842-865B-B15394429638\"></a></span><p class=\"table-body\">Constraint name </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-209AC93A-997D-469C-AC2B-F2718F6F04BE\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"dircns\"</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9080DBE8-9E68-484B-8CB2-28F3184A68AA\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"<a href=\"javascript:void(0)\" data=\"Constraint\" class=\"a_multireflink\">Constraint</a>\"</span> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-780CC153-0C9C-47CA-A432-1BCA0BD11E26\"></a></span><p class=\"table-body\">EventInfo </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-07433EDF-3D6B-45B7-BC72-D034AC742184\"></a></span><p class=\"table-body\">Event type as a string. For all Softimage events, this is XSIApplication. </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DD46FCB3-6A26-4B93-81BA-EB3A3C426E61\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"XSIApplication\"</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-090414DC-3B73-4A4F-87C9-DBB1D4087D1C\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"<a href=\"javascript:void(0)\" data=\"EventInfo\" class=\"a_multireflink\">EventInfo</a>\"</span> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-C8C4A8EF-F2FE-4A27-B2F8-7E0FBF6AAE27\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-7BB82FAE-E4C0-45C0-B791-F6835BF8E90B\"></a></span>This list contains only a sample of the possible return values for the Type property.\n\
                     For specific information on Type and ClassName, see <span class=\"char_link\"><a href=\"#!/url=./files/script_data_CheckingReturnValuesforType.htm#WSBAC00627FDA41F4DBFDDFE9988A39246-003C\">What Does the Type Property Test For?</a></span> and <span class=\"char_link\"><a href=\"#!/url=./files/script_data_CheckingReturnValuesforType.htm#WSBAC00627FDA41F4DBFDDFE9988A39246-003E\">What Does the ClassName Method Test For?</a></span>. \n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAC00627FDA41F4DBFDDFE9988A39246-003C\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-77E780CF-A244-4696-B298-8DDFBE42B5AC\"></a></span> What Does the Type Property Test For?\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-5C2446D7-464C-4C5E-AA59-49AF27BD97DD\"></a></span>The <em class=\"strong\">Type</em> property returns different kinds of information depending on the object you are checking.\n\
                  For example, if you are checking a 3d object or collection item, it returns the primitive\n\
                  type. If you are checking an fcurve or an OGL light, it returns a numeric value corresponding\n\
                  to the type of fcurve or OGL light. \n\
               </p> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-2D6F9161-95B3-408C-8933-AE370203A0DA\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-5AB6578A-4534-4B44-BC6F-D6E3012E94B2\"></a></span>For more information, see the comparison table at the beginning of <span class=\"char_link\"><a href=\"#!/url=./files/script_data_CheckingReturnValuesforType.htm\">Checking Return Values for Type</a></span>. \n\
                     </p> \n\
                  </div>\n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAC00627FDA41F4DBFDDFE9988A39246-003D\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-946986F5-01F3-4F64-8ECA-C224D2AEE791\"></a></span> Example: using the Type property\n\
                  </h3>  \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\' Set up some items to test\n\
Set oObj = ActiveSceneRoot.AddGeometry( \"Cube\", \"MeshSurface\" )\n\
Set oColl = CreateObject( \"XSI.Collection\" )\n\
oColl.Add oObj\n\
\n\
\' Is there any difference between the CollectionItem\n\
\' and the object it refers to?\n\
printInfo oObj\n\
printInfo oColl.Item(0)\n\
\n\
\' What about fcurves?\n\
printInfo oObj.posx.AddFCurve\n\
\n\
\' Getting the operator <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>\n\
ApplyOp \"twist\", oObj\n\
Set oOpStack = oObj.ActivePrimitive.ConstructionHistory\n\
For Each oOp in oOpStack\n\
	printInfo oOp\n\
Next\n\
\n\
\' Testing parameters and properties\n\
printInfo oObj.Properties(0)\n\
printInfo oObj.Parameters(0)\n\
\n\
\' What about the model?\n\
printInfo ActiveSceneRoot\n\
\n\
\' Pass and Layer info\n\
printInfo GetValue( \"Passes.Default_Pass\" )\n\
printInfo GetValue( \"Layers.Layer_Default\" )\n\
\n\
\' CameraRig &amp; primitive\n\
Set oCamera = ActiveSceneRoot.FindChild( \"camera\" )\n\
printInfo oCamera\n\
Set oCameraRig = oCamera.Parent\n\
printInfo oCameraRig\n\
\n\
function printInfo( in_object )\n\
	logmessage in_object.type\n\
end function\n\
\n\
\' Output of above script is:\n\
\'INFO : \"polymsh\"\n\
\'INFO : \"polymsh\"\n\
\'INFO : \"20\"\n\
\'INFO : \"twistop\"\n\
\'INFO : \"geom\"\n\
\'INFO : \"kine\"\n\
\'INFO : \"Parameter\"\n\
\'INFO : \"#model\"\n\
\'INFO : \"#Pass\"\n\
\'INFO : \"#Group\"\n\
\'INFO : \"camera\"\n\
\'INFO : \"CameraRoot\"</pre></div> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAC00627FDA41F4DBFDDFE9988A39246-003E\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-B577120C-A8F3-4B8F-8BA6-00AA5BAD6B2E\"></a></span> What Does the ClassName Method Test For?\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-547D4978-3042-45DE-BA14-FA24D0B9D97E\"></a></span>The <em class=\"strong\">ClassName</em> method returns the name of the Softimage Object Model interface, or the most derived\n\
                  class (the leaf on the class hierarchy tree). This is similar to using the <em class=\"strong\">TypeName()</em> function in VBScript, but this method is available to any language Softimage supports:\n\
                  \n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAC00627FDA41F4DBFDDFE9988A39246-003F\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-A17862A2-9464-446F-ABED-3C9D117F9840\"></a></span> Example: calling the ClassName method using JScript\n\
                  </h3>  \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// JScript example : display the class <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a> of an object\n\
var oObj = ActiveProject.ActiveScene.Root.AddGeometry(\"Sphere\", \"NurbsSurface\");\n\
LogMessage( \"Object typename = \" + Application.ClassName(oObj) );</pre></div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAC00627FDA41F4DBFDDFE9988A39246-0040\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-F2324D6A-E75F-4649-B9B3-372DD4B80C05\"></a></span> Example: testing both Type and ClassName on a sphere\n\
                  </h3>  \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-2CD00BC2-96CB-4EDF-8A94-5DAAAA72A7A5\"></a></span>For example, if you run the following code fragment: \n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\' Set the workspace\n\
Set oRoot = ActiveProject.ActiveScene.Root\n\
\n\
\' Create a polymesh sphere \n\
Set oSphere = oRoot.AddGeometry( \"Sphere\", _ \"MeshSurface\" )\n\
Set oPrim = oSphere.ActivePrimitive\n\
\n\
\' Use the Type property (Softimage <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>)\n\
LogMessage \"Type property gives: \" &amp; oSphere.Type\n\
\n\
\' Use the ClassName method (interface <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>)\n\
LogMessage \"ClassName method gives: \" &amp; _ ClassName( oSphere )</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-339223B8-5F87-4647-B07D-5E010764CF72\"></a></span>The following messages appear in the History pane of the Script Editor: \n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\' INFO : \"Type property gives: polymsh\"\n\
\' INFO : \"ClassName method gives: X3DObject\"</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-40758FA1-60F2-429D-BDEA-A58D3D7640D9\"></a></span>However, the <em class=\"strong\">Type</em> property behaves differently depending on the object and the context. For more information\n\
                     on what the Type property is checking for, see <span class=\"char_link\"><a href=\"#!/url=./files/script_data_CheckingReturnValuesforType.htm#WSBAC00627FDA41F4DBFDDFE9988A39246-003C\">What Does the Type Property Test For?</a></span>. \n\
                  </p> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAC00627FDA41F4DBFDDFE9988A39246-0041\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-BB319BB7-60A5-4A53-9298-94A133EAA145\"></a></span> Other Tests: BelongsTo, Owners, Parent, and Parent3DObject\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-514F95A4-FD44-446B-AD13-78AEF9090535\"></a></span>The <em class=\"strong\">BelongsTo</em> property accesses the family information (which family of objects the current object\n\
                  belongs to—for more information on families, see <span class=\"char_link\"><a href=\"#!/url=./files/script_data_CheckingReturnValuesforType.htm#WSBAC00627FDA41F4DBFDDFE9988A39246-0042\">What are Families?</a></span>). \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-5493A01E-AA13-40E9-A055-B1A88C5BC3F0\"></a></span>The <em class=\"strong\">Owners</em> property returns the parent object of the current object (that is, the parent as\n\
                  far as Autodesk Softimage is concerned)—for more information on owners, see <span class=\"char_link\"><a href=\"#!/url=./files/script_data_CheckingReturnValuesforType.htm#WSBAC00627FDA41F4DBFDDFE9988A39246-0045\">What Are Parents And Owners?</a></span>. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-04E9B077-D5AA-4342-91BA-339DC39DCAFB\"></a></span>The <em class=\"strong\">Parent</em> property returns either the parent object of the current object or the parenting\n\
                  geometry of the current subcomponent. Softimage knows whether the object you are asking\n\
                  about is an object or a subcomponent and returns the appropriate value. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-230E9C48-24F5-4E98-9683-D54C980DC6BE\"></a></span>The <em class=\"strong\">Parent3DObject</em> property returns the parenting object of the current subcomponent—for more information\n\
                  on parents, see <span class=\"char_link\"><a href=\"#!/url=./files/script_data_CheckingReturnValuesforType.htm#WSBAC00627FDA41F4DBFDDFE9988A39246-0045\">What Are Parents And Owners?</a></span>. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-0A5E9FF5-5C50-4F80-9AB2-B05D74833323\"></a></span>For more information on objects and subcomponents, see <a href=\"#!/url=./files/script_elements.htm\">Accessing Scene Elements</a>. \n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAC00627FDA41F4DBFDDFE9988A39246-0042\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-E77C0F44-618C-4059-A34E-4A4489F40F30\"></a></span> What are Families?\n\
                  </h3>  \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-C12D6147-537E-48CE-AE46-902CBE52BF41\"></a></span>Families are a way of linking objects that may share some properties or methods but\n\
                     aren\'t siblings in the object hierarchy. That is, the \"family\" sets up explicit relations\n\
                     between objects that do not fall on a straight line in the inheritance trees. To see\n\
                     a hierarchical representation of the object model, see the <a href=\"#!/url=./si_om/_hier.html\">Object Model Hierarchy</a>. \n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-98BC7F83-5D39-4C4A-AB6A-A84E1D0E91BF\"></a></span>In simpler terms, the Autodesk Softimage SDK developers used the family to set up\n\
                     explicit relations between objects that share properties, methods, and events. \n\
                  </p> \n\
                  <div><span class=\"anchor_wrapper\"><a name=\"GUID-1BE18C67-5F45-460A-8649-FD9CF807AFD4\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-5E9C3741-6805-48C3-90C6-5B7398DA586D\"></a></span>For a complete list of families see the documentation for the <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a> constant. \n\
                        </p> \n\
                     </div>\n\
                  </div> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAC00627FDA41F4DBFDDFE9988A39246-0043\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-C13DE8AD-8412-42F4-AFF8-0AE9510E9B66\"></a></span> Example: finding the family of an action source\n\
                     </h4>  \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-A444EF8E-2847-4BFC-96F6-0D6CE4A28295\"></a></span>You can use the <em class=\"strong\">Families</em> property to access the family information. In this example, the code fragment creates\n\
                        a simple action (so that there is an action source to find) and then uses the Families\n\
                        property to print a list of the <em class=\"strong\">families</em> it belongs to: \n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\' Set up my workspace\n\
Set oRoot = Application.ActiveProject.ActiveScene.Root\n\
\n\
\' The commands create a simple actionsource from some \' animation on the nulls position\n\
Set oNull = GetPrim( \"Null\" )\n\
sPosParams = oNull &amp; \".kine.local.posx,\" &amp; oNull _\n\
	&amp; \".kine.local.posy,\" &amp; oNull &amp; \".kine.local.posz\"\n\
Translate oNull, -8.153, 7.015, -0.702, siRelative, _\n\
	siView, siObj, siXYZ\n\
SaveKey sPosParams, 1.000\n\
Translate oNull, 8.350, -8.935, 0.894, siRelative, _\n\
	siView, siObj, siXYZ\n\
SaveKey sPosParams, 50.000\n\
Translate oNull, 9.413, 8.935, -0.894, siRelative, _\n\
	siView, siObj, siXYZ\n\
SaveKey sPosParams, 100.000\n\
StoreAction oRoot, sPosParams, 2, \"StoredFcvAction\", _\n\
	True, 1, 100\n\
	\n\
\' Get the action source from the model\n\
Set oSources = oRoot.Sources\n\
\n\
\' Print the names and families of each source\n\
For Each s In oSources\n\
	LogMessage s.name &amp; \": \" &amp; s.Families\n\
Next</pre></div> \n\
                  </div> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAC00627FDA41F4DBFDDFE9988A39246-0044\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-CAB2CD1C-FB06-4D6F-9883-5848C13D2348\"></a></span> To find out the family information for the currently-selected object\n\
                     </h4>  \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\' Test to see if the object is a 3D Object\n\
If oSel.BelongsTo( \"3D Object\" ) Then\n\
	LogMessage \"BelongsTo property = True (for 3D Obj)\"\n\
Else\n\
	LogMessage \"BelongsTo property = False\"\n\
End If\n\
\n\
\' Print family id\n\
LogMessage \"Families property = \" &amp; oSel.Families</pre></div> \n\
                  </div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAC00627FDA41F4DBFDDFE9988A39246-0045\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-E173442F-6AF7-45FD-9430-92E0EB307013\"></a></span> What Are Parents And Owners?\n\
                  </h3>  <img src=\"../images/GUID-A2620448-A2D9-4850-8C9F-2471BE0D52B6-low.png\" /> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-045D558F-BCE2-402F-B7FE-E3D4026D94E7\"></a></span>An object\'s <em class=\"strong\">parent</em> is the node directly above that object in the Softimage hierarchy. An object can\n\
                     have only one parent, but its parent may also have a parent and so on up the explorer\n\
                     tree. For example, in this image, \"cube3\" is the parent of \"sphere1\" and \"Scene_Root\"\n\
                     is the parent of \"cube3\". \n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-C70E2CE4-77A8-4122-AB90-5C4887F9C560\"></a></span>For subcomponents (points, segments, and facets), either the parenting geometry or\n\
                     the parenting object of that subcomponent can be considered its parent. \n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-B3C39F54-EDB5-4F43-82CD-E12FA9F30D7D\"></a></span>An object\'s <em class=\"strong\">owners</em> are any other nodes in the Softimage hierarchy which use that object. Often the parent\n\
                     of an object may also be its owner. For example, in the image above, \"cube3\" is both\n\
                     a parent and an owner of \"sphere1\". In addition, \"sphere1\" is also a member of the\n\
                     default layer and the default background objects partition, so it appears under <span class=\"MenuCascade\" id=\"GUID-2C07FE9E-FA47-4A33-BB67-763613F3C940\">Project</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-367ADE93-48E5-440B-AD8F-68D6F85EB32A\">Layers</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-295C030B-68A2-46F6-920D-D5CCE6757118\">Layer_Default</span> and <span class=\"MenuCascade\" id=\"GUID-78681DD5-5782-4831-8F04-962F299B4055\">Project</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-7BC99F67-51EF-43EA-8D7D-6BBB18499B4F\">Passes</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-A02E000E-14B1-42C9-B074-D99A7BE3E638\">Default_Pass</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-EE0196E0-AE8F-49D9-B529-160C5C5652DE\">Background_Objects_Partition</span>. \n\
                  </p> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAC00627FDA41F4DBFDDFE9988A39246-0047\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-D96214D8-C02A-4B10-943F-6220558FCCAC\"></a></span> To find the owner of the currently-selected object\n\
                     </h4>  \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\' Get the selection\n\
Set oSelected = Selection\n\
\n\
\' Find the owner &amp; print its <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
For Each s In oSelected\n\
	LogMessage s.Owners.Count &amp; \" owner(s) for \" &amp; s\n\
	Set oOwner = s.Owners\n\
	For i = 0 To oOwner.Count - 1\n\
		Set o = oOwner(i)\n\
		LogMessage \"Owner #\" &amp; i + 1 &amp; \" is \" &amp; o\n\
	Next\n\
Next</pre></div> \n\
                  </div> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAC00627FDA41F4DBFDDFE9988A39246-0048\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-D5B2A6FD-0567-4B72-A0CE-72F2C766AF53\"></a></span> To find the parent of the currently-selected object\n\
                     </h4>  \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\' Get the selection\n\
Set oSelected = Selection\n\
\n\
\' Find &amp; print the parent\'s <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a> of each selected item\n\
For Each s In oSelected\n\
		LogMessage s &amp; \"\'s parent is \" &amp; s.Parent\n\
Next</pre></div> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-6D066121-4F1B-48B1-871D-2172BD8BE1F1\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-DF2CED1F-087E-4903-B1F4-424397F38302\"></a></span>When using the <em class=\"strong\">Parent</em> property on the scene root, don\'t forget that the scene root gets returned because\n\
                              the root is the highest node in the scene hierarchy. \n\
                           </p> \n\
                        </div>\n\
                     </div> \n\
                  </div> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAC00627FDA41F4DBFDDFE9988A39246-0049\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-72ED2F4D-FDAD-4A6D-BD77-44C3156E3CC8\"></a></span> To find the parent information of the currently-selected subcomponent\n\
                     </h4>  \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\' Get the selection (assuming it\'s a subcomponent)\n\
Set oSelected = Selection(0)\n\
Set oSubSel = oSelected.SubComponent\n\
\n\
\' Find the Parenting Geometry\n\
LogMessage oSubSel &amp; \"\'s parenting geometry is \" &amp; _\n\
	oSubSel.Parent\n\
	\n\
\' Find the Parent Object\n\
LogMessage oSubSel &amp; \"\'s parent object is \" &amp; _\n\
	oSubSel.Parent3DObject</pre></div> \n\
                  </div> \n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";