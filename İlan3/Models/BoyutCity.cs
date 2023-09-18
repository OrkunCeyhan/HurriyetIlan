using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace İlan3.Models
{
    public class BoyutCity
    {
        public int id { get; set; }
        public int cityId { get; set; }
        public int boyutId { get; set; }
        public double tutar { get; set; }
    }
}