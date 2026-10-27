function doGet(e) {
  // Serves the Index.html file when you open the web app URL
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle('GenZ CRM Live')
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0');
}

// Helper function to stitch the HTML/JS/CSS files together
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}