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
      <meta name=\"topicid\" content=\"GUID-B726834C-6F38-4A3F-9DA4-7471C49739BF\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Packaging Your Custom Menu</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-B726834C-6F38-4A3F-9DA4-7471C49739BF\"></a></span><div class=\"head\">\n\
            <h1>Packaging Your Custom Menu</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-C23CB764-0960-41BF-A91F-535E9444FCC3\"></a></span>To share the menu with others, you can deliver the plug-in in the following ways:\n\
               \n\
            </p><span class=\"anchor_wrapper\"><a name=\"UL_BC543099AE6843338E05521EB0FB9F48\"></a></span><ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-038661A9-ED4C-4F07-A0A1-A92DB42C343E\"></a></span>You can just drop it in the <span class=\"filePath\" translate=\"no\">Application/Plugins</span> directory under the user, factory or workgroup path. If you are providing a help\n\
                     file with the menu, make sure that it is included in the <span class=\"filePath\" translate=\"no\">doc</span> subfolder. \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-E36E6D0A-FD46-48C3-A9ED-0B66B7001630\"></a></span>You can also package it with any support files (such as a help file) in an <span class=\"filePath\" translate=\"no\">*.xsiaddon</span> file for deployment. Along with the library or script file containing the implementation\n\
                     of the custom menu, you might also want to include any of these files: \n\
                  </p> \n\
               </li>\n\
            </ul><span class=\"anchor_wrapper\"><a name=\"TABLE_2C2E023C8EDD4C4787C18F00FBAE2C46\"></a></span><div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col width=\"33.33333333333333%\" align=\"left\" />\n\
                     <col width=\"66.66666666666666%\" align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-364729BE-9CC6-44A5-9EA8-6911DDC212F2\"></a></span><p class=\"table-heading\">File Type </p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7A2EE004-7479-4D76-A5EF-9457739C740E\"></a></span><p class=\"table-heading\">Description </p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E6A0EB59-D69D-4079-BA54-0BD1C8D0FE7D\"></a></span><p class=\"table-body\">*.dll/so file or *.vbs/js/pls/py </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A01AC908-2FFA-409D-9EE4-F0CEB75C2062\"></a></span><p class=\"table-body\">Any support files (for example, extra libraries) that your custom menu callbacks might\n\
                           need to call while running. \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FD5D5DF7-D04B-4676-B5D9-EC7AECE7ADB3\"></a></span><p class=\"table-body\">*.spdl file and/or *.preset file </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-465250E7-F315-4D43-8152-FE937BD9F8DF\"></a></span><p class=\"table-body\">If you call a dialog or any custom property page in your script that must remain in\n\
                           the scene, you need to provide a SPDL file with the definition and a preset file to\n\
                           create the dialog, or a self-installing custom property. \n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"GUID-E76DE047-83EA-4EA4-AA4C-70FA49861DA0\"></a></span><p class=\"table-body\">For more information on self-installing properties, see <a href=\"#!/url=./files/cus_ppg.htm\">Custom Properties</a>. \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0386D203-F5FF-4C13-B647-350C14673AB8\"></a></span><p class=\"table-body\">*.html/htm/chm/hlp (or ReadMe.txt file) </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-32E4BDE6-5E28-4814-B57E-6D852826AE1D\"></a></span><p class=\"table-body\">If you provide a help page (or site) that explains the usage of your menu, you must\n\
                           package it with the rest of your menu. \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0A9DAE58-ADC8-4570-A6A8-8C623F5CEFA8\"></a></span><p class=\"table-body\">*.jpg/gif/bmp/ico </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7360FF10-B451-45BD-BA81-B19214D78019\"></a></span><p class=\"table-body\">Any image files that is required for your dialogs or your help pages. </p> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";