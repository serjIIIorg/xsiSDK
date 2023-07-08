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
      <meta name=\"topicid\" content=\"GUID-A531A20E-0673-4799-9951-D454238DC03C\" />\n\
      <meta name=\"indexterm\" content=\"Leg (character development kit)\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Leg</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"Envelope\", \"si_cpp/classXSI_1_1Envelope.html\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-A531A20E-0673-4799-9951-D454238DC03C\"></a></span><div class=\"head\">\n\
            <h1> Leg</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-8FC8EA0D-5E73-46B7-AD6C-5E06B9228B48\"></a></span>The <em class=\"strong\">Leg</em> object can also be accessed through the <span class=\"code\" translate=\"no\">RLeg</span> and <span class=\"code\" translate=\"no\">LLeg</span> properties of the <span class=\"char_link\"><a href=\"#!/url=./files/CDKBiped.htm\">Biped</a></span> and <span class=\"char_link\"><a href=\"#!/url=./files/Quadruped.htm\">Quadruped</a></span> objects.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-0095\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-AD54FCF9-9898-48A9-9E13-5EF1A8C40C81\"></a></span>Returned by\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-19514EC3-6434-4B7B-8812-0B58CFE08007\"></a></span> <a href=\"#!/url=./si_cmds/MakeLeg.html\">MakeLeg</a> \n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-0096\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-5EE7A1A3-4F1A-4ED1-BD21-8E7CE02881C9\"></a></span>Also available via\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-6BFFDB53-BA95-4C66-ACB7-E61962499706\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/CDKBiped.htm#WS59CC1705BE42794BBCB80457F107A6E8-004D\">Biped.RLeg</a></span> \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-85703873-E38C-421A-92A4-03A3FA51AC23\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/CDKBiped.htm#WS59CC1705BE42794BBCB80457F107A6E8-0056\">Biped.LLeg</a></span> \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-58F1FDFB-AF43-410A-A414-D05B2CAA45E8\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/Quadruped.htm#WS59CC1705BE42794BBCB80457F107A6E8-0067\">Quadruped.RLeg</a></span> \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-B28A6E7D-2919-4CF4-91BA-03A76AC1A150\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/Quadruped.htm#WS59CC1705BE42794BBCB80457F107A6E8-006A\">Quadruped.LLeg</a></span> \n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-0097\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-7BBADC7A-B4BC-4F8B-91B0-C4D84CD20A90\"></a></span>Properties\n\
               </h2> \n\
               <div class=\"table_Ruled\">\n\
                  <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                     <colgroup>\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                     </colgroup>\n\
                     <tr class=\"ruledHeading\">\n\
                        <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-ADE00E02-2029-4510-A889-CD7AA142453D\"></a></span><p class=\"table-heading\">Property Name</p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F1BEE91D-2FE1-4EBA-8F07-7A4614B0BF8A\"></a></span><p class=\"table-heading\">Type</p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D5175DB0-A80B-465E-A201-DCEA0D2422E5\"></a></span><p class=\"table-heading\">Description</p> \n\
                        </th>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4BF776F8-BC18-4A8F-9255-28639A82CA9C\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">Root</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-37086E46-25CC-4353-AB43-D70A572A13EA\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/ChainRoot.html\">ChainRoot</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DD470D44-4097-4881-924C-9D4D1921B376\"></a></span><p class=\"table-body\">the root of the leg</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-333116E6-F71E-42A8-8C76-15D4237D1EDA\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">Eff</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A301A633-B8CD-461C-B7E3-3F3A9C69B51E\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/ChainEffector.html\">ChainEffector</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BB5C0551-C6AB-4A05-9850-F317AB67656A\"></a></span><p class=\"table-body\">the effector</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3737182F-C738-40CB-94B8-3E2908B1EFD2\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">Skel</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-15383E7D-D742-4327-BD17-C1C00F532261\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-42FBB3BB-0E65-4C61-8F8F-6B3774BDC796\"></a></span><p class=\"table-body\">a skeleton collection of arm chain elements</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-0098\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">ThighRoll</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7F36CD6B-525F-44BA-AB77-A71C0716FABD\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/CDKBicepRoll.htm\">BicepRoll</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-905F5DA7-9BAC-4C80-B1D5-63DB51D1CDAA\"></a></span><p class=\"table-body\">the thigh roll object, applied on the thighbone</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-020FC813-B49B-42A7-A886-BA85298A1D62\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">Hidden</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AC72C983-F3E6-43FC-AC1F-EAF7F1A7396F\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BD000CA9-F13D-470D-BB08-68C8F8A4CEDB\"></a></span><p class=\"table-body\">a collection of Hidden object</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BFD9F1A7-EE09-4547-8C87-7984BD08102E\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"Envelope\" class=\"a_multireflink\">Envelope</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-52FBCAC3-581B-46E1-B89A-13309043F8F9\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2D1BC833-16F3-4896-B538-765E235CE8A6\"></a></span><p class=\"table-body\">a collection of objects to be Enveloped</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FDA8EE99-4622-4F71-B257-D28C6C3BA7DB\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">Leg.Shadows</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-57F5F543-F46F-4CE9-AB35-BAE666A69DA3\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B4356EE7-7820-4668-89B0-3D902B7FBB4E\"></a></span><p class=\"table-body\">a collection of box shadows</p> \n\
                        </td>\n\
                     </tr>\n\
                  </table>\n\
               </div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-C6DB9206-81FC-412A-A2A2-508CEB2CCE1F\"></a></span>See <span class=\"char_link\"><a href=\"#!/url=./files/cdkref.htm\">CDK Object Reference</a></span> for complete list of objects available in the Character Development Kit.\n\
               </p> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";