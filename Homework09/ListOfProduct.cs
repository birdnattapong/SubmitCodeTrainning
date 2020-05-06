using System;
using System.Collections.Generic;

namespace Homework09
{
    class ListOfProduct : IHomework09
    {
        public List<IProduct> products = new List<IProduct>();
        public List<IProduct> cart = new List<IProduct>();

        public ListOfProduct()
        {
            products.Add(new Product("p01", "iPad Pro 11-inch", 23900.00));
            products.Add(new Product("p02", "Apple Watch Series 4", 14400.00));
            products.Add(new Product("p03", "MacBook Pro with Touch Bar", 47900.00));
            products.Add(new Product("p04", "Apple TV 4K", 8500.00));
            products.Add(new Product("p05", "iPhone XS", 39900.00));
            products.Add(new Product("p06", "iPhone XS Max", 43900.00));
            products.Add(new Product("p07", "iPhone XR", 29900.00));
            products.Add(new Product("p08", "MacBook Air 13-inch", 42900.00));
            products.Add(new Product("p09", "Mac Mini 2018", 27900.00));
        }

        public void AddProductToCart(IProduct product)
        {
            cart.Add(product);
        }

        public IEnumerable<IProduct> GetAllProducts()
        {
            return this.products;
        }

        public IEnumerable<IProduct> GetProductsInCart()
        {
            return this.cart;
        }
    }
}
