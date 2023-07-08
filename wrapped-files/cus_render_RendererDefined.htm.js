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
      <meta name=\"topicid\" content=\"GUID-48BD743F-5F02-40E2-A652-06EE6D45020F\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>What is a Custom Renderer?</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-48BD743F-5F02-40E2-A652-06EE6D45020F\"></a></span><div class=\"head\">\n\
            <h1>What is a Custom Renderer?</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-23D66421-0B4A-4EB9-8100-B5594E5055AB\"></a></span>A rendering engine is a mechanism that provides rendering processes to Softimage.\n\
            Custom (3rd party) rendering engines work within the same framework as the built-in\n\
            rendering engines, mental ray and hardware rendering. This implies that just like\n\
            mental ray and hardware rendering, these custom rendering engines are available for\n\
            pass rendering, region rendering and shaderballs.\n\
         </p>\n\
         <div><span class=\"anchor_wrapper\"><a name=\"GUID-FAE10E0C-07B4-4CB5-9AB8-A72CE133DCAF\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-42832904-0058-4FFD-B844-92A4EEB599BB\"></a></span>For performance reasons, this API is only available via the C++ API.\n\
               </p> \n\
            </div>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-48A1EB6A-DD67-4389-B72D-A0540B36F39C\"></a></span>Currently two process types are recognized:\n\
         </p>\n\
         <ul>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-2ACC9CC0-098D-41DA-BAF4-954824A87DFE\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_render_RenderingImages.htm\">Rendering Images</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-E102B1CE-6623-4A02-9809-46DB169421B7\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_render_ExportingArchives.htm\">Exporting Archives</a></span> \n\
               </p> \n\
            </li>\n\
         </ul>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-B3455FD9-81A7-4F3D-84F8-064AD1A00009\"></a></span>Each process operates on a single frame only, although it can generate output for\n\
            one or more sub-frames when doing interlacing or motion blur. All the processes are\n\
            performed through the common <a href=\"#!/url=./si_cmds/cb_Renderer_Process.html\">Process</a> callback.\n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-06CD8726-B1E2-4014-92F2-5CB0F60B49F2\"></a></span>Softimage provides a common set of options that each rendering engine can take advantage\n\
            of and it is recommended that they implement all of them. Those options are passed\n\
            in as <a href=\"#!/url=./si_cmds/cb_Renderer_Process.html#ContextAttributes\">rendercontext attributes</a>.\n\
         </p>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS9F2DCEBA1052E242B9100CE478070AD9-0004\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-09CA8768-21E5-424B-B248-6E60AA27082B\"></a></span>Mandatory Callbacks\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-19CFE4F7-73E0-4121-88CF-6B54B18905D0\"></a></span>The rendering engine plug-in needs to provide three callbacks:\n\
            </p> \n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-EFCF6E1D-8606-42E7-B23A-DEBBBD533670\"></a></span> <a href=\"#!/url=./si_cmds/cb_Renderer_Init.html\">Init</a> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-0D7E72D2-B7E4-4AEA-8C8C-B6328F7252C4\"></a></span> <a href=\"#!/url=./si_cmds/cb_Renderer_Process.html\">Process</a> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-47AFC948-3A79-46AF-88D7-6A14B83C8A10\"></a></span> <a href=\"#!/url=./si_cmds/cb_Renderer_Abort.html\">Abort</a> \n\
                  </p> \n\
               </li>\n\
            </ul> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-C828C9AC-9962-4AF3-B9EB-198DBEC142F6\"></a></span>The <a href=\"#!/url=./si_cmds/cb_Renderer_Init.html\">Init</a> callback tells Softimage which process types the rendering engine supports, which\n\
               custom property to use for the renderer options, and which image file formats it can\n\
               output.\n\
            </p> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-BD70CBF8-0DFC-44D9-B2FC-C91FD466582B\"></a></span>The <a href=\"#!/url=./si_cmds/cb_Renderer_Abort.html\">Abort</a> callback is an asynchronous callback that is used by the render manager to abort\n\
               a render. It is extremely important that this call does not perform any processing\n\
               or refer to any scene elements itself. Its only purpose is it to indicate to the already\n\
               running <a href=\"#!/url=./si_cmds/cb_Renderer_Process.html\">Process</a> callback that the render should be aborted as quickly as is possible.\n\
            </p> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS9F2DCEBA1052E242B9100CE478070AD9-0005\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-322430A1-2EB0-4CF1-8950-54B6E8F798DD\"></a></span>Optional Callbacks\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-E7011EC1-FC3C-4252-BE03-CC0AE58CD09B\"></a></span>There are three other rendering engine-specific callbacks that the rendering engine\n\
               can implement, if it wishes:\n\
            </p> \n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-7AC2AD0F-A773-4CB9-BFA1-A2805D82DAE8\"></a></span> <a href=\"#!/url=./si_cmds/cb_Renderer_Quality.html\">Quality</a> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-716FDE51-4AE9-40AE-B3DC-7AB0F5D83EC7\"></a></span> <a href=\"#!/url=./si_cmds/cb_Renderer_Query.html\">Query</a> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-2CA094BD-1AEB-4C92-8134-D9CE89C19163\"></a></span> <a href=\"#!/url=./si_cmds/cb_Renderer_Cleanup.html\">Cleanup</a> \n\
                  </p> \n\
               </li>\n\
            </ul> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-D3BD6242-70BC-426E-9DD0-5CE2D91E4D5D\"></a></span>The <a href=\"#!/url=./si_cmds/cb_Renderer_Quality.html\">Quality</a> callback serves two purposes: first, to set a certain quality level preset on existing\n\
               render options; and second, to return a measure of a quality level of the same. The\n\
               quality levels are currently used by the render region to quickly dial levels from\n\
               draft to super-fine.\n\
            </p> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-8F792DF5-EC01-469F-B6EC-F473A26F9C6A\"></a></span>The <a href=\"#!/url=./si_cmds/cb_Renderer_Query.html\">Query</a> callback is used by the render manager to query the rendering engine for information\n\
               based on the <a href=\"#!/url=./si_om/siRenderQueryType.html\">siRenderQueryType</a> enumeration value given in the <span class=\"code\" translate=\"no\">QueryType</span> attribute.\n\
            </p> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-1F8BBF9F-5D43-4C12-8113-7BE4BC19A901\"></a></span>The <a href=\"#!/url=./si_cmds/cb_Renderer_Cleanup.html\">Cleanup</a> callback is used by the render manager to instruct the rendering engine to clean\n\
               up all data created by it by previous <a href=\"#!/url=./si_cmds/cb_Renderer_Process.html\">Process</a> callback. The two callbacks are guaranteed to always be called one after the other,\n\
               never at the same time.\n\
            </p> \n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-44A4106B-7EC5-44DD-891D-6705D4F80F87\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-9601174C-075B-46E5-9806-D2179F6E21A6\"></a></span>The rendering plug-in is a singleton, meaning that there is only one copy of the rendering\n\
                     plug-in running throughout the duration of a Softimage session. This means that the\n\
                     plug-in is safe to use global variables and link with single-instance rendering engines.\n\
                  </p> \n\
               </div>\n\
            </div> \n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";