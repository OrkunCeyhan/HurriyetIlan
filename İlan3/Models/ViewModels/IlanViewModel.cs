using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace İlan3.Models.ViewModels
{
    public class IlanViewModel
    {
        public List<City> Cities { get; set; }
        public List<Boyut> Boyutlar { get; set; }
        public List<IlanBaslıgı> IlanBaslıkları { get; set; }
    }
}