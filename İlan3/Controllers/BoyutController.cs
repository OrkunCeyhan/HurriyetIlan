using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace İlan3.Controllers
{
    public class BoyutController : Controller
    {
        // GET: Boyut
        public ActionResult Index()
        {
            var ilanBoyutList = new List<SelectListItem>
    {
        new SelectListItem { Text = "İlan Boyutu Seçiniz", Value = "0", Selected = true },
        new SelectListItem { Text = "6,5 cm (2 st) x 5 cm", Value = "2.040" },
        new SelectListItem { Text = "10 cm (3 st) x 6 cm", Value = "3.672" },
        new SelectListItem { Text = "10 cm (3 st) x 10 cm", Value = "6.120" },
        new SelectListItem { Text = "13,5 cm (4 st) x 10 cm", Value = "10.400" },
        new SelectListItem { Text = "13,5 cm (4 st) x 12,5 cm", Value = "13.000" },
        new SelectListItem { Text = "13,5 cm x 25 cm Çeyrek Sayfa", Value = "38.500" },
        new SelectListItem { Text = "31 cm x 26 cm Yarım Sayfa", Value = "80.028" },
        new SelectListItem { Text = "31 cm x 52,5 cm Tam Sayfa", Value = "141.277" }
    };

            ViewBag.IlanBoyutList = ilanBoyutList;

            return View();
        }
    }
}