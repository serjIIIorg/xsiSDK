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
      <meta name=\"topicid\" content=\"GUID-F5765E9A-FD8A-4C2C-AD21-01E4F23D1941\" />\n\
      <meta name=\"indexterm\" content=\"CreateObject (VBScript)\" />\n\
      <meta name=\"indexterm\" content=\"new ActiveXObject (JScript)\" />\n\
      <meta name=\"indexterm\" content=\"win32com.client.Dispatch (Python ActiveX)\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Creating ActiveX Objects</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-F5765E9A-FD8A-4C2C-AD21-01E4F23D1941\"></a></span><div class=\"head\">\n\
            <h1>Creating ActiveX Objects</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-7453CE9F-D377-4DF3-9D29-F3356CA3DBF4\"></a></span>Some operations in Softimage require you to create an ActiveX object. For example,\n\
            if you want to create an XSICollection, you have to explicitly create it: \n\
         </p>\n\
         <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oColl = CreateObject( \"XSI.Collection\" )\n\
</pre></div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-624D29DD-B379-4DB5-A1CB-3025F30A58E4\"></a></span>The best way to create an ActiveX object is to use the <a href=\"#!/url=./si_om/XSIFactory.CreateActiveXObject.html\">CreateActiveXObject (XSIFactory)</a> method which is available to any supported scripting language. The principal advantage\n\
            of this method is that it does not trigger warning messages in Net View, unlike some\n\
            of the following scripting languages\' native functions: \n\
         </p><span class=\"anchor_wrapper\"><a name=\"UL_5698FFBB1E63491399F063A7EBB5C526\"></a></span><ul>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-2327571C-9578-4430-9340-7EB0C9E4B3D0\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/script_func_CreatingActiveXObjects.htm#WS63EE26F99BC8BC48A1C73D1CB69E37F2-0004\">CreateObject (VBScript)</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-3F2FB1F6-DF69-43A5-8B95-045457134B85\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/script_func_CreatingActiveXObjects.htm#WS63EE26F99BC8BC48A1C73D1CB69E37F2-0009\">new ActiveXObject (JScript)</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-792B58D5-7210-4A2A-A928-FD15F816604D\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/script_func_CreatingActiveXObjects.htm#WS63EE26F99BC8BC48A1C73D1CB69E37F2-0013\">win32com.client.Dispatch (Python ActiveX)</a></span> \n\
               </p> \n\
            </li>\n\
         </ul>\n\
         <div><span class=\"anchor_wrapper\"><a name=\"GUID-1B41DE00-BCF4-41F2-9DCE-CEAC24241A7A\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-0FCA0296-BFB2-4759-9A09-E11043BC6315\"></a></span>The information presented here is a summary of the information available for each\n\
                  language. For more information, please refer to the documentation provided by the\n\
                  scripting language\'s vendor or distributor. \n\
               </p> \n\
            </div>\n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS63EE26F99BC8BC48A1C73D1CB69E37F2-0004\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-6D7B4BCE-8CF3-48CA-B724-083700D3A6E7\"></a></span> CreateObject (VBScript)\n\
            </h2>  \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-0FC1291F-FE02-4C74-A8F0-BA07E7460C46\"></a></span>Creates and returns a reference to an Automation object. You can use this function\n\
               to create hooks into Softimage. \n\
            </p> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS63EE26F99BC8BC48A1C73D1CB69E37F2-0005\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-2095B344-A4BC-447D-82DF-C5A1909CB14E\"></a></span>Syntax\n\
               </h3> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	CreateObject( appname.typename[, pathname] )\n\
</pre></div> \n\
            </div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS63EE26F99BC8BC48A1C73D1CB69E37F2-0006\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-ADDA5429-EF58-40DD-B809-1FAA2F810CD3\"></a></span>Parameters\n\
               </h3> <span class=\"anchor_wrapper\"><a name=\"TABLE_AF09AB575EB54BDC9B54BCB5885D3A69\"></a></span><div class=\"table_Ruled\">\n\
                  <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                     <colgroup>\n\
                        <col width=\"25%\" align=\"left\" />\n\
                        <col width=\"25%\" align=\"left\" />\n\
                        <col width=\"50%\" align=\"left\" />\n\
                     </colgroup>\n\
                     <tr class=\"ruledHeading\">\n\
                        <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6EC0DB9B-F87F-455F-93EC-F5442A5BD0C8\"></a></span><p class=\"table-heading\">Parameter </p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8E7EC8B2-714C-432E-BB84-98DA5D708082\"></a></span><p class=\"table-heading\">Type </p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2F7AA5DE-1AE4-4340-9BE7-C72C74BE4EB2\"></a></span><p class=\"table-heading\">Description </p> \n\
                        </th>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1583DB2D-5786-4649-B7EF-A05FFB2B0A17\"></a></span><p class=\"table-body\">appname </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5F2FF4F6-2150-42E7-8576-9964CDF54F9A\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/String.htm\">String</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F5F85BE1-3521-4B66-A0ED-EFB10946D2F7\"></a></span><p class=\"table-body\">The name of the application providing the object (for example, XSI or XSIMath). </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-38BA93BB-14C1-4670-B898-89EAA5123B71\"></a></span><p class=\"table-body\">classname </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6293903B-E24A-43C7-B951-E95B3E0FC159\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/String.htm\">String</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-02D1C10E-A83E-4912-99E3-D27DDDFC633C\"></a></span><p class=\"table-body\">The type or class of the object to create (for example, Application, Collection, CreateVector3).\n\
                              \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FB5D7F4D-E03D-460F-936F-F8E1BFF5CE40\"></a></span><p class=\"table-body\">pathname </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5B67685F-6655-47F5-AC25-259E3EF78A2A\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/String.htm\">String</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FD59EF24-994C-4555-8B76-393454EDE688\"></a></span><p class=\"table-body\">Optional. Full path and name of the file containing the object to retrieve. </p> \n\
                        </td>\n\
                     </tr>\n\
                  </table>\n\
               </div> \n\
            </div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS63EE26F99BC8BC48A1C73D1CB69E37F2-0007\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-2C308BD5-2C5B-4A1F-A0FE-ED5903C91EFB\"></a></span>Example\n\
               </h3> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS63EE26F99BC8BC48A1C73D1CB69E37F2-0008\"></a></span> \n\
                  <h4><span class=\"anchor_wrapper\"><a name=\"GUID-CD6F0261-2CD4-494C-AB35-07B4697257E7\"></a></span>VBScript Example\n\
                  </h4> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">	\n\
	\' Get an XSICollection and add items to it\n\
	Set oCollection = CreateObject( \"XSI.Collection\" )\n\
	oCollection.Add \"Camera\"\n\
	oCollection.Add \"Light\"\n\
</pre></div> \n\
                  <div><span class=\"anchor_wrapper\"><a name=\"GUID-1D699522-541F-45E7-A3F8-4CB8FA9A9ED6\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-E84EF37C-C623-4281-B41D-212766B81A60\"></a></span>For more information on this and other VBScript functions, see <em class=\"strong\">http://msdn.microsoft.com/library/default.asp?url=/library/en-us/script56/html/vbscripttoc.asp.</em> \n\
                        </p> \n\
                     </div>\n\
                  </div> \n\
               </div> \n\
            </div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS63EE26F99BC8BC48A1C73D1CB69E37F2-0009\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-C5478AA7-B933-43FE-9A80-E1A9ED6A5F6A\"></a></span> new ActiveXObject (JScript)\n\
            </h2>  \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-74ACB329-BFD7-46BE-802B-8680B1F951E4\"></a></span>Creates and returns a reference to an Automation object. You can use this function\n\
               to create hooks into Softimage. \n\
            </p> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS63EE26F99BC8BC48A1C73D1CB69E37F2-000A\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-E550EFBF-C43A-46BA-86CE-3A73D5F77AD6\"></a></span>Syntax\n\
               </h3> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	new ActiveXObject( appname.classname[, pathname] )\n\
</pre></div> \n\
            </div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS63EE26F99BC8BC48A1C73D1CB69E37F2-000B\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-5555DE3E-0F7D-432D-AAF5-E7345DBFA37D\"></a></span>Parameters\n\
               </h3> <span class=\"anchor_wrapper\"><a name=\"TABLE_12F4126A466C4F748A47653946C75F22\"></a></span><div class=\"table_Ruled\">\n\
                  <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                     <colgroup>\n\
                        <col width=\"25%\" align=\"left\" />\n\
                        <col width=\"25%\" align=\"left\" />\n\
                        <col width=\"50%\" align=\"left\" />\n\
                     </colgroup>\n\
                     <tr class=\"ruledHeading\">\n\
                        <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-109D829C-F315-4033-90AC-33C5A55993D4\"></a></span><p class=\"table-heading\">Parameter </p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5CE1C248-0E45-4F36-8E90-2500DC7A66E0\"></a></span><p class=\"table-heading\">Type </p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2EC1708A-E947-422C-B271-D26D3A21F2A9\"></a></span><p class=\"table-heading\">Description </p> \n\
                        </th>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F377DBE7-1404-4A2E-A353-12703331AC4E\"></a></span><p class=\"table-body\">appname </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-84927FE5-FE39-428B-A283-438970519E3B\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/String.htm\">String</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3F894545-42AC-4E30-B2EA-A838F4995F2A\"></a></span><p class=\"table-body\">The name of the application providing the object (for example, XSI or XSIMath). </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D1D83F26-5D0C-418B-B2F5-6B4288641027\"></a></span><p class=\"table-body\">classname </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-73B4CFB9-0E0F-41A3-818E-49587E3EB101\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/String.htm\">String</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AD5EF835-B1DB-4847-84E4-C497C40C3EF8\"></a></span><p class=\"table-body\">The type or class of the object to create (for example, Application, Collection, CreateVector3).\n\
                              \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A85C3702-75D6-4040-B53A-987E4403CD24\"></a></span><p class=\"table-body\">pathname </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-334BDACF-9E5F-4262-9E52-DFBA0E736985\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/String.htm\">String</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D2EDC480-51A7-4772-8255-12D25F8137A7\"></a></span><p class=\"table-body\">Optional. Full path and name of the file containing the object to retrieve. </p> \n\
                        </td>\n\
                     </tr>\n\
                  </table>\n\
               </div> \n\
            </div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS63EE26F99BC8BC48A1C73D1CB69E37F2-000C\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-17FA7878-7DC7-4CB2-9BA0-8391B092D495\"></a></span>Example\n\
               </h3> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS63EE26F99BC8BC48A1C73D1CB69E37F2-000D\"></a></span> \n\
                  <h4><span class=\"anchor_wrapper\"><a name=\"GUID-9D1D82DA-A192-4F58-8EEE-DA780F5E6FAD\"></a></span>JScript Example\n\
                  </h4> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">	\n\
	// Get an XSICollection and add items to it\n\
	var oCollection = new ActiveXObject( \"XSI.Collection\" )\n\
	oCollection.Add( \"Camera\" )\n\
	oCollection.Add( \"Light\" )\n\
</pre></div> \n\
                  <div><span class=\"anchor_wrapper\"><a name=\"GUID-F3550ED1-D0DE-495C-A8AF-F7771F1B60AB\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-BC676100-08F1-42CC-B16A-82B64942CF49\"></a></span>For more information on this and other JScript functions, see <em class=\"strong\">http://msdn.microsoft.com/library/default.asp?url=/library/en-us/script56/html/js56jslrfjscriptlanguagereference.asp</em>. \n\
                        </p> \n\
                     </div>\n\
                  </div> \n\
               </div> \n\
            </div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS63EE26F99BC8BC48A1C73D1CB69E37F2-0013\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-21DBEF6E-EDB7-46A0-9CF7-3D6A862E89BD\"></a></span> win32com.client.Dispatch (Python ActiveX)\n\
            </h2>  \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-942D16EA-23DE-4842-A20B-057C3C81CFEB\"></a></span>Creates and returns a reference to an Automation object. You can use this function\n\
               to create hooks into Softimage. \n\
            </p> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS63EE26F99BC8BC48A1C73D1CB69E37F2-0014\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-EE142205-7A57-45D2-A1B7-803EE5AC34B8\"></a></span>Syntax\n\
               </h3> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	win32com.client.Dispatch( appname.typename ) \n\
</pre></div> \n\
            </div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS63EE26F99BC8BC48A1C73D1CB69E37F2-0015\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-AE856310-0A3F-49E5-93EA-A9769DB5CFE4\"></a></span>Parameters\n\
               </h3> <span class=\"anchor_wrapper\"><a name=\"TABLE_E9505FCD80154B73B89B5D31DB7362E6\"></a></span><div class=\"table_Ruled\">\n\
                  <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                     <colgroup>\n\
                        <col width=\"25%\" align=\"left\" />\n\
                        <col width=\"25%\" align=\"left\" />\n\
                        <col width=\"50%\" align=\"left\" />\n\
                     </colgroup>\n\
                     <tr class=\"ruledHeading\">\n\
                        <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3B9CDBE8-073D-4D44-986E-01E3B1A94935\"></a></span><p class=\"table-heading\">Parameter </p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D250C250-DA9D-4824-ABF5-0E90EE72063E\"></a></span><p class=\"table-heading\">Type </p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F28C84F0-C658-400F-9D48-174B5A40F098\"></a></span><p class=\"table-heading\">Description </p> \n\
                        </th>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5496633C-1FAC-432B-8FEF-C7F23E6892C4\"></a></span><p class=\"table-body\">appname </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1BB1E8CE-D5AE-4181-A70A-BDCDD0C593D3\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/String.htm\">String</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AB8CBDAF-58CD-4E12-AD62-444D92EAB652\"></a></span><p class=\"table-body\">The name of the application providing the object (for example, XSI or XSIMath). </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-13817D16-82E2-4DE0-B70E-0FC7EBC3DE83\"></a></span><p class=\"table-body\">classname </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4C99B4F2-876F-4CEC-AB02-A9E002375974\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/String.htm\">String</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B668B27C-68C4-43A1-8ECF-FD550AED4461\"></a></span><p class=\"table-body\">The type or class of the object to create (for example, Application, Collection, CreateVector3).\n\
                              \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                  </table>\n\
               </div> \n\
            </div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS63EE26F99BC8BC48A1C73D1CB69E37F2-0016\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-B503CBE0-864A-473D-96A4-945D8B058D9E\"></a></span>Example\n\
               </h3> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS63EE26F99BC8BC48A1C73D1CB69E37F2-0017\"></a></span> \n\
                  <h4><span class=\"anchor_wrapper\"><a name=\"GUID-BC84D6A6-D346-4E44-B6BE-0CC2F9D5B35D\"></a></span>Python Example\n\
                  </h4> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	# You need to explicitly import this extension to use Dispatch\n\
	import win32com.client\n\
	# Get an XSICollection and add items to it\n\
	coll = win32com.client.Dispatch( \"XSI.Collection\" )\n\
	coll.Add( \"Camera\" )\n\
	coll.Add( \"Light\" )\n\
</pre></div> \n\
                  <div><span class=\"anchor_wrapper\"><a name=\"GUID-CCFCE735-B539-44BF-B366-764111E2DC95\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-0A94ABEA-9ADD-4412-9181-54481C1F84C3\"></a></span>For more information on this and other Python ActiveX issues, see <em class=\"strong\">www.python.org/windows/win32com/QuickStartClientCom.html.</em> \n\
                        </p> \n\
                     </div>\n\
                  </div> \n\
               </div> \n\
            </div> \n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";