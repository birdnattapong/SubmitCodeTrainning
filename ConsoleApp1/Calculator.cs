using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp1
{
    class Calculator
    {
        public double sale;
        public double pay;
        public Calculator()
        {
        }
        public Calculator(double sale, double pay)
        {
            this.sale = sale;
            this.pay = pay;
        }

        public void requestInput()
        {
            Console.WriteLine("Calculate change Demo");
            Console.WriteLine("=====================");
            Console.Write("Please ENTER Sale amount : ");
            var saleAmount = Console.ReadLine();
            Console.Write("Please ENTER Payment amount : ");
            var payAmount = Console.ReadLine();

            this.sale = Convert.ToDouble(saleAmount);
            this.pay = Convert.ToDouble(payAmount);
            calculateChange();
        }

        public void calculateChange()
        {
            double changed = this.pay-this.sale;
            Console.WriteLine("=====================");
            Console.WriteLine("Change : {0}", changed);

            var intChange = (int)changed;

            int[] cash = { 1000, 500, 100, 50, 20, 10, 5, 2, 1 };

            double[] numOfbank = new double[9];
            double remain = 0.00;

            for (int i=0; i< cash.Length; i++)
            {
                numOfbank[i] = intChange / cash[i];
                remain = intChange % cash[i];
                intChange = (int)remain;
            }
            
            for (int i = 0; i < cash.Length; i++)
            {
                if(cash[i] >= 20)
                {
                    Console.WriteLine("bank{0} : {1}", cash[i], numOfbank[i]);
                }else if(cash[i] < 20)
                {
                    Console.WriteLine("rean{0} : {1}", cash[i], numOfbank[i]);
                }
                
            }
        }
    }
}
