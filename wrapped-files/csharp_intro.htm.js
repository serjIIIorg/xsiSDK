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
      <meta name=\"topicid\" content=\"GUID-9C3CD130-4014-4DF5-9282-003B4D4C3D0A\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Using C# with Softimage</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-9C3CD130-4014-4DF5-9282-003B4D4C3D0A\"></a></span><div class=\"head\">\n\
            <h1>Using C# with Softimage</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-7F2AFCBC-5695-42A7-B95C-109A061F5B7A\"></a></span>C# (pronounced <em class=\"mild\">C sharp</em>) is a simple, type-safe programming language that represents a hybrid between C++\n\
            and scripting languages. Plug-ins written in C# are much faster than the scripted\n\
            plug-ins. \n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-13C065A0-8554-4A45-AF2F-61B96E3F232E\"></a></span>The Microsoft Developer\'s Network (MSDN) has technical specifications, C# reference,\n\
            and overview documentation about the C# language. In addition, MSDN offers a C# FAQ\n\
            and Microsoft\'s GotDotNet provides a number of QuickStart tutorials. \n\
         </p>\n\
         <div><span class=\"anchor_wrapper\"><a name=\"GUID-F578683C-DCBA-4519-B3EA-2038DA7732E1\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span>If you do not have Visual Studio, you can use Visual C# Express, a free version that\n\
               comes with full C# doc and a debugger. \n\
            </div>\n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS59D56D909664094BB09F857E55EF477D-0004\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-E2A9D67D-2325-42B3-A763-6BA32CFCE896\"></a></span>How C# Works with Softimage\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-6C26D2ED-3C4E-46E2-B736-B3F9C94C8E98\"></a></span>The <em class=\"mild\">Assembly</em> is the primary unit of deployment within the .NET Framework. It is similar to a C++\n\
               .dll or .so file and can contain references to other assemblies and modules. \n\
            </p> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-445BB114-82B2-4167-AD5F-84CDEE296EF0\"></a></span>The Softimage Object Model type library is ported to a C# assembly, which allows developers\n\
               to access the Softimage SDK using C#. The entire object model is accessible, except\n\
               for a few interfaces as follows: \n\
            </p> <span class=\"anchor_wrapper\"><a name=\"UL_F2E75674840843FF83610F2F64D1EAA4\"></a></span><ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-A241014F-33C9-4B55-A10C-21F1EEB03DB4\"></a></span>Obsolete Interfaces – <a href=\"#!/url=./si_om/XSIDialog.html\">XSIDialog</a>, <a href=\"#!/url=./si_om/Cluster_V1.html\">Cluster_V1</a>, <a href=\"#!/url=./si_om/ClusterProperty_V1.html\">ClusterProperty_V1</a>, <a href=\"#!/url=./si_om/Geometry_V1.html\">Geometry_V1</a>, <a href=\"#!/url=./si_om/Geometry0D.html\">Geometry0D</a>, <a href=\"#!/url=./si_om/Geometry1D.html\">Geometry1D</a>, and <a href=\"#!/url=./si_om/Geometry2D.html\">Geometry2D</a> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-98428D9C-46A0-4B94-B772-DAC775009452\"></a></span>Empty Interfaces – <a href=\"#!/url=./si_om/AlignedAxisConstraint.html\">AlignedAxisConstraint</a> and <a href=\"#!/url=./si_om/SpotLight.html\">SpotLight</a> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-463A4F59-849F-41DC-A1B8-0078F2A609F4\"></a></span> <a href=\"#!/url=./si_om/PPG.html\">PPG</a> (handled by the class for C#) and <a href=\"#!/url=./si_om/XSIFileService.html\">XSIFileService</a> (import/export services) \n\
                  </p> \n\
                  <div><span class=\"anchor_wrapper\"><a name=\"GUID-079F0183-6344-4F6D-9703-AB347FE13F8B\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span>You can familiarize the Softimage Object Model for C# using Visual Studio features\n\
                        such as the ObjectBrowser and autocomplete function. You can use ObjectBrowser to\n\
                        browse through the Softimage object model typelib. The autocomplete function provides\n\
                        a list of available objects and their members as you type your source code. \n\
                     </div>\n\
                  </div> \n\
               </li>\n\
            </ul> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS59D56D909664094BB09F857E55EF477D-0005\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-ACB1A265-8B42-4E36-83CA-8AF0E2BB83CC\"></a></span>How C# Plug-ins Work with Softimage\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-7DE6DF4C-76D0-446A-9EDE-F7A40912E255\"></a></span>Instead of functions exported from a .dll, C# plug-in items are implemented as C#\n\
               objects. You can create a plug-in object that implements <em class=\"mild\">public</em> methods matching the plug-in item callbacks. You must make sure to include the <span class=\"code\" translate=\"no\">XSIOM</span> (object model) assembly and then create a base object that registers the plug-in\n\
               in Softimage. For more information, see <a href=\"#!/url=./files/csharp_understand_BuildingXSIPluginswithCSharp.htm\">Building Softimage Plug-ins with C#</a>. \n\
            </p> \n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";