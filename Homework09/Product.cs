using System;

namespace Homework09
{
    class Product : IProduct
    {
        public Product()
        {
        }

        public Product(string SKU, string Name, double Price)
        {
            this.SKU = SKU;
            this.Name = Name;
            this.Price = Price;
        }

        public string SKU { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
    }
}
