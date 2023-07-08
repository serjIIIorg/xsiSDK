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
      <meta name=\"topicid\" content=\"GUID-6E983D95-FAEF-4C8D-A9D9-09F0C6BC125B\" />\n\
      <meta name=\"indexterm\" content=\"custom properties: underlying property sets\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Defining a Custom Property</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-6E983D95-FAEF-4C8D-A9D9-09F0C6BC125B\"></a></span><div class=\"head\">\n\
            <h1>Defining a Custom Property</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-94C95542-8C59-4059-B607-B15A2E6780EC\"></a></span>In order to build your property page you first need to create a custom property set\n\
               with a set of parameters that can correpond to the controls you want to use. For example,\n\
               if you want to create a dialog that presents the user with one (RGB) color control\n\
               and two text boxes, you must create five parameters in all: three double floating-point\n\
               parameters and two string parameters.\n\
            </p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-F9656E74-BA55-4E9C-8F3D-56AF52059CAC\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-9E82E080-D22E-4026-B955-0252817ED6EC\"></a></span>You can create extra parameters on your custom property set without displaying them\n\
                     on the final property page. Hidden parameters can be useful for storing information\n\
                     not available to the user and that do not have to be persisted in the scene.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-7CD0F773-9A94-420E-A370-FD0201BC98CA\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-81117C33-2AE9-445B-9CEE-465CE509B479\"></a></span>You can also change the parameters on your custom property dynamically. For more information,\n\
                     see <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_DynamicallyChangingCustomProperties.htm\">Dynamically Changing Custom Properties</a></span>.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS34BA39B437A993419C80CAB58E3BEFA1-000F\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-67A61226-37F5-46A9-837A-586A0F9353EB\"></a></span> To create an underlying property set\n\
               </h2>  <span class=\"anchor_wrapper\"><a name=\"GUID-39A77799-285F-4417-80D2-9EE424187582\"></a></span><ol type=\"1\" start=\"1\">\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-A651E703-25E4-48B0-B9BD-5D13D4345395\"></a></span>Depending on how you are creating the custom property, you start with getting a pointer\n\
                        to the <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1CustomProperty.html\">CustomProperty</a> object:\n\
                     </p> \n\
                     <ul>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-BBF2FBE6-BDDF-411C-934E-3358C48B5EB2\"></a></span>For creating properties on-the-fly, use <a href=\"#!/url=./si_om/SceneItem.AddCustomProperty.html\">SceneItem.AddCustomProperty</a> or SceneItem::AddCustomProperty to create an empty custom property set. You can use\n\
                              any scene node that supports properties as an owner (such as clusters, 3D objects,\n\
                              models, etc.).\n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-E1E94A7D-9DDF-441D-A114-40EF615BABDF\"></a></span>For self-installing properties, you can get a pointer to the CustomProperty object\n\
                              from the <a href=\"#!/url=./si_om/Context.Source.html\">Context.Source</a> or Context::GetSource property inside the <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_PropertyCallbacks.htm#WS34BA39B437A993419C80CAB58E3BEFA1-0022\">Define</a></span> callback:\n\
                           </p> \n\
                        </li>\n\
                     </ul> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// JScript\n\
function MyCPSet_Define( in_context ) {\n\
	var oCusProp = in_context.Source;\n\
	// ...\n\
}\n\
\n\
// C++\n\
CStatus MyCPSet_Define( CRef&amp; in_context ) {\n\
	Context ctxt(in_context);\n\
	CustomProperty cus_prop(ctxt.GetSource());\n\
}\n\
</pre></div> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-4CACA496-48F8-400E-B96F-9F0F8366E9E8\"></a></span>Use <a href=\"#!/url=./si_om/CustomProperty.AddParameter3.html\">CustomProperty.AddParameter3</a> or CustomProperty::AddParameter for each simple control you want to define or hidden\n\
                        parameter you want to create.\n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-29FD5C2A-68C5-4FA4-93EB-3B4CAF04EED7\"></a></span>Color controls are more complex: for each channel (RGB/RGBA), you need to create one\n\
                        parameter.\n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-18B23AC9-90BB-41A8-B747-FFE1A77D886E\"></a></span>For fcurve widgets, use <a href=\"#!/url=./si_om/CustomProperty.AddFCurveParameter.html\">CustomProperty.AddFCurveParameter</a> or CustomProperty::AddFCurveParameter.\n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-AD08C440-32DF-4E24-ACFE-6E2CB024E26C\"></a></span>for grid data widgets, use <a href=\"#!/url=./si_om/CustomProperty.AddGridParameter.html\">CustomProperty.AddGridParameter</a> or CustomProperty::AddGridParameter.\n\
                     </p> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-CE7C211E-37B0-458E-BDA9-2279C9BD0078\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-1E8498C1-268E-489B-8C65-2A6B1560EC1F\"></a></span>For C# or scripting, <a href=\"#!/url=./si_om/CustomProperty.AddParameter3.html\">CustomProperty.AddParameter3</a> is the recommended version for creating property sets because it is JScript-compliant\n\
                              (like <a href=\"#!/url=./si_om/CustomProperty.AddParameter2.html\">CustomProperty.AddParameter2</a>) and has been simplied from the original (<a href=\"#!/url=./si_om/CustomProperty.AddParameter.html\">CustomProperty.AddParameter</a>). However, you should use one of these two versions if the parameter needs a UI range,\n\
                              specific classification flags, or a user name.\n\
                           </p> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-F21521B2-07A3-4DAD-B9CE-8B1AE786D913\"></a></span>For the C++ API, there are two flavours of the <a href=\"#!/url=./si_cpp/classXSI_1_1CustomProperty.html#AddParameter\">CustomProperty::AddParameter</a> function, one simplified and another that allows you to specify UI ranges. Both provide\n\
                              arguments to specify classification flags and user names.\n\
                           </p> \n\
                        </div>\n\
                     </div> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-DB6F927A-164D-4330-B9D7-D5AAB718EA84\"></a></span>Define the layout for the property set by getting the <a href=\"#!/url=./si_om/PPGLayout.html\">PPGLayout</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1PPGLayout.html\">PPGLayout</a> object from the <a href=\"#!/url=./si_om/PPG.PPGLayout.html\">PPG.PPGLayout</a> or ProjectItem::GetPPGLayout, which you can then use to:\n\
                     </p> \n\
                     <ul>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-12613177-4A6D-45FB-892C-E028DE898DD2\"></a></span>Add controls to your property page—<span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_PropertyPageControls.htm\">Property Page Controls</a></span>.\n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-A5667E29-EAF6-4614-9401-7565A616E756\"></a></span>Add the logic to drive the property page controls and process the data on your property\n\
                              set—<span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_PropertyCallbacks.htm\">Property Callbacks</a></span>.\n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-1639D273-0E75-459E-A251-C6433CD3B6D4\"></a></span>Assign help files to your property page—<span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_ProvidingHelpFiles.htm\">Providing Help Files</a></span>.\n\
                           </p> \n\
                        </li>\n\
                     </ul> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-970DA44E-5AE9-4AA9-9868-C3392B0374AA\"></a></span>If you want to make this CustomProperty a self-installing plug-in (so you can reuse\n\
                        it), you also need to specify certain callbacks. For more information, see <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_PropertyCallbacks.htm\">Property Callbacks</a></span>.\n\
                     </p> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-4CEDB9FC-1F83-470A-BFF6-34D505B95541\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-5CB6F595-8A61-4543-AF7D-4FE1DF11955F\"></a></span>It is possible to create and register a SPDL (and optionally, a preset) from a scripted\n\
                              <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> definition in the scene using <a href=\"#!/url=./si_om/XSIUtils.WriteSPDL.html\">XSIUtils.WriteSPDL</a> and then <a href=\"#!/url=./si_om/XSIUtils.RegisterSPDL.html\">XSIUtils.RegisterSPDL</a>. However, this is not recommended, since using these methods are low-level and can\n\
                              potentially damage your Softimage installation.\n\
                           </p> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-2FED239C-14B8-4FC6-835E-B187B16C635D\"></a></span>In addition, there is no advantage to creating extra SPDL files when the self-installing\n\
                              CustomProperty performs the same function.\n\
                           </p> \n\
                        </div>\n\
                     </div> \n\
                  </li>\n\
               </ol> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";