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
      <meta name=\"topicid\" content=\"GUID-746BA404-EA86-404D-9BF8-FB9150446BB3\" />\n\
      <meta name=\"indexterm\" content=\"Scintilla editor: using in a property page\" />\n\
      <meta name=\"indexterm\" content=\"custom properties: creating controls: Text Editor widget\" />\n\
      <meta name=\"indexterm\" content=\"Text Editor Widget: creating: in a property page\" />\n\
      <meta name=\"indexterm\" content=\"Text Editor Widget\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Text Editor Widget</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-746BA404-EA86-404D-9BF8-FB9150446BB3\"></a></span><div class=\"head\">\n\
            <h1> Text Editor Widget</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\"><img src=\"../images/GUID-9B68B424-D7D8-48F6-A4FD-604B61242678-low.png\" /><p><span class=\"anchor_wrapper\"><a name=\"GUID-23862B2D-AD4C-4C4E-A7E2-0ED9C52E9A01\"></a></span>Text editor widgets are similar to multi-line text boxes. They use the customizable\n\
               <a href=\"http://www.scintilla.org/\" target=\"_blank\">Scintilla</a> editing component, which supports extra features such as, text customization (font,\n\
               color, size), syntax styling, folding, auto-complete, and highlighting for keywords.\n\
               In addition, you can enable some of the menu options that appear in the Softimage\n\
               Script Editor. They are also associated to an underlying <em class=\"strong\">String</em> parameter. \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-29108AA8-C2D7-4504-B6A9-C63A71AB3708\"></a></span>You create them using the <a href=\"#!/url=./si_om/PPGLayout.AddItem.html\">PPGLayout.AddItem</a> method with the <a href=\"#!/url=./si_om/siPPGControlType.html\">siControlTextEditor</a> control type enum: \n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">var oTextWidget = oLayout.AddItem(\"TextEditorWidget\", \"Text Editor Widget\", siControlTextEditor);</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-A267BDA3-D3D8-4FE7-B3F3-A9D493A5607A\"></a></span>Following are some tips for setting up the special features in text editor (Scintilla)\n\
               widgets: \n\
            </p><span class=\"anchor_wrapper\"><a name=\"UL_76728D4FDC40402B9C9B452B3676B135\"></a></span><ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-A12E9A83-CBAC-4E88-9536-DBD53B0C0AB3\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_TextEditorWidget.htm#WS34BA39B437A993419C80CAB58E3BEFA1-003E\">To enable Auto-Complete and Keyword Highlighting</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-6CDC8D28-97C0-41D8-978A-BD02A5E56E50\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_TextEditorWidget.htm#WS34BA39B437A993419C80CAB58E3BEFA1-003F\">To enable Syntax Styling</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-5CCADAB0-4D22-47D7-9C29-1D0298E47EDD\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_TextEditorWidget.htm#WS34BA39B437A993419C80CAB58E3BEFA1-0040\">To enable Folding</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-58A9E9F4-4499-4CD2-A6B7-05F71615C795\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_TextEditorWidget.htm#WS34BA39B437A993419C80CAB58E3BEFA1-0041\">To provide File and Edit menus</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-D15AA3E7-C81F-4A5E-AE62-5198E40E971F\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_TextEditorWidget.htm#WS34BA39B437A993419C80CAB58E3BEFA1-0042\">To customize the general look of the editor</a></span> \n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-27CB0408-B302-4C20-9C81-453A719E1B00\"></a></span>The following item attributes are available: \n\
            </p><span class=\"anchor_wrapper\"><a name=\"TABLE_3056D63683D54290B36AFC8BBF0F14F9\"></a></span><div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col width=\"33.33333333333333%\" align=\"left\" />\n\
                     <col width=\"33.33333333333333%\" align=\"left\" />\n\
                     <col width=\"33.33333333333333%\" align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-40CBB512-A3B5-49AF-A741-25214C8E119E\"></a></span><p class=\"table-heading\">Available on all Controls also as a property on the PPGItem object: </p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9535FAAE-35EC-4FCF-8811-CE4CC5ADB59A\"></a></span><p class=\"table-heading\">Common to many Controls: </p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-305C5B65-FA5D-4909-87DE-6812D83CAF1B\"></a></span><p class=\"table-heading\">Specific to the Text Editor Widget control: </p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"UL_0EE2A8EA88D3486A9262B48124CD0154\"></a></span><ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-16CBE0AC-A187-48D1-9D08-A7AA549F40CC\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUILabel</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-25C44555-AE40-4520-A205-9E16EEF8649D\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIItems</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-6AA4A272-A71A-4B61-979E-CF34AEE181B4\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIType</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-7C3CEF7C-1907-45DC-A5A5-794B51E635F9\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIWidthPercentage</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-4C04BE66-FBD8-4FA3-959F-D182F7409B66\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUILabelPercentage</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-8A8A893A-B900-405A-B505-F4FBFB1CAB1D\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUILabelMinPixels</a> \n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"UL_0CB14C05C35F43169E37FA44F9E92FE2\"></a></span><ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-D4E00E39-1654-49D2-BCC4-FB0413DBE160\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUINoLabel</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-62CFBC1E-5B75-49D3-AFD3-2F1B99E2B00C\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIValueOnly</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-CC84EEE2-2A9A-447D-93FE-4DF4E8FC8B3A\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIContinue</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-22D9AD1A-0197-4711-8193-F55C25AB2633\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUICX</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-43AC4634-A9D0-4141-9D09-5704C696CC83\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUICY</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-89EB9A08-E6C0-4D64-A8AD-4B10C21C3151\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIStyle</a> \n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"UL_982EA0B705194421932E9FA7AA8AFCD5\"></a></span><ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-703FF173-CBD4-4391-9CE7-4ABE9D72D735\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIAutoComplete</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-8A66DB47-F045-4A4D-BFFD-9367FDA7DA35\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIBackgroundColor</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-9D1A3FA3-96C1-4559-9327-BB9433AC43C3\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUICapability</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-9281FFBF-AFBF-48AC-A02C-4637798062AD\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUICommentColor</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-0E1B22A4-ADFC-4FAA-9C70-9AD586C2A1F9\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUICommentFont</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-BA39A361-7619-4D4A-90AC-8EF8DFD7172B\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIFolding</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-E0B85C64-B051-4F63-874E-F9DCF36F3D14\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIFont</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-CFA5081C-36B7-46D7-840D-1FAA59BBDC16\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIFontSize</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-76EF5484-33D1-4BFE-A3D6-9C9E22CCDA32\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIForegroundColor</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-6E50EC63-ED97-4044-BAE1-4A189BF254E6\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIHeight</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-185E10DD-E34A-441A-9326-809B2FF8A254\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIHorizontalScroll</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-1837AEC4-79A0-4C50-AFB3-60F8E4D20136\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIKeywordFile</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-C3D3D40E-83ED-4CA1-963D-5F11C17914CD\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIKeywords</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-F355E792-9117-4F86-BFBF-31A0698B9CF0\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUILineNumbering</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-01933AFB-EA29-40B6-9D42-C45D8A875467\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUILineWrap</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-30C0C3F3-1FD5-4ABC-8E07-44A2663EA8A5\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIMarginWidth</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-4EE85C03-8EE5-4F6E-8B45-51D67D9812A5\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIPreprocessorColor</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-404AB437-1D53-4714-968C-1463A5018BC3\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIToolbar</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-E9DCCD34-D1BF-48A0-8F26-0E83CE6870AD\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIVerticalScroll</a> \n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS34BA39B437A993419C80CAB58E3BEFA1-003E\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-6E7235DE-29F5-4A7C-A4A4-5113F6E5489A\"></a></span>To enable Auto-Complete and Keyword Highlighting\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-08D122CF-333E-4E8A-8BEE-C79DCC4E23DB\"></a></span>You can use keyword lists for highlighting in the text editor or with the auto-complete\n\
                  feature while you type. Lists of keywords are always separated by a space and there\n\
                  are two ways you can specify them: \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"UL_49E01DA3EAF94F789F151F205464A88E\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-E7BEC06C-4C8A-4EC3-A516-276090DFF7E6\"></a></span>Pass in the list to the <a href=\"#!/url=./si_om/PPGItem.SetAttribute.html\">PPGItem.SetAttribute</a> or PPGItem::PutAttribute method along with the <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIKeywords</a> value: \n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">oTextWidget.SetAttribute(<a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIKeywords</a>, \"X3DObject Property Camera Parameter Light\")</pre></div> <span class=\"anchor_wrapper\"><a name=\"UL_3B916443147941EAB37CB493CFFFF1F2\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-36CF4EE8-CBD5-467B-B353-3B2B0C100687\"></a></span>Specify the location of a file containing the list of keywords along with the <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIKeywordFile</a> value: \n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">oTextWidget.SetAttribute(<a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIKeywordFile</a>, \"C:\\temp\\xsi_om.keywords\")</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-6D97A16C-434E-4384-A7C0-3194CC7FA41F\"></a></span>Auto-complete works on both commands and keywords by default. However, you can turn\n\
                  it off for commands, keywords, or both with one of the <a href=\"#!/url=./si_om/siAutoCompleteMode.html\">siAutoCompleteMode</a> values. For example: \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">oTextWidget.SetAttribute(siUIAutoComplete, siNone)</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS34BA39B437A993419C80CAB58E3BEFA1-003F\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-F2FB6B5D-FAC6-46A9-9559-4DEF8263872E\"></a></span>To enable Syntax Styling\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-219543BB-7CCD-44E0-BF6F-D444C37B2DC5\"></a></span>You can customize the color of comments and preprocessor statements. Additionally,\n\
                  you can specify a different font for comments. For example, you might want the comments\n\
                  to appear in Arial, but the main code to appear in Courier New. The following code\n\
                  example shows how to enable syntax styling. \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">oTextWidget.SetAttribute(siUILanguage, \"JScript\")	// Set the language to JScript\n\
oTextWidget.SetAttribute(<a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUICommentFont</a>, \"Verdana\")	// Verdana and fuscia comments\n\
oTextWidget.SetAttribute(<a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUICommentColor</a>, 0xFF00FF)\n\
oTextWidget.SetAttribute(<a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIPreprocessorColor</a>, 0x808080)	// Gray preprocessor text\n\
</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS34BA39B437A993419C80CAB58E3BEFA1-0040\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-660A6283-228F-4A81-89F8-6AEF34B2174F\"></a></span>To enable Folding\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-B736C4FA-3B7F-4B62-B66C-9C84BDE9FC81\"></a></span> <em class=\"mild\">Folding</em> is the ability to collapse and expand major blocks of code such as, functions and\n\
                  subroutines. Being able to collapse large functions makes code easier to read in a\n\
                  script editor. To enable folding, use this: \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">oTextWidget.SetAttribute(<a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIFolding</a>, true)</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS34BA39B437A993419C80CAB58E3BEFA1-0041\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-CA55E08A-3DE3-4C37-9540-69E20E6F0E2A\"></a></span>To provide File and Edit menus\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-629EE76F-BCDC-418A-9CE5-AE6963778639\"></a></span>To display the File and Edit menu, set the <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIToolbar</a> to true: \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">oTextWidget.SetAttribute(<a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIToolbar</a>, true)</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-FB381AC9-F973-499F-9314-DCFDDAB59930\"></a></span>You can also limit which menu options are available in the File menu by passing one\n\
                  of the <a href=\"#!/url=./si_om/siTextEditorCapability.html\">siTextEditorCapability</a> enum values with the <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUICapability</a> value. For example, to disable the New and Open options, use the <span class=\"code\" translate=\"no\">siCanLoad</span> value: \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">oTextWidget.SetAttribute(<a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUICapability</a>, siCanLoad)</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS34BA39B437A993419C80CAB58E3BEFA1-0042\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-1BB02DF3-E5B6-42EB-B3B0-F8AE1EC2D16B\"></a></span>To customize the general look of the editor\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-87095F01-7928-44C2-B079-1D842050EBFB\"></a></span>There are several options that you can enable by passing the variable indicated below\n\
                  to the <a href=\"#!/url=./si_om/PPGItem.SetAttribute.html\">PPGItem.SetAttribute</a> or PPGItem::PutAttribute method in the text editor widget: \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"TABLE_0D8F2D8C57E947E786106EB2F1F224DB\"></a></span><div class=\"table_Ruled\">\n\
                  <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                     <colgroup>\n\
                        <col width=\"33.33333333333333%\" align=\"left\" />\n\
                        <col width=\"66.66666666666666%\" align=\"left\" />\n\
                     </colgroup>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4418D3BE-852B-45D5-9085-33806678BAD1\"></a></span><p class=\"table-body\">To accomplish this... </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-781DD306-61D3-4D22-A1F3-589ABEAA6AF1\"></a></span><p class=\"table-body\">Use this... </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3078FBBB-22E6-481A-A7DF-FF302EEAF5BC\"></a></span><p class=\"table-body\">Change the font to the specified family name </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">oTextWidget.SetAttribute(<a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIFont</a>, \"Comic Sans MS\")</pre></div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4462F8BF-750D-45DF-A310-B257063A5BA0\"></a></span><p class=\"table-body\">Change the size of the font </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">oTextWidget.SetAttribute(<a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIFontSize</a>, 10)</pre></div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-ADFA89BD-6D6E-437F-A92E-E48A1C85C522\"></a></span><p class=\"table-body\">Set the height of the widget (in pixels) </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">oTextWidget.SetAttribute(<a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIHeight</a>, 500)</pre></div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-99592232-F69A-43B8-B79C-5EDA8173E981\"></a></span><p class=\"table-body\">Set the background color </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">oTextWidget.SetAttribute(<a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIBackgroundColor</a>, 0xCCCCFF)</pre></div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-988F27D2-68A6-461E-859B-69806C3F5B50\"></a></span><p class=\"table-body\">Set the text color </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">oTextWidget.SetAttribute(<a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIForegroundColor</a>, 0xCC3366)</pre></div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-CACE8112-622E-410E-B1F8-97B2D100FC6F\"></a></span><p class=\"table-body\">True to display a horizontal scroll </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">oTextWidget.SetAttribute(<a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIHorizontalScroll</a>, true)</pre></div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3973B6B7-EA23-49F1-BD09-DD7EB0D8D962\"></a></span><p class=\"table-body\">True to display a vertical scroll </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">oTextWidget.SetAttribute(<a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIVerticalScroll</a>, true)</pre></div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7BC4AC39-FA12-462A-A0D6-792F7D5C2EE7\"></a></span><p class=\"table-body\">True to display line numbers </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">oTextWidget.SetAttribute(<a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUILineNumbering</a>, true)</pre></div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F557EE6A-8761-4D08-B197-9FEEE098AD29\"></a></span><p class=\"table-body\">True to enable line wrapping for long lines </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">oTextWidget.SetAttribute(<a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUILineWrap</a>, true)</pre></div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D603E06D-95AE-4DD1-8D59-2CD898F863F2\"></a></span><p class=\"table-body\">Set the width of the margin (in characters </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">oTextWidget.SetAttribute(<a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIMarginWidth</a>, 5)</pre></div> \n\
                        </td>\n\
                     </tr>\n\
                  </table>\n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";