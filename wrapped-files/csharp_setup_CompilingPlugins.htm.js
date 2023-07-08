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
      <meta name=\"topicid\" content=\"GUID-80210B0C-BD50-4B53-B862-8841B471275C\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Compiling Plug-ins</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-80210B0C-BD50-4B53-B862-8841B471275C\"></a></span><div class=\"head\">\n\
            <h1>Compiling Plug-ins</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-08689119-3178-4AEA-B181-E253707CADC1\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span>If you are new to .NET, you can refer to the <span class=\"char_link\"><a href=\"#!/url=./files/csharp_setup_CompilingPlugins.htm#WS1D1057D35CC4FA4FBF44F4C18EA3351F-000A\">Working with the Global Assembly Cache (GAC)</a></span> section for some useful information. \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-F828AE71-DA86-4AFA-87AC-980C6BCF0F9D\"></a></span></p> \n\
               </div>\n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS1D1057D35CC4FA4FBF44F4C18EA3351F-0009\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-B72D2672-D12B-43D4-889A-EFEAF85678A6\"></a></span>To compile a plug-in:\n\
               </h2> <span class=\"anchor_wrapper\"><a name=\"GUID-EE254CE3-12F2-402D-9988-03D487E8CDB5\"></a></span><ol type=\"1\" start=\"1\">\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-DC54581B-D1B2-4868-BC08-0508A57E1E77\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_addons_WorkingwiththePluginTree.htm#WS8AD400B78794354E8F5A74BCE7CD86FD-0033\">Open</a></span> a Softimage command prompt, and type <span class=\"code\" translate=\"no\">devenv</span> to start Visual Studio. \n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-1D9ADFD4-6F96-4C12-AD37-BFC3949BF90A\"></a></span>Starting Visual Studio from a Softimage command prompt sets the environment variables\n\
                        such as <span class=\"code\" translate=\"no\">XSI_HOME</span> properly, which avoids the build and link errors. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-DC4E8DAE-A017-4E00-994D-1052F585A4A5\"></a></span>In Visual Studio , open the <span class=\"code\" translate=\"no\">.csproj</span> project file. \n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-432D3A42-8B54-4208-A203-0C096EA2B7EC\"></a></span>If you want to load the plug-in from a network share, make sure to <span class=\"char_link\"><a href=\"#!/url=./files/csharp_setup_CompilingPlugins.htm#WS1D1057D35CC4FA4FBF44F4C18EA3351F-000F\">create a strong name key</a></span> for your plug-in. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-45FDAF16-199F-43CC-80C2-A8D2793472F0\"></a></span>Select a configuration (Debug or Release) and build the DLL. \n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-D2972276-E90D-4149-B6AA-1F098E86C89B\"></a></span>The first time you build the plug-in, you are prompted to save a Solution File (<span class=\"filePath\" translate=\"no\">.sln</span>). \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-60F6AD7F-886F-4C17-BAAA-BA5D1367F155\"></a></span>To load the plug-in from a network share, make sure to add the plug-in assembly to\n\
                        the GAC (Global Assembly Cache) by running the following from a command prompt: \n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">gacutil /i \\servername\\&lt;plugin_path&gt;\\YourPluginName.dll</pre></div> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-66F6C05F-DF6C-477E-A9E3-CE1493328299\"></a></span>Do one of the following to load the plug-in into Softimage: \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"UL_176D308A5E41411894E31E0EC0449A3D\"></a></span><ul>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-36F189C9-1BBF-4D72-9B1C-0D4F050D8F56\"></a></span>In the Plug-in Manager, click <span class=\"MenuCascade\" id=\"GUID-C2F0D951-D4A4-4441-9205-CBD326992B3A\">Update All</span>. \n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-2AF54454-8A9A-457B-A758-DC88DAB2A67D\"></a></span>In the Plug-in Manager, click <span class=\"MenuCascade\" id=\"GUID-26547D66-551D-419D-8486-6EBCA3EE6B36\">Load</span>, locate the plug-in, and click <span class=\"MenuCascade\" id=\"GUID-2891022C-0513-4D0D-B0CF-FE25E32175D6\">OK</span>. \n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-9C357191-AFC4-4E0D-BB20-CE050AD462FF\"></a></span>In the Plug-in Manager, right-click the<span class=\"MenuCascade\" id=\"GUID-2EEF6F78-0797-4D52-B39D-381305DD06AA\"> Plug-ins</span> folder, and select <span class=\"MenuCascade\" id=\"GUID-053D7CA6-9DF9-45FD-876D-6731D6794C38\">Update</span> from the context menu. \n\
                           </p> \n\
                        </li>\n\
                     </ul> \n\
                  </li>\n\
               </ol> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS1D1057D35CC4FA4FBF44F4C18EA3351F-000A\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-E89C80BA-E144-4B4E-9631-7F8114B3A220\"></a></span>Working with the Global Assembly Cache (GAC)\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-7FF6FC13-B84F-47F3-A047-ADDF968397C9\"></a></span>The Global Assembly Cache (GAC) contains assemblies that can run across multiple applications\n\
                  on a single machine. It performs integrity checks when assemblies are added to the\n\
                  cache, and uses strong names to load the correct version. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-4583D885-36FF-440B-88F4-33C1E1D53891\"></a></span>You can manage the cache with the Global Assembly Cache Utility (<span class=\"code\" translate=\"no\">gacutil</span>). You can install and uninstall assemblies in the cache as well as list the installed\n\
                  assemblies using the <span class=\"code\" translate=\"no\">gacutil</span>. To use the <span class=\"code\" translate=\"no\">gacutil</span>, you must install the .NET Framework SDK, which is available from the MSDN Framework\n\
                  Developer Center. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-174BA390-6A60-4D7C-93ED-5AC12D9F6151\"></a></span>For Softimage, you must determine whether the Softimage SDK assemblies <span class=\"char_link\"><a href=\"#!/url=./files/csharp_setup_CompilingPlugins.htm#WS1D1057D35CC4FA4FBF44F4C18EA3351F-000B\">are installed</a></span> and which versions are running. If they are not installed, you need to <span class=\"char_link\"><a href=\"#!/url=./files/csharp_setup_CompilingPlugins.htm#WS1D1057D35CC4FA4FBF44F4C18EA3351F-000C\">install them</a></span>. \n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS1D1057D35CC4FA4FBF44F4C18EA3351F-000B\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-E96A6FCD-6D96-4124-A78A-61468A8F5218\"></a></span>To determine whether the Softimage assemblies are installed:\n\
                  </h3> <span class=\"anchor_wrapper\"><a name=\"UL_C0BD2F72933A4B8B939DB1677CED576C\"></a></span><ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-4E803EFF-DAFA-4D1E-8B1E-12F8F420CA7C\"></a></span>Run these commands from the Softimage command prompt: \n\
                        </p> \n\
                        <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
gacutil /l Softimage.XSIOM\n\
gacutil /l Softimage.XSIUtil\n\
gacutil /l Softimage.XSIMath\n\
</pre></div> \n\
                        <div><span class=\"anchor_wrapper\"><a name=\"GUID-26E0C08D-F52B-4B8D-870D-7B4F22BC9364\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span>You might see the following message when you run this utility: \n\
                              <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\'gacutil\' is not recognized as an internal or external command, operable program or batch file.</pre></div> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-E009D8B3-6E93-4FA9-BE2D-7D9195F1D47C\"></a></span>Check the <span class=\"filePath\" translate=\"no\">C:\\Program Files (x86)\\Microsoft SDKs</span> directory and add the folder to your <span class=\"code\" translate=\"no\">%PATH%</span>. \n\
                              </p> \n\
                           </div>\n\
                        </div> \n\
                     </li>\n\
                  </ul> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-6823FD55-789D-4654-97CC-589E8F0C832B\"></a></span>If they are properly installed, you might see the following: \n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
The Global Assembly Cache contains the following assemblies:\n\
	Softimage.XSIMath, Version=1.0.0.0, Culture=neutral, PublicKeyToken=a90401fcf6bc5571, processorArchitecture=MSIL\n\
Number of items = 1\n\
\n\
The Global Assembly Cache contains the following assemblies:\n\
	Softimage.XSIUtil, Version=1.0.0.0, Culture=neutral, PublicKeyToken=a90401fcf6bc5571, processorArchitecture=MSIL\n\
Number of items = 1\n\
\n\
The Global Assembly Cache contains the following assemblies:\n\
	Softimage.XSIMath, Version=1.0.0.0, Culture=neutral, PublicKeyToken=a90401fcf6bc5571, processorArchitecture=MSIL\n\
Number of items = 1\n\
</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-BCBDC97F-4183-49B3-9DC1-6422CE0DC2D0\"></a></span>If they are not installed properly, the following message appears: \n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
The Global Assembly Cache contains the following assemblies:\n\
\n\
Number of items = 0\n\
</pre></div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS1D1057D35CC4FA4FBF44F4C18EA3351F-000C\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-BADA2E50-B753-47FF-BE5E-6E91EA978E25\"></a></span>To install the Softimage assemblies in the GAC:\n\
                  </h3> <span class=\"anchor_wrapper\"><a name=\"UL_6B5C6D7E54BA4BA6B7DCFA3CB397A5D0\"></a></span><ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-D608401C-1F40-4793-8051-99536BAC1CA0\"></a></span>Open a Softimage command prompt (it automatically opens at the <span class=\"filePath\" translate=\"no\">Application/bin</span> directory under the factory location) and enter the following three commands: \n\
                        </p> \n\
                        <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
gacutil /i Softimage.XSIOM.dll\n\
gacutil /i Softimage.XSIUtil.dll\n\
gacutil /i Softimage.XSIMath.dll\n\
</pre></div> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-88D12484-4CDB-4965-9BD8-47783AB98894\"></a></span>If the installation is successful, the following message appears: \n\
                        </p> \n\
                        <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Assembly successfully added to the cache\n\
</pre></div> \n\
                     </li>\n\
                  </ul> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS1D1057D35CC4FA4FBF44F4C18EA3351F-000D\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-9671262F-8991-44C1-9BC9-AC4DFB1EB163\"></a></span>To uninstall the Softimage assemblies from the GAC\n\
                  </h3> <span class=\"anchor_wrapper\"><a name=\"UL_6771AC1CE9B9420497CFA0006CB40F72\"></a></span><ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-3BB395CA-3C79-45FB-8FDB-84C802E8EBC8\"></a></span>Open a Softimage command prompt (it automatically opens at the <span class=\"filePath\" translate=\"no\">Application/bin</span> directory under the factory location) and enter the following three commands: \n\
                        </p> \n\
                        <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
gacutil /u Softimage.XSIOM.dll\n\
gacutil /u Softimage.XSIUtil.dll\n\
gacutil /u Softimage.XSIMath.dll\n\
</pre></div> \n\
                     </li>\n\
                  </ul> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS1D1057D35CC4FA4FBF44F4C18EA3351F-000E\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-AB7E8233-B0C8-4F52-A099-39E7F7CDB60C\"></a></span>Strong Names\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-830D5110-0EAD-4535-B88A-1915AC138773\"></a></span>Strong names are encoded signatures that keep assemblies unique on a system. To add\n\
                     your assembly to the <span class=\"char_link\"><a href=\"#!/url=./files/csharp_setup_CompilingPlugins.htm#WS1D1057D35CC4FA4FBF44F4C18EA3351F-000A\">GAC</a></span>, you need to use a strong name key, often stored in a file (<span class=\"filePath\" translate=\"no\">.snk</span>). \n\
                  </p> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS1D1057D35CC4FA4FBF44F4C18EA3351F-000F\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-A771B2E9-0C6D-4043-AE9A-98E7A392B68C\"></a></span>To create a strong name key:\n\
                     </h4> <span class=\"anchor_wrapper\"><a name=\"GUID-9D14A02F-6ABE-4B99-B845-7A85658FEFC9\"></a></span><ol type=\"1\" start=\"1\">\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-F2456799-F121-41BF-891F-983F9CC74C23\"></a></span>With your <span class=\"filePath\" translate=\"no\">.csproj</span> project file open in Visual Studio, select <span class=\"MenuCascade\" id=\"GUID-367876B7-B65B-4907-B887-6D277413F0ED\">&lt;YourProjectName&gt; Properties</span> from the <span class=\"MenuCascade\" id=\"GUID-C2D71B55-DD20-40E1-9388-B3056FE154E4\">Project</span> menu. \n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-87139D4A-0BD4-4C81-A6DD-A0B5439E7B70\"></a></span>Click the <span class=\"MenuCascade\" id=\"GUID-D3EB4D7D-97DA-4A89-8E7A-A5E14AE5F462\">Signing</span> tab, and then select the <span class=\"MenuCascade\" id=\"GUID-5E136A62-5F00-4BD6-A1C1-928E8A643A13\">Sign the assembly</span> check box. \n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-91E78DA9-623A-436C-A98A-B28CC388BBB0\"></a></span>From the <span class=\"MenuCascade\" id=\"GUID-BFB1345A-D521-4353-916E-F75F52AD3C7D\">Choose a strong name key file</span> drop-down list, select <span class=\"MenuCascade\" id=\"GUID-8B536208-D427-4247-8D0B-C5E1A44683B4\">&lt;New&gt;</span>. The Create Strong Name Key dialog appears. \n\
                           </p> <img src=\"../images/GUID-B4BA83F2-3895-41A1-9185-F4ABE273C8AD-low.png\" /> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-2F41978D-B8D0-4B95-ABC0-FD8817414DAE\"></a></span>Enter a strong name key and click <span class=\"MenuCascade\" id=\"GUID-E10204B8-F8F3-41D2-A6BF-66D28CFE0B0B\">OK</span>. \n\
                           </p> \n\
                        </li>\n\
                     </ol> \n\
                  </div> \n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";