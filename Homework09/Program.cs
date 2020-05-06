using System;
using System.Runtime.ConstrainedExecution;

namespace Homework09
{
    class Program
    {
        static void Main(string[] args)
        {
            ListOfProduct list1 = new ListOfProduct();
            double total = 0.00;

            do
            {
                Console.WriteLine("==================================");
                Console.WriteLine("Product in your cart are");
                if (list1.cart.Count == 0)
                {
                    Console.WriteLine("none");
                }
                else
                {
                    for (int i = 0; i < list1.cart.Count; i++)
                    {
                        Console.WriteLine(String.Format(i + 1 + "." + list1.cart[i].Name + "\t" + "{0:0,0.00}", list1.cart[i].Price));
                    }
                }
                Console.WriteLine("---");

                Console.WriteLine(String.Format("Total amount: " + "{0:0,0.00}" + " baht", total));

                Console.Write("Please input a product key: ");
                string ans = Console.ReadLine();

                for (int i = 0; i < list1.products.Count; i++)
                {
                    if (list1.products[i].SKU == ans)
                    {
                        list1.AddProductToCart(list1.products[i]);
                        total = total + list1.cart[i].Price;
                    }
                }
                Console.WriteLine("==================================");
            } while (true);
        }
    }
}
