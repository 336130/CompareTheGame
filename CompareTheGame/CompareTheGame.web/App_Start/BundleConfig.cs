using System.IO;
using System.Web;
using System.Web.Hosting;
using System.Web.Optimization;

namespace CompareTheGame.web
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/External/jquery-{version}.js").WithLastModifiedToken());

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/External/jquery.validate*").WithLastModifiedToken());

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/External/modernizr-*").WithLastModifiedToken());

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/External/bootstrap.js").WithLastModifiedToken());

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/CSS/bootstrap.css",
                      "~/CSS/site.css").WithLastModifiedToken());
            
            bundles.Add(new Bundle("~/bundles/Angular").Include(
                "~/Scripts/Angular/Build/es2015-polyfills.*",
                "~/Scripts/Angular/Build/runtime.*",
                "~/Scripts/Angular/Build/polyfills.*",
                "~/Scripts/Angular/Build/vendor.*",
                "~/Scripts/Angular/Build/main.*",
                "~/Scripts/Angular/Build/styles.*"
                ).WithLastModifiedToken());
        }
    }

    internal static class BundleExtensions
    {
        public static Bundle WithLastModifiedToken(this Bundle sb)
        {
            sb.Transforms.Add(new LastModifiedBundleTransform());
            return sb;
        }

        public class LastModifiedBundleTransform : IBundleTransform
        {
            public void Process(BundleContext context, BundleResponse response)
            {
                foreach (BundleFile file in response.Files)
                {
                    string lastWrite = File.GetLastWriteTime(HostingEnvironment.MapPath(file.IncludedVirtualPath)).Ticks.ToString();
                    file.IncludedVirtualPath = string.Concat(file.IncludedVirtualPath, "?v=", lastWrite);
                }
            }
        }
    }
}
