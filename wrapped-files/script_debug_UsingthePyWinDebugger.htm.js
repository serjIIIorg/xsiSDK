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
      <meta name=\"topicid\" content=\"GUID-B72AE06C-A499-4ACB-B48C-027CBEEBAB33\" />\n\
      <meta name=\"indexterm\" content=\"Debug Features (Python debugger)\" />\n\
      <meta name=\"indexterm\" content=\"debugging: setting and clearing breakpoints\" />\n\
      <meta name=\"indexterm\" content=\"Python debugger\" />\n\
      <meta name=\"indexterm\" content=\"breakpoints: clearing\" />\n\
      <meta name=\"indexterm\" content=\"Python debugger\" />\n\
      <meta name=\"indexterm\" content=\"breakpoints: setting\" />\n\
      <meta name=\"indexterm\" content=\"Python debugger\" />\n\
      <meta name=\"indexterm\" content=\"Python: setting and clearing breakpoints\" />\n\
      <meta name=\"indexterm\" content=\"debugging: stepping through scripts\" />\n\
      <meta name=\"indexterm\" content=\"Python debugger\" />\n\
      <meta name=\"indexterm\" content=\"stepping through scripts: Python debugger\" />\n\
      <meta name=\"indexterm\" content=\"debugging: viewing\" />\n\
      <meta name=\"indexterm\" content=\"the call stack: Python debugger\" />\n\
      <meta name=\"indexterm\" content=\"call stack: viewing\" />\n\
      <meta name=\"indexterm\" content=\"Python debugger\" />\n\
      <meta name=\"indexterm\" content=\"viewing the call stack: Python debugger\" />\n\
      <meta name=\"indexterm\" content=\"debugging: viewing\" />\n\
      <meta name=\"indexterm\" content=\"watches: Python debugger\" />\n\
      <meta name=\"indexterm\" content=\"watches: setting\" />\n\
      <meta name=\"indexterm\" content=\"Python debugger\" />\n\
      <meta name=\"indexterm\" content=\"watches: viewing\" />\n\
      <meta name=\"indexterm\" content=\"Python debugger\" />\n\
      <meta name=\"indexterm\" content=\"variables: viewing watches\" />\n\
      <meta name=\"indexterm\" content=\"Python debugger\" />\n\
      <meta name=\"indexterm\" content=\"variables: setting watches\" />\n\
      <meta name=\"indexterm\" content=\"Python debugger\" />\n\
      <meta name=\"indexterm\" content=\"Invoking the PyWin Debugger\" />\n\
      <meta name=\"indexterm\" content=\"debugger: invoking for Python\" />\n\
      <meta name=\"indexterm\" content=\"controlling Softimage from the Python debugger\" />\n\
      <meta name=\"indexterm\" content=\"Enhancing AutoComplete\" />\n\
      <meta name=\"indexterm\" content=\"syntax help with Python debugger\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Using the PyWin Debugger</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"attributes\", \"si_cpp/group__RenderMapDefine.html#ga846eefb80d8eb3fd3e0fd17e1fee1e63\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-B72AE06C-A499-4ACB-B48C-027CBEEBAB33\"></a></span><div class=\"head\">\n\
            <h1>Using the PyWin Debugger</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-305AD568-54D2-4F17-B0C5-4E2F419058F5\"></a></span>The PyWin Debugger is an interactive GUI that allows you to debug scripts running\n\
               in Softimage using the power of Python debugging. The module that defines it is <em class=\"strong\">debugger</em>, which is built on the <em class=\"strong\">pdb</em> module (the standard Python debugger).\n\
            </p><img src=\"../images/GUID-DA5175E3-860F-45E9-9F31-E7126E2C233C-low.png\" /><div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS74602FA0B9B41E4C91B574963E250A95-000E\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-E6E181A4-9319-4B3D-B116-BAFD9A461CD5\"></a></span> Debug Features\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-175850B9-48A4-4BF8-B5A8-394D1BB7029C\"></a></span>The PyWin Debugger provides the following debugging tools to help you debug your scripts:\n\
               </p> \n\
               <div class=\"table_Ruled\">\n\
                  <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                     <colgroup>\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                     </colgroup>\n\
                     <tr class=\"ruledHeading\">\n\
                        <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0DB0B5E8-0207-44D3-85C7-16B0E4CEA571\"></a></span><p class=\"table-heading\">Action</p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D53895A8-A39A-488D-9D57-C9B825195B93\"></a></span><p class=\"table-heading\">Toolbar</p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FCE3213C-08BD-467F-9329-EF821AF03E45\"></a></span><p class=\"table-heading\">Menu</p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-58F2988E-4EBA-4DE6-8FCF-339FD2DC6CBC\"></a></span><p class=\"table-heading\">Hotkey</p> \n\
                        </th>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2783D4F5-C5CA-474F-99F8-8E0DA4583F60\"></a></span><p class=\"table-body\"> Setting and clearing breakpoints.</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\">&nbsp; <span class=\"anchor_wrapper\"><a name=\"GUID-C379A78A-3F74-406F-A49A-D4E54009A391\"></a></span><p class=\"table-body\"> <img src=\"../images/GUID-C749C853-BA9D-4766-BBDF-664537F1FB17-low.png\" /> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-842CD35B-B49C-4C1A-8AD2-90C3245BBCC9\"></a></span><p class=\"table-body\">File &gt; Debug &gt; Toggle Breakpoint</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EE9A6D69-6624-4A32-95DC-AA1D5B82A25B\"></a></span><p class=\"table-body\">F9</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F2DFD842-64C2-4B06-B683-6D04FCB0D422\"></a></span><p class=\"table-body\"> Stepping through scripts.</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\">&nbsp; <span class=\"anchor_wrapper\"><a name=\"GUID-CE649CE6-7159-48A9-9925-D640A31490B3\"></a></span><p class=\"table-body\"> <img src=\"../images/GUID-2BFAA258-83B7-40D3-91AC-041096E64BD1-low.png\" /> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FAC7A17D-A8D1-483B-9470-04BA3DFBCB45\"></a></span><p class=\"table-body\">File &gt; Debug &gt; Step in</p> <span class=\"anchor_wrapper\"><a name=\"GUID-985B8FB7-5F90-463A-9BB7-D86C94AECFFB\"></a></span><p class=\"table-body\">File &gt; Debug &gt; Step out</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DCAA6811-D205-4799-B827-590AEA0119B6\"></a></span><p class=\"table-body\">F10</p> <span class=\"anchor_wrapper\"><a name=\"GUID-C64E3724-9FD7-4348-BE10-F4DDCEB95340\"></a></span><p class=\"table-body\">F11</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2775695B-E63D-4BFC-AA90-9895644B0A93\"></a></span><p class=\"table-body\"> Viewing the call stack (useful when you are debugging scripts called from within\n\
                              scripts).\n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\">&nbsp; <span class=\"anchor_wrapper\"><a name=\"GUID-5DE5581B-C595-4486-A006-7C8E13D7CF6A\"></a></span><p class=\"table-body\"> <img src=\"../images/GUID-4A530DA3-F47A-4A3D-AC6D-EF84122B492C-low.png\" /> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\">&nbsp; <span class=\"anchor_wrapper\"><a name=\"GUID-BB1535C0-1066-4A32-BF1F-2263DF81FE4E\"></a></span><p class=\"table-body\" /> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\">&nbsp; <span class=\"anchor_wrapper\"><a name=\"GUID-F50C05F1-5800-4154-A96B-C4646F939F21\"></a></span><p class=\"table-body\" /> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9991D3EA-22C2-43DE-8DC4-56262A49D3F8\"></a></span><p class=\"table-body\"> Setting and viewing variables.</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\">&nbsp; <span class=\"anchor_wrapper\"><a name=\"GUID-19888575-0609-4F66-A2BD-2FF26132CB7F\"></a></span><p class=\"table-body\"> <img src=\"../images/GUID-79EF3EC0-21B2-4E0F-8C5E-4994B514FA37-low.png\" /> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\">&nbsp; <span class=\"anchor_wrapper\"><a name=\"GUID-CCAA6AF6-308D-4DC6-BB22-E986657A5B03\"></a></span><p class=\"table-body\" /> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\">&nbsp; <span class=\"anchor_wrapper\"><a name=\"GUID-33C9F986-48B8-4BDF-B865-4F09C9766C93\"></a></span><p class=\"table-body\" /> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-771685E9-5A99-4CB9-96AE-C9F18789ACB7\"></a></span><p class=\"table-body\">See what\'s available in a Python module (Python Object Browser) or COM typelib (COM\n\
                              Browser)\n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\">&nbsp; <span class=\"anchor_wrapper\"><a name=\"GUID-352FC0E3-FAC0-4267-AF6E-ADA81657469F\"></a></span><p class=\"table-body\" /> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-88075E0C-872B-43DD-BE4C-8F278640DDDA\"></a></span><p class=\"table-body\">Tools &gt; Browser</p> <span class=\"anchor_wrapper\"><a name=\"GUID-C2803A96-2AC4-4D66-AB26-047DF0CA56F3\"></a></span><p class=\"table-body\">Tools &gt; COM Browser</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\">&nbsp; <span class=\"anchor_wrapper\"><a name=\"GUID-4CDE55E2-A54D-499B-BFC7-6FBF0CE2505C\"></a></span><p class=\"table-body\" /> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D2A667C5-C367-41BE-BF4B-B05103E3D6A3\"></a></span><p class=\"table-body\">Convert COM libraries into static dispatch Python modules</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\">&nbsp; <span class=\"anchor_wrapper\"><a name=\"GUID-D14A6522-192A-4F31-8930-CA3AD3555FAA\"></a></span><p class=\"table-body\" /> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2266D9EA-CD93-4683-9A70-81A5DF387B2B\"></a></span><p class=\"table-body\">Tools &gt; COM Makepy utility</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\">&nbsp; <span class=\"anchor_wrapper\"><a name=\"GUID-43B98B79-C363-4668-9A63-5D39D9D543EC\"></a></span><p class=\"table-body\" /> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9C34F3A9-733D-4319-9507-EB4E00A5B063\"></a></span><p class=\"table-body\">Display output from any programs that use win32traceutil</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\">&nbsp; <span class=\"anchor_wrapper\"><a name=\"GUID-332DFD83-280C-4681-AB7F-31E3CFE5E158\"></a></span><p class=\"table-body\" /> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3BA8BDBA-98C5-4B2A-BE50-2008BB0D33E6\"></a></span><p class=\"table-body\">Tools &gt; Trace Collector Debugging tool</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\">&nbsp; <span class=\"anchor_wrapper\"><a name=\"GUID-585B676E-7FB6-416D-B7B2-A052BB1BDA6E\"></a></span><p class=\"table-body\" /> \n\
                        </td>\n\
                     </tr>\n\
                  </table>\n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS74602FA0B9B41E4C91B574963E250A95-0013\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-25117CB1-401A-4392-88C5-CD40B15B0D28\"></a></span> Invoking the PyWin Debugger\n\
               </h2>   \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-BA5A2AF2-29B8-44B0-A75E-A872DD032F21\"></a></span>If you are using the recommended pywin32 extension for Python, the PyWin Debugger\n\
                  is already installed and waiting to be invoked. Because it is a Python module, you\n\
                  need to import it before you can use it:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
# This loads the debugger module...\n\
import pywin.debugger as dbg\n\
\n\
# This launches the GUI:\n\
dbg.brk()</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-4881496C-2A65-48CB-9229-A50C3D799E8B\"></a></span>An alternative call to the debugger is:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
dbg.set_trace()</pre></div> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-E6165EC3-A776-483B-BAF9-2B4325D811A6\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-BE4634C6-9CFB-42DD-BFE8-7605AC9C1AB0\"></a></span>The context menu in the Script Editor provides an option to auto-insert this snippet:\n\
                     </p> \n\
                  </div>\n\
               </div> <img src=\"../images/GUID-77C8C334-9986-40A8-9AF7-D4B0A62B685D-low.png\" /> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS74602FA0B9B41E4C91B574963E250A95-0015\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-84AD4712-E376-41FC-93ED-052760F69A50\"></a></span>Controlling Softimage from the Debugger\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-4ECF1B7A-6ECE-4564-81DC-80A9886D9AF3\"></a></span>Because the PyWin Debugger interacts directly with Softimage you can control Softimage\n\
                  by typing commands in the Interactive Window. For example, if you type <span class=\"code\" translate=\"no\">Application.LogMessage( \"Debug this!\" )</span> in the Debugger\'s Interactive Window and press Enter, <span class=\"code\" translate=\"no\">\"Debug this!\"</span> is logged to the history pane in Softimage.\n\
               </p> <img src=\"../images/GUID-DEC3E4F4-DCA5-4C77-B992-195B5EAE9262-low.png\" /> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS74602FA0B9B41E4C91B574963E250A95-0017\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-5992188E-18C5-42A0-A690-4C2384FB0DC8\"></a></span> Enhancing AutoComplete\n\
               </h2>   \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-748EE667-210D-47D5-B4C1-454DDA690E6F\"></a></span>You can modify the interactive window in the PyWin debugger to have a Softimage object\n\
                  expose all its methods in the auto-complete prompt.\n\
               </p> \n\
               <ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-75011633-3912-4954-BC3E-4D09530762F4\"></a></span>Edit this file: <span class=\"filePath\" translate=\"no\">%PythonPath%\\Lib\\site-packages\\pythonwin\\pywin\\scintilla\\view.py</span> and add the following lines in the <span class=\"code\" translate=\"no\">_AutoComplete</span> function (use the context lines to find out where to put the code):\n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
            # The object may be a COM object with typelib support - lets see if we can get its props.\n\
            # (contributed by Stefan Migowsky)\n\
            try:\n\
                # Get the automation <a href=\"javascript:void(0)\" data=\"attributes\" class=\"a_multireflink\">attributes</a>\n\
                items_dict.update(ob.__class__._prop_map_get_)\n\
                # See if there is an write only property \n\
                # could be optimized\n\
                items_dict.update(ob.__class__._prop_map_put_)\n\
                # append to the already evaluated list\n\
            except AttributeError:\n\
                pass\n\
 # BEGIN ADDED LINES\n\
            # The object might be a pure COM dynamic dispatch with typelib support - lets see if we can get its props.\n\
            if hasattr(ob, \"_oleobj_\"):\n\
                try:\n\
                    for iTI in xrange(0,ob._oleobj_.GetTypeInfoCount()):\n\
                        typeInfo = ob._oleobj_.GetTypeInfo(iTI)\n\
                        typeAttr = typeInfo.GetTypeAttr()\n\
                        for iFun in xrange(0,typeAttr.cFuncs):\n\
                            funDesc = typeInfo.GetFuncDesc(iFun)\n\
                            funName = typeInfo.GetNames(funDesc.memid)[0]\n\
                            if not items_dict.has_key(funName):\n\
                                items_dict[funName] = 1\n\
                except:\n\
                    pass\n\
 # END ADDED LINES\n\
        except:\n\
            win32ui.SetStatusText(\"Error attempting to get object <a href=\"javascript:void(0)\" data=\"attributes\" class=\"a_multireflink\">attributes</a> - %s\" % (\'sys.exc_info()[0]\',))</pre></div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";