using İlan3.Models;
using İlan3.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace İlan3.Controllers
{
    public class IlanController : Controller
    {
        // GET: Ilan
        public ActionResult VefatIlanVer()
        {
            IlanViewModel ilanView = new IlanViewModel();

            ilanView.Cities = new List<City>() {
                new City(){ id = 1, name="Adana"},
                new City(){ id = 2, name="Ankara"},
                new City(){ id = 3, name="Antalya"},
                new City(){ id = 4, name="Ege"},
                new City(){ id = 5, name="İstanbul"},
                new City(){ id = 6, name="Türkiye"},
            };

            ilanView.Boyutlar = new List<Boyut>() {
                new Boyut(){ id = 1, name="6,5 cm (2 st) x 5 cm", tutar=2040},
                new Boyut(){ id = 2, name="10 cm (3 st) x 6 cm", tutar=3672 },
                new Boyut(){ id = 4, name="10 cm (3 st) x 10 cm", tutar=6120},
                new Boyut(){ id = 5, name="13,5 cm (4 st) x 10 cm", tutar=10400},
                new Boyut(){ id = 6, name="13,5 cm (4 st) x 12,5 cm", tutar=13000},
                new Boyut(){ id = 7, name="13,5 cm x 25 cm Çeyrek", tutar=38500},
                new Boyut(){ id = 8, name="31 cm x 26 cm Yarım Sayfa", tutar=80028},
                new Boyut(){ id = 9, name="31 cm x 52,5 cm Tam Sayfa", tutar=141277},
            };
            ilanView.IlanBaslıkları = new List<IlanBaslıgı>
            {
                new IlanBaslıgı() {id = 0, name="İLAN BAŞLIĞI"},
                new IlanBaslıgı() {id = 1, name="VEFAT"},
                new IlanBaslıgı() {id = 2, name="BAŞSAĞLIĞI"},
                new IlanBaslıgı() {id = 3, name="ANMA"},
                new IlanBaslıgı() {id = 4, name="TEŞEKKÜR"},
                new IlanBaslıgı() {id = 5, name="DOKTORA TEŞEKKÜR"},
                new IlanBaslıgı() {id = 6, name="ACI KAYBIMIZ"},
                new IlanBaslıgı() {id = 7, name="DİĞER"},


            };

            return View(ilanView);
        }
    }
}