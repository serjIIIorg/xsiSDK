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
      <meta name=\"topicid\" content=\"GUID-28BAF128-C87D-4FA2-B828-83FE90753702\" />\n\
      <meta name=\"indexterm\" content=\"UFOs: implementation\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Implementation</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-28BAF128-C87D-4FA2-B828-83FE90753702\"></a></span><div class=\"head\">\n\
            <h1>Implementation</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-5D9DAF0D-4DE1-4D76-8591-7EC5F0A602D8\"></a></span>A custom Fx operator is written as a set of pre-defined user functions which define\n\
               the setup and rendering of an effect. These fall into three main areas:\n\
            </p>\n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-11018BB6-2083-4D47-8478-DCCC5572BD4D\"></a></span>Process Definition and Initialization\n\
                  </p> \n\
                  <ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-91882395-9308-44FF-80C8-7892D2765A0B\"></a></span>Process identification\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-B151AE8D-5AC5-4C74-A665-9CA300E761E7\"></a></span>Input, output and parameter definition\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-88E88848-5181-49A4-B09C-B30DEA6E4CEC\"></a></span>Process and parameter initialization\n\
                        </p> \n\
                     </li>\n\
                  </ul> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-8DF4EC8B-CD27-4894-8EFD-FCC062E77AA4\"></a></span>Process Rendering\n\
                  </p> \n\
                  <ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-658304F6-A1E9-4BDA-9625-0F1DF1D0B921\"></a></span>Pre- and post-rendering\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-E24DDABC-F4D5-4CB2-A210-0C6590ABD03D\"></a></span>Defined output and required input region calculation\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-1806437E-54B0-40A5-B657-2450CAD2EA9D\"></a></span>Rendering\n\
                        </p> \n\
                     </li>\n\
                  </ul> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-25F8DE60-D6E8-46BB-AF63-B22BDE5B397B\"></a></span>External User Interface\n\
                  </p> \n\
                  <ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-525B0918-4F5A-4EB0-A5FF-C821E698C054\"></a></span>Editor screen drawing\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-7FE5FE77-9A39-4C21-B66C-CA5A3D83452A\"></a></span>Editor screen interaction\n\
                        </p> \n\
                     </li>\n\
                  </ul> \n\
               </li>\n\
            </ul>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-CC84D273-7518-4861-A28E-2E7E88C0657D\"></a></span>These user functions communicate with the main body of code via an interface library\n\
               of support functions. The UFO code is compiled and linked into a Dynamic Shared Object\n\
               (.so) or Dynamically Linked Library (.dll) which is loaded into Softimage at run-time.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-1D6FFECB-B8C1-4BC9-8445-EBCE9CCEE1BB\"></a></span>The symbols for the pre-defined functions are searched for in the custom Fx operator\n\
               and their addresses are tabulated for future calling. The final appearance when the\n\
               operator is run is as if the functions were directly linked into the product.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-BC54D2F9-3888-4968-99BD-612910ECE01E\"></a></span>The interface library is written with C binding for which the following header files\n\
               are supplied:\n\
            </p>\n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-2A0E8613-963D-4C65-9535-C25F238DA302\"></a></span> <em class=\"strong\">ufoProcess.h:</em> Process interface and general interface. Contains Functions the host provides to\n\
                     the plug-ins to get and set plug-in properties, to be called during plug-in definition\n\
                     and during rendering.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-5BF2F365-B1C7-426C-8B5D-A20DBFF70F03\"></a></span> <em class=\"strong\">ufoRaster.h:</em> Raster access interface, pixel structures, and constants.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-67F21EB8-578B-46CD-A614-F211376CEEEC\"></a></span> <em class=\"strong\">ufoTypes.h:</em> General interface constant definitions.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-32EB07B1-267A-4DEA-B259-A917CC08AF0A\"></a></span> <em class=\"strong\">ufoEditor.h:</em> Editor interface. Contains functions the host provides to help implement OpenGL interactive\n\
                     tools.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-7018E850-07B3-48B5-B1B7-1B3E58B47201\"></a></span>ufoFunctions.h: The complete set of user functions is declared in the header file.\n\
                     This should be included in the UFO source code files to enforce the correct function\n\
                     prototypes of the functions the UFO plug-in can implement.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-F92AA810-576E-44CB-9110-8886A8651CFB\"></a></span> <em class=\"strong\">ufoUnixCompat.h:</em> Defines <em class=\"strong\">rint()</em>, <em class=\"strong\">drand48</em>, <em class=\"strong\">random</em>, and <em class=\"strong\">M_PI</em> for easy portability of plug-ins between Linux and Windows. <em class=\"strong\">random</em> is garanteed to have good distribution and provide same results on both platforms,\n\
                     and should be used under Windows instead of the compiler-provided random number generator.\n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-F41BA908-ECAA-4025-8D8F-D5B8F5870BBD\"></a></span>The user functions are:\n\
            </p>\n\
            <div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6A124D8B-49EA-42B0-8E54-33754F0B8755\"></a></span><p class=\"table-heading\">Function</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3D0B0C5C-55DE-4E7A-B232-A7037751506E\"></a></span><p class=\"table-heading\">Description</p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A4563C6E-C141-4092-8049-64618F0DC259\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">ufoProcessDefine</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6D12E82A-F7B4-495E-9596-F20E35F416A7\"></a></span><p class=\"table-body\">process definition and initialization</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E920A287-F340-4DBC-A849-827F348904B1\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">ufoProcessCopyUserData</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6C2FE935-3E88-4266-967D-A2D8C011E564\"></a></span><p class=\"table-body\">user data copy</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E3E44DF0-DA88-4C1F-BB58-EECB3DF7F6CC\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">ufoProcessDeleteUserData</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3C2FB7D4-5FDD-45D8-8C20-79F2FB1F9BFB\"></a></span><p class=\"table-body\">user data delete</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-89965EAB-F00E-48A0-8330-D36B35729E73\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">ufoProcessPreSequenceRender</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-182D4E33-CAC7-4BF5-AE7D-0B18DC54BF28\"></a></span><p class=\"table-body\">pre-render sequence</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C37A4150-06B2-4272-82CE-8ABF5731D328\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">ufoProcessPostSequenceRender</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C485222B-AF97-43C3-B00E-1B25DBBAB7C5\"></a></span><p class=\"table-body\">post-render sequence</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0F6F483B-8C5E-41DD-87CE-E7003B956390\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">ufoProcessCanAvoidRendering</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7B2EDCA8-45AF-45A7-8866-B7E205EC9023\"></a></span><p class=\"table-body\">pre-frame render function to determine if rendering can be avoided</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9B910886-14E1-4E80-B490-7CAE24729CD3\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">ufoProcessPreRender</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9A4BADF1-40B4-440C-936E-BFEF55634415\"></a></span><p class=\"table-body\">pre-render</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B014741D-65FC-49B1-96B0-ED286ECFCC03\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">ufoProcessPostRender</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-87768764-1330-41CB-9F52-CCAFD35C8466\"></a></span><p class=\"table-body\">post-render</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7576C577-D471-4273-99CD-61B39F6C8458\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">ufoProcessPreRenderPass</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1EA79136-08F4-4FF2-A39B-208FE0893543\"></a></span><p class=\"table-body\">pre-render pass</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-95A80F29-B4BB-4AF0-8A30-5B9CFEBD9FBC\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">ufoProcessPostRenderPass</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A41E12B1-291A-4DAB-BB0F-622EEFD08204\"></a></span><p class=\"table-body\">post-render pass</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DEAC1CE7-A268-436E-B22D-88F24929B51E\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">ufoProcessRenderPixel</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7C8A3FF4-A069-4150-B01F-40FF27CA519C\"></a></span><p class=\"table-body\">pixel render</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D595E1A6-E7D2-4E31-AB3F-B11CEFC33A1B\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">ufoProcessRenderLine</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E8664B69-D202-437B-B4AB-124ED842A5F1\"></a></span><p class=\"table-body\">line render</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3F2A7F0A-C810-4803-9EBB-C4762FCA6FE1\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">ufoProcessRenderRectangle</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EE07E3CA-E03E-4F72-A593-F58263A8EB2A\"></a></span><p class=\"table-body\">rectangle render</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7EF1EB3C-E30E-47FB-9A21-28ADABCA4FE4\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">ufoProcessCalcDefinedRectangle</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-956E98A3-64B7-4794-ACC0-7BB130EB38B7\"></a></span><p class=\"table-body\">calculate rectangle which can be rendered to output(s)</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5E11BC35-8793-4EF3-8576-D1B2610D68B6\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">ufoProcessCalcNeedRectangles</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-96157488-9596-4ABA-93C1-031215E944FC\"></a></span><p class=\"table-body\">calculate rectangles which are required from inputs</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0542432C-AD16-4FFF-8EEB-A7A502EC37AA\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">ufoProcessCalcDefinedPixelType</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-625F7C1F-AD42-4DBC-9B37-45B72B309FDD\"></a></span><p class=\"table-body\">calculate the \"best\" pixel type given the supplied input pixel types</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7FCB864D-A2C0-41F3-907C-A231644E2D50\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">ufoProcessSpecifyConvertPixelTypes</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FC3A417B-A2A3-4595-80D7-C747780826D9\"></a></span><p class=\"table-body\">specify input and output pixel type conversions</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9DC11653-0E3E-4644-B603-447DE509F912\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">ufoProcessParamsEdited</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-49F65630-3E42-4291-81F8-F0945BF4446C\"></a></span><p class=\"table-body\">callback routine on parameter edits; can also set other parameters to be changed too</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C95F8BE8-D4FD-441B-BDCD-3A08B49CAD1F\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">ufoEditorBeginViewerEditing</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DA222C6B-B4ED-4F06-9D75-E7B3D2A9ABE9\"></a></span><p class=\"table-body\">Called when a process is being edited in a viewer, redraw and mouse callbacks can\n\
                           be expected to be called.\n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-181B317C-2CCD-4635-8BBA-3016A85CB519\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">UfoEditorEndViewerEditing</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2C8A4E8D-EC13-4157-AC07-621C176651D6\"></a></span><p class=\"table-body\">Called when a process is no longer being edited in a viewer.</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C260D6CA-399B-490D-BE46-13697DBB03F5\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">ufoEditorRGBDraw</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3A0170FF-468B-4FF9-8A64-B83882C6F27D\"></a></span><p class=\"table-body\">draw into RGB plane of screen</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8A30E6C9-96AF-44A1-8423-7FBB2FE58224\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">ufoEditorOverlayDraw</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-96039A11-0DA7-4AC3-9AD8-23ABD602E34B\"></a></span><p class=\"table-body\">draw into overlay plane of screen</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6C1BBEAF-52F3-401D-BB2B-993D3BA7ADB4\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">ufoEditorMouseDown</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-94E7C92E-2869-4D92-A6CE-875A367B2CEF\"></a></span><p class=\"table-body\">process mouse button down event onscreen</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9F71A4D2-A335-469E-B4EB-6A3F30A18A26\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">ufoEditorMouseUp</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-90C99F4D-FB75-4378-B0D7-498D7B4DE31F\"></a></span><p class=\"table-body\">process mouse button up event onscreen</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BA2454C4-77F2-49B2-B29C-30ED9384ECB3\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">ufoEditorMouseDrag</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-50D13097-966A-49AB-90FB-180A5114A98E\"></a></span><p class=\"table-body\">process mouse drag onscreen</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AE1E0E50-6C6C-4F90-B67F-2AE1AA3E746F\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">ufoEditorMousePosition</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A42C7F8C-D8D8-40D4-8A4E-DEDF485D39BA\"></a></span><p class=\"table-body\">process mouse move (no buttons down) event onscreen</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E78E1D5C-27A1-43E1-A6EC-C00FECE3CEC6\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">ufoEditorKeyEvent</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EE86A691-84CE-4480-806F-382376FFFC74\"></a></span><p class=\"table-body\">process key event onscreen</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A6B65091-54B4-4CD8-A7BB-7088578E2078\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">ufoEditorSetParamGroup</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F4FBE328-7458-43B6-9BE1-1947F6370F9A\"></a></span><p class=\"table-body\">set/change parameter group to be drawn or displayed in GUI</p> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-F924E17A-9C30-4BE9-BF5E-32708816D30E\"></a></span>The minimum requirement is that an operator defines <em class=\"mild\">ufoProcessDefine</em>, and one of the following: <em class=\"mild\">ufoProcessRenderPixel</em>, <em class=\"mild\">ufoProcessRenderLine</em> and <em class=\"mild\">ufoProcessRender-Rectangle</em>. If this requirement is not met, then the operator process cannot be used and will\n\
               not appear in Fx tree.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-A3B651AE-4FDA-4996-9FA9-654DDD19A199\"></a></span>The minimum requirement for screen interaction is that an operator defines <em class=\"mild\">ufoEditorCreate</em>, and one of the following: <em class=\"mild\">ufoEditorRGBDraw</em>, <em class=\"mild\">ufoEditorOverlayDraw</em>, <em class=\"mild\">ufoEditorMouseDown</em>, <em class=\"mild\">ufoEditorMouseUp</em>, <em class=\"mild\">ufoEditorMouseDrag</em>, <em class=\"mild\">ufoEditorMousePosition</em>, and <em class=\"mild\">ufoEditorKeyEvent</em>.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-04317E89-CE0A-484F-8083-2A89B4591DAE\"></a></span>The minimum requirement for a user-defined X Motif GUI is that anoperator defines\n\
               both <em class=\"mild\">ufoEditorCreate</em> and <em class=\"mild\">ufoEditorUpdateGui</em>.\n\
            </p>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";