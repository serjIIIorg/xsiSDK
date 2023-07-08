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
      <meta name=\"topicid\" content=\"GUID-E27B76AE-A6B7-442A-ADA9-BFE6920EA551\" />\n\
      <meta name=\"indexterm\" content=\"View Context: Initializing and Drawing the Interface\" />\n\
      <meta name=\"indexterm\" content=\"Initializing on Windows\" />\n\
      <meta name=\"indexterm\" content=\"Initializing on Linux\" />\n\
      <meta name=\"indexterm\" content=\"View Notification\" />\n\
      <meta name=\"indexterm\" content=\"Callbacks (custom display host)\" />\n\
      <meta name=\"indexterm\" content=\"Custom View Callbacks\" />\n\
      <meta name=\"indexterm\" content=\"Notify\" />\n\
      <meta name=\"indexterm\" content=\"Plug-in Registrar Callbacks\" />\n\
      <meta name=\"indexterm\" content=\"Registering and Defining the Custom Display Host\" />\n\
      <meta name=\"indexterm\" content=\"Unloading the Custom Display Host\" />\n\
      <meta name=\"indexterm\" content=\"Viewport\" />\n\
      <meta name=\"indexterm\" content=\"Floating Window\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Components of a Custom Display Host</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"XSI::CRef\", \"si_cpp/classXSI_1_1CRef.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"XSI::ViewContext\", \"si_cpp/classXSI_1_1ViewContext.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"XSI::siEventID\", \"si_cpp/namespaceXSI.html#adb0ac324be9727cb9dc7624cf7f89e97\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"XSI::CStatus\", \"si_cpp/classXSI_1_1CStatus.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"XSI::PluginRegistrar\", \"si_cpp/classXSI_1_1PluginRegistrar.html\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-E27B76AE-A6B7-442A-ADA9-BFE6920EA551\"></a></span><div class=\"head\">\n\
            <h1>Components of a Custom Display Host</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-7ED6667C-E374-48AE-9D28-CE307D81AFF1\"></a></span>This section contains the following topics:\n\
         </p>\n\
         <ul>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-49437F79-0597-4EC2-A76D-A9CE5DF6F0D8\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_displayhost_ComponentsofaCustomDisplayHost.htm#WS80E1DB301E4FA64088A6717142BEA52A-000E\">View Context: Initializing and Drawing the Interface</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-D476CF90-1643-43C8-B414-BAB438D6E967\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_displayhost_ComponentsofaCustomDisplayHost.htm#WS80E1DB301E4FA64088A6717142BEA52A-0011\">View Notification</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-FF6EAC84-7E67-4886-9B46-FFFCDFCDC3EF\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_displayhost_ComponentsofaCustomDisplayHost.htm#WS80E1DB301E4FA64088A6717142BEA52A-0012\">Callbacks</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-9F21043B-05F5-40BF-B268-B9E83349F089\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_displayhost_ComponentsofaCustomDisplayHost.htm#WS80E1DB301E4FA64088A6717142BEA52A-001A\">Loading Custom Display Host Applications in Softimage</a></span> \n\
               </p> \n\
            </li>\n\
         </ul>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS80E1DB301E4FA64088A6717142BEA52A-000E\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-4D113697-559A-4007-9AC6-B39900DB6DA5\"></a></span> View Context: Initializing and Drawing the Interface\n\
            </h2>  \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-489A5A0A-08E3-48DD-9168-2B1095179C41\"></a></span>The custom display host notifies your custom display every time something changes\n\
               in Softimage using a <em class=\"strong\">ViewContext</em> object. This ViewContext object is also available when your custom display gets initialized.\n\
            </p> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-3D48D249-531F-4DD0-B47A-91C0449A2781\"></a></span>In the example below, the custom display creates a Win32 dialog and parents it to\n\
               the Softimage window using the <em class=\"strong\">ViewContext.GetParentWindowHandle</em> call. As mentioned above, you receive a ViewContext object upon notification. Use\n\
               the ViewContext to retrieve the relevant notification information. For more information\n\
               about this class, see \"ViewContext\" in the <em class=\"mild\">C++ API Reference</em>.\n\
            </p> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-D3D4C94B-0E90-40DF-85B3-2ED1FA8C1B75\"></a></span>The ViewContext class contains a function (<em class=\"mild\">GetParentWindowHandle</em>) that enables you to access the top-level Windows handle (hWnd).\n\
            </p> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS80E1DB301E4FA64088A6717142BEA52A-000F\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-CDD15DD3-E15B-42DB-BA55-8A65FA02FD6C\"></a></span> Initializing on Windows\n\
               </h3>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-22CEC8B1-CC49-4D39-A89F-E4F4E4497530\"></a></span>The following is an example of initializing the custom display and getting the Windows\n\
                  handle. Here, a dialog is created as a child of the Windows handle specified by the\n\
                  view context.\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
LRESULT	CCustomUI::Init( <a href=\"javascript:void(0)\" data=\"XSI::CRef\" class=\"a_multireflink\">XSI::CRef</a>&amp; in_pViewCtx )\n\
{\n\
	<a href=\"javascript:void(0)\" data=\"XSI::ViewContext\" class=\"a_multireflink\">XSI::ViewContext</a> l_vViewContext = in_pViewCtx;\n\
	l_hWnd = CreateDialog(  __gInstance ,  MAKEINTRESOURCE(IDD_CUSTOMUI_EXAMPLE), (HWND)l_vViewContext.GetParentWindowHandle(), (DLGPROC)_view_proc);\n\
\n\
	return S_OK;\n\
}\n\
</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-8CB7B890-0EC0-4161-A04B-7BC700C4927D\"></a></span>The view context also gets the notification data (<em class=\"mild\">GetNotificationData</em>).\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
LRESULT CCustomUI::Notify ( <a href=\"javascript:void(0)\" data=\"XSI::CRef\" class=\"a_multireflink\">XSI::CRef</a>&amp; in_pViewCtx )\n\
{\n\
	using namespace XSI;\n\
\n\
	// Convert the CRef into a ViewContext\n\
\n\
	<a href=\"javascript:void(0)\" data=\"XSI::ViewContext\" class=\"a_multireflink\">XSI::ViewContext</a> l_vViewContext = in_pViewCtx;\n\
\n\
	// Retrieve the notification information from the view context\n\
	\n\
	<a href=\"javascript:void(0)\" data=\"XSI::siEventID\" class=\"a_multireflink\">XSI::siEventID</a> in_eNotifcation;\n\
	void*	in_pData;\n\
\n\
	l_vViewContext.GetNotificationData ( in_eNotifcation, &amp;in_pData );</pre></div> \n\
            </div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS80E1DB301E4FA64088A6717142BEA52A-0010\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-045C3865-F587-469E-A2DD-CAF4850EA761\"></a></span> Initializing on Linux\n\
               </h3>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-75A3D1FB-674D-4261-B4CF-9D3290E5C335\"></a></span>Here\'s an example of how to properly initialize a custom display under Motif:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
void XWindowExample_Init (<a href=\"javascript:void(0)\" data=\"XSI::CRef\" class=\"a_multireflink\">XSI::CRef</a> in_pViewCtx)\n\
{\n\
// Get the view context object\n\
<a href=\"javascript:void(0)\" data=\"XSI::ViewContext\" class=\"a_multireflink\">XSI::ViewContext</a> l_vViewContext = in_pViewCtx; \n\
\n\
// Ask Softimage for the Top Level Widget\n\
Widget g_TopLevel = (Widget)l_vViewContext.GetTopLevelWidget(); \n\
\n\
// Initialize our Widget from class \n\
XtInitializeWidgetClass ( xmFormWidgetClass ); \n\
\n\
// Create a form widget and parent it to the Top Level Widget Softimage has provided\n\
g_MyWindow = XtVaCreateManagedWidget ( \"main_form\",\n\
			xmFormWidgetClass,\n\
			g_TopLevel,\n\
				XmNwidth, 300,\n\
			XmNheight, 300,\n\
		NULL ); \n\
\n\
// Create a button and parent it to the form\n\
g_theWidget = XtVaCreateManagedWidget(\"main_button\",\n\
			xmPushButtonWidgetClass,\n\
			g_MyWindow,\n\
			XmNlabelString, XmStringCreate (\"Push Me\", XmSTRING_DEFAULT_CHARSET),\n\
			NULL ); \n\
\n\
// Create a second button and parent it to the form\n\
g_theWidget2 = XtVaCreateManagedWidget(\"main_button2\",\n\
			xmPushButtonWidgetClass,\n\
			g_MyWindow,\n\
			XmNx,100,\n\
			XmNy,100,\n\
			XmNlabelString, XmStringCreate (\"Dont Push Me\", XmSTRING_DEFAULT_CHARSET),\n\
			NULL );\n\
\n\
XtSetMappedWhenManaged(g_TopLevel, 0); \n\
\n\
// Add callback functions\n\
XtAddEventHandler( g_theWidget, ButtonPressMask, FALSE, ButtonCB, NULL );\n\
XtAddEventHandler( g_theWidget2, ButtonPressMask, FALSE, ButtonCB2, NULL ); \n\
\n\
XtRealizeWidget(g_TopLevel); \n\
\n\
// This will register our form class (our shell object) with Softimage Custom Display\n\
// Architecture. It is VERY IMPORTANT that this is done at the end of the\n\
// initialization and after the widgets have been Realized.\n\
// \n\
// Internally, this will start the Xt main loop and will start broadcasting \n\
// messages\n\
l_vViewContext.SetXWindowTopLevel ( (void*)XtWindowOfObject(g_MyWindow) );\n\
}\n\
</pre></div> \n\
            </div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS80E1DB301E4FA64088A6717142BEA52A-0011\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-136CFFE4-B262-4BA8-AC7C-74B9255684F0\"></a></span> View Notification\n\
            </h2>  \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-F91A6B7C-A220-4AB3-A37E-8E070727C9CD\"></a></span>Once the custom display is initialized, several classes are available to notify you\n\
               of changes in the Softimage scene:\n\
            </p> \n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-88680607-8D06-4640-8E83-493C2AEFF6FD\"></a></span> <em class=\"strong\">CSelectionChangeNotification</em>: When the selection changes on a component in Softimage, the display host returns\n\
                     the new selection list as an array of CRef objects.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-B6744E03-1D09-4301-88C1-D0A7E2CE12A7\"></a></span> <em class=\"strong\">CTimeChangeNotification</em>: When the timeline changes in Softimage, the display host can return the current\n\
                     time and its state (stop, pause, step, scrub, etc.)\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-894C8DB2-7D87-4E68-9407-088BB30B2683\"></a></span> <em class=\"strong\">CValueNotification</em>: When a component or object\'s value changes, the display host returns the changed\n\
                     value. Note that what it returns depends on what the object or component is. For example,\n\
                     if the position of an object in the scene changes, the display host will send the\n\
                     global and local KinematicState state objects in 2 separate notifications.If the value\n\
                     represents a point or polygon or any other kind of primitive, it returns the Primitive.\n\
                     Refer to the <em class=\"mild\">C++ API Reference</em> for more information about the return values available in its classes.\n\
                  </p> \n\
               </li>\n\
            </ul> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-4538C9A8-539F-4F94-B0AC-233DFA06117B\"></a></span>For more information about the classes and functions defined specifically for the\n\
               custom display host, see the <em class=\"mild\">C++ API Class Reference</em>.\n\
            </p> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS80E1DB301E4FA64088A6717142BEA52A-0012\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-F18AEE50-C507-4983-A39B-45554BA6CCF5\"></a></span> Callbacks\n\
            </h2>  \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-D3B8A98C-FE5F-4A41-9208-8E3F797F67CC\"></a></span>Custom displays must define five callbacks to properly connect to Softimage it as\n\
               well as to register the .dll with the plug-in registrar.\n\
            </p> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-BB139B0E-B01A-4A15-B3DF-A0D59E2E00AA\"></a></span>This section contains the following topics:\n\
            </p> \n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-3A5DA8B0-0AAA-4567-A388-976B016BC32A\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_displayhost_ComponentsofaCustomDisplayHost.htm#WS80E1DB301E4FA64088A6717142BEA52A-0013\">Custom View Callbacks</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-B1D6CA9A-73B3-4E49-A23F-CCA6509A3DED\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_displayhost_ComponentsofaCustomDisplayHost.htm#WS80E1DB301E4FA64088A6717142BEA52A-0017\">Plug-in Registrar Callbacks</a></span> \n\
                  </p> \n\
               </li>\n\
            </ul> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS80E1DB301E4FA64088A6717142BEA52A-0013\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-3BD343FC-26A2-4791-A5CC-4A18BF0BD9DA\"></a></span> Custom View Callbacks\n\
               </h3>  \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS80E1DB301E4FA64088A6717142BEA52A-0014\"></a></span> \n\
                  <h4><span class=\"anchor_wrapper\"><a name=\"GUID-EC8E1EA1-CAF3-4596-85D6-5887442DDBF1\"></a></span>Init\n\
                  </h4> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-FB9BF862-02DB-4529-8E82-E0429FABE77B\"></a></span>Called by Softimage when the plug-in is first initialized. This callback is required.\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
void			MyPluginName_Init (<a href=\"javascript:void(0)\" data=\"XSI::CRef\" class=\"a_multireflink\">XSI::CRef</a> in_pViewCtx)\n\
</pre></div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS80E1DB301E4FA64088A6717142BEA52A-0015\"></a></span> \n\
                  <h4><span class=\"anchor_wrapper\"><a name=\"GUID-7A27EA76-134C-4F17-8219-835C9428A223\"></a></span>Term\n\
                  </h4> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-A9296B49-C9C6-42AF-92CF-25E56FF16F03\"></a></span>Called by Softimage when the plug-in is terminated (when the top-level window is destroyed).\n\
                     This callback is required.\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
void			MyPluginName_Term (<a href=\"javascript:void(0)\" data=\"XSI::CRef\" class=\"a_multireflink\">XSI::CRef</a> in_pViewCtx)</pre></div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS80E1DB301E4FA64088A6717142BEA52A-0016\"></a></span> \n\
                  <h4><span class=\"anchor_wrapper\"><a name=\"GUID-FA023A36-7BD1-46CA-B5B0-2275EE944F22\"></a></span> Notify\n\
                  </h4>  \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-95F0F5C3-434E-4452-9BCC-31B96D477FD8\"></a></span>Called by Softimage when something occurs in the scene, such as a parameter change\n\
                     or selection change. This callback is not mandatory.\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
void			MyPluginName_Notify	( <a href=\"javascript:void(0)\" data=\"XSI::CRef\" class=\"a_multireflink\">XSI::CRef</a> in_pViewCtx )\n\
</pre></div> \n\
               </div> \n\
            </div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS80E1DB301E4FA64088A6717142BEA52A-0017\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-FBC623F4-43F8-4E25-AD68-D44A0CBAD0DD\"></a></span> Plug-in Registrar Callbacks\n\
               </h3>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-4E0B0DC0-E27D-45BC-BA4A-304D0A206B46\"></a></span>Custom displays take advantage of Softimage\'s self-installing plug-in mechanism. The\n\
                  following gives a brief description of these callbacks. For detailed information about\n\
                  self-installing plug-ins, see <a href=\"#!/url=./files/cus_addons.htm\">Building and Deploying Customizations</a>.\n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS80E1DB301E4FA64088A6717142BEA52A-0018\"></a></span> \n\
                  <h4><span class=\"anchor_wrapper\"><a name=\"GUID-D36E9477-0F5E-4686-B106-90AED4822192\"></a></span> Registering and Defining the Custom Display Host\n\
                  </h4>  \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-62D7585A-19E1-4365-A0B5-A4186CA02406\"></a></span>The following shows how a custom display host is registered (<span class=\"code\" translate=\"no\">XSILoadPlugin</span>) and defined as a self-installing item (<span class=\"code\" translate=\"no\">RegisterCustomView</span>).\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
<a href=\"javascript:void(0)\" data=\"XSI::CStatus\" class=\"a_multireflink\">XSI::CStatus</a> XSILoadPlugin( <a href=\"javascript:void(0)\" data=\"XSI::PluginRegistrar\" class=\"a_multireflink\">XSI::PluginRegistrar</a>&amp; in_reg )\n\
{\n\
	in_reg.PutAuthor( L\"SoftimageUser\" );\n\
		in_reg.PutName( L\"MyPluginName\" );\n\
	in_reg.PutVersion( 1, 0 );\n\
\n\
	in_reg.RegisterCustomView( L\"MyPluginName\" );\n\
\n\
	return XSI::CStatus::OK;\n\
</pre></div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS80E1DB301E4FA64088A6717142BEA52A-0019\"></a></span> \n\
                  <h4><span class=\"anchor_wrapper\"><a name=\"GUID-567F747A-BE35-4AEB-AF8E-1BDB756D0D54\"></a></span> Unloading the Custom Display Host\n\
                  </h4>  \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-BEF476CE-F469-4ABA-8BE0-97E684609D36\"></a></span>Softimage performs its own maintenance routines when unloading any plug-in; however,\n\
                     you can add your own activities, such as writing to message logs, freeing used memory\n\
                     and releasing used SDK objects, etc.\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
<a href=\"javascript:void(0)\" data=\"XSI::CStatus\" class=\"a_multireflink\">XSI::CStatus</a> XSIUnloadPlugin( const <a href=\"javascript:void(0)\" data=\"XSI::PluginRegistrar\" class=\"a_multireflink\">XSI::PluginRegistrar</a>&amp; in_reg )\n\
{\n\
	return XSI::CStatus::OK;\n\
}</pre></div> \n\
               </div> \n\
            </div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS80E1DB301E4FA64088A6717142BEA52A-001A\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-F03C3336-6856-4282-8C59-AC04E6435E17\"></a></span>Loading Custom Display Host Applications in Softimage\n\
            </h2> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS80E1DB301E4FA64088A6717142BEA52A-001B\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-B629549F-F989-486F-9EB3-6F307ADE7B1E\"></a></span> Viewport\n\
               </h3>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-988626D4-F5AD-41CE-AEF0-86823F3648CE\"></a></span>Once defined, Softimage automatically creates a menu entry item in the viewport menu.\n\
               </p> <img src=\"../images/GUID-76E885DD-CD22-45FF-A230-298DEABB8E41-low.png\" /> \n\
            </div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS80E1DB301E4FA64088A6717142BEA52A-001D\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-91D155C9-4D59-4BCC-A645-336824164551\"></a></span> Floating Window\n\
               </h3>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-A5529781-DE2D-4A10-94C8-F8C7CECE4A74\"></a></span>To display in a floating window, choose <span class=\"MenuCascade\" id=\"GUID-24837CA7-1785-4F60-8F94-18D3C9170A16\">Application</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-51E16A5E-EA89-4588-9864-C4C6D3B0D0CD\">Views</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-69B65CC4-2A05-4435-B3E9-1E31C2A72FD8\">Custom Display Host</span>.\n\
               </p> <img src=\"../images/GUID-E4C22FB8-3E8B-45E0-8E47-2DC79177C5D9-low.png\" /> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-362D4D97-92E3-4774-9F2D-C86072B7191F\"></a></span>A floating window appears. Right-click and choose from the contextual menu.\n\
               </p> <img src=\"../images/GUID-E3C6FC91-8E5A-4348-871B-9F4EDD115B2B-low.png\" /> \n\
            </div> \n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";