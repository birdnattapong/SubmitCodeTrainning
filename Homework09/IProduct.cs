using System;

namespace Homework09
{
    interface IProduct
    {
        string SKU { get; set; }
        string Name { get; set; }
        double Price { get; set; }
    }
}
