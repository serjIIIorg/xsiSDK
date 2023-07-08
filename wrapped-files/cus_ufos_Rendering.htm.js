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
      <meta name=\"topicid\" content=\"GUID-CC6D1D39-857E-49AD-B35D-38DC532D7668\" />\n\
      <meta name=\"indexterm\" content=\"UFOs: rendering\" />\n\
      <meta name=\"indexterm\" content=\"rendering: UFOs\" />\n\
      <meta name=\"indexterm\" content=\"Render User Functions\" />\n\
      <meta name=\"indexterm\" content=\"Multi-threading\" />\n\
      <meta name=\"indexterm\" content=\"Multiple Passes\" />\n\
      <meta name=\"indexterm\" content=\"Render Slicing and Checking for Abort\" />\n\
      <meta name=\"indexterm\" content=\"Unchanged Inputs\" />\n\
      <meta name=\"indexterm\" content=\"Render Mode and Limits\" />\n\
      <meta name=\"indexterm\" content=\"Background Rendering\" />\n\
      <meta name=\"indexterm\" content=\"Pre- and Post-Render\" />\n\
      <meta name=\"indexterm\" content=\"UFOs: pre- and post-render\" />\n\
      <meta name=\"indexterm\" content=\"UFOs: post-render\" />\n\
      <meta name=\"indexterm\" content=\"pre-rendering, in UFOs\" />\n\
      <meta name=\"indexterm\" content=\"post-rendering, in UFOs\" />\n\
      <meta name=\"indexterm\" content=\"Parameter Access\" />\n\
      <meta name=\"indexterm\" content=\"UFOs: parameter access\" />\n\
      <meta name=\"indexterm\" content=\"parameter access, in UFOs\" />\n\
      <meta name=\"indexterm\" content=\"Raster Access\" />\n\
      <meta name=\"indexterm\" content=\"UFOs: raster access\" />\n\
      <meta name=\"indexterm\" content=\"UFOs: raster access\" />\n\
      <meta name=\"indexterm\" content=\"Temporal Frame Raster Access\" />\n\
      <meta name=\"indexterm\" content=\"Scaled and Cropped Rendering\" />\n\
      <meta name=\"indexterm\" content=\"UFOs: scaled and cropped rendering\" />\n\
      <meta name=\"indexterm\" content=\"cropped rendering, in UFOs\" />\n\
      <meta name=\"indexterm\" content=\"UFOs: scaled rendering\" />\n\
      <meta name=\"indexterm\" content=\"UFOs: cropped rendering\" />\n\
      <meta name=\"indexterm\" content=\"Region Calculation\" />\n\
      <meta name=\"indexterm\" content=\"UFOs: region calculation\" />\n\
      <meta name=\"indexterm\" content=\"region calculation, in UFOs\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Rendering</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-CC6D1D39-857E-49AD-B35D-38DC532D7668\"></a></span><div class=\"head\">\n\
            <h1>Rendering</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS1DF8264D3D78F14A83B5A0B860AA3F2F-0014\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-46E2CB73-4704-4205-9E96-1F678281E06F\"></a></span> Render User Functions\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-8CE5BD25-8FE0-4038-BE61-421635E71419\"></a></span>You can render in one of three ways: by rectangle, line, or pixel. The rectangle method\n\
                  (probably the most natural to most graphics programmers) uses the <em class=\"mild\">ufoProcessRenderRectangle</em> user function which contains code to render a rectangular region of an output raster\n\
                  buffer. However, by default the Softimage Compositor parallelizes your code for a\n\
                  multi-processor machine when the <em class=\"mild\">ufoProcessRenderLine</em> or <em class=\"mild\">ufoProcessRenderPixel</em> user function is defined. The simplest way of ensuring the performance increases\n\
                  (near) linearly with the number of processors available on a multi-processor machine\n\
                  is to supply one of the latter two functions.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS1DF8264D3D78F14A83B5A0B860AA3F2F-0015\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-BEE243E1-4048-4A4E-8C4D-5505A95AB3B2\"></a></span> Multi-threading\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-9AE42E43-D0FA-4FD1-9841-9FB6C14F5526\"></a></span>It is recommended that if you supply a <em class=\"mild\">ufoProcessRenderLine</em> or <em class=\"mild\">ufoProcessRenderPixel</em> function then you ensure that the function is either multi-process safe (MP Safe),\n\
                  or that you turn the automatic multi-threading off. Automatic multi-threading may\n\
                  be turned off completely by calling <em class=\"mild\">ufoSetMPSafe</em> once only in the UFO definition function, or on a render pass basis by calling <em class=\"mild\">ufoSetMPSafe</em> around the MP unsafe passes.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-5CA415A0-FE4C-43A1-BB7A-2895D53BCC64\"></a></span>If you want to handle your own multi-threading, then it is recommended that use the\n\
                  application\'s multi-threading libraries and the set of utility functions for multi-threading.\n\
                  <em class=\"mild\">ufoMPFork</em> creates extra threads that execute the supplied function argument in parallel with\n\
                  the calling thread. <em class=\"mild\">ufoMPForkMyId</em> returns an integer within the range 0..n-1 when n is the number of threads running\n\
                  in parallel. The thread with ID 0 is always be the original parent thread. <em class=\"mild\">ufoMPForkGetNumProcs</em> returns the number of threads that are running in parallel.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-72A18025-0768-46D3-8E32-50AC0D6CA81A\"></a></span>Finally, <em class=\"mild\">ufoMPPotentialNumProcs</em> may be used to query the maximum number of potential threads that are created by\n\
                  a call to <em class=\"mild\">ufoMPFork</em>. This may be restricted by the number of processors on the host machine, multi-processing\n\
                  licensing and application command line arguments that restrict the number of threads\n\
                  to use.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS1DF8264D3D78F14A83B5A0B860AA3F2F-0016\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-410371E8-E56D-4BEF-B634-4EF4C7B97B41\"></a></span> Multiple Passes\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-D4E6A3AD-5091-4F45-9185-4CC1D2122609\"></a></span>As some rendering methods require multiple scans of the inputs and outputs, rendering\n\
                  can be split into multiple passes. The number of passes required can be set within\n\
                  <em class=\"mild\">ufoProcessDefine</em> or any user function before the start of the first pass of a render at a particular\n\
                  frame using <em class=\"mild\">ufoProcessSetNumberRenderPasses</em>. Within the render user functions the current render pass can be inquired with <em class=\"mild\">ufoProcessGetRenderPass</em>.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-927A3695-C0AC-4F5C-9C0E-94FE2837F080\"></a></span>Line rendering can also work vertically to allow for multiple pass methods which require\n\
                  vertical scanning of particular passes using <em class=\"mild\">ufoProcessSetRenderPassMode</em>.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS1DF8264D3D78F14A83B5A0B860AA3F2F-0017\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-29221DB0-A406-4F70-8181-7296AF1E0063\"></a></span> Render Slicing and Checking for Abort\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-C7350D89-B2EF-40F0-AB12-742838C33E0D\"></a></span>If rendering is slow, output regions are sliced or tiled into smaller regions by the\n\
                  application, so that it can check for a user interrupt (for example, pressing the\n\
                  Stop button). The region size is chosen, so that rendering is performed in bursts\n\
                  of around 2 seconds in between which it can be halted. If this does not suit the rendering\n\
                  algorithm used, then it can be prevented by calling <em class=\"mild\">ufoProcessSetTilingAllow</em>.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-ADCE0B36-CF14-413A-B523-58DF977E685E\"></a></span>If you want to take complete control of rectangle rendering and do not want the application\n\
                  to automatically slice your render, but you do want to check for the user interrupting\n\
                  the current render, then the function <em class=\"mild\">ufoProcessCheckAbort</em> can be called intermittently within the rendering code. If it returns a value of\n\
                  1 then the render should terminate as soon as possible. For display purposes the function\n\
                  also takes a <em class=\"mild\">percentage_done</em> argument. If you are performing multi-threading then this should be called with the\n\
                  original thread that the render function was called with.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS1DF8264D3D78F14A83B5A0B860AA3F2F-0018\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-6AB2E997-000A-435B-B8F8-DD83EB76ACC2\"></a></span> Unchanged Inputs\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-C8CCA362-3791-49AB-B985-80A3691C4645\"></a></span>Often during editing, subsequent renders at the same frame may have input rasters\n\
                  which have not changed since the previous render. Many rendering techniques may be\n\
                  able to take advantage of this, probably in conjunction with certain parameters being\n\
                  the same, by caching some intermediary result. <em class=\"mild\">ufoProcessIsInputDirty</em> in conjunction with <em class=\"mild\">ufoProcessResetRasterInDirty</em> can be called for each input to determine this.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS1DF8264D3D78F14A83B5A0B860AA3F2F-0019\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-8A983768-111A-4E2B-B27D-02A546D916DC\"></a></span> Render Mode and Limits\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-1AF324E6-A3EF-4D0B-B15A-136CCC71CE71\"></a></span> <em class=\"mild\">ufoProcessGetRenderMode</em> returns whether the render is a single frame or sequence and whether it is part of\n\
                  an interactive edit or preview sequence or a fully rendered sequence. This is useful\n\
                  for ignoring parameters in a full render which control accelerated methods used in\n\
                  editing or previewing.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-05FB33C9-EE7A-456A-AA7E-1FC4D7C10792\"></a></span>The functions <em class=\"mild\">ufoProcessGetMinEffectLimit</em> and <em class=\"mild\">ufoProcessGetMaxEffectLimit</em> can be used to return current render effect start and end frame limits.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS1DF8264D3D78F14A83B5A0B860AA3F2F-001A\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-8F62B5D3-0F83-4E8A-B522-69F5997EDCC6\"></a></span> Background Rendering\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-8661B6AA-D05B-41D3-9C5E-41AA8BA59491\"></a></span>The function <em class=\"mild\">ufoCheckInBackground</em> checks if the main application is running in foreground mode (with interactive user\n\
                  interface) or in background mode (with no user interface). This may be useful for\n\
                  licensing purposes.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS1DF8264D3D78F14A83B5A0B860AA3F2F-001B\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-D14EFBB0-6A92-48B0-9722-D14CCEA5D645\"></a></span> Pre- and Post-Render\n\
               </h2>      \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-7AA5839E-DDF8-4845-888D-9B631434CDF8\"></a></span>There are three pairs of user functions which, if supplied, are called before and\n\
                  after rendering a sequence of frames, a frame and a pass, respectively. These can\n\
                  be used to set up commonly used data, allocate, and free temporary rasters and memory\n\
                  buffers and so on. <em class=\"mild\">ufoProcessPreSequenceRender</em> and <em class=\"mild\">ufoProcessPostSequenceRender</em> are called at either end of a sequence of renders. <em class=\"mild\">ufoProcessPreRender</em> and <em class=\"mild\">ufoProcessPostRender</em> are called before and after rendering at a frame. <em class=\"mild\">ufoProcessPreRenderPass</em> and <em class=\"mild\">ufoProcessPostRenderPass</em> are called before and after each pass of rendering at a frame.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-1C854508-3D46-4A21-BEB0-C8F0798FC438\"></a></span>In addition, you can supply the user function <em class=\"mild\">ufoProcessCanAvoidRendering</em>. This can be used to determine whether processing of the UFO can be avoided because\n\
                  the current parameter setup has no effect. In this event, one of the UFO\'s inputs\n\
                  can be used in place of its output. Therefore, if processing can be avoided, then\n\
                  the function takes a parameter to be set to the input index that the UFO has no effect\n\
                  on. This replaces a previously unused UFO function <em class=\"mild\">ufoProcessHasNoEffect</em>.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS1DF8264D3D78F14A83B5A0B860AA3F2F-001C\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-D4B5515F-DA03-4B5B-ADEB-8A0252D64AFE\"></a></span> Parameter Access\n\
               </h2>    \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-7141035A-33B3-4517-924F-5C121E51298E\"></a></span>Within the render, user functions and certain pre- and post-render user function parameters\n\
                  may be accessed for their values. <em class=\"mild\">ufoProcessGetParamValue/s</em> can be called to get the current value(s) of a parameter, <em class=\"mild\">ufoProcessGetParamValueAtTime/s</em> can be called to get the value(s) of a parameter at a specific time (<em class=\"mild\">ufoProcessGetTime</em> can be used to get the current frame time of rendering.) These functions return double-precision\n\
                  floating-point values, so conversion to integer is required for parameters of type\n\
                  <em class=\"mild\">ufoBooleanParam</em>, <em class=\"mild\">ufoEnumParam</em>, and <em class=\"mild\">ufoIntegerParam</em>.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-F44ED87A-02A2-48A3-8042-97B96631E9F4\"></a></span>You can determine if a parameter has been edited (through some user interface event)\n\
                  by calling <em class=\"mild\">ufoProcessIsParamSet</em>.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-6B127EF0-488A-49D4-9AA0-67736A0402E8\"></a></span>The <em class=\"mild\">ufoProcessParamsEdited</em> function is called whenever any parameters are edited by the user. It supplies the\n\
                  list of parameter indices for the parameters that have been changed. The user can\n\
                  then react to the edit by changing additional parameter values. This function is useful,\n\
                  for example, for controlling presets through a <em class=\"mild\">ufoEnumParam</em> parameter, which set a number of other parameters, or for example, if you have a\n\
                  set of parameters which are alternative representations of a single value.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS1DF8264D3D78F14A83B5A0B860AA3F2F-001D\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-DDE569FA-2CA5-40B0-B229-18168088F82D\"></a></span> Raster Access\n\
               </h2>    \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-EB4C3AA3-9B7A-4C3C-BBEC-1B4BB7AED411\"></a></span>Within the render user functions, editor user functions, and certain pre- and post-render\n\
                  user functions, you can access rasters for reading or writing.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-C888EECE-375D-4A8F-B04A-F82506CB2C3A\"></a></span> <em class=\"mild\">ufoProcessGetRasterIn</em> returns a handle to an input raster and <em class=\"mild\">ufoProcessGetRasterOut</em> returns a handle to an output raster. <em class=\"mild\">ufoEditorGetRasterViewed</em> returns a handle to the viewed raster during editing.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-AE41FBC9-B15E-4647-A7B5-451BA1879E00\"></a></span>Given a raster handle, there are a suite of UFO library functions for interacting\n\
                  with the raster (see <em class=\"mild\">ufoRaster.h</em>). All returned raster handles should be tested against null as, under certain circumstances,\n\
                  such as prior to processing or getting from unconnected UFO process inputs, the raster\n\
                  may not be available.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-FBF9457A-7E72-4E45-B06E-2167814995EC\"></a></span>All the currently supported raster types are rectangular arrays of pixels, with pixel\n\
                  components (RGB, Alpha, RGB-Alpha) packed together. The raster interface takes account\n\
                  of an arbitrary base offset, width and height associated with the raster\'s pixel array.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-4205799E-54AC-4DCB-B64A-05097521BF7D\"></a></span> <em class=\"mild\">ufoRasterGetLimits</em>, <em class=\"mild\">ufoRasterGetWidth</em>, and <em class=\"mild\">ufoRasterGetHeight</em> return information on a raster\'s rectangular geometry.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-DE1173A6-BBCD-41C8-83ED-55C8F52311BE\"></a></span> <em class=\"mild\">ufoRasterGetPixelType</em>, <em class=\"mild\">ufoRasterGetPixelSize</em>, and <em class=\"mild\">ufoRasterComponentSize</em> return information on the pixel type.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-87CA1DC7-C13A-4182-8CB6-0A82B715E3DC\"></a></span> <em class=\"mild\">ufoRasterGetPixelAddress(x,y)</em> returns the pointer to the pixel at (X,Y). <em class=\"mild\">ufoGetBufferAddress</em> returns the base address of the raster\'s buffer (not necessarily at (0,0)). <em class=\"mild\">ufoRasterGetBufferSize</em> returns the full size of the raster\'s buffer (in bytes).\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-E592247B-B9DD-45BC-9667-C836C4F6A511\"></a></span> <em class=\"mild\">ufoRasterGetPixelCol</em>, <em class=\"mild\">ufoRasterGetPixelColAlpha</em>, and <em class=\"mild\">ufoRasterGetPixelAlpha</em> return normalized (0.0..1.0) component values at a pixel. <em class=\"mild\">ufoRasterSetPixelCol</em>, u<em class=\"mild\">foRasterSetPixelColAlpha</em>, and <em class=\"mild\">ufoRasterSetPixelAlpha</em> set normalized component values at a pixel. These functions work on all types of\n\
                  rasters regardless of their actual type, performing sensible conversions as necessary\n\
                  (detailed in <em class=\"mild\">ufoRaster.h</em> and the appendices). These functions do not perform checks for the pixel coordinates\n\
                  that are outside the raster, so when writing UFO effects which override automatic\n\
                  clamping on certain inputs (see <em class=\"mild\">ufoProcessSetRasterInEdgeMode</em>) or any effect which reads input pixels at coordinates which are offset from a pixel\n\
                  being rendered to output, you should perform bounds checks.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-4B2C55FA-0ECD-456A-A1A5-123F6669E055\"></a></span> <em class=\"mild\">ufoRasterCopy</em> and <em class=\"mild\">ufoRasterCopyPart</em> copy whole and parts of rasters from one to another, handling pixel conversions as\n\
                  necessary. <em class=\"mild\">ufoRasterAlloc</em> allocates a temporary raster of a specified pixel type. <em class=\"mild\">ufoRasterAllocCopy</em> and <em class=\"mild\">ufoRasterAllocCopyPart</em> allocate a copy of whole or part of an existing raster and optionally copy the pixel\n\
                  data from the original to the new. <em class=\"mild\">ufoRasterFree</em> frees any raster previously allocated through the UFO interface library. You should\n\
                  use these functions for raster allocation and freeing, as they make use of the Softimage\n\
                  Compositor\'s memory manager.\n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS1DF8264D3D78F14A83B5A0B860AA3F2F-001E\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-A38D4F14-AE09-44F3-9F37-9F337D73FD91\"></a></span> Temporal Frame Raster Access\n\
                  </h3>  \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-ACF0B8AA-6FA5-41A6-9D5B-71F46A379439\"></a></span>Some types of effects are classified as inter frame, such that for each output at\n\
                     a current frame they need to read a frame or frames from an input which are not at\n\
                     the current frame. For instance, a retiming effect or motion blur effect.\n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-F3E5EB51-DF55-4E1C-9F5B-D49B8137B9B8\"></a></span> <em class=\"mild\">ufoProcessGetRasterInAtFrame</em> returns the raster for an input at a specified frame. The function includes a field\n\
                     argument which is used when field rendering (see <em class=\"mild\">ufoProcessFieldRendering</em>). Each call to <em class=\"mild\">ufoProcessGetRasterInAtFrame</em> with a unique frame (and field) will lock a raster in memory by the Softimage Compositor\'s\n\
                     memory manager until <em class=\"mild\">ufoProcessReleaseRasterInAtFrame</em> is subsequently called with that frame. It is very important to use this function\n\
                     to unlock memory from the memory manager and not keep too many frames locked in memory\n\
                     simultaneously. If you don\'t call <em class=\"mild\">ufoProcessReleaseRasterInAtFrame</em> then all accessed frame rasters will remain locked until after the UFO process has\n\
                     finished rendering at that frame. Currently, temporal access only works if the input\n\
                     is connected directly to a clip. <em class=\"mild\">ufoProcessIsRasterInTemporal</em> can be used to check this. The function <em class=\"mild\">ufoProcessGetRasterInTemporalLimits()</em> returns the frame limits available for temporal access on an input.\n\
                  </p> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS1DF8264D3D78F14A83B5A0B860AA3F2F-001F\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-EC5BF25E-03BF-44A3-BEFF-F74469FCBAE9\"></a></span> Scaled and Cropped Rendering\n\
               </h2>      \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-E36B30D8-E3FA-4821-BBD3-413393DA1711\"></a></span>The Softimage Compositor uses two principal techniques for accelerating the performance\n\
                  of rendering for interactive updating of effects during editing:\n\
               </p> \n\
               <ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-DB378FC6-3821-4E36-A067-DA7801D0889D\"></a></span> <em class=\"mild\">Scaled</em> rendering, where rendering can be performed at an arbitrary reduced resolution. The\n\
                        render method must take into account scaling of any geometric parameters by the render\n\
                        scale factor. The UFO library function <em class=\"mild\">ufoProcessGetRenderScale</em> gets the X and Y scale factor. This technique trades variable amounts of precision\n\
                        against speed.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-AF690721-1DCE-49A8-9B2F-BBF60A0BC12E\"></a></span> <em class=\"mild\">Cropped</em> rendering, where a rectangular subregion of the whole region to be rendered is selected.\n\
                        Cropping may also occur explicitly as the result of using a Crop process or transformation\n\
                        process, or implicitly through render-economizing techniques employed by the Softimage\n\
                        Compositor\'s hierarchy traversal method.\n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-77A8AB10-8467-4121-B892-EA40ED80ABE5\"></a></span>To obtain the full render resolution, <em class=\"mild\">ufoProcessGetFullRenderRectangle</em> returns the full rectangle resolution of the final target clip in the process hierarchy\n\
                  being rendered, regardless of any render cropping, scaling or use of reduced resolution\n\
                  material. This is useful for any effect which is based on a position or region relative\n\
                  to the full render region, such as a swirl around the centre or an explode from the\n\
                  centre.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS1DF8264D3D78F14A83B5A0B860AA3F2F-0020\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-25217ED1-54E8-4BB3-A2FE-0ECE31921565\"></a></span> Region Calculation\n\
               </h2>    \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-0CB1B839-9013-4620-BE9E-844D0CA8DDB3\"></a></span>By default, an input has its edge mode set to <em class=\"mild\">ufoEdgeClamp</em> such that an output render region will automatically be clamped to the limits of\n\
                  the input. However, UFO effects whose output render region may include pixels outside\n\
                  the input will need to call <em class=\"mild\">ufoProcessSetRasterInEdgeMode</em> to set the edge mode to <em class=\"mild\">ufoEdgeNoClamp</em> and then perform their own limits checks on the input region when rendering. Effects\n\
                  that would use this include scaling down, and compositing of smaller images onto larger\n\
                  backgrounds.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-EAAAA841-5A60-444D-B0EF-23B49D1BF692\"></a></span>When you render a hierarchy of processes of arbitrary complexity, the Softimage Compositor\n\
                  uses cropping techniques to minimize the regions required to be rendered. By default,\n\
                  the Softimage Compositor assumes that there is a one-to-one mapping between input\n\
                  pixels and output pixels. Effects, such as composites and colour space manipulations,\n\
                  perform calculations on pixel values at the same position in the inputs as the pixel\n\
                  being rendered in the output.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-040B65CD-DD70-4D71-BA87-D15D643A8660\"></a></span>The defined region of a process\' output is the bounding rectangle of the effect it\n\
                  can produce in an output raster given the bounding rectangle regions supplied to its\n\
                  inputs. Effects such as geometric transformations (scales, rotations, perspective,\n\
                  warps, etc.) can define output regions which are larger, smaller, or offset from those\n\
                  defined on its inputs. If a UFO process can do this, then you should supply the <em class=\"mild\">ufoProcessCalcDefinedRectangle</em> user function. This is called before a frame is rendered and after all the process\n\
                  parameters have been set with their current values. The function call supplies the\n\
                  defined regions of each input and should return the defined region for all outputs.\n\
                  If this function is not supplied, the output defined region is assumed to be the same\n\
                  as the first input defined region.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-223442EA-89B7-4115-95D1-940E8431DEA3\"></a></span>The needed region of a process\'s input is the maximum bounding rectangle it needs\n\
                  to be supplied in an input in order to produce the required effect within the supplied\n\
                  output region. Effects such as convolutions which perform calculations on a number\n\
                  of input pixels in a vicinity around the corresponding output pixel, need input regions\n\
                  which are larger than the supplied needed output region by half the size of the convolution\n\
                  kernel in each direction. Effects, such as geometric transformations, need an input\n\
                  region which is the inverse transformation of the supplied needed output region.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-4683463E-6AA9-4BF9-8DB9-561A88CBE935\"></a></span>If a UFO process is required to render some arbitrary rectangular region on its outputs,\n\
                  and in turn it pre-requires rectangular regions on its inputs to be rendered which\n\
                  may be greater, smaller and/or offset from that output region, then you should supply\n\
                  the <em class=\"mild\">ufoProcessCalcNeedRectangles</em> user function. This is called before a frame is rendered and after all the process\n\
                  parameters have been set with their current values. The function call supplies the\n\
                  needed region of output and should return the needed region for all inputs. If this\n\
                  function is not supplied, the input needed regions are assumed to be the same as the\n\
                  output needed region.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-76EB4E28-88A0-43B1-9158-29D00BD9D9B4\"></a></span>With both region calculation user functions, the supplied rectangle regions do not\n\
                  take into account any render scaling and the returned rectangle regions should not\n\
                  either.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-E82FE7E3-FD40-46F6-992B-7318EA149E91\"></a></span>It is important that you understand the requirement of these functions if you want\n\
                  your UFO process to behave properly when there is any cropping (automatically or manually)\n\
                  during rendering.\n\
               </p> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";