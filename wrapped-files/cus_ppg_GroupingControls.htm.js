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
      <meta name=\"topicid\" content=\"GUID-AC047A0C-5327-45AB-AA11-CA8FF599EA8F\" />\n\
      <meta name=\"indexterm\" content=\"custom properties: grouping controls\" />\n\
      <meta name=\"indexterm\" content=\"Grouping controls: in a property page\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Grouping Controls</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"type\", \"si_cpp/group__RenderMapDefine.html#ga7117e14e60390664f1862525dd6acaf6\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-AC047A0C-5327-45AB-AA11-CA8FF599EA8F\"></a></span><div class=\"head\">\n\
            <h1> Grouping Controls</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\"><img src=\"../images/GUID-EF915E40-9899-4395-BD72-10781434930E-low.png\" /><p><span class=\"anchor_wrapper\"><a name=\"GUID-907CEC8C-4398-4CBA-BEC3-7C6320EAD1EF\"></a></span>Grouping controls allows you to align controls together in columns, indicate the relationship\n\
               of associated controls using a surrounding frame, and nest groups within groups.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-E50A5317-3AFC-4A46-89EA-8469836591FB\"></a></span>Controls are ordered linearly in the PPGLayout: that is, the order in which you declare\n\
               the controls is the order in which they appear on the property page.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-11E91ADB-F5D3-4D47-BC50-782C17FD1459\"></a></span>To group a set of controls together, insert the <a href=\"#!/url=./si_om/PPGLayout.AddGroup.html\">PPGLayout.AddGroup</a> or PPGLayout::AddGroup call before the first member-to-be and the <a href=\"#!/url=./si_om/PPGLayout.EndGroup.html\">PPGLayout.EndGroup</a> or PPGLayout::EndGroup call after the last.\n\
            </p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-A2FD6714-118A-4227-A967-78E10687FAC5\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-207CACBB-5FBB-49A3-AC30-DC8ABFBA49A3\"></a></span>When you omit the last <a href=\"#!/url=./si_om/PPGLayout.EndGroup.html\">PPGLayout.EndGroup</a> or PPGLayout::EndGroup call, all controls from the preceding <a href=\"#!/url=./si_om/PPGLayout.AddGroup.html\">PPGLayout.AddGroup</a> or PPGLayout::AddGroup call to the last control on the page will be part of that\n\
                     group.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-F63CC8AB-A709-402D-A852-981005E268DA\"></a></span>When you create your group control you can optionally specify a label and a frame\n\
               (both or none) and the percentage of a row that the group will occupy, if applicable.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-0414D55D-0590-4528-939F-AC030344C3C2\"></a></span>You can also set these and other attributes dynamically by using the <a href=\"#!/url=./si_om/PPGItem.SetAttribute.html\">PPGItem.SetAttribute</a> method with one of these item attributes:\n\
            </p>\n\
            <div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4860947F-5CD8-47C7-AB62-B9BD57471F2D\"></a></span><p class=\"table-heading\">Available on all Controls also as a property on the PPGItem object:</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-88AAE290-427C-498F-8514-C52067486DD5\"></a></span><p class=\"table-heading\">Specific to the Group control:</p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> \n\
                        <ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-21F9AE24-3EF6-4F42-9F0F-8B629D982ACD\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUILabel</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-12E6AAA5-4D82-474C-9E62-68039808FF4D\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIItems</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-5898BC18-E4E7-418E-AF68-4FBD2D4EF946\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIType</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-5FC3E15E-23D7-4C98-8E9A-DF52D81FF709\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIWidthPercentage</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-4EB4DB92-9148-4BED-9FC2-0CDF3F326448\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUILabelPercentage</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-1DCB045A-E727-429E-986C-DA07B806DCD7\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUILabelMinPixels</a> \n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> \n\
                        <ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-45E46770-DA58-48BA-84FD-BA73C22CCD54\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIShowFrame</a> \n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-91561730-C64B-4866-8E55-F0EFACB2BDF8\"></a></span>Group controls can be enumerated by setting up a loop using the <a href=\"#!/url=./si_om/PPGLayout.Count.html\">PPGLayout.Count</a> or PPGLayout::GetCount property and testing each <a href=\"#!/url=./si_om/PPGLayout.Item.html\">PPGLayout.Item</a> or PPGLayout::GetItem to see if it\'s a group (see <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_DynamicallyChangingCustomProperties.htm#WS34BA39B437A993419C80CAB58E3BEFA1-0091\">Changing the Layout</a></span> for more information).\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-5C113D66-1B7B-4D8D-A8CA-79D6088A9E15\"></a></span>The <a href=\"#!/url=./si_om/PPGLayout.Item.html\">PPGLayout.Item</a> or PPGLayout::GetItem property takes either the index or the name of the item, so\n\
               you can test it using the <a href=\"#!/url=./si_om/PPGItem.Type.html\">PPGItem.Type</a> or PPGItem::GetType property as in the following example:\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
function ChangeLastGroupLabel_OnClicked() {\n\
	// Loop backwards through the list of items to find the group tag \n\
	// that starts the last group \n\
	for (var i=PPG.PPGLayout.Count-1; i&gt;=0; i--) {\n\
\n\
		// Test for \"GroupBegin\" (<a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> of opening tag)\n\
		if (PPG.PPGLayout.Item(i).Type == \"GroupBegin\") {\n\
\n\
			// When we find it, reset the label\n\
			PPG.PPGLayout.Item(i).Label = \"Last Group\";\n\
			PPG.PPGLayout.Item(i).SetAttribute( siUIShowFrame, false );\n\
\n\
			// We need to refresh the layout to see the changes and then\n\
			// we\'re done!\n\
			PPG.Refresh();\n\
			break;\n\
		}\n\
	}\n\
}</pre></div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";