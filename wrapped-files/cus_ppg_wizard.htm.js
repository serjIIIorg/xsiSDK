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
      <meta name=\"topicid\" content=\"GUID-169A2E85-7DFF-46EF-BFF9-3837F4D057EA\" />\n\
      <meta name=\"indexterm\" content=\"wizards: creating properties\" />\n\
      <meta name=\"indexterm\" content=\"custom properties: creating plug-ins with the wizard\" />\n\
      <meta name=\"indexterm\" content=\"custom properties: adding: parameters: with the wizard\" />\n\
      <meta name=\"indexterm\" content=\"custom properties: defining the layout: with the wizard\" />\n\
      <meta name=\"indexterm\" content=\"custom properties: adding: controls to the property page\" />\n\
      <meta name=\"indexterm\" content=\"custom properties: adding: rows\" />\n\
      <meta name=\"indexterm\" content=\"custom properties: adding: groups\" />\n\
      <meta name=\"indexterm\" content=\"custom properties: adding: tabs\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Creating a Self-Installing Property</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-169A2E85-7DFF-46EF-BFF9-3837F4D057EA\"></a></span><div class=\"head\">\n\
            <h1>Creating a Self-Installing Property</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-3DBACBEF-5FAA-40C1-874B-BBFE67ECCE51\"></a></span> You can use a wizard to generate the code for a self-installing plug-in that contains\n\
               a custom property. In addition to generating the skeleton code for the plug-in and\n\
               the property, the wizard can also generate the code required to add the property to\n\
               a menu.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-8B2A7E79-B170-444A-A5E9-7A13A4635441\"></a></span>If you add a property to a menu, you get a menu command that adds the property to\n\
               the first object in the selection list.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS34BA39B437A993419C80CAB58E3BEFA1-0012\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-08856000-29A2-4D39-8601-3256773A327A\"></a></span> To create a self-installing property\n\
               </h2>  <span class=\"anchor_wrapper\"><a name=\"GUID-58536453-43DB-4A9A-A5CF-4F512456195C\"></a></span><ol type=\"1\" start=\"1\">\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-F3D029E7-FAA8-481B-9C08-5DFE914902E4\"></a></span>Click <span class=\"MenuCascade\" id=\"GUID-E37F3219-CCE5-4B81-93A4-5ABF5C80ADBE\">File</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-4F80E273-DF5A-48A2-BEB5-95089C1F0B55\">Plug-ins</span> to open the Plug-in Manager.\n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-6DE8E1D3-310C-4730-B91C-2E9C44FCEE08\"></a></span> <span class=\"MenuCascade\" id=\"GUID-0EA5CEFE-E192-4F28-AB6D-66BA09803C69\">Tip</span> In the Tools Development Environment layout, click the <span class=\"MenuCascade\" id=\"GUID-94C786C1-8F3A-4A2C-9E81-D9C2A6BEEA9F\">Plug-ins</span> tab to switch to the Plug-in Manager view.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-A094B250-6389-476E-9680-C9A674235E58\"></a></span>Do one of the following:\n\
                     </p> \n\
                     <ul>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-60875418-B8EB-4DF6-865F-3382449DAA4E\"></a></span>To create the property in the User location, click <span class=\"MenuCascade\" id=\"GUID-ACA0BAFA-6A3B-4629-A7CF-F5056219192B\">File</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-CE6DE3B4-0E1F-4982-9C6E-632315F7243E\">New</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-4453FBF6-1C22-4E5B-B29E-28F62730CB24\">Property</span>.\n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-B528589D-D9CA-4682-A13F-614AFAEB70A7\"></a></span>To create the property in a different location (such as a workgroup or an Add-on directory),\n\
                              expand the location in the Plug-in Tree, right-click the <span class=\"MenuCascade\" id=\"GUID-D6043BDB-3A66-434A-AC15-1BAEA24EA0CF\">Plugins</span> folder and click <span class=\"MenuCascade\" id=\"GUID-2CF62383-071E-4C64-AC9E-AAABE61D7D58\">New</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-B10D3B10-10A0-41E5-AFBA-F7FDC62BFDE1\">Property</span>.\n\
                           </p> \n\
                        </li>\n\
                     </ul> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-B8EBA18B-8AC8-438C-816B-369CBE31735E\"></a></span>The custom property wizard appears.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-B2BDB310-13F7-40A8-9A87-0E0D1EADB339\"></a></span>In the <span class=\"MenuCascade\" id=\"GUID-9AF14205-3879-4F18-AE77-FBFEAA95979F\">Property Name</span> box, type a <span class=\"char_link\"><a href=\"#!/url=./files/cus_self_NamingPluginItems.htm\">name</a></span> for the property.\n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-1E4F8B7B-50B7-4240-A6F2-3FA2F502BD20\"></a></span>The first character in a property name should be a letter. Subsequent characters can\n\
                        be letters, numbers, or underscore (_) characters.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-8A5D875A-52F8-48A0-800A-647703F65AC0\"></a></span>In the <span class=\"MenuCascade\" id=\"GUID-FDA2B757-3273-4C18-B7C0-C6D000815BA1\">Script Language</span> list, click the language you want to generate.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-8EA8CC48-272D-4BC4-AC39-CCAD27CFA3B4\"></a></span>If you want to add the property to a menu, then in the <span class=\"MenuCascade\" id=\"GUID-AA1E4554-266A-487A-9EB3-A1D30DA4700D\">Add to Menu</span> list, click a menu anchor point.\n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-0DAFA252-634C-4080-8113-C08B86AAB45C\"></a></span>The wizard generates a menu command that adds the property to the first object in\n\
                        the selection list. The property name is that text that appears on the menu.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-16C66230-932F-4F36-8835-225CD6FD3A0B\"></a></span>Add parameters to the property. <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_wizard.htm#WS34BA39B437A993419C80CAB58E3BEFA1-0013\">How</a></span>?\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-3ACA28F4-8562-4605-B978-ADF670437FEB\"></a></span>Define the layout of the parameters on the property page. <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_wizard.htm#WS34BA39B437A993419C80CAB58E3BEFA1-0015\">How</a></span>?\n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-C1932803-A4BB-4FF2-BAE9-E7FC7AABFEE9\"></a></span>This is optional. You can always do this by editing the generated <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_PropertyCallbacks.htm#WS34BA39B437A993419C80CAB58E3BEFA1-0023\">DefineLayout</a></span> callback.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-B71DF2D8-744F-4A45-8EEF-A9B9511985C2\"></a></span>Click <span class=\"MenuCascade\" id=\"GUID-CB807C29-3041-4602-BE99-CC3D6E1FA176\">Generate Property</span>.\n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-A2339B4D-A571-4757-B4C3-C81EA079CDB2\"></a></span>If you selected a scripting language, the wizard loads the plug-in, adds the property\n\
                        to the scene root, and opens the property page.\n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-98084FC9-F6AD-4739-8674-2230CE506556\"></a></span>If you generated C++, you\'ll have to build the plug-in first.\n\
                     </p> \n\
                  </li>\n\
               </ol> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS34BA39B437A993419C80CAB58E3BEFA1-0013\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-05E0E34E-2164-423E-BEDB-EA59BF14E03F\"></a></span> Adding Parameters\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-95B7DCEA-46DC-4109-B8F9-0CBB55A7474D\"></a></span>The <span class=\"MenuCascade\" id=\"GUID-B5A1EA90-EF8C-4D03-8363-0178D2FFD1B9\">Parameters</span> tab generates the body of the <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_PropertyCallbacks.htm#WS34BA39B437A993419C80CAB58E3BEFA1-0022\">Define</a></span> callback using a series of <a href=\"#!/url=./si_om/CustomProperty.AddParameter.html\">CustomProperty.AddParameter</a> or CustomProperty::AddParameter calls.\n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS34BA39B437A993419C80CAB58E3BEFA1-0014\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-E7E9276C-D215-4430-A55D-7EEBAD07C6AA\"></a></span>To add a parameter\n\
                  </h3> <span class=\"anchor_wrapper\"><a name=\"GUID-D266EAFC-E441-4AEA-B35C-FF053DBCDD56\"></a></span><ol type=\"1\" start=\"1\">\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-AA67C4DE-B355-4532-9357-8252A99737C2\"></a></span>In the <span class=\"MenuCascade\" id=\"GUID-5A723561-51E5-4364-9C81-C2A2009F5470\">ParamType</span> list, click the type of parameter you want to add.\n\
                        </p> \n\
                        <div class=\"table_Ruled\">\n\
                           <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                              <colgroup>\n\
                                 <col align=\"left\" />\n\
                                 <col align=\"left\" />\n\
                                 <col align=\"left\" />\n\
                              </colgroup>\n\
                              <tr class=\"ruledHeading\">\n\
                                 <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0A212D89-FEF1-47ED-BDE8-72F219644599\"></a></span><p class=\"table-heading\">ParamType</p> \n\
                                 </th>\n\
                                 <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B88C34E1-CD29-41D5-A3B8-24E8CEB293F0\"></a></span><p class=\"table-heading\"> <a href=\"#!/url=./si_om/siVariantType.html\">Variant Type</a> \n\
                                    </p> \n\
                                 </th>\n\
                                 <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-44DC5B99-A954-4961-BAE9-5DFA0F5DFF89\"></a></span><p class=\"table-heading\"> <a href=\"#!/url=./si_om/siPPGControlType.html\">Default Control</a> \n\
                                    </p> \n\
                                 </th>\n\
                              </tr>\n\
                              <tr class=\"ruledOddRow\">\n\
                                 <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3D793D89-AAC8-4261-B251-54DF1924F5D3\"></a></span><p class=\"table-body\">Text</p> \n\
                                 </td>\n\
                                 <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1DC4988F-B6BE-47FE-8453-D3B1F6D3C6E3\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siVariantType.html\">siString</a> \n\
                                    </p> \n\
                                 </td>\n\
                                 <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7C648986-4654-4AB9-923F-6666FF653BBC\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siPPGControlType.html\">siControlString</a> \n\
                                    </p> \n\
                                 </td>\n\
                              </tr>\n\
                              <tr class=\"ruledEvenRow\">\n\
                                 <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A2DDFBC3-C5D5-4497-A2CE-A38D321A03F9\"></a></span><p class=\"table-body\">Boolean</p> \n\
                                 </td>\n\
                                 <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-164C2C16-0480-43CA-B126-0D0618708211\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siVariantType.html\">siBool</a> \n\
                                    </p> \n\
                                 </td>\n\
                                 <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5397484D-F1E7-44B3-9779-0CB246CBA47E\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siPPGControlType.html\">siControlCheck</a> \n\
                                    </p> \n\
                                 </td>\n\
                              </tr>\n\
                              <tr class=\"ruledOddRow\">\n\
                                 <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-67C544FE-E732-4C0D-9305-441A297DB733\"></a></span><p class=\"table-body\">Integer</p> \n\
                                 </td>\n\
                                 <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C56B9CF3-4F5F-48CA-94F9-6DD522115FEC\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siVariantType.html\">siInt4</a> \n\
                                    </p> \n\
                                 </td>\n\
                                 <td class=\"table-body\" rowspan=\"4\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1BBED074-651A-4A0B-9CB6-889698FCE846\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siPPGControlType.html\">siControlNumber</a> \n\
                                    </p> \n\
                                 </td>\n\
                              </tr>\n\
                              <tr class=\"ruledEvenRow\">\n\
                                 <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E3AF9C36-D98D-41FA-90B5-97F61E48EA01\"></a></span><p class=\"table-body\">Small Integer</p> \n\
                                 </td>\n\
                                 <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-02D0ECE2-FD76-4D6D-A18E-E7E16A5610AD\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siVariantType.html\">siUByte</a> \n\
                                    </p> \n\
                                 </td>\n\
                              </tr>\n\
                              <tr class=\"ruledOddRow\">\n\
                                 <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-614393F9-CFEA-4947-87A2-CC6FCA05A1D1\"></a></span><p class=\"table-body\">Floating Point Number</p> \n\
                                 </td>\n\
                                 <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-38625648-C704-44A6-82D8-45347E9D2B9A\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siVariantType.html\">siFloat</a> \n\
                                    </p> \n\
                                 </td>\n\
                              </tr>\n\
                              <tr class=\"ruledEvenRow\">\n\
                                 <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-26497988-9A00-4E17-9BED-C77928162191\"></a></span><p class=\"table-body\">Double Precision Number</p> \n\
                                 </td>\n\
                                 <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1CD04225-6B78-4D50-87EF-9E44F8C8817B\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siVariantType.html\">siDouble</a> \n\
                                    </p> \n\
                                 </td>\n\
                              </tr>\n\
                              <tr class=\"ruledOddRow\">\n\
                                 <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C2D8C399-35C7-4AD0-ADC5-81E6747242B8\"></a></span><p class=\"table-body\">Color (with Alpha)</p> \n\
                                 </td>\n\
                                 <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0C3B42A4-F432-49C2-937F-4E9776BD81E9\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/Color.html\">Color</a> or <a href=\"#!/url=./si_om/Color.html\">Color</a></p> \n\
                                 </td>\n\
                                 <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FF094AD6-36CB-47BF-9EE6-3E0EC8655238\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siPPGControlType.html\">siControlRGBA</a> \n\
                                    </p> \n\
                                 </td>\n\
                              </tr>\n\
                              <tr class=\"ruledEvenRow\">\n\
                                 <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7E846DE3-84B7-42BE-A411-06D7B442BAEF\"></a></span><p class=\"table-body\">Grid Control</p> \n\
                                 </td>\n\
                                 <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-652CA7FA-F400-4A56-846E-151884E38F82\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/GridData.html\">Grid</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1GridData.html\">Grid</a></p> \n\
                                 </td>\n\
                                 <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-42B7213D-6BEB-412A-AB3B-C25CE881C964\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siPPGControlType.html\">siControlGrid</a> \n\
                                    </p> \n\
                                 </td>\n\
                              </tr>\n\
                              <tr class=\"ruledOddRow\">\n\
                                 <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-67239145-079C-430D-B720-632FAA3A805B\"></a></span><p class=\"table-body\">FCurve</p> \n\
                                 </td>\n\
                                 <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4C2D0BC3-A500-47F5-9FE9-EC41712229E7\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/FCurve.html\">FCurve</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1FCurve.html\">FCurve</a></p> \n\
                                 </td>\n\
                                 <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9339F0CF-7E98-47E9-875E-9CFCBBBBA653\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siPPGControlType.html\">siControlFCurve</a> \n\
                                    </p> \n\
                                 </td>\n\
                              </tr>\n\
                              <tr class=\"ruledEvenRow\">\n\
                                 <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4A8C038D-28DE-482C-BC66-7FC5262E2DFB\"></a></span><p class=\"table-body\">Button</p> \n\
                                 </td>\n\
                                 <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AACEDB6E-8834-4C3B-90BA-468ABB4C7B89\"></a></span><p class=\"table-body\">Button</p> \n\
                                 </td>\n\
                                 <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-27633C53-19AC-42F0-963C-1B39F37C1D4C\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siPPGControlType.html\">siControlButton</a> \n\
                                    </p> \n\
                                 </td>\n\
                              </tr>\n\
                           </table>\n\
                        </div> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-C7C93FC2-24D5-43DF-B421-A38D7403A2AF\"></a></span>If you want to have a different type of control (for example, a list box, combo box,\n\
                           or synoptic widget), add a parameter of the <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_PropertyPageControls.htm\">required type.</a></span> After you generate the property, you can edit the DefineLayout callback to use a\n\
                           different control for the parameter.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-EA9A9586-C59D-48BD-80C1-648CDF19B06C\"></a></span>In the <span class=\"MenuCascade\" id=\"GUID-4542508D-6D48-49D3-A05A-780C88C3756E\">Name/Label</span> box, type a <span class=\"char_link\"><a href=\"#!/url=./files/cus_self_NamingPluginItems.htm\">name</a></span> for the parameter.\n\
                        </p> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-A06BB870-F15C-4CEE-B5F4-3FB7F8BEB904\"></a></span>If you add the parameter to the layout, this name is used as the default label for\n\
                           the control associated with the parameter. You can specify a different label by editing\n\
                           the call to <a href=\"#!/url=./si_om/PPGLayout.AddItem.html\">PPGLayout.AddItem</a> or PPGLayout::AddItem in the generated <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_PropertyCallbacks.htm#WS34BA39B437A993419C80CAB58E3BEFA1-0023\">DefineLayout</a></span> callback function.\n\
                        </p> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-833E3E5D-D40E-4393-BD5F-A11F7726A745\"></a></span>The first character in a parameter name should be a letter. Subsequent characters\n\
                           can be letters, numbers, or underscore (_) characters.\n\
                        </p> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-6A2105ED-D9C8-401C-8B38-37404D4E4052\"></a></span>Parameter names are used to name callback functions (such as <span class=\"code\" translate=\"no\">MyProperty_MyParameter_OnChanged</span>), so parameter names must be valid identifiers in your chosen programming language.\n\
                        </p> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-BC1428E6-613F-458D-9B16-56E0AAF268AB\"></a></span>The wizard replaces any spaces in the name with underscores.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-4B27F8E1-BED9-44F9-89C2-4829C7F79759\"></a></span>Set the property attributes\"\n\
                        </p> \n\
                        <ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-2BED69E7-ADF8-409D-B863-273EB4C3437A\"></a></span> <span class=\"MenuCascade\" id=\"GUID-1F128D41-350A-4859-A338-8AC08D784A19\">Read Only</span> Select this check box to make the parameter read only. If the parameter is added\n\
                                 to the layout, the control will be disabled.\n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-24CB8294-BBC1-4502-AF36-DEEAB68882EE\"></a></span> <span class=\"MenuCascade\" id=\"GUID-DE93DF1D-A973-496F-BA0B-43EA5DF63793\">Animatable</span> Select this check box to allow users to animate the control. The parameter will have\n\
                                 an animation divot on the property page.\n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-E385CBC1-2F42-4002-970F-6CF6BC3D3159\"></a></span> <span class=\"MenuCascade\" id=\"GUID-E6630D21-99EE-464F-98C6-87149CBEFE55\">Callback</span> By default, the wizard generates callbacks for parameters (<span class=\"code\" translate=\"no\">OnClicked</span> for buttons, and OnChanged for all other parameters). If you do not want a callback\n\
                                 for a parameter, clear the <span class=\"MenuCascade\" id=\"GUID-C001CC14-8447-4E34-A476-1BB26323D204\">Callback</span> check box.\n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-2E80C325-5FE6-4ED0-8970-E0ACDB8E11C1\"></a></span> <span class=\"MenuCascade\" id=\"GUID-3D2A27F0-2E9C-4C99-849F-8906E2FB0718\">Default</span> Default value for the parameter, if applicable.\n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-3B3548BD-311B-4739-ADFC-B08037BB61C3\"></a></span> <span class=\"MenuCascade\" id=\"GUID-CAAAE1E0-3E2E-4580-A627-1BA0DB4F4859\">Value Range</span> Minimum and maximum values for numeric parameters.\n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-857B238E-D5E1-4DC2-8776-E385B556395A\"></a></span> <span class=\"MenuCascade\" id=\"GUID-D94BF228-530B-453D-B6B0-38563B8CDD82\">UI Value Range</span> Minimum and maximum values that can be set using the slider (for numeric parameters).\n\
                                 By default, the UI Value Range is the same as the Value Range. To change the UI Value\n\
                                 Range, select the UIRange check box.\n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-E5198155-C779-4551-A542-4B04F48670A7\"></a></span>Click <span class=\"MenuCascade\" id=\"GUID-AD782C9C-573A-42D0-89BE-C401D959C259\">Add Item</span> to add the parameter to the <span class=\"MenuCascade\" id=\"GUID-00B17CE1-7FAA-4299-9ED7-E6E2AF4F7B1D\">Parameters</span> grid.\n\
                        </p> \n\
                        <ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-B8CED09A-A7D7-4765-B8AB-5A1BDC2C76A0\"></a></span>Except for the name and type, you can edit parameter attributes in the grid. Click\n\
                                 a cell and type the new attribute value.\n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-E840505C-476A-49EE-98BE-FE35F2DB6835\"></a></span>To delete a parameter, click the shaded cell at the start of a row (the row should\n\
                                 be highlighted a light green), and then click <span class=\"MenuCascade\" id=\"GUID-DEDA40F9-15AE-4CE4-8B56-4739C66CB1C3\">Delete Selected</span>.\n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                     </li>\n\
                  </ol> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS34BA39B437A993419C80CAB58E3BEFA1-0015\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-D3525454-25B4-492B-AF96-11C90EEA40D0\"></a></span> Defining the Layout\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-82CD04E2-7886-4526-8777-132EAC4847C3\"></a></span>The <span class=\"MenuCascade\" id=\"GUID-139BF315-BDA3-484E-87DB-CBFB9B58DE58\">Layout</span> tab allows you to add controls to the property page and arrange the controls using\n\
                  rows, groups, and tabs. The generated <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_PropertyCallbacks.htm#WS34BA39B437A993419C80CAB58E3BEFA1-0023\">DefineLayout</a></span> callback adds the default control type for each parameter you add to the layout.\n\
               </p> \n\
               <div class=\"table_Ruled\">\n\
                  <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                     <colgroup>\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                     </colgroup>\n\
                     <tr class=\"ruledHeading\">\n\
                        <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D2C822D4-9519-4AB3-AEF8-B720CAF9B45C\"></a></span><p class=\"table-heading\">Parameter Type</p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8F1120F1-1D44-4FC7-914D-25E390AD2892\"></a></span><p class=\"table-heading\">Default Control Type</p> \n\
                        </th>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-58C31306-FB6D-4CD7-B002-5B33AA04C486\"></a></span><p class=\"table-body\">Text</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8D138CAD-4973-4050-BE48-50CC6C8C82CD\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siPPGControlType.html\">siControlString</a> \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-CBE6FCD1-4A9E-4538-9FE5-422ED3BCF11E\"></a></span><p class=\"table-body\">Boolean</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5AE7BD11-4DFB-4A31-B641-A8F3B7CFBA94\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siPPGControlType.html\">siControlCheck</a> \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8A5EE2D5-D93A-418E-951D-930C61F92521\"></a></span><p class=\"table-body\">Integer</p> \n\
                        </td>\n\
                        <td class=\"table-body\" rowspan=\"4\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D70CAF33-CDF1-478D-A29A-85109CAC326C\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siPPGControlType.html\">siControlNumber</a> \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FE498F77-B228-4DD6-A747-799B8E270B03\"></a></span><p class=\"table-body\">Small Integer</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F3D6DD03-A468-4E24-8B1E-DF4499B32DA2\"></a></span><p class=\"table-body\">Floating Point Number</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0B7CF62D-AC18-4298-9BCE-19597F3A6857\"></a></span><p class=\"table-body\">Double Precision Number</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DFFD83BA-855A-42D9-885F-53D249323937\"></a></span><p class=\"table-body\">Color (with Alpha)</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AA7CCB3F-D16F-4DCA-BAF8-BF48A55A535E\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siPPGControlType.html\">siControlRGBA</a> \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BCB81E97-CA79-409B-AF38-2B8F93FF443D\"></a></span><p class=\"table-body\">Grid Control</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F0673486-A8A8-4942-AE98-5122D9287934\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siPPGControlType.html\">siControlGrid</a> \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2EE79D93-C603-49CD-BF42-3E3BE363125E\"></a></span><p class=\"table-body\">FCurve</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-986C890B-54B7-46AF-BE4C-BA43416506B6\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siPPGControlType.html\">siControlFCurve</a> \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B7D509DF-F0C4-4886-B111-7653471A0095\"></a></span><p class=\"table-body\">Button</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DE1446D9-FC46-4927-B8EE-A7384CE1A3F8\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siPPGControlType.html\">siControlButton</a> \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                  </table>\n\
               </div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-7BE7EE0A-5465-4F37-BAEA-43477D3D3105\"></a></span>To add different controls (such as a combo box or a set of radio buttons), you\'ll\n\
                  have to edit the generated <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_PropertyCallbacks.htm#WS34BA39B437A993419C80CAB58E3BEFA1-0023\">DefineLayout</a></span> callback. For example, if you want a combo box, add a string or numeric parameter\n\
                  to the layout and generate the code. Then, in the generated <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_PropertyCallbacks.htm#WS34BA39B437A993419C80CAB58E3BEFA1-0023\">DefineLayout</a></span> callback, replace the generated call to <a href=\"#!/url=./si_om/PPGLayout.AddItem.html\">PPGLayout.AddItem</a> or PPGLayout::AddItem:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">oLayout.AddItem(\"Param3\");</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-2B53B183-B5EC-48A8-A471-5397FA4F0D01\"></a></span>with the code for a combo box:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">var aSnippets = [ \"enumerator\", 0, \"for-in\", 1, \"switch\", 2 ];\n\
oLayout.AddEnumControl( \"Param3\", aSnippets, \"Snippets\", siControlCombo );</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-28123679-2F25-4955-B7AF-A5537646F10B\"></a></span>By default, the wizard uses the parameter name as the label for the control. If you\n\
                  want to include spaces in the label, you have to edit the generated <a href=\"#!/url=./si_om/PPGLayout.AddItem.html\">PPGLayout.AddItem</a> or PPGLayout::AddItem calls to look like this:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">oLayout.AddItem(\"Property_Name\", \"Property Name\");</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-EB9B9565-4C23-4152-9D34-2A934ECB7AF6\"></a></span>The first argument to <a href=\"#!/url=./si_om/PPGLayout.AddItem.html\">PPGLayout.AddItem</a> or PPGLayout::AddItem is the parameter name, and the second is the label.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-F7A5FC07-2EB4-4B3C-A66F-26E09025D3E9\"></a></span>If you want to do things like set the LabelMinPixels and LabelPercentages, you\'ll\n\
                  also have to edit the generated code.\n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS34BA39B437A993419C80CAB58E3BEFA1-0016\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-3B5BFEF4-2665-4FF2-B6EB-87265D84DB4D\"></a></span> To add controls to the property page\n\
                  </h3>  \n\
                  <ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-CC4F6CCC-77D1-48A4-8936-B43B4432AD4A\"></a></span>In the <span class=\"MenuCascade\" id=\"GUID-6D23BD8A-A66E-4C78-8819-2CBAA2F59E87\">Parameters</span> list, click a parameter, and then click <span class=\"MenuCascade\" id=\"GUID-046C6185-B484-48A9-B5CB-55387AE72ACE\">Add</span>.\n\
                        </p> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-5797B7EE-F7C3-4FAF-8382-70639535AC82\"></a></span>By default, parameters are added to the layout in the order you add them. But if you\n\
                           select a parameter in the Layout list, then the next time you add a parameter it is\n\
                           inserted above the selected parameter.\n\
                        </p> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-97EC78BA-EC4B-4C3B-B27A-25CD9DA24F8F\"></a></span>You can reorder the Layout list using the Up and Down buttons.\n\
                        </p> \n\
                     </li>\n\
                  </ul> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS34BA39B437A993419C80CAB58E3BEFA1-0017\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-C686D3E4-8DC2-4AC9-8B98-A08C7AB06D59\"></a></span> To add a row\n\
                  </h3>  <span class=\"anchor_wrapper\"><a name=\"GUID-9DC356CF-0960-4282-B543-655926430064\"></a></span><ol type=\"1\" start=\"1\">\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-C2CCDC1D-3ABD-4F86-B7D6-BC8AF399F71F\"></a></span>Click <span class=\"MenuCascade\" id=\"GUID-E5F28C14-D24B-43E3-9973-F3DA37AE65A0\">Add Row</span>.\n\
                        </p> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-FBB081DC-E333-46FF-8662-ED539AAD864F\"></a></span>An empty row is added to the <span class=\"MenuCascade\" id=\"GUID-E9B8B4FA-8250-403F-92D3-D22CE811042A\">Layout</span> list. If a parameter is selected in the <span class=\"MenuCascade\" id=\"GUID-3C8BC35B-9481-4F80-8267-F5AB879A492C\">Layout</span> list, the row is added above the selected parameter.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-F86D099A-9193-4DC2-A99A-8E0C36652260\"></a></span>In the <span class=\"MenuCascade\" id=\"GUID-1426448B-1805-4113-A7FE-5DD3EF45A685\">Layout</span> list, click one of the parameters you want to put in the row, and then click <span class=\"MenuCascade\" id=\"GUID-CA1FEBFE-3B3A-4485-A3BE-94D8C8AADBA2\">Up</span> (or <span class=\"MenuCascade\" id=\"GUID-FFC93699-B049-4DF2-944C-7CE5CC2470BA\">Down</span>) until the parameter is in the row.\n\
                        </p> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-FD5C2A1B-4649-4C00-9A54-A17B27AAD790\"></a></span>Do the same for the other parameters you want to put in the row.\n\
                        </p> \n\
                     </li>\n\
                  </ol> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS34BA39B437A993419C80CAB58E3BEFA1-0018\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-59BDF8F4-179A-468D-89AF-17D56584B649\"></a></span> To add a group\n\
                  </h3>  <span class=\"anchor_wrapper\"><a name=\"GUID-CA804292-2E72-4092-B8F4-35A2E087E583\"></a></span><ol type=\"1\" start=\"1\">\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-676DA56D-FA92-4D35-8619-DB9C013C7000\"></a></span>Under <span class=\"MenuCascade\" id=\"GUID-C33EDCCC-C823-4635-996A-9D918711024B\">Groupings</span>, in the <span class=\"MenuCascade\" id=\"GUID-34D38E5F-1120-4D32-927B-04BECCE0E764\">Name</span> box, type a name for the group.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-9816B155-F9C9-4A54-9EF2-59C24E97EE31\"></a></span>Click <span class=\"MenuCascade\" id=\"GUID-FAA40A84-EFC4-49CC-9300-26868AE7D55C\">Add Group</span>.\n\
                        </p> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-B09084BA-EBA4-4FE2-8036-DADA7677C4C3\"></a></span>An empty group is added to the <span class=\"MenuCascade\" id=\"GUID-1D4D3D0F-51A9-4B22-92CD-754E5CCF41FD\">Layout</span> list. If a parameter is selected in the <span class=\"MenuCascade\" id=\"GUID-F853DBB0-D271-4AD4-B71F-4627383D45FD\">Layout</span> list, the group is added above the selected parameter.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-0A635E73-0514-4E76-9C77-40BA664D8D04\"></a></span>To move a parameter into the group, click the parameter and then click either <span class=\"MenuCascade\" id=\"GUID-95DD67FC-9B95-4147-B4E1-9CCAE291D53D\">Up</span> (if the parameter is below the group in the <span class=\"MenuCascade\" id=\"GUID-9386D724-FE5C-436B-84A9-8B4A063160F2\">Layout</span> list) or <span class=\"MenuCascade\" id=\"GUID-5B86C30F-23F6-441C-85AD-4FCEB196980C\">Down</span> (if the parameter is above the group in the <span class=\"MenuCascade\" id=\"GUID-1A85927F-100E-45CA-B72E-34489E3BE18A\">Layout</span> list).\n\
                        </p> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-79F81078-DBFE-44CC-B111-7744611465D4\"></a></span>Similarily, to move a parameter out of a group, click the parameter and then click\n\
                           <span class=\"MenuCascade\" id=\"GUID-D1D1E6BA-5633-41D3-B6BA-F27CFE5BFE7F\">Up</span> or <span class=\"MenuCascade\" id=\"GUID-BE9D18F3-97E3-4463-A8A7-E155900E6F60\">Down</span> until the parameter moves out of the group.\n\
                        </p> \n\
                     </li>\n\
                  </ol> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS34BA39B437A993419C80CAB58E3BEFA1-0019\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-A1ADEB09-B199-4B0B-9824-22A480234A37\"></a></span> To add a tab\n\
                  </h3>  <span class=\"anchor_wrapper\"><a name=\"GUID-2BCC37CA-D869-4CFF-8C97-59CF785B3BD5\"></a></span><ol type=\"1\" start=\"1\">\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-DD871F21-2FD9-4691-A59B-07765FF25B75\"></a></span>Under <span class=\"MenuCascade\" id=\"GUID-498CCE2C-E7C3-4CCF-B8E7-CB15D0DCFD9F\">Groupings</span>, in the <span class=\"MenuCascade\" id=\"GUID-483DD0EA-AE09-4F44-8E22-BAF695B06E38\">Name</span> box, type a name for the tab.\n\
                        </p> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-D2CBA2DE-2ED8-4181-A428-F54FED426830\"></a></span>If you want a group without a name (label), you have to edit the generated call to\n\
                           <a href=\"#!/url=./si_om/PPGLayout.AddGroup.html\">PPGLayout.AddGroup</a> or PPGLayout::AddGroup in the <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_PropertyCallbacks.htm#WS34BA39B437A993419C80CAB58E3BEFA1-0023\">DefineLayout</a></span> callback.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-A0736873-CC37-441A-8AB6-934B65440F20\"></a></span>Click <span class=\"MenuCascade\" id=\"GUID-D99F0276-9848-451F-8BAB-32AB34D1DCF9\">Add Tab</span>.\n\
                        </p> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-1E07589A-1AC0-498C-9ECE-68E77237BC3A\"></a></span>The first time you add a tab, all parameters already in the <span class=\"MenuCascade\" id=\"GUID-F979EFB3-11C6-40A3-9375-788FE471D680\">Layout</span> list are put on that tab.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-4A208D69-9FB1-4D24-A9A1-0DA0C7349629\"></a></span>To add another tab, type a name for the tab in the <span class=\"MenuCascade\" id=\"GUID-F08E60D9-C972-48DB-9992-EB2A4DAC3E9D\">Name</span> box, and then (before you click <span class=\"MenuCascade\" id=\"GUID-AFAD32C9-8706-40B7-A941-78C5363A246B\">Add Tab</span>) do one of the following:\n\
                        </p> \n\
                        <ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-66B5D744-2EBA-404E-8315-86E2BA4B269A\"></a></span>Add more parameters to the layout, and then, in the <span class=\"MenuCascade\" id=\"GUID-141EBAC3-ECB6-4816-B1F8-BAA6DF667827\">Layout</span> list, click one of the parameters you just added.\n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-B32BFC97-54DA-497A-8B6D-980A3DD342B2\"></a></span>Use the <span class=\"MenuCascade\" id=\"GUID-600A3A06-13A8-4C2E-B31F-E5BDD22A7DCA\">Up</span> and <span class=\"MenuCascade\" id=\"GUID-9897D386-CF62-42D1-B48A-1FFEBC90E8F5\">Down</span> buttons to move some parameters off the tab.\n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-D6715FAF-818A-4270-B15F-05732AF92E69\"></a></span>Click a tab (the <span class=\"MenuCascade\" id=\"GUID-D04ADBDB-6329-4B66-859E-A5384045BF26\">Tab \"name\"</span> { line)in the Layout list. This will result in an empty tab being added.\n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                     </li>\n\
                  </ol> \n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";