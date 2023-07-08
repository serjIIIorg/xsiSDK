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
      <meta name=\"topicid\" content=\"GUID-BB964F74-C272-4B2E-835A-C7872097591F\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Using the Mental Ray Shader Wizard</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"Parameter\", \"si_cpp/classXSI_1_1Parameter.html\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-BB964F74-C272-4B2E-835A-C7872097591F\"></a></span><div class=\"head\">\n\
            <h1>Using the Mental Ray Shader Wizard</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-41C0D107-023D-4037-B74F-E65D3BA087D0\"></a></span>Before you write the code for your shader function, you can build its interface and\n\
            create the necessary project files so that you can successfully integrate your shader\n\
            with Softimage. You can use the shader wizard to do this. \n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-2998EC3B-33E3-44E2-B1B7-D0CF7B3A0D65\"></a></span>The shader wizard steps you through the templates that compose the SPDL file, which\n\
            contains the information required to display the shader\'s user interface. It also\n\
            generates the project files you need to write your shader, ensuring that your implementation\n\
            structures match the parameter definitions in the SPDL file. \n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-FBC00BE7-537A-4F56-981F-2DCB2CF47645\"></a></span> <span class=\"anchor_wrapper\"><a name=\"OL_E5B245AC12D14752BB78512A524DD6C9\"></a></span><ol type=\"1\" start=\"1\">\n\
               <li>Click <span class=\"MenuCascade\" id=\"GUID-1CB86F10-0B0D-4EC3-96C4-D9BBEC21E39D\">File <img src=\"../images/ac.menuaro.gif\" /> Plug-ins</span> to open the Plug-in Manager. \n\
                  <div><span class=\"anchor_wrapper\"><a name=\"GUID-F71698AD-4ADF-4B6A-92FE-3572F35655C4\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-6F1F94F4-23C3-4A38-844B-36E3A9BB5B59\"></a></span> In the Tools Development Environment layout, click the <span class=\"MenuCascade\" id=\"GUID-B17BF674-589A-47A0-992F-00EEAA0B479B\">Plug-ins</span> tab to switch to the Plug-in Manager view. \n\
                        </p> \n\
                     </div>\n\
                  </div> \n\
               </li>\n\
               <li>Do one of the following: <span class=\"anchor_wrapper\"><a name=\"UL_0992F22C21E648D1A405A1489CC59762\"></a></span><ul>\n\
                     <li>To create the property in the User location, click <span class=\"MenuCascade\" id=\"GUID-3179DDE2-2DAB-4E81-B953-5FEEA93FC3D7\">File <img src=\"../images/ac.menuaro.gif\" /> New <img src=\"../images/ac.menuaro.gif\" /> Shaders <img src=\"../images/ac.menuaro.gif\" /> Mental Ray Shader</span>. \n\
                     </li>\n\
                     <li>To create the shader in a different location (such as a workgroup or an Add-on directory),\n\
                        expand the location in the Plug-in Tree, right-click the <span class=\"MenuCascade\" id=\"GUID-2D0F3870-AB9F-4725-B79C-623FF4A3F978\">SPDL</span> folder and click <span class=\"MenuCascade\" id=\"GUID-3293FB03-8EF9-4B19-890C-512C2DC2379C\">New <img src=\"../images/ac.menuaro.gif\" /> Shaders <img src=\"../images/ac.menuaro.gif\" /> Mental Ray Shader</span>. \n\
                     </li>\n\
                  </ul> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-0DFB8FF3-D93C-404F-9607-F7591899B32C\"></a></span>The mental ray shader wizard appears. \n\
                  </p> \n\
               </li>\n\
               <li>Under <span class=\"MenuCascade\" id=\"GUID-CFA9D3B5-B520-4798-808C-C91C4FFC4DBE\">Shader Name</span>, type short and long names for the shader. \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-74A5A6E3-2819-42C8-9F06-3960BA043E3B\"></a></span>The first character in a shader name should be a letter. Subsequent characters can\n\
                     be letters, numbers, or underscore (_) characters. \n\
                  </p> \n\
               </li>\n\
               <li>Add parameters to the shader. </li>\n\
               <li>If the shader supports more than one render engine, fill in the metashader information.\n\
                  \n\
               </li>\n\
               <li>Define the layout of the parameters on the property page. </li>\n\
               <li>On the <span class=\"MenuCascade\" id=\"GUID-54B873CF-5AB0-482C-AAD6-A9D7807DD4BA\">Shader Information </span>tab, click <span class=\"MenuCascade\" id=\"GUID-B3C4D0EE-FEF5-46BC-8989-2CBA34E8F549\">Generate Project</span> to generate the SPDL, C++, and .VCPROJ files for the shader. \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-7A9B7F24-E61B-4FE5-A956-268D9FA42A2C\"></a></span>All the generated files are put in the specified output folder (by default, in the\n\
                     Application\\spdl folder). \n\
                  </p> \n\
               </li>\n\
               <li>If the spdl file is not listed in the Plug-in Tree, click the <span class=\"MenuCascade\" id=\"GUID-CF3ECB4C-EC3E-47F3-84AD-180F1E36B927\">SPDL</span> tab and then click <span class=\"MenuCascade\" id=\"GUID-73C98B8C-7E3B-44FB-8FB2-DD7FB374093F\">Update All</span>. \n\
               </li>\n\
               <li>Compile the shader. Put the compiled dll/dso in the Application\\bin\\{CPU} folder,\n\
                  where {CPU} is nt-x86, linux, or nt-x86-64. \n\
               </li>\n\
               <li>Generate a preset for the shaders. In the Plug-in Tree, right-click the SPDL file\n\
                  and choose <span class=\"MenuCascade\" id=\"GUID-88F8458E-FD57-48B2-B6B6-F075B5FB1765\">Regenerate Preset</span>. \n\
               </li>\n\
            </ol> \n\
         </p>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_DC7DCF26CF004E89A175DCA2738564E2\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-3C78BC79-3DE0-46A5-8A08-FADF9FB56E69\"></a></span> Adding Parameters\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-1E4AF59B-0272-4217-BE1E-5C9137C9309D\"></a></span>The <span class=\"MenuCascade\" id=\"GUID-BDF6620A-59B0-4557-BAC9-26E795804A03\">Parameters</span> tab allows you to customize the <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"Parameter\" class=\"a_multireflink\">Parameter</a></span> section in the generated SPDL file. \n\
            </p> <span class=\"anchor_wrapper\"><a name=\"OL_147F8908C13D44ABA203F37C5C229CE3\"></a></span><ol type=\"1\" start=\"1\">\n\
               <li>In the Shader Wizard, click the <span class=\"MenuCascade\" id=\"GUID-3DB2CFD5-E7F1-4BC7-8014-E990274DB521\">Parameters</span> tab. \n\
               </li>\n\
               <li>Under <span class=\"MenuCascade\" id=\"GUID-EA9041E0-3F26-475E-B537-7E4521A2BDAE\">New Parameter</span>, define a parameter: <span class=\"anchor_wrapper\"><a name=\"UL_29B990DACDAD4C90A70F6D1DB60C4F7A\"></a></span><ul>\n\
                     <li>In the <span class=\"MenuCascade\" id=\"GUID-A1A3B00C-7BFB-4585-B1E3-619A89ED0275\">Type</span> list, click the type of the parameter. \n\
                     </li>\n\
                     <li>In the <span class=\"MenuCascade\" id=\"GUID-188277B7-FDF4-4681-97F1-BD1BBD6D6560\">Name</span> box, type a name for the parameter. \n\
                     </li>\n\
                     <li>In the <span class=\"MenuCascade\" id=\"GUID-A7D32D08-F1F5-4DC8-AE5A-B2C12260E4C2\">Label</span> box, type the text that will appear on the property page. \n\
                     </li>\n\
                     <li>Set the other parameter attributes as required. </li>\n\
                  </ul> \n\
               </li>\n\
               <li>Click <span class=\"MenuCascade\" id=\"GUID-532C7909-A6DC-4EB6-91D1-D25075816707\">Add Parameter</span>. \n\
               </li>\n\
            </ol> \n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-F8950273-7D16-405B-B51C-E748A079DE58\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> <span class=\"anchor_wrapper\"><a name=\"UL_D1E4353437ED4D539D8A194CFF3F082A\"></a></span><ul>\n\
                     <li>To edit a parameter, click the shaded cell at the start of a row (the row should be\n\
                        highlighted a light green), and then click <span class=\"MenuCascade\" id=\"GUID-3FC2E288-E591-47AE-B97D-25C001BF82BB\">Edit Selected</span>. Edit the parameter definition and then click <span class=\"MenuCascade\" id=\"GUID-3CE6BAFA-182A-4F71-A7C0-90F2800EF637\">Update Parameter</span>. \n\
                     </li>\n\
                     <li>To delete a parameter, click the shaded cell at the start of a row (the row should\n\
                        be highlighted a light green), and then click <span class=\"MenuCascade\" id=\"GUID-41A0A910-AECE-4BA5-82E5-A31409598930\">Delete Selected</span>. \n\
                     </li>\n\
                  </ul> \n\
               </div>\n\
            </div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_E600D58D38FA43B8B7C71A27EB468D48\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-6FDE43F3-5449-4B99-93A7-2AE37D596D96\"></a></span>MetaShader Information\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-F521F804-576B-441A-B92C-CCAB5B707A24\"></a></span>The Metashader Information tab allows you to customize the <span class=\"code\" translate=\"no\">MetaShader</span> section in the generated SPDL file. For example, you can set options for mental ray,\n\
               or specify a custom render engine. \n\
            </p> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_090E906DD2394E649BAA5F1CA60C9648\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-9090C3A0-DD83-49AB-AF39-2F24223305DE\"></a></span>To add a custom render engine\n\
               </h3> <span class=\"anchor_wrapper\"><a name=\"OL_24F1A47804AF47F4A724CF1732153226\"></a></span><ol type=\"1\" start=\"1\">\n\
                  <li>Select the <span class=\"MenuCascade\" id=\"GUID-43B6B15E-33C6-4FFB-A2DC-1AF2D1F500B3\">Use a custom section</span> check box. \n\
                  </li>\n\
                  <li>In the <span class=\"MenuCascade\" id=\"GUID-943BDB90-241C-482D-B445-B15608710653\">Renderer Name</span> box, type the name of the rendering engine. \n\
                  </li>\n\
                  <li>In the <span class=\"MenuCascade\" id=\"GUID-239A884E-CFF1-4B1C-9746-06A210FB90E8\">Entry Point Name</span>, type the name of the shader function. \n\
                  </li>\n\
                  <li>If the shader is implemented in a file, type the name of the file in the <span class=\"MenuCascade\" id=\"GUID-A092CB4D-191A-4051-9E70-581ACE6E241A\">File Name</span> box. \n\
                  </li>\n\
                  <li>Shader Text is text that is inserted in the <span class=\"code\" translate=\"no\">BeginText...EndText </span>section of the SPDL file. For example, the implementation of the shader may be included\n\
                     in this section. \n\
                  </li>\n\
                  <li>Add any options required by the render engine. </li>\n\
               </ol> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_C62CF5A38C58468080F18326E6DD8EA5\"></a></span> \n\
                  <h4><span class=\"anchor_wrapper\"><a name=\"GUID-EB55F8F4-1DFA-416A-9ACE-11233B8482E1\"></a></span>To add an option\n\
                  </h4> <span class=\"anchor_wrapper\"><a name=\"OL_C3A50EF2CE8043D39EC514436DBD4044\"></a></span><ol type=\"1\" start=\"1\">\n\
                     <li>Under<span class=\"MenuCascade\" id=\"GUID-4A3B7DFE-6194-41C3-BF8C-0D9A699BAC98\"> Add Custom Option</span>: <span class=\"anchor_wrapper\"><a name=\"UL_7CE7514A982248558377A19DA6D316A1\"></a></span><ul>\n\
                           <li>In the <span class=\"MenuCascade\" id=\"GUID-6199C3F7-8948-4E9D-B882-B9FCA02792C6\">Name</span> box, type the name of the option. \n\
                           </li>\n\
                           <li>In the <span class=\"MenuCascade\" id=\"GUID-46C0CD9C-3190-419C-9E23-5BF7B66FF38D\">Value</span> box, tpye the vale oft he option. \n\
                           </li>\n\
                        </ul> \n\
                     </li>\n\
                     <li>Click <span class=\"MenuCascade\" id=\"GUID-3E8D1913-DBD1-44A9-953F-876A904D4B1E\">Add Option</span>. <span class=\"anchor_wrapper\"><a name=\"UL_C8474FDAE5C54C71A895D7728AD740A2\"></a></span><ul>\n\
                           <li>To edit the name or value of an option after you add it, click a cell and type the\n\
                              new text. \n\
                           </li>\n\
                           <li>To delete an option, click the shaded cell at the start of a row (the row should be\n\
                              highlighted a light green), and then click <span class=\"MenuCascade\" id=\"GUID-632043B0-ACE8-4C81-9584-F1C2F3421E1E\">Delete Selected Options</span>. \n\
                           </li>\n\
                        </ul> \n\
                     </li>\n\
                  </ol> \n\
               </div> \n\
            </div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_B23A3D6DCCCF4BAF8D000536D1044C10\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-50616DE5-3888-4A39-9988-09952A37360D\"></a></span>Defining the Layout \n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-DFE977C1-9BB2-4E60-911E-73DE867ED4DC\"></a></span>The <span class=\"MenuCascade\" id=\"GUID-7756D12B-1B38-4E0C-912A-A129503F543F\">Layout</span> tab allows you to define the layout of controls on the shader\'s property page. \n\
            </p> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_71271E916BCE4180905C3CFA2B920F3B\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-0AF7416B-D04A-4D30-AE5E-B7783BEF1E94\"></a></span>To add controls to the property page\n\
               </h3> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-9FD18BAD-D4CF-4844-84DD-2C9B815910FA\"></a></span>In the <span class=\"MenuCascade\" id=\"GUID-47818772-4943-40A7-8C72-CB8DF03395BA\">Parameters</span> list, click a parameter, and then click <span class=\"MenuCascade\" id=\"GUID-74787AFD-8585-45FD-8C6F-35833C454E72\">Add</span>. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-554D452C-6EDC-4020-8258-FF07A235E535\"></a></span>By default, parameters are added to the layout in the order you add them. But if you\n\
                  select a parameter in the Layout list, then the next time you add a parameter it is\n\
                  inserted above the selected parameter. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-AD98CCBD-350F-4653-BB3E-F57E39C5CB17\"></a></span>You can reorder the Layout list using the Up and Down buttons. \n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_0F01DEAAE1424258BCEF7DAC860B4516\"></a></span> \n\
                  <h4><span class=\"anchor_wrapper\"><a name=\"GUID-9C1A19E4-228F-4D4F-815F-9730245E0A8F\"></a></span> To add a row\n\
                  </h4> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-EC0186EC-5295-447F-A3CB-93079515E7B0\"></a></span> <span class=\"anchor_wrapper\"><a name=\"OL_5D5D25F5C52E4072AC877033C8137F8B\"></a></span><ol type=\"1\" start=\"1\">\n\
                        <li>Click <span class=\"MenuCascade\" id=\"GUID-1F0B45A0-0B54-4264-8DB3-4D513613CD2A\">Add Row</span>. \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-56FCC54A-9A42-49AB-90CD-14A6BFDE2ADB\"></a></span>An empty row is added to the <span class=\"MenuCascade\" id=\"GUID-B11B94E0-BA23-4A5E-BB5C-2528AB7B6EB6\">Layout</span> list. If a parameter is selected in the <span class=\"MenuCascade\" id=\"GUID-66775373-A00F-4190-BF0D-9AD7CB2F9D19\">Layout</span> list, the row is added above the selected parameter. \n\
                           </p> \n\
                        </li>\n\
                        <li>In the <span class=\"MenuCascade\" id=\"GUID-4DDBEA04-6341-45BB-AB4C-6416713C4224\">Layout</span> list, click one of the parameters you want to put in the row, and then click <span class=\"MenuCascade\" id=\"GUID-3C16B82F-8F4A-4775-93F0-BBD9DFA3A785\">Up</span> (or <span class=\"MenuCascade\" id=\"GUID-41845C7C-3685-4B4A-ADD0-5F288BD95066\">Down</span>) until the parameter is in the row. \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-EDAFDD7E-56C7-48E2-B5EF-8EB1D21161EE\"></a></span>Do the same for the other parameters you want to put in the row. \n\
                           </p> \n\
                        </li>\n\
                     </ol> \n\
                  </p> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_A2D18CB384994856B7801480794AD6DF\"></a></span> \n\
                     <h5><span class=\"anchor_wrapper\"><a name=\"GUID-E7BED90A-3AA2-43A8-ADE8-F33D36F8A8B7\"></a></span> To add a group\n\
                     </h5> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-5075646A-52F5-4AEB-AD8E-982CD4ED3B55\"></a></span> <span class=\"anchor_wrapper\"><a name=\"OL_93BCC3DEF6634009B2969193F1AC4982\"></a></span><ol type=\"1\" start=\"1\">\n\
                           <li>Under <span class=\"MenuCascade\" id=\"GUID-E69BE708-C532-44FC-90B6-B3D09591325C\">Groupings</span>, in the <span class=\"MenuCascade\" id=\"GUID-8B1E01F2-A1FD-465C-ACE2-0404609ABEEF\">Name</span> box, type a name for the group. \n\
                           </li>\n\
                           <li>Click <span class=\"MenuCascade\" id=\"GUID-D20062DD-35EB-47FB-B8E8-E73B5CFCE0C1\">Add Group</span>. \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-25977926-4E2F-478A-8BEB-EC4D14E16F1B\"></a></span>An empty group is added to the <span class=\"MenuCascade\" id=\"GUID-A06CB9EF-3006-4F1E-914A-3B1596FC9122\">Layout</span> list. If a parameter is selected in the <span class=\"MenuCascade\" id=\"GUID-D9E54ADB-9B2E-4B33-B6A6-AF3A4C9BF2CC\">Layout</span> list, the group is added above the selected parameter. \n\
                              </p> \n\
                           </li>\n\
                           <li>To move a parameter into the group, click the parameter and then click either <span class=\"MenuCascade\" id=\"GUID-B576052F-606B-4B6B-BDFF-07150077B66E\">Up</span> (if the parameter is below the group in the <span class=\"MenuCascade\" id=\"GUID-95FA2306-CC11-4F7F-8B3B-A683C8E91EC7\">Layout</span> list) or <span class=\"MenuCascade\" id=\"GUID-A71F6D14-38EC-4BF8-B078-6A3238407D87\">Down</span> (if the parameter is above the group in the <span class=\"MenuCascade\" id=\"GUID-601CE4B1-1BEB-40AA-B086-A726781EC40A\">Layout</span> list). \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-2D4719ED-64CC-4EEC-A456-D84FAE296C9E\"></a></span>Similarily, to move a parameter out of a group, click the parameter and then click\n\
                                 <span class=\"MenuCascade\" id=\"GUID-7B9B95D6-FF96-4B16-B41A-65D733F012F2\">Up</span> or <span class=\"MenuCascade\" id=\"GUID-803A5201-6908-4D30-B81D-F35E0B5D0DEF\">Down</span> until the parameter moves out of the group. \n\
                              </p> \n\
                           </li>\n\
                        </ol> \n\
                     </p> \n\
                     <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_EC37EC0B1B6D401ABE6FC64B8B0ECBEE\"></a></span> \n\
                        <h6><span class=\"anchor_wrapper\"><a name=\"GUID-324E212B-1F1C-4C23-85F3-64C1979C6899\"></a></span> To add a tab\n\
                        </h6> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-0022CDF4-80D1-4117-BB45-66B65D6EEE89\"></a></span> <span class=\"anchor_wrapper\"><a name=\"OL_EE74D39F1BE74E3993036EB202295413\"></a></span><ol type=\"1\" start=\"1\">\n\
                              <li>Under <span class=\"MenuCascade\" id=\"GUID-0CF0F1EB-044E-426A-9C11-A1E56802813D\">Groupings</span>, in the <span class=\"MenuCascade\" id=\"GUID-0C142A5A-075A-4412-BE00-8396F2F694D9\">Name</span> box, type a name for the tab. \n\
                              </li>\n\
                              <li>Click <span class=\"MenuCascade\" id=\"GUID-2CB8C2F9-6E88-41CC-984A-C2C9391253A6\">Add Tab</span>. \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-5C7AEF11-F9A8-404E-94F3-8D6E41F6E405\"></a></span>The first time you add a tab, all parameters already in the <span class=\"MenuCascade\" id=\"GUID-395A39C2-6FDC-498F-B2A5-80A82275A69C\">Layout</span> list are put on that tab. \n\
                                 </p> \n\
                              </li>\n\
                              <li>To add another tab, type a name for the tab in the <span class=\"MenuCascade\" id=\"GUID-E89A2953-D2C7-4CB1-9091-D2A7640ECFC2\">Name</span> box, and then (before you click <span class=\"MenuCascade\" id=\"GUID-2C79DCEF-7F38-4A4B-8F75-2D8818FE6EE4\">Add Tab</span>) do one of the following: <span class=\"anchor_wrapper\"><a name=\"UL_CA123A9980494080A0271CA5CBF51013\"></a></span><ul>\n\
                                    <li>Add more parameters to the layout, and then, in the <span class=\"MenuCascade\" id=\"GUID-ECA27902-79C8-4E60-ABCD-75B64A589C39\">Layout</span> list, click one of the parameters you just added. \n\
                                    </li>\n\
                                    <li>Use the <span class=\"MenuCascade\" id=\"GUID-7AF4105E-2ECA-4325-B990-7179D1A21EA4\">Up</span> and <span class=\"MenuCascade\" id=\"GUID-954AB22D-4B40-4C01-B2C5-1F6DB7251E19\">Down</span> buttons to move some parameters off the tab. \n\
                                    </li>\n\
                                    <li>Click a tab (the <span class=\"MenuCascade\" id=\"GUID-CB7502D9-80DC-4733-8B13-94364EA64AE5\">Tab \"name\" {</span> line)in the Layout list. This will result in an empty tab being added. \n\
                                    </li>\n\
                                 </ul> \n\
                              </li>\n\
                           </ol> \n\
                        </p> \n\
                     </div> \n\
                  </div> \n\
               </div> \n\
            </div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_654427CADC3543B2846B6B03B108C593\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-94AE5BC3-E0D7-4CD8-84E8-B88F4A313083\"></a></span>Generating a Preset\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-5C7A22E4-B4B0-427C-9F02-18C9BE05E436\"></a></span>In the Plug-in Tree, expand the SPDLs folder, right-click the shader SPDL file, and\n\
               choose <span class=\"MenuCascade\" id=\"GUID-9A3780BB-CA1A-42A0-A429-C6D9E2CA3B02\">Regenerate Preset</span>. \n\
            </p> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-1D03F629-CAA2-44C1-8EC2-2D5A4F331F90\"></a></span>If the Plug-in Tree does not show the shader SPDL file, click <span class=\"MenuCascade\" id=\"GUID-88C458F8-1E1A-4475-AE51-726BC752A7E0\">Update All</span> on the <span class=\"MenuCascade\" id=\"GUID-2319FCB1-0C6A-4C83-957E-35A19F73152D\">SPDL</span> tab. \n\
            </p> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_B5113B9F1A884A98AE1A626667763C2A\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-1EFCB660-8EB7-4D5C-8EAA-8B64F0F33805\"></a></span>Editing a Shader SPDL File\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-090916E1-9E47-4AB8-BFBA-DF53C99F47B8\"></a></span>The <span class=\"code\" translate=\"no\">Logic</span> section of the SPDL file lets you add behavior to your shader\'s property page. For\n\
               example, if no texture is applied to a selected object, you can make the texture parameters\n\
               inaccessible to users. The shader wizard does not generate this type of behavior.\n\
               You\'ll have to add it to the SPDL file yourself. <span class=\"anchor_wrapper\"><a name=\"UL_BC140CB8315E4A3997BE847D7637E126\"></a></span><ul>\n\
                  <li>In the Plug-in Tree, right-click the SPDL file and choose <span class=\"MenuCascade\" id=\"GUID-CEF66144-CEFE-4C7A-A415-D3F92F4FD63E\">Edit</span>. \n\
                  </li>\n\
               </ul> \n\
            </p> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_049264AE783841B5900ACBDC771138D7\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-BC19E6A9-9988-407B-B46B-601D5635C96D\"></a></span>Examples\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-B0D1D73B-2ED8-4DF4-9D73-DC96C1D5F2F4\"></a></span>You can also see the related example <a href=\"#!/url=./examples/Addons/ShowEdges/netview_ShowEdges.htm\">Show Edges and Wireframe</a> located in the examples folder of the Softimage SDK installation directory. \n\
            </p> \n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";