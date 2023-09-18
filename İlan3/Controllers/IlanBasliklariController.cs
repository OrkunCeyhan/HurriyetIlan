using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace İlan3.Controllers
{
    public class IlanBasliklariController : Controller
    {
        // GET: IlanBasliklari
        public ActionResult Index()
        {
            List<SelectListItem> ilanBasliklari = new List<SelectListItem>
    {
        new SelectListItem { Value = "0", Text = "İLAN BAŞLIĞI" },
        new SelectListItem { Value = "1", Text = "VEFAT" },
        new SelectListItem { Value = "2", Text = "BAŞSAĞLIĞI" },
        new SelectListItem { Value = "3", Text = "ANMA" },
        new SelectListItem { Value = "4", Text = "TEŞEKKÜR" },
        new SelectListItem { Value = "5", Text = "DOKTORA TEŞEKKÜR" },
        new SelectListItem { Value = "6", Text = "ACI KAYBIMIZ" },
        new SelectListItem { Value = "7", Text = "DİĞER" }
    };

            ViewBag.IlanBasliklari = ilanBasliklari;

            return View();
        }
    }
}