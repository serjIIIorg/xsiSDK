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
      <meta name=\"topicid\" content=\"GUID-FE2FF3E0-E5DA-42A2-9A89-58AA53BF8541\" />\n\
      <meta name=\"indexterm\" content=\"Shadow (character development kit)\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Shadow</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"Envelope\", \"si_cpp/classXSI_1_1Envelope.html\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-FE2FF3E0-E5DA-42A2-9A89-58AA53BF8541\"></a></span><div class=\"head\">\n\
            <h1> Shadow</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-06C62B0F-8840-4C64-B3B2-BFFAF9A5BA65\"></a></span>The <em class=\"strong\">Shadow</em> object represents a new shadow hierarchy (a chain or null hierarchy) on top of an\n\
               existing chain. Shadow chains are pose-constrained to the original objects. Shadow\n\
               spines are created and pose-constrained for each vertebra in the spine.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-00AA\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-9A8C1966-6211-4419-B1C7-6CF932875763\"></a></span>Returned by\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-46359A42-BDAF-4472-B1DF-5887A0FADD6D\"></a></span> <a href=\"#!/url=./si_cmds/MakeShadowChain.html\">MakeShadowChain</a> \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-F8E3D8D3-7E37-45F2-9C08-9590AD6BED75\"></a></span> <a href=\"#!/url=./si_cmds/MakeShadowSpine.html\">MakeShadowSpine</a> \n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-00AB\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-AF83934E-DB26-4D85-B53C-31785EE53030\"></a></span>Properties\n\
               </h2> \n\
               <div class=\"table_Ruled\">\n\
                  <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                     <colgroup>\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                     </colgroup>\n\
                     <tr class=\"ruledHeading\">\n\
                        <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A4099D65-49AB-4BD2-90F2-4BD64E8234B1\"></a></span><p class=\"table-heading\">Property Name</p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-95F18377-131B-40FB-9755-98CECAC22D5B\"></a></span><p class=\"table-heading\">Type</p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-29133DF9-C83C-48CF-954E-57A3CFA8C830\"></a></span><p class=\"table-heading\">Description</p> \n\
                        </th>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F8A1AEBA-DED1-4764-8B40-7E51C5001623\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">ShadowModel</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-627C0742-8EE4-44B0-B19E-8A42A16A0F9C\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Model.html\">Model</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7A37D5AE-809B-4D68-8072-4B75AD9922FB\"></a></span><p class=\"table-body\">the model that the shadow chain or spine belongs to</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-08F4E845-B60E-421B-942B-4DE70892E2CD\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">Chain</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1068EE0E-030D-4144-B1F5-9FC643F40175\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-98637535-C1BA-4506-A436-D75524CF6F83\"></a></span><p class=\"table-body\">the chain being shadowed (not available for MakeShadowSpine)</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-454DECE7-2D59-4226-A5C6-F239DBDC2ADC\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">Parent</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-937A5A1A-CE67-4D22-A8B2-3F73957906AE\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Model.html\">Model</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6048E4DA-B1AD-49AB-A57D-69EA1CC9D39D\"></a></span><p class=\"table-body\">the parent of the shadow chain or spine</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B838CFAE-8289-4AA5-997E-C8203646B83E\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">ShadowStart</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-56393330-27A1-4F46-AC4C-FE96D431CA4D\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/ChainRoot.html\">ChainRoot</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F2ED1D8C-15B4-47F7-841F-2A41EB41DD2C\"></a></span><p class=\"table-body\">the shadow start object, usually this is the start of a branch in a shadow hiearchy</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EE52F0A9-78E0-4D63-9BA2-D1AF9E1B6D55\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">ShadowEnds</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-44685324-EADB-49CA-85B4-7EDF038C3F3C\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4796FBE0-062E-4C84-B694-2F55B2F55841\"></a></span><p class=\"table-body\">a collection of shadows ends, usually these are leaf nodes or parent of a branch in\n\
                              a shadow hierarchy\n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F84560E8-2A33-46E4-A871-0998962C629E\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">Shadows</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1B7BCECE-4561-4DD5-AE7E-629A76C877F7\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4AFF1044-2121-4270-86A5-98C71E43EECA\"></a></span><p class=\"table-body\">the collection of objects that make up the shadow chain or spine</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E59675A1-D0C1-4ECC-9D0C-ADF1C216493F\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">Hidden</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-87CB24A4-0A77-4397-ABF2-1534BC3010E7\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-48B1EDFA-9FA2-4936-BA9D-96CC44FC8FE2\"></a></span><p class=\"table-body\">a collection of the dividing null objects</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D3BC31B3-16E7-4F70-B3F4-4A873FF612A9\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"Envelope\" class=\"a_multireflink\">Envelope</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0363A497-F9FF-48D2-BAE9-CA95B5BA98CE\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-63A0B451-85D2-4C34-AD19-B19C1EE446A8\"></a></span><p class=\"table-body\">a collection of objects that should be enveloped</p> \n\
                        </td>\n\
                     </tr>\n\
                  </table>\n\
               </div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-E262E74F-9DB0-4874-9A5D-E0D31F646364\"></a></span>See <span class=\"char_link\"><a href=\"#!/url=./files/cdkref.htm\">CDK Object Reference</a></span> for complete list of objects available in the Character Development Kit.\n\
               </p> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";