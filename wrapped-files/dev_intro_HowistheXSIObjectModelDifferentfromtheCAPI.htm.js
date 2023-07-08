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
      <meta name=\"topicid\" content=\"GUID-F365AEA4-56B9-4CFB-BEF9-5807F59C4499\" />\n\
      <meta name=\"indexterm\" content=\"architecture: OM collections vs. C++API arrays\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>How is the Softimage Object Model Different from the C++ API?</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-F365AEA4-56B9-4CFB-BEF9-5807F59C4499\"></a></span><div class=\"head\">\n\
            <h1>How is the Softimage Object Model Different from the C++ API?</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-9CE09DF0-0A35-47F5-B5BC-614A31CA2229\"></a></span>The C++ API is newer than the Softimage Object Model (OM) and there are still some\n\
            differences between which objects are available for scripting and which classes the\n\
            C++ API provides. Furthermore, in some cases where there is a corresponding C++ API\n\
            class, it may not provide the full coverage yet to match its object model counterpart.\n\
            \n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-D70BD6B4-BF67-46F2-8111-7FCCA09AA0B2\"></a></span>There are also some C++ API classes that have no object model counterpart because\n\
            of the difference between pure C++ and ActiveX (Automation), such as the <a href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a> class, which manages object memory and provides conversion services. In addition,\n\
            some C++ API classes have not been (and may never be) implemented in the object model;\n\
            for example, the <a href=\"#!/url=./si_cpp/classXSI_1_1CGraphicSequencer.html\">Graphic Sequencer</a> and the <a href=\"#!/url=./si_cpp/classXSI_1_1ViewContext.html\">Custom Display Host</a>. \n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-16DE2B10-4973-4D55-AFEA-AE7C1450399F\"></a></span>In addition, there is one OM object which is not used by any scripting languages,\n\
            and is implemented solely for the C# language: <a href=\"#!/url=./si_om/PPGEventContext.html\">PPGEventContext</a>. \n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-961CE4DF-8BBC-4CB8-A10C-134195D91BD6\"></a></span>This section provides only a basic overview of the main differences between the two\n\
            APIs. If a C++ API class provides less coverage (members) than its object model counterpart,\n\
            it is not explicitly covered here. For specific information, see the <a href=\"#!/url=./si_cpp/pages.html\">C++ Reference</a>C++ API Reference. \n\
         </p>\n\
         <div><span class=\"anchor_wrapper\"><a name=\"GUID-11D986E8-C832-401C-8E8A-49B35A4DEACC\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-FD7CD182-F403-4646-AAE8-73B4D9A68ACC\"></a></span>Most classes that are implemented in both APIs use the same name. For example, the\n\
                  class that represents a basic 3D object in Softimage is called <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1X3DObject.html\">X3DObject</a> in both the object model and the C++ API. If you do not see a class in the table\n\
                  below, it is probably because both APIs use the same name. \n\
               </p> \n\
            </div>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-C953E72A-D1B9-4FB8-AE09-93F744802010\"></a></span>The following table presents a brief overview of the differences between the classes\n\
            available in the C++ API and the object model: \n\
         </p><span class=\"anchor_wrapper\"><a name=\"TABLE_4E0BE0F0B8194126AF22C546348EF47D\"></a></span><div class=\"table_Ruled\">\n\
            <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
               <colgroup>\n\
                  <col width=\"16.666666666666664%\" align=\"left\" />\n\
                  <col width=\"33.33333333333333%\" align=\"left\" />\n\
                  <col width=\"50%\" align=\"left\" />\n\
               </colgroup>\n\
               <tr class=\"ruledHeading\">\n\
                  <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1C3E51E2-EBF0-49DE-8D98-765EF14620F0\"></a></span><p class=\"table-heading\">C++ API </p> \n\
                  </th>\n\
                  <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DD58C881-B1E4-4821-9A2C-AE91B7364075\"></a></span><p class=\"table-heading\">Softimage Object Model </p> \n\
                  </th>\n\
                  <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C519A122-8888-46CB-852E-CD434630A82B\"></a></span><p class=\"table-heading\">Comments </p> \n\
                  </th>\n\
               </tr>\n\
               <tr class=\"ruledOddRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BAD1ED19-0A4F-4F24-AF8F-C4EC3A62A70D\"></a></span><p class=\"table-body\">-- </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2D242809-31FB-42A8-9E8F-02A9D6C15557\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Addon.html\">Addon</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D1FCAC78-2BCA-4EB8-8CF0-CAF0167D6F1B\"></a></span><p class=\"table-body\">Useful mostly for scripting in Softimage. </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledEvenRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6EF9D072-A3A1-4308-AC61-51BC5B665621\"></a></span><p class=\"table-body\">-- </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-60C636A9-D52C-4A20-B3D7-AD0E00720EC2\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/AlignedAxisConstraint.html\">AlignedAxisConstraint</a> (scripting only) \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-59C8AA14-F040-4866-8D71-7105BD28A673\"></a></span><p class=\"table-body\">Represents a AxisAligned constraint (e.g. direction constraint, position constraint).\n\
                        \n\
                     </p> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-11B36B5D-FC2B-481F-82BC-B0F044FEF9ED\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-F9D5F61D-34FC-4F5F-A53D-E86C818B499C\"></a></span>This interface is not available in the C# language. \n\
                           </p> \n\
                        </div>\n\
                     </div> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledOddRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C5D51214-1218-40E2-991F-44D982076D9A\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1Application.html\">Application</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-230C1125-D226-494F-A511-842B9384631B\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/XSIApplication.html\">XSIApplication</a> \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"GUID-DD606B87-61FC-49DA-AE76-1AA6CDEE7EAE\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Application.html\">Application</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A4B9A95C-83E2-4A5D-99F7-68E685BDCF02\"></a></span><p class=\"table-body\">Only Application is provided in the C++ API, which provides some (but not all) of\n\
                        the functionality of these two object model classes. \n\
                     </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledEvenRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D281306C-7B50-4919-B6AF-BCECD15AD004\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CBase.html\">CBase</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FDE4CC99-D79B-485D-B163-4369FA2D5D4D\"></a></span><p class=\"table-body\">-- </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-38DFDDEC-900B-41A7-9635-31D464642AE2\"></a></span><p class=\"table-body\">This class is the base for all API classes in the C++ API; it\'s an abstract class\n\
                        (that is, it provides access to the API classes but you wouldn\'t use it directly).\n\
                        \n\
                     </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledOddRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E02CB6A5-572E-4F57-BCC4-EC696C7FE6A4\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CBitArray.html\">CBitArray</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8CA52BB6-EFE1-4F13-9C92-BB8287DB0760\"></a></span><p class=\"table-body\">-- </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-895C0D64-A703-4033-8EA1-24D8C95701E6\"></a></span><p class=\"table-body\">Encapsulates an array of binary values represented as booleans (deals with large arrays\n\
                        of boolean values in a compact way). \n\
                     </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledEvenRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3370EB46-692B-41E4-BE71-D8073145694B\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CBoolArray.html\">CBoolArray</a> \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"GUID-A37317D4-0829-405C-B3AA-2DA902ECCE87\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CDoubleArray.html\">CDoubleArray</a> \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"GUID-F23BBAAC-9167-4A23-93A4-8A161AD7A784\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CLongArray.html\">CLongArray</a> \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"GUID-CC8D13CF-E3DF-4ABA-AC86-8E0152170ACF\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CStringArray.html\">CStringArray</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0396EC5B-FAC4-4D35-AB41-F4A499FB7B87\"></a></span><p class=\"table-body\">-- </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9ACECBC2-7A1C-4D4A-B4E9-BC6C5F10B794\"></a></span><p class=\"table-body\">C++ API convenience classes that manage arrays of standard data types. </p> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-EA07316E-9895-4633-A4E7-FED295C61CFE\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-8C102872-E19F-403C-A270-B4971A4798D1\"></a></span>While the C++ API uses these specialized type arrays, C# (which is another strongly\n\
                              typed language) supports <span class=\"code\" translate=\"no\"> <em class=\"strong\">System.Object</em> </span> arrays. Since the native C# Object class is a generic data type (similar to Variant),\n\
                              arrays can actually contain items of different types in C#. JScript, Python, and VBScript\n\
                              do not need special array classes because they are loosely typed languages. \n\
                           </p> \n\
                        </div>\n\
                     </div> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledOddRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D4E36765-570F-4CB8-A0C2-3A9D0D06EDA3\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CClusterElementArray.html\">CClusterElementArray</a> \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"GUID-178FA1D0-1524-42A0-81AE-AA2DEB47B6BA\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CClusterPropertyElementArray.html\">CClusterPropertyElementArray</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C2A05497-5199-4B6E-95E4-C70C1FFC2CC3\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/ClusterElementCollection.html\">ClusterElementCollection</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-40A3A7CD-AB05-4482-A613-665E7B24EB10\"></a></span><p class=\"table-body\">There is a slight difference between the two APIs: the C++ API implements two separate\n\
                        classes to handle the elements from Cluster and ClusterProperty classes, while the\n\
                        object model implements one to handle both. \n\
                     </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledEvenRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EA60F5DE-21C7-45BE-880C-BC84EB4FC661\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CClusterPropertyBuilder.html\">CClusterPropertyBuilder</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0ABCDC78-69EC-41F1-B628-DD80603B6EF3\"></a></span><p class=\"table-body\">-- </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-CE5DE7F0-34CE-4C2C-B711-ABFCB348D666\"></a></span><p class=\"table-body\">Provides services to accelerate the process of creating new cluster properties on\n\
                        a geometry. \n\
                     </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledOddRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1C3EA66E-5E15-4F02-949B-4DC3FB0E11B8\"></a></span><p class=\"table-body\"> CColor </p> <span class=\"anchor_wrapper\"><a name=\"GUID-8ABEA4B2-E228-4F9C-8CA2-9CDAB253563E\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CColorArray.html\">CColorArray</a> \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"GUID-7EE1B06F-87A7-47EC-8B6A-BC22B0EA15BF\"></a></span><p class=\"table-body\"> CVertexColor </p> <span class=\"anchor_wrapper\"><a name=\"GUID-F325CF1D-16C6-4F09-ABEA-C045B82FA398\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CVertexColorArray.html\">CVertexColorArray</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A23D91A5-F7FE-4A62-90C8-12C7ADE28F6F\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Color.html\">Color</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-246B75A6-35C0-4894-A72C-CC8B609BB0BB\"></a></span><p class=\"table-body\">Represents an RGBA color. The C++ API uses a specific structure to represent the color\n\
                        on Triangle and TriangleVertex classes. \n\
                     </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledEvenRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D8108F10-CABA-4E20-8DD8-FEE4FDF6B42F\"></a></span><p class=\"table-body\"> CColor4f </p> <span class=\"anchor_wrapper\"><a name=\"GUID-A8A9B608-593E-4553-A4DB-1724D8100A3E\"></a></span><p class=\"table-body\"> CMatrix3f </p> <span class=\"anchor_wrapper\"><a name=\"GUID-40911642-4379-4FF7-9892-0863772FF064\"></a></span><p class=\"table-body\"> CMatrix4f </p> <span class=\"anchor_wrapper\"><a name=\"GUID-93151CE3-9399-47B7-9811-3BDEB1296826\"></a></span><p class=\"table-body\"> CQuaternionf </p> <span class=\"anchor_wrapper\"><a name=\"GUID-7D9DEB9A-5CC6-4662-8CF4-1E0DD40AECD6\"></a></span><p class=\"table-body\"> CRotationf </p> <span class=\"anchor_wrapper\"><a name=\"GUID-B8253CD3-3812-4B1D-B2E9-D04595C8747D\"></a></span><p class=\"table-body\"> CVector2f </p> <span class=\"anchor_wrapper\"><a name=\"GUID-24195CF2-70AA-44BF-AD68-1DBB7C415755\"></a></span><p class=\"table-body\"> CVector3f </p> <span class=\"anchor_wrapper\"><a name=\"GUID-F7ADAFBC-8994-43E0-B4D1-74EB3F327E16\"></a></span><p class=\"table-body\"> CVector4f </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-CC94F097-B06A-415C-940A-1F96A52DC779\"></a></span><p class=\"table-body\">-- </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4F763D60-8663-4A47-B38B-1C047BD6869D\"></a></span><p class=\"table-body\">Special MATH classes to support ICE data types. </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledOddRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5130627D-5771-41DD-9A70-58D0B507390F\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CComAPIHandler.html\">CComAPIHandler</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6F681C69-DACB-46EC-996A-E14DA7DFEA3E\"></a></span><p class=\"table-body\">-- </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-80AAB2EF-C040-4D07-8780-7DB95B3D0ED1\"></a></span><p class=\"table-body\">Implements a C++ wrapper for calling automation objects (including objects implemented\n\
                        using the Softimage Object Model). \n\
                     </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledEvenRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A8C479AF-59AF-4E45-9876-2ABD8A085491\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CGeometryAccessor.html\">CGeometryAccessor</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D5E72FC9-5466-4342-8046-5FE494B7E827\"></a></span><p class=\"table-body\">-- </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2F7FEA97-28DC-4252-8C23-C782DAC94B6F\"></a></span><p class=\"table-body\">Provides optimized access to the data and cluster property values of a geometry mesh\n\
                        object. \n\
                     </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledOddRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-031007B6-56C6-47EA-8A83-309C82723765\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CDataArray.html\">CDataArray</a> \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"GUID-8CEF847D-ED2C-49E3-85A1-FEC3A8CA4E3C\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CDataArray2D.html\">CDataArray2D</a> \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"GUID-035B8533-4B31-4A90-BB75-61DD3AF8E0B3\"></a></span><p class=\"table-body\"> CDataArray2D::Accessor </p> <span class=\"anchor_wrapper\"><a name=\"GUID-7C74A40E-016B-43D3-84E9-5614E114B7AF\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CDataArray2D_3_01bool_01_4_1_1Accessor.html\">CDataArray2D&lt; bool &gt;::Accessor</a> \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"GUID-2760F084-BD11-4FB8-B203-6C7E6169AA71\"></a></span><p class=\"table-body\"> CDataArray2DBool </p> <span class=\"anchor_wrapper\"><a name=\"GUID-4FB323FF-3262-4ABA-8967-05268D337783\"></a></span><p class=\"table-body\"> CDataArrayBool </p> <span class=\"anchor_wrapper\"><a name=\"GUID-48494EC2-D186-424D-A39B-AE804CD428AD\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CIndexSet.html\">CIndexSet</a> \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"GUID-9A71D0C1-5F8A-460F-99B6-DD76AA3712D5\"></a></span><p class=\"table-body\"> CIndexSet::Iterator </p> <span class=\"anchor_wrapper\"><a name=\"GUID-500194E5-63BA-4CFA-ABBF-5E4900950F69\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CICEAttributeDataArray.html\">CICEAttributeDataArray</a> \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"GUID-6BF5FF29-F773-429E-81DE-AD7D117993E5\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CICEAttributeDataArray2D.html\">CICEAttributeDataArray2D</a> \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"GUID-65EB4BB4-76CC-46D1-9D4D-535C23FF56E1\"></a></span><p class=\"table-body\"> CICEAttributeDataArrayBool </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2484782A-AEE8-4CA5-96EE-04462A77A6B6\"></a></span><p class=\"table-body\">-- </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-CDE902FB-2FD5-4056-9021-B1A7DB3324CA\"></a></span><p class=\"table-body\">Support data access for custom ICENode plug-ins. </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledEvenRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D94FCAF8-EDCE-474C-831C-E5435917974A\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CGraphicSequencer.html\">CGraphicSequencer</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-28F9983F-0927-43D3-9F1A-6A4F397FDBC8\"></a></span><p class=\"table-body\">-- </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-180EE5E1-BBBC-4720-8E5F-3AB2B78C5A1C\"></a></span><p class=\"table-body\">Offers several services to enable custom rendering passes in the OpenGL viewport.\n\
                        \n\
                     </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledOddRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7AC38538-0CBC-4912-9D55-63EA92F4BAD1\"></a></span><p class=\"table-body\">-- </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E5D1DED1-5681-4A65-B8A6-89A249D78D60\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Channel.html\">Channel</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6881924C-78E3-4E2C-B862-3B98156B8955\"></a></span><p class=\"table-body\">Represents a channel for a device driver </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledEvenRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B2F39E95-D669-45EA-A29F-35A7FE0C7F6B\"></a></span><p class=\"table-body\">-- </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9CA3F435-C43C-40DC-AD83-259FB906D544\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Cluster_V1.html\">Cluster_V1</a> \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"GUID-A68017B5-A18C-4609-A9AA-51734CA047FB\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/ClusterProperty_V1.html\">ClusterProperty_V1</a> (scripting only) \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-430B283B-A669-4C0D-A88F-AEC0F151F214\"></a></span><p class=\"table-body\">Original version of the Cluster and ClusterProperty objects for scripting (deprecated\n\
                        since v1.5) \n\
                     </p> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-2621C89A-EEBA-439A-BEB1-A239DDBFF86C\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-C878FB8D-DC22-4365-834B-3087C44FC0F1\"></a></span>These interfaces are not available in the C# language. \n\
                           </p> \n\
                        </div>\n\
                     </div> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledOddRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C3C2C94E-A31F-45BF-83E7-8879C29C5EE6\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CMeshBuilder.html\">CMeshBuilder</a> \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"GUID-109F92E8-17F6-4912-BCDD-E4E8212603A8\"></a></span><p class=\"table-body\"> CMeshBuilder::CErrorDescriptor </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-30C884DB-82E6-4F05-8CF1-CD847358A6F1\"></a></span><p class=\"table-body\">-- </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2B3A5D12-28DC-4ABB-A5FB-E52E69EDB3B7\"></a></span><p class=\"table-body\">Allows you to create polygon meshes from an ordered array of vertex coordinates and\n\
                        polygon connections (polygon to vertices). \n\
                     </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledEvenRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-56F0DFA7-0A0D-48C6-86E6-B52CC93ED6E6\"></a></span><p class=\"table-body\"> CNurbsCurveData </p> <span class=\"anchor_wrapper\"><a name=\"GUID-565C135C-B956-482A-87C7-9659209F3CB8\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CNurbsCurveDataArray.html\">CNurbsCurveDataArray</a> \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"GUID-4F1A012F-62E9-46B5-9471-BAD65FBE5708\"></a></span><p class=\"table-body\"> CNurbsSurfaceData </p> <span class=\"anchor_wrapper\"><a name=\"GUID-E87A311A-7C4C-4464-8739-93D46BE5E592\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CNurbsSurfaceDataArray.html\">CNurbsSurfaceDataArray</a> \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"GUID-500EA8E0-5F86-4B88-9D68-F8E0B1F91845\"></a></span><p class=\"table-body\"> CTrimCurveData </p> <span class=\"anchor_wrapper\"><a name=\"GUID-D82B1084-41E9-4504-957F-46B3C28C207F\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CTrimCurveDataArray.html\">CTrimCurveDataArray</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FEAA5DFC-0973-46FC-B24B-B4A15DBF8DCB\"></a></span><p class=\"table-body\">-- </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AF5F3683-1D09-4B87-8DFE-9381EE465857\"></a></span><p class=\"table-body\">Special C++ API structures to hold NURBS data retrieved with the Get() and GetTrim()\n\
                        methods on the NurbsCurve and NurbsSurface classes. In the object model, these data\n\
                        are handled by output arguments or arrays. \n\
                     </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledOddRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-46901824-51E3-40F3-9603-86CE0C7CA90A\"></a></span><p class=\"table-body\">-- </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-47B90D39-B9FC-49BB-B8C2-F5992DAA2902\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/CollectionItem.html\">CollectionItem</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-10394F13-6E7D-4630-9D91-8873D3AB2689\"></a></span><p class=\"table-body\">Generic dispatch object for scripting most often used to represent the elements of\n\
                        an XSICollection \n\
                     </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledEvenRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7314C348-0427-41D0-B056-E4869FFD4192\"></a></span><p class=\"table-body\">-- </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-26F978DD-5BF9-4D80-9A45-08D3FE03EF65\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/ConstructionHistory.html\">ConstructionHistory</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-13D776CF-5992-49F5-B3CB-6EA98B041577\"></a></span><p class=\"table-body\">Represents the operator stack for a Primitive object. </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledOddRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-713FC280-6E54-4F9C-9959-28D5A8115FC3\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1Context.html\">Context</a> \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"GUID-781E9915-A60C-4A02-BBC0-C5C713482FDA\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1ViewContext.html\">ViewContext</a> \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"GUID-7DA569F7-5C1C-4B0C-A87C-532F0BC82933\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1GraphicSequencerContext.html\">GraphicSequencerContext</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B14AF7EE-41CC-4E41-87E3-5DEAAF5E8960\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Context.html\">Context</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1B183B66-96DB-4E73-8A2C-E28DC7310AE0\"></a></span><p class=\"table-body\">The object model uses the same Context object for all plug-in types, whereas the C++\n\
                        API uses specialized classes. \n\
                     </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledEvenRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F010D8CC-68C8-432E-B978-FAC31C435561\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9A51FE67-1E95-4AB2-AB61-662D9D2ABB2A\"></a></span><p class=\"table-body\">(pointers to specific objects) </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A6AD5F3E-09B3-4C92-BABF-1E9B71F92432\"></a></span><p class=\"table-body\">These don\'t correspond exactly because the C++ API uses the CRef class to manage object\n\
                        references, while the object model uses explicit pointers to specific objects. \n\
                     </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledOddRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-021A3A26-3AD5-49F5-9A63-E1148F5D6C56\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CRefArray.html\">CRefArray</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B98F815B-175A-4467-8CBE-7E8B47313E6C\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> (pointers to collection objects) \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-CC291D1F-EBC4-4B69-901F-D504B95A37DD\"></a></span><p class=\"table-body\">These are special arrays of CRef objects in the C++ API but explicit pointers to specific\n\
                        collection objects in the object model. \n\
                     </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledEvenRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-68200954-6C1A-4CF1-AC4A-542E22584FE9\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CSelectionChangeNotification.html\">CSelectionChangeNotification</a> \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"GUID-004845B7-C597-4BE1-9F58-A0B17CBC5DFC\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CTimeChangeNotification.html\">CTimeChangeNotification</a> \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"GUID-EE064C4D-2764-494B-9DC3-6E161C792D44\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CValueChangeNotification.html\">CValueChangeNotification</a> \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"GUID-A0AAC568-5F7C-4637-84F7-4EC987EF07C3\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CWindowNotification.html\">CWindowNotification</a> \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"GUID-828050F2-B8F2-4D7C-8D11-AF6300B744D3\"></a></span><p class=\"table-body\"> CXSIEventSelectionData </p> <span class=\"anchor_wrapper\"><a name=\"GUID-9F11A2AE-0F74-4D4E-B8CB-9DBD6616BE6F\"></a></span><p class=\"table-body\"> CXSIEventTimeData </p> <span class=\"anchor_wrapper\"><a name=\"GUID-3F1FD89F-5BC0-43AB-8F00-75E2EBDCDF4A\"></a></span><p class=\"table-body\"> CXSIEventValueSetData </p> <span class=\"anchor_wrapper\"><a name=\"GUID-BC061299-88D8-4523-A8EE-BC6DD4A2F3D6\"></a></span><p class=\"table-body\"> CXSIWindowChangeData </p> <span class=\"anchor_wrapper\"><a name=\"GUID-A8EEFD4B-304B-479A-8B97-6B4CF2533DE2\"></a></span><p class=\"table-body\"> CXSIEventSelectionImpl </p> <span class=\"anchor_wrapper\"><a name=\"GUID-20B90272-8CD4-426D-B7E6-CBC70FCCA21E\"></a></span><p class=\"table-body\"> CXSIEventTimeImpl </p> <span class=\"anchor_wrapper\"><a name=\"GUID-5EB742EF-6CFB-4EC6-BC0B-AE3A8C00D9E6\"></a></span><p class=\"table-body\"> CXSIEventSetValueImpl </p> <span class=\"anchor_wrapper\"><a name=\"GUID-BE1A98A9-01F0-4309-90CB-6A0FC7C9C356\"></a></span><p class=\"table-body\"> CXSIWindowChangeImpl </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2FA374A8-B16B-4FE6-BC08-53B6AB643B8C\"></a></span><p class=\"table-body\">-- </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4AAC96D9-2449-4D6B-9019-DB6E883EBFC8\"></a></span><p class=\"table-body\">Holds read-only information an a Custom Data Host event. </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledOddRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DA119C45-AFEC-4834-BFA8-CB1D6D3C2C80\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4D382B66-8557-4E29-821B-00384F1C751E\"></a></span><p class=\"table-body\">(VBScript <span class=\"code\" translate=\"no\">Err</span> object) (JScript <span class=\"code\" translate=\"no\">Error</span> object) (Python <span class=\"code\" translate=\"no\">stderr</span> pipes) (C# <span class=\"code\" translate=\"no\">System.Exception</span> class) \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4C344577-FC1D-44EF-B90F-E99D8D67D00B\"></a></span><p class=\"table-body\">Encapsulates status data types for error handling purpose. The class also exposes\n\
                        methods to query and set the error code. The error codes use the same values as the\n\
                        standard HRESULT error codes on Windows. \n\
                     </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledEvenRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E647BC98-BE04-4122-9FFB-C7645A6F6461\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EA482656-B7E1-4DEA-98D5-9BCD9DD4B8FA\"></a></span><p class=\"table-body\">(<a href=\"#!/url=./files/String.htm\">String</a> as Variant type for scripting and <span class=\"code\" translate=\"no\">System.String</span> for C#) \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3F3990FB-391F-4B27-AD2B-8F9DED487C93\"></a></span><p class=\"table-body\">Variable-length sequence of wide character strings (for unicode support). When specifying\n\
                        strings in the C++ API, the wide character constant (L\"mystring\") must be used. \n\
                     </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledOddRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-83E8B869-1186-46D4-B5E1-B7358A88CCA6\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CTime.html\">CTime</a> \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"GUID-9262B43D-0741-435B-A86C-65870A87752A\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CTimeArray.html\">CTimeArray</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4039DEE6-E97A-4652-A32D-0E964F851903\"></a></span><p class=\"table-body\">-- </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B45FC821-EA4B-4AF7-B778-A4CF1D058B6D\"></a></span><p class=\"table-body\">Utility classes for manipulating time. </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledEvenRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-335DCBB3-3F87-433F-9E15-9B04DC127D8E\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CUserDataArray.html\">CUserDataArray</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3C764035-619D-4733-A57B-7C56C09AD1BC\"></a></span><p class=\"table-body\">-- </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AD7EDD27-7B45-4B1A-AF48-DE19EE4D0066\"></a></span><p class=\"table-body\">Array of user data values represented with the CUserDataArray::Value structure type\n\
                        \n\
                     </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledOddRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DBAB3E60-8338-4E5C-B533-A85FE377FC3C\"></a></span><p class=\"table-body\"> CUV </p> <span class=\"anchor_wrapper\"><a name=\"GUID-0F803039-F9A7-48FF-8A69-47BDFDE566D8\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CUVArray.html\">CUVArray</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F368469A-A52A-4A90-8BF2-31BA96308276\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/UV.html\">UV </a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-CD7A28FC-00A9-4FFD-87AF-54265E8509E0\"></a></span><p class=\"table-body\">Represents a UV coordinate. Implemented as a structure in the C++ API. </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledEvenRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-15BCAA37-2072-4DF5-8162-5A87DD0D6796\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CValue.html\">CValue</a> \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"GUID-8728353F-9381-44FE-935A-FAE8C5DCE0C6\"></a></span><p class=\"table-body\"> ValueField </p> <span class=\"anchor_wrapper\"><a name=\"GUID-A095FC7B-F5FE-49D9-A5D2-A8CBA0973858\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CValueArray.html\">CValueArray</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EFF875F7-7FA8-487B-97C2-26F72B24C703\"></a></span><p class=\"table-body\">-- </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-18381EE5-AB82-4E1C-ACCC-4F53EB4C6478\"></a></span><p class=\"table-body\">Special classes to provide the convenience of a loosely typed variable inside a strictly\n\
                        typed language like C++. \n\
                     </p> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-01B283BC-4768-4895-A84F-B09B8177E9C4\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-77E7AD43-795F-434E-B5AC-B23C250CD843\"></a></span>C# is also strongly typed, but uses the <span class=\"code\" translate=\"no\">System.Object</span> class to represent a loosely typed variable similar to the ActiveX <a href=\"#!/url=./files/Variant.htm\">Variant</a>. \n\
                           </p> \n\
                        </div>\n\
                     </div> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledOddRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A3E7D9D8-5171-4E01-84A0-5EE993E3B349\"></a></span><p class=\"table-body\"> CVector3 </p> <span class=\"anchor_wrapper\"><a name=\"GUID-43483F83-99F1-49AC-BF63-EFBBED2CC142\"></a></span><p class=\"table-body\"> CVector3Array </p> <span class=\"anchor_wrapper\"><a name=\"GUID-F58DFDCC-9DB0-4465-B795-63F8D7A80F23\"></a></span><p class=\"table-body\"> CVector4 </p> <span class=\"anchor_wrapper\"><a name=\"GUID-6627899D-3463-4598-9378-14F5E7E8B0F3\"></a></span><p class=\"table-body\"> CVector4Array </p> <span class=\"anchor_wrapper\"><a name=\"GUID-5681EBB5-7BC7-4BE5-9DB4-4EB3D1B8999D\"></a></span><p class=\"table-body\"> CMatrix3 </p> <span class=\"anchor_wrapper\"><a name=\"GUID-D5754861-D276-408E-94A3-38DBBF6C7EBD\"></a></span><p class=\"table-body\"> CMatrix4 </p> <span class=\"anchor_wrapper\"><a name=\"GUID-2717062D-6607-4BDE-8A17-EC294E594C47\"></a></span><p class=\"table-body\"> CMatrix4 </p> <span class=\"anchor_wrapper\"><a name=\"GUID-184246FC-78B7-4CB8-ACBE-A024C83BE407\"></a></span><p class=\"table-body\"> CQuaternion </p> <span class=\"anchor_wrapper\"><a name=\"GUID-868F2A8D-88F3-46CF-B782-E7C861242A5E\"></a></span><p class=\"table-body\"> CRotation </p> <span class=\"anchor_wrapper\"><a name=\"GUID-6FB46175-4F5C-4300-A1E8-47915ED4192C\"></a></span><p class=\"table-body\"> CTransformation </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-711C4291-B2EE-4A9F-BD0C-B93E12FA5191\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/SIVector3.html\">SIVector3</a> \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"GUID-FED0C72E-B552-49BA-B4FE-EB605F63EC24\"></a></span><p class=\"table-body\">-- </p> <span class=\"anchor_wrapper\"><a name=\"GUID-60F50E89-6FB4-475E-B8A0-90192B57352E\"></a></span><p class=\"table-body\">-- </p> <span class=\"anchor_wrapper\"><a name=\"GUID-6FE3550B-EAEE-4BEF-B5EA-9F47776DC41E\"></a></span><p class=\"table-body\">-- </p> <span class=\"anchor_wrapper\"><a name=\"GUID-7CE29149-CFBF-4BC7-93F2-26DFC66F929C\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/SIMatrix3.html\">SIMatrix3</a> \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"GUID-02C811E7-16C3-4911-A6A0-A03FDF78ED87\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/SIMatrix4.html\">SIMatrix4</a> \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"GUID-5729446A-4995-42F6-B192-A3898C850CC5\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/SIQuaternion.html\">SIQuaternion</a> \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"GUID-8789DA12-40A9-4AA3-A4F6-885392124F03\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/SIRotation.html\">SIRotation</a> \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"GUID-DA6A1631-67AA-475F-B0F6-162DD8E27B30\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/SITransformation.html\">SITransformation</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-63C74186-1935-40F6-86E8-BA098E7364BC\"></a></span><p class=\"table-body\">Softimage Math objects. </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledEvenRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-15AFEA6F-DF1E-46F9-BF65-5A60DC08B1AE\"></a></span><p class=\"table-body\">-- </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3887B537-016E-4E35-A218-0CFB3BA48C16\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/DataRepository.html\">DataRepository</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-688658E8-1981-413F-8C98-0B3FBDF69977\"></a></span><p class=\"table-body\">Gives access to information about the internal object database. </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledOddRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A0037FDD-CAEA-4110-9C23-469CA13A8094\"></a></span><p class=\"table-body\">-- </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6684B4E9-00A4-465E-9800-CE623DBA96B0\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Device.html\">Device</a> \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"GUID-C41F172D-DD7C-4205-8B44-DA06C2F38E29\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/DeviceCollection.html\">DeviceCollection</a> \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"GUID-6770106D-55CC-4DF1-9D63-0C0575F0265C\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Channel.html\">Channel</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-80E0E544-9C1C-4297-9431-B194DE7FD0CB\"></a></span><p class=\"table-body\">These objects manage device drivers in Softimage. </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledEvenRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8A6AB251-A742-4B77-9A0E-779B97CAFB61\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1Directed.html\">Directed</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1691425A-27DB-4FD8-B487-C003C3EBCA7A\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/DirectedObject.html\">DirectedObject</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A06E3E44-1146-448F-B005-4ADC93E65FA4\"></a></span><p class=\"table-body\">Base class for Camera and Light objects. </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledOddRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6B7DE6ED-D314-4268-B883-8E71E782FD15\"></a></span><p class=\"table-body\">-- </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FC39F405-0988-4122-9049-E0BE99D18AC8\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Environment.html\">Environment</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E66E7277-9F6A-451C-AB43-546A511E7585\"></a></span><p class=\"table-body\">Manages environment variables for Softimage (only available via scripting) </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledEvenRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3C694B6C-02CA-43CF-A6C1-8513F64D0FC4\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1Factory.html\">Factory</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DC5C03E2-239E-4E05-A27B-E6617B2E4DB8\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/XSIFactory.html\">XSIFactory</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-17928F74-C5A4-417B-97B6-6F6D9D9061AA\"></a></span><p class=\"table-body\">Allows you to create objects that are external the scene graph and helper objects.\n\
                        \n\
                     </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledOddRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D2AB4263-C9F9-4EF7-95B0-EAE77C20F04F\"></a></span><p class=\"table-body\">-- </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B2D25EC5-783C-448E-AA92-82D620E68868\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/FCurveEditor.html\">FCurveEditor</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-18802B8E-2F7A-4E6F-A9DA-7D1E59C97177\"></a></span><p class=\"table-body\">Provides the context information of the Softimage FCurve editor allowing you to write\n\
                        custom fcurve editing scripts or plug-ins which react to user\'s actions in the FCurve\n\
                        Editor. \n\
                     </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledEvenRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-14DDB0CE-F239-4C66-B912-0D46602936D7\"></a></span><p class=\"table-body\">-- </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F5E75B9D-1BDC-4212-98B5-6F521E52D0BC\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/FileBrowser.html\">FileBrowser</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B3B49112-548B-45AD-9674-00129CE8DC06\"></a></span><p class=\"table-body\">Provides services to display the Softimage Browser (only available via scripting)\n\
                        \n\
                     </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledOddRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-21FB17F2-DA12-40D2-9D7E-AB6E1612326D\"></a></span><p class=\"table-body\">-- </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-244A343D-402C-4998-B940-248857D8BD34\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/FxTree.html\">FxTree</a> <a href=\"#!/url=./si_om/FxOperator.html\">FxOperator</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A9823111-7047-4E62-88C2-18B33B57373A\"></a></span><p class=\"table-body\">These objects manage the FxTree (a network of FxOperators) and its FxOperators. </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledEvenRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AD1A66F3-26FE-4E8C-8478-D5896FC918B5\"></a></span><p class=\"table-body\">-- </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-86B419FD-E4EC-46F6-8E2C-B74ACCFD90B5\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Geometry_V1.html\">Geometry_V1</a> \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"GUID-EEA48021-2DB7-4501-B95D-A3FEF2AC9EE0\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Geometry0D.html\">Geometry0D</a> \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"GUID-918B2CE5-A759-4605-8439-7231DEF26E12\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Geometry1D.html\">Geometry1D</a> \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"GUID-7E45C42B-2DA3-4952-8EF0-6023BE89B80D\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Geometry2D.html\">Geometry2D</a> \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"GUID-FF346543-28FF-4894-A8F6-BC60D9892630\"></a></span><p class=\"table-body\">(scripting only) </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AA84D9C6-B915-4F89-958A-410A2F8BCD5F\"></a></span><p class=\"table-body\">Original version of objects representing object and subcomponent geometry for scripting\n\
                        (deprecated since v1.5) \n\
                     </p> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-4E9B5005-AEE9-482B-9683-C37A27ABFDA8\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-F8B330D9-6F6C-4351-8D49-D34346807B24\"></a></span>These interfaces are not available in the C# language. \n\
                           </p> \n\
                        </div>\n\
                     </div> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledOddRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-940006E2-47A9-4642-B382-2D98E83BC5F1\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1HardwareSurface.html\">HardwareSurface</a> \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"GUID-194E4B5B-D359-497F-8DCF-E9730D6F3908\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1HardwareShaderContext.html\">HardwareShaderContext</a> \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"GUID-3F135F17-ECB6-413C-9E50-195A256D1B26\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CHardwareAttributeArray.html\">CHardwareAttributeArray</a> \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"GUID-9BFB4C08-77DC-4857-8C54-0EAC843DFA57\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1GraphicDriver.html\">GraphicDriver</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E0DECF36-09FB-4C4A-8C60-DAF81FDDAD57\"></a></span><p class=\"table-body\">-- </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-173E3D6D-13E1-46B1-90BF-B257C161E0E3\"></a></span><p class=\"table-body\">Used for Hardware Rendering (Realtime Shaders) </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledEvenRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EA76EBBA-0907-4CFB-A880-4ED7986A3CC7\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1ImageClip2.html\">ImageClip2</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7BEA500D-7FB7-4AD5-91A1-E9DF525F3962\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/ImageClip.html\">ImageClip</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-30684EC7-162F-4EEB-B035-64791B0562D3\"></a></span><p class=\"table-body\">The original version of the ImageClip class in the C++ API has been replaced by ImageClip2\n\
                        \n\
                     </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledOddRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-052A7373-1CDA-4633-8719-6CF022437270\"></a></span><p class=\"table-body\">-- </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6B4A342D-A38D-4237-9EAE-133E4F32997B\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Linktab.html\">Linktab</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4B796830-6D90-4A5C-A199-291C051CC5BB\"></a></span><p class=\"table-body\">Manages how paths are translated between Unix and NT environments using the linktab.ini\n\
                        file. \n\
                     </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledEvenRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-532B81B6-8D56-403A-B524-E9EB473A0988\"></a></span><p class=\"table-body\"> MATH </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D551018D-722B-4486-B9A7-07BD0ECB4734\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/XSIMath.html\">XSIMath</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E5A8F12C-247D-41A3-9AEE-02CD5E91598B\"></a></span><p class=\"table-body\">Provides basic 3D mathematics functionality as an intrinsic object in the object model\n\
                        and as a namespace containing the math functions in the C++ API. \n\
                     </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledOddRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-295CD456-EE77-42A8-9299-BBAD74015508\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1ICENodeContext.html\">ICENodeContext</a> \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"GUID-EE2257C2-97B3-4461-BB4C-02E76E228435\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1ICENodeDef.html\">ICENodeDef</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F7B9356D-C075-4343-8C8E-F065571094A6\"></a></span><p class=\"table-body\">-- </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5E658823-6C32-4035-ABC7-98A99309E2D5\"></a></span><p class=\"table-body\">Custom <a href=\"#!/url=./si_om/ICENode.html\">ICENode</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1ICENode.html\">ICENode</a> plug-in objects. \n\
                     </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledEvenRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-42D0E176-0988-453F-ADB3-B310AA660BE0\"></a></span><p class=\"table-body\">-- </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2932BA05-4C71-4001-B244-3F1AC7504826\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/ParamDef.html\">ParamDef</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EEE43004-AD50-45BD-B975-C962F6D15BAA\"></a></span><p class=\"table-body\">Represents the definition of a parameter and is used in the creation of paramaters.\n\
                        \n\
                     </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledOddRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-11FD12B9-C3A5-41BD-8450-A147DE103A13\"></a></span><p class=\"table-body\">-- </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AA21BE33-7325-4CE1-B6C3-9191A6B26B20\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/PointCloudGeometry.html\">PointCloudGeometry</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-47A19FF0-E64C-45B8-8BB1-4CFC0DA504DD\"></a></span><p class=\"table-body\">Represents the geometry of a point cloud (for particle simulations). </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledEvenRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2D2AA02F-7F88-422B-9754-8C69A70E8219\"></a></span><p class=\"table-body\">-- </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3DFF6179-43DA-4B64-BBD0-8D157563305C\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/PPG.html\">PPG</a> (scripting only) \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-84C55A1F-8D35-42F4-A3E6-BAEAD9E70F22\"></a></span><p class=\"table-body\">Represents an instance of a Property Page in scripting. </p> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-28DF7601-A908-4389-BC18-AEA042533BCF\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-1F5F0241-245D-4761-BBB5-A58FAF92474D\"></a></span>This interface is not available in the C# language. \n\
                           </p> \n\
                        </div>\n\
                     </div> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledOddRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BB4173C1-B11B-42CF-A3D4-1DDECEC242C6\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1PPGEventContext.html\">PPGEventContext</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C6A3A094-96D5-429D-B78D-3E933DC71D37\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/PPGEventContext.html\">PPGEventContext</a> (C# only) \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B4E60971-92A7-4642-88CE-800BADB880C6\"></a></span><p class=\"table-body\">Allows access to event triggers on custom properties. </p> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-C9D25567-28BC-4425-AB9F-240F1E5AF682\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-1FBCF9A2-0490-49B9-B729-C3DC12330CD2\"></a></span>This interface is not available in scripting. \n\
                           </p> \n\
                        </div>\n\
                     </div> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledEvenRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9558EFBF-B537-48C1-B560-58643C0BDAD8\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1Project.html\">Project</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4083E93B-1D58-46DA-9110-CEC7FAD0F384\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/XSIProject.html\">XSIProject</a> \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"GUID-E13C76A3-ACF5-4D51-BCA2-CAF4A41D6B65\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Project.html\">Project</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AAFFF85E-3732-4C07-AD9F-CCC8B254A85E\"></a></span><p class=\"table-body\">Only Project is provided in the C++ API, which provides some (but not all) of the\n\
                        functionality of these two object model classes. \n\
                     </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledOddRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-816D165B-6DEC-4188-8EC4-2A7320F3BB4C\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1RendererContext.html\">RendererContext</a> \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"GUID-AB50F49D-9FE5-4BF8-A8EF-A3732269BD79\"></a></span><p class=\"table-body\"> RenderImageFragment </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0A9CFB61-23CB-4E48-9826-83C27EDA1744\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/RendererArchiveInfo.html\">RendererArchiveInfo</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FFD9B2F5-6631-48A4-87C1-EADC95CD2820\"></a></span><p class=\"table-body\">Support objects for Custom Renderer plug-in. </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledEvenRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-02B26E11-63AE-4177-8327-3FAD7CE4C68A\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1Rig.html\">Rig</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-CB16073E-4661-4CDE-AAC8-D620B95343BE\"></a></span><p class=\"table-body\">-- </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EDD70CFB-5145-4F1A-BCB2-456344F80A60\"></a></span><p class=\"table-body\">Base class for CameraRig and LightRig objects. </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledOddRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7371D122-D6EA-4B3D-86AD-95DC8D623106\"></a></span><p class=\"table-body\">-- </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-74AEC581-E55B-490F-8E42-633C99D43A3F\"></a></span><p class=\"table-body\">ShaderComment </p> <span class=\"anchor_wrapper\"><a name=\"GUID-01FFAF0E-BA40-4D45-B5D3-643CD840CF0B\"></a></span><p class=\"table-body\">ShaderCompound </p> <span class=\"anchor_wrapper\"><a name=\"GUID-503CEBF4-0E1F-407E-9397-4BDD7BB7AA25\"></a></span><p class=\"table-body\">ShaderCompoundParameter </p> <span class=\"anchor_wrapper\"><a name=\"GUID-80ED2886-B645-4FD2-8F65-16CC27FFE3CE\"></a></span><p class=\"table-body\">RenderTreeNode </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0A19D057-6A80-47C3-A51B-1BAB323BFE04\"></a></span><p class=\"table-body\">Object Model-only interfaces supporting the Custom Shaders APIs </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledEvenRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3D8C9733-8FC5-4ED8-B051-36737B0F8670\"></a></span><p class=\"table-body\">-- </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0536A278-8E31-4638-9CD8-38351FA3D306\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Shape.html\">Shape</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-03EF879F-89F3-4199-A2A6-30A80FB4C88B\"></a></span><p class=\"table-body\">Represents primitive types for particle rendering. </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledOddRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2ECF14AA-4C5E-4E27-92D4-BF148468C3A0\"></a></span><p class=\"table-body\">-- </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-270D1E5F-888C-4CD2-9261-5D28C8E4C59B\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/SpotLight.html\">SpotLight</a> (scripting only) \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-21072209-B127-4281-A263-7A2F21F8C9FF\"></a></span><p class=\"table-body\">Represents a Spot light object (but does not implement any unique methods or properties).\n\
                        \n\
                     </p> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-A36EC1DA-B663-435A-A497-3F90CF6EE120\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-53C8E1DB-D541-4D5C-ADDB-7CB7A67860BB\"></a></span>This interface is not available in the C# language. \n\
                           </p> \n\
                        </div>\n\
                     </div> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledEvenRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6D4D604E-B6B4-448C-B006-FDAB75774339\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1TriangleVertex.html\">TriangleVertex</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-11B638CE-FACD-4155-9F4A-EDB8FFB707B8\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/TrianglePoint.html\">TrianglePoint</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-970F5A50-DFFB-4A60-AC68-59F19DA82FC2\"></a></span><p class=\"table-body\">Represents a point on a Triangle object. </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledOddRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9B79314F-43AB-4922-8B9A-5F6CD22D916F\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1UIToolkit.html\">UIToolkit</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-98B481DC-FB98-48A0-BA30-FDE081CC6EC9\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/XSIUIToolkit.html\">XSIUIToolkit</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1B1CFA5A-248F-4D35-A5EA-A6E4ABD93A3F\"></a></span><p class=\"table-body\">Provides access to special user-interface utilities such as the FileBrowser and the\n\
                        MsgBox for both APIs. However, the object model also provides access to the <a href=\"#!/url=./si_om/ProgressBar.html\">ProgressBar</a> utility. \n\
                     </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledEvenRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-79762670-D8AC-4F88-BEFD-B4D25536A7CE\"></a></span><p class=\"table-body\">-- </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-89424A67-1A05-4057-98A7-84458482F153\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/UserDataItem.html\">UserDataItem</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-30FF47A8-25B3-434F-B281-ACA922A97F64\"></a></span><p class=\"table-body\">Convenience object for getting at individual components on a UserDataMap in the object\n\
                        model. Handled by UserDataMap.GetItemValue and UserDataMap.PutItemValue in the C++\n\
                        API. \n\
                     </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledOddRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-018B163A-9E32-4E1B-B832-BED29CC55142\"></a></span><p class=\"table-body\">-- </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9F785258-A351-4CB6-BD9C-72C0F1DB253C\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/XSIDialog.html\">XSIDialog</a> (scripting only) \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DBECC0F2-723C-4778-AA06-C7E139FB0EE1\"></a></span><p class=\"table-body\">Accesses a simple modal dialog contained a drop down list of strings. This functionality\n\
                        is also captured by the siControlCombo (drop-down list) control available with the\n\
                        PPGLayout class in both APIs. \n\
                     </p> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-896620AF-E770-47EC-AF20-940AE296F4D1\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-1DEDF496-2858-4550-B975-D0384DF3CA10\"></a></span>This interface is not available in the C# language. \n\
                           </p> \n\
                        </div>\n\
                     </div> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledEvenRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9BAD0CED-B12F-4710-8515-FCDD87591DA8\"></a></span><p class=\"table-body\">-- </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F4D852B1-9DCB-49E6-BD7F-48A2D142A485\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/XSIFileService.html\">XSIFileService</a> (scripting only) \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BBEC0AFF-1504-4D0A-9F56-E2AEE8175F55\"></a></span><p class=\"table-body\">Provides access to the conversion scripting tools, ImportDotXSI and ExportDotXSI.\n\
                        \n\
                     </p> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-916002EF-87C5-4221-8DBA-FCC9104387A4\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-FF919C48-7036-471F-8315-BC1A00655A82\"></a></span>This interface is not available in the C# language. \n\
                           </p> \n\
                        </div>\n\
                     </div> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledOddRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-44DEF8EB-998F-44ED-8DA7-D4D36D9D1A21\"></a></span><p class=\"table-body\"> XSILightAttributesUD </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-29329E06-5164-43D6-AC47-0798C5A0FFAC\"></a></span><p class=\"table-body\">-- </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4CB945B0-03A9-4611-AC90-642C1A0EEFEF\"></a></span><p class=\"table-body\">Mental Ray UserData struct for Light settings. </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledEvenRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5C1B07EB-342F-4345-90EA-744961477CF1\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CUtils.html\">CUtils</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E0EC7C5D-DB98-4FA9-8A8D-69169B34BF34\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/XSIUtils.html\">XSIUtils</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-75CF1E7F-38BC-4DD4-9A95-BC7DF4605CA0\"></a></span><p class=\"table-body\">Intrinsic object that provides general utility methods </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledOddRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1038A044-E674-4503-AE68-FC34E3E70AF8\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CRigidBodyAccessor.html\">CRigidBodyAccessor</a> \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"GUID-F05DF185-3CBF-4BC5-8086-31CF31F04067\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CRigidConstraintAccessor.html\">CRigidConstraintAccessor</a> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1F704B0E-C878-4AAC-8C27-83A3E7A96DB6\"></a></span><p class=\"table-body\">-- </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C4AEEA3C-5A06-41D5-9A92-1FAE1173339B\"></a></span><p class=\"table-body\">Provides optimized access to the data and property values of a rigid body dynamics\n\
                        or constraint object. \n\
                     </p> \n\
                  </td>\n\
               </tr>\n\
            </table>\n\
         </div>\n\
         <div><span class=\"anchor_wrapper\"><a name=\"GUID-ED07B652-4E1A-4969-B0DF-F52174681628\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-89C1F25D-F119-4ABA-8837-3F61EABE49A1\"></a></span>There is a difference between how flattened contol point arrays order UVs between\n\
                  the object model and the C++ API. For more information, see <a href=\"#!/url=./files/cpp_understand_UV_Ordering.htm\">UV Ordering</a>. \n\
               </p> \n\
            </div>\n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD71C824707591D4F8003D9E88CF4A117-0014\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-FC07F2AA-6E89-469C-AA96-8E4B1A7C9EE4\"></a></span> OM Collections vs. C++ API Arrays\n\
            </h2>  \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-B3A57E76-DCAA-4530-8607-6001E04EF4B3\"></a></span>For the most part, wherever the object model uses collection objects, the C++ API\n\
               uses a <a href=\"#!/url=./si_cpp/classXSI_1_1CRefArray.html\">CRefArray</a>. However, there are some cases where the C++ API uses specialized arrays. The following\n\
               table indicates where these similarities occur: \n\
            </p> <span class=\"anchor_wrapper\"><a name=\"TABLE_B7FE16D1208C4F408BFE4357655B682F\"></a></span><div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col width=\"50%\" align=\"left\" />\n\
                     <col width=\"50%\" align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BBB12878-7078-4DCC-B590-D94BF02C3A07\"></a></span><p class=\"table-heading\">C++ API </p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-12C5F150-78ED-457B-80FC-8251A8E308D8\"></a></span><p class=\"table-heading\">Softimage Object Model </p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-028E034B-0692-49D0-BF3B-F0F742ABFD9B\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1ArgumentArray.html\">ArgumentArray</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-66933AAD-5987-4756-94FD-D95128DFD341\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/ArgumentCollection.html\">ArgumentCollection</a> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-857FA8F6-E1B9-4E42-BB53-56E8CC6035E2\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CClusterElementArray.html\">CClusterElementArray</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A811754F-8E0D-4B5B-8839-AB9ECA59CFE9\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/ClusterElementCollection.html\">ClusterElementCollection</a> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-CFC70B14-19AA-45FC-BB13-4214BC44EF20\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CClusterPropertyElementArray.html\">CClusterPropertyElementArray</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A656CF7E-4D72-4059-BA82-2AEE2BC7B2BD\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/ClusterPropertyCollection.html\">ClusterPropertyCollection</a> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5628E9F2-7663-471C-95DB-54DA86511EE6\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CControlPointRefArray.html\">CControlPointRefArray</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AD65FABC-A98A-4A83-AB92-ADBBFFDDF0DA\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/ControlPointCollection.html\">ControlPointCollection</a> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-94899B31-60FD-4382-8094-0CA2AC557093\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CEdgeRefArray.html\">CEdgeRefArray</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D7E822E2-BDDF-4240-AA24-586439E19AD1\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/EdgeCollection.html\">EdgeCollection</a> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A8207C96-D313-4314-8017-134BAAD13366\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CFacetRefArray.html\">CFacetRefArray</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-921421E8-8C29-485B-89FF-11078CD64849\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/FacetCollection.html\">FacetCollection</a> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9013D34E-1157-4207-B8D9-34864F9576FE\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CFCurveKeyRefArray.html\">CFCurveKeyRefArray</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-09F9ED79-68DF-41AB-8941-626F4A4D26C1\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/FCurveKeyCollection.html\">FCurveKeyCollection</a> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-636577CD-2B3F-434D-BB82-F5816DFBDD2E\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CKnotArray.html\">CKnotArray</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E33F5E29-2758-4EA8-B479-9A2B94357A73\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/KnotCollection.html\">KnotCollection</a> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8F90AB47-B7E7-40C6-A051-13C5879841F9\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CNurbsCurveRefArray.html\">CNurbsCurveRefArray</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3400FED5-84C9-44AF-940B-3A6F463ED90B\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/NurbsCurveCollection.html\">NurbsCurveCollection</a> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EE007651-447B-4B40-9406-B5EF7D455617\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CNurbsSampleRefArray.html\">CNurbsSampleRefArray</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B78D62BA-019A-49B7-831E-E1E7CE863554\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/NurbsSampleCollection.html\">NurbsSampleCollection</a> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5ED77A5E-B33E-42D3-92DD-BCC5D16D3750\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CNurbsSurfaceRefArray.html\">CNurbsSurfaceRefArray</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7FB1904E-A417-48AF-A704-AE4833911605\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/NurbsSurfaceCollection.html\">NurbsSurfaceCollection</a> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-CE4C3D23-F008-4E86-95BF-3B56D18D6AE7\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CommandArray.html\">CommandArray</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-18D1775C-0930-4956-97F7-127AFDDDCFC5\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/CommandCollection.html\">CommandCollection</a> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A1B09901-5DB1-4979-ABAE-B3C9AC4129A9\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CParameterRefArray.html\">CParameterRefArray</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-54654422-907A-4141-843C-8DDAE8F7ED98\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/ParameterCollection.html\">ParameterCollection</a> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-960BE463-9FF0-4AEA-B98D-8A6D1008F722\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CPointRefArray.html\">CPointRefArray</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-74ED325E-C3E2-4C8D-B78E-843698823149\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/PointCollection.html\">PointCollection</a> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-66083A44-7DF7-4718-860E-4A588EFA500E\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CPolygonFaceRefArray.html\">CPolygonFaceRefArray</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C4FE44FB-BE35-4D16-AFFC-1E61ECC1C3BA\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/PolygonFaceCollection.html\">PolygonFaceCollection</a> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F47E5811-138D-4A06-983F-5A8825682BB0\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CPolygonNodeRefArray.html\">CPolygonNodeRefArray</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-16182683-82D5-4E59-A1D0-7D6397999493\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/PolygonNodeCollection.html\">PolygonNodeCollection</a> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6E348D17-CBD6-4296-91EA-F31ADAF0309D\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CSampleRefArray.html\">CSampleRefArray</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-74024F52-92E0-4F20-A188-B4C34C1097D0\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/SampleCollection.html\">SampleCollection</a> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-75D0D109-DFC3-44A2-B1AF-08CE22866CC9\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CSegmentRefArray.html\">CSegmentRefArray</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-41715316-5647-4902-A12B-D41168AA3F73\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/SegmentCollection.html\">SegmentCollection</a> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-14DDE10D-0FD9-44A3-93FF-F8BA5D71A0F2\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CTriangleRefArray.html\">CTriangleRefArray</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-04A3D62B-A4D5-429C-ABC2-DD4791426FEC\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/TriangleCollection.html\">TriangleCollection</a> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F0706220-3469-4F77-9BD5-2D3E074C9893\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CTriangleVertexRefArray.html\">CTriangleVertexRefArray</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DF1899A7-6830-4674-B999-A1284DC6ACF0\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/TrianglePointCollection.html\">TrianglePointCollection</a> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D83AD4F6-DF30-4585-95E7-ECB4062162C4\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1CVertexRefArray.html\">CVertexRefArray</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-00F2D0BB-9066-43BD-BC7E-C91D1C80B608\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/VertexCollection.html\">VertexCollection</a> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div> \n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-39383790-E85D-489F-BC37-1E084E0BBD8C\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-9F107D0E-FB1D-403F-8736-9E3CD92ABA60\"></a></span>These specialized C++ API arrays are returned by various C++ functions, they are not\n\
                     meant to be created and modified in user-defined functions. If you want to add and\n\
                     remove arbitrary items to a collection, you must use a <a href=\"#!/url=./si_cpp/classXSI_1_1CRefArray.html\">CRefArray</a> instead of one of these specialized arrays. For example, to build a list of parameters\n\
                     use a CRefArray containing references to <a href=\"#!/url=./si_cpp/classXSI_1_1Parameter.html\">Parameter</a> objects, not a <a href=\"#!/url=./si_cpp/classXSI_1_1CParameterRefArray.html\">CParameterRefArray</a>. \n\
                  </p> \n\
               </div>\n\
            </div> \n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";